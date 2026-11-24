export interface PharmacyItem {
  id: string;
  name: string;
  address: string;
  lat: number;
  lon: number;
  distanceKm?: number;
  is24x7?: boolean;
}

export interface PlaceSuggestion {
  id: string;
  name: string;
  detail: string;
  type: 'campus' | 'locality' | 'city';
  lat: number;
  lon: number;
  searchTerms?: string[];
}

export interface SearchResultSummary {
  centerName?: string;
  centerCoords?: { lat: number; lon: number };
  items: PharmacyItem[];
}

// Helper to clean store name for robust deduplication
export function normalizeStoreName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\b(24x7|24 hours|pharmacy|chemist|medical store|medical|medicals|store|dawa khana|chemist shop)\b/gi, '')
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

// Deduplicate medical stores by GPS proximity (< 70m) or similar root name within 600m
export function deduplicateStores(stores: PharmacyItem[]): PharmacyItem[] {
  const unique: PharmacyItem[] = [];

  for (const store of stores) {
    const normName = normalizeStoreName(store.name);

    const existingIdx = unique.findIndex((u) => {
      const distBetween = calculateDistanceKm(u.lat, u.lon, store.lat, store.lon);
      const uNorm = normalizeStoreName(u.name);

      // Exactly same coordinates or virtually same GPS spot (< 70 meters)
      if (distBetween < 0.07) return true;

      // Same root name and very close (< 600 meters)
      if (normName && uNorm && (uNorm.includes(normName) || normName.includes(uNorm)) && distBetween < 0.6) {
        return true;
      }

      return false;
    });

    if (existingIdx === -1) {
      unique.push({ ...store });
    } else {
      // Merge best attributes
      if (store.is24x7) {
        unique[existingIdx].is24x7 = true;
      }
      if (store.address && store.address.length > unique[existingIdx].address.length) {
        unique[existingIdx].address = store.address;
      }
    }
  }

  return unique;
}
export function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10; // Rounded to 1 decimal place
}

// Normalize common Indian educational & geographic abbreviations and typos
export function normalizePlaceQuery(input: string): string {
  return input
    .toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\buni\b|\buniv\b/g, 'university')
    .replace(/\bclg\b/g, 'college')
    .replace(/\binst\b/g, 'institute')
    .replace(/\bmanglam\b/g, 'mangalam')
    .replace(/\bkr\b/g, 'k r')
    .trim();
}

// Directory of popular Indian universities, colleges, and regional hubs for instant typeahead
export const KNOWN_CAMPUSES_AND_HUBS: Array<{
  name: string;
  detail: string;
  type: 'campus' | 'locality' | 'city';
  aliases: string[];
  lat: number;
  lon: number;
  searchTerms: string[];
  verifiedStores?: PharmacyItem[];
}> = [
  {
    name: 'K.R. Mangalam University',
    detail: 'Sohna Road, Gurugram, Haryana',
    type: 'campus',
    aliases: [
      'kr mangalam university',
      'k.r manglam uni',
      'k.r. mangalam university',
      'kr manglam uni',
      'kr mangalam',
      'mangalam university',
      'manglam uni',
      'k r mangalam',
      'sohna university',
      'k.r manglam',
      'kr manglam'
    ],
    lat: 28.3241,
    lon: 77.0848,
    searchTerms: ['pharmacy Sohna', 'medical store Sohna', 'pharmacy Maruti Kunj'],
    verifiedStores: [
      {
        id: 'krmu-dd-pharmacy',
        name: 'DD Pharmacy (24x7)',
        address: 'Maruti Kunj Road, Maruti Kunj, Naya Gaon, Sohna, Gurugram, Haryana 122102',
        lat: 28.3610595,
        lon: 77.0828952,
        is24x7: true
      },
      {
        id: 'krmu-care-pharmacy',
        name: 'Care Pharmacy 24x7',
        address: 'Gali Number 13, Naya Gaon, Sohna, Gurugram, Haryana 122102',
        lat: 28.3688332,
        lon: 77.0779431,
        is24x7: true
      },
      {
        id: 'krmu-satwik-pharmacy',
        name: 'Satwik Pharmacy',
        address: 'Shani Enclave Road, Maruti Kunj, Naya Gaon, Sohna, Gurugram, Haryana 122102',
        lat: 28.3638564,
        lon: 77.0781402,
        is24x7: false
      },
      {
        id: 'krmu-pal-medical',
        name: 'Pal Medical Store',
        address: 'Maruti Kunj Road, Maruti Kunj, Naya Gaon, Sohna, Gurugram, Haryana 122102',
        lat: 28.362,
        lon: 77.081,
        is24x7: false
      },
      {
        id: 'krmu-shree-krishna',
        name: 'Shree Krishna Medical Store',
        address: 'Krishna Kunj Road, Maruti Kunj, Naya Gaon, Sohna, Gurugram, Haryana 122102',
        lat: 28.360,
        lon: 77.080,
        is24x7: false
      },
      {
        id: 'krmu-shree-tara',
        name: 'Shree Tara Pharmacy',
        address: 'Maruti Kunj Road, Maruti Kunj, Naya Gaon, Sohna, Gurugram, Haryana 122102',
        lat: 28.3610617,
        lon: 77.0752914,
        is24x7: false
      }
    ]
  },
  {
    name: 'G.D. Goenka University',
    detail: 'Sohna Road, Gurugram, Haryana',
    type: 'campus',
    aliases: ['gd goenka', 'gd goenka university', 'g d goenka'],
    lat: 28.2831,
    lon: 77.0732,
    searchTerms: ['pharmacy Sohna', 'medical store Sohna']
  },
  {
    name: 'Amity University',
    detail: 'Sector 125, Noida, Uttar Pradesh',
    type: 'campus',
    aliases: ['amity', 'amity university', 'amity noida'],
    lat: 28.5445,
    lon: 77.3331,
    searchTerms: ['pharmacy Sector 125 Noida', 'medical store Noida Sector 126']
  },
  {
    name: 'University of Delhi (North Campus)',
    detail: 'Vishwavidyalaya, New Delhi',
    type: 'campus',
    aliases: ['du north campus', 'delhi university', 'vishwavidyalaya', 'du'],
    lat: 28.6892,
    lon: 77.2091,
    searchTerms: ['pharmacy Kamla Nagar Delhi', 'medical store Vishwavidyalaya']
  },
  {
    name: 'University of Delhi (South Campus)',
    detail: 'Benito Juarez Marg, Dhaula Kuan, New Delhi',
    type: 'campus',
    aliases: ['du south campus', 'south campus du', 'dhaula kuan du'],
    lat: 28.5855,
    lon: 77.1632,
    searchTerms: ['pharmacy Satya Niketan', 'medical store Moti Bagh']
  },
  {
    name: 'IIT Delhi',
    detail: 'Hauz Khas, New Delhi',
    type: 'campus',
    aliases: ['iit delhi', 'iit d', 'iit hauz khas'],
    lat: 28.5450,
    lon: 77.1926,
    searchTerms: ['pharmacy Hauz Khas', 'medical store Ber Sarai']
  },
  {
    name: 'Jawaharlal Nehru University (JNU)',
    detail: 'New Mehrauli Road, New Delhi',
    type: 'campus',
    aliases: ['jnu', 'jawaharlal nehru university'],
    lat: 28.5401,
    lon: 77.1664,
    searchTerms: ['pharmacy Munirka', 'medical store Ber Sarai']
  },
  {
    name: 'Jamia Millia Islamia',
    detail: 'Jamia Nagar, Okhla, New Delhi',
    type: 'campus',
    aliases: ['jamia', 'jamia millia islamia', 'jmi'],
    lat: 28.5616,
    lon: 77.2802,
    searchTerms: ['pharmacy Jamia Nagar', 'medical store Batla House']
  },
  {
    name: 'Sharda University',
    detail: 'Knowledge Park III, Greater Noida, UP',
    type: 'campus',
    aliases: ['sharda', 'sharda university'],
    lat: 28.4731,
    lon: 77.4820,
    searchTerms: ['pharmacy Knowledge Park Greater Noida', 'medical store Greater Noida']
  },
  {
    name: 'Galgotias University',
    detail: 'Yamuna Expressway, Greater Noida, UP',
    type: 'campus',
    aliases: ['galgotias', 'galgotias university'],
    lat: 28.3615,
    lon: 77.5402,
    searchTerms: ['pharmacy Dankaur', 'medical store Greater Noida']
  },
  {
    name: 'Ashoka University',
    detail: 'Rajiv Gandhi Education City, Sonipat, Haryana',
    type: 'campus',
    aliases: ['ashoka', 'ashoka university', 'ashoka sonipat'],
    lat: 28.9501,
    lon: 77.1002,
    searchTerms: ['pharmacy Rai Sonipat', 'medical store Kundli']
  },
  {
    name: 'Sohna Road, Gurugram',
    detail: 'Gurugram, Haryana',
    type: 'locality',
    aliases: ['sohna road', 'sohna', 'sohna gurgaon', 'sohna gurugram'],
    lat: 28.3241,
    lon: 77.0848,
    searchTerms: ['pharmacy Sohna', 'medical store Sohna']
  },
  {
    name: 'Cyber City, Gurugram',
    detail: 'DLF Phase 2, Gurugram, Haryana',
    type: 'locality',
    aliases: ['cyber city', 'dlf cyber city', 'cyber hub'],
    lat: 28.4952,
    lon: 77.0891,
    searchTerms: ['pharmacy DLF Phase 2 Gurugram', 'medical store Sikanderpur']
  },
  {
    name: 'Koramangala, Bengaluru',
    detail: 'Bengaluru, Karnataka',
    type: 'locality',
    aliases: ['koramangala', 'koramangala bangalore'],
    lat: 12.9352,
    lon: 77.6245,
    searchTerms: ['pharmacy Koramangala', 'medical store Koramangala']
  },
  {
    name: 'Connaught Place, New Delhi',
    detail: 'Central Delhi, New Delhi',
    type: 'locality',
    aliases: ['cp', 'connaught place', 'connaught place delhi'],
    lat: 28.6315,
    lon: 77.2167,
    searchTerms: ['pharmacy Connaught Place', 'medical store Janpath']
  }
];

// 1. Get instant typeahead suggestions for user input
export async function getPlaceSuggestions(input: string): Promise<PlaceSuggestion[]> {
  const trimmed = input.trim();
  if (trimmed.length < 2) return [];

  const normalized = normalizePlaceQuery(trimmed);
  const matchedFromDirectory: PlaceSuggestion[] = [];

  // Match known local directory first
  for (const item of KNOWN_CAMPUSES_AND_HUBS) {
    const isMatch = item.aliases.some(
      (alias) =>
        alias.includes(normalized) ||
        normalized.includes(alias) ||
        alias.replace(/\s+/g, '').includes(normalized.replace(/\s+/g, ''))
    );
    if (isMatch) {
      matchedFromDirectory.push({
        id: `campus-${item.name}`,
        name: item.name,
        detail: item.detail,
        type: item.type,
        lat: item.lat,
        lon: item.lon,
        searchTerms: item.searchTerms
      });
    }
  }

  // If already found strong directory matches, return them immediately
  if (matchedFromDirectory.length >= 3) {
    return matchedFromDirectory.slice(0, 5);
  }

  // Also query Photon API for broad, typo-tolerant search prioritizing India
  try {
    const photonUrl = `https://photon.komoot.io/api/?q=${encodeURIComponent(
      normalized
    )}&limit=10`;
    const res = await fetch(photonUrl);
    if (res.ok) {
      const data = await res.json();
      const photonSuggestions: PlaceSuggestion[] = (data.features || [])
        .filter((f: any) => {
          const country = f.properties?.country;
          const countryCode = f.properties?.countrycode;
          return country === 'India' || countryCode === 'IN' || !country;
        })
        .map((f: any, idx: number) => {
          const props = f.properties;
          const coords = f.geometry?.coordinates;
          const parts = [props.city || props.district, props.state, props.country].filter(Boolean);
          return {
            id: `photon-${props.osm_id || idx}`,
            name: props.name || props.street || 'Location',
            detail: parts.join(', ') || 'India',
            type: 'locality' as const,
            lat: coords ? coords[1] : 0,
            lon: coords ? coords[0] : 0
          };
        })
        .filter((s: PlaceSuggestion) => s.lat !== 0 && s.lon !== 0);

      // Merge and deduplicate
      const seen = new Set(matchedFromDirectory.map((m) => m.name.toLowerCase()));
      for (const ps of photonSuggestions) {
        if (!seen.has(ps.name.toLowerCase())) {
          seen.add(ps.name.toLowerCase());
          matchedFromDirectory.push(ps);
        }
      }
    }
  } catch {
    // If Photon is unreachable, fallback cleanly to directory matches
  }

  return matchedFromDirectory.slice(0, 6);
}

// 2. Search pharmacies around a locality, campus name, or coordinates
export async function searchPharmaciesByLocality(
  query: string,
  preferredCoords?: { lat: number; lon: number }
): Promise<SearchResultSummary> {
  const trimmed = query.trim();
  if (!trimmed && !preferredCoords) return { items: [] };

  const normalized = normalizePlaceQuery(trimmed);

  // Check if it's a known campus or hub
  const known = KNOWN_CAMPUSES_AND_HUBS.find((item) =>
    item.aliases.some(
      (alias) =>
        alias.includes(normalized) ||
        normalized.includes(alias) ||
        alias.replace(/\s+/g, '').includes(normalized.replace(/\s+/g, ''))
    )
  );

  let centerLat: number | undefined = preferredCoords?.lat || known?.lat;
  let centerLon: number | undefined = preferredCoords?.lon || known?.lon;
  let centerName = known ? `${known.name} (${known.detail})` : trimmed;

  // If coordinates unknown, geocode the location
  if (centerLat === undefined || centerLon === undefined) {
    try {
      const geoUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        normalized
      )}&format=json&limit=1&countrycodes=in`;
      const geoRes = await fetch(geoUrl, {
        headers: { Accept: 'application/json' }
      });
      if (geoRes.ok) {
        const geoData = await geoRes.json();
        if (geoData.length > 0) {
          centerLat = parseFloat(geoData[0].lat);
          centerLon = parseFloat(geoData[0].lon);
          centerName = geoData[0].display_name.split(',').slice(0, 3).join(', ');
        }
      }
    } catch {
      // Continue with text searches
    }
  }

  // Construct search terms
  const searchQueries: string[] = [];
  if (known?.searchTerms) {
    searchQueries.push(...known.searchTerms);
  } else {
    searchQueries.push(`medical store in ${trimmed}`);
    searchQueries.push(`pharmacy in ${trimmed}`);
    searchQueries.push(`chemist in ${trimmed}`);
  }

  const results: PharmacyItem[] = [];
  const seenPlaceIds = new Set<string>();

  // If campus has verified stores, seed them immediately with computed distance
  if (known?.verifiedStores && centerLat !== undefined && centerLon !== undefined) {
    for (const vs of known.verifiedStores) {
      seenPlaceIds.add(vs.id);
      const dist = calculateDistanceKm(centerLat, centerLon, vs.lat, vs.lon);
      results.push({
        ...vs,
        distanceKm: dist
      });
    }
  }

  // Fetch results from multiple queries to guarantee comprehensive medical store coverage
  for (const q of searchQueries) {
    try {
      const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        q
      )}&format=json&limit=6&addressdetails=1&countrycodes=in`;
      const response = await fetch(url, {
        headers: { Accept: 'application/json' }
      });
      if (response.ok) {
        const data = await response.json();
        for (const item of data) {
          const id = String(item.place_id || item.osm_id);
          if (!seenPlaceIds.has(id)) {
            seenPlaceIds.add(id);
            const pLat = parseFloat(item.lat);
            const pLon = parseFloat(item.lon);
            const rawName =
              item.name || (item.display_name ? item.display_name.split(',')[0] : 'Medical Store');
            const dist =
              centerLat !== undefined && centerLon !== undefined
                ? calculateDistanceKm(centerLat, centerLon, pLat, pLon)
                : undefined;
            const is24x7 = /24x7|24\s*hours|day\s*and\s*night/i.test(item.display_name);

            results.push({
              id,
              name: rawName,
              address: item.display_name || 'Address available on map',
              lat: pLat,
              lon: pLon,
              distanceKm: dist,
              is24x7
            });
          }
        }
      }
    } catch {
      // Continue to next query
    }
  }

  // Also query bounding box around coordinates if center is known
  if (centerLat !== undefined && centerLon !== undefined && results.length < 5) {
    const delta = 0.08; // ~8km box
    const viewbox = `${centerLon - delta},${centerLat + delta},${centerLon + delta},${centerLat - delta}`;
    const boxQueries = ['medical store', 'pharmacy'];

    for (const bq of boxQueries) {
      try {
        const boxUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          bq
        )}&format=json&viewbox=${viewbox}&bounded=1&limit=6&countrycodes=in`;
        const bRes = await fetch(boxUrl, { headers: { Accept: 'application/json' } });
        if (bRes.ok) {
          const bData = await bRes.json();
          for (const item of bData) {
            const id = String(item.place_id || item.osm_id);
            if (!seenPlaceIds.has(id)) {
              seenPlaceIds.add(id);
              const pLat = parseFloat(item.lat);
              const pLon = parseFloat(item.lon);
              const rawName =
                item.name || (item.display_name ? item.display_name.split(',')[0] : 'Medical Store');
              const dist = calculateDistanceKm(centerLat, centerLon, pLat, pLon);
              const is24x7 = /24x7|24\s*hours|day\s*and\s*night/i.test(item.display_name);

              results.push({
                id,
                name: rawName,
                address: item.display_name || 'Address available on map',
                lat: pLat,
                lon: pLon,
                distanceKm: dist,
                is24x7
              });
            }
          }
        }
      } catch {
        // Continue
      }
    }
  }

  // Deduplicate stores strictly so each physical store/stall only appears once
  const dedupedResults = deduplicateStores(results);

  // Sort by shortest distance
  dedupedResults.sort((a, b) => (a.distanceKm ?? 999) - (b.distanceKm ?? 999));

  return {
    centerName,
    centerCoords:
      centerLat !== undefined && centerLon !== undefined
        ? { lat: centerLat, lon: centerLon }
        : undefined,
    items: dedupedResults
  };
}

// 3. Search pharmacies around GPS Coordinates
export async function searchPharmaciesNearCoords(
  lat: number,
  lon: number
): Promise<PharmacyItem[]> {
  const delta = 0.06; // Roughly 6-7km bounding box
  const viewbox = `${lon - delta},${lat + delta},${lon + delta},${lat - delta}`;
  const queries = ['medical store', 'pharmacy', 'chemist'];

  const results: PharmacyItem[] = [];
  const seenPlaceIds = new Set<string>();

  for (const q of queries) {
    try {
      const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        q
      )}&format=json&viewbox=${viewbox}&bounded=1&limit=6&addressdetails=1&countrycodes=in`;
      const response = await fetch(url, {
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        const data = await response.json();
        for (const item of data) {
          const id = String(item.place_id || item.osm_id);
          if (!seenPlaceIds.has(id)) {
            seenPlaceIds.add(id);
            const pLat = parseFloat(item.lat);
            const pLon = parseFloat(item.lon);
            const rawName =
              item.name || (item.display_name ? item.display_name.split(',')[0] : 'Medical Store');
            const dist = calculateDistanceKm(lat, lon, pLat, pLon);
            const is24x7 = /24x7|24\s*hours|day\s*and\s*night/i.test(item.display_name);

            results.push({
              id,
              name: rawName,
              address: item.display_name || 'Address available on map',
              lat: pLat,
              lon: pLon,
              distanceKm: dist,
              is24x7
            });
          }
        }
      }
    } catch {
      // Continue
    }
  }

  const dedupedResults = deduplicateStores(results);
  return dedupedResults.sort((a, b) => (a.distanceKm ?? 999) - (b.distanceKm ?? 999));
}

export interface PharmacyItem {
  id: string;
  name: string;
  address: string;
  lat: number;
  lon: number;
  distanceKm?: number;
}

// Calculate distance between two lat/lon coordinates using Haversine formula
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

// 1. Search pharmacies by text query (locality, city, pincode)
export async function searchPharmaciesByLocality(query: string): Promise<PharmacyItem[]> {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const url = `https://nominatim.openstreetmap.org/search?q=pharmacy+in+${encodeURIComponent(
    trimmed
  )}&format=json&limit=8&addressdetails=1`;

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch from OpenStreetMap');
  }

  const data = await response.json();

  return data.map((item: any) => {
    const rawName = item.name || (item.display_name ? item.display_name.split(',')[0] : 'Pharmacy');
    return {
      id: String(item.place_id || Math.random()),
      name: rawName,
      address: item.display_name || 'Address available on map',
      lat: parseFloat(item.lat),
      lon: parseFloat(item.lon),
    };
  });
}

// 2. Search pharmacies around GPS Coordinates
export async function searchPharmaciesNearCoords(
  lat: number,
  lon: number
): Promise<PharmacyItem[]> {
  const delta = 0.05; // Roughly 5km bounding box
  const viewbox = `${lon - delta},${lat + delta},${lon + delta},${lat - delta}`;
  const url = `https://nominatim.openstreetmap.org/search?q=pharmacy&format=json&viewbox=${viewbox}&bounded=1&limit=8&addressdetails=1`;

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch from OpenStreetMap');
  }

  const data = await response.json();

  return data
    .map((item: any) => {
      const pLat = parseFloat(item.lat);
      const pLon = parseFloat(item.lon);
      const rawName = item.name || (item.display_name ? item.display_name.split(',')[0] : 'Pharmacy');
      const dist = calculateDistanceKm(lat, lon, pLat, pLon);

      return {
        id: String(item.place_id || Math.random()),
        name: rawName,
        address: item.display_name || 'Address available on map',
        lat: pLat,
        lon: pLon,
        distanceKm: dist,
      };
    })
    .sort((a: PharmacyItem, b: PharmacyItem) => (a.distanceKm ?? 999) - (b.distanceKm ?? 999));
}

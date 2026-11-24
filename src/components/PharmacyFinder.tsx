import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Loader2, 
  AlertCircle, 
  Store, 
  ChevronRight,
  GraduationCap,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { 
  searchPharmaciesByLocality, 
  searchPharmaciesNearCoords, 
  getPlaceSuggestions,
  type PharmacyItem,
  type PlaceSuggestion
} from '../lib/pharmacyService';

export const PharmacyFinder: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [pharmacies, setPharmacies] = useState<PharmacyItem[]>([]);
  const [searched, setSearched] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [resolvedCenterName, setResolvedCenterName] = useState<string | null>(null);
  
  // Suggestions state
  const [suggestions, setSuggestions] = useState<PlaceSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fetch suggestions with debounce as user types
  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const results = await getPlaceSuggestions(trimmed);
        setSuggestions(results);
        setShowSuggestions(results.length > 0);
        setSelectedIndex(-1);
      } catch {
        setSuggestions([]);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [query]);

  // Search by text query or selected place
  const handleSearch = async (searchQuery: string = query, coords?: { lat: number; lon: number }, displayName?: string) => {
    const trimmed = searchQuery.trim();
    if (!trimmed) return;

    setShowSuggestions(false);
    setLoading(true);
    setErrorMsg(null);
    setSearched(true);
    if (displayName) {
      setResolvedCenterName(displayName);
    }

    try {
      const summary = await searchPharmaciesByLocality(trimmed, coords);
      setPharmacies(summary.items);
      setResolvedCenterName(summary.centerName || displayName || trimmed);

      if (summary.items.length === 0) {
        setErrorMsg(`No pharmacies found directly matching "${trimmed}". Try searching your broader city or town name.`);
      }
    } catch {
      setErrorMsg('Could not fetch nearby stores. Please check your internet connection or try again.');
    } finally {
      setLoading(false);
    }
  };

  // Search using user's real GPS location
  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      setErrorMsg('Geolocation is not supported by your current browser.');
      return;
    }

    setShowSuggestions(false);
    setLoading(true);
    setErrorMsg(null);
    setSearched(true);
    setResolvedCenterName('your live GPS location');

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        try {
          const results = await searchPharmaciesNearCoords(lat, lon);
          setPharmacies(results);
          if (results.length === 0) {
            setErrorMsg('No pharmacies listed in OpenStreetMap within a 6km radius of your exact GPS coordinates.');
          }
        } catch {
          setErrorMsg('Failed to fetch stores for your location. Please try searching by your city name.');
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setLoading(false);
        if (err.code === err.PERMISSION_DENIED) {
          setErrorMsg('Location permission was denied. You can still type your campus, area, or city name in the search box.');
        } else {
          setErrorMsg('Unable to retrieve your location. Please type your city or campus name instead.');
        }
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  // Keyboard navigation for suggestions
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
        e.preventDefault();
        const selected = suggestions[selectedIndex];
        setQuery(selected.name);
        handleSearch(selected.name, { lat: selected.lat, lon: selected.lon }, `${selected.name} (${selected.detail})`);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl glass-card border border-petal p-6 sm:p-10 shadow-soft-pink relative overflow-hidden">
        {/* Subtle decorative background gradient */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-petal/30 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-petal/60 text-raspberry font-bold text-xs mb-3 shadow-2xs">
            <Store className="w-3.5 h-3.5" />
            <span>Community Care Finder · 100% Free & Private</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-plum tracking-tight">
            Find Nearby Medical Stores & Period Care
          </h2>
          <p className="text-xs sm:text-sm text-orchid mt-2">
            Locate chemists, 24/7 pharmacies, and essential sanitary supplies near your university campus, hostel, or neighborhood.
          </p>
        </div>

        {/* Search Bar + Geolocation Button + Autocomplete Dropdown */}
        <div className="max-w-xl mx-auto space-y-3 mb-6 relative" ref={searchContainerRef}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-plum/40" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => {
                  if (suggestions.length > 0) setShowSuggestions(true);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search campus, university, locality or city (e.g. K.R. Mangalam Uni)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/90 text-xs sm:text-sm text-plum border border-petal focus:outline-none focus:border-raspberry shadow-xs transition-colors"
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="px-5 py-2.5 rounded-xl bg-raspberry text-white font-bold text-xs sm:text-sm shadow-soft-pink hover:bg-raspberry-dark transition-all disabled:opacity-50 shrink-0 flex items-center justify-center gap-1.5"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Searching…</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleUseLocation}
              disabled={loading}
              className="px-4 py-2.5 rounded-xl glass-card border border-petal hover:border-violet text-plum font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 shrink-0"
              title="Use current GPS location"
            >
              <MapPin className="w-4 h-4 text-violet" />
              <span>Near Me</span>
            </button>
          </form>

          {/* Autocomplete Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl border border-petal shadow-xl overflow-hidden z-50 py-1.5 max-h-64 overflow-y-auto">
              <div className="px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-orchid/80 border-b border-petal/40 flex items-center justify-between">
                <span>Suggested Places</span>
                <span className="text-[9px] font-normal lowercase">click or press enter</span>
              </div>
              {suggestions.map((item, index) => {
                const isSelected = index === selectedIndex;
                const isCampus = item.type === 'campus';

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setQuery(item.name);
                      handleSearch(item.name, { lat: item.lat, lon: item.lon }, `${item.name} (${item.detail})`);
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full text-left px-3.5 py-2 flex items-start gap-2.5 transition-colors ${
                      isSelected ? 'bg-petal/40 text-raspberry' : 'hover:bg-lavender/40 text-plum'
                    }`}
                  >
                    <span className="mt-0.5 p-1 rounded-md bg-lavender/60 text-violet shrink-0 text-xs">
                      {isCampus ? <GraduationCap className="w-3.5 h-3.5" /> : <Building2 className="w-3.5 h-3.5" />}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold truncate flex items-center gap-1.5">
                        <span>{item.name}</span>
                        {isCampus && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded-sm bg-petal/50 text-raspberry font-semibold">
                            Campus
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-orchid truncate">{item.detail}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Resolved Location Banner */}
        {resolvedCenterName && pharmacies.length > 0 && (
          <div className="max-w-xl mx-auto mb-4 p-2.5 rounded-xl bg-petal/40 border border-petal/70 text-xs text-plum flex items-center justify-between gap-2 shadow-2xs">
            <div className="flex items-center gap-2 truncate">
              <CheckCircle2 className="w-4 h-4 text-raspberry shrink-0" />
              <span className="truncate">
                Showing nearest stores around <strong>{resolvedCenterName}</strong>
              </span>
            </div>
            <a
              href={`https://www.google.com/maps/search/medical+store+near+${encodeURIComponent(resolvedCenterName)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-raspberry font-bold hover:underline shrink-0 flex items-center gap-1"
            >
              <span>Full Map</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}

        {/* Error / Information Message */}
        {errorMsg && (
          <div className="max-w-xl mx-auto p-4 rounded-2xl bg-coral/10 border border-coral/30 text-coral-dark text-xs flex items-start gap-2.5 mb-6">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p>{errorMsg}</p>
              <p className="mt-1 text-[11px] opacity-80">
                You can also open{' '}
                <a
                  href={`https://www.google.com/maps/search/pharmacy+near+${encodeURIComponent(query || 'me')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline hover:text-raspberry"
                >
                  direct Google Maps search
                </a>{' '}
                with zero restrictions.
              </p>
            </div>
          </div>
        )}

        {/* Live Pharmacy Cards Grid */}
        {pharmacies.length > 0 && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between text-xs text-orchid px-1">
              <span className="font-bold text-plum">
                Found {pharmacies.length} verified medical stores nearby:
              </span>
              <span>Sorted by closest distance</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pharmacies.map((item) => {
                const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${item.lat},${item.lon}`;
                const osmUrl = `https://www.openstreetmap.org/?mlat=${item.lat}&mlon=${item.lon}#map=17/${item.lat}/${item.lon}`;

                return (
                  <div
                    key={`${item.id}-${item.lat}-${item.lon}`}
                    className="p-4 rounded-2xl bg-white/90 border border-petal hover:border-raspberry hover:shadow-soft-pink transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Name, Distance & 24/7 Badge */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-md bg-petal/60 text-raspberry flex items-center justify-center shrink-0 text-sm">
                            💊
                          </span>
                          <div>
                            <h3 className="font-serif font-bold text-sm text-plum line-clamp-1">
                              {item.name}
                            </h3>
                            {item.is24x7 && (
                              <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 font-bold">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                24/7 Open
                              </span>
                            )}
                          </div>
                        </div>

                        {item.distanceKm !== undefined && (
                          <span className="px-2 py-0.5 rounded-md bg-lavender text-violet font-bold text-[10px] shrink-0 flex items-center gap-1 shadow-2xs">
                            <Navigation className="w-2.5 h-2.5" />
                            {item.distanceKm} km
                          </span>
                        )}
                      </div>

                      {/* Address */}
                      <p className="text-xs text-plum/70 line-clamp-2 leading-relaxed ml-9 mb-3">
                        {item.address}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-3 border-t border-petal/40 flex items-center justify-between text-xs">
                      <a
                        href={osmUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-orchid hover:text-raspberry transition-colors flex items-center gap-1"
                      >
                        <span>View map</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-md bg-raspberry text-white hover:bg-raspberry-dark transition-colors font-bold text-xs flex items-center gap-1 shadow-xs"
                      >
                        <span>Directions</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Empty state hint */}
        {!searched && (
          <div className="mt-4 p-4 rounded-xl bg-lavender/40 border border-petal/40 text-center text-xs text-plum/80 leading-relaxed">
            <strong className="text-plum font-bold">Find your nearest medical store & get your hygiene products quickly.</strong> Search your university campus, neighborhood, or tap <strong className="text-raspberry">"Near Me"</strong> for instant directions to open chemists nearby.
          </div>
        )}
      </div>
    </section>
  );
};

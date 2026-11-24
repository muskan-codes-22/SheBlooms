import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Loader2, 
  AlertCircle, 
  Store, 
  Clock, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { 
  searchPharmaciesByLocality, 
  searchPharmaciesNearCoords, 
  type PharmacyItem 
} from '../lib/pharmacyService';

export const PharmacyFinder: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [pharmacies, setPharmacies] = useState<PharmacyItem[]>([]);
  const [searched, setSearched] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [userCoords, setUserCoords] = useState<{ lat: number; lon: number } | null>(null);

  // Search by text query (Area, City, Pincode)
  const handleSearch = async (searchQuery: string = query) => {
    const trimmed = searchQuery.trim();
    if (!trimmed) return;

    setLoading(true);
    setErrorMsg(null);
    setSearched(true);

    try {
      const results = await searchPharmaciesByLocality(trimmed);
      setPharmacies(results);
      if (results.length === 0) {
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

    setLoading(true);
    setErrorMsg(null);
    setSearched(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        setUserCoords({ lat, lon });

        try {
          const results = await searchPharmaciesNearCoords(lat, lon);
          setPharmacies(results);
          if (results.length === 0) {
            setErrorMsg('No pharmacies listed in OpenStreetMap within a 5km radius of your exact GPS coordinates.');
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
          setErrorMsg('Location permission was denied. You can still type your area or city name in the search box.');
        } else {
          setErrorMsg('Unable to retrieve your location. Please type your city name instead.');
        }
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  return (
    <section className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl glass-card border border-petal p-6 sm:p-10 shadow-soft-pink relative overflow-hidden">
        {/* Subtle decorative background gradient */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-petal/30 dark:bg-pink-950/20 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-petal/60 dark:bg-pink-950/60 text-raspberry font-bold text-xs mb-3">
            <Store className="w-3.5 h-3.5" />
            <span>Community Care Finder · 100% Free & Private</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-plum dark:text-pink-100 tracking-tight">
            Find Nearby Pharmacies & Period Care
          </h2>
          <p className="text-xs sm:text-sm text-orchid dark:text-pink-300 mt-2">
            Locate chemists, medical stores, and essential hygiene supplies near you in seconds. Powered by OpenStreetMap community data.
          </p>
        </div>

        {/* Search Bar + Geolocation Button */}
        <div className="max-w-xl mx-auto space-y-3 mb-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-plum/40 dark:text-pink-300/40" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter locality, area, city, or pincode..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/90 dark:bg-plum-deep text-xs sm:text-sm text-plum dark:text-pink-100 border border-petal focus:outline-none focus:border-raspberry shadow-xs transition-colors"
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
              className="px-4 py-2.5 rounded-xl glass-card border border-petal hover:border-violet text-plum dark:text-pink-100 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 shrink-0"
              title="Use current GPS location"
            >
              <MapPin className="w-4 h-4 text-violet" />
              <span>Near Me</span>
            </button>
          </form>

          {/* Quick Filter & Intent Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="text-[11px] text-orchid dark:text-pink-300 font-medium">Quick searches:</span>
            
            <a
              href="https://www.google.com/maps/search/24+hour+pharmacy+near+me/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-white/70 dark:bg-plum-night text-[11px] font-semibold text-plum/80 dark:text-pink-200 border border-petal hover:border-raspberry flex items-center gap-1 transition-colors"
            >
              <Clock className="w-3 h-3 text-marigold" />
              <span>24/7 Pharmacies</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>

            <a
              href="https://www.google.com/maps/search/sanitary+pads+period+products+near+me/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-white/70 dark:bg-plum-night text-[11px] font-semibold text-plum/80 dark:text-pink-200 border border-petal hover:border-raspberry flex items-center gap-1 transition-colors"
            >
              <Sparkles className="w-3 h-3 text-raspberry" />
              <span>Pads & Hygiene Stores</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
          </div>
        </div>

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
                  direct map search
                </a>{' '}
                with zero API constraints.
              </p>
            </div>
          </div>
        )}

        {/* Live Pharmacy Cards Grid */}
        {pharmacies.length > 0 && (
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between text-xs text-orchid dark:text-pink-300 px-1">
              <span className="font-bold text-plum dark:text-pink-100">
                Found {pharmacies.length} nearby medical stores:
              </span>
              <span>OpenStreetMap verified</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pharmacies.map((item) => {
                const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${item.lat},${item.lon}`;
                const osmUrl = `https://www.openstreetmap.org/?mlat=${item.lat}&mlon=${item.lon}#map=17/${item.lat}/${item.lon}`;

                return (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-white/80 dark:bg-plum-deep border border-petal/80 hover:border-raspberry hover:shadow-soft-pink transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Name & Distance */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-petal/60 text-raspberry flex items-center justify-center shrink-0 text-sm">
                            💊
                          </span>
                          <h3 className="font-serif font-bold text-sm text-plum dark:text-pink-100 line-clamp-1">
                            {item.name}
                          </h3>
                        </div>

                        {item.distanceKm !== undefined && (
                          <span className="px-2 py-0.5 rounded-md bg-lavender text-violet dark:bg-pink-950 dark:text-pink-300 font-bold text-[10px] shrink-0 flex items-center gap-1">
                            <Navigation className="w-2.5 h-2.5" />
                            {item.distanceKm} km
                          </span>
                        )}
                      </div>

                      {/* Address */}
                      <p className="text-xs text-plum/70 dark:text-pink-300/80 line-clamp-2 leading-relaxed ml-9 mb-3">
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
                        className="px-3 py-1.5 rounded-lg bg-raspberry text-white hover:bg-raspberry-dark transition-colors font-bold text-xs flex items-center gap-1 shadow-xs"
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
          <div className="mt-4 p-4 rounded-2xl bg-lavender/30 dark:bg-plum-night/50 border border-petal/40 text-center text-xs text-plum/70 dark:text-pink-200">
            💡 <em>Tip: Tap <strong>"Near Me"</strong> to discover chemists within walking distance, or type your neighborhood name.</em>
          </div>
        )}
      </div>
    </section>
  );
};

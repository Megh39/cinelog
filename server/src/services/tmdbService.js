import dns from 'dns';

// CRITICAL: Force IPv4 - Jio Fiber IPv6 routing is broken for TMDB
dns.setDefaultResultOrder('ipv4first');

// Override the lookup to filter out IPv6 completely
const originalLookup = dns.lookup;
dns.lookup = (hostname, options, callback) => {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }
  
  // Force family to 4 (IPv4 only)
  options = { ...options, family: 4 };
  
  return originalLookup(hostname, options, callback);
};

const BASE_URL = "https://api.themoviedb.org/3";

export const searchMoviesTMDB = async (query) => {
  const url = `${BASE_URL}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(query)}`;
  
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`TMDB API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timeout - check your network connection');
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
};

export const getMovieDetailsTMDB = async (tmdbId) => {
  const url = `${BASE_URL}/movie/${tmdbId}?api_key=${process.env.TMDB_API_KEY}`;
  
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`TMDB API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timeout - check your network connection');
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
};
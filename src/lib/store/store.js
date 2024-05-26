import { create } from 'zustand';
export const useStore = create((set) => ({
  defaultValues: {
    region: 'Australia',
    filter1: [{ category: 'Country', filter: 'Australia' }],
    category: '',
    country: '',
    currentMiddleCategory: '',
    searchJobQuery: {},
    q: '',
    l: '',
    lon: 0,
    lat: 0,
  },
  reset: () => set((state) => ({ ...state.defaultValues })),
  region: 'Australia',
  setRegion: (region) => set({ region }),
  filter1: [{ category: 'Country', filter: 'Australia' }],
  setFilter1: (filter1) => set({ filter1 }),
  category: '',
  setCategory: (category) => set({ category }),
  country: '',
  setCountry: (country) => set({ country }),
  currentMiddleCategory: '',
  setCurrentMiddleCategory: (currentMiddleCategory) => set({ currentMiddleCategory }),
  searchJobQuery: {},
  setSearchJobQuery: (query) => set((state) => ({ searchJobQuery: { ...state.searchJobQuery, ...query } })),
  q: '',
  setQ: (q) => set({ q }),

  l: '',
  setL: (l) => set({ l }),

  lon: 0,
  setLon: (lon) => set({ lon }),

  lat: 0,
  setLat: (lat) => set({ lat }),
}));

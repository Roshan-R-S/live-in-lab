export interface SearchSlice {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const createSearchSlice = (set: any): SearchSlice => ({
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
});
import { defineStore } from 'pinia'

import ShowsApi from '@/api/shows';
import { formatShows, mapShowsByGenre } from '@/utils';
import { GENRES } from '@/constants';

export const useStore = defineStore('main', {
  state: () => ({
    homeSelection: null,
    results: [],
    loading: {
      sections: false,
      results: false,
      details: false
    }
  }),
  getters: {
    getHomeSelection: (state) => state.homeSelection,
    getSearchResults: (state) => state.results,
    areSectionsLoading: (state) => state.loading.home,
    areResultsLoading: (state) => state.loading.results,
    areDetailsLoading: (state) => state.loading.details,
  },
  actions: {
    async generateHomeSelection() {
      this.loading.sections = true;
      
      const { data } = await ShowsApi.getAll();
      const shows = formatShows(data);
      const byGenre = mapShowsByGenre(shows, GENRES);

      this.homeSelection = byGenre;
      this.loading.sections = false;
    },
    async searchResults(term) {
      this.loading.results = true;
      const { data } = await ShowsApi.searchByTerm(term);

      this.results = formatShows(data.map(res => res.show));
      this.loading.results = false;
    }
  }
})
import { defineStore } from 'pinia'

import ShowsApi from '@/api/shows';
import { formatShows, mapShowsByGenre } from '@/utils';
import { GENRES } from '@/constants';

export const useStore = defineStore('main', {
  state: () => ({
    _homeSelection: null,
    _results: [],
    _showDetails: null,
    loading: {
      sections: false,
      results: false,
      details: false
    }
  }),
  getters: {
    homeSelection: (state) => state._homeSelection,
    searchResults: (state) => state._results,
    showDetails: (state) => state._showDetails,
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

      this._homeSelection = byGenre;
      this.loading.sections = false;
    },
    async fetchResults(term) {
      this.loading.results = true;
      const { data } = await ShowsApi.searchByTerm(term);

      this._results = formatShows(data.map(res => res.show));
      this.loading.results = false;
    },
    async fetchShowDetails(id) {
      this.loading.details = true;
      const { data } = await ShowsApi.getShowDetails(id);

      this._showDetails = {
        info: {
          id,
          image: data.image?.original || data.image?.medium,
          name: data.name,
          summary: data.summary,
          average: data.rating?.average
        },
        seasons: data._embedded?.seasons || [],
        cast: data._embedded.cast || []
      };
      this.loading.details = false;
    },
    removeShowDetails() {
      this._showDetails = null;
    }
  }
})
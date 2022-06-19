function formatShows(shows = []) {
  return shows
    .filter(show => show.image?.original || show.image?.medium)
    .map(show => ({
      id: show.id,
      name: show.name,
      rating: show.rating?.average,
      genres: show.genres,
      image: show.image?.original || show.image?.medium
    }))
    .sort((a, b) => (a.rating > b.rating ? -1 : 1));
}

function mapShowsByGenre(shows = [], genres = []) {
  // creates an object where the key is the genre and the value a list of shows
  const byGenre = {};

  for (let genre of genres) {
    byGenre[genre] = shows.filter(show => show.genres.includes(genre));
  }

  return byGenre;
}

export {
  formatShows,
  mapShowsByGenre
}
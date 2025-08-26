import { genreMap } from "./genreMap";

export function recommendMovies(query, allMovies) {
  if (!allMovies || allMovies.length === 0) return [];

  const lowerQuery = query.toLowerCase().replace(/movies$/, "").trim();

  const recommendations = allMovies
    .filter((movie) => {
      const titleMatch = movie.title.toLowerCase().includes(lowerQuery);
      const genreMatch = movie.genre_ids.some((id) =>
        genreMap[id]?.toLowerCase().includes(lowerQuery)
      );
      return titleMatch || genreMatch;
    })
    .slice(0, 5)
    .map((m) => m.title);

  return recommendations;
}

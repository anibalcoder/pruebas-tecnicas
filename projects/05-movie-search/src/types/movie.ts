export interface MovieSearch {
  Search:       Movie[];
  totalResults: string;
  Response:     string;
}

export interface Movie {
  Title:  string;
  Year:   string;
  imdbID: string;
  Type:   MediaType;
  Poster: string;
}

export type MediaType = "movie" | "series"

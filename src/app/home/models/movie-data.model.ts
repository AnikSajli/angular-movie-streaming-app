export interface MovieDetailsModel {
  id: number;
  adult: boolean;
  backdrop_path?: string;
  belongs_to_collection?: any;
  budget: Number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  production_companies ?: production_company[];
  production_countries ?: production_country[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: language[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TopRatedMovieModel {
  page: Number;
  results: Result[];
  total_results: number;
  total_pages: number;
}

export interface PopularMovieModel {
  page: Number;
  results: Result[];
  total_results: number;
  total_pages: number;
}

export interface UpcomingMovieModel {
  page: Number;
  results: Result[];
  total_results: number;
  total_pages: number;
  dates: Date[];
}

export interface Date {
  maximum: string;
  minimum: string;
}

export interface Result {
  id: number
  poster_path?: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path ?: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface language {
  iso_639_1: string;
  name: string;
}

export interface production_company {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface production_country {
  iso_3166_1: string;
  name: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetailsModel {
  id: number;
  adult: boolean;
  backdrop_path?: string;
  belongs_to_collection?: object;
  budget: Number;
  genres?: Genre[];
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
  genre_ids: number[];
}

export interface MovieModel {
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

export interface MovieGenreModel {
  id: number;
  name: string;
}

export interface MovieReviewModel {
  id: number;
  page: number;
  results: ReviewResult[];
  total_pages: number;
  total_results: number;
}

export interface ReviewResult {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface AuthorDetails {
  name: string;
  username: string;
  avatar_path?: string;
  rating?: number;
}

export interface MovieCast {
  adult: boolean;
  gender?: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: string;
  profile_path?: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

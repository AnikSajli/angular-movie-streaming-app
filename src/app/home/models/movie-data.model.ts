export interface MovieDetailsModel {
  id: number;
  adult: boolean;
  backdrop_path?: any;
  belongs_to_collection?: any;
  budget: Number;
  genres: genre[];
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

export interface genre {
  id: number;
  name: string;
}

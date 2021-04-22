export interface UniversityDataModel {
  alpha_two_code: string;
  country: string;
  domains: string[];
  name: string;
  web_pages: string[];
  images ?: Logo;
}

export interface Logo {
  small ?: string;
  medium ?: string;
  large ?: string;
}

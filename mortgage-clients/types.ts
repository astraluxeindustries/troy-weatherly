export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  source: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}
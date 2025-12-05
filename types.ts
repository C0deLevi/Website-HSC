export interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

export interface NewsArticle {
  id: string;
  category: string;
  date: string;
  title: string;
  image: string;
  description: string;
}

export interface Vehicle {
  id: string;
  name: string;
  tagline: string;
  image: string;
  specs: {
    range: string;
    acceleration: string;
    power: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

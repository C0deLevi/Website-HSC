import { NavItem, NewsArticle, Vehicle } from './types';

export const NAV_ITEMS: NavItem[] = [
  { 
    label: 'Brands & Services', 
    href: '#brands',
    subItems: [
      { label: 'HSC', href: '#' },
      { label: 'HSC Motorrad', href: '#' },
      { label: 'Financial Services', href: '#' }
    ]
  },
  { 
    label: 'Innovation', 
    href: '#innovation',
    subItems: [
      { label: 'Autonomous Driving', href: '#' },
      { label: 'Sustainability', href: '#' },
      { label: 'Artificial Intelligence', href: '#' }
    ]
  },
  { label: 'Career', href: '#career' },
  { label: 'Press', href: '#press' },
];

export const HERO_CONTENT = {
  title: "RAPID RESPONSE.",
  subtitle: "Engineering designed for critical moments. Precision, power, and reliability when it matters most.",
  cta: "Explore the Fleet",
  // Note: For the actual image you attached, save it as 'brandweer-bikes.jpg' in your public folder.
  // I am using a high-quality red motorcycle placeholder here to visualize the design change immediately.
  image: "https://www.bmw-hsc.com/media/HP/2018/HP_header_2018.jpg" 
};

export const LATEST_NEWS: NewsArticle[] = [
  {
    id: '1',
    category: 'Corporate',
    date: '12 Oct 2023',
    title: 'Lumina Group Reports Record Q3 Growth',
    image: 'https://picsum.photos/800/600?random=1',
    description: 'Continued strong demand for electrified vehicles drives performance across all major regions.'
  },
  {
    id: '2',
    category: 'Innovation',
    date: '08 Oct 2023',
    title: 'Premiere of the Vision Neue Klasse',
    image: 'https://picsum.photos/800/600?random=2',
    description: 'A glimpse into the future: digital, circular, and purely electric.'
  },
  {
    id: '3',
    category: 'Sustainability',
    date: '01 Oct 2023',
    title: 'Carbon Neutrality by 2035',
    image: 'https://picsum.photos/800/600?random=3',
    description: 'We are accelerating our commitment to a green supply chain and circular economy.'
  }
];

export const VEHICLES: Vehicle[] = [
  {
    id: 'v1',
    name: 'Lumina 1250 RT-P',
    tagline: 'Authority in Motion.',
    // Dutch Police Motorcycle (Politie)
    image: 'https://www.bmw-hsc.com/media/HP/2018/HP_teaser_specials_v2.jpg',
    specs: { range: '500 km', acceleration: '3.4s', power: '136 hp' }
  },
  {
    id: 'v2',
    name: 'Lumina Rapid Response',
    tagline: 'Urban Interceptor.',
    // Dutch Police Motorcycle (Amsterdam)
    image: 'https://www.bmw-hsc.com/media/HP/2018/HP_teaser_motorfietsen_v2.jpg',
    specs: { range: '480 km', acceleration: '2.9s', power: '150 hp' }
  }
];
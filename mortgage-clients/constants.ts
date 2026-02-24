import { Review, NavLink, ServiceItem } from './types';

export const BUSINESS_INFO = {
  name: "Desiree Contessa",
  title: "Mortgage Consultant",
  nmls: "2531460",
  company: "Patriot Home Mortgage",
  companyNmls: "715386",
  address: "619 S Bluff St Tower 2 Suite 1B, St. George, UT 84770",
  phone: "(425) 876-3025",
  email: "desiree.contessa@patriothomemortgage.com",
  hours: "Open 24 hours",
  bio: `After working for other financial institutions, I really believe that Patriot Home Mortgage offers most comprehensive service with the best products, knowledge, and resources to its customers. Being the only locally owned Mortgage Bank in Southern Utah, Patriot Home Mortgage has always strived to be community focused.

My goal is to provide all my clients excellent customer service, education, and mentoring in every step of their mortgage process. With over 20 years' experience working in banking & finance, being a mortgage loan originator is something she is truly excited about.

Desiree received a bachelor's degree in business accounting and a minor in cultural studies from Central Washington University. "I look forward to making many great relationships throughout the greater Southern Utah and working through the complexities of today's Mortgage Banking environment."`,
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Local Resident",
    rating: 5,
    text: "She is very genuine and truly cared about my family.",
    source: "Google"
  },
  {
    id: 2,
    author: "Happy Homebuyer",
    rating: 5,
    text: "She went above and beyond in helping them get prepared to purchase a home!!!",
    source: "Google"
  },
  {
    id: 3,
    author: "Southern Utah Client",
    rating: 5,
    text: "Professional, knowledgeable, and always available to answer our questions. Highly recommended.",
    source: "Google"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Home Purchase Loans",
    description: "Guiding you through every step of buying your dream home with competitive rates and personalized support."
  },
  {
    title: "Refinancing",
    description: "Lower your monthly payments or access your home's equity with our tailored refinancing solutions."
  },
  {
    title: "Investment Property",
    description: "Strategic financing options for real estate investors looking to expand their portfolio in Southern Utah."
  },
  {
    title: "Construction Loans",
    description: "Building your custom home? We offer specialized financing to help you build from the ground up."
  }
];
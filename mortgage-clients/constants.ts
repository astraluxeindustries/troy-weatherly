import { Review, NavLink, ServiceItem } from './types';

export const BUSINESS_INFO = {
  name: "Troy Weatherly",
  title: "Mortgage Consultant",
  nmls: "357207",
  company: "Patriot Home Mortgage",
  companyNmls: "715386",
  address: "619 S Bluff St Tower 2 Suite 1B, St. George, UT 84770",
  phone: "(425) 876-3025",
  email: "Troy@patriothomemortgage.com",
  hours: "Open 24 hours",
  bio: `With over 20 years in the mortgage industry, Troy Weatherly brings experience, clarity, and steady guidance to every transaction. Whether you are purchasing your first home, refinancing, or expanding your investment portfolio, Troy has the knowledge and perspective to help you move forward with confidence.

Troy specializes in a full range of loan programs, including FHA, VA, Conventional, and more advanced financing solutions such as investment properties, flips, and renovation loans. His approach is simple and client focused. He takes the time to help borrowers understand their options, cut through the noise, and make informed decisions that align with their long-term goals.

Known for his steady communication and straightforward guidance, Troy is committed to making the mortgage process smooth, transparent, and stress free. His focus is not just on closing loans, but on building lasting relationships with the families and investors he serves.

Outside the office, Troy has been happily married for 19 years and is a proud father of four. He is deeply involved in his community, volunteering and serving in leadership roles at his church and HOA. He has coached his children’s sports teams and enjoys golfing and taking on hands-on home improvement projects. A memorable highlight was being selected to appear on the home renovation show Property Brothers Forever Home, Season 1, Episode 2.

For Troy, helping clients secure the right mortgage is more than a transaction. It is about helping people build stability, opportunity, and a place to call home."`,
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
    text: "He is very genuine and truly cared about my family.",
    source: "Google"
  },
  {
    id: 2,
    author: "Happy Homebuyer",
    rating: 5,
    text: "He went above and beyond in helping them get prepared to purchase a home!!!",
    source: "Google"
  },
  {
    id: 3,
    author: "Las Vegas Client",
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

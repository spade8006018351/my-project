import { Star, Award, ShieldCheck, LucideIcon } from 'lucide-react';

export interface Experience {
  company: string;
  duration: string;
  role: string;
  desc: string;
  dotColor: string;
}

export interface IconAndText {
  icon: LucideIcon;
  name: string;
}

export interface Blog {
  image: string;
  button: string;
  name: string;
  date: string;
  title: string;
}

export interface PortfolioItem {
  image: string;
  title: string;
  href: string;
  desc: string;
}

export interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
}

export interface CardData {
  title: string;
  imageSrc: string;
}




  
    export const experiences: Experience[] = [
  {
    company: "Velorent (Startup Project)",
    duration: "2025 - Present",
    role: "UX / Product Designer",
    desc: "Designing a digital vehicle rental platform that helps offline rental vendors manage bookings and customers efficiently.",
    dotColor: "bg-[#FD853A]",
  },
  {
    company: "Scanner-Based Restaurant App (Concept)",
    duration: "2025",
    role: "UX Designer",
    desc: "Created a QR-based smart ordering system to reduce wait time and improve dining experience.",
    dotColor: "bg-[#1D2939]",
  },
];
  

export const buttons: string[] = [
  "User Research",
  "UX Strategy",
  "Interaction Design",
  "Prototyping",
  "Usability Testing",
];

export const iconAndText: IconAndText[] = [
  {
    icon: Star,
    name: "Research Driven Design",
  },
  {
    icon: Award,
    name: "Product Thinking Approach",
  },
  {
    icon: ShieldCheck,
    name: "User-Centered Solutions",
  },
];

export const skills: string[] = [
  "User Research",
  "Wireframing",
  "User Flows",
  "Prototyping",
  "Usability Testing",
  "Figma",
  "Design Systems",
  "Product Strategy",
];

export const blogs: Blog[] = [
  {
    image: "/Rectangle 6.svg",
    button: "View Case Study",
    name: "Anuj Kushwah",
    date: "2025",
    title: "Velorent: Designing a Digital Vehicle Rental Platform",
  },
  {
    image: "/Frame 60.svg",
    button: "View Case Study",
    name: "Anuj Kushwah",
    date: "2025",
    title: "Improving Restaurant Experience with QR Ordering",
  },
];
export const portfolioData: PortfolioItem[] = [
  {
    image: "/Frame 26.svg",
    title: "Velorent – Vehicle Rental Platform",
    href: "/project-1",
    desc: "A digital platform that helps offline rental vendors manage bookings and customers efficiently.",
  },
  {
    image: "/Frame 26.svg",
    title: "Scanner-Based Restaurant App",
    href: "/project-2",
    desc: "QR-based ordering system to reduce wait time and enhance dining experience.",
  },
  {
    image: "/Frame 26.svg",
    title: "App Redesign Case Study",
    href: "/project-3",
    desc: "Redesigned an existing app to improve usability and user engagement.",
  },
];

export const reviews: Review[] = [];

export const cardData: CardData[] = [
  { title: "User Research", imageSrc: "/Rectangle 7.svg" },
  { title: "UX Strategy", imageSrc: "/Rectangle 7.svg" },
  { title: "Interaction Design", imageSrc: "/Rectangle 7.svg" },
  { title: "Prototyping", imageSrc: "/Rectangle 7.svg" },
  { title: "Usability Testing", imageSrc: "/Rectangle 7.svg" },
  { title: "Design Systems", imageSrc: "/Rectangle 7.svg" },
];

import { CreditCard  } from "lucide-react";
import { HandCoins  } from "lucide-react";
import { Sheet  } from "lucide-react";
import { Landmark  } from "lucide-react";
import { Calendar } from "lucide-react";
import { ClipboardMinus  } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Início", href: "#" },
  { label: "Sobre Nós", href: "#" },
  { label: "Serviços", href: "#" },
  { label: "Contato", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <CreditCard />,
    text: "Gestão de contas a pagar",
    description:
      "Evite que atrasos comprometam o seu negócio. Nossa expertise em gestão de contas a pagar proporcionará a eficiência financeira de que você precisa.",
  },
  {
    icon: <HandCoins />,
    text: "Gestão de contas a receber",
    description:
      "Potencialize seu fluxo de caixa e não perca as oportunidades financeiras. Nossa gestão de contas a receber é essencial para alcançar o sucesso financeiro.",
  },
  {
    icon: <Landmark />,
    text: "Conciliação Bancária e de Caixa",
    description:
      "Domine o controle financeiro com nossa conciliação bancária precisa. Previna imprevistos e mantenha sua empresa no rumo certo.",
  },
  {
    icon: <Calendar />,
    text: "Agendamento Bancário",
    description:
      "Facilite sua gestão financeira com nosso agendamento bancário descomplicado. Ganhe tempo e recursos para o que verdadeiramente importa.",
  },
  {
    icon: <ClipboardMinus />,
    text: "Faturamento de Notas Fiscais",
    description:
      "Potencialize suas transações com nosso processo de faturamento eficaz. Garanta a satisfação dos clientes e impulsione o crescimento do seu negócio.",
  },
  {
    icon: <Sheet />,
    text: "Relatórios de DRE e Fluxo de Caixa",
    description:
      "Faça escolhas estratégicas com nossos relatórios financeiros abrangentes. Tenha uma visão clara para alcançar o sucesso financeiro.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

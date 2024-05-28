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
  { label: "Sobre Nós", href: "#sobre-nos" },
  { label: "Serviços", href: "#servicos" },
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
    title: "Excelência Profissional",
  },
  {
    title: "Maximização dos Lucros da sua Empresa",
  },
  {
    title: "Economia de tempo e recursos",
  },
  {
    title: "Relatórios Precisos e Eficientes",
  },
  {
    title: "Parceria Estratégica",
  },
  {
    title: "Potencial de Economia para sua Empresa",
  },
];

export const resourcesLinks = [
  { href: "https://api.whatsapp.com/send?phone=5516996399019&text=Ol%C3%A1,%20vim%20pelo%20site%20da%20Te%C3%B3filo%20Solu%C3%A7%C3%B5es%20Financeiras%20BPO!%20E%20tenho%20interesse%20nos%20seus%20servi%C3%A7os,%20poderia%20me%20ajudar?%20", text: "Whatsapp" },
  { href: "https://www.instagram.com/teofilosolucoesfinanceiras/", text: "Instagram" },
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

import heroHFT from "@/assets/blog/estrategias-hft.jpg";
import heroForex from "@/assets/blog/como-investir-forex.jpg";
import heroIA from "@/assets/blog/ia-forex-hero.jpg";

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
  readTime: string;
  category: string;
};

export const articles: ArticleMeta[] = [
  {
    slug: "inteligencia-artificial-forex-2026",
    title: "Inteligência Artificial no Forex 2026: Como Traders Brasileiros Estão Usando IA",
    description: "Robôs com IA, análise preditiva e machine learning aplicados ao Forex em 2026.",
    image: heroIA,
    link: "/artigo/inteligencia-artificial-forex-2026",
    date: "27 Jun 2026",
    readTime: "16 min",
    category: "Tecnologia",
  },
  {
    slug: "como-investir-forex",
    title: "Como Investir em Forex: Guia Completo para Iniciantes em 2026",
    description: "Aprenda como começar no Forex com segurança, estratégias e dicas práticas.",
    image: heroForex,
    link: "/artigo/como-investir-forex",
    date: "05 Jan 2026",
    readTime: "18 min",
    category: "Tutoriais",
  },
  {
    slug: "estrategias-avancadas-hft",
    title: "Estratégias Avançadas para Trading de Alta Frequência",
    description: "Técnicas profissionais de HFT, market making e microestruturas de mercado.",
    image: heroHFT,
    link: "/blog/estrategias/estrategias-avancadas-hft",
    date: "20 Dez 2024",
    readTime: "15 min",
    category: "Estratégias",
  },
];

export const getRelated = (currentSlug: string, count = 2) =>
  articles.filter((a) => a.slug !== currentSlug).slice(0, count);

export const BUSINESS = {
  name: "Low Rider Estética Automotiva",
  whatsapp: "5511988198744",
  whatsappLink:
    "https://api.whatsapp.com/send?l=pt_BR&phone=5511988198744",
  whatsappShort: "https://bit.ly/Whatslowrider",
  instagram:
    "https://www.instagram.com/lowrider_esteticaautomotiva/",
  facebook: "https://www.facebook.com/lowriderwasheco/",
  googleMaps:
    "https://www.google.com/maps/place/Low+Rider+Est%C3%A9tica+Automotiva/@-23.5226277,-46.5238268,17z",
  coordinates: { lat: -23.5226277, lng: -46.5238268 },
  tagline: "Sua meta é surpreender. A nossa é superar.",
  slogan: "Estética Automotiva Premium",
} as const;

export interface GalleryItem {
  id: number;
  before: string;
  after: string;
  service: string;
  description: string;
}

export const GALLERY_ITEMS: readonly GalleryItem[] = [
  {
    id: 1,
    before: "/images/gallery/before-after/antes-1.jpg",
    after: "/images/gallery/before-after/depos-1.jpg",
    service: "Polimento Técnico",
    description: "Emblema e detalhes externos restaurados",
  },
  {
    id: 2,
    before: "/images/gallery/before-after/antes-2.jpg",
    after: "/images/gallery/before-after/depois-2.jpg",
    service: "Higienização Interna",
    description: "Painel e portas higienizados",
  },
  {
    id: 3,
    before: "/images/gallery/before-after/antes-3.jpg",
    after: "/images/gallery/before-after/depois-3.jpg",
    service: "Higienização Completa",
    description: "Assoalho e carpete restaurados",
  },
  {
    id: 4,
    before: "/images/gallery/before-after/antes-4.jpg",
    after: "/images/gallery/before-after/depois-4.jpg",
    service: "Limpeza Detalhada",
    description: "Volante e comandos impecáveis",
  },
] as const;

export const SHOWCASE_CARS = [
  { src: "/images/gallery/showcase/carro3.jpg", alt: "BMW atendida na Low Rider" },
  { src: "/images/gallery/showcase/carro4.jpg", alt: "Mercedes na estética" },
  { src: "/images/gallery/showcase/carrp5.jpg", alt: "Veículo premium" },
] as const;

export interface Package {
  name: string;
  slug: string;
  featured: boolean;
  badge?: string;
  description: string;
  services: string[];
}

export const PACKAGES: readonly Package[] = [
  {
    name: "Essencial",
    slug: "essencial",
    featured: false,
    description: "O básico bem feito. Brilho e limpeza.",
    services: [
      "Polimento Comercial + Selante",
      "Higienização dos Bancos",
    ],
  },
  {
    name: "Premium",
    slug: "premium",
    featured: true,
    badge: "MAIS POPULAR",
    description: "Tratamento completo. O mais escolhido pelos clientes.",
    services: [
      "Lavagem Detalhada",
      "Descontaminação de Pintura e Vidros",
      "Polimento Técnico + Aplicação de Selante",
      "Recuperação dos Faróis",
      "Higienização Interna Completa",
      "Higienização c/ troca do Filtro do Ar-condicionado",
    ],
  },
  {
    name: "VIP",
    slug: "vip",
    featured: false,
    description: "Transformação total. Para quem quer o máximo.",
    services: [
      "Lavagem Detalhada",
      "Higienização Interna",
      "Lavagem das Caixas de Roda c/ remoção das rodas",
      "Polimento Técnico",
      "Cristalização de Pintura",
      "Martelinho de Ouro",
      "Vitrificação dos Plásticos",
    ],
  },
] as const;

export const EXTRA_SERVICES = [
  "Cristalização do Para-brisa",
  "Condicionamento dos Plásticos",
  "Descontaminação de Vidros",
  "Aplicação de Selante",
] as const;

export const TESTIMONIALS = [
  {
    name: "Carlos M.",
    vehicle: "Honda Civic",
    initial: "C",
    rating: 5,
    text: "Levei meu Civic todo riscado e voltou parecendo zero km. O polimento ficou impecável, brilho de concessionária.",
  },
  {
    name: "Renata S.",
    vehicle: "VW T-Cross",
    initial: "R",
    rating: 5,
    text: "Serviço nota 10! A higienização interna deixou o carro cheirando a novo. Super atenciosos e caprichosos.",
  },
  {
    name: "André L.",
    vehicle: "BMW 320i",
    initial: "A",
    rating: 5,
    text: "Melhor custo-benefício da região. Faço todos os meus carros aqui há 3 anos. Recomendo de olhos fechados.",
  },
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Veículos" },
  { value: 5.0, suffix: "★", label: "Google" },
  { value: 6, suffix: "+", label: "Anos" },
] as const;

export const NAV_LINKS = [
  { label: "Galeria", href: "#galeria" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Local", href: "#local" },
] as const;

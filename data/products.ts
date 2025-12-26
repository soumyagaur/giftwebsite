export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: string;
  occasion: string[];
  forWhom: string[];
  description: string;
  highlight: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "luxury-teddy-bear",
    name: "Luxury Teddy Bear",
    price: 699,
    category: "Soft Toys",
    occasion: ["Birthday", "Anniversary", "Valentine’s Day"],
    forWhom: ["For Her", "For Kids", "For Friends"],
    description:
      "Premium fluffy teddy bear perfect for birthdays, anniversaries and special surprises.",
    highlight: "Soft, huggable and made with high quality fabric.",
    image: "/images/43d4c99507b858ff40d69378ba80af6b.jpg",
  },
  {
    id: 2,
    slug: "chocolate-gift-hamper",
    name: "Chocolate Gift Hamper",
    price: 999,
    category: "Gift Hampers",
    occasion: ["Birthday", "Festivals", "New Year"],
    forWhom: ["For Him", "For Her", "For Friends"],
    description:
      "A delicious premium chocolate hamper packed beautifully for celebrations.",
    highlight: "Assorted chocolates with elegant gift packaging.",
    image: "/images/chokola-grandeur-luxury-chocolate-hamper_3.webp",
  },
  {
    id: 3,
    slug: "personalized-photo-frame",
    name: "Personalized Photo Frame",
    price: 799,
    category: "Personalized Gifts",
    occasion: ["Anniversary", "Wedding", "Valentine’s Day"],
    forWhom: ["For Couples", "For Parents"],
    description:
      "Custom wooden frame printed with your special memories and names.",
    highlight: "High-quality print with premium wooden finish.",
    image: "/images/il_fullxfull.6649252195_etnv.webp",
  },
  {
    id: 4,
    slug: "red-rose-bouquet",
    name: "Red Rose Bouquet",
    price: 599,
    category: "Flowers",
    occasion: ["Anniversary", "Valentine’s Day", "Birthday"],
    forWhom: ["For Her", "For Couples"],
    description:
      "Elegant bouquet of fresh red roses wrapped in premium paper.",
    highlight: "Perfect romantic gesture for special days.",
    image: "/images/orchidya-london-flower-delivery-luxury-red-roses-valentine.webp",
  },
  {
    id: 5,
    slug: "home-decor-lamp",
    name: "Home Decor Lamp",
    price: 1299,
    category: "Home Decor",
    occasion: ["House Warming", "Festivals"],
    forWhom: ["For Parents", "For Friends"],
    description:
      "Warm decorative lamp to light up your loved one’s home.",
    highlight: "Modern design with soft warm lighting.",
    image: "/images/5c4228fe-7392-4504-8de3-ff4bc523ad04.jpg",
    
  },

  {
  id: 6,
  slug: "aroma-candle-set",
  name: "Aroma Candle Set",
  price: 799,
  category: "Home Decor",
  occasion: ["Festivals", "Relaxation"],
  forWhom: ["For Her", "For Friends"],
  description:
    "A set of soothing scented candles perfect for creating a calming atmosphere.",
  highlight: "Long-lasting fragrance with decorative jars.",
  image: "/images/81bG15V6i6L._AC_UF1000,1000_QL80_.jpg",
},

{
  id: 7,
  slug: "photo-frame-custom",
  name: "Custom Photo Frame",
  price: 999,
  category: "Personalized Gifts",
  occasion: ["Birthday", "Anniversary"],
  forWhom: ["For Him", "For Her"],
  description:
    "A customized photo frame to cherish unforgettable memories.",
  highlight: "Premium wood finish with custom engraving option.",
  image: "/images/mpf-99.jpeg",
},

{
  id: 8,
  slug: "tabletop-plant",
  name: "Tabletop Indoor Plant",
  price: 599,
  category: "Home Decor",
  occasion: ["House Warming", "Everyday"],
  forWhom: ["For Parents", "For Colleagues"],
  description:
    "Low-maintenance indoor plant to freshen up any space.",
  highlight: "Air-purifying and ideal for office/home desks.",
  image: "/images/61R18vdqyEL._AC_UF1000,1000_QL80_.jpg",
},

  
];

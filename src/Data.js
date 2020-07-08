const sampleProducts = [
  {
    id: 1,
    name: "Goldstar",
    category: "Shoes",
    price: 1500,
    description: "the comfortable ,reliable and low cost gold star shoes",
    inStock: true,
    popular: true,
    imageURL:
      "https://www.thehindu.com/life-and-style/article22785399.ece/ALTERNATES/LANDSCAPE_1200/18TH-STAR",
  },
  {
    id: 2,
    name: "Nepali Wedding dress",
    category: "Clothing",
    price: 4000,
    description: "a complete set of wedding dress for bridegroom",
    inStock: true,
    popular: true,
    imageURL:
      "https://www.kapadaa.com/wp-content/uploads/2014/11/d3-100x100.jpg",
  },

  {
    id: 3,
    name: "Antique Buddha Statue",
    category: "Handicrafts",
    price: 1200,
    description: "",
    inStock: true,
    popular: true,
    imageURL:
      "https://www.thenepalihandicrafts.com/uploads/products/15167641380.JPG",
  },
  ,
  {
    id: 4,
    name: "Hemp Bag",
    category: "Bags",
    price: 2100,
    description: "",
    inStock: true,
    popular: true,
    imageURL:
      "https://www.himalayanhandmades.com/images/stories/virtuemart/product/DSC_2069.jpg",
  },
];

const categories = [
  "All categories",
  "Shoes",
  'Clothing',
  'Bags',
  'Handicrafts'
 
];

const generateMenuItems = () => {
  let menuItems = [{ type: "title", name: "CATEGORIES", id: 1 }];

  menuItems = menuItems.concat(
    categories.map((x, i) => {
      return {
        name: x,
        url: "/search/?directCategory=true&category=" + x,
        id: 4 + i,
        type: "item",
        parent: "CATEGORIES",
      };
    })
  );

  return menuItems;
};

let menuItems = generateMenuItems();

export { sampleProducts, menuItems, categories };

const sampleProducts = [
  {
    id: 1,
    name: "Goldstar",
    category: "Shoes",
    price: 55,
    description:
      "",
    inStock: true,
    popular: true,
    imageURL:
      "https://www.thehindu.com/life-and-style/article22785399.ece/ALTERNATES/LANDSCAPE_1200/18TH-STAR",
  }
];

const categories = [
  "All categories",
  "Shoes",
 
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

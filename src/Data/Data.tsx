export interface Product {
  id: number
  name: string
  image: string
  price: number
}


export const products: Product[] = [
  {
    id: 1,
    name: 'Огурецы',
    image: 'https://fakeimg.pl/100x100/',
    price: 10,
  },
  {
    id: 2,
    name: 'Помидоры',
    image: "https://fakeimg.pl/100x100/",
    price: 15,
  },
  {
    id: 3,
    name: 'Баклажаны',
    image: "https://fakeimg.pl/100x100/",
    price: 20,
  },
  {
    id: 4,
    name: 'Капуста',
    image: "https://fakeimg.pl/100x100/",
    price: 25,
  }
];

const getProduct = (id: number): Product | undefined => {
  return products.find(item => item.id === id)
}
export { getProduct }
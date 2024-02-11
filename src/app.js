document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Kopi Hitam", img: "1.jpg", price: 20000 },
      { id: 2, name: "Biji Kopi", img: "2.jpg", price: 5000 },
      { id: 3, name: "Buah kopi", img: "3.jpg", price: 10000 },
      { id: 4, name: "Kopi Americano", img: "4.jpg", price: 20000 },
      { id: 5, name: "kopi kemasan", img: "5.jpg", price: 25000 },
    ],
  }));
  alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      this.items.push(newItem);
      console.log(this.items);
    },
  });
});

// konvernsi rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

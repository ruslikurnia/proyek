document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Catalog 1", img: "cat1.jpg", price: 365000 },
      { id: 2, name: "Catalog 2", img: "cat2.jpg", price: 405000 },
      { id: 3, name: "Catalog 3", img: "cat3.jpg", price: 699000 },
      { id: 4, name: "Catalog 4", img: "cat4.jpg", price: 388000 },
      { id: 5, name: "Catalog 5", img: "cat5.jpg", price: 400000 },
      
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // Cek barang yang sama dalam cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // Jika belum ada
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.total += newItem.price;
        this.quantity++;
      } else {
        // Jika sudah ada, cek apakah barang beda atau sama dengan yang di cart
        this.items = this.items.map((item) => {
          // Jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // Jika barang sudah ada, tambah quantity dan totalnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.total += item.price;
            this.quantity++;
            return item;
          }
        });
      }
    },

    remove(id) {
      // me-remove item berdasarkan id
      const cartItem = this.items.find((item) => item.id === id);
      // JIka item lebih dari satu
      if (cartItem.quantity > 1) {
        // telusuri satu"
        this.items = this.items.map((item) => {
          //  jika bukan barang yang diklik
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // Jika barang sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// Konversi ke Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

// Modal box
document.addEventListener("alpine:init", () => {
  Alpine.data("modalBox", () => ({
    items: [
      { id: 1, name: "Catalog 1", img: "cat1.jpg", price: 365000 },
      { id: 2, name: "Catalog 2", img: "cat2.jpg", price: 405000 },
      { id: 3, name: "Catalog 3", img: "cat3.jpg", price: 699000 },
      { id: 4, name: "Catalog 4", img: "cat4.jpg", price: 388000 },
      { id: 5, name: "Catalog 5", img: "cat5.jpg", price: 400000 },
    ],
    showModal(id) {
      // Close any currently open modal
      const openModal = document.querySelector('.modal[style*="display: block"]');
      if (openModal) {
        openModal.style.display = 'none';
      }
      // Show the new modal
      const modal = document.getElementById(`modal-${id}`);
      if (modal) {
        modal.style.display = 'block';
      }
    },
    closeModal(id) {
      const modal = document.getElementById(`modal-${id}`);
      if (modal) {
        modal.style.display = 'none';
      }
    }
  }));
});

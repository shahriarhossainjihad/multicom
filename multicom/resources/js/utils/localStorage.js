export const saveCartToLocalStorage = (cart) => {
    try {
        localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
        console.error("Could not save cart to localStorage:", error);
    }
};

export const loadCartFromLocalStorage = () => {
    try {
        const serializedCart = localStorage.getItem("cart");
        return serializedCart ? JSON.parse(serializedCart) : [];
    } catch (error) {
        console.error("Could not load cart from localStorage:", error);
        return [];
    }
};

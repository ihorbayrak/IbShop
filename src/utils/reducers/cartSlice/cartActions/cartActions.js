export const addCartItem = (cartItems, itemToAdd) => {
    const isItemExisting = cartItems.find((item) => item.id === itemToAdd.id);

    if (isItemExisting) {
        return cartItems.map((item) => {
            return item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item;
        });
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find((item) => item.id === itemToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((item) => item.id !== itemToRemove.id);
    }

    return cartItems.map((item) => {
        return item.id === itemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item;
    });
};

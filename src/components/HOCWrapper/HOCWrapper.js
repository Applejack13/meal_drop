import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export function HOCWrapper(WrappedComponent) {
  return function HOCWrapper(props) {
    const quantity = useSelector((state) => state.value);
    // const id = useSelector((state) => state.id);
    // console.log(id);
    //is epmty at the moment

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      // Загружаем корзину из localStorage при первой загрузке
      const storedCartItems = localStorage.getItem("cartItems");
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    }, []);

    useEffect(() => {
      // Добавляем обработчик события beforeunload
      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        // Удаляем обработчик перед выгрузкой компонента
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }, []);

    const handleBeforeUnload = () => {
      // Удаляем корзину из localStorage при обновлении страницы
      // Сделать так, чтоб корзина удалялась, когда пользователь покинул страницу
      localStorage.removeItem("cartItems");
    };

    const addToCart = (products) => {
      const newProduct = {
        foodName: products.foodName,
        foodDescription: products.foodDescription,
        foodPrice: products.foodPrice,
        id: products.id,
        quantity,
      };

      const existingItemIndex = cartItems.findIndex(
        (item) => item.id === newProduct.id
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: quantity + quantity }
            : item
        );
        setCartItems(updatedCartItems);
        // Сохраняем обновленную корзину в localStorage
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      } else {
        const updatedCartItems = [...cartItems, newProduct];
        setCartItems(updatedCartItems);
        // Сохраняем обновленную корзину в localStorage
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      }
    };

    return (
      <WrappedComponent
        cartItems={cartItems}
        addToCart={addToCart}
        {...props}
      />
    );
  };
}

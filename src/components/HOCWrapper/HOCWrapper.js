import { useState, useEffect } from "react"

const HOCWrapper = (WrappedComponent) => {
  return function HOCWrapper(props) {
    const [cartItems, setCartItems] = useState([])
    const [count, setCount] = useState(1)

    useEffect(() => {
      // Загружаем корзину из localStorage при первой загрузке
      const storedCartItems = localStorage.getItem("cartItems")
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems))
      }
    }, [])

    useEffect(() => {
      // Добавляем обработчик события beforeunload
      window.addEventListener("beforeunload", handleBeforeUnload)

      return () => {
        // Удаляем обработчик перед выгрузкой компонента
        window.removeEventListener("beforeunload", handleBeforeUnload)
      }
    }, [])

    const handleBeforeUnload = () => {
      // Удаляем корзину из localStorage при обновлении страницы
      localStorage.removeItem("cartItems")
    }

    const addToCart = (products) => {
      const newProduct = {
        foodName: products.foodName,
        foodDescription: products.foodDescription,
        foodPrice: products.foodPrice,
        id: products.id,
        quantity: count,
      }

      const existingItemIndex = cartItems.findIndex(
        (item) => item.id === newProduct.id
      )

      if (existingItemIndex !== -1) {
        const updatedCartItems = cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + count }
            : item
        )
        setCartItems(updatedCartItems)
        // Сохраняем обновленную корзину в localStorage
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems))
      } else {
        const updatedCartItems = [...cartItems, newProduct]
        setCartItems(updatedCartItems)
        // Сохраняем обновленную корзину в localStorage
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems))
      }
    }

    const decrement = () => {
      setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1))
    }

    const increment = () => {
      setCount((prevCount) => (prevCount < 9 ? prevCount + 1 : 9))
    }

    return (
      <WrappedComponent
        cartItems={cartItems}
        decrement={decrement}
        increment={increment}
        setCount={setCount}
        count={count}
        addToCart={addToCart}
        {...props}
      />
    )
  }
}

export default HOCWrapper

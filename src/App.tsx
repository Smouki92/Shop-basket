import 'bootstrap/dist/css/bootstrap.min.css';
import { CartItem } from './components/CartItem';
import { Sum } from './components/Sum';
import { Send } from './components/Send';
import { getProduct } from './Data/Data';
import { useState } from 'react';

interface CartProduct {
  id: number
  count: number
}

const App = () => {

  const [cart, setCart] = useState<CartProduct[]>([{ id: 1, count: 1 }, { id: 2, count: 2 }, { id: 3, count: 1 }, { id: 4, count: 2 }])


  const removeFromCart = (id: number): void => {
    const delCarts = cart.filter(item => {
      return item.id !== id
    })
    setCart(delCarts)
  }

  const onAdd = (id: number): void => {
    const newCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 }
      }
      return item
    })
    setCart(newCart)
  }

  const onRemove = (id: number): void => {
    const newCart = cart.map(item => {

      if (item.id === id && item.count >= 1) {
        return { ...item, count: item.count - 1 }
      }
      return item
    })
    setCart(newCart)
  }

  const sum = cart.reduce(
    (accumulator, item) => {
      const product = getProduct(item.id)
      if (!product) return accumulator
      return accumulator + item.count * product.price
    },
    0
  )

  const onSend = (): void => {
    console.log(cart)
  }

  return (
    <>

      <div className="d-flex flex-column " style={{ position: 'relative', maxWidth: '900px', margin: '0 15%', marginTop: 50 }}>
        <div className="mb-5" style={{ fontSize: '48px', fontWeight: 900, textDecoration: 'underline' }}>Корзина</div>

        {cart.map(item => {
          const product = getProduct(item.id)
          if (!product) return null
          return <CartItem key={product.id} onAdd={onAdd} onRemove={onRemove} count={item.count} product={product} removeFromCart={removeFromCart} />
        })}

        <Sum value={sum} />
        <Send onClick={onSend} />
      </div>

    </>
  );
}


export default App;
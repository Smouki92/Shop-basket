import { MouseEventHandler, FC } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../Data/Data';



interface CartItemProps {
    product: Product
    count: number
    onAdd: (id: number) => void
    onRemove: (id: number) => void
    removeFromCart: (id: number) => void
}

export const CartItem: FC<CartItemProps> = ({ product, count, onAdd, onRemove, removeFromCart }) => {


    const handleRemove: MouseEventHandler<HTMLButtonElement> = () => {
        onRemove(product.id)
    }

    const handleAdd: MouseEventHandler<HTMLButtonElement> = () => {
        onAdd(product.id)
    }

    const handleRemoveFromCart: MouseEventHandler<SVGSVGElement> = () => {
        removeFromCart(product.id)

    }


    return (

        <div className="d-flex flex-row flex-wrap mb-3" style={{ position: 'relative', padding: 15, border: '1px solid #000' }}>
            <img className="d-flex " style={{ marginRight: 100 }} src={product.image} alt="Овощи" />
            <div className="align-self-start d-flex flex-column my-1 " style={{ minWidth: 150, marginRight: 100 }}>
                <div className=" bd-highlight" style={{ lineHeight: '32px', fontWeight: 700 }}><h3>{product.name}</h3></div>
                <div className=" bd-highlight">Цена: {product.price} грн</div>
            </div>
            <div className=" align-self-end d-flex my-1" style={{ maxWidth: 150, marginRight: 100 }}>
                <button className="btn btn-outline-secondary d-flex " style={{ maxWidth: 30 }} onClick={handleRemove}>-</button>
                <span className="form-control mx-2 d-flex "   >{count}</span>
                <button className="btn btn-outline-secondary d-flex " style={{ maxWidth: 30 }} onClick={handleAdd}>+</button>
            </div>
            <div className="align-self-end d-flex my-1" style={{ maxWidth: 150}}>
                <h5>Сумма: {count * product.price}</h5>
            </div>
            <div style={{}}>
                <FontAwesomeIcon style={{ position: 'absolute', top: '10%', right: '3%', cursor: 'pointer' }} icon={faTrashAlt} onClick={handleRemoveFromCart} />
            </div>
        </div>

    )
}



/*      <div className="d-flex flex-row bd-highlight mb-3" style={{ position: 'relative', padding: 15, border: '1px solid #000' }}>
            <img src={product.image} alt="Овощь" />
            <div className="align-self-start d-flex flex-column  " style={{ width: 200, margin: '0 100px' }}>
                <div className="p-2 bd-highlight" style={{ lineHeight: '32px', fontWeight: 700 }}><h3>{product.name}</h3></div>
                <div className="p-2 bd-highlight">Цена: {product.price} грн</div>
            </div>
            <div className="input-group align-self-end d-flex " style={{ width: 150, marginRight: 50 }}>
                <button className="btn btn-outline-secondary d-flex " style={{ width: 30 }} onClick={handleRemove}>-</button>
                <input className="form-control mx-2 d-flex " type='text' readOnly value={count} />
                <button className="btn btn-outline-secondary d-flex " style={{ width: 30 }} onClick={handleAdd}>+</button>
            </div>
            <div className="align-self-end d-flex" >
                <h5>Сумма: {count * product.price}</h5>
            </div>
            <div style={{ position: 'absolute', top: '15%', right: '3%' }}>
                <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faTrashAlt} onClick={handleRemoveFromCart} />
            </div>
        </div>
 */
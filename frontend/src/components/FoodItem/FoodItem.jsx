import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {
    // const [itemCount,setItemCount]=useState(0)
    const { cartItems, addToCart, removeFromCart,url } = useContext(StoreContext);
  return (
    <div className='food-item'>
       <div className='food-item-img-container'>
        <img className='food-item-image' src={url+"/images/"+image} alt="image"  />
        { !cartItems[id] ? (
          <img className='add' src={assets.add_icon_white} alt="Add" onClick={()=>addToCart(id)} />
        ) : (
          <div className='food-item-counter'>
            <img src={assets.remove_icon_red} alt="Remove" onClick={() => removeFromCart(id)} />
            <span>{cartItems[id]}</span>
            <img src={assets.add_icon_green} alt="Add" onClick={() => addToCart(id)} />
          </div>
        )}
        </div> 
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-disc'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem
import {createContext,useState,useEffect} from "react";
import axios from "axios";
// import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState({});
    const url="http://localhost:4000"
    const [token,setToken]=useState("");
    const [food_list,setFoodList] = useState([])
    const addToCart=async (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})

        }

    }
    const removeFromCart=async (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async()=>{
        try {
            const response = await axios.get(url+"/api/food/list");
            console.log("Food list response:", response.data);
            if(response.data && response.data.success && Array.isArray(response.data.data)) {
                setFoodList(response.data.data)
            } else {
                setFoodList([]); // fallback to empty array
            }
        } catch (e) {
            setFoodList([]); // fallback to empty array on error
            console.error("Failed to fetch food list:", e);
        }
    }
    const loadCartData = async(token)=>{
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
        if(response.data.success){
            setCartItems(response.data.message); // Backend returns cartData in 'message' field
        }
    } 


    useEffect(()=>{
        async function loadData(){
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])


    const contextValue ={
        food_list,
        setFoodList,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
        

    }
    return( <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>)
}
export default StoreContextProvider;
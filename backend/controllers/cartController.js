import userModel from "../models/userModel.js"

// add items to user cart
const addToCart = async (req,res)=>{
    try {
        let userData = await userModel.findOne({_id:req.userId}) 
        if (!userData) {
            return res.json({success: false, message: "User not found"});
        }
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1

        }else{
            cartData[req.body.itemId] +=1
        }
        await userModel.findByIdAndUpdate(req.userId,{cartData});
        res.json({success:true,message:"Added to cart"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"something went wrong"})
        
    }

}

//remove items from user cart
const removeFromCart = async(req,res)=>{
    try {
        let userData = await userModel.findOne({_id:req.userId}) 
        if (!userData) {
            return res.json({success: false, message: "User not found"});
        }
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1;

        }
        await userModel.findByIdAndUpdate(req.userId,{cartData});
        res.json({success:true,message:"Removed From Cart."})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }

}

//fetching cart items

const getCart = async(req,res)=>{
    try {
       let userData = await userModel.findOne({_id:req.userId}) 
        if (!userData) {
            return res.json({success: false, message: "User not found"});
        }
       let cartData = await userData.cartData;
       res.json({success:true,message:cartData})
        
    } catch (error) {
        console.log("error")
        res.json({success:false,message:"error"})
        
    }

}

export{addToCart,removeFromCart,getCart}
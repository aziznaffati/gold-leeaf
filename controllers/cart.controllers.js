const Cart = require('../model/Cart');
const Item = require('../model/Product');

module.exports.get_cart_items = async (req,res) => {
    const userId = req.params.id;
    try{
        let cart = await Cart.findOne({userId});
        if(cart && cart.items.length>0){
            res.send(cart);
        }
        else{
            res.send(null);
        }
    }
    catch(err){
        res.status(500).send("Something went wrong");
    }
}

module.exports.add_cart_item = async (req,res) => {
    const userId = req.params.id;
   
    const { productId, quantity } = req.body;
   
    try{
        let cart = await Cart.findOne({userId});
        
        let item = await Item.findOne({_id: productId});
        
        if(!item){
            res.status(404).send('Item not found!')
        }
        const Price = item.Price;
        
        const name = item.NameProduct;
        
        if(cart){
            // if cart exists for the user
            let itemIndex = cart.items.findIndex(p => p.productId == productId);
            
            // Check if product exists or not
            if(itemIndex > -1)
      
            {
                let productItem = cart.items[itemIndex];
                productItem.quantity += quantity;
                cart.items[itemIndex] = productItem;
            }
            else {
                cart.items.push({ productId, name, quantity, Price });
            }
            cart.bill += quantity*Price;
            cart = await cart.save();
            return res.status(201).send(cart);
        }
        else{
            // no cart exists, create one
            const newCart = await Cart.create({
                userId,
                items: [{ productId, name, quantity, Price }],
                bill: quantity*Price
            });
            return res.status(201).send(newCart);
        }       
    }
    catch (err) {
  
        res.status(500).send("Something went wrong");
    }
}

module.exports.delete_item = async (req,res) => {
    const userId = req.params.userId;
    const productId = req.params.itemId;
    try{
        let cart = await Cart.findOne({userId});       
         let itemIndex = cart.items.findIndex(p => p.productId == productId);
          if(itemIndex > -1)
        {
            let productItem = cart.items[itemIndex];
            cart.bill -= productItem.quantity*productItem.Price;
            cart.items.splice(itemIndex,1);
        }
        cart = await cart.save();
        return res.status(201).send(cart);
    }
    catch (err) {
    
        res.status(500).send("Something went wrong");
    }
}
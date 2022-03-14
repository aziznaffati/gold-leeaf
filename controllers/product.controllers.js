const addProduct =async (req , res)=>{
    try{
    const newProduct = req.body 

    // create new document 
    const ProductToAdd = new Product(newProduct)
    await ProductToAdd.save()
    res.status(200).send({msg: "Product added succ .....", ProductToAdd})
    }catch (error){
        res.status(400).send({msg: " Can not add new Product !!! ", error })
    }
}
// get all products
const getProducts =async (req , res) =>{
    try {
        const listProducts = await Product.find()
        res.status(200).send({msg: "This is the list of products.....", listProducts })

    } catch (error) {
        res.status(400).send({msg: " Can not get all  products !!! ", error })  
    }
}
 // delete product
const deleteProduct =  async(req, res)=>{
    try {
        const productId = req.params.id
        await Product.deleteOne({ _id: productId })
        res.status(200).send({msg: "Product deleted succ ....." })
        
    } catch (error) {
        res.status(400).send({msg: " Can not delete  product with this id !!! ", error })  
        
    }
}
// get one product
const getProduct = async (req , res) =>{
    try {
        const { _id } = req.params
        const productToFind = await Product.findOne({ _id })
        
        res.status(200).send({msg: "I find  the product.....", productToFind })

    } catch (error) {
        res.status(400).send({msg: " Can not get product with this id !!! ", error }) 
       
    }
}
 // update product
const updateProduct =async (req , res) =>{
    try {
        const { _id } = req.params
        const newProduct = req.body 
        let result = await Product.updateOne({ _id }, { $set: {...newProduct }})
        if(result.modifiedCount === 0 )
        {
            return  res.status(400).send({msg: " Product already updated  !!! " })  
        }
        res.status(200).send({msg: " Product updated succ ..... " })
    
    } catch (error) {
        res.status(400).send({msg: " Can not update product with this id !!! ", error })  
    }
}


module.exports= controllers = {addProduct , getProducts , deleteProduct , getProduct , updateProduct }
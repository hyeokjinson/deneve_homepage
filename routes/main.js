const express=require('express')
const router=express.Router()
const controllers=require('../controllers')
router.get('/',async(req,res,next)=>{
    const data=req.context
    const itemCtr=controllers.item.instance()

    data.coffee=await itemCtr.get({category:'coffee'})
    data.signature=await itemCtr.get({category:'signature'})
    data.latte=await itemCtr.get({category:'latte'})
    data.tea=await itemCtr.get({category:'tea'})
    data.ade=await itemCtr.get({category:'ade'})
    data.dessert=await itemCtr.get({category:'dessert'})

    res.render('home',req.context)

})

router.get('/blog',(req,res,next)=>{
    res.render('blog',req.context)

})

router.get('/items',async(req,res,next)=>{
    const filters=req.query
    const itemCtr=controllers.item.instance()
    const items=await itemCtr.get(filters)

    res.json({
        items
    })
})

router.post('/order',async(req,res,next)=>{
    
    const orderData=req.body
    res.json(orderData)
    // const order=await orderCtr.post(orderData)
    // const orderCtr=controllers.order.instance()
    // res.json(order)
})

module.exports=router
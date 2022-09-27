// const http=require('http')
const express=require('express')
const app=express()
const port=4005 || process.env.PORT 
const cors=require('cors')//cross origin resouce sharing
const Data=require('./Data')

app.use(cors())


app.get('/',(req,res)=>{
    res.end('Hi')
})

// frontend -> route -category -> useParms = category
// frontend => category -> api calls category
// backend : frontend api call -> req(body,params,header) ->parms
// backend route : /:cateogry -> frontend (api call /category) => category variable
// backend: data -> category find -> res (frontend category data)


app.get("/:category",(req,res)=>{
    const {category} = req.params;
    const categoryData=Data[category];
    res.status(200).json(categoryData)
    res.end()
})

// frontend (apicalls '/category/id)
// backend (app calls(income ) => router -> :category(var) :id(var))
// categoryData -data.find(cateogry) 
// postData -> categoryData.find(id);
// res(postData)

app.get('/:category/:id',(req,res)=>{
    // const {category,postId} = req.body;
    // console.log(req.body)

    // console.log(category,postId)
    const {category,id} = req.params;

    const categoryData= Data[category];
    const post=categoryData.find((item)=>item.id===id);

    
    

    res.json(post).status(200)
    res.end();




})
// app.get('/technology',(req,res)=>{
//     res.json(technology).status(200)
//     res.end()
// })
// app.get('/fitness',(req,res)=>{
//     res.json(fitness).status(200)
//     res.end()
// })
// app.get('/food',(req,res)=>{
//     res.json(food).status(200)
//     res.end()
// })
// app.get('/route/api/main',(req,res)=>{
//     res.end(`Express is Fast, unopinionated, minimalist web framework for Nodejs.`)
// })

app.listen(port,()=>{
    console.log(`The server is running on port number ${port}`)
})
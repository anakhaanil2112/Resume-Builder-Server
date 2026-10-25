const jsonServer=require('json-server')
const rbServer=jsonServer.create()
const router=jsonServer.router('db.json')
const middleware=jsonServer.defaults()

const PORT=3000

rbServer.use(middleware)
rbServer.use(router)

rbServer.listen(PORT,()=>{
    console.log(`RB-Server started running at port:${PORT}... and waiting for client request!!`);
    
})

let Koa=require("koa");

let koa=new Koa();

koa.use(ctx=>{
	ctx.body=ctx.query;
});

koa.listen(3000);
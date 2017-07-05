"use strict"

let Koa=require("koa");
let sha1=require("sha1");

let config={
	wechat:{
		appid:"wx914e18b87ddbc384",
		appSecret:"b2d3c00e98a873df039c8c7cdc21e705",
		token:"nodewechat"
	}
}



let koa=new Koa();

koa.use(ctx=>{
	console.log(ctx.query);
	let token=config.wechat.token;
	let signature=ctx.query.signature;
	let nonce=ctx.query.nonce;
	let timestamp=ctx.query.timestamp;
	let echostr=ctx.query.echostr;
    let verStr=[token,timestamp,nonce].sort().join("");
	let sha=sha1(verStr);
	if(sha===signature){
		ctx.body=echostr;
	}
	else
		this.body="wrong";
});

koa.listen(3000);
console.log("is listening 3000 port");
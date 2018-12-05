// 注意图片的名称不能一样
//第一张图片名称是反应地方的
var food={
	"js":{"2018-11-17":["吉首.jpg","吉首2.jpg"],
	      "2018-10-03":["吉首2.jpg"],
	      "2018-10-01":["吉首.jpg","吉首2.jpg"],
	      },
	"gz":{"2018-11-17":["古丈.jpg","古丈2.jpg"],
	      "2018-10-03":["古丈.jpg","古丈2.jpg"],
	      "2018-10-01":["古丈.jpg","古丈2.jpg"]},
	"fh":{"2018-11-17":["凤凰.jpg","凤凰2.jpg"],
	      "2018-10-03":["凤凰.jpg","凤凰2.jpg"],
	      "2018-10-01":["凤凰.jpg","凤凰2.jpg"]},
	"hy":{"2018-11-17":["花垣.jpg","花垣2.jpg"],
	      "2018-10-03":["花垣.jpg","花垣2.jpg"],
	      "2018-10-01":["花垣.jpg","花垣2.jpg"]},
	"ls":{"2018-11-17":["泸溪.jpg","泸溪2.jpg"],
	      "2018-10-03":["泸溪.jpg","泸溪2.jpg"],
	      "2018-10-01":["泸溪.jpg","泸溪2.jpg"]},
	"bj":{"2018-11-17":["保靖.jpg","保靖2.jpg"],
	      "2018-10-03":["保靖.jpg","保靖2.jpg"],
	      "2018-10-01":["保靖.jpg","保靖2.jpg"]},
	"ys":{"2018-11-17":["永顺.jpg","永顺2.jpg"],
	      "2018-10-03":["永顺.jpg","永顺2.jpg"],
	      "2018-10-01":["永顺.jpg","永顺2.jpg"]},
	"lx":{"2018-11-17":["泸溪.jpg","泸溪2.jpg"],
	      "2018-10-03":["泸溪.jpg","泸溪2.jpg"],
	      "2018-10-01":["泸溪.jpg","泸溪2.jpg"]},

}









var js=[]
for(var name in food.js)
{
	js.push(name)
}


var  gz=[]
for(var name in food.gz)
{
	gz.push(name)
}

var ys=[]
for(var name in food.ys)
{
	ys.push(name)
}

var bj=[]
for(var name in food.bj)
{
	bj.push(name)
}


var hy=[]
for(var name in food.hy)
{
	hy.push(name)
}

var ls=[]
for(var name in food.ls)
{
	ls.push(name)
}



var lx=[]
for(var name in food.lx)
{
	lx.push(name)
}


var fh=[]
for(var name in food.fh)
{
	fh.push(name)
}

var foodlist=[]
foodlist.push(js)
foodlist.push(gz)
foodlist.push(ys)
foodlist.push(lx)
foodlist.push(hy)
foodlist.push(ls)
foodlist.push(bj)
foodlist.push(fh)
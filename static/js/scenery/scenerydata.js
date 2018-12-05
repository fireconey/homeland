// 注意图片的名称不能一样
//第一张图片名称是反应地方的
var scenery={
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
	"ls":{"2018-11-17":["龙山.jpg","龙山2.jpg"],
	      "2018-10-03":["龙山.jpg","龙山2.jpg"],
	      "2018-10-01":["龙山.jpg","龙山2.jpg"]},
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
for(var name in scenery.js)
{
	js.push(name)
}


var  gz=[]
for(var name in scenery.gz)
{
	gz.push(name)
}

var ys=[]
for(var name in scenery.ys)
{
	ys.push(name)
}

var bj=[]
for(var name in scenery.bj)
{
	bj.push(name)
}


var hy=[]
for(var name in scenery.hy)
{
	hy.push(name)
}

var ls=[]
for(var name in scenery.ls)
{
	ls.push(name)
}



var lx=[]
for(var name in scenery.lx)
{
	lx.push(name)
}


var fh=[]
for(var name in scenery.fh)
{
	fh.push(name)
}

var scenerylist=[]
scenerylist.push(js)
scenerylist.push(gz)
scenerylist.push(ys)
scenerylist.push(lx)
scenerylist.push(hy)
scenerylist.push(ls)
scenerylist.push(bj)
scenerylist.push(fh)
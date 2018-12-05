// 注意图片的名称不能一样
//第一张图片名称是反应地方的
var city={
	"js":{"2018-11-17":["吉首.jpg","吉首2.jpg","吉首3.jpg"],
	      },
	"gz":{"2018-11-17":["古丈.jpg","古丈2.jpg","古丈3.jpg"],
	      },
	"fh":{"2018-11-17":["凤凰.jpg","凤凰2.jpg","凤凰3.jpg"],
	      },
	"hy":{"2018-11-17":["花垣.jpg","花垣2.jpg","花垣3.jpg"],
	      },
	"ls":{"2018-11-17":["龙山.jpg","龙山2.jpg","龙山3.jpg"],
	      },
	"bj":{"2018-11-17":["保靖.jpg","保靖2.jpg","保靖3.jpg"],
	      },
	"ys":{"2018-11-17":["永顺.jpg","永顺2.jpg","永顺3.jpg"],
	      },
	"lx":{"2018-11-17":["泸溪.jpg","泸溪2.jpg","泸溪3.jpg"],
	      },

}









var js=[]
for(var name in city.js)
{
	js.push(name)
}


var  gz=[]
for(var name in city.gz)
{
	gz.push(name)
}

var ys=[]
for(var name in city.ys)
{
	ys.push(name)
}

var bj=[]
for(var name in city.bj)
{
	bj.push(name)
}


var hy=[]
for(var name in city.hy)
{
	hy.push(name)
}

var ls=[]
for(var name in city.ls)
{
	ls.push(name)
}



var lx=[]
for(var name in city.lx)
{
	lx.push(name)
}


var fh=[]
for(var name in city.fh)
{
	fh.push(name)
}

var citylist=[]
citylist.push(js)
citylist.push(gz)
citylist.push(ys)
citylist.push(lx)
citylist.push(hy)
citylist.push(ls)
citylist.push(bj)
citylist.push(fh)
// 注意图片的名称不能一样
//第一张图片名称是反应地方的
var food={
	"js":{"2018-11-17":["板鸭.jpg","板鸭2.jpg","板鸭3.jpg"],
	     
	      },
	"gz":{"2018-11-17":["毛尖.jpg","毛尖2.jpg","毛尖3.jpg","毛尖4.jpg",
	      "毛尖5.jpg","红茶1.jpg","红茶2.jpg"],
	     },
	"fh":{},
	"hy":{},
	"ls":{},
	"bj":{"2018-11-17":["黄金.jpg","黄金2.jpg","黄金3.jpg"],
	      },
	"ys":{},
	"lx":{},
	"gy":{"2018-11-19":["包谷酸.jpg","糍粑.jpg","米粉.jpg"]}

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

var gy=[]
for(var name in food.gy)
{
	gy.push(name)
}
var foodlist=[]
foodlist.push(gy)
foodlist.push(js)
foodlist.push(gz)
foodlist.push(ys)
foodlist.push(lx)
foodlist.push(hy)
foodlist.push(ls)
foodlist.push(bj)
foodlist.push(fh)

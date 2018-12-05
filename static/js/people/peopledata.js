// 注意图片的名称不能一样
//第一张图片名称是反应地方的
var people={
	"js":{"2018-11-17":["吉首.jpg","吉首2.jpg"],
	      "2018-10-03":["吉首2.jpg"],
	      "2018-10-01":["吉首.jpg","吉首2.jpg"],
	      },
	"gz":{"2018-11-17":["古丈.jpg"],
	      "2018-10-03":["古丈.jpg"],
	      "2018-10-01":["古丈.jpg"]},
	"fh":{"2018-11-17":["凤凰.jpg"],
	      "2018-10-03":["凤凰.jpg"],
	      "2018-10-01":["凤凰.jpg"]},
	"hy":{"2018-11-17":["花垣.jpg"],
	      "2018-10-03":["花垣.jpg"],
	      "2018-10-01":["花垣.jpg"]},
	"ls":{"2018-11-17":["龙山.jpg"],
	      "2018-10-03":["龙山.jpg"],
	      "2018-10-01":["龙山.jpg"]},
	"bj":{"2018-11-17":["保靖.jpg"],
	      "2018-10-03":["保靖.jpg"],
	      "2018-10-01":["保靖.jpg"]},
	"ys":{"2018-11-17":["永顺.jpg"],
	      "2018-10-03":["永顺.jpg"],
	      "2018-10-01":["永顺.jpg"]},
	"lx":{"2018-11-17":["泸溪.jpg"],
	      "2018-10-03":["泸溪.jpg"],
	      "2018-10-01":["泸溪.jpg"]},

}









var js=[]
for(var name in people.js)
{
	js.push(name)
}


var  gz=[]
for(var name in people.gz)
{
	gz.push(name)
}

var ys=[]
for(var name in people.ys)
{
	ys.push(name)
}

var bj=[]
for(var name in people.bj)
{
	bj.push(name)
}


var hy=[]
for(var name in people.hy)
{
	hy.push(name)
}

var ls=[]
for(var name in people.ls)
{
	ls.push(name)
}



var lx=[]
for(var name in people.lx)
{
	lx.push(name)
}


var fh=[]
for(var name in people.fh)
{
	fh.push(name)
}

var peoplelist=[]
peoplelist.push(js)
peoplelist.push(gz)
peoplelist.push(ys)
peoplelist.push(lx)
peoplelist.push(hy)
peoplelist.push(ls)
peoplelist.push(bj)
peoplelist.push(fh)
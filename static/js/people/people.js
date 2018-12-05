$(document).ready(function(){
	var locod={
		"吉首":"js",
		"古丈":"gz",
		"永顺":"ys",
		"泸溪":"lx",
		"花垣":"hy",
		"龙山":"ls",
		"凤凰":"fh",
		"保靖":"bj"
	}


	initleftboor()
	init(2,"gz")
	bindclick()
	dick()


    //初始化左边的工具栏，一定要最先调用
    function  initleftboor(){
    	var click=$(".split")
    	for(var i=0;i<8;i++)
    	{
    		click.children("p")[4*i+1].innerText=peoplelist[i][0]
    		click.children("p")[4*i+2].innerText=peoplelist[i][1]
    		click.children("p")[4*i+3].innerText=peoplelist[i][2]
    	}
    }
    
    //点击后用于显示
    function  show(local,t)
    {    
    	var time=people[local][t]

    	var el=document.getElementById("contentbox")
    	for(var i in time)
    	{
    		el.innerHTML+='<div class="content">\
    		<img src="../static/img/people/'+local+"/"+time[i]+'" alt="">\
    		<p>'+peopletext[local][time[i]]+'</p>\
    		</div>'

    	}
    }

    //直接点击导航转来的初始化要显示那个地方的
    function init(n,local)
    {       
    	var el=document.getElementById("contentbox")
    	var name=$(".split p")[n*4-3].innerText;
    	time=people[local][name]
    	for(var i in time)
    	{
    		el.innerHTML+='<div class="content">\
    		<img src="../static/img/people/'+local+"/"+time[i]+'" alt="">\
    		<p>'+peopletext[local][time[i]]+'</p>\
    		</div>'

    	}

    }



    //绑定左边的按钮
    function bindclick()
    {

    	$(".split p").click(function(e){
    		var el=document.getElementById("contentbox")
    		var name=this.parentNode.children[0].innerText;
    		el.innerHTML=""
    		if(name=="吉首")
    		{   
    			show("js",this.innerText)
    		}
    		if(name=="古丈")
    		{   
    			show("gz",this.innerText)
    		}
    		if(name=="永顺")
    		{   
    			show("ys",this.innerText)
    		}
    		if(name=="泸溪")
    		{   
    			show("lx",this.innerText)
    		}
    		if(name=="花垣")
    		{   
    			show("hy",this.innerText)
    		}
    		if(name=="龙山")
    		{   
    			show("ls",this.innerText)
    		}
    		if(name=="保靖")
    		{   
    			show("bj",this.innerText)
    		}
    		if(name=="凤凰")
    		{   
    			show("fh",this.innerText)
    		}
    		e.stopPropagation()
    	})

    }


    //从index页面转来的信息用于显示
    function dick()
    {
    	var values=location.search.replace(/" "/g,"").replace("?","")

    	if(values.length>0)
    	{
    		var list=values.split("&")
    		var loc=list[0].replace("loc=","")
    		var time=list[1].replace("time=","")
    		console.log(loc,time)
    		var ob=$(".split")
    		for(var i=0 ;i<8 ;i++)
    		{   

    			if(locod[ob[i].children[0].innerText]==loc)
    			{  
    				for(var j=0;j<3;j++)
    				{  
    					var childel=ob[i].children[j+1]
    					console.log(childel.innerText,time)
    					if(childel.innerText==time)
    						{  console.log(9)
    							childel.click()

    						}
    					}
    				}
    			}
    		}
    	}


    })
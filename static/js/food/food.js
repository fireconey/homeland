$(document).ready(function(){
	var locod={
		"吉首":"js",
		"古丈":"gz",
		"永顺":"ys",
		"泸溪":"lx",
		"花垣":"hy",
		"龙山":"ls",
		"凤凰":"fh",
		"保靖":"bj",
        "共有":"gy"
	}


	initleftboor()
	init(2,"gz")
	bindclick()
	dick()


    //初始化左边的工具栏，一定要最先调用
    function  initleftboor(){
    	var click=$(".split")
    	for(var i=0;i<9;i++)
    	{
    		// click.children("p")[4*i+1].innerText=foodlist[i][0]
    		// click.children("p")[4*i+2].innerText=foodlist[i][1]
    		// click.children("p")[4*i+3].innerText=foodlist[i][2]
            for(var j=0;j<foodlist[i].length;j++)
            {

                var node=document.createElement("p");
                var textnode=document.createTextNode(foodlist[i][j]);
                    node.appendChild(textnode);
                click[i].append(node)
            }
    	}
    }
    
    //点击后用于显示
    function  show(local,t)
    {    
    	var time=food[local][t]

    	var el=document.getElementById("contentbox")
    	for(var i in time)
    	{
    		el.innerHTML+='<div class="content">\
    		<img src="../static/img/food/'+local+"/"+time[i]+'" alt="">\
    		<p>'+foodtext[local][time[i]]+'</p>\
    		</div>'

    	}
    }

    //直接点击导航转来的初始化要显示那个地方的
    function init(n,local)
    {       
    	var el=document.getElementById("contentbox")
    	var name=$(".split p")[n*4-3].innerText;
    	time=food[local][name]
    	for(var i in time)
    	{
    		el.innerHTML+='<div class="content">\
    		<img src="../static/img/food/'+local+"/"+time[i]+'" alt="">\
    		<p>'+foodtext[local][time[i]]+'</p>\
    		</div>'

    	}

    }



    //绑定左边的按钮
    function bindclick()
    {
       
    	 $(".split p").click(function(e){
    		var el=document.getElementById("contentbox")
    		var name=this.parentNode.children[0].innerText;
            var self=this.innerText
    		el.innerHTML=""


           
            var p=$(".split p")
            for(var i in p)
            {    if(isNaN(i))
                {
                    break
                }
                if(p[i].style.color=="blue")
                {
                    p[i].style.color="#666"
                } 
            }


            if(name=="共有"&self!="共有")
            {  
                $(this).css("color","blue")
                show("gy",this.innerText)
            }
    		if(name=="吉首"&self!="吉首")
    		{   $(this).css("color","blue")
    			show("js",this.innerText)
    		}
    		if(name=="古丈"&self!="古丈")
    		{   $(this).css("color","blue")
    			show("gz",this.innerText)
    		}
    		if(name=="永顺"&self!="永顺")
    		{   $(this).css("color","blue")
    			show("ys",this.innerText)
    		}
    		if(name=="泸溪"&self!="泸溪")
    		{   $(this).css("color","blue")
    			show("lx",this.innerText)
    		}
    		if(name=="花垣"&self!="花垣")
    		{   $(this).css("color","blue")
    			show("hy",this.innerText)
    		}
    		if(name=="龙山"&self!="龙山")
    		{   $(this).css("color","blue")
    			show("ls",this.innerText)
    		}
    		if(name=="保靖"&self!="保靖")
    		{   $(this).css("color","blue")
    			show("bj",this.innerText)
    		}
    		if(name=="凤凰"&self!="凤凰")
    		{   $(this).css("color","blue")
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
    		for(var i=0 ;i<9 ;i++)
    		{   console.log(ob[i].children[0].innerText)

    			if(locod[ob[i].children[0].innerText]==loc)
    			{   
                    var len=ob[i].children.length-1
                    
    				for(var j=0;j<len;j++)
    				{  
    					var childel=ob[i].children[j+1]
    				
    					if(childel.innerText==time)
    						{  
    							childel.click()

    						}
    					}
    				}
    			}
    		}
    	}


    })
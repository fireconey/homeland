$(document).ready(function()
{

 show()
 diclick()

}) 

function show()
{

 var ob=$(".box")
 for(var i=0;i<12;i++)
 {
   var img=ob[i].children[0]
   var name=ob[i].children[1]
   var detail=ob[i].children[2]
   var sib=ob[i].parentNode.children[0].innerText.split("———")[1]
   if(sib=="风景")
   {
    cp=cmp(scenery)
    loc=cp[i%3+3]
    img.src="static/img/scenery/"+loc+"/"+cp[i%3]
    name.innerText=cp[i%3].replace(".jpg","")
    detail.innerText=scenerytext[cp[i%3+3]][cp[i%3]]
   } 
  if(sib=="美食")
  {
     cp=cmp(food)
    loc=cp[i%3+3]
    img.src="static/img/food/"+loc+"/"+cp[i%3]
    name.innerText=cp[i%3].replace(".jpg","")
    detail.innerText=foodtext[cp[i%3+3]][cp[i%3]]
  } 
  if(sib=="人物")
  {
    cp=cmp(people)
    loc=cp[i%3+3]
    img.src="static/img/people/"+loc+"/"+cp[i%3]
    name.innerText=cp[i%3].replace(".jpg","")
    detail.innerText=peopletext[cp[i%3+3]][cp[i%3]]
  } 
  if(sib=="城市")
  {
    cp=cmp(city)
    loc=cp[i%3+3]
    img.src="static/img/city/"+loc+"/"+cp[i%3]
    name.innerText=cp[i%3].replace(".jpg","")
    detail.innerText=citytext[cp[i%3+3]][cp[i%3]]
  } 
}
}


function diclick()
{

  $(".box").on("click",function(e){
    e.stopPropagation()
    var name=this.children[1].innerText
    var sib=this.parentNode.children[0].innerText.split("———")[1]
    
   
      
    if(sib=="风景")
    {
      var data=scenery
      
      cp=cmp(data)
      loc=cp[cp.indexOf(name+".jpg")+3]
      time=cp[cp.indexOf(name+".jpg")+6]

      window.location.href="pages/scenery.html?loc="+loc+"&time="+time

    }

    if(sib=="美食")
    {
      var data=food
      cp=cmp(data)
      loc=cp[cp.indexOf(name+".jpg")+3]
      time=cp[cp.indexOf(name+".jpg")+6]
      window.location.href="pages/food.html?loc="+loc+"&time="+time

    }
    if(sib=="人物")
    {
      var data=people
      cp=cmp(data)
      loc=cp[cp.indexOf(name+".jpg")+3]
      time=cp[cp.indexOf(name+".jpg")+6]
      window.location.href="pages/people.html?loc="+loc+"&time="+time

    }
    if(sib=="城市")
    {
      var data=city
      cp=cmp(data)
      loc=cp[cp.indexOf(name+".jpg")+3]
      time=cp[cp.indexOf(name+".jpg")+6]
      window.location.href="pages/city.html?loc="+loc+"&time="+time

    }
  })

}

function  cmp(data)
{   
  var temp=[]
  var img=[]
  var loc=[]
  var imgli=[]
  var len=0

  for(var i in data)
  { 

    for(var j in data[i])
    {
     temp.push(j)
     img.push(data[i][j][0])
     loc.push(i)
    len+=1

   }
 }
 var st=temp.slice()
 st.sort()

 var onelist=[]
 var twolist=[]
 var threelist=[]



 for(var i=0;i<len;i++)
 {
   if(temp[i]==st[len-1])
   {
    onelist.push(i)
  }
  if(temp[i]==st[len-2])
  {
    twolist.push(i)
  }
  if(temp[i]==st[len-3])
  {
    threelist.push(i)
  }
}



if(onelist.length>=3)
{
  imgli.push(img[onelist[0]])
  imgli.push(img[onelist[1]])
  imgli.push(img[onelist[2]])

  imgli.push(loc[onelist[0]])
  imgli.push(loc[onelist[1]])
  imgli.push(loc[onelist[2]])
}
else if(onelist.length==2)
{
  imgli.push(img[onelist[0]])
  imgli.push(img[onelist[1]])
  imgli.push(img[temp.indexOf(st[len-3])])

  imgli.push(loc[onelist[0]])
  imgli.push(loc[onelist[1]])
  imgli.push(loc[temp.indexOf(st[len-3])])
}

else if(twolist.length>=2)
{
  imgli.push(img[temp.indexOf(st[len-1])])
  imgli.push(img[twolist[0]])
  imgli.push(img[twolist[1]])

  imgli.push(loc[temp.indexOf(st[len-1])])
  imgli.push(loc[twolist[0]])
  imgli.push(loc[twolist[1]])
}
else{
  imgli.push(img[temp.indexOf(st[len-1])])
  imgli.push(img[temp.indexOf(st[len-2])])
  imgli.push(img[temp.indexOf(st[len-3])])

  imgli.push(loc[temp.indexOf(st[len-1])])
  imgli.push(loc[temp.indexOf(st[len-2])])
  imgli.push(loc[temp.indexOf(st[len-3])])
}

imgli.push(st[len-1])
imgli.push(st[len-2])
imgli.push(st[len-3])


return imgli

}
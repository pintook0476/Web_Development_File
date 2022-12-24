var fashlistList = [
    {
    name:"lipsstick",
    price:3000,
    discount:5,
    rating:4,
    manufacture:"cosmetics",
    images : 'IMG-3297.JPG',
   
},
{
    name:"lipsstick",
    price:3000,
    discount:5,
    rating:4,
    manufacture:"cosmetics",
    images : 'IMG-3297.JPG',
},
{
    name:"lipsstick",
    price:3000,
    discount:5,
    rating:4,
    manufacture:"cosmetics",
    images : 'IMG-3297.JPG',
}


];


var fashionlist = (fashlist) =>{
    var newelement = document.createElement("div");

    var ulelements = document.createElement("ul")
    ulelements.className =  ' fash ' ;
    newelement.appendChild (ulelements);

    var lielements = document.createElement("li");
    lielements.innerText = "product " + fashlist.name;
    ulelements.appendChild(lielements);

    var li2 = document.createElement("li");
    li2.innerText= "price " +fashlist.price ;
    ulelements.appendChild(li2);
    
    var spanelements = document.createElement("span");
    spanelements.innerText = " discount " + fashlist.discount + " % "; 
    li2.appendChild(spanelements);

    var rate = document.createElement("li");
    rate.innerText = " Rating "  
    ulelements.appendChild(rate);
    var span = document.createElement("span");
    span.className=("fa fa-star checked")
    rate.appendChild(span);
    var span = document.createElement("span");
    span.className=("fa fa-star checked")
    rate.appendChild(span);
    var span = document.createElement("span");
    span.className=("fa fa-star checked")
    rate.appendChild(span);
    var span = document.createElement("span");
    span.className=("fa fa-star checked1")
    rate.appendChild(span);
    var span = document.createElement("span");
    span.className=("fa fa-star checked1")
    rate.appendChild(span);

    var manufactures =  document.createElement("li");
    manufactures.innerText= " Manufacture " + " : "+ fashlist.manufacture
    ulelements.appendChild(manufactures);

   var li5 = document.createElement("li");
   ulelements.appendChild(li5);
    var pics = document.createElement("img")
    pics.setAttribute("src" , fashlist.images);
    li5.appendChild(pics);

    document.querySelector(".fashionbox").append(newelement);
    console.log(newelement)
}

for (var i = 0 ; i< fashlistList.length; i++) {
    fashionlist(fashlistList[i]);
}

  

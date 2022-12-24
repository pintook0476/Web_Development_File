// var getrating = (rating) => {
   
//     var ratingcontainer = document.createElement("span");
//     ratingcontainer.setAttribute("class",'ratingimg');    
   
//     //adding fullstars
 
//     for(i=0 ; i < rating ; i++ )
//     {
//      var imgtag2 = document.createElement("img");
//      imgtag2.setAttribute("src","images/fullStar.png");
//      ratingcontainer.append(imgtag2);
 
//     }
 
//     // adding gray stars
    
//     for ( i = rating ; i < 5 ; i++)
//     {
//      imgtag2 = document.createElement("img");
//      imgtag2.setAttribute("src","images/grayStar.png");
//      ratingcontainer.append(imgtag2);
//     }
//   return ratingcontainer;
 
//  }
 

pdetails = [ 
    {
    image:"images/headphone1.png",
    name :"Boat Rockerz 400",
    price : 4000,
    discount : 15,
    rating : 4
},

{
    image:"images/headphone2.png",
    name : "JBL T450BT Extra Bass with Voice Assistant",
    price : 5000,
    discount : 10,
    rating : 3
},

{
    image:"images/headphone3.png",
    name :"BoAt Rockerz 450 Pro Bluetooth Headset",
    price : 2500,
    discount : 10,
    rating : 2
},

{
    image:"images/headphone4.png",
    name :"Cosmic Byte GS430 Wired Headset",
    price : 4500,
    discount : 10,
    rating : 1
},
{
    image:"images/headphone5.png",
    name :"Wings Vader 200 Wired Gaming Headset",
    price : 6500,
    discount : 10,
    rating : 3
},
{
    image:"images/headphone6.png",
    name :"Redgear Cloak Wired  Headset",
    price : 2500,
    discount : 10,
    rating : 4
}

];


var loadproduct = (pdetails) => {
    var divTag = document.createElement("div");
    divTag.setAttribute("class",'productContainer');

    var ulTag = document.createElement("ul");
    ulTag.setAttribute("class",'pDetails');
    divTag.append(ulTag);

    var li1 = document.createElement("li");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("class",'productImg1');
    imgTag.setAttribute("src",pdetails.image);

    li1.append(imgTag);
    ulTag.append(li1);

    var li2 = document.createElement("li");
    var span1 = document.createElement("span");
    span1.setAttribute("class",'name');
    span1.innerText =  pdetails.name;

    li2.append(span1);
    ulTag.append(li2);

    var li3 = document.createElement("li");
    var span2 = document.createElement("span");
    span2.setAttribute("class",'price');
    span2.innerText =  pdetails.price - (pdetails.price*pdetails.discount)/100;

    var span3 = document.createElement("span");
    span3.setAttribute("class", 'realPrice');
    span3.innerText =  pdetails.price;
    
    
    ulTag.append(li3);
    li3.append(span2);
    li3.append(span3);

    var li4 = document.createElement("li");
    // var ratingstar = getrating(pdetails.rating);
    // li4.append(ratingstar);
    ulTag.append(li4);
    
      
    document.querySelector(".items").append(divTag);
}
for ( i = 0 ; i < pdetails.length ; i++)
{
    loadproduct(pdetails[i]);
}


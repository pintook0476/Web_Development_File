var crateDynamicDomElement = (p) => {
    var div1 = document.createElement("div") ;
    div1.setAttribute("class" , "product") ;
    document.querySelector(".main").append(div1);
    var div2 = document.createElement("div");
    div2.setAttribute("class" , "img")
    div1.append(div2);
    var img = document.createElement("img") ;
    img.setAttribute("src" , p.image);
    img.setAttribute("class","productImg") ;
    div2.append(img) ;
    var div3 = document.createElement("div") ;
    div3.innerText = "Product Name : " + p.name ;
    div1.append(div3);
    var div4 = document.createElement("div");
    div4.innerText = "Price : " + p.price + " Rs.";
    div1.append(div4);
    var div5 = document.createElement("div");
    div5.innerText = "Manufacturer : " + p.manufacturer ;
    div1.append(div5);
    var div6 = document.createElement("div");
    div6.setAttribute("class","stardiv")
    div1.append(div6);
    for(var j = 1 ; j <= p.rating ; j++){
            var star = document.createElement("img");
            star.setAttribute("src","./photos/fullStar.PNG");
            star.setAttribute("class" , "star");
            div6.append(star) ;
    }
    if(p.rating % 1 == 0.5){
        var halfstar = document.createElement("img");
        halfstar.setAttribute("src","./photos/halfStar.PNG");
        halfstar.setAttribute("class" , "star");
        div6.append(halfstar) ;
    }
    for(var j = 1 ; j <= 5-p.rating ; j++){
        var graystar = document.createElement("img");
        graystar.setAttribute("src" , "./photos/grayStar.PNG");
        graystar.setAttribute("class","star");
        div6.append(graystar);
    }
 
}
var productDetail = [
    {
        image : "./photos/tshirts.png",
        name : "T-Shirt" ,
        price : 700,
        manufacturer : "spider",
        rating : 4
        //x:crateDynamicDomElement(p1.image)
    },
    {
        image : "./photos/kurta.jpg",
        name : " Ethnic Kurta" ,
        price : 1500,
        manufacturer : "Cloth Factory",
        rating : 3
    },
    {
        image : "./photos/kurti.jpg",
        name : "Chikankari Kurti" ,
        price : 2500,
        manufacturer : "Masaba Fashion",
        rating : 3.5
    },
    {
        image : "./photos/shoes2.png",
        name : "Shoes" ,
        price : 1500,
        manufacturer : "Neelam.shoes",
        rating : 4.5
    }
] ;
for(var i = 0 ; i < productDetail.length ; i++ ){
    crateDynamicDomElement(productDetail[i]);   
}
var navLink = () => {
}
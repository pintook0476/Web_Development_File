var getRatingStars = (rating) => {
    var spanRating = document.createElement("span");
    //yellow star
    for(let a = 2; a<=rating; a++){
        var iTag=document.createElement("i");
        iTag.setAttribute("class", "fa-solid fa-star");
        spanRating.append(iTag);
        console.log(iTag)
    }

    // half star
    if (rating-parseInt(rating)!=0) {
        var iTag=document.createElement("i");
        iTag.setAttribute("class", "fa-solid fa-star-half-stroke");
        spanRating.append(iTag);
        console.log(iTag)
    }
    else{
        var iTag=document.createElement("i");
        iTag.setAttribute("class", "fa-regular fa-star");
        spanRating.append(iTag);
        console.log(iTag)
    }

    // gray star
    for(let a=rating; a<5; a++){
        var iTag=document.createElement("i");
        iTag.setAttribute("class", "fa-regular fa-star");
        spanRating.append(iTag);
        console.log(iTag)
    }
    return spanRating;

}




var pdetailsList = [
    {
        cname: 'AELOMART',
        pname: 'Men\'s T Shirt-(Amt250105-P_Green)',
        rating: 2.5,
        realPrice: 1499,
        discount: 67,
        image: 'img/1.png',
    },
    {
        cname: 'AELOMART',
        pname: 'Men\'s T Shirt-(Amt250105-P_Green)',
        rating: 3,
        realPrice: 1499,
        discount: 67,
        image: 'img/1.png',
    },
    {
        cname: 'AELOMART',
        pname: 'Men\'s T Shirt-(Amt250105-P_Green)',
        rating: 4.4,
        realPrice: 1499,
        discount: 67,
        image: 'img/1.png',
    },
    {
        cname: 'AELOMART',
        pname: 'Men\'s T Shirt-(Amt250105-P_Green)',
        rating: 2.9,
        realPrice: 1499,
        discount: 67,
        image: 'img/1.png',
    },
    {
        cname: 'AELOMART',
        pname: 'Men\'s T Shirt-(Amt250105-P_Green)',
        rating: 4,
        realPrice: 1499,
        discount: 67,
        image: 'img/1.png',
    },
    {
        cname: 'Urbano Fashion',
        pname: 'Men\'s Light Grey Slim Fit Jogger Jeans Stretch',
        rating: 3.4,
        realPrice: 1599,
        discount: 55,
        image: 'img/2.png',
    },
    {
        cname: 'AELOMART',
        pname: 'Men\'s T Shirt-(Amt250105-P_Green)',
        rating: 5,
        realPrice: 1499,
        discount: 67,
        image: 'img/1.png',
    },
    {
        cname: 'AELOMART',
        pname: 'Men\'s T Shirt-(Amt250105-P_Green)',
        rating: 2,
        realPrice: 1499,
        discount: 67,
        image: 'img/1.png',
    }

];




var loadProductData = (pdetails) => {
        var pBox = document.createElement("div");
        pBox.setAttribute("class", "pBox");


        var pImg = document.createElement("img");
        pImg.setAttribute("class", "pImg");
        pImg.setAttribute("src",pdetails.image);
        pBox.append(pImg);

        var ulTag = document.createElement("ul");
        pBox.append(ulTag);

        var li1 = document.createElement("li");
        li1.innerText = pdetails.cname;
        ulTag.append(li1);

        var li2 = document.createElement("li");
        li2.innerText = pdetails.pname;
        ulTag.append(li2);

        var li3 = document.createElement("li");
        // li3.innerHTML="rating";
        var ratingStar = getRatingStars(pdetails.rating);
        li3.append(ratingStar);
        ulTag.append(li3);

    var li4 = document.createElement("li");
    li4.innerHTML = "₹"
    var span1 = document.createElement("span");
    span1.innerText = parseInt(pdetails.realPrice - (pdetails.realPrice * pdetails.discount) / 100);
    li4.append(span1);
    ulTag.append(li4);


    var span2 = document.createElement("span"); 
    span2.innerHTML="₹<s>" + pdetails.realPrice + "</s>";
    li4.append(span2);
    
    var span3 = document.createElement("span");
    span3.innerHTML = "&nbsp;&nbsp;&nbsp;(" + pdetails.discount + "% off)";
    li4.append(span3)

    document.querySelector(".plist").append(pBox);
    // console.log(pBox);
}

for (var i = 0; i < pdetailsList.length; i++) {
    loadProductData(pdetailsList[i])
}

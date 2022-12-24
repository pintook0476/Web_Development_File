 var  getratingStar = (rating) => {
    var ratingContainer = document.createElement("span");
    ratingContainer.setAttribute("class", 'ratingstar');
    for(var i = 0 ; i < rating ; i++ )
    {
        //addnig fullstar
        var imgTag = document.createElement("img");
        imgTag.setAttribute("src",'https://cms-assets.tutsplus.com/uploads/users/34/posts/30118/preview_image/star-rating.jpg');
        ratingContainer .append(imgTag);
    }
    for(var i = rating ; i < 5 ; i++ ){
        //adding greystar
        var imgTag = document.createElement("img");
        imgTag.setAttribute("src",'https://ps.w.org/rate-star-review/assets/icon-256x256.png?rev=1962639');
        ratingContainer.append(imgTag);

    }
    return ratingContainer;
 } 
 var pdetailsList = [
         {
            name :'laptop',
            price : 45000,
            discount : 10 ,
            manufacture : 'sony',
            rating : 3,
            image : 'https://toppng.com/uploads/preview/samsung-laptop-png-11552846920ggjwoxjcy6.png'

        },
        {

            name : 'monitor',
            price : 36000,
            discount: 15 ,
            manufacture : 'dell',
            rating : 4,
            image : 'https://p.kindpng.com/picc/s/1-15438_transparent-apple-computer-png-monitor-png-png-download.png'
        },
        {
            name : 'mouse ',
            price : 45000 ,
            discount : 20 ,
            manufacture : 'lenovo',
            rating : 2,
            image : ' https://www.freepnglogos.com/uploads/mouse-png/download-mouse-png-image-png-image-pngimg-9.png'
        },
    ];
        var loadproductData = (pdetails) => {
            var ulTag = document.createElement("ul");
            ulTag.setAttribute("class",'pdetails');

            var  li1 = document.createElement("li");
            li1.innerText = 'product name : ' +pdetails.name ;
            ulTag.append(li1);

            var li2 = document.createElement("li");
            li2.innerText = 'price ' ;
            ulTag.append(li2);

            var span1 = document.createElement("span");
            span1.setAttribute("class",'actualprize');
            span1.innerText = pdetails.price;
            li2.append(span1);

            var span2 = document.createElement("span");
            span2.setAttribute("class",'afterdiscount');
            span2.innerText = pdetails.price - (pdetails.price * pdetails.discount)/100;
            li2.append(span2);

            var li3 = document.createElement("li");
            li3.innerHTML = 'manufacture : ' +pdetails.manufacture ;
            ulTag.append(li3);

            var li4 = document.createElement("li");
            li4.innerHTML = 'rating : ' ;
            var ratingStar = getratingStar(pdetails.rating);
            li4.append(ratingStar);
            ulTag.append(li4);
            
            var li5 = document.createElement("li");
            li5.setAttribute("class", 'pImage');
            var imgTag = document.createElement("img");
            imgTag.setAttribute("src", pdetails.image);
            li5.append(imgTag);
            ulTag.append(li5);
            

            document.querySelector(".productdetails").append(ulTag);
            console.log(ulTag);
            
        }
         for(var i = 0 ; i <= pdetailsList.length ; i++ )
        {
            loadproductData(pdetailsList[i]);
        }
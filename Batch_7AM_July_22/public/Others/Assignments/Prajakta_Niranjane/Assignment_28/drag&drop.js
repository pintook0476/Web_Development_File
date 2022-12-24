var picID;
var elementGotDrop=(event)=>{
    event.preventDefault();
    imgTag1 =document.createElement("img");
    imgTag1.id=picID;
    imgTag1.class=picClass;
    imgTag1.src=picSrc;
    if (picClass == "men") {
        document.querySelector(".mcontainer").append(imgTag1);
    } else if (picClass == "women"){
        document.querySelector(".wcontainer").append(imgTag1);
    }
    else if (picClass == "kid"){
        document.querySelector(".kcontainer").append(imgTag1);
    }
}
var dragGotOver =(event)=>{
    event.preventDefault();
}
var dragIsStart=(event)=>{
    picID ="#"+event.target.getAttribute("id");
    picSrc = event.target.getAttribute("src");
    picClass =event.target.getAttribute("class");
}
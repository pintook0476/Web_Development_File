(()=>{
    document.querySelector(".lgnbutton").addEventListener("click",() =>{
            sname = document.querySelector(".uname").value
            console.log(sname);
            pswrd = document.querySelector(".upassword").value;
            console.log(pswrd);
        
            if(sname == "admin" && pswrd == "admin"){
                document.location.href ="./04_Productpage.html"
            }else{
                //alert("invalid, use Credintials as admin")
            }
        
            /*lgnelemnt = document.createElement("a");
                lgnelemnt.setAttribute("href","./04_Productpage.html");
                //console.log(lgnelemnt);
                document.querySelector(".lgnbutton").append(lgnelemnt);
                console.log(lgnelemnt);*/
    })
   
})()

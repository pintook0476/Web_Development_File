var bookList = ["Chanakya Niti", "Bhagvat Gita", "Success", "Sansar", "Meditation", "Fitness book", "Physics", "Chemistry", "Higher Mathematics", "Wings", "Make IT stick", "Electronics", "Electrical", "Communication", "Computer Architechture", "Algorithm", "Operating System", "Networking", "Beloved","The Human", "Pride And Prejudice","Frankenstein", "Rich Dad Poor Dad", "Life Will Change", "Fear Not Be Strong", "Success","Atomic Habits","I Too Had A Dream","Green Enviornment","Justice For Good","Keep It Simple","Logarithms", "Languages","Programming Basics","NeuroScience","Oracle","Universe","XML Encyclopedia","Roald Dahl","System Engineering","Science","Web Technologies","Victory of India","Zero","ZBook","","One Reach-Man","Kanchana","R.S Agrwal","Java",];



var searchBookName = () => {
    document.querySelector(".autofillSection").innerHTML = "";
    var searchBName = document.querySelector("#searchBook").value;
    console.log(searchBName)
    searchBName = searchBName.toLowerCase();
    searchBName = searchBName.trim();
   
    var i = 0;
    while (i < bookList.length && searchBName != "") {

        var bookStritngLetters = bookList[i].substring(0, (searchBName.length));
        bookStritngLetters = bookStritngLetters.toLowerCase();

        if (searchBName == bookStritngLetters) {
            var filteredName = bookList[i];
            console.log(filteredName);
            var liTag = document.createElement("li");
            liTag.innerText = filteredName;
            document.querySelector(".autofillSection").append(liTag);

            liTag.addEventListener("click" , (event) => {
                console.log(event);
                var bname = event.srcElement.innerHTML; 
                document.querySelector("#searchBook").value = bname;
                document.querySelector(".autofillSection").innerHTML = "";
            })
        }

        i++;
    }
}
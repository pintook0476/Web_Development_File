var bookList = ["Win The Life", "Dream Big", "The Intelligent Investor", "Habits", "Meditation", "Fitness book", "Quantum Physics", "Chemistry", "Higher Mathematics", "Wings Of Fire", "Make IT stick", "Electronics", "Electrical", "Communication", "Computer Architechture", "Algorithm", "Operating System", "Networking", "Beloved","The Sun Also Rises", "Pride And Prejudice","Frankenstein", "Rich Dad Poor Dad", "Life Will Change", "Fear Not Be Strong", "Success","Atomic Habits","I Too Had A Dream","Green Enviornment","Justice For Good","Keep It Simple","Logarithms", "Languages","Programming Basics","NeuroScience","Oracle","Universe","XML Encyclopedia","Roald Dahl","System Engineering","Science","Web Technologies","Victory of India","Zero","ZBook","Year Of The Rumways","Yellow : A Novel","Radiation","Gallaxy","MicroProcessor",];

var searchBookNames = () => {
    document.querySelector(".autoFillContainer").innerHTML = "";
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
            document.querySelector(".autoFillContainer").append(liTag);

            liTag.addEventListener("click" , (event) => {
                console.log(event);
                var bname = event.srcElement.innerHTML; 
                document.querySelector("#searchBook").value = bname;
                document.querySelector(".autoFillContainer").innerHTML = "";
            })
        }

        i++;
    }
}
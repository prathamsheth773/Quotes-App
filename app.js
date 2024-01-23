let randomAuthor = []
fetchRandomQuote = () =>{
    randomAuthor = [];
    fetch("https://type.fit/api/quotes")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        let random = Math.floor(Math.random()*13);
        document.getElementById('random-qoute').innerHTML = (data[random].text)
        randomAuthor.push(data[random].author)
        randomAuthor.push(data[random + 1].author)
        randomAuthor.push(data[random + 2].author)


        //render author value
        let authorConatiner = document.getElementById('author-container')
        authorConatiner.innerHTML = ""
        randomAuthor.map((x)=>{
            let author = document.createElement('div')
            author.classList.add('author')
            author.innerHTML = x
            authorConatiner.appendChild(author)
        })
      });   
}


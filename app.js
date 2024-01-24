let randomAuthor = []
randomAuthor = [];
fetchRandomQuote = () =>{
    fetch("https://type.fit/api/quotes")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        randomAuthor = [];
        let random = Math.floor(Math.random()*13);
        document.getElementById('random-qoute').innerHTML = (data[random].text)
        document.getElementById('random-author').innerHTML = (data[random].author)
        randomAuthor.push(data[random].author)
        randomAuthor.push(data[random + 1].author)
        randomAuthor.push(data[random + 2].author)


        //render author value
        let authorConatiner = document.getElementById('author-container')
        authorConatiner.innerHTML = ""
        randomAuthor.map((x)=>{
            let author = document.createElement('div')
            author.classList.add('author')
            author.addEventListener('click',renderRequestQuotes)
            author.innerHTML = x
            authorConatiner.appendChild(author)
        })
      });   
}
renderRandomAuthors = () =>{
    let authorConatiner = document.getElementById('author-container')
    authorConatiner.innerHTML = ""
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      randomAuthor = [];
      let random = Math.floor(Math.random()*13);
      randomAuthor.push(data[random].author)
      randomAuthor.push(data[random + 1].author)
      randomAuthor.push(data[random + 2].author)

      //render author value
      authorConatiner.innerHTML=""
      randomAuthor.map((x)=>{
          let author = document.createElement('div')
          author.classList.add('author')
          author.addEventListener('click',renderRequestQuotes)
          author.innerHTML = x
          authorConatiner.appendChild(author)
      })
    });   
}
renderRequestQuotes = (e) =>{
    // e => event
    let requestedAuthor = e.target.innerHTML;
    document.getElementById('author-name').innerHTML = requestedAuthor;
    let quotesContainer = document.getElementById('requestedQuotesContainer')
    quotesContainer.innerHTML = ""
    fetch("https://type.fit/api/quotes")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let requestedQuotes = data.filter((x)=>{
            return x.author == requestedAuthor;
        }).map((x)=>{
            let div = document.createElement('div')
            div.classList.add('quotes');
            div.innerHTML = x.text
            quotesContainer.appendChild(div)
        })
        console.log(requestedQuotes);
        renderRandomAuthors()
    })
}
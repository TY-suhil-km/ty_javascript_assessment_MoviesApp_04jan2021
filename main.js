let btn = document.querySelector('.btn');
btn.addEventListener('click', e => {
    e.preventDefault();
});

function onSubmit() {
    let btn = document.movie.movieName.value;
    fetch(`http://www.omdbapi.com/?apikey=fd1533a4&s=${document.movie.movieName.value}`).then(res => {
        return res.json();
    }).then(data => {
        displayResults(data);
    });
    document.movie.movieName.value = ""
}

function displayResults(results) {
    let movie = "";

    for (let ele in results.Search) {
        let result = results.Search[ele];
        console.log(result)
        movie += `<div class="col-md-3 card  mb-5 mr-5  d-inline-block">
                            <div class="card-body">
                                <div class="divsize"><img class="card-img-top  imagesize" src="${result.Poster}" alt=""></div>
                                <h5 class=" h3">${result.Title}</h5>
                                <p class="card-text"><span class="h5">Year:</span> ${result.Year}</p>
                                <button class="btn btn-primary float-right mybtn" >Watch</button><br>
                            </div>
                 </div>
                     `

    }
    document.getElementById('cbody').innerHTML = movie;

}



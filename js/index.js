const form = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");

let search = "";
let movies = [];

const fetchMovies = async () => {
  movies = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}`
  ).then((res) => res.json());
  console.log(movies);
};

const moviesDisplay = async () => {
  await fetchMovies();

  movies.results.length = 12;

  result.innerHTML = movies.results
    .map(
      (movie) =>
        `
      <li class='jojo'>
        <h2>${movie.original_title}</h2>
        <div class="card-content">
          <img  src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class='photo'></img>
          <div class="infos">
            <p>${movie.overview}</p>
            <p>Popularité : ${movie.popularity} ⭐</p>
          </div>
        </div>
      </li>
    `
    )
    .join("");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  search = searchInput.value;

  fetchMovies();
  moviesDisplay();
});

// le header de mon application web

let toogle = document.querySelector(".toogle");

let body = document.querySelector("body");

toogle.addEventListener("click", function () {
  body.classList.toggle("open");
});

const card = $("#result");

// $("#result").on("mousemove", function (t) {
//   let vertical = -($(window).innerWidth() / 2 - t.pageX) / 170,
//     horizontal = ($(window).innerHeight() / 2 - t.pageY) / 170;

//   card.attr(
//     "style",
//     "transform: rotateY(" + vertical + "deg) rotateX(" + horizontal + "deg)"
//   );
// });



// button qui remonte


const retour=document.querySelector('.retour')


retour.addEventListener('click',()=>{

window.scrollTo({

top:0,

left:0,

behavior:"smooth"

}

)


})








// bouton qui remonte

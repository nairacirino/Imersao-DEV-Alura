/* MEUS FILMES PREFERIDOS*/
var meusFilmes = [
    "https://m.media-amazon.com/images/I/51m3mIG0Y7L._AC_.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/5/5b/Closer_p%C3%B4ster.jpg",
    "https://br.web.img2.acsta.net/c_310_420/pictures/210/509/21050952_20131018203347915.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/2/26/Outlander-season-5-poster.png",
    "https://upload.wikimedia.org/wikipedia/pt/a/a1/Brokeback_mountain.jpg",

    "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
];

for (var i = 0; i < meusFilmes.length; i++) {
    document.write("<img src=" + meusFilmes[i] + ">");
}
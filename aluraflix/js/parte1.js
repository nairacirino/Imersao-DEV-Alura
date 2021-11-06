/* MEUS FILMES PREFERIDOS*/
var meusFilmes = [
    "https://m.media-amazon.com/images/I/51m3mIG0Y7L._AC_.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/2/26/Outlander-season-5-poster.png",
    "https://upload.wikimedia.org/wikipedia/pt/a/a1/Brokeback_mountain.jpg",
];

for (var i = 0; i < meusFilmes.length; i++) {
    document.write("<img src=" + meusFilmes[i] + ">");
}
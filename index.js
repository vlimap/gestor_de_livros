const prompt = require("prompt-sync")();
const { criarAutor } = require("./autor/criarAutor");
const { criarLivros } = require("./livros/criarLivro");
const { listarAutores } = require("./autor/listarAutor")
const { listarLivros } = require("./livros/listarLivro");

const autor1 = criarAutor("Zezinho","zezinho@email.com");
criarLivros("Livro De Zezinho", autor1,"12345");

const autor2 = criarAutor("Joaozin","joazin@email.com");
criarLivros("Livro De Joaozin", autor2,"12345");

listarAutores();
listarLivros();





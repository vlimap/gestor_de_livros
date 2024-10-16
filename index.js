const prompt = require("prompt-sync")();
const { criarAutor } = require("./autor/criarAutor");
const { criarLivros } = require("./livros/criarLivro");
const { listarAutores } = require("./autor/listarAutor")
const { listarLivros } = require("./livros/listarLivro");

criarAutor("Zezinho","zezinho@email.com");
criarLivros("Livro De fulano","Zezinho","12345");

listarAutores();
listarLivros();





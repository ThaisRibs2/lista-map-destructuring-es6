console.log("===== MAP 01 =====");

// 1. Dobrar Valores
const nums = [1, 2, 3, 4, 5];
const dobrados = nums.map(n => n * 2);
console.log("1. Dobrados:", dobrados);

// 2. Nomes Próprios
const nomes = ["ana", "joão", "maria"];
const capitalizados = nomes.map(n => n[0].toUpperCase() + n.slice(1));
console.log("2. Capitalizados:", capitalizados);

// 3. Desestruturação de Array
const frutas = ['Maçã', 'Banana'];
const [f1, f2] = frutas;
console.log("3. Frutas:", f1, f2);

// 4. Troca de Variáveis
let a = 1, b = 2;
[a, b] = [b, a];
console.log("4. Swap:", a, b);

// 5. Objeto Pessoa
const pessoa = { nome: 'Ana', idade: 25 };
const { nome } = pessoa;
console.log("5. Nome:", nome);

// 6. Map com Índice
const itens = ["Caderno", "Lápis", "Borracha"];
const lista = itens.map((v, i) => `Índice ${i}: ${v}`);
console.log("6. Lista:", lista);

// 7. Converter para string
const numeros = [10, 20, 30];
const strings = numeros.map(String);
console.log("7. Strings:", strings);

// 8. Extrair nomes
const cidades = [{nome: "SP"}, {nome: "RJ"}];
const nomesCidades = cidades.map(c => c.nome);
console.log("8. Cidades:", nomesCidades);

// 9. Default
const { cor = "preto" } = {};
console.log("9. Cor:", cor);

// 10. Rest
const valores = [10, 20, 30, 40];
const [primeiro, ...outros] = valores;
console.log("10. Primeiro:", primeiro, "| Outros:", outros);

console.log("===== FIM MAP 01 =====");
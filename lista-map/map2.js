console.log("===== MAP 02 =====");

// 11. Alias
const curso = { id: 1, title: 'JS' };
const { title: tituloCurso } = curso;
console.log("11:", tituloCurso);

// 12. Frases
const produtos = [
  { nome: "PC", preco: 3000 },
  { nome: "Mouse", preco: 100 }
];
const frases = produtos.map(p => `O produto ${p.nome} custa R$ ${p.preco}`);
console.log("12:", frases);

// 13. Desestruturação em parâmetro
const exibir = ({ nome, email }) => `User: ${nome} - ${email}`;
console.log("13:", exibir({ nome: "Vini", email: "v@v.com" }));

// 14. Map objetos
const status = [10, 15].map(n => ({ valor: n, par: n % 2 === 0 }));
console.log("14:", status);

// 15. Aninhado
const carro = { motor: { cavalos: 150 } };
const { motor: { cavalos } } = carro;
console.log("15:", cavalos);

// 16. Lógica
const idades = [15, 20, 18].map(i => i < 18 ? "Menor" : "Maior");
console.log("16:", idades);

// 17. Array aninhado
const [, [n2, n3]] = [1, [2, 3], 4];
console.log("17:", n2, n3);

// 18. Desconto
const desconto = produtos.map(p => ({ ...p, preco: p.preco * 0.9 }));
console.log("18:", desconto);

// 19. API limpa
const api = [{ id: 1, user: "Vini", log: "x" }];
const limpa = api.map(({ id, user }) => ({ id, user }));
console.log("19:", limpa);

// 20. Percentual
const notas = [10, 20, 30];
const percent = notas.map((v, _, arr) => (v / arr.length) + "%");
console.log("20:", percent);

console.log("===== FIM MAP 02 =====");
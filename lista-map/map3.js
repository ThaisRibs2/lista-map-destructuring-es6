console.log("===== MAP 03 =====");

// 21 HTML
const tags = [{t:"Home",u:"/"},{t:"Blog",u:"/blog"}]
  .map(({t,u})=>`<a href="${u}">${t}</a>`);
console.log("21:", tags);

// 22 Merge
const ids = [101,102];
const nomes = ["Alice","Bob"];
const base = ids.map((id,i)=>({id,nome:nomes[i]}));
console.log("22:", base);

// 23 Dinâmico
const campo = "email";
const { [campo]: valor } = { email:"teste@test.com" };
console.log("23:", valor);

// 24 Média
const alunos = [{n:"A",notas:[8,9]},{n:"B",notas:[5,6]}];
const medias = alunos.map(({n,notas})=>({
  nome:n,
  media: notas.reduce((a,b)=>a+b)/notas.length
}));
console.log("24:", medias);

// 25 Remover campo
const config = {porta:80,token:"123",debug:true};
const { token, ...publico } = config;
console.log("25:", publico);

// 26 Estoque
const estoque = [{item:"Mouse",preco:50,qtd:10}];
const total = estoque.map(i=>({...i,total:i.preco*i.qtd}));
console.log("26:", total);

// 27 Alias
const idsMap = [{id_user:1},{id_user:2}]
  .map(({id_user:id})=>id);
console.log("27:", idsMap);

// 28 Coluna
const col = [[1,2],[3,4],[5,6]]
  .map(([p])=>p);
console.log("28:", col);

// 29 Default
const contatos = [{nome:"Vini",tel:"123"},{nome:"Ana"}];
const normal = contatos.map(({tel="N/A",...r})=>({...r,tel}));
console.log("29:");
console.table(normal);

// 30 Classe
class Relatorio {
  gerar(users){
    return users.map(({nome,cargo}) =>
      `LOG: ${nome.toUpperCase()} - ${cargo}`
    );
  }
}
const r = new Relatorio();
console.log("30:", r.gerar([{nome:"vini",cargo:"dev"}]));

console.log("===== FIM MAP 03 =====");
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa_1 = {
	nome: 'Rafaela',
	idade: 23,
};

const pessoa_2 = {
	nome: 'Leonardo',
	idade: 24,
};

const pessoa_3 = {
	nome: 'Alice',
	idade: 13,
};

console.log(calculaIdade.call(pessoa_3, 25));
console.log(calculaIdade.apply(pessoa_2, [33]));
/*
[M1S07] Descrição dos exercícios da semana: 
Os exercícios desta semana monta um mini projeto simulando uma estrutura de controle de estoque. 
O intuito é praticar os conceitos de classe e objeto aprendidos em aula.
Os exercícios devem ser executados em sequência.
Ao final coloque o código no GitHub e disponibilize o link da resolução nos cards.
Obs: não esqueça de mover os cards para a coluna done.

[M1S07] Ex 1 - Criando classe Produto - Crie uma classe chamada Produto com os seguintes atributos:
nome
preco
quantidade

[M1S07] Ex 2 - Criando construtor da classe Produto
Crie um construtor para a classe Produto que permita receber os valores base para cada um dos parâmetros.

[M1S07] Ex 3 - Criando método Vender
Crie um método para a classe Produto chamado de Vender().
Este método deve receber como parâmetro a quantidade vendida e deve reduzir (deduzir) da quantidade do produto. 
Porém, para ser possível essa venda a quantidade vendida não pode ser maior que a quantidade disponível.
Caso não haja quantidade suficiente, exiba uma mensagem de “Estoque insuficiente”.

[M1S07] Ex 4 - Criando método Repor
Crie um método chamado Repor() dentro da classe Produto.
Este método deve receber como parâmetro a quantidade reposta e adicionar o montante à quantidade do produto.

[M1S07] Ex 5 - Criando método MostrarEstoque
Crie um método chamado de MostrarEstoque() dentro da classe Produto.
Este método deve exibir uma mensagem parecida com a seguinte:
“O produto CANETA BIC AZUL possui 5 unidades disponíveis”

[M1S07] Ex 6 - Criando método AtualizarPreco
Crie um método chamada de AtualizarPreco dentro da classe Produto.
Este método deve receber como parâmetro o novo valor do produto e atualizar o preço atual. 
*/


class Produto {
   nome;
   preco;
   quantidade;

   constructor(valorNome, valorPreco, valorQuantidade){
      this.nome = valorNome
      this.preco = valorPreco
      this.quantidade = valorQuantidade
   }

   Vender(quantidadeVendida){
      if(quantidadeVendida > this.quantidade){
         console.log("Estoque insuficiente")
         return
      }
      this.quantidade -= quantidadeVendida
   }

   Repor(quantidadeReposta){
      if(quantidadeReposta > 0){
         this.quantidade += quantidadeReposta;
         console.log(`Foram repostos ${quantidadeReposta} unidades do produto`);
      } else {
         console.log("A quantidade reposta deve ser um número positivo")
      }
   }

   MostrarEstoque(){
      console.log(`O produto ${this.nome} possui ${this.quantidade} unidades disponíveis`)
   }

   AtualizarPreco(novoValor){
      if(novoValor > 0){
         this.preco = novoValor;
         console.log(`O preço do produto ${this.nome} foi atualizado para R$ ${this.preco}`)
      } else {
         console.log("O preço do produto deverá ser um valor positivo")
      }
   }

}

const caneta = new Produto("Caneta BIC Azul", 0, 5)
caneta.Vender(2)
caneta.Repor(10)
caneta.MostrarEstoque()
caneta.AtualizarPreco(15)
console.log(caneta)


/*
[M1S07] Ex 7 - Criando classe Pessoa
Crie uma nova classe chamada de Pessoa que deve ter os seguintes atributos:
nome
idade
profissao
Esta classe deve possuir um construtor para receber os valores para cada um dos atributos.

[M1S07] Ex 8 - Criando classe Cliente
Crie uma nova classe chamada de Cliente. Esta classe deve herdar a classe Pessoa.
Além disso ela deve possuir os seguintes atributos:
telefone
email
clienteDesde - deve ser uma string no formato “ANO-MES-DIA”
Crie um construtor para receber os valores para todos os atributos da classe Cliente e também da classe Pessoa, 
sendo necessário passar parâmetros para o construtor base da classe Pessoa.
*/

class Pessoa {
   nome;
   idade;
   profissao;

   constructor(nome, idade, profissao){
      this.nome = nome
      this.idade = idade
      this.profissao = profissao
   }
}

class Cliente extends Pessoa {
   telefone;
   email;
   clienteDesde; //string "ANO-MES-DIA"

   constructor(nome, idade, profissao, telefone, email, clienteDesde){
      super(nome, idade, profissao)
      this.telefone = telefone
      this.email = email
      this.clienteDesde = clienteDesde
   }
}

let novaPessoa = new Cliente ("Paula", 39, "nenhuma", "888", "paula@email.com", "2024-12-21")
console.log(novaPessoa)
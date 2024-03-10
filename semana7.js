/*[M1S07] Descrição dos exercícios da semana: 
Os exercícios desta semana monta um mini projeto simulando uma estrutura de controle de estoque. 
O intuito é praticar os conceitos de classe e objeto aprendidos em aula.
Os exercícios devem ser executados em sequência.
Ao final coloque o código no GitHub e disponibilize o link da resolução nos cards.
Obs: não esqueça de mover os cards para a coluna done.*/



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


/* */


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
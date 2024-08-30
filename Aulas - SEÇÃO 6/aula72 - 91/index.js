// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque){
    this.nome = nome; 
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this.estoque, {
        enumerable: true,
        configurable: true,
        get: function(){
            return estoquePrivado
        },
        set:function(valor){
            if(typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }

            estoquePrivado = valor; 
            
        }
        
    });
}

function criaProduto(nome){
    return{
        get nome() {
            return nome;
        }, 
        set nome(valor){
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    };
}
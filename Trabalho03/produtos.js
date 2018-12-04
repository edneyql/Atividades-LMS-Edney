let produtos = [
    {
      nome : 'Touca Oakley',
      valor: 45,
      id : 1,
      image : 'touca1.jpg',
      descricao : 'Touca masculina clássica Oakley, na cor laranja com detalhe marrom.'
    },
    {
      nome : 'Gorro Black Sheep',
      valor: 65,
      id : 2,
      image : 'touca2.jpg',
      descricao : 'Gorro unisex estampada e pompom preto, para looks de inverno.'
    },
    {
      nome : 'Touca Born',
      valor: 49,
      id : 3,
      image : 'touca3.jpg',
      descricao : 'Touca masculina born oficial, na cor de preto chumbo.'
    },
    {
      nome : 'Gorro Element Feather',
      valor: 84,
      id : 4,
      image : 'touca4.jpg',
      descricao : 'Gorro Element com detalhe do emblema do logotipo em metal.'
    },
    {
      nome : 'Gorro Dallas Cowboys',
      valor: 95,
      id : 5,
      image : 'touca5.jpg',
      descricao : 'O gorro Dallas fornece o estilo que você precisa nos dias frios.'
    },
    {
      nome : 'Touca New Era',
      valor: 89,
      id : 6,
      image : 'touca6.jpg',
      descricao : 'A touca da new era garante todo o estilo que você precisa.'
    },
    {
        nome : 'Gorro Hurley',
        valor: 75,
        id : 7,
        image : 'touca7.jpg',
        descricao : 'Gorro Hurley com pompom azul e tag da marca.'
    },
    {
        nome : 'Touca Seattle Seahawks',
        valor: 80,
        id : 8,
        image : 'touca8.jpg',
        descricao : 'Gorro oficial da NFL 2018. Ele é o touchdown certo para elevar os traços urbanos.'
    }
];

$(function(){

    let $divProdutos = $("#divProdutos");

    function adicionarProdutos(){
        $divProdutos.html("");
        for(let i=0, len = produtos.length; i < len; i++){
            adicionarProduto(produtos[i]);
        }
    }

    function adicionarProduto(produto){
        let template = [
            '<div class="col-sm-4 col-md-3 produto" id="produto'+produto.id+'">',
                '<div class="thumbnail" >',
                    '<img src="midias/'+produto.image+'" class="img-responsive">',
                    '<div class="caption">',
                        '<div class="row">',
                            '<div class="col-md-6 col-xs-6">',
                                '<h3>'+produto.nome+'</h3>',
                            '</div>',
                            '<div class="col-md-6 col-xs-6 price">',
                                '<h3><label>R$ '+produto.valor+',00</label></h3>',
                            '</div>',
                        '</div>',
                        '<p>'+produto.descricao+'</p>',
                        '<div class="row">',
                            '<form class="form carrinho" role="form" novalidate>',
                                '<div class="col-md-6 form-group">',
                                    '<input type="number" placeholder="quantidade" class="form-control" name="qtd" min="1" value="1">',
                                '</div>',
                                '<div class="col-md-6">',
                                    '<button type="submit" href="#" class="btn btn-default btn-product"><span class="glyphicon glyphicon-shopping-cart"></span></button>',
                                '</div>',
                            '</form>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>'
        ].join('');

        $divProdutos.append(template);

        $("form", "#produto"+produto.id).submit(function(){
            let qtd = $("input", this).val();
            qtd = parseInt(qtd);
            addCarrinho(produto, qtd);
            exibirCarrinho();
            return false;
        });
    }

    adicionarProdutos();
});
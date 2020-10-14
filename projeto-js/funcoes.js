
//Filtrar os produtos por categoria 
function exibir_categoria(categoria) {

    let elementos = document.getElementsByClassName('box-produtos');
    console.log(elementos);

    for (let i = 0; i < elementos.length; i++) {
        console.log(elementos[i].id);
        if (categoria == elementos[i].id) {
            elementos[i].style = "inline-block"; //tive que alterar pq só block não tava indo
        } else {
            elementos[i].style = "display:none";
        }
    }
};

//Exibir todos os produtos
let exibir_todas = () => {
    let elementos = document.getElementsByClassName('box-produtos');

    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style = "block";
    }
};

//Expandir o tamanho da imagem 
let destaqueImg = (imagem) => {
    console.log(imagem);
    if (imagem.width == 180 && imagem.height == 180) {
        imagem.width = 280
        imagem.height = 280
        
    }else {
        imagem.width = 180
        imagem.height = 180
    }
}

//Favoritar um produto

let favoritar = () => {
    alert("Produto adicionado aos favoritos!")
}


    
<?php

     include("conexao.php");
?>




<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Produtos - ReModa</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
    
</head>

<body>
    <header>
        <!--Início do Menu-->
        <?php
            include_once('menu.html');
        ?>
        <!--Fim do Menu-->
    </header>

    <main>
        
        <br>
        <h1>Produtos</h1>
        <hr>
    
        <div class="container-fluid">
            <div class="categorias">
                <h4>Categorias</h4>
                <ul>
                    <li onclick="exibir_todas()">Todas(12)</li>
                    <li onclick="exibir_categoria('box_blusas')">Blusas(6)</li>
                    <li onclick="exibir_categoria('box_vestidos')">Vestidos(2)</li>
                    <li onclick="exibir_categoria('box_shorts')">Shorts(2)</li>
                    <li onclick="exibir_categoria('box_calcas')">Calças(2)</li>
                </ul>
            </div>
            
            <div class="container">
            <div class="produtos">
            <!--Inserindo dados da tabela produtos via PHP-->
            <?php 
            
                $sql = "select * from todosprodutos";
                $result = $conn->query($sql);
            
                if($result->num_rows > 0){
                    while($rows = $result-> fetch_assoc()){
            ?>

                <div class="box-produtos" id="box_<?php echo $rows["categoria"];?>">
                    <img src="<?php echo $rows["imagem"];?>" width="180px" onmousemove="destaqueImg(this)" onmouseout="imgNormal(this)">
                    <p class="produtos-descricao"><?php echo $rows["descricao"];?></p>
                    <div class="box-preco-fav">
                        <ul class="inf-preco">
                            <li>
                                <p class="produtos-preco">R$<?php echo $rows["preco"];?></p>
                            </li>
                            <li>
                                <p class="produtos-preco-promocional">R$<?php echo $rows["preco_final"];?></p>
                            </li>
                        </ul>
                        <button class="favoritos" type="button" onclick="favoritar()" onclick="favoritar()"><img src="imagens/favorite.png"></button>
                    </div>
                    <hr>
                </div>

            <?php 
                    }
                } else{
                        echo "Nenhum produto cadastrado!";
                }   
            ?>

            </div>
        </div>

        <script src="funcoes.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </main>

    <footer class="rodape bg-dark">
        <div class="info-footer">
            <h4>Formas de pagamento</h4>
            <img class="imagem-footer" src="./imagens/logos-pagamento.png" alt="Formas de pagamento">
            <!--A descrição da tag alt é importante para acessibilidade visual-->
            <p>ReModa &#10048; &copy; &reg</p>
        </div>
    </footer>

    
</body>

</html>
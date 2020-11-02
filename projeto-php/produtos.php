<?php
     include("conexao.php");
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Produtos - ReModa</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
        <!--Início do Menu-->
        <?php
            include_once('menu.html');
        ?>
        <!--Fim do Menu-->
        <h1>Produtos</h1>
        <hr>
    </header>

    <main>
        <div class="container">
            <div class="categorias">
                <h4>Categorias</h4>
                <ul>
                    <li onclick="exibir_todas()">Todas(12)</li>
                    <li onclick="exibir_categoria('blusa')">Blusas(6)</li>
                    <li onclick="exibir_categoria('vestido')">Vestidos(2)</li>
                    <li onclick="exibir_categoria('short')">Shorts(2)</li>
                    <li onclick="exibir_categoria('calca')">Calças(2)</li>
                </ul>
            </div>
            
            <section class="produtos">
            <!--Inserindo dados da tabela produtos via PHP-->
            <?php 
            
                $sql = "select * from produtos";
                $result = $conn->query($sql);
            
                if($result->num_rows > 0){
                    while($rows = $result-> fetch_assoc()){
            ?>

                <div class="box-produtos" id="<?php echo $rows["categoria"];?>">
                    <img src="<?php echo $rows["imagem"];?>" width="180px" onmousemove="destaqueImg(this)" onmouseout="imgNormal(this)" onmouseout="imgNormal(this)">
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

            </section>


        </div>
    </main>

    <footer class="rodape">
        <div class="footer">
            <h4>Formas de pagamento</h4>
            <img class="imagem-footer" src="./imagens/logos-pagamento.png" alt="Formas de pagamento">
            <!--A descrição da tag alt é importante para acessibilidade visual-->
            <p>ReModa &#10048; &copy; &reg</p>
        </div>
    </footer>

    <script src="funcoes.js"></script>
</body>

</html>
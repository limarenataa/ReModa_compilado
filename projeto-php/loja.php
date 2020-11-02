<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Nossas Lojas - ReModa </title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
         <!--Início do Menu-->
        <?php
            include_once('menu.html');
        ?>
        <!--Fim do Menu-->
        <h1>Nossas lojas</h1>
        <hr>
    </header>

    <main>
            <section class="lojas">
                <div class="box-informacoes">
                    <h3>Rio de Janeiro</h3>
                    <p>Avenida das Américas 000</p>
                    <p>Barra da Tijuca</p>
                    <p>(21)0000-0000</p>
                </div>
                <div class="box-informacoes">
                    <h3>Salvador</h3>
                    <p>Avenida Salvador 000</p>
                    <p>Alphaville</p>
                    <p>(71)0000-0000</p>
                </div>
                <div class="box-informacoes">
                    <h3>São Paulo</h3>
                    <p>Avenida São Paulo 000</p>
                    <p>Jardins</p>
                    <p>(11)0000-0000</p>
                </div>
            </section>
       

        <br><br><br><br>
        <hr>
        <br><br><br><br>
   
    </main>

    <footer class="rodape">
        <div class="footer">
            <h4>Formas de pagamento</h4>
            <img class="imagem-footer" src="./imagens/logos-pagamento.png" alt="Formas de pagamento">
            <!--A descrição da tag alt é importante para acessibilidade visual-->
            <p>ReModa &#10048; &copy; &reg</p>
        </div>
    </footer>
</body>
</html>
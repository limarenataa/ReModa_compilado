<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Nossas Lojas - ReModa </title>
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
        <h1>Nossas Lojas</h1>
        <hr>

        <div class="container">
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
        </div>
       

        <br><br><br><br>
        <hr>
        <br><br><br><br>

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
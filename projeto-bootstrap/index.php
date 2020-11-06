<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>ReModa</title>
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

        <!--CAROUSEL-->
        <div id="carouselControl" class="carousel slide carousel-fade" data-ride="carousel">
            <!--Indicadores-->
            <ol class="carousel-indicators">
                <li data-target="#carouselControl" data-slide-to="0" class="active"></li>
                <li data-target="#carouselControl" data-slide-to="1"></li>
                <li data-target="#carouselControl" data-slide-to="2"></li>
            </ol>
            <!--Imagens-->
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="./imagens/banner3.png" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./imagens/banner2.png" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./imagens/banner1.png" alt="Third slide">
                </div>
            </div>
            <!--Controle-->
            <a class="carousel-control-prev" href="#carouselControl" role="button" data-slide="prev">
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselControl" role="button" data-slide="next">
                <span class="sr-only">Next</span>
            </a>
        </div>
        <!--FIM CAROUSEL-->

        <div class="container">
        <br><br><br>
            <p class="lead display-4">Seja bem vindo(a)!</p>
            <h2>Reinvente seu estilo!</h2>
            <hr>
        </div>

            
        <br><br><br>
        <br><br><br>
        <br><br><br>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </main>

    <!--Inicio footer-->
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
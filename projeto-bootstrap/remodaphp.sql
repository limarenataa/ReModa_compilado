CREATE DATABASE  IF NOT EXISTS `remodaphp` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `remodaphp`;
-- MySQL dump 10.13  Distrib 5.7.31, for Win64 (x86_64)
--
-- Host: localhost    Database: remodaphp
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedidos` (
  `idpedidos` int(11) NOT NULL AUTO_INCREMENT,
  `nome_cliente` varchar(45) NOT NULL,
  `endereco` varchar(150) DEFAULT NULL,
  `telefone` int(20) NOT NULL,
  `descricao_produto` varchar(150) DEFAULT NULL,
  `valor_unitario` int(11) DEFAULT NULL,
  `quantidade` int(100) DEFAULT NULL,
  `valor_total` int(11) DEFAULT NULL,
  PRIMARY KEY (`idpedidos`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,'Miriam Andrade','Rua 00, casa 100',11111111,NULL,NULL,NULL,NULL),(2,'Pedro Augusto','Rua 01, casa 102',22222222,NULL,NULL,NULL,NULL),(3,'Fernanda Souza','Rua 03, casa 103',33333333,NULL,NULL,NULL,NULL),(4,'Luciana Barros','Rua 04, casa 104',44444444,NULL,NULL,NULL,NULL),(5,'Dandara Oliveira','Rua 04, casa 104',55555555,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produtos` (
  `idproduto` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(45) CHARACTER SET latin1 NOT NULL,
  `descricao` varchar(150) CHARACTER SET latin1 NOT NULL,
  `imagem` varchar(150) CHARACTER SET latin1 DEFAULT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `preco_final` decimal(8,2) DEFAULT NULL,
  PRIMARY KEY (`idproduto`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'blusas','Blusa florida com amarração','imagens/blusa1.png',119.90,89.90),(2,'blusas','Camiseta verde solta','imagens/blusa2.png',99.90,69.90),(3,'blusas','Camiseta bordada amarração','imagens/blusa4.png',89.90,69.90),(4,'blusas','Camiseta margaridas bordada','imagens/blusa4.png',89.90,59.90),(5,'blusas','Camiseta verde amarração','imagens/blusa8.png',89.90,69.90),(6,'blusas','Camiseta babado','imagens/blusa12.png',89.90,69.90),(7,'vestidos','Vestido amarelo floral','imagens/vestido1.jpg',69.90,39.90),(8,'vestidos','Vestido rosê','imagens/vestido2.jpg',99.90,79.90),(9,'shorts','Short jeans claro','imagens/short1.jpg',149.90,99.90),(10,'shorts','Short rasgado','imagens/short2.jpg',69.90,49.90),(11,'calcas','Calça jeans com rasgos','imagens/calca1.jpg',119.90,89.90),(12,'calcas','Calça social','imagens/calca2.jpg',149.90,119.90);
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'remodaphp'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-15 16:11:26

create view TodosProdutos as
select * from produtos;
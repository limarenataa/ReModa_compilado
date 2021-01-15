CREATE DATABASE  IF NOT EXISTS `remoda` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `remoda`;
-- MySQL dump 10.13  Distrib 5.7.31, for Win64 (x86_64)
--
-- Host: localhost    Database: remoda
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
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `idcliente` int(11) NOT NULL AUTO_INCREMENT,
  `nomecliente` varchar(50) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `telefone` varchar(45) DEFAULT NULL,
  `endereco` varchar(100) DEFAULT NULL,
  `complemento` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idcliente`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Renata','renata@gmail.com','11111111','Rua A','casa b'),(2,'Fernando','fernando@gmail.com','22222222','Rua B ','casa C');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comentarios` (
  `idcomentarios` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `mensagem` varchar(400) DEFAULT NULL,
  `data` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idcomentarios`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (10,'Renata','Teste de conexão com o Banco de Dados','2020-11-03 18:04:31'),(11,'Renata','Teste de conexão com o Banco de Dados','2020-11-03 18:06:43'),(12,'Renata','Teste de conexão com o Banco de Dados','2020-11-03 18:06:51'),(13,'Renata','Teste de conexão com o Banco de Dados2','2020-11-03 18:08:38'),(14,'Renata','teste4','2020-11-06 19:01:40'),(15,'Renata','teste5','2020-11-06 19:03:04'),(16,'Renata','teste5','2020-11-06 19:16:33'),(17,'teste5','asada','2020-12-15 15:32:14'),(18,'Teste','asa','2020-12-15 15:46:15');
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `dadospedido`
--

DROP TABLE IF EXISTS `dadospedido`;
/*!50001 DROP VIEW IF EXISTS `dadospedido`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `dadospedido` AS SELECT 
 1 AS `nomecliente`,
 1 AS `email`,
 1 AS `telefone`,
 1 AS `endereco`,
 1 AS `complemento`,
 1 AS `descricao_produto`,
 1 AS `preco`,
 1 AS `quantidade`,
 1 AS `preco_final`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedidos` (
  `idpedidos` int(11) NOT NULL AUTO_INCREMENT,
  `descricao_produto` varchar(150) DEFAULT NULL,
  `preco` varchar(45) DEFAULT NULL,
  `quantidade` varchar(45) DEFAULT NULL,
  `preco_final` varchar(45) DEFAULT NULL,
  `idcliente` int(11) DEFAULT NULL,
  PRIMARY KEY (`idpedidos`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,'Vestido florido','120.00','1','120.00',1),(2,'Calça jeans','90.00','1','90.00',2);
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
  `categoria` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `descricao_produto` varchar(150) CHARACTER SET latin1 DEFAULT NULL,
  `imagem` varchar(150) CHARACTER SET latin1 DEFAULT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `preco_final` decimal(8,2) DEFAULT NULL,
  PRIMARY KEY (`idproduto`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'blusas','Blusa com amarração','blusa1.png',119.90,89.90),(2,'blusas','Camiseta verde solta','blusa2.png',99.90,69.90),(3,'blusas','Camiseta bordada ','blusa4.png',89.90,69.90),(4,'blusas','Blusa  margaridas bordada','blusa5.png',89.90,59.90),(5,'blusas','Camiseta verde','blusa8.png',89.90,69.90),(6,'blusas','Camiseta babado','blusa12.png',89.90,69.90),(7,'vestidos','Vestido amarelo floral','vestido1.jpg',69.90,39.90),(8,'vestidos','Vestido rosê','vestido2.jpg',99.90,79.90),(9,'shorts','Short jeans claro','short1.jpg',149.90,99.90),(10,'shorts','Short rasgado','short2.jpg',69.90,49.90),(11,'calcas','Calça com rasgos','calca1.jpg',119.90,89.90),(12,'calcas','Calça social','calca2.jpg',149.90,119.90);
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'remoda'
--

--
-- Final view structure for view `dadospedido`
--

/*!50001 DROP VIEW IF EXISTS `dadospedido`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `dadospedido` AS select `clientes`.`nomecliente` AS `nomecliente`,`clientes`.`email` AS `email`,`clientes`.`telefone` AS `telefone`,`clientes`.`endereco` AS `endereco`,`clientes`.`complemento` AS `complemento`,`pedidos`.`descricao_produto` AS `descricao_produto`,`pedidos`.`preco` AS `preco`,`pedidos`.`quantidade` AS `quantidade`,`pedidos`.`preco_final` AS `preco_final` from (`clientes` join `pedidos` on((`clientes`.`idcliente` = `pedidos`.`idcliente`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-14 23:48:24

-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: devonshire
-- ------------------------------------------------------
-- Server version	5.7.20-log

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
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `userid` int(11) DEFAULT NULL,
  `token` varchar(256) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES (1,'0.8084996756753233',1,'2017-12-02 22:23:28','2017-12-02 22:23:28'),(1,'0.12700713060842728',2,'2017-12-02 22:24:39','2017-12-02 22:24:39'),(1,'0.6688159798653612',3,'2017-12-02 22:25:08','2017-12-02 22:25:08'),(1,'0.7448578107802588',4,'2017-12-02 22:26:07','2017-12-02 22:26:07'),(1,'0.5471681091548508',5,'2017-12-02 22:26:35','2017-12-02 22:26:35'),(1,'0.5570466709654929',6,'2017-12-02 22:26:35','2017-12-02 22:26:35'),(1,'0.15392872469800234',7,'2017-12-02 22:26:35','2017-12-02 22:26:35'),(1,'0.19611849857219843',8,'2017-12-02 22:26:38','2017-12-02 22:26:38'),(1,'0.888799286488078',9,'2017-12-02 22:31:34','2017-12-02 22:31:34'),(1,'0.6442382648237011',10,'2017-12-02 22:35:01','2017-12-02 22:35:01'),(1,'0.09153522555882687',11,'2017-12-02 22:35:38','2017-12-02 22:35:38'),(1,'0.33564313133804813',12,'2017-12-02 22:36:37','2017-12-02 22:36:37'),(1,'0.06953123054848587',13,'2017-12-02 22:37:13','2017-12-02 22:37:13'),(1,'0.2953581584758336',14,'2017-12-02 22:37:37','2017-12-02 22:37:37'),(1,'0.8175800532334547',15,'2017-12-02 23:51:34','2017-12-02 23:51:34'),(1,'0.20328386879716276',16,'2017-12-02 23:52:23','2017-12-02 23:52:23'),(1,'0.6751968712928678',17,'2017-12-02 23:56:29','2017-12-02 23:56:29'),(1,'0.26056969126125096',18,'2017-12-03 00:06:22','2017-12-03 00:06:22'),(1,'0.29520915422266647',19,'2017-12-03 00:08:31','2017-12-03 00:08:31'),(1,'0.7300131411060389',20,'2017-12-03 00:09:07','2017-12-03 00:09:07'),(1,'0.29271835086327846',21,'2017-12-03 02:29:42','2017-12-03 02:29:42'),(1,'0.7713580357796976',22,'2017-12-03 02:47:03','2017-12-03 02:47:03'),(1,'0.49081585063219424',23,'2017-12-03 02:50:07','2017-12-03 02:50:07'),(1,'0.768305844809662',24,'2017-12-03 02:51:16','2017-12-03 02:51:16'),(1,'0.1002437124345561',25,'2017-12-03 02:51:52','2017-12-03 02:51:52'),(1,'0.01255278848560959',26,'2017-12-03 02:56:15','2017-12-03 02:56:15'),(1,'0.26418837711312904',27,'2017-12-04 12:38:56','2017-12-04 12:38:56'),(1,'0.7229053864607298',28,'2017-12-04 12:40:03','2017-12-04 12:40:03'),(1,'0.3870136292469064',29,'2017-12-04 12:40:03','2017-12-04 12:40:03'),(1,'0.016484202597343733',30,'2017-12-04 12:40:03','2017-12-04 12:40:03'),(1,'0.7691837714484022',31,'2017-12-04 12:40:20','2017-12-04 12:40:20'),(1,'0.23103802857559708',32,'2017-12-04 12:40:30','2017-12-04 12:40:30'),(1,'0.41743917185000146',33,'2017-12-04 12:40:36','2017-12-04 12:40:36'),(1,'0.7404628838700495',34,'2017-12-04 12:49:10','2017-12-04 12:49:10'),(1,'0.6403410096140754',35,'2017-12-04 12:51:58','2017-12-04 12:51:58'),(1,'0.8973247431877014',36,'2017-12-04 12:57:53','2017-12-04 12:57:53'),(1,'0.18376972490419052',37,'2017-12-04 12:59:43','2017-12-04 12:59:43'),(1,'0.4978635195988388',38,'2017-12-04 13:00:13','2017-12-04 13:00:13'),(1,'0.1812631894051897',39,'2017-12-04 13:05:48','2017-12-04 13:05:48'),(1,'0.6602460049338577',40,'2017-12-04 13:07:38','2017-12-04 13:07:38'),(1,'0.7312475529866189',41,'2017-12-04 13:13:33','2017-12-04 13:13:33'),(1,'0.7253886941503074',42,'2017-12-04 13:19:13','2017-12-04 13:19:13'),(1,'0.7550377209556456',43,'2017-12-04 13:24:56','2017-12-04 13:24:56'),(1,'0.6856646920251481',44,'2017-12-04 19:38:15','2017-12-04 19:38:15'),(1,'0.24854596450156174',45,'2017-12-04 19:41:29','2017-12-04 19:41:29'),(1,'0.07843921385853747',46,'2017-12-04 19:46:06','2017-12-04 19:46:06'),(1,'0.736916401527838',47,'2017-12-04 19:55:20','2017-12-04 19:55:20'),(1,'0.7986021322827279',48,'2017-12-04 19:56:41','2017-12-04 19:56:41'),(1,'0.5783035121204474',49,'2017-12-04 19:58:21','2017-12-04 19:58:21'),(1,'0.8654479372408137',50,'2017-12-04 19:59:06','2017-12-04 19:59:06'),(1,'0.7274700064618136',51,'2017-12-04 20:00:49','2017-12-04 20:00:49'),(1,'0.8258312244325778',52,'2017-12-04 20:40:15','2017-12-04 20:40:15'),(1,'0.7330600829889811',53,'2017-12-04 20:45:38','2017-12-04 20:45:38'),(1,'0.7517406263649131',54,'2017-12-04 20:48:52','2017-12-04 20:48:52'),(1,'0.7188531787550809',55,'2017-12-04 20:50:25','2017-12-04 20:50:25'),(1,'0.42869264051698397',56,'2017-12-04 20:53:52','2017-12-04 20:53:52'),(1,'0.9844918295535663',57,'2017-12-04 20:54:06','2017-12-04 20:54:06'),(1,'0.9023278500930842',58,'2017-12-04 20:54:27','2017-12-04 20:54:27'),(1,'0.9475978584924556',59,'2017-12-04 20:55:39','2017-12-04 20:55:39'),(1,'0.7687882535784223',60,'2017-12-04 20:56:40','2017-12-04 20:56:40'),(1,'0.4341413976685209',61,'2017-12-04 20:59:34','2017-12-04 20:59:34'),(1,'0.6422950222628991',62,'2017-12-04 21:04:46','2017-12-04 21:04:46'),(1,'0.3627065569478338',63,'2017-12-04 21:10:41','2017-12-04 21:10:41'),(1,'0.8594872359774199',64,'2017-12-04 21:11:42','2017-12-04 21:11:42'),(1,'0.6410581228095134',65,'2017-12-04 21:15:55','2017-12-04 21:15:55'),(1,'0.5017957634474706',66,'2017-12-04 21:17:53','2017-12-04 21:17:53'),(1,'0.40512678531344015',67,'2017-12-04 21:49:02','2017-12-04 21:49:02'),(1,'0.4051024423928915',68,'2017-12-04 21:51:11','2017-12-04 21:51:11'),(1,'0.7664302627795001',69,'2017-12-04 21:54:37','2017-12-04 21:54:37'),(1,'0.7904683124140499',70,'2017-12-04 21:58:28','2017-12-04 21:58:28'),(1,'0.11147784519920312',71,'2017-12-04 22:28:57','2017-12-04 22:28:57'),(1,'0.9471270966130747',72,'2017-12-04 22:30:43','2017-12-04 22:30:43'),(1,'0.526529795845943',73,'2017-12-04 22:32:37','2017-12-04 22:32:37'),(1,'0.9551829984521949',74,'2017-12-04 22:34:56','2017-12-04 22:34:56'),(1,'0.34148284506255666',75,'2017-12-04 22:39:07','2017-12-04 22:39:07'),(1,'0.3705749848973239',76,'2017-12-04 22:39:22','2017-12-04 22:39:22'),(1,'0.16205741027564224',77,'2017-12-04 22:40:22','2017-12-04 22:40:22'),(1,'0.40478173550965746',78,'2017-12-04 22:43:10','2017-12-04 22:43:10'),(1,'0.03395890626205622',79,'2017-12-05 02:15:58','2017-12-05 02:15:58'),(1,'0.5447068895989882',80,'2017-12-05 11:54:16','2017-12-05 11:54:16'),(1,'0.36690724088447335',81,'2017-12-05 12:15:05','2017-12-05 12:15:05'),(1,'0.5774248777208217',82,'2017-12-05 12:17:39','2017-12-05 12:17:39'),(1,'0.8226718542172553',83,'2017-12-05 12:19:00','2017-12-05 12:19:00'),(1,'0.6307970757578094',84,'2017-12-05 12:22:39','2017-12-05 12:22:39'),(1,'0.15797379597299122',85,'2017-12-05 12:24:38','2017-12-05 12:24:38'),(1,'0.4043325054376552',86,'2017-12-05 12:25:16','2017-12-05 12:25:16'),(1,'0.07847106379592406',87,'2017-12-05 12:33:48','2017-12-05 12:33:48'),(1,'0.41260303693457767',88,'2017-12-05 13:03:31','2017-12-05 13:03:31'),(1,'0.8002097196945137',89,'2017-12-05 13:04:45','2017-12-05 13:04:45'),(1,'0.36002994517083153',90,'2017-12-05 13:12:02','2017-12-05 13:12:02'),(1,'0.7700144346935895',91,'2017-12-05 15:56:00','2017-12-05 15:56:00'),(1,'0.3257619141770396',92,'2017-12-05 15:59:47','2017-12-05 15:59:47'),(1,'0.7708101216465362',93,'2017-12-07 02:48:29','2017-12-07 02:48:29'),(1,'0.9698263519447616',94,'2017-12-08 19:37:20','2017-12-08 19:37:20'),(1,'0.5530193865827224',95,'2017-12-08 19:37:51','2017-12-08 19:37:51'),(1,'0.11225752172894543',96,'2017-12-08 20:11:08','2017-12-08 20:11:08'),(1,'0.7066990538897528',97,'2017-12-08 20:17:44','2017-12-08 20:17:44'),(1,'0.7267824971694195',98,'2017-12-08 20:25:51','2017-12-08 20:25:51'),(1,'0.1357225251866665',99,'2017-12-08 20:29:31','2017-12-08 20:29:31'),(1,'0.9331386210056904',100,'2017-12-08 20:38:15','2017-12-08 20:38:15'),(1,'0.6691449343205726',101,'2017-12-08 20:43:07','2017-12-08 20:43:07'),(1,'0.5700718757140315',102,'2017-12-08 20:44:53','2017-12-08 20:44:53'),(1,'0.4175172719199489',103,'2017-12-08 20:46:55','2017-12-08 20:46:55'),(1,'0.06004644309768281',104,'2017-12-08 21:12:30','2017-12-08 21:12:30'),(1,'0.36041842107924005',105,'2017-12-09 01:27:47','2017-12-09 01:27:47'),(1,'0.890780736322289',106,'2017-12-12 01:28:57','2017-12-12 01:28:57');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-13  1:50:31
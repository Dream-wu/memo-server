# ************************************************************
# Sequel Pro SQL dump
# Version 5446
#
# https://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 8.0.21)
# Database: memo_electron
# Generation Time: 2020-11-03 09:06:40 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table backlog
# ------------------------------------------------------------

DROP TABLE IF EXISTS `backlog`;

CREATE TABLE `backlog` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `module_id` int DEFAULT NULL,
  `content` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `status` int NOT NULL COMMENT '1-未完成，2-已完成',
  `date` bigint DEFAULT NULL,
  `tip` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `backlog` WRITE;
/*!40000 ALTER TABLE `backlog` DISABLE KEYS */;

INSERT INTO `backlog` (`id`, `module_id`, `content`, `status`, `date`, `tip`)
VALUES
	(3,2,'有一件事第五节二级阿尔法可啊，是的，好好伺服电机阿萨德加咖啡阿搜集到付',2,NULL,NULL),
	(5,4,'计划一，😆',1,1609344000000,1),
	(6,3,'v1.0.0联调',1,1605542400000,NULL),
	(7,2,'取暖费',1,1604332800000,1),
	(8,2,'双十一，商品抢购',1,1605024000000,NULL),
	(10,3,'v0.0.1上线',1,1604419200000,NULL),
	(11,3,'会议',1,1606924800000,NULL),
	(12,4,'驾驶本迁移',1,NULL,NULL),
	(13,4,'天津户口',2,NULL,NULL);

/*!40000 ALTER TABLE `backlog` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table backlog_module
# ------------------------------------------------------------

DROP TABLE IF EXISTS `backlog_module`;

CREATE TABLE `backlog_module` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) CHARACTER SET utf8 NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `backlog_module` WRITE;
/*!40000 ALTER TABLE `backlog_module` DISABLE KEYS */;

INSERT INTO `backlog_module` (`id`, `name`)
VALUES
	(2,'生活琐事'),
	(3,'工作'),
	(4,'2020的计划');

/*!40000 ALTER TABLE `backlog_module` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table news
# ------------------------------------------------------------

DROP TABLE IF EXISTS `news`;

CREATE TABLE `news` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `url` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;

INSERT INTO `news` (`id`, `title`, `url`)
VALUES
	(1,'新闻1','hha'),
	(2,'新闻2','hah2');

/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table schedule
# ------------------------------------------------------------

DROP TABLE IF EXISTS `schedule`;

CREATE TABLE `schedule` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `content` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;

INSERT INTO `schedule` (`id`, `date`, `content`)
VALUES
	(3,'2020-09-21','更改一条数据信息2'),
	(5,'2020-08-01','8yue分'),
	(6,'2020-08-02','喝杯☕️'),
	(7,'2020-08-01','🎂快乐'),
	(8,'2020-11-02','3.2.1提测'),
	(9,'2020-11-04','3.2.4上线'),
	(10,'2020-11-17','v3.3.1联调');

/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

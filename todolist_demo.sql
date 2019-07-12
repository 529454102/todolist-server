-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-07-11 06:49:16
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todolist_demo`
--

-- --------------------------------------------------------

--
-- 表的结构 `list`
--

CREATE TABLE `list` (
  `id` int(11) NOT NULL COMMENT 'ID',
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '内容',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '状态',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `createTime` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '创建时间'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='todoList列表';

--
-- 转存表中的数据 `list`
--

INSERT INTO `list` (`id`, `content`, `status`, `user_id`, `createTime`) VALUES
(58, 'sdfsdf', 1, 6, '2019-07-10 16:45:59'),
(59, 'dssd', 0, 6, '2019-07-10 16:46:57'),
(60, '1111', 0, 6, '2019-07-10 16:47:00'),
(61, '123123', 0, 6, '2019-07-10 16:47:03'),
(62, 'dsfsdf  123123', 1, 6, '2019-07-10 16:47:10'),
(67, '213123', 1, 3, '2019-07-11 09:42:03'),
(64, '12321354', 1, 3, '2019-07-10 17:46:45'),
(65, '#$*(&#($*&)(2', 0, 3, '2019-07-10 17:47:53'),
(66, 'sdff', 0, 3, '2019-07-11 09:22:18');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户表';

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(3, 'admin', '$2b$10$HlbmV9K7f5ZDktlRTaEz1.RXVF/tJjibdOA.ZFv5ZI3aMKiDgiVsi'),
(4, 'admin1', '$2b$10$uoqr6fr6uvlJDqRuzP.3M.TLkwp4ZN/LiQc/b2QOBH7EmJhWCe/bK'),
(5, 'admin2', '$2b$10$u6ok0csGeQE.MeljuJDCBujtdGImfXJ8Qc0AlzIniJzw9COWKfR7u'),
(6, 'admin3', '$2b$10$OwBD/cZs9YwzSxOxiSjzQu0.bDdcuSmlr17Msrm0Gt9ynu.R88OMC');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `list`
--
ALTER TABLE `list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `list`
--
ALTER TABLE `list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID', AUTO_INCREMENT=68;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

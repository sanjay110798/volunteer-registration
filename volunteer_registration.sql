-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2023 at 08:49 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `volunteer_registration`
--

-- --------------------------------------------------------

--
-- Table structure for table `mstr_otp`
--

CREATE TABLE `mstr_otp` (
  `OTP_ID` int(4) UNSIGNED NOT NULL COMMENT 'Auto generated number',
  `VERIFICATION_TYPE` char(1) NOT NULL COMMENT 'M (Mobile) / E (Email ID)',
  `VERIFICATION_TEXT` varchar(100) NOT NULL COMMENT 'Email ID / Mobile Number',
  `OTP` int(4) UNSIGNED NOT NULL COMMENT 'One time Password',
  `IS_VERIFIED` char(1) NOT NULL DEFAULT 'N' COMMENT 'Y (Yes) / N (No)',
  `OTP_EXPIRY_DATE` datetime NOT NULL COMMENT 'OTP Expiry Date and Time',
  `CREATED_ON` datetime NOT NULL COMMENT 'Date on which record is created',
  `UPDATED_ON` datetime DEFAULT NULL COMMENT 'Date on which record is modified'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mstr_otp`
--

INSERT INTO `mstr_otp` (`OTP_ID`, `VERIFICATION_TYPE`, `VERIFICATION_TEXT`, `OTP`, `IS_VERIFIED`, `OTP_EXPIRY_DATE`, `CREATED_ON`, `UPDATED_ON`) VALUES
(21, 'E', 'sanjay.roy@iskconbangalore.org', 1554, 'Y', '2023-06-13 22:30:35', '2023-06-13 22:20:35', '2023-06-13 22:21:43'),
(22, 'M', '7602012478', 7043, 'Y', '2023-06-13 22:33:55', '2023-06-13 22:23:55', '2023-06-13 22:24:34'),
(23, 'M', '7602012478', 4286, 'N', '2023-06-13 22:34:12', '2023-06-13 22:24:12', NULL),
(24, 'M', '7602012478', 4735, 'N', '2023-06-13 22:38:16', '2023-06-13 22:28:16', NULL),
(25, 'M', '7602012478', 1581, 'N', '2023-06-13 22:40:36', '2023-06-13 22:30:36', NULL),
(26, 'M', '7602012478', 6191, 'N', '2023-06-13 22:42:42', '2023-06-13 22:32:42', NULL),
(27, 'M', '7602012478', 8989, 'N', '2023-06-13 22:43:15', '2023-06-13 22:33:15', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `skj_registration_addon`
--

CREATE TABLE `skj_registration_addon` (
  `ADDON_ID` int(4) UNSIGNED NOT NULL COMMENT 'Auto generated number',
  `REG_ID` int(4) UNSIGNED NOT NULL COMMENT 'SKJ_VOLUNTEER_REGISTRATION.REG_ID',
  `ADDON_TYPE` varchar(100) NOT NULL COMMENT 'Addon Type',
  `ADDON_TEXT` varchar(80) NOT NULL COMMENT 'Addon Text',
  `CREATED_ON` datetime NOT NULL COMMENT 'Date on which record is created'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `skj_volunteer_registration`
--

CREATE TABLE `skj_volunteer_registration` (
  `REG_ID` int(4) UNSIGNED NOT NULL COMMENT 'Auto generated number',
  `NAME` varchar(100) NOT NULL COMMENT 'Name',
  `MOBILE` varchar(15) NOT NULL COMMENT 'Mobile Number',
  `WHATSAPP_NUMBER` varchar(15) DEFAULT NULL COMMENT 'Whatsapp Number',
  `GENDER` char(1) NOT NULL COMMENT 'M (Male) / F (Female) / O (Others)',
  `AGE` int(4) UNSIGNED NOT NULL COMMENT 'Age',
  `PINCODE` int(4) UNSIGNED NOT NULL COMMENT 'Pincode',
  `EMAIL` varchar(100) NOT NULL COMMENT 'Email',
  `OCCUPATION` varchar(100) DEFAULT NULL COMMENT 'Occupation',
  `LANDMARK` varchar(100) NOT NULL COMMENT 'Landmark',
  `ADDRESS` text NOT NULL COMMENT 'Address',
  `VOLUNTEER_REFERENCE` varchar(2) DEFAULT NULL COMMENT 'Y (Yes) / N (No) / NS (Not Sure)',
  `CREATED_ON` datetime NOT NULL COMMENT 'Date on which record is created',
  `UPDATED_ON` datetime DEFAULT NULL COMMENT 'Date on which record is modified'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mstr_otp`
--
ALTER TABLE `mstr_otp`
  ADD PRIMARY KEY (`OTP_ID`);

--
-- Indexes for table `skj_registration_addon`
--
ALTER TABLE `skj_registration_addon`
  ADD PRIMARY KEY (`ADDON_ID`);

--
-- Indexes for table `skj_volunteer_registration`
--
ALTER TABLE `skj_volunteer_registration`
  ADD PRIMARY KEY (`REG_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mstr_otp`
--
ALTER TABLE `mstr_otp`
  MODIFY `OTP_ID` int(4) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Auto generated number', AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `skj_registration_addon`
--
ALTER TABLE `skj_registration_addon`
  MODIFY `ADDON_ID` int(4) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Auto generated number';

--
-- AUTO_INCREMENT for table `skj_volunteer_registration`
--
ALTER TABLE `skj_volunteer_registration`
  MODIFY `REG_ID` int(4) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Auto generated number';
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

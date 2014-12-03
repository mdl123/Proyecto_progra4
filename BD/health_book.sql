-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2014 at 05:35 AM
-- Server version: 5.5.39
-- PHP Version: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `health_book`
--

-- --------------------------------------------------------

--
-- Table structure for table `citas`
--

CREATE DATABASE health_book;

USE health_book;

CREATE TABLE IF NOT EXISTS `citas` (
`id_cita` int(11) NOT NULL,
  `id_usuario` int(13) NOT NULL,
  `id_doctor` int(11) NOT NULL,
  `Fecha_cita` date NOT NULL,
  `CitaCancelada` enum('0,1') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `doctores`
--

CREATE TABLE IF NOT EXISTS `doctores` (
`id_doctor` int(11) NOT NULL,
  `id_especialidad` int(11) NOT NULL,
  `NombreDoctor` varchar(40) NOT NULL,
  `ApellidoDoctor` varchar(40) NOT NULL,
  `CelularDoctor` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `especialidades`
--

CREATE TABLE IF NOT EXISTS `especialidades` (
`id_especialidades` int(11) NOT NULL,
  `NombreEspecialidad` varchar(30) NOT NULL,
  `DescripcionEspecialidad` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int(13) NOT NULL,
  `UserNames` varchar(15) NOT NULL,
  `UserPassword` varchar(15) NOT NULL,
  `NombreUsuario` varchar(40) NOT NULL,
  `ApellidoUsuario` varchar(40) NOT NULL,
  `FechaNacimiento` date NOT NULL,
  `TelefonoUsuario` varchar(10) NOT NULL,
  `CorreoUsuario` varchar(50) NOT NULL,
  `DirrecionUsuario` varchar(100) NOT NULL,
  `EsAdmin` enum('0,1') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `citas`
--
ALTER TABLE `citas`
 ADD PRIMARY KEY (`id_cita`), ADD UNIQUE KEY `Foreign1` (`id_usuario`), ADD UNIQUE KEY `Foreign2` (`id_doctor`), ADD UNIQUE KEY `Foreign3` (`id_doctor`);

--
-- Indexes for table `doctores`
--
ALTER TABLE `doctores`
 ADD PRIMARY KEY (`id_doctor`), ADD UNIQUE KEY `Foreign1` (`id_especialidad`);

--
-- Indexes for table `especialidades`
--
ALTER TABLE `especialidades`
 ADD PRIMARY KEY (`id_especialidades`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
 ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `citas`
--
ALTER TABLE `citas`
MODIFY `id_cita` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `doctores`
--
ALTER TABLE `doctores`
MODIFY `id_doctor` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `especialidades`
--
ALTER TABLE `especialidades`
MODIFY `id_especialidades` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `citas`
--
ALTER TABLE `citas`
ADD CONSTRAINT `citas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `citas_ibfk_2` FOREIGN KEY (`id_doctor`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `doctores`
--
ALTER TABLE `doctores`
ADD CONSTRAINT `doctores_ibfk_1` FOREIGN KEY (`id_especialidad`) REFERENCES `especialidades` (`id_especialidades`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

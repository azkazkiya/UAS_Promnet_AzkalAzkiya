-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2024 at 10:04 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2201752_azkalazkiyaalfiandri_uas_pilkomb`
--

-- --------------------------------------------------------

--
-- Table structure for table `transaksi_keuangan_azkalazkiyaalfiandri`
--

CREATE TABLE `transaksi_keuangan_azkalazkiyaalfiandri` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `description` text NOT NULL,
  `amount` bigint(20) NOT NULL,
  `status` enum('debit','kredit') NOT NULL,
  `receiver` varchar(50) NOT NULL,
  `jk` enum('L','P') NOT NULL,
  `no_telp` varchar(13) NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transaksi_keuangan_azkalazkiyaalfiandri`
--

INSERT INTO `transaksi_keuangan_azkalazkiyaalfiandri` (`id`, `date`, `description`, `amount`, `status`, `receiver`, `jk`, `no_telp`, `address`) VALUES
(1, '2024-01-01', 'dana prodii', 50000000, 'kredit', 'nadila', 'P', '086371827123', 'Cempaka'),
(2, '2023-12-14', 'Dana usaha dari prodi', 1000000, 'debit', 'azkal', 'P', '085263610123', 'Cempaka'),
(10, '2024-01-16', 'dana usaha', 1000000, 'debit', 'azkal', 'P', '085263610123', 'Cimahi'),
(12, '2024-01-06', 'Dana fasilitas ruangan', 2000000, 'kredit', 'halima', 'P', '085263610123', 'Jakarta');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `transaksi_keuangan_azkalazkiyaalfiandri`
--
ALTER TABLE `transaksi_keuangan_azkalazkiyaalfiandri`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `transaksi_keuangan_azkalazkiyaalfiandri`
--
ALTER TABLE `transaksi_keuangan_azkalazkiyaalfiandri`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

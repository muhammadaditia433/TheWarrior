-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 18 Jun 2026 pada 19.32
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kopijak_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `kategori` varchar(100) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `gambar` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `menu`
--

INSERT INTO `menu` (`id`, `nama`, `kategori`, `harga`, `gambar`, `created_at`) VALUES
(1, 'Americano', 'Coffee', 28000, '/menu/americano.png', '2026-06-16 14:50:06'),
(2, 'Espresso', 'Coffee', 25000, '/menu/espresso.png', '2026-06-16 14:50:06'),
(3, 'Latte', 'Coffee', 30000, '/menu/latte.png', '2026-06-16 14:50:06'),
(4, 'Cappuccino', 'Coffee', 30000, '/menu/cappuccino.png', '2026-06-16 14:50:06'),
(5, 'Mochaccino', 'Coffee', 32000, '/menu/mochaccino.png', '2026-06-16 14:50:06'),
(6, 'Matcha Latte', 'Non Coffee', 30000, '/menu/matcha.png', '2026-06-16 14:50:06'),
(7, 'Chocolate', 'Non Coffee', 29000, '/menu/chocolate.png', '2026-06-16 14:50:06'),
(8, 'Caramel Latte', 'Non Coffee', 32000, '/menu/caramel.png', '2026-06-16 14:50:06'),
(9, 'Vanilla Milk', 'Non Coffee', 28000, '/menu/vanilla.png', '2026-06-16 14:50:06'),
(10, 'Cheesecake', 'Dessert', 35000, '/menu/cheesecake.png', '2026-06-16 14:50:06'),
(11, 'Brownies', 'Dessert', 27000, '/menu/brownies.png', '2026-06-16 14:50:06'),
(12, 'Tiramisu', 'Dessert', 38000, '/menu/tiramisu.png', '2026-06-16 14:50:06'),
(13, 'Croissant', 'Snack', 25000, '/menu/croissant.png', '2026-06-16 14:50:06'),
(14, 'French Fries', 'Snack', 22000, '/menu/frenchfries.png', '2026-06-16 14:50:06'),
(15, 'Chicken Wings', 'Snack', 35000, '/menu/chickenwings.png', '2026-06-16 14:50:06'),
(16, 'Avocado Egg Toast', 'Snack', 32000, '/menu/Toast.png', '2026-06-17 14:31:09');

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `metode` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `tanggal` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `metode`, `status`, `tanggal`) VALUES
(1, 1, 'Bayar Tunai', 'Selesai', '2026-06-16 06:33:26'),
(2, 2, 'Bayar Tunai', 'Menunggu', '2026-06-16 06:44:21'),
(3, 2, 'Bayar Tunai', 'Menunggu', '2026-06-16 06:44:39'),
(4, 2, 'Bayar Tunai', 'Menunggu', '2026-06-16 06:49:16'),
(5, 2, 'E-Wallet', 'Menunggu', '2026-06-16 06:58:42'),
(6, 2, 'Bayar Tunai', 'Menunggu', '2026-06-16 06:59:37'),
(7, 2, 'Bayar Tunai', 'Menunggu Pembayaran', '2026-06-16 07:19:57'),
(8, 2, 'E-Wallet', 'Menunggu', '2026-06-16 07:20:15'),
(9, 2, 'Bayar Tunai', 'Menunggu Pembayaran', '2026-06-16 07:29:01'),
(10, 2, 'E-Wallet', 'Menunggu', '2026-06-16 08:40:26'),
(11, 2, 'Bayar Tunai', 'Menunggu Pembayaran', '2026-06-16 08:41:48'),
(12, 2, 'E-Wallet', 'Menunggu', '2026-06-16 08:43:44'),
(13, 2, 'E-Wallet', 'Menunggu', '2026-06-16 12:10:25'),
(14, 2, 'E-Wallet', 'Menunggu', '2026-06-16 12:13:49'),
(15, 2, 'E-Wallet', 'Menunggu', '2026-06-16 12:21:05'),
(16, 3, 'E-Wallet', 'Selesai', '2026-06-16 14:44:02'),
(17, 3, 'E-Wallet', 'Selesai', '2026-06-16 16:01:53'),
(18, 3, 'Bayar Tunai', 'Selesai', '2026-06-17 11:43:45'),
(19, 3, 'Bayar Tunai', 'Selesai', '2026-06-17 13:36:09'),
(20, 3, 'E-Wallet', 'Selesai', '2026-06-17 15:36:40');

-- --------------------------------------------------------

--
-- Struktur dari tabel `order_detail`
--

CREATE TABLE `order_detail` (
  `id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `menu_id` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `subtotal` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `order_detail`
--

INSERT INTO `order_detail` (`id`, `order_id`, `menu_id`, `qty`, `subtotal`) VALUES
(1, 1, 1, 2, 56000),
(2, 1, 2, 1, 25000),
(3, 3, 3, 1, 30000),
(4, 5, 2, 1, 25000),
(5, 5, 14, 1, 22000),
(6, 6, 2, 1, 25000),
(7, 7, 3, 1, 30000),
(8, 8, 3, 1, 30000),
(9, 8, 2, 1, 25000),
(10, 9, 2, 1, 25000),
(11, 10, 3, 1, 30000),
(12, 11, 3, 1, 30000),
(13, 12, 3, 1, 30000),
(14, 13, 3, 1, 30000),
(15, 14, 10, 1, 35000),
(16, 15, 10, 1, 35000),
(17, 15, 11, 1, 27000),
(18, 15, 12, 1, 38000),
(19, 16, 2, 1, 25000),
(20, 17, 3, 2, 60000),
(21, 17, 7, 3, 87000),
(22, 17, 6, 4, 120000),
(23, 18, 1, 2, 56000),
(24, 18, 4, 2, 60000),
(25, 18, 13, 2, 50000),
(26, 19, 2, 1, 25000),
(27, 20, 5, 1, 32000),
(28, 20, 6, 1, 30000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('admin','user') DEFAULT 'user',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `nama`, `email`, `password`, `role`, `created_at`) VALUES
(1, 'Riez Rafa Roro', 'rifaro06@gmail.com', '$2b$10$hbZKGAQ9U8b55EIZJZHWoecrNRMDSb3eZ630tUNAKZaWDVR8cQcl2', 'user', '2026-06-15 17:53:23'),
(3, 'owo', 'owo', '$2b$10$jRfMdl.IxpSH2loDGVcGXe3T//EtcVewHl9G7dOGlFxdr8PdN4Ywi', 'user', '2026-06-16 14:43:27'),
(4, 'Admin Kopijak', 'admin@gmail.com', '$2b$10$cG7mGV2WipHGXGeyWGH7H.nu0TXAl0zF0/AfZGZTFB5bDdJW2wnyi', 'admin', '2026-06-16 16:58:57'),
(5, 'Admin Owo', 'owoo', '$2b$10$B5GBYXy3lL/9y8/VHMsYiOFpO2qdl8F1skhfZZcYJKjWwwdIDZlyW', 'admin', '2026-06-17 14:14:12');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

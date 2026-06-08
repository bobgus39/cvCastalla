CREATE DATABASE IF NOT EXISTS veterinaria_castalla CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE veterinaria_castalla;

CREATE TABLE IF NOT EXISTS citas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre_dueno VARCHAR(150) NOT NULL,
  nombre_mascota VARCHAR(100) NOT NULL,
  especie VARCHAR(80) NOT NULL,
  telefono VARCHAR(20) NOT NULL,
  email VARCHAR(150),
  motivo VARCHAR(120) NOT NULL,
  fecha_preferida DATE,
  mensaje TEXT,
  estado ENUM('pendiente', 'confirmada', 'cancelada', 'realizada') DEFAULT 'pendiente',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

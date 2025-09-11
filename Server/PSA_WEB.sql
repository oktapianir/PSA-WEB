create database PSA_WEB;
use PSA_WEB;

-- drop tables users;
create table users(
	id INT auto_increment Primary key,
    name Varchar(30),
    jenis_kelamin Enum('Laki-laki','Perempuan'),
    email Varchar(100) unique,
    password Varchar(100), 
    role Enum('user', 'admin') default 'user', 
    created_at timestamp default current_timestamp
);  

update users set role = 'admin' where id = 1;

select * from users;

-- drop table programs;
create table programs(
	id INT auto_increment Primary key,
    nama_program Varchar(255),
    deskripsi Text,
    image varchar(255),
    tanggal_dilaksanakan date,
    status Enum('aktif','tidak aktif') default 'aktif',
    created_at timestamp default current_timestamp
);

select * from programs;


const express = require("express");
const db = require("../db");
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Konfigurasi upload gambar
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

//add program
router.post("/add", upload.single("image"), (req, res) => {
    const {nama_program, deskripsi, tanggal_dilaksanakan } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;
      // const image = req.file ? req.file.filename : null;


    const sql = `Insert into programs (nama_program, deskripsi, image, tanggal_dilaksanakan) values (?,?,?,?)`;

    db.query(sql, [nama_program, deskripsi, image, tanggal_dilaksanakan], (err, results) => {
        if (err) {
            console.error("Insert error:", err);
            return res.status(500).json({ error: "Gagal menambahkan program"});
        }

        res.status(201).json({ message: "program berhasil ditambahkan!"});
    });
 });

 // get all programs
router.get('/', (req, res) => {
  db.query('SELECT * FROM programs', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

//DELETE programs
router.delete("/:id", (req, res)=>{
    const programsId = req.params.id;
    const query = "DELETE FROM programs WHERE id = ?";

    db.query(query, [programsId], (err,results) => {
        if (err) {
            console.error("Error saat menghapus program:", err);
            return res.status(500).json({ error: "Gagal menghapus  data program"});
        }

    res.json({message: "Program berhasil dihapus"});
    });
});

module.exports = router;
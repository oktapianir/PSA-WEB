
const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db");
const router = express.Router();

console.log("auth.js route module loaded");


router.post('/register', async (req, res) => {
    const {name,jenis_kelamin, email, password} = req.body;

    db.query('Select * From users WHERE email = ?', [email], async (err,results) => {
        if (err) return res.status(500). json({error: err.message});
        if (results.length > 0) return res.status(400).json({error: 'Email sudah digunakan'});

        //hash password 
        const hashedPassword = await bcrypt.hash(password, 10);

        db.query('INSERT Into users (name, jenis_kelamin, email, password) Values (?,?,?,?)',
            [name, jenis_kelamin, email, hashedPassword],
            (err, results) => {
                if (err) {
                    console.error("INSERT ERROR:", err);
                return res.status(500).json({error: err.message});

                }
                res.status(201).json({ message: 'Register berhasil'});
            }
        );
    });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(401).json({ error: 'Email tidak ditemukan' });

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Password salah' });
    }

    res.json({ message: 'Login berhasil', user: { id: user.id, name: user.name, jenis_kelamin:user.jenis_kelamin, email: user.email, role: user.role } });
  });
});

router.get('/test', (req, res) => {
  res.send('Auth route is working');
});


module.exports = router;
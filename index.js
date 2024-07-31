const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;
const secretKey = 'your_secret_key';

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === 'larissaduolingo@gmail.com' && password === 'password') {
        const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });

        //res.cookie('token', token, { httpOnly: false });
        res.cookie('token', token, { httpOnly: true });
        res.send('Login realizado com sucesso!');
    } else {
        res.send('Email ou senha incorretos.');
    }
});

app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:${port}');
});

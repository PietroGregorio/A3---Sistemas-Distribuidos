import 'dotenv/config'
import jwt from "jsonwebtoken"
import { SimpleCrypto } from "simple-crypto-js"

const SECRET = process.env.SECRET || 'supersecret';

const auth = {
    secret: SECRET,

    getToken(username) {
        return jwt.sign({ user: username }, SECRET, { expiresIn: '2h' });
    },

    authRote(app) {
        app.post('/auth', function (req, res) {
            const { username, password } = req.body

            // Usuário e senha fixos para exemplo
            if (username === 'admin' && password === '12345') {
                const token = auth.getToken(username)
                res.json({ msg: 'ok', token })
            } else {
                res.status(401).json({ msg: 'usuário / senha inválidos!' })
            }
        });
    },

    middlewareAuth(req, res, next) {
        const authHeader = req.headers['authorization']
        if (!authHeader) return res.status(401).json({ msg: 'Token ausente.' });

        const token = authHeader.split(' ')[1];
        jwt.verify(token, SECRET, (err, decoded) => {
            if (err) return res.status(403).json({ msg: 'Token inválido.' });
            req.user = decoded.user;
            next();
        });
    }
};

export default auth;

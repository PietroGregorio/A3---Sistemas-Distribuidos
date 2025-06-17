export default function rotasUsuarios(server, db) {

    server.get('/usuarios', (req, res) => {
        const usuarios = db.get('/usuarios') || {};
        res.status(200).json(usuarios);
    });

    server.post('/usuarios', (req, res) => {
        const id = db.newID('USER-');
        const data = { id, ...req.body };
        db.set(`/usuarios/${id}`, data);
        res.status(201).json({ msg: 'Usuário criado.', data });
    });

    server.put('/usuarios/:id', (req, res) => {
        const id = req.params.id;
        const usuario = db.get(`/usuarios/${id}`);

        if (!usuario) {
            return res.status(404).json({ msg: 'Usuário não encontrado.' });
        }

        const data = { id, ...req.body };
        db.set(`/usuarios/${id}`, data);
        res.status(200).json({ msg: 'Usuário atualizado.', data });
    });

    server.delete('/usuarios/:id', (req, res) => {
        const id = req.params.id;
        const usuario = db.get(`/usuarios/${id}`);

        if (!usuario) {
            return res.status(404).json({ msg: 'Usuário não encontrado.' });
        }

        db.delete(`/usuarios/${id}`);
        res.status(200).json({ msg: 'Usuário removido.' });
    });

}

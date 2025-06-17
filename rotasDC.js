export default function rotasDC(server, db) {

    server.get('/dc', (req, res) => {
        const herois = db.get('/dc') || {};
        res.status(200).json(herois);
    });

    server.post('/dc', (req, res) => {
        const id = db.newID('DC-');
        const data = { id, ...req.body };
        db.set(`/dc/${id}`, data);
        res.status(201).json({ msg: 'Herói da DC criado.', data });
    });

    server.put('/dc/:id', (req, res) => {
        const id = req.params.id;
        const heroi = db.get(`/dc/${id}`);

        if (!heroi) {
            return res.status(404).json({ msg: 'Herói não encontrado.' });
        }

        const data = { id, ...req.body };
        db.set(`/dc/${id}`, data);
        res.status(200).json({ msg: 'Herói atualizado.', data });
    });

    server.delete('/dc/:id', (req, res) => {
        const id = req.params.id;
        const heroi = db.get(`/dc/${id}`);

        if (!heroi) {
            return res.status(404).json({ msg: 'Herói não encontrado.' });
        }

        db.delete(`/dc/${id}`);
        res.status(200).json({ msg: 'Herói removido.' });
    });

}

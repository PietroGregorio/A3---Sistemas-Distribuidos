export default function rotasMarvel(server, db) {
    server.get('/marvel', (req, res) => {
        const herois = db.get("/marvel") || {};
        res.status(200).json(herois);
    });

    server.post('/marvel', (req, res) => {
        const id = db.newID("MARVEL-");
        const data = { id, ...req.body };
        db.set(`/marvel/${id}`, data);
        res.status(201).json({ msg: "Herói da Marvel criado.", data });
    });

    server.put('/marvel/:id', (req, res) => {
        const id = req.params.id;
        const heroi = db.get(`/marvel/${id}`);
        if (!heroi) {
            res.status(400).json({ msg: "Herói não encontrado." });
            return;
        }
        const data = { id, ...req.body };
        db.set(`/marvel/${id}`, data);
        res.status(200).json({ msg: "Herói atualizado.", data });
    });

    server.delete('/marvel/:id', (req, res) => {
        const id = req.params.id;
        const heroi = db.get(`/marvel/${id}`);
        if (!heroi) {
            res.status(400).json({ msg: "Herói não encontrado." });
            return;
        }
        db.set(`/marvel/${id}`, null);
        res.status(200).json({ msg: "Herói removido." });
    });
}

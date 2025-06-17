import { server, db, PORT } from "./initServer.js";
import rotasMarvel from "./rotasMarvel.js";
import rotasDC from "./rotasDC.js";
import rotasUsuarios from "./rotasUsuarios.js";
import auth from "./auth.js";

auth.authRote(server);

server.get('/', (req, res) => {
    res.send('🚀 API de Super-Heróis funcionando!');
});

rotasMarvel(server, db);
rotasDC(server, db);
rotasUsuarios(server, db);

server.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});

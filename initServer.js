import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import cors from "cors";

const server = express();
server.use(cors());
server.use(bodyParser.json());

const PORT = 3002;

// Funções para manipular o banco
const dbPath = "./db.json";

function readDB() {
    const data = fs.readFileSync(dbPath, "utf-8");
    return JSON.parse(data);
}

function writeDB(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 4));
}

function newID(prefix) {
    return prefix + Math.floor(Date.now() * Math.random()).toString(36);
}

const db = {
    get: (path) => {
        const data = readDB();
        const keys = path.split("/").filter(Boolean);
        return keys.reduce((acc, key) => acc?.[key] ?? null, data);
    },
    set: (path, value) => {
        const data = readDB();
        const keys = path.split("/").filter(Boolean);
        let temp = data;
        keys.forEach((key, index) => {
            if (index === keys.length - 1) {
                temp[key] = value;
            } else {
                temp[key] = temp[key] || {};
                temp = temp[key];
            }
        });
        writeDB(data);
    },
    newID
};

export { server, db, PORT };

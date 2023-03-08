"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('New Express + TypeScript Server running on port 100000?');
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server started on port: ${port}.`);
    console.log('Project has been updated to TypeScript!!!');
    console.log('Built and launched with npm run prod');
});

import path from 'path';
import { fileURLToPath } from 'url';

export const handler = async () => {
    console.log("delivering HTMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    console.log("__filename:::::::::: ", __filename);
    console.log("__dirname:::::::", __dirname);

    app.use("*", (req, res) => res.sendFile(__dirname + "/dist/index.html"));
};
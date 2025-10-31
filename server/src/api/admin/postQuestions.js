import { connection } from "../../db.js";
import { IsValid } from "../../lib/IsValid.js";

export async function postAdminQuestions(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        description: 'nonEmptyString',
        url: 'url',
        status: 'nonEmptyString',
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    const { description, url, status} = req.body;

    try {
        const sql = `SELECT * FROM questions WHERE description = ? OR url_slug = ?;`;
        const [response] = await connection.execute(sql, [description, url]);

        if (response.length > 0) {
            return res.status(400).json({
                status: 'error',
                msg: 'Toks klausimas jau užduotas',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    }

    try {
        const sql = `
            INSERT INTO questions (description, url_slug, status_id)
            VALUES (?, ?, 
                (SELECT id FROM general_status WHERE name = ?));`;
        const [response] = await connection.execute(sql, [description, url, status]);

        if (response.affectedRows !== 1) {
            return res.status(500).json({
                status: 'error',
                msg: 'Serverio klaida',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    }

    return res.status(201).json({
        status: 'success',
        msg: 'Sekmingai patalpintas naujas klausimas',
    });
}
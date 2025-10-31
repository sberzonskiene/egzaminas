import { connection } from '../../db.js';
 
export async function getAdminQuestions(req, res) {
    try {
        const sql = `
            SELECT questions.*, general_status.name AS status_name
            FROM questions
            INNER JOIN general_status
                ON questions.status_id = general_status.id;`;

        const [questions] = await connection.execute(sql);

        return res.json({
            status: 'success',
            questions,
        });
    } catch (error) {
        return res.json({
            status: 'error',
            questions: [],
        });
    }
}


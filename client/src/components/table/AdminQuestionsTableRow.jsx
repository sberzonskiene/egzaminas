import { useContext } from 'react';
import { Link } from 'react-router';
import { QuestionsContext } from '../../context/questions/QuestionsContext';
import { SERVER_ADDRESS } from '../../env';

export function AdminQuestionsTableRow({ question }) {
    const { deletePublicQuestion, deleteAdminQuestion } = useContext(QuestionsContext);

    function handleDeleteClick() {
        fetch(SERVER_ADDRESS + '/api/admin/questions/' + question.url_slug, {
            method: 'DELETE',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    deletePublicQuestion(question.url_slug);
                    deleteAdminQuestion(question.url_slug);
                }
            })
            .catch(console.error);
    }

    return (
        <tr>
            <th>{question.id}</th>
            <td><Link to={"/admin/questions/" + question.url_slug}>{question.description}</Link></td>
            <td>{question.url_slug}</td>
            <td>
                {
                    question.status_name === 'publish'
                        ?<span className="badge text-bg-success">Išspręstas</span>
                        : <span className="badge text-bg-warning">Svarstomas</span>
                }
            </td>
            <td className="d-flex gap-3">
                <Link className="btn btn-primary btn-sm" to={`/admin/questions/${question.url_slug}/edit`}>Redaguoti</Link>
                <button onClick={handleDeleteClick} className="btn btn-danger btn-sm">Ištrinti</button>
            </td>
        </tr>
    );
}
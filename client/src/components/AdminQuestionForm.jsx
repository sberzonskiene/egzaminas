import { useContext, useState } from "react";
import { QuestionsContext } from "../context/questions/QuestionsContext";
import { useNavigate } from "react-router";

export function AdminQuestionForm({ api, method, question }) {
    const [description, setDescription] = useState(question?.description ?? '');
    const [url, setUrl] = useState(question?.url_slug ?? '');
    const [status, setStatus] = useState(question?.status_name ?? 'present');

    const { updateAdminQuestions, updatePublicQuestions } = useContext(QuestionsContext);
    const navigate = useNavigate();

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(api, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                description,
                url,
                status,
            }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    updatePublicQuestions();
                    updateAdminQuestions();
                    navigate('/admin/questions');
                }
            })
            .catch(console.error);
    }

    return (
        <form onSubmit={handleFormSubmit} className="col-12 col-md-9 col-lg-6 mt-5">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Klausimas/skundas</label>
                <textarea onChange={e => setDescription(e.target.value)} value={description}
                    className="form-control" id="description" required></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="url" className="form-label">Url</label>
                <input onChange={e => setUrl(e.target.value)} value={url} type="text"
                    className="form-control" id="url" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Statusas</label>
                <div className="form-check">
                    <input onChange={() => setStatus('published')}
                        checked={status === 'published' ? 'checked' : ''}
                        type="radio" name="radios" className="form-check-input" id="status_published" required />
                    <label className="form-check-label" htmlFor="status_published">Išspręstas</label>
                </div>
                <div className="form-check">
                    <input onChange={() => setStatus('draft')}
                        checked={status === 'draft' ? 'checked' : ''}
                        type="radio" name="radios" className="form-check-input" id="status_draft" required />
                    <label className="form-check-label" htmlFor="status_draft">Svarstomas</label>
                </div>
            </div>
            <button type="submit" className="btn btn-info">{method === 'POST' ? 'Sukurti' : 'Atnaujinti'}</button>
        </form>
    );
}
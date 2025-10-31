import { useContext } from 'react';
import { Link } from 'react-router';
import { StoriesContext } from '../../context/stories/StoriesContext';
import { SERVER_ADDRESS } from '../../env';

export function AdminStoriesTableRow({ story }) {
    const { deletePublicStory, deleteAdminStory } = useContext(StoriesContext);

    function handleDeleteClick() {
        fetch(SERVER_ADDRESS + '/api/admin/stories/' + story.url_slug, {
            method: 'DELETE',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    deletePublicStory(story.url_slug);
                    deleteAdminStory(story.url_slug);
                }
            })
            .catch(console.error);
    }

    return (
        <tr>
            <th>{story.id}</th>
            <td><Link to={"/admin/stories/" + story.url_slug}>{story.title}</Link></td>
            <td>{story.url_slug}</td>
            <td>{story.description}</td>
            <td>
                {
                    story.status_name === 'published'
                        ? <span className="badge text-bg-success">Viešas</span>
                        : <span className="badge text-bg-warning">Admin</span>
                }
            </td>
            <td className="d-flex gap-3">
                <Link className="btn btn-primary btn-sm" to={`/admin/stories/${story.url_slug}/edit`}>Redaguoti</Link>
                <button onClick={handleDeleteClick} className="btn btn-danger btn-sm">Ištrinti</button>
            </td>
        </tr>
    );
}
export function AdminQuestionTable({ data }) {
    return (
        <table className="blueTable text-left">
            <tbody>
                <tr className="mb-3">
                    <td>Nr.</td>
                    <td>{data.id}</td>
                </tr>
                <tr className="mb-3">
                    <td>Klausimas/skundas</td>
                    <td>{data.description}</td>
                </tr>
                <tr className="mb-3">
                    <td>Url</td>
                    <td>{data.url_slug}</td>
                </tr>
                <tr className="mb-3">
                    <td>Statusas</td>
                    <td>
                        {
                            data.status_name === 'present'
                                ? <span className="badge text-bg-info">Pateiktas</span>
                                : <span className="badge text-bg-warning">Svarstomas</span>
                                || <span className="badge text-bg-succses">Išspręstas</span>                 
                        }

                    </td>
                </tr>
            </tbody>
        </table>
    );
}
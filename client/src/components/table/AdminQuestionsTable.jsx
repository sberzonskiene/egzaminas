import { AdminQuestionsTableRow } from "./AdminQuestionsTableRow";

export function AdminQuestionsTable({ list }) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                        <table className="blueTable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Klausimas/skundas</th>
                                    <th >Url</th>
                                    <th >Statusas</th>
                                    <th >Veiksmas</th>
                                </tr>
                            </thead>
                            <tbody >
                                {list.map(item => <AdminQuestionsTableRow key={item.id} question={item} />)}
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    );
}

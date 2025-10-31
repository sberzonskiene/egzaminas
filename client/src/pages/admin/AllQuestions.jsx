import { useContext } from "react";
import { AdminQuestionsTable } from "../../components/table/AdminQuestionsTable";
import { QuestionsContext } from "../../context/questions/QuestionsContext";

export function AdminAllQuestionsPage() {
    const { adminQuestions } = useContext(QuestionsContext);

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="fst-italic">Visi klausimai/gedimai</h3>
                    </div>
                </div>
            </div>
            <AdminQuestionsTable list={adminQuestions} />
        </main>
    );
}
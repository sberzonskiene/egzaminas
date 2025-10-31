import { useContext } from "react";
import { AdminQuestionForm } from "../../components/AdminQuestionForm";
import { QuestionsContext } from "../../context/questions/QuestionsContext";
import { useParams } from "react-router";
import { SERVER_ADDRESS } from "../../env";
import { NotFoundPage } from "../public/NotFound";

export function AdminEditQuestionPage() {
    const { getAdminQuestionByUrlSlug } = useContext(QuestionsContext);
    const { question } = useParams();

    const questionData = getAdminQuestionByUrlSlug(question);

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="fst-italic">{`Redaguoti klausimo būseną: "${question}"`}</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                   {
                        questionData
                            ? <AdminQuestionForm
                                api={SERVER_ADDRESS + '/api/admin/questions/' + questionData.url_slug}
                                method="PUT"
                                question={questionData} />
                            : (
                                <NotFoundPage />
                            )
                    }
                </div>
            </div>
        </main>
    );
}
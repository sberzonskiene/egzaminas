import { AdminQuestionForm } from "../../components/AdminQuestionForm";
import { SERVER_ADDRESS } from "../../env";

export function AdminNewQuestionPage() {
    return (
        <main>
             <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="fst-italic">Užduokite naują klausimą.</h3>
                    </div>
                </div>
            </div>
            <div className="container">
            <div className="row">
                    <AdminQuestionForm
                        api={SERVER_ADDRESS + '/api/admin/questions'}
                        method="POST" />
                </div>
            </div>
         </main>
    );
}
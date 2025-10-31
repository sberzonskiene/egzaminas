import { useContext, useEffect, useState } from "react";
import { QuestionsContext } from "./QuestionsContext";
import { initialQuestionsContext } from "./initialQuestionsContext";
import { UserContext } from "../user/UserContext";
import { SERVER_ADDRESS } from "../../env";

export function QuestionsContextWrapper(props) {
    const [publicQuestions, setPublicQuestions] = useState(initialQuestionsContext.publicQuestions);
    const [adminQuestions, setAdminQuestions] = useState(initialQuestionsContext.adminQuestions);

    const { isLoggedIn } = useContext(UserContext);

    function updatePublicQuestions() {
        fetch(SERVER_ADDRESS + '/api/suestions', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setPublicQuestions(() => data.questions);
                }
            })
            .catch(console.error);
    }

    function updateAdminQuestions() {
        fetch(SERVER_ADDRESS + '/api/admin/questions', {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setAdminQuestions(() => data.questions);
                }
            })
            .catch(console.error);
    }

    function deletePublicQuestion(urlSlug) {
        setPublicQuestions(currentList => currentList.filter(question => question.url_slug !== urlSlug));
    }

    function deleteAdminQuestion(urlSlug) {
        setAdminQuestions(currentList => currentList.filter(question => question.url_slug !== urlSlug));
    }

    function getPublicQuestionByUrlSlug(urlSlug) {
        return publicQuestions.find(question => question.url_slug === urlSlug);
    }

    function getAdminQuestionByUrlSlug(urlSlug) {
        return adminQuestions.find(question => question.url_slug === urlSlug);
    }

    function getAdminQuestionById(id) {
        return adminQuestions.find(question => question.id === id);
    }

    useEffect(updatePublicQuestions, []);

    useEffect(() => {
        if (isLoggedIn) {
            updateAdminQuestions();
        } else {
            setAdminQuestions(() => initialQuestionsContext.adminQuestions);
        }
    }, [isLoggedIn]);

    const values = {
        publicQuestions,
        adminQuestions,
        getPublicQuestionByUrlSlug,
        getAdminQuestionByUrlSlug,
        getAdminQuestionById,
        updatePublicQuestions,
        updateAdminQuestions,
        deletePublicQuestion,
        deleteAdminQuestion,
    };

    return (
        <QuestionsContext.Provider value={values}>
            {props.children}
        </QuestionsContext.Provider>
    )
}
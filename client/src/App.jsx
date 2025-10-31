import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from './pages/public/Home';
import { PublicLayout } from './templates/PublicLayout';
import { NotFoundPage } from './pages/public/NotFound';
import { RegisterPage } from './pages/public/Register';
import { LoginPage } from './pages/public/Login';
import { AdminDasboardPage } from './pages/admin/Dashboard';
import { AdminAllQuestionsPage } from './pages/admin/AllQuestions';
import { AdminNewQuestionPage } from './pages/admin/NewQuestion';
import { AdminEditQuestionPage } from './pages/admin/EditStory';
import { AdminLayout } from './templates/AdminLayout';
import { LogoutPage } from './pages/public/Logout';
import { UserContextWrapper } from './context/user/UserContextWrapper';
import { QuestionsContextWrapper } from './context/questions/QuestionsContextWrapper';

export function App() {
  return (
    <UserContextWrapper>
      <QuestionsContextWrapper>
        <BrowserRouter>
            <Routes>
              <Route element={<PublicLayout />}>
                <Route path='/' index element={<HomePage/>} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/logout' element={<LogoutPage />} />  
              </Route>

              <Route element={<AdminLayout />}>
                <Route path='/admin' element={<AdminDasboardPage />} />

                <Route path='/admin/questions' element={<AdminAllQuestionsPage />} />
                <Route path='/admin/question/new' element={<AdminNewQuestionPage />} />
                <Route path='/admin/questions/:question/edit' element={<AdminEditQuestionPage />} />
              </Route>

              <Route element={<PublicLayout />}>
                <Route path='*' element={<NotFoundPage />} />
              </Route>
            </Routes>
        </BrowserRouter>
      </QuestionsContextWrapper>
    </UserContextWrapper>
  );
}


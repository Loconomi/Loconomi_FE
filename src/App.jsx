import './App.css';
import PageContainer from './components/common/PageContainer';
import LoginPage from './pages/Login/LoginPage.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './router/Router.jsx';
import GlobalStyle from './style/GlobalStyle.js';


function App() {
  return (
    <>
      <PageContainer>
        <RouterProvider router={router} />
      </PageContainer>
    </>
  );
}


export default App;

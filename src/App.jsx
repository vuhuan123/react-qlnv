import { useContext } from 'react';
import styles from './App.scss'
import Header from './components/Header'
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from "./context/UserContext";
import PublicRoute from './routes/publicRoute';



function App() {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className='app-container'>
        <Header />
        <Container>
          <PublicRoute />
        </Container>
      </div>


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </>
  )
}

export default App

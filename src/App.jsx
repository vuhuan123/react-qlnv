
import { useState } from 'react';
import styles from './App.scss'
import Header from './components/Header'
import ModalAdd from './components/ModalAdd';
import TableUser from './components/TableUser'
import Container from 'react-bootstrap/Container';


function App() {

  const [isShow, setIsShow] = useState(false);

  const handleAdd = () => {
    setIsShow(true)
  }

  const handleClose = () => {
    setIsShow(false)
  }


  return (
    <div className='app-container'>
      <Header />
      <Container>
        <div className='my-3 d-flex justify-content-between'>
          <h4>List Box:</h4>

          <button className='btn btn-success' onClick={handleAdd}>Add</button>
        </div>
        <TableUser />
      </Container>
      <ModalAdd show={isShow} handleClose={handleClose} />
    </div>
  )
}

export default App

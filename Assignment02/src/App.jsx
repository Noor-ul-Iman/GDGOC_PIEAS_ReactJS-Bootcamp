
import './App.css'
import BookAuthors from './Compoents/BookAuthors'
import BookDetails from './Compoents/BookDetails'
import FictionBooks from './Compoents/FictionBooks'
import HighRatedBooks from './Compoents/HighRatedBooks'

function App() {
 

  return (
    <>
    <div>
      <h1>Library Manager</h1>
     <HighRatedBooks></HighRatedBooks>
     <BookAuthors></BookAuthors>
    <FictionBooks></FictionBooks>
    <BookDetails></BookDetails>
     </div>
    </>
  )
}

export default App

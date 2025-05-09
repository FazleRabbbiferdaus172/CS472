import { ItemList } from "./components/ItemList"
import { BookProvider } from "./components/itemContext"
import 'bulma/css/bulma.css'

function App() {

  return (
    <BookProvider>
      <div className="content">
        <ItemList/>
      </div>
    </BookProvider>
  )
}

export default App

import { useBookContext } from "./itemContext";
import { useState } from "react";

export function CreateBookForm(props) {
    const {addBook} = useBookContext()
    const [book, setBook] = useState({
        title: '',
        author: '',
      })
    
      const handleSubmit = (e) => {
        e.preventDefault(); // prevents full page reload
        e.stopPropagation();
        if (!book.title || !book.author) {
          alert('Please fill in all fields')
          return
        }
        addBook(book)
        setBook({
            title: '',
            author: '',
          })
      }
    
    const handleChange = (event) => {
        const { name, value } = event.target
        setBook((prevBook) => ({
          ...prevBook,
          [name]: value,
        }))
      }

    return (<form className="columns is-2" onSubmit={handleSubmit}>
                <div className="column is-3 m-1"></div>
                {props.columnList.map( c=> 
                    {
                        return <input
                        className="column is-2 m-1 has-background-primary"
                        id={c}
                        type='text'
                        name={c}
                        value={book[c]}
                        required
                        onChange={handleChange}
                        />
                    }
                )}
                <button className="column is-2 m-1 has-background-primary" type='submit'>Add</button>        
            </form>)
}
import { useBookContext } from "./itemContext";
import { useState } from "react";

export function UpdateBookForm(props) {
    const {updateBook} = useBookContext()
    const [book, setBook] = useState({
        id: props.id,
        title: props.title,
        author: props.author,
      })
    
      const handleSubmit = (e) => {
        e.preventDefault(); // prevents full page reload
        e.stopPropagation();
        if (!book.title || !book.author) {
          alert('Please fill in all fields')
          return
        }
        updateBook(book)
        props.toggleMode()
        // setBook({
        //     title: '',
        //     author: '',
        //   })
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
                        className="column is-2 m-1 has-background-dark has-text-light"
                        id={c}
                        type='text'
                        name={c}
                        value={book[c]}
                        required
                        onChange={handleChange}
                        />
                    }
                )}
                <button className="column is-2 m-1 has-background-primary" type='submit'>Update</button>        
            </form>)
}
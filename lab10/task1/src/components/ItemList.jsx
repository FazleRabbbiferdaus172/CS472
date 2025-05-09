import { useBookContext } from "./itemContext"
import { CreateBookForm } from "./createBookForm"
import { UpdateBookForm } from "./editBookForm"
import { useState } from "react"

export function ItemList(props) {
    const { books: items, loading, error } = useBookContext()
    // let items = props.items
    if (loading) return <><h3>Loading...</h3></>
    if (loading) return <><h3>{error}</h3></>
    let staticColumn = "id"
    let columnsCount = 0
    let columnList = []
    if (items.length !== 0) {
        columnList = Object.getOwnPropertyNames(items[0]).filter(x => x != staticColumn)
        columnsCount = columnList.length
    }
    return (<div className="mt-6">
            <ItemTitle columnList={columnList}/>
            <CreateBookForm columnList={columnList} columnsCount={columnsCount}/>
            <div style={{overflowY:"auto", overflowX: "hidden",maxHeight: '700px'}}>
                {items.map(i => <Item key={i.id} staticColumn={staticColumn} columnList={columnList} columnsCount={columnsCount} {...i}/>)}
            </div>
            </div>)
}


function ItemTitle(props) {
        return (
            <div className="columns is-2">
                <div className="column is-3 m-1"></div>
                {props.columnList.map( c=> <ItemCell value={c} isTitle={true}/>)}
                <div className="column is-2 m-1 has-background-info"></div>
            </div>
        )
}

function Item(props) {
    const { deleteBook } = useBookContext()
    let [mode, setMode] = useState("readonly")
    const toggleMode = () => {setMode("readonly")}
    if (mode === "readonly") {
        return (
            <div className="columns is-2" data-book-id={props[props.staticColumn]}>
                <div className="column is-3 m-1"></div>
                {props.columnList.map( c=> <ItemCell value={props[c]}/>)}
                <button className="column is-1 m-1 has-background-warning has-text-centered" onClick={() => setMode("edit")}>Edit</button>
                <button className="column is-1 m-1 has-background-danger has-text-centered" onClick={() => deleteBook(props[props.staticColumn])}>Delete</button>
            </div>
        )
    } else if(mode === "edit") {
        return <UpdateBookForm {...props} toggleMode={toggleMode}/>
    }
}

function ItemCell(props) {
    const isTitle = props?.isTitle ?? false
    if (!isTitle){
        return <div className="column is-2 m-1 has-background-light has-text-centered"><span>{props.value}</span></div>
    } else 
    {
        return <div className="column is-2 m-1 has-background-info has-text-centered is-capitalized"><span>{props.value}</span></div>
    }
}
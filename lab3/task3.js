"use strict"

let libraryBooks = [
 { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
 { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
 { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
 { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257 }
 ];

 function addBook(title, author, id) { 
	title = title[0].toUpperCase() + title.slice(1)
	const exists = libraryBooks.some(x => x.title === title && x.author === author && x.ID == ID)
	if (!exists) {
		let b = {title, author, id}
		libraryBooks.push(b)
		return b
	}
	else return null
}

const getTitle = function () {
		return libraryBooks.map(x => x.title).sort()
	}

const findBooks = (t) => libraryBooks.filter(x => x.title === t).sort((x,y) => 
			{ 
				if (x.ID < y.ID) return -1
				else if(x.ID > y.ID) return 1
				else return 0
			}
		)

console.log(addBook('a', 'a', 111))
console.log(libraryBooks)

console.log(getTitle())

console.log(
	findBooks(libraryBooks[0].title)
)

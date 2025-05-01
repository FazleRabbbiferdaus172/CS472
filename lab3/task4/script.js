import { get_items, add_item, update_item_title_by_id, delete_item_by_id, get_item_title_by_id} from "./data.js";



console.log(add_item({ id: 1, title: "a" }))
console.log(add_item({ id: 2, title: "s" }))
console.log(add_item({ id: 1, title: "d" }))

console.log(get_items())

console.log(update_item_title_by_id(1, "f"))
console.log(update_item_title_by_id(3, "g"))

console.log(get_item_title_by_id(1))
console.log(get_item_title_by_id(99))

console.log(delete_item_by_id(2))
console.log(delete_item_by_id(99))

console.log(get_items())

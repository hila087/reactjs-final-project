// firebase
import FirebaseQueries from '../../firebase/queries'


// (form) handler extracts form values & creates a new item
export const createItemHandler = e => {
    e.preventDefault()
    FirebaseQueries.create({
        name: e.target[0].value,
        image: e.target[1].value,
        cost: e.target[2].value,
        category: e.target[3].value,
        is_in_stock: true
    })
    e.target.reset()
}


// (form) handler extracts form values & updates an existing item
// Input: e - form submit event, item_id - the item id to update.
export const updateItemHandler = (e, item_id) => {
    e.preventDefault()
    console.log({v: e.target});
    FirebaseQueries.update(item_id, {
        name: e.target[0].value,
        image: e.target[1].value,
        cost: e.target[2].value,
        category: e.target[3].value,
        is_in_stock: e.target[4].checked,
    })
    e.target.reset()
}
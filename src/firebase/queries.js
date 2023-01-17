import { collection, deleteDoc, doc, updateDoc, addDoc } from 'firebase/firestore'
import { firestore } from './setup'


// Firebase queries class - access the firestore database with serverless functions
class FirebaseQueries {

    items_doc = 'items'

    // get all items
    getAll() {
        return collection(firestore, this.items_doc)
    }

    // get specific item, with a given id
    get(id) {
        return doc(firestore, this.items_doc, id)
    }

    // delete an item
    delete(id) {
        return deleteDoc(doc(firestore, this.items_doc, id))
    }

    // update an item
    update(id, data) {
        return updateDoc(doc(firestore, this.items_doc, id), data)
    }

    // create a new item
    create(data) {
        return addDoc(collection(firestore, this.items_doc), data)
    }
}


export default new FirebaseQueries()
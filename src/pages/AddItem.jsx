// components
import NewItemForm from '../components/NewItem.form'


// Page for adding items
function AddItem() {
    return (
        <main className="AddItem">
            {/* title */}
            <h1 className='text-center m-4'>Create an Item</h1>
            <NewItemForm />
        </main>
    )
}

export default AddItem
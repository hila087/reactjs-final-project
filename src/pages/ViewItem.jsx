import { useParams } from 'react-router-dom'
import { useState } from 'react'
// firebase
import { useDocument } from 'react-firebase-hooks/firestore'
import FirebaseQueries from '../firebase/queries'
// components
import NewItemForm from '../components/NewItem.form'
import Item from '../components/Item'


// View Item Page
function ViewItem() {
    // states
    const { item_id } = useParams()
    const [editing, setEditing] = useState(false)
    const [data, isLoading, error] = useDocument(
        FirebaseQueries.get(item_id),
        { snapshotListenOptions: { includeMetadataChanges: true } }
    )
    const item = {...data?.data(), id: data?.id}

    console.log({data: data?.data(), item_id})

    if (isLoading) return <h3 className='text-center'>loading...</h3>
    else return (
        <main className="ItemViewer">
            {/* title */}
            <h1 className='text-center m-4'>{editing ? 'Editing' : 'Viewing'} Item: "{item.name}"</h1>
            {/* item */}
            <div className="item" style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <Item item={item} viewSingleOnClick={setEditing} />
            </div>
            {/* edit item form */}
            { editing && <>
                <hr />
                <NewItemForm defaultValues={item} />
            </>}
        </main>
    )
}

export default ViewItem

import { useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import FirebaseQueries from '../firebase/queries'
import Item from '../components/Item'

const styles = {
    items_list: {display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))', gap: '1rem', padding: '1rem'},
    category_button: selected => ({border: `2px solid ${selected ? 'grey' : '#4ef'}`, borderRadius: '10px', marginLeft: '1rem'})
}


// Items Page - shows list of all items (with category sorting feature)
function Items() {
    // states
    const [data, isLoading, error] = useCollection(
        FirebaseQueries.getAll(),
        { snapshotListenOptions: { includeMetadataChanges: true } }
    )
    const [category, setCategory] = useState('')
    // handlers
    const setCategoryHandler = c => setCategory(curr => curr === c ? '' : c)    
    
    console.log({isLoading, data, error})
    return (
        <main className="Items">
            {/* title */}
            <h1 className='text-center m-4'>Showing {category || 'all items'}</h1>
            {/* categories */}
            <div className="categories m-4 d-flex justify-content-start">
                <h3>Category:</h3>
                <div className="d-flex justify-content-start" style={{width: '14rem'}}>
                    <button onClick={() => setCategoryHandler('phones')} style={styles.category_button(category !== 'phones')}>Phones</button>
                    <button onClick={() => setCategoryHandler('laptops')} style={styles.category_button(category !== 'laptops')}>Laptops</button>
                    <button onClick={() => setCategoryHandler('tvs')} style={styles.category_button(category !== 'tvs')}>TVs</button>
                </div>
            </div>
            {/* actual data */}
            {/* <div className="items-list" style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexWrap: 'wrap'}}> */}
            <div className="items-list" style={styles.items_list}>
                {data?.docs
                    .filter(d => d.data().category === category || !category)
                    .map(d => <Item key={d.id} item={{...d.data(), id: d.id}} />)}
            </div>
        </main>
    )
}

export default Items

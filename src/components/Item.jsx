import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// firebase
import FirebaseQueries from '../firebase/queries'
// icons
import { BsTrashFill, BsEyeFill } from 'react-icons/bs'
import { FiEdit2 } from 'react-icons/fi'
import { MdOutlineCancel } from 'react-icons/md'

// styles
const styles = {
    item: {width: '18rem', height: 'max-content', background: '#aaa', borderRadius: '10px', overflow: 'hidden'},
    img: {width: '100%', height: '100%', objectFit: 'cover'},
    item_details: {display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '.2rem 0 .4rem .7rem'},
    item_name: {width: '100%', height: '100%', position: 'absolute', top: 0, background: 'linear-gradient(to bottom, transparent, #00000055, #000000bb)', paddingTop: '7.7rem', paddingLeft: '.5rem', color: '#fff'},
    out_of_stock: {borderRadius: '7px', height: '1.4rem', padding: '.1rem .3rem', color: 'white', background: '#00000088', fontSize: '.85rem'},
    icons: {display: 'flex', justifyContent: 'flex-end', aligniItems: 'center', position: 'absolute', right: '.4rem', top: '.4rem'},
    icon: {borderRadius: '7px', height: '1.4rem', width: '1.4rem', color: 'white', background: '#00000088', marginLeft: '.2rem', padding: '.2rem', cursor: 'pointer'},
}


// Item component - gets an item and shows it as a card
// Input: item - the item data, viewSingleOnClick - a custom click handler, used when editing a single item (in view page)
function Item({item, viewSingleOnClick = null}) {
    // states
    const naviage = useNavigate()
    const [editing, setEditing] = useState(false)
    // handlers
    const deleteHandler = () => FirebaseQueries.delete(item.id)
    const viewHandler = () => naviage(`/items/${item.id}`)
    const setEditingHandler = is_editing => {
        setEditing(is_editing)
        viewSingleOnClick(is_editing)
    }

    console.log({item});
    return (
        <div className="Item" style={{...styles.item, opacity: editing ? '.85' : '1'}}>
            <div className="top-header" style={{width: '100%', height: '10rem', position: 'relative'}}>
                <img src={item.image} alt={item.name} style={styles.img} />
                <h5 style={styles.item_name}>{item.name}</h5>
                {/* icons */}
                <div style={styles.icons}>
                    {!item.is_in_stock && <span style={styles.out_of_stock}>{'Out of stock'}</span>}
                    { !viewSingleOnClick && <BsEyeFill onClick={viewHandler} style={styles.icon} title='View item' /> }
                    { viewSingleOnClick && (
                        editing
                            ? <MdOutlineCancel onClick={() => setEditingHandler(false)} style={styles.icon} title='Cancel editing' />
                            : <FiEdit2 onClick={() => setEditingHandler(true)} style={styles.icon} title='Edit item' />
                    )}
                    <BsTrashFill onClick={deleteHandler} style={styles.icon} title='Delete item' />
                </div>
            </div>
            <div className="btm-detils" style={styles.item_details}>
                <span>Category: "{item.category}"</span>
                <span>Cost: {item.cost}$</span>
            </div>
        </div>
    )
}

export default Item
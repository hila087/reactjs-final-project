// form-handlers
import { createItemHandler, updateItemHandler } from '../utils/handlers/itemHandlers'

const styles = {
    form: {display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'},
    input: {outline: 'none', border: 'none', borderBottom: '2px solid #f55', width: '15rem', height: '2rem', background: '#88888888', margin: '.5rem 1rem', padding: '0 .4rem'},
    button: {outline: 'none', border: '2px solid #666', width: '6rem', height: '2rem', background: '#ccc', margin: '.5rem 1rem', padding: '0 .4rem'},
    input_radio_container: {display: 'flex'}
}

// New Item form component - a form for item creating/updating purposes.
// Input: defaultValues - (optional) property to show the default input values.
function NewItemForm({defaultValues = null}) {
    // handlers
    const onFormSubmitHandler = (e) => {
        if (defaultValues) {
            updateItemHandler(e, defaultValues.id)
            alert('Updated item!')
        }
        else {
            createItemHandler(e)
            alert('Created new item!')
        }
    }

    return (
        <form style={styles.form} onSubmit={onFormSubmitHandler}>
            <input style={styles.input} defaultValue={defaultValues?.name} type="text" placeholder='Item Name' />
            <input style={styles.input} defaultValue={defaultValues?.image} type="text" placeholder='Item Image URL' />
            <input style={styles.input} defaultValue={defaultValues?.cost} type="number" min={0} max={3000} placeholder='Item Cost' />
            <select style={styles.input} defaultValue={defaultValues?.category}>
                <option value="phones">Phones</option>
                <option defaultChecked={true} value="laptops">Laptops</option>
                <option value="tvs">TVs</option>
            </select>
            {defaultValues && <>
                <div className="input-radio" style={styles.input_radio_container}>
                    <input style={styles.input_radio_container} id='in_stock' name='stock' type="radio" defaultChecked={defaultValues?.is_in_stock} value={'In stock'} />
                    <label style={{marginLeft: '.3rem'}} htmlFor="in_stock">In Stock</label>
                </div>
                <div className="input-radio" style={styles.input_radio_container}>
                    <input style={styles.input_radio_container} id='out_of_stock' name='stock' type="radio" defaultChecked={!defaultValues?.is_in_stock} value={'Out of stock'} />
                    <label style={{marginLeft: '.3rem'}} htmlFor="out_of_stock">Out of Stock</label>
                </div>
            </>}
            <input style={styles.button} type="submit" value="Submit" />
        </form>
    )
}

export default NewItemForm

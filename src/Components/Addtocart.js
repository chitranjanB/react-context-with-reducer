import React, { useState, useContext } from 'react'
import { Usercontext } from '../App'
import Navbar from './Navbar'
import { data as items } from '../dataset'

import Cartlist from './Cartlist'
const Addtocart = () => {
    const [item, setItem] = useState("")
    const { state, dispatch } = useContext(Usercontext)
    const add = () => {
        if (item) {

            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    ...item,
                    quantity: 1
                }
            })
        }
        else {
            alert("Please choose a product")
        }
    }

    return (
        <div>
            <Navbar add />
            <div className="container py-5 " >
                <h1 className="my-4 mx-2">Add items</h1>
                <div className="px-5 pt-5 pb-3" style={{ border: "1px solid grey", borderRadius: "4px", textAlign: "center" }}>
                    <div style={{ maxWidth: "400px", margin: "10px auto" }}>
                        <select onChange={e => {
                            const item = items.find(o => o.id == e.target.value);
                            setItem(item);
                        }}>
                            {[{id:-1,name:"-Select-"},...items].map(item =>
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>)
                            }

                        </select>

                    </div>
                    <button className="btn btn-success my-3" onClick={add}>Add</button>
                </div>

            </div>
            <Cartlist />
        </div>
    )
}
export default Addtocart

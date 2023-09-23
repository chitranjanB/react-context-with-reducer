import React, { useContext } from 'react'
import { Usercontext } from '../App'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import Cartlist from './Cartlist'
function Cart() {
    const navigate = useNavigate()

    return (
        <div>
            <Navbar view />
            <Cartlist />
            <div style={{ textAlign: "center" }} onClick={() => navigate("/add")}>
                <button className="btn btn-success" >Add</button>
            </div>

        </div>
    )
}

export default Cart

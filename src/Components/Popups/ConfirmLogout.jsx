import React from 'react'
import poweroff from "../../assets/power-removebg-preview.png";
import "./ConfirmLogout.css";

const ConfirmLogout = ({onCancel , onConfirm}) => {
  return (
    <div className='main-confirm-logout'>
        <div className='flex flex-col gap-5 items-center confirm-logout rounded'> 
            <img src={poweroff} alt="" width={60}/>
            <span className='text-xl font-medium'>Are Sure You Want To Logout</span>
            <div className='flex gap-12'>
                <button className='text-lg px-7 py-1 bg-blue-500 text-white rounded hover:bg-blue-700' onClick={onConfirm}>Yes</button>
                <button className='text-lg px-7 py-1 bg-black text-white rounded hover:bg-blue-800' onClick={onCancel}>No</button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmLogout
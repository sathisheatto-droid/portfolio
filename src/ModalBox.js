import { React, useState } from 'react'
import './ModalBox.css'
import image from './asset/phone.png'
function ModalBox() {

  const [Modal, setModal] = useState(false)

  return (<>
    <div>ModalBox</div>

    {Modal ? <div className="modal">
      <span>Are You sure, Do You want to continue?</span>
      <button onClick={() => setModal(false)}>OK </button>
    </div> : ""
    }

    <button onClick={() => setModal(true)}>confirm</button>



    <div className="overlay">
      <div className="popup">
        <button className="close">×</button>

        <img src={image} className="banner" />

        <h1>Secure all your devices</h1>

        <p>
          Ensure your mobile phone, laptop, and other<br />
          devices are protected online.
        </p>

        <button className="premium">Purchase Premium</button>
      </div>
    </div>





  </>


  )
}

export default ModalBox
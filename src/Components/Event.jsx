import React from 'react'
import Modal from'react-modal'
import Datetime from 'react-datetime';
import "react-datepicker/dist/react-datepicker.css";


export default function({isOpen, onClose, onEventAdded}) {
const[title, setTitle] = React.useState("");
const[start, setStart] = React.useState(new Date());
const[end, setEnd] = React.useState(new Date());



const onSubmit = (e) => {
    e.preventDefault();
    onEventAdded({
        title,
        start,
        end,
    })
    console.log(title,start,end);
}


    return(
        <Modal isOpen={isOpen} onRequestClose= {onClose}>
            <h2>Bóka helgi</h2>
            <form onSubmit={onSubmit}>
                <input placeholder ="Hvernig ferð?" value={title} onChange = {e => setTitle(e.target.value)} />
                <div>
                    <label>Byrjunar dagsetning</label>
                    <Datetime value= {start} onChange = {date => setStart(date)}/>
                </div>

                <div>
                    <label>Loka dagsetning</label>
                    <Datetime value= {end} onChange = {date => setEnd(date)}/>
                </div>

                <button>Bóka</button>
            </form>
        </Modal>
    )
    
}



import React from "react";
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'
import Event from './Event'
import axios from "axios"
import moment from "moment";

export default function(){
    const [modalOpen, setModalOpen] = React.useState(false);
    const [events, setEvents] = React.useState([]);
    const calendarRef = React.useRef(null);


    const onEventAdded = event => {
        let calendarApi = calendarRef.current.getApi();
        calendarApi.addEvent({
            //start: moment(event.start).toDate(),
            start: moment(event.start).toDate(),
            
            end: moment(event.end).toDate(),
            title: event.title,
    
        });
        console.log(event.start, event.end);
    };

    async function handleEventAdd(data){
        console.log(data.event)
        await axios.post("/api/calendar/create-event", data.event);
    }

    async function handleDateSet(data){
        const response = await axios.get("/api/calendar/get-events?start="+moment(data.start).toISOString()+"&end="+moment(data.end).toISOString);
        setEvents(response.data);
    }
    return(
        <section>
            <button onClick={() => setModalOpen(true)}>Bóka</button>
            <div style={{position: 'relative', zIndex: 0} }>
                <FullCalendar
                    ref={calendarRef}
                    events={events}
                    plugins = {[dayGridPlugin]}
                    initialView='dayGridMonth'
                    eventAdd={event => handleEventAdd(event)}
                    datesSet={(date) => handleDateSet(date)}
                />
            </div>
 
            

            <Event isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)}/>
        </section>
    )
}

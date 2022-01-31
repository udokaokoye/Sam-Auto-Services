import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './ScheduleEdit.css'
import moment from 'moment';
const ScheduleEdit = () => {
    const history = useHistory()
    const [apt, setapt] = useState([]);
    const [time, settime] = useState('');
    const [date, setdate] = useState('');
    const timeInterval = ["11:00 Am", "12:00 Pm", "1:00 Pm", "2:00 Pm", "3:00 Pm", "4:00 Pm", "5:00 Pm", "6:00 Pm", "7:00 Pm"]

    useEffect(() => {
        fetchAppt()
      }, []);

    const {id} = useParams()

    const fetchAppt = () => {
        const url = "http://localhost/samautotech/fetch_appt.php";

        fetch(url, {
            method: "POST"
        }).then((res) => res.json()).then((data) => {
            setapt(data.filter(ap => ap.id == id)[0])
            // setdate(data.filter(ap => ap.id == id)[0].date)
        })
    }

    const ConfirmAppt = () => {
        if (window.confirm("Are you sure you want confirm appointment?, this action can not be changed")) {
            const url = 'http://localhost/samautotech/confirm_appt.php'
        const formData = new FormData;
        formData.append("id", id)
        formData.append("date", date == '' ? apt.date : date)
        formData.append("time", time == '' ? apt.time : time)

        fetch(url, {
            method: "POST",
            body: formData
        }).then((res) => res.json()).then((data) => {
            history.push('/admin')
        })
        }
    }

    const CancelAppt = () => {
        if (window.confirm("Are You Sure You Want To Cancel Appointment")) {
            const url = 'http://localhost/samautotech/cancel_appt.php'
        const formData = new FormData;
        formData.append("id", id)

        fetch(url, {
            method: "POST",
            body: formData
        }).then((res) => res.json()).then((data) => {
            alert(data)
        })
        }
        
    }
  return <div className='edit_cont'>
      <div className="appt">
                    <h3>{apt.fname + " " + apt.lname}</h3>
                    <p><span>Name:</span> {apt.fname + " " + apt.lname}</p>
                    <p><span>Email:</span> {apt.email}</p>
                    <p><span>Phone:</span> {apt.phone}</p>
                    <p><span>Address:</span> {apt.address == '' ? 'N/A' : apt.address}</p>
                    <p><span>Appointment Type:</span> {apt.type}</p>
                    <p><span>Vehicle Make:</span> {apt.v_make}</p>
                    <p><span>Vehicle Model:</span> {apt.v_model}</p>
                    <p><span>Vehicle Year:</span> {apt.v_year}</p>
                    <p><span>Other Vehicle:</span> {apt.other_vehicle == '' ? 'N/A' : apt.other_vehicle}</p>
                    <p><span>Description:</span> {apt.details}</p>
                    <p><span>Scheduled Date & Time:</span> {moment(apt.date).format("Do MMMM YYYY")} @ {apt.time}</p>
                    

                    <h3>Change Schedule :-</h3>
                    <span><b><i>Contact Client Before Changing Schedule!</i></b></span>
                    <br />
                    <input onChange={(e) => setdate(e.target.value)}  type="date" />
                    <select onChange={(e) => settime(e.target.value)}>
                            {timeInterval.map((time) => (
                                <option value={time}>{time}</option>
                            ))}
                        </select> 
                            <br />
                            <br />
                        <button onClick={() => ConfirmAppt()}>Confirm Appointment</button>
                        <button onClick={() => CancelAppt()}>Cancel Appointment</button>
                </div>

            
  </div>;
};

export default ScheduleEdit;

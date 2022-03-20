import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClassList = () => {
    const [ state, setState ] = useState([])
    useEffect(()=> {
        axios.get(`https://anywhere-fitness-buildweek.herokuapp.com/api/clients/classes/public`)
        .then(res=> {
            console.log(res)
            setState(res.data)
        })
        .catch(err=> {
            console.log({err})
        })
    },[])
    
    return (
        <div className="class-list">
            {
                state.map(s => {
                    return (
                    <div className="ComponentContainer">
                        <div className="ModalContainer">                        
                            <div>
                                <h2>{s.class_name}</h2>
                                <h4>Type: {s.class_type}</h4>
                                <h4>Time: {s.class_start_time}</h4>
                                <h4>Duration: {s.class_duration}</h4>
                                <h4>Level: {s.class_intensity_level}</h4>
                                <h4>Attendees: {s.total_clients} people (Max: {s.max_class_size} people)</h4>
                            </div>                        
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default ClassList;
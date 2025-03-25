import React, { useState, useEffect, useCallback } from 'react';
import ShowData from './ShowData';
import FormComponent from './FormComponent';

const Skill = (formDetails) => {

    const [skills, setSkills] = useState([{id: 0, title: "Broccoli"}])
    const [newData, setNewData] = useState([])

    

    const handleSubmit = useCallback((formDetails) => {
        setSkills([...skills, {id: formDetails.count, title: formDetails.input}])

    })


    const list = skills.map((data) => {
        const listElement = (
            <ShowData 
                key = {data.id}
                title = {data.title}
                />
        );
        return listElement;
    });

  

    return (
        <div>
            <span>List of important skills</span>
            <br />
            <br />
            {list}
            <br />
            <br />
            <FormComponent onSubmit={handleSubmit}/>
            <br />
            <br />
            <span>{newData}</span>
        </div>
    );
};



export default Skill;
import React, { useState } from 'react';
import {v4 as uuid} from "uuid"

import Students from './Students';
import AddStudent from './AddStudent';
const Root = () => {
    const [stds ,setStudentsArr]=useState([
    
        {id:uuid(),name:"Noura",age:25 , email :"noura@mail.com"},
    


    ])
    const addStudent = (student)=>{
        setStudentsArr([...stds , {...student , id : uuid() , age : +(student.age)}]);

    }
    
    return (
        <div>
            <AddStudent addStudentFun={addStudent}></AddStudent>
            <Students stdsArr={stds}></Students>
        </div>
    );
}

export default Root;

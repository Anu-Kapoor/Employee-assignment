import React, { useState } from 'react'

import EmployeeList from '../components/employees/EmployeeList';
import EmpForm from '../components/Rough/EmpForm';
import Card from '../components/UI/Card';

const Home=()=>
{
    const [isAdding, setisAdding] = useState(false);
      
 const addForm=()=>
 {
      setisAdding(true);
 }

    
    return(
<Card>
{

 (
    <>
                    <h1>Employee Management Software 
                      </h1>
            
                    <EmployeeList />
    </>
)}
{/* {isAdding && (
    <EmpForm setisAdding={setisAdding}/>
)} */}

</Card>
    );
}

export default Home;

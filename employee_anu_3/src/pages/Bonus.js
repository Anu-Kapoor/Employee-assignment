
import Card from '../components/UI/Card';
import classes from '../components/employees/employeeList.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { dataSliceActions } from '../components/store/data-slice';


const Bonus = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.EmpDATA.EmpItems);
 

 const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const monthN = new Date().getMonth();
  
// const selectedEmployee = useSelector((state) => state.EmpDATA.selectedEmployee);

//   const CalcHandler = (id) => {
//     // const employee = employees.filter(employee => employee.id === id);
//     console.log(id);
//     dispatch(dataSliceActions.setSelectedEmployee(id));
//     console.log(isCalculating);
//     //dispatch(dataSliceActions.recalShow());
//     setIsCalculating(true);
    
// }

const calcBonus=(tar, ach)=>{
  console.log(tar, ach);
    const perc=ach/tar*100;
    let bonus=0;
    
    if(perc>125){
     bonus = (10000+(0.05*0.25*tar)+((ach-1.25*tar)*0.075));
     return bonus;
    }
    if(perc>100){
      bonus = (10000+((ach-tar)*0.05));
      return bonus;
        }
  if(perc===100){
          bonus = 10000;
          return bonus
            }
  if(perc<100){
     
      return bonus;
  }
}

  
  return (
    <Card>
      
      <h1>Bonus! </h1>
  
       
        
  <table className={classes.table}>
    <thead>
      <tr>
          <th>No.</th>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Total Sales Target</th>
          <th>Achieved (Jan to {month[monthN]} )</th>
          <th>Forecast Annual Achievement </th>
          <th>Bonus amount</th>
          
      </tr>
    </thead>

    <tbody>
      {employees.length > 0 ? (
        employees.map((emp, i) => (

        <tr key={emp.id}>
         
        
        <td>{i + 1}</td>
        <td>{emp.id}</td>
        <td>{emp.firstName}</td>
        <td>{emp.lastName}</td>
        <td>$ {emp.target}</td>
        <td>$ {emp.achievedTarget}</td>
        <td>$ { (emp.achievedTarget/(monthN+1)*12)}</td>
        <td>$ {calcBonus(emp.target, emp.achievedTarget)}</td>
        
        {/* <td>$ {calcBonus(emp.target, emp.achievedTarget)}</td>    */}

        

        </tr>
  ))
) : (
      <tr>
          <td colSpan={7}>No Employees found!</td>
      </tr>
    )}
  </tbody> 
</table> 
           
              

    
</Card>
  );
};

export default Bonus;



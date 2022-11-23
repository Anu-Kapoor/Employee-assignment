
import Card from '../components/UI/Card';
import classes from '../components/employees/employeeList.module.css';
import React, {useState} from 'react';
// import CalculateIcon from '../components/UI/CalculateIcon';
// import CalculateClaim from '../components/employees/CalculateClaim'
import { useDispatch, useSelector } from 'react-redux';
import { dataSliceActions } from '../components/store/data-slice';


const MedicalPolicy = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.EmpDATA.EmpItems);
 // const isCalculating = useSelector((state)=> state.EmpDATA.isCalculating);
 const [isCalculating, setIsCalculating] = useState(false);
  
  const selectedEmployee = useSelector((state) => state.EmpDATA.selectedEmployee);

  const ClaimHandler = (id) => {
    dispatch(dataSliceActions.setSelectedEmployee(id));
    setIsCalculating(true);
    }

const CancelHandler = () => {
  dispatch(dataSliceActions.recalHide());
  };

  const calculateClaim=(sal)=>{
    if (sal<500000)
    {return(1000000)}
    else{
        const TC=2.5*sal;
         return(TC);
    }

    };

    const calculateBalance=(sal, claimedAmt)=>{
      let bal= 0;
      if (sal<500000)
      { bal=(1000000-claimedAmt);
        return bal;}
      else{
          bal= ((2.5*sal)-claimedAmt);
          return bal;
      }

      };

 
  return (
    <Card>
      
      <h1>Medical Policy details</h1>
  
       
        
  <table className={classes.table}>
    <thead>
      <tr>
          <th>No.</th>
          <th>ID</th>
          <th>Name</th>
          <th>Policy Name</th>
          <th>Dependents</th>
          <th>Salary</th>
          <th>Total Claim</th>
          <th>Claimed Amount</th>
          <th>Claim Balance</th>
      
      </tr>
    </thead>

    <tbody>
      {employees.length > 0 ? (
        employees.map((emp, i) => (

        <tr key={emp.id}>
        
        <td>{i + 1}</td>
        <td>{emp.id}</td>
        <td>{emp.firstName} {emp.lastName}</td>
        <td>{emp.policy}</td>
        <td> {emp.Dependents}</td>
        <td>$ {emp.salary}</td>
        <td>$ {calculateClaim(emp.salary)}</td>
        <td>$ {emp.claimedAmount}</td>
        <td>$ {calculateBalance(emp.salary, emp.claimedAmount)}</td>
        
         

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

export default MedicalPolicy;



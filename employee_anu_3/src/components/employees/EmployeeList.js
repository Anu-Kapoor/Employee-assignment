
import { Fragment , useState} from 'react';

import Swal from 'sweetalert2';
import classes from './employeeList.module.css';
import EditIcon from '../UI/EditIcon';
import DeleteIcon from '../UI/DeleteIcon';
import Edit from '../employees/Edit';
import ADD from '../employees/ADD';
import { useDispatch, useSelector } from 'react-redux';
import { dataSliceActions } from '../store/data-slice';


const EmployeeList = () => {
  
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setisAdding] = useState(false);
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.EmpDATA.EmpItems);

  
  const Edithandler = (id) => {

dispatch(dataSliceActions.setSelectedEmployee(id));
    setIsEditing(true);
}

const addForm=()=>
{
     setisAdding(true);
}

const onCancel=()=>{
    setIsEditing(false);
    setisAdding(false);
}



const Deletehandler = (id) => {
  Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
  }).then(result => {
      if (result.value) {
           const [employee] = employees.filter(employee => employee.id === id);
         
          Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
              showConfirmButton: false,
              timer: 1500,
          });
          dispatch(dataSliceActions.deleteEmployee(id));
         
      }
  });
}

  

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null
});

  return (
    <div >
      <button style={{marginLeft: "25rem"}} onClick={addForm} className='round-button'>Add New Employee</button>  
          <Fragment>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email ID</th>
                        <th>Contact No</th>
                        <th>Age</th>
                        <th>DateofBirth</th>
                        <th>Salary</th>
                        <th>Address</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                 <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.id}</td>
                                <td><img src={employee.imageUrl} alt='' className={classes.img}></img></td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.contactNumber}</td>
                                <td>{employee.age}</td>
                                <td>{employee.dob}</td>
                                <td>{formatter.format(employee.salary)}</td>
                                <td>{employee.address} </td>
                                <td><button className={classes.button1} onClick={() => Edithandler(employee.id)}>
                                <EditIcon  />
                                    </button></td>
                                    <td>

                                    <button className={classes.button2} onClick={() => Deletehandler(employee.id)}>
                                        {/* className="button muted-button" > */}
                                        <DeleteIcon/>
                                    </button>
                                </td> 
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees found!</td>
                        </tr>
                    )}
                </tbody> 
            </table> 
            {isEditing && ( <Edit onCancel={onCancel}     />    )}

            {isAdding && (  <ADD  onCancel={onCancel}     />    )}
            </Fragment>
              
    </div>
  );
};

export default EmployeeList;

import React, { useState } from 'react'
import Swal from 'sweetalert2';
import Modal from '../UI/Modal';
import classes from './FORM.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { dataSliceActions } from '../store/data-slice';

function FORM({selectedEmployee, onCancel}) {

    const dispatch = useDispatch();
    
    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [contactNumber, setcontactNumber] = useState(selectedEmployee.contactNumber);
    const [dob, setDOB] = useState(selectedEmployee.dob);
    const [salary, setSalary] = useState(selectedEmployee.salary);
    const [address, setAddress] = useState(selectedEmployee.address);
    const [target, setTarget] = useState(selectedEmployee.target);
    const [achievedTarget, setachievedTarget] = useState(selectedEmployee.achievedTarget);
    const [claimedAmount, setClaimedAmount]=useState(selectedEmployee.claimedAmount);

    let ID = Math.floor(Math.random() * 10000);
    let imageUrl="https://hub.dummyapis.com/Image?text=LT&height=120&width=120";
    let policy="Gold policy";
    let Dependents="family";




   
    
// const SetEmp=()=>{
//     const selectedEmployee = useSelector((state) => state.EmpDATA.selectedEmployee);
//     setFirstName(selectedEmployee.firstName);
//     setLastName(selectedEmployee.lastName);
//     setLastName(selectedEmployee.email);
//     contactNumber(selectedEmployee.contactNumber);
//     setDOB(selectedEmployee.dob);
//     setSalary(selectedEmployee.salary);
//     setAddress(selectedEmployee.address);
//     setTarget(selectedEmployee.target);
//     setAchieved(selectedEmployee.achieved);
//     setClaimedAmount(selectedEmployee.claimedAmount);
//     ID=selectedEmployee.id;
//     imageUrl=selectedEmployee.imageUrl;

// }


    
        const CalculateAge=(DOB)=>{
        const currentYEAR = new Date().getFullYear();
        const DOV=new Date(DOB);
        const AgeYear =DOV.getFullYear();
       return ~~(currentYEAR-AgeYear);
        // var birthday = +new Date(DOB);
        // return ~~((Date.now() - birthday) / (31557600000));
      }

    const handleUpdate = e => {
        e.preventDefault();
      const age= CalculateAge(dob);
     
        if (!firstName || !lastName || !email || !salary || !address || !contactNumber || !target || !achievedTarget) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        let id=0, imageURL="";

        if(selectedEmployee.id)
        {id=selectedEmployee.id;
        imageURL=selectedEmployee.imageUrl;}
        else{
            id= Math.floor(Math.random() * 10000);
            imageURL="https://hub.dummyapis.com/Image?text=LT&height=120&width=120";
        }

        const employee = {
            id: id,
            imageUrl: imageURL,
            firstName: firstName,
            lastName: lastName,
            email:email,
            contactNumber:contactNumber,
            age:age,
            dob:dob,
            address:address,
            target: target,
            achievedTarget: achievedTarget,
            claimedAmount: claimedAmount,
            salary:salary,
            policy: "Gold policy",
    Dependents: "family",

        };
        console.log(employee);
    dispatch(dataSliceActions.editEmployee(employee));
        onCancel();

        {selectedEmployee.firstName?<h1>Edit Employee</h1> :
        <h1>Add Employee</h1>
        }
        
if(selectedEmployee.firstName){
        Swal.fire({
            icon: 'success',
            title: 'Updated',
          text: `${employee.firstName}  ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    }
else{
    Swal.fire({
        icon: 'success',
        title: 'Added',
      text: `${employee.firstName}  ${employee.lastName}'s data has been added.`,
        showConfirmButton: false,
        timer: 1500
    });
};
}

    return (
        <Modal onCancel={onCancel} >
       
        <div className="small-container">
            <form onSubmit={handleUpdate} className={classes.form}>

                {selectedEmployee.firstName?<h1>Edit Employee</h1> :
                <h1>Add Employee</h1>
                }
                

                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="Firstname..."
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    placeholder="Lastname..."
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    placeholder="email ID..."
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="contactNo">Contact No</label>
                <input
                    id="contactNo"
                    type="number"
                    name="contactNo"
                    value={contactNumber}
                    placeholder="Contact number..."
                    onChange={e => setcontactNumber(e.target.value)}
                />
                <label htmlFor="salary">Salary ($)</label>
                <input
                    id="salary"
                    type="number"
                    name="salary"
                    value={salary}
                    placeholder="salary..."
                    onChange={e => setSalary(e.target.value)}
                />
                <label htmlFor="address">Address ($)</label>
                <input
                    id="address"
                    type="text"
                    name="address"
                    value={address}
                    placeholder="Address..."
                    onChange={e => setAddress(e.target.value)}
                />
                <label htmlFor="DOB">Date of Birth</label>
                <input
                    id="DOB"
                    type="date"
                    name="DOB"
                    value={dob}
                    onChange={e => setDOB(e.target.value)}
                />
                <label htmlFor="target">Annual Target ($)</label>
                <input
                    id="target"
                    type="number"
                    name="target"
                    value={target}
                    placeholder="Target..."
                    onChange={e => setTarget(e.target.value)}
                />
                <label htmlFor="achieved">Target Achieved ($)</label>
                <input
                    id="acheived"
                    type="number"
                    name="achieved"
                    value={achievedTarget}
                    placeholder="Achieved..."
                    onChange={e => setachievedTarget(e.target.value)}
                />
 <label htmlFor="claim">Claimed Amount ($)</label>
                <input
                    id="claim"
                    type="number"
                    name="claim"
                    value={claimedAmount}
                    placeholder="claim..."
                    onChange={e => setClaimedAmount(e.target.value)}
                />
                 <div style={{ marginTop: '30px' }}>
                {selectedEmployee.firstName?  <input type="submit" value="EDIT" /> :
                  <input type="submit" value="ADD" />
                }

                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={onCancel}
                    />
                </div>
            </form>
        </div>
        </Modal>
    );
}

export default FORM
import React from 'react'
import FORM from './FORM';
import { useSelector } from 'react-redux';


function Edit(props) {


    const selectedEmployee = useSelector((state) => state.EmpDATA.selectedEmployee);

    return (
        <div>
            <FORM selectedEmployee={selectedEmployee} onCancel={props.onCancel}></FORM>
        </div>
    );
}

export default Edit
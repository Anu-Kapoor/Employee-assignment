import React from 'react'
import FORM from './FORM';

function ADD(props) {
    
    const selectedEmployee = [];
   

    return (
        <div>
            
            <FORM selectedEmployee={selectedEmployee} onCancel={props.onCancel}></FORM>
        </div>
    );
}

export default ADD
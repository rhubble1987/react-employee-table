import React from "react";

function convertFromAbbreviation(data) {
    if (data === 'US') {
        return "United States";
    } else if (data === 'AU') {
        return "Australia";
    } else if (data === 'GB') {
        return "United Kingdom";
    } else if (data === 'CA') {
        return "Canada"
    } else if (data === 'NZ') {
        return 'New Zealand'
    }
}

function TableBody(props) {
    console.log(props.employees);
    return (
            <tbody>
                {props.employees.map(employee => (
                    <tr key={employee.login.uuid}>
                        <td>{employee.name.last}</td>
                        <td>{employee.name.first}</td>
                        <td>{employee.email}</td>
                        <td>{employee.dob.date.substring(0,10)}</td>
                        <td>{employee.phone}</td>
                        <td>{convertFromAbbreviation(employee.nat)}</td>
                    </tr>
                ))}
            </tbody>
    );
}



export default TableBody;


import React, { Component } from "react";
import TableBody from "./TableBody";
import API from "../utils/API";

class Table extends Component {
   state = {
           employees: [],
           employeesSortedbyNameAtoZ: [],
           isSortedbyNameAtoZ: false,
           sortButtonState: "button is-info is-outlined is-small is-light",
           americanEmployees: [],
           americansFiltered: false,
           filterButtonState: "button is-info is-outlined is-small is-light"
   }

   componentDidMount() {
    API.getEmployees().then(res => this.setState({ 
        employees: res.data.results,
        employeesSortedbyNameAtoZ: [...res.data.results].sort(function(a,b) {
            var nameA = a.name.last.toUpperCase();
            var nameB = b.name.last.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
                return 0;
            }),
        americanEmployees: [...res.data.results].filter(employee => employee.nat === "US")  
    }))
    .catch(err => console.log(err));
};

toggleSortingNameAtoZ() {
    if (this.state.isSortedbyNameAtoZ === true) {
        this.setState({ 
            isSortedbyNameAtoZ: false ,
            sortButtonState: "button is-info is-outlined is-small is-light"
        });
    } else {
        this.setState({ 
            isSortedbyNameAtoZ: true,
            sortButtonState: "button is-info is-outlined is-small"
        });
    }
}

toggleFiltering() {
    if (this.state.americansFiltered === true) {
        this.setState({
            americansFiltered: false,
            filterButtonState: "button is-info is-outlined is-small is-light"
        });
    } else {
        this.setState({ 
            americansFiltered: true ,
            filterButtonState: "button is-info is-outlined is-small"
        });
    }
}    
    renderPage() {
        if (this.state.isSortedbyNameAtoZ === true) {
            return <TableBody employees={this.state.employeesSortedbyNameAtoZ} />
        }
        if (this.state.americansFiltered === true) {
            return <TableBody employees={this.state.americanEmployees} />
        }

        return <TableBody employees={this.state.employees} />

    }

    render() {
        return (
            <div className="container">
            <table className="table is-bordered">
            <thead>
                <tr>
                    <th>Last Name<br/><button className={this.state.sortButtonState} onClick={() => this.toggleSortingNameAtoZ()}>Sort A to Z</button></th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Birthday</th>
                    <th>Phone Number</th>
                    <th>Country<br/><button className="button is-info is-outlined is-small" onClick={() => this.toggleFiltering()}>Filter for Americans</button></th>
                </tr>
            </thead>
                {this.renderPage()}
            </table>
            </div>
        )
    }


}

export default Table;
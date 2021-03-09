import API from "../utils/API";
import React, { Component } from "react";
import Table from "../components/Table";

class Wrapper extends Component {
    state = {
        employees: []
    }

    

    
    render() {
        return <Table employees={this.state.employees}/>;
    }
}

export default Wrapper;
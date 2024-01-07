import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from '../services/UserService';

class ViewUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            user: {}
        };
    }

    componentDidMount() {
        UserService.getUserById(this.state.id).then(res => {
            this.setState({ user: res.data });
        });
    }

    render() {
        return (
            <div className="container mt-5">
                <Card className="col-md-6 offset-md-3">
                    <Card.Header className="text-center text-white" style={{ backgroundColor: '#92C7CF' }}>
                        <h3>Detail Keuangan</h3>
                    </Card.Header>
                    <Card.Body>
                        <div className="row mb-2">
                            <label className="col-sm-4">Date:</label>
                            <div className="col-sm-8">{this.state.user.date}</div>
                        </div>
                        <div className="row mb-2">
                            <label className="col-sm-4">Description:</label>
                            <div className="col-sm-8">{this.state.user.description}</div>
                        </div>
                        <div className="row mb-2">
                            <label className="col-sm-4">Amount:</label>
                            <div className="col-sm-8">{this.state.user.amount}</div>
                        </div>
                        <div className="row mb-2">
                            <label className="col-sm-4">Receiver:</label>
                            <div className="col-sm-8">{this.state.user.receiver}</div>
                        </div>
                        <div className="row mb-2">
                            <label className="col-sm-4">Gender:</label>
                            <div className="col-sm-8">{this.state.user.jk}</div>
                        </div>
                        <div className="row mb-2">
                            <label className="col-sm-4">No HP:</label>
                            <div className="col-sm-8">{this.state.user.no_telp}</div>
                        </div>
                        <div className="row mb-2">
                            <label className="col-sm-4">Address:</label>
                            <div className="col-sm-8">{this.state.user.address}</div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ViewUserComponent;

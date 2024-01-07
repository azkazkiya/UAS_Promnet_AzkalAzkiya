import React, { Component } from 'react';
import UserService from '../services/UserService';
import axios from 'axios';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            date: '',
            description: '',
            amount: '',
            status: '',
            receiver: '',
            jk: '',
            no_telp: '',
            address: '',
            jkEnum: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount() {
        if (this.state.id === '_add') {
            return;
        } else {
            UserService.getUserById(this.state.id)
                .then((res) => {
                    let user = res.data;
                    this.setState({
                        date: user.date,
                        description: user.description,
                        amount: user.amount,
                        status: user.status,
                        receiver: user.receiver,
                        jk: user.jk,
                        no_telp: user.no_telp,
                        address: user.address
                    });
                })
                .catch(error => {
                    console.error("Error fetching user:", error);
                });

            axios.get('http://localhost:3000/api/getJk')
                .then(response => {
                    this.setState({ jkEnum: response.data || [] });
                })
                .catch(error => {
                    console.error("Error fetching jkEnum:", error);
                });
        }
    }

    saveOrUpdateUser(e) {
        e.preventDefault();
        let user = {
            date: this.state.date,
            description: this.state.description,
            amount: this.state.amount,
            status: this.state.status,
            receiver: this.state.receiver,
            jk: this.state.jk,
            no_telp: this.state.no_telp,
            address: this.state.address
        };

        if (this.state.id === '_add') {
            UserService.createUser(user)
                .then(res => {
                    this.showAlert('Data berhasil ditambahkan!', 'success');
                    this.props.history.push('/users');
                })
                .catch(error => {
                    this.showAlert(`Error creating user: ${error.message}`, 'danger');
                    console.error("Error creating user:", error);
                });
        } else {
            UserService.updateUser(user, this.state.id)
                .then(res => {
                    this.showAlert('Data berhasil diperbarui!', 'success');
                    this.props.history.push('/users');
                })
                .catch(error => {
                    this.showAlert(`Error updating user: ${error.message}`, 'danger');
                    console.error("Error updating user:", error);
                });
        }
    }

    showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show mt-3`;
        alertDiv.role = 'alert';
        alertDiv.textContent = message;

        const container = document.querySelector('.container');
        container.insertBefore(alertDiv, container.firstChild);

        setTimeout(() => {
            alertDiv.remove();
        }, 3000);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    cancel() {
        this.props.history.push('/users');
    }

    getTitle() {
        return this.state.id === '_add' ? <h3 className="text-center">Tambah Data</h3> : <h3 className="text-center">Edit Data</h3>;
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow" style={{ backgroundColor: '#92C7CF' }}>
                            <div className="card-body">
                                {this.getTitle()}
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="date" className="form-label">Date:</label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            className="form-control"
                                            value={this.state.date}
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description:</label>
                                        <input
                                            type="text"
                                            id="description"
                                            name="description"
                                            className="form-control"
                                            placeholder="Description"
                                            value={this.state.description}
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="amount" className="form-label">Amount:</label>
                                        <input
                                            type="text"
                                            id="amount"
                                            name="amount"
                                            className="form-control"
                                            placeholder="Amount"
                                            value={this.state.amount}
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label> Status : </label>
                                        <select
                                            id="status"
                                            name="status"
                                            className="form-control"
                                            value={this.state.status}
                                            onChange={this.handleChange}
                                            style={{ backgroundColor: '#fff' }}
                                        >
                                            <option value="" disabled selected>Pilih</option>
                                            <option value="debit">debit</option>
                                            <option value="kredit">kredit</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="receiver" className="form-label">Receiver:</label>
                                        <input
                                            type="text"
                                            id="receiver"
                                            name="receiver"
                                            className="form-control"
                                            placeholder="Receiver"
                                            value={this.state.receiver}
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label> Jenis Kelamin: </label>
                                        <select
                                            id="jk"
                                            name="jk"
                                            className="form-control"
                                            value={this.state.jk}
                                            onChange={this.handleChange}
                                            style={{ backgroundColor: '#fff' }}
                                        >
                                            <option value="" disabled selected>Pilih</option>
                                            <option value="P">P</option>
                                            <option value="L">L</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="no_telp" className="form-label">No HP:</label>
                                        <input
                                            type="text"
                                            id="no_telp"
                                            name="no_telp"
                                            className="form-control"
                                            placeholder="No HP"
                                            value={this.state.no_telp}
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label">Address:</label>
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            className="form-control"
                                            placeholder="Address"
                                            value={this.state.address}
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div className="d-grid gap-2 text-center">
                                        <button className="btn btn-success me-2" onClick={this.saveOrUpdateUser}>Save</button>
                                        <button className="btn btn-danger ms-2" onClick={this.cancel}>Cancel</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div>
                            <br /><br /><br /><br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateUserComponent;




import React, { Component } from 'react';
import { Button, InputGroup, FormControl, Table, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from '../services/UserService';

class ListUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            transaksi: [],
            searchInput: ''
        };

        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.viewUser = this.viewUser.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers() {
        UserService.getUsers().then((res) => {
            if (res.data == null) {
                this.props.history.push('/add-user/_add');
            }
            this.setState({ transaksi: res.data });
        });
    }

    addUser() {
        this.props.history.push('/add-user/_add');
    }

    deleteUser(id) {
        if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
            UserService.deleteUser(id)
                .then(res => {
                    this.fetchUsers(); // Memanggil kembali data setelah berhasil menghapus
                })
                .catch(error => {
                    console.error("Error deleting user:", error);
                });
        }
    }

    viewUser(id) {
        this.props.history.push(`/view-user/${id}`);
    }

    editUser(id) {
        this.props.history.push(`/add-user/${id}`);
    }

    handleSearchChange(event) {
        this.setState({ searchInput: event.target.value });
    }

    render() {
        const { transaksi, searchInput } = this.state;
        const filteredTransaksi = transaksi.filter(user =>
            user.description.toLowerCase().includes(searchInput.toLowerCase())
        );

        return (
            <Container style={{ background: '#F5F5F5', padding: '20px', paddingBottom: '100px', borderRadius: '10px', fontFamily: 'Nunito, Arial, sans-serif' }}>
                <Row>
                    <Col>
                        <h2 style={{ textAlign: 'center', color: '#333', fontFamily: 'Nunito' }}>Keuangan DINAMIK-18</h2>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Button variant="primary" onClick={this.addUser} style={{ background: '#AAD7D9', color: 'white', fontFamily: 'Nunito' }}>
                            Tambah Data
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <InputGroup>
                            <FormControl
                                type="text"
                                placeholder="Cari berdasarkan deskripsi"
                                value={searchInput}
                                onChange={this.handleSearchChange}
                                style={{ fontFamily: 'Nunito' }}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr style={{ background: '#AAD7D9', color: 'white' }}>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Receiver</th>
                                    <th>Gender</th>
                                    <th>No HP</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTransaksi.map((user, index) => (
                                    <tr key={index} style={{ background: index % 2 === 0 ? '#E1E1E1' : 'white' }}>
                                        <td>{user.date}</td>
                                        <td>{user.description}</td>
                                        <td>{user.amount}</td>
                                        <td>{user.status}</td>
                                        <td>{user.receiver}</td>
                                        <td>{user.jk}</td>
                                        <td>{user.no_telp}</td>
                                        <td>{user.address}</td>
                                        <td>
                                            <Button variant="info" size="sm" onClick={() => this.editUser(user.id)}>Edit</Button>
                                            <Button variant="info" size="sm" className="ml-2" onClick={() => this.viewUser(user.id)}>Detail</Button>
                                            <Button variant="danger" size="sm" className="ml-2" onClick={() => this.deleteUser(user.id)}>Hapus</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ListUserComponent;

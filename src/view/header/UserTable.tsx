import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

interface IUser {
    id: number;
    name: string;
    email: string
}
function UserTable() {
    const [users, setUsers] = useState<IUser[]>([]);

    const fetchUser = async () => {
        try {
            const response = await fetch('http://localhost:8000/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchUser()
    }, []);
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users?.map(user => {
                    return (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}

export default UserTable;
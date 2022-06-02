import React from "react";
import {Link} from 'react-router-dom';


const UserItem = ({user}) => {
    return (
        <tr>
            <td>
                <Link to={`users/${user.id}`}>{user.id}</Link>
            </td>
            <td>
                {user.username}
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
            <td>
                {user.birthday_year}
            </td>
        </tr>
    )
}

const UserList = ({users}) => {
    return (
        <table>
            <tbody>

                    <th>
                        ID
                    </th>
                    <th>
                        Username
                    </th>
                    <th>
                        First name
                    </th>
                    <th>
                        Last name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Birthday year
                    </th>

            </tbody>
            {users.map((user) => <UserItem user={user} />)}
        </table>
    )
}

export default UserList

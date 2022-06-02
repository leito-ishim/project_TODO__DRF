import React from 'react'
import { useParams } from 'react-router-dom';


const UserTODOItem = ({note}) => {
    return (
        <tr>
            <td>{note.project}</td>
            <td>{note.text}</td>
            <td>{note.author_user.username}</td>
        </tr>
    )
}


const UserTODOList = ({notes}) => {
    let { id } = useParams();
    let filtered_notes = notes.filter((note) => note.author_user.id == id)
    return (
        <table>

                <th>Project</th>
                <th>Text</th>
                <th>Author_user</th>

                {filtered_notes.map((note) => <UserTODOItem note={note} />)}

        </table>
    )
}

export default UserTODOList
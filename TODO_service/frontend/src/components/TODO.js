import React from "react";


const TodoItem = ({note}) => {
    return (
        <tr>
            <td>{note.project}</td>
            <td>{note.text}</td>
            <td>{note.create_timestamp}</td>
            <td>{note.update_timestamp}</td>
            <td>{note.author_user}</td>
            <td>{note.is_active}</td>

        </tr>
    )
};


const TodoList = ({notes}) => {
    return (
        <table>

                <th>Project</th>
                <th>Text</th>
                <th>Create_timestamp</th>
                <th>Update_timestamp</th>
                <th>Author_user</th>
                <th>Is_active</th>

                {notes.map((note) => <TodoItem note={note} />)}

        </table>
    )
}


export default TodoList
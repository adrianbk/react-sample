import React from "react";
import Note from "./Note";

export class Notes extends React.Component {
    render() {
        return <ul>{this.props.notes.map(({id, task}) =>
            <li key={id}>
                <Note
                    onDelete={this.props.onDelete.bind(null, id)}
                    task={task} />
            </li>
        )}</ul>
    }
}

import '../styles/TaskTable.css'

function TaskTable(props){
    let SampleData = [
        {
            ID:1,
            Task:'Task',
            Description:'Finish This FrontEnd Project',
            Category:'Project',
            ThreatLevel:'Medium',
            Deadline:null
        },{
            ID:2,
            Task:'Optional',
            Description:'Survive',
            Category:'Life',
            ThreatLevel:'High',
            Deadline:null
        }
    ]

    const finish = () => {
        alert('Finish');
    }
    const update = () => {
        alert('Update');
    }
    const Delete = () => {
        alert('Delete');
    }

    return (
        <div>
            <table>
                <caption><b>{props.caption}</b></caption>
                <thead>
                    <tr key="x">
                        <th>ID</th>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Threat Level</th>
                        <th>Deadline</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {SampleData.map(data => 
                        <tr key={data.ID}>
                        <td>{data.ID}</td>
                        <td>{data.Task}</td>
                        <td>{data.Description}</td>
                        <td>{data.Category}</td>
                        <td>{data.ThreatLevel}</td>
                        <td>{data.Deadline}</td>
                        <td>
                            <button onClick={finish}>Finish</button>
                            <button onClick={update}>Update</button>
                            <button onClick={Delete}>Delete</button>
                        </td>
                        </tr>
                    )}
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        </div>

    )
}

TaskTable.defaultProps = {
  caption: 'Caption Here',
  prop3: ()=>{}
}


export default TaskTable;
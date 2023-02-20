const BuildTable = ({ data }) => {
    
    const tableContent = data.map((e, i) => {
        return(
        <tr key={i}>
            <td>{e.id}</td>
            <td> {e.item} </td>
        </tr>
        );
    });

    return(
        <table>
        <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            </tr>
        </thead>

        <tbody>
            {tableContent}
        </tbody>
        </table>
    );
}

export default BuildTable;
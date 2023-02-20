import "../styles/crud-styles.scss";

const BuildTable = ({ data }) => {
    
    const tableContent = data.map((e, i) => {
        return(
        <tr key={i}>
            <td className="table-id">{e.id < 10 ? `0${e.id}` : e.id}</td>
            <td className="table-name"> {e.item} </td>
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
import { Table } from "react-bootstrap";


function StripedRowExample() {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Evento</th>
                    <th>Lugar</th>
                    <th>Fecha</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td></td>
                    <td>@</td>
                    <td>@</td>
                    <td>@</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td></td>
                    <td>@</td>
                    <td>@</td>
                    <td>@</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={1}>Larry the Bird </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
    );
}

export default StripedRowExample;
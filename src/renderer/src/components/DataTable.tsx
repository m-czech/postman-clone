import Input from "@mui/joy/Input";
import Table from "@mui/joy/Table";
import Checkbox from "@mui/joy/Checkbox";

export default function DataTable() {
    return (
        <Table borderAxis="both">
            <thead>
                <tr>
                    <th style={{
                        width: 20
                    }}></th>
                    <th>Key</th>
                    <th>Value</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <QueryRow></QueryRow>
            </tbody>
        </Table>
    )
}

function QueryRow() {
    return (
        <tr>
            <td>
                <Checkbox defaultChecked></Checkbox>
            </td>
            <td>
                <Input placeholder="Key"></Input>
            </td>
            <td>
                <Input placeholder="Value"></Input>
            </td>
            <td>
                <Input placeholder="Description"></Input>
            </td>
        </tr>
    )
}
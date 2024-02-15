import { KeyboardEvent, useRef, useState } from "react"

type Row = {
    number: number
    text: string
}

export default function BodyInput() {
    const [rows, setRows] = useState([{ number: 1, text: '' }] as Array<Row>)
    const focusedRowRef = useRef(rows[0])


    function onEnterKeydown(event: KeyboardEvent) {
        if (event.key == 'Enter') {
            event.preventDefault()

            let nextFocusedRow = rows.find(row => row.number == focusedRowRef.current.number + 1)
            if (nextFocusedRow)
                focusedRowRef.current = nextFocusedRow
            else {
                let newRow = { number: rows.length + 1, text: '' }
                setRows([...rows, newRow])
                focusedRowRef.current = newRow
            }
            focusRow(focusedRowRef.current)
        }
    }

    function focusRow(row: Row) {
        let rowToFocus = document.querySelector(`[row-number="${row.number}"]`) as HTMLElement;
        rowToFocus?.focus()
    }

    return (
        <div style={{
            width: "100%",
            minHeight: "200px",
            backgroundColor: "grey",
            display: "flex"
        }}
            onKeyDown={onEnterKeydown}>
            <div className="rowNumberColumn">
                {
                    rows.map(row =>
                        <div key={row.number}
                            className="editorRow">
                            {row.number}
                        </div>)
                }
            </div>

            <div className="textColumn">
                {
                    rows.map(row =>
                        <input
                            type="text"
                            key={row.number}
                            row-number={row.number.toString()}
                            className="editorRow rowInput"
                            autoFocus={row.number == focusedRowRef.current.number}
                            defaultValue={row.text}
                            onMouseDown={() => { focusedRowRef.current = row; focusRow(focusedRowRef.current)}}>
                        </input>)
                }
            </div>
        </div>
    )
}
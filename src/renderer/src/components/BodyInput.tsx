import { KeyboardEvent, useRef, useState } from "react"

type Row = {
    id: number
    number: number
    text: string
}

export default function BodyInput() {
    const [lastRowId, setLastRowId] = useState(0)
    const [rows, setRows] = useState<Array<Row>>([{ id: lastRowId, number: 1, text: '' }])
    const focusedRowRef = useRef(rows[0])

    function onKeyDown(event: KeyboardEvent, row: Row) {
        switch(event.key) {
            case "Enter":
                event.preventDefault()
                onEnterKeydown()
                break
            case "Backspace":
                if (row.text == '' && row.number !== 1)
                    removeRow(row)
                break
            case "ArrowUp":
                moveFocus(row, event.key)
                break
            case "ArrowDown":
                moveFocus(row, event.key)
                break
        }
    }

    function onEnterKeydown() {
        let nextFocusedRow = rows.find(row => row.number == focusedRowRef.current.number + 1)
            if (nextFocusedRow) {
                focusedRowRef.current = nextFocusedRow
                focusRow(focusedRowRef.current)
            }
            else {
                let newRow = { id: lastRowId + 1,  number: rows.length + 1, text: '' }
                setLastRowId(lastRowId + 1)
                setRows([...rows, newRow])
                focusedRowRef.current = newRow
            }
    }

    function moveFocus(row: Row, pressedArrow: string) {
        let rowToFocus
        if (pressedArrow === "ArrowUp")
            rowToFocus = rows.findLast(r => r.number === row.number - 1)
        else if (pressedArrow === "ArrowDown")
            rowToFocus = rows.findLast(r => r.number === row.number + 1)
        
        if (rowToFocus)
            focusRow(rowToFocus)
    }

    function removeRow(row: Row) {
        let updatedRows = rows.filter(r => r.number !== row.number)
        updatedRows.forEach(r => {
            if (r.number > row.number)
                r.number -= 1
        })
        setRows(updatedRows)
    }


    function focusRow(row: Row) {
        let rowToFocus = document.querySelector(`[row-number="${row.number}"]`) as HTMLElement;
        rowToFocus.focus()
    }

    return (
        <div style={{
            width: "100%",
            minHeight: "200px",
            backgroundColor: "grey",
            display: "flex"
        }}>
            <div className="rowNumberColumn">
                {
                    rows.map(row =>
                        <div key={row.id}
                            className="editorRow">
                            {row.number}
                        </div>)
                }
            </div>

            <div className="textColumn">
                {
                    rows.map(row =>
                        <input
                            key={row.id}
                            type="text"
                            row-number={row.number.toString()}
                            className="editorRow rowInput"
                            autoFocus={row.number == focusedRowRef.current.number}
                            defaultValue={row.text}
                            onChange={(event) => row.text = event.target.value}
                            onKeyDown={(event) => onKeyDown(event, row)}
                            onMouseUp={() => { focusedRowRef.current = row; focusRow(focusedRowRef.current)}}>
                        </input>)
                }
            </div>
        </div>
    )
}
import { KeyboardEvent, MouseEvent, useRef, useState } from "react"

type Row = {
    id: number
    number: number
    text: string
}

type TextSelectionRange = {
    start: HTMLElement
    stop: HTMLElement
}

export default function BodyInput() {
    const [lastRowId, setLastRowId] = useState(0)
    const [rows, setRows] = useState<Array<Row>>([{ id: lastRowId, number: 1, text: '' }])
    const [selectedRange, setSelectedRange] = useState<TextSelectionRange>()
    const focusedRowRef = useRef(rows[0])

    function onKeyDown(event: KeyboardEvent, row: Row) {
        switch (event.key) {
            case "Enter":
                event.preventDefault()
                onEnterKeydown()
                break
            case "Backspace":
                if (row.text == '' && row.number !== 1) {
                    removeRow(row)
                    moveFocus(row, MoveFocusDirection.Up)
                }                    
                break
            case "ArrowUp":
                moveFocus(row, MoveFocusDirection.Up)
                break
            case "ArrowDown":
                moveFocus(row, MoveFocusDirection.Down)
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
            let newRow = { id: lastRowId + 1, number: rows.length + 1, text: '' }
            setLastRowId(lastRowId + 1)
            setRows([...rows, newRow])
            focusedRowRef.current = newRow
        }
    }

    enum MoveFocusDirection {
        Up,
        Down
    }

    function moveFocus(row: Row, direction: MoveFocusDirection) {
        let rowToFocus
        if (direction === MoveFocusDirection.Up)
            rowToFocus = rows.findLast(r => r.number === row.number - 1)
        else if (direction === MoveFocusDirection.Down)
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
        let rowToFocus = document.querySelector(`[row-number="${row.number}"]`) as HTMLInputElement;
        setTimeout(() => rowToFocus.selectionStart = rowToFocus.selectionEnd = rowToFocus.value.length, 0)
        rowToFocus.focus()
    }

    async function pasteFromClipboard() {
        let clipboardData = await navigator.clipboard.readText()
        let newRows: Array<Row> = []
        let newRowId = lastRowId
        let newRowNumber = focusedRowRef.current.number
        clipboardData.split('\n').forEach(chunk => {
            newRows.push({ id: ++newRowId, number: newRowNumber++, text: chunk })
        })

        let insertionIndex = rows.findLastIndex(r => r.number === focusedRowRef.current.number)
        let rowsBeforeNewRowsInsertion = rows.slice(0, insertionIndex)
        let rowsAfterNewRowsInsertion = rows.slice(insertionIndex + 1)
        let result = [...rowsBeforeNewRowsInsertion, ...newRows, ...rowsAfterNewRowsInsertion]

        result.forEach((r, index) => r.number = ++index)

        focusedRowRef.current = newRows[0]
        setLastRowId(newRowId)
        setRows(result)
    }

    function startTextSelection(startTarget: HTMLInputElement) {
        setSelectedRange({ start: startTarget.parentElement!, stop: startTarget.parentElement! })
    }

    function handleSelection(event: React.MouseEvent) {
        if (event.buttons == 1) {
            let selectedRow = (event.target as HTMLElement).parentElement
            addRowToSelectedRows(selectedRow!)
            setSelectedRange({ start: selectedRange!.start, stop: selectedRow! })
        }
    }

    function restoreSelectedText() {
        if (selectedRange?.start != selectedRange?.stop) {
            addRowToSelectedRows()
        }
    }

    function addRowToSelectedRows(selectedRow?: HTMLElement) {
        let selectedRowNumber
        if (selectedRow) {
            selectedRowNumber = selectedRow.getElementsByTagName('input')[0].getAttribute('row-number')!
        }
        else {
            selectedRow = selectedRange!.stop
            selectedRowNumber = selectedRange!.stop.getElementsByTagName('input')[0].getAttribute('row-number')!
        }

        let anchorNumber = selectedRange!.start.getElementsByTagName('input')[0].getAttribute('row-number')!
        let selectionApi = window.getSelection()!
        if (selectedRowNumber < anchorNumber) {
            selectionApi.setBaseAndExtent(selectedRange!.start, 2, selectedRow, 0)
        }
        else {
            selectionApi.setBaseAndExtent(selectedRange!.start, 0, selectedRow, 2)
        }
    }

    return (
        <div className="editor-container">

            {
                rows.map(row => {
                    return (
                        <div key={row.id} className="editor-row">
                            <div className="editor-row-number">
                                {row.number}
                            </div>
                            <input
                                type="text"
                                row-number={row.number.toString()}
                                className="editor-row-input"
                                autoFocus={row.number == focusedRowRef.current.number}
                                defaultValue={row.text}
                                onChange={(event) => row.text = event.target.value}
                                onKeyDown={(event) => onKeyDown(event, row)}
                                onMouseUp={() => { focusedRowRef.current = row; focusRow(focusedRowRef.current); restoreSelectedText() }}
                                onPaste={(event) => { event.preventDefault(); pasteFromClipboard() }}
                                onMouseOver={(event) => handleSelection(event)}
                                onMouseDown={(event) => startTextSelection(event.target as HTMLInputElement)}
                                onDragStart={(event) => event.preventDefault()}
                                >
                            </input>
                        </div>
                    )
                })
            }
        </div>
    )
}

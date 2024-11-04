import React, { useState, useEffect, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import { readDate } from "../../services/functions";

function AllGuest() {
    const [columns, setColumns] = useState([]);
    const [data, setData] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(20);
    const [columnWidths, setColumnWidths] = useState({});
    const [viewingCustomer, setViewingCustomer] = useState(null);
    const tableHeaderRef = useRef(null);

    const gettingOptions = JSON.parse(localStorage.getItem('filterOptions'))
    const opt = {
        dateFrom: "",
        dateTo: ""
    }
    const [filterOptions, setFilterOptions] = useState(gettingOptions || opt);

    const searchItems = (searchValue) => {
        if (searchValue !== '') {
            const filteredData = data.filter((item) => {
                return (
                    item?.guestName?.toLowerCase()?.includes(searchValue?.toLowerCase()) ||
                    item?.roomAlloted?.toLowerCase()?.includes(searchValue?.toLowerCase())
                );
            });
            setFilteredResults(filteredData);
        } else {
            setFilteredResults(data);
        }
        setCurrentPage(1);
    };

    const serverUrl = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        function hit() {
            fetch(`${serverUrl}/api/all-guests`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response?.json())
                .then(data => {
                    data = data.guests;
                    if (data.length > 0) {
                        const initialColumns = [
                            { id: 'serialNumber', title: 'Sr No.' },
                            { id: 'checkIn', title: 'Check-In Date' },
                            { id: 'guestName', title: 'Guest Name' },
                            { id: 'phone', title: 'Phone' },
                            { id: 'jobProfile', title: 'Job Profile' },
                            { id: 'adhaarId', title: 'Adhaar ID' },
                            { id: 'workPlace', title: 'Work Place' },
                            { id: 'roomAlloted', title: 'Room Alloted' },
                            { id: 'checkOut', title: 'Checkout Date' },
                        ];
                        const savedColumns = JSON.parse(localStorage.getItem('columns'));
                        if (savedColumns) {
                            setColumns(savedColumns);
                        } else {
                            setColumns(initialColumns);
                        }
                        const rowData = data.map((item, index) => ({ ...item, originalIndex: index }));
                        const enrichedData = [...rowData]?.reverse();
                        setData(enrichedData);
                        setFilteredResults(enrichedData);
                    } else {
                        const rowData = data.map((item, index) => ({ ...item, originalIndex: index }));
                        const enrichedData = [...rowData]?.reverse();
                        setData(enrichedData);
                        setFilteredResults(enrichedData);
                        setSelectAll(!selectAll);
                    }
                })
                .catch((err) => {
                    console.log(err, "Error in Getting Members");
                })
            const savedWidths = JSON.parse(localStorage.getItem('columnWidths'));
            if (savedWidths) {
                setColumnWidths(savedWidths);
            }
        }
        hit()
    }, [viewingCustomer]);

    useEffect(() => {
        const filteredData = data.filter((item) => {
            const checkIn = new Date(item.checkIn * 1000);
            const fromCondition = filterOptions?.dateFrom ? checkIn >= new Date(filterOptions?.dateFrom) : true;
            const toDateCondition = filterOptions?.dateTo ? checkIn <= new Date(filterOptions?.dateTo) : true;

            return fromCondition && toDateCondition;
        });
        setFilteredResults(filteredData)
        localStorage.setItem('filterOptions', JSON.stringify(filterOptions))
    }, [filterOptions, data])

    useEffect(() => {

    }, [filteredResults])

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const updatedColumns = Array.from(columns);
        const [reorderedColumn] = updatedColumns?.splice(result.source.index, 1);
        if (result?.source?.index !== 0 && result?.source?.index !== 1) {
            updatedColumns.splice(result?.destination?.index, 0, reorderedColumn);
        }
        setColumns(updatedColumns);
        localStorage.setItem('columns', JSON.stringify(updatedColumns));
    };

    const isDate = (value) => {
        return !isNaN(Date.parse(value));
    };

    const handleSort = (columnId) => {
        let direction = 'ascending';
        if (sortConfig.key === columnId && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key: columnId, direction });

        const sortedData = [...data].sort((a, b) => {
            let aValue = a[columnId];
            let bValue = b[columnId];

            // Check if the values are dates
            if (isDate(aValue) && isDate(bValue)) {
                aValue = new Date(aValue);
                bValue = new Date(bValue);
            }

            if (aValue < bValue) {
                return direction === 'ascending' ? -1 : 1;
            }
            if (aValue > bValue) {
                return direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });

        setData(sortedData);
        setFilteredResults(sortedData); // Update filteredResults with sorted data
    };

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredResults?.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(filteredResults.length / rowsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo({ top: tableHeaderRef.current.offsetTop, behavior: 'smooth' });
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: tableHeaderRef.current.offsetTop, behavior: 'smooth' });
        }
    };

    const handleResize = (columnId, width) => {
        const updatedWidths = {
            ...columnWidths,
            [columnId]: width
        };
        setColumnWidths(updatedWidths);
        localStorage.setItem('columnWidths', JSON.stringify(updatedWidths));
    };

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        setSelectedRows(newSelectAll ? data.map((row) => row._id) : []);
    };

    const handleSelectRow = (id) => {
        const newSelectedRows = selectedRows.includes(id)
            ? selectedRows.filter(rowId => rowId !== id)
            : [...selectedRows, id];
        setSelectedRows(newSelectedRows);
        setSelectAll(newSelectedRows.length === data.length);
    };

    const handleResetFilter = () => {
        setFilterOptions({
            dateFrom: "",
            dateTo: ""
        })
    }

    const convertToCSV = (data, columns) => {
        if (!data || data.length === 0) return '';

        const columnHeaders = columns
            .filter(col => col.title !== 'Sr No.')
            .map(col => col.id);

        const csvRows = [
            // Header Row
            ['Sr No.', ...columns.filter(col => col.title !== 'Sr No.').map(col => col.title)].join(','),
            // Data Rows
            ...data.map((row, index) =>
                [
                    index + 1,
                    ...columnHeaders.map(field => {
                        let value = row[field];
                        if (field === 'checkIn') {
                            value = readDate(value);
                        }
                        if (value == null) {
                            value = '';
                        }
                        value = value.toString().replace(/"/g, '""');
                        return `"${value}"`;
                    })
                ].join(',')
            )
        ];

        return csvRows.join('\n');
    };

    const handleExportCsv = () => {
        const csvData = convertToCSV(filteredResults, columns);
        downloadCSV(csvData, 'filteredData.csv');
    };

    const downloadCSV = (csvData, filename = 'data.csv') => {
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className="card-body p-0">
                <div className="filterBar">
                    <div>
                        <span>
                            <h5 className="mb-0">{filteredResults.length} Guests</h5>
                        </span>
                    </div>

                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control bg-custom border-end-0 search-input"
                            placeholder="Search Customer"
                            onChange={(e) => searchItems(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn border border-start-0 search-icon-custom"
                                type="button"
                                style={{ height: '100%' }}
                            >
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex gap-2">
                            <div className="input-group">
                                <label style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>From</label>
                                <input
                                    type="date"
                                    className="form-control bg-custom"
                                    value={filterOptions.dateFrom}
                                    onChange={(e) => setFilterOptions({ ...filterOptions, dateFrom: e.target.value })}
                                />
                            </div>
                            <div className="input-group">
                                <label style={{ display: "flex", alignItems: "center", margin: "0 10px" }}>To</label>
                                <input
                                    type="date"
                                    className="form-control bg-custom"
                                    value={filterOptions.dateTo}
                                    onChange={(e) => setFilterOptions({ ...filterOptions, dateTo: e.target.value })}
                                />
                            </div>
                            <div>
                                <button
                                    className="btn btn-primary ml-3 text-nowrap"
                                    type="button"
                                    onClick={handleResetFilter}
                                >
                                    Reset Filter
                                </button>
                            </div>
                            <div>
                                <button
                                    className="btn btn-primary text-nowrap"
                                    onClick={handleExportCsv}
                                >
                                    <i className="fas fa-file-export me-1"></i> Export Sheet
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="table-responsive customerTable">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <table className="table text-start customer-table-css">
                            <thead ref={tableHeaderRef}>
                                <Droppable droppableId="columns" direction="horizontal">
                                    {(provided) => (
                                        <tr ref={provided.innerRef} {...provided.droppableProps}>
                                            {columns.map((column, index) => (
                                                <Draggable
                                                    key={column.id}
                                                    draggableId={column.id}
                                                    index={index}
                                                    isDragDisabled={index === 0 || index === 1}
                                                >
                                                    {(provided) => (
                                                        <th
                                                            key={column.id}
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            className="text-center"
                                                        >
                                                            <ResizableBox
                                                                width={columnWidths[column.id] || 100}
                                                                height={23}
                                                                axis="x"
                                                                minConstraints={[10, 30]}
                                                                maxConstraints={[2000, 23]}
                                                                resizeHandles={["e"]}
                                                                className="resize-handle"
                                                                onResizeStop={(e, data) => handleResize(column.id, data.size.width)}
                                                            >
                                                                <div {...(index !== 0 && index !== 1 ? provided.dragHandleProps : {})}>
                                                                    {column.id === 'selectAll' ? (
                                                                        <input
                                                                            type="checkbox"
                                                                            checked={selectAll}
                                                                            onChange={handleSelectAll}
                                                                        />
                                                                    ) : (
                                                                        <div className="d-flex align-items-center gap-2 justify-content-between">
                                                                            <span className="truncate-text" title={column.title}>{column.title}</span>
                                                                            {column.id !== 'serialNumber' && (
                                                                                <div className="ml-2 sortable-header" onClick={() => handleSort(column.id)}>
                                                                                    <i className={`fas ${sortConfig.key === column.id && sortConfig.direction === 'ascending' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </ResizableBox>
                                                        </th>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided?.placeholder}
                                        </tr>
                                    )}
                                </Droppable>
                            </thead>
                            <tbody>
                                {currentRows.length > 0 ? (
                                    currentRows.map((row, rowIndex) => (
                                        <tr key={row.id} onClick={(e) => {
                                            const target = e.target;
                                            const isCheckbox = target.tagName.toLowerCase() === 'input' && target.type === 'checkbox';
                                            if (!isCheckbox) {
                                                setViewingCustomer(row);
                                            }
                                        }} style={{ cursor: "pointer" }}>
                                            {columns.map((column) => {
                                                if (column.id === 'serialNumber') {
                                                    return (
                                                        <td key={column.id}>{indexOfFirstRow + rowIndex + 1}</td>
                                                    );
                                                } else if (column.id === 'selectAll') {
                                                    return (
                                                        <td key={column.id}>
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedRows.includes(row._id)}
                                                                onChange={() => handleSelectRow(row._id)}
                                                            />
                                                        </td>
                                                    );
                                                } else {
                                                    return (
                                                        <td key={column.id} >
                                                            {row[column.id] && typeof row[column.id] === 'object' ? (
                                                                <div>
                                                                    {column.id === 'address' && (
                                                                        <div>
                                                                            <div>Street: {row[column.id].street}</div>
                                                                            <div>Suite: {row[column.id].suite}</div>
                                                                            <div>City: {row[column.id].city}</div>
                                                                            <div>Zipcode: {row[column.id].zipcode}</div>
                                                                        </div>
                                                                    )}
                                                                    {column.id === 'company' && (
                                                                        <div>
                                                                            <div>Name: {row[column.id].name}</div>
                                                                            <div>Catch Phrase: {row[column.id].catchPhrase}</div>
                                                                            <div>Business: {row[column.id].bs}</div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ) : (
                                                                <span className={column.id}> {column.id === 'checkIn' || column.id === 'checkOut' ? readDate(row[column.id]) : row[column.id]} </span>
                                                            )}
                                                        </td>
                                                    );
                                                }
                                            })}
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={columns.length} className="text-center">
                                            No results found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </DragDropContext>
                </div>

                {/* pagination */}
                {filteredResults.length > 0 && (
                    <nav className="mt-3">
                        <ul className="customer-pagination pagination justify-content-center">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={handlePrevPage}><i className="fa fa-chevron-left"></i></button>
                            </li>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                                    <button className="page-link" onClick={() => { setCurrentPage(index + 1); window.scrollTo({ top: tableHeaderRef.current.offsetTop, behavior: 'smooth' }); }}>{index + 1}</button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={handleNextPage}><i className="fa fa-chevron-right"></i></button>
                            </li>
                        </ul>
                    </nav>
                )}

            </div>
        </>
    )
}

export default AllGuest;


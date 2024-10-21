/* eslint-disable react-hooks/exhaustive-deps */
import DataTable from 'react-data-table-component';

import { useContext, useEffect, useState } from 'react';
import animalDataContext from '../Utilities/context';
import DataForm from './DataForm';

const Table = () => {
    const { animalData } = useContext(animalDataContext);
    const { active, setActive } = useContext(animalDataContext);
    const [rowActive, setRow] = useState(null); 
    const [rows, setRows] = useState([]);

    console.log(animalData);
    let rowsData = animalData ? JSON.parse(animalData) : [];

    useEffect(() => {
        setRows(rowsData);
    }, [setRows]);

    const handleButtonClick = (row) => {
        setActive(true)
        setRow(row); 
    };

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Kingdom',
            selector: row => row.taxonomy.kingdom,
        },
        {
            name: 'Class',
            selector: row => row.taxonomy.class,
        },
        {
            name: 'Diet',
            selector: row => row.characteristics.diet,
        },
        {
            name: 'Lifespan',
            selector: row => row.characteristics.lifespan,
        },
        {
            name: 'Common Name',
            selector: row => row.characteristics.common_name,
        },
        {
            name: 'Habitat',
            selector: row => row.characteristics.habitat,
        },
        {
            name: 'Weight',
            selector: row => row.characteristics.weight,
        },
        {
            name: 'Top Speed',
            selector: row => row.characteristics.top_speed,
        },
    ];

    const customStyles = {
        rows: {
            style: {
                minHeight: '40px',
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: '#f0f0f0',
                    border: '1px solid skyblue',
                    borderRadius: '8px',
                },
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px',
                paddingRight: '8px',
                fontWeight: 'bold',
                backgroundColor: '#d3d3d3',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px',
                paddingRight: '8px',
            },
        },
    };

    return (
        <>
            {!active ? (
                <div className="w-full md:w-[70%] rounded-lg mt-20 m-1 p-1 bg-white/60 shadow-lg backdrop-blur-md ring-1 ring-black/10 opacity-[0.90]">
                    <p className='md:px-36 text-center text-lg md:font-bold text-nowrap'>List of Animals</p>
                    <DataTable
                        columns={columns}
                        data={rows}
                        pagination
                        customStyles={customStyles}
                        onRowClicked={handleButtonClick}
                    />
                </div>
            ) : (
                <DataForm row={rowActive} /> 
            )}
        </>
    );
};

export default Table;

import React from 'react';
import { MRT_Table, useMantineReactTable } from 'mantine-react-table';
import './PriceTable.css'

const PriceTable = ({ data }) => {
    const columns = [
        {
            accessorKey: 'age', //access nested data with dot notation
            header: 'Возраст',
            mantineTableHeadCellProps: {
                align: 'center',
            },
            mantineTableBodyCellProps: {
                align: 'center',
            },
            // enableResizing: true
        },
        {
            accessorKey: 'duration',
            header: 'Время',
            mantineTableHeadCellProps: {
                align: 'center',
            },
            mantineTableBodyCellProps: {
                align: 'center',
            },
            // enableResizing: true
        },
        // {
        //     accessorKey: 'num', //normal accessorKey
        //     header: 'Количество занятий',
        //     mantineTableHeadCellProps: {
        //         align: 'center',
        //     },
        //     mantineTableBodyCellProps: {
        //         align: 'center',
        //     },
        // },
        {
            accessorKey: 'price',
            header: 'Цена',
            mantineTableHeadCellProps: {
                align: 'center',
            },
            mantineTableBodyCellProps: {
                align: 'center',
            },
            // enableResizing: true
        },
    ];

    const table = useMantineReactTable({
        columns,
        data,
        defaultColumn: { minSize: 0, maxSize: 1000, size: 100 },
        enableColumnActions: false,
        enableColumnFilters: false,
        enableColumnResizing: false,
        enablePagination: false,
        enableSorting: false,
        mantineTableProps: {
            striped: true,
            highlightOnHover: false,
            withColumnBorders: false,
        },
    });

    return <div className="table"><MRT_Table table={table} /></div>
};

export default PriceTable;
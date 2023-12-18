import { Divider, Flex, Stack, Table, Title } from '@mantine/core';
import React from 'react';
// import { useMemo } from 'react';
import {
    flexRender,
    MRT_GlobalFilterTextInput,
    MRT_TablePagination,
    MRT_Table,
    MRT_ToolbarAlertBanner,
    useMantineReactTable,
    MantineReactTable,
} from 'mantine-react-table';
import './PriceTable.css'

const PriceTable = (props) => {
    const data = props.data

    //should be memoized or stable
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
        },
        {
            accessorKey: 'duration',
            header: 'Продолжительность',
            mantineTableHeadCellProps: {
                align: 'center',
            },
            mantineTableBodyCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'num', //normal accessorKey
            header: 'Количество занятий',
            mantineTableHeadCellProps: {
                align: 'center',
            },
            mantineTableBodyCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'price',
            header: 'Цена',
            mantineTableHeadCellProps: {
                align: 'center',
            },
            mantineTableBodyCellProps: {
                align: 'center',
            },
        },
    ];

    const table = useMantineReactTable({
        columns,
        data,
        defaultColumn: { minSize: 40, maxSize: 1000, size: 180 },
        enableColumnActions: false,
        enableColumnFilters: false,
        enablePagination: false,
        enableSorting: false,
        mantineTableProps: {
            striped: true,
            highlightOnHover: false,
            withColumnBorders: false,

        },//must be memoized or stable (useState, useMemo, defined outside of this component, etc.)

    });

    return (
        <div className='table'>
            <MRT_Table table={table} />
        </div>
    );
    // return 
    //         <Table
    //             captionSide="top"
    //             fontSize="md"
    //             highlightOnHover
    //             horizontalSpacing="md"
    //             striped
    //             verticalSpacing="md"
    //             withBorder
    //             withColumnBorders
    //             m="10"
    //         >
    //             <thead>
    //                 <tr>
    //                     <Table.Th>Element position</Table.Th>
    //                     <Table.Th>Element name</Table.Th>
    //                     <Table.Th>Symbol</Table.Th>
    //                     <Table.Th>Atomic mass</Table.Th>
    //                 </tr>
    //             </thead>
    //         </Table>
    //     );
};
export default PriceTable;
import { Table, TableProps } from 'antd';
import { SortOrder } from 'antd/es/table/interface';
import React, { useState } from 'react';

interface SortState {
	field: string;
	order: SortOrder;
}

interface CustomTableProps<RecordType extends Record<string, any>> extends TableProps<RecordType> {
	defaultSortField?: string;
	defaultSortOrder?: SortOrder;
}

function CustomTable<RecordType extends Record<string, any>>({
	columns,
	dataSource,
	onChange,
	defaultSortField,
	defaultSortOrder = 'ascend',
	...restProps
}: CustomTableProps<RecordType>) {
	const [sortState, setSortState] = useState<SortState>({
		field: defaultSortField ?? '',
		order: defaultSortOrder
	});

	const handleTableChange: TableProps<RecordType>['onChange'] = (pagination, filters, sorter, extra) => {
		const sortedColumn = sorter instanceof Array ? sorter[0] : sorter;

		if (!sortedColumn.column) {
			setSortState({
				field: defaultSortField ?? '',
				order: defaultSortOrder
			});
		} else {
			setSortState({
				field: sortedColumn.column.key as string,
				order: sortedColumn.order as SortOrder
			});
		}

		if (onChange) {
			onChange(pagination, filters, sorter, extra);
		}
	};

	const columnsList = columns?.map((col) => {
		if (col.key === defaultSortField) {
			return {
				...col,
				sortOrder: col.key === sortState.field ? sortState.order : undefined,
				sortDirections: (defaultSortOrder === 'ascend' ? ['ascend', 'descend', 'ascend'] : ['descend', 'ascend', 'descend']) as SortOrder[]
			};
		}

		if (col.key === sortState.field) {
			return {
				...col,
				sortOrder: sortState.order
			};
		}
		return col;
	});

	return <Table {...restProps} columns={columnsList} dataSource={dataSource} onChange={handleTableChange} />;
}

export default CustomTable;

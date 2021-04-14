import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getHousesSelector,
    getIdCompanySelectedSelector,
    getPaginationDataSelector
} from "../../redux/companies-selector";
import {Table, TablePaginationConfig} from "antd";
import {getHousesThunk} from "../../redux/companies-branch";

const tableSetup = [
    {
        title: "id",
        dataIndex: "id",
        key: "id"
    },
    {
        title: "Адрес",
        dataIndex: "address",
        key: "address"
    },
    {
        title: "Количество квартир",
        dataIndex: "reestrFlatCount",
        key: "reestrFlatCount"
    },
    {
        title: "Дата обновления",
        dataIndex: "createdAt",
        key: "createdAt"
    }
]

export const TableComponent: React.FC = () => {

    const houses = useSelector(getHousesSelector)
    const paginationData = useSelector(getPaginationDataSelector)
    const idCompanySelected = useSelector(getIdCompanySelectedSelector)
    const dispatch = useDispatch()

    const pageSelection = (data: TablePaginationConfig) => {
        debugger
        dispatch(getHousesThunk(idCompanySelected, data.current))
    }

    const configPagination = {
        pagination: {
            total: paginationData.objectsCount,
            showSizeChanger: false
        }
    }

    return (houses.length) > 0 ? <Table {...configPagination} onChange={(data) => pageSelection(data)} dataSource={houses} columns={tableSetup}/> : <></>

}
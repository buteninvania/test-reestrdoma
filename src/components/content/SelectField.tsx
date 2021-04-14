import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCompaniesSelector} from "../../redux/companies-selector";
import {actionsCompanies, getHousesThunk} from "../../redux/companies-branch";
import {Select} from "antd";

const SelectField: React.FC = () => {

    const companies = useSelector(getCompaniesSelector)

    const dispatch = useDispatch()

    const companySelect = (value: any) => {
        dispatch(actionsCompanies.setIdCompanySelected(value))
        dispatch(getHousesThunk(value))
    }
    if (companies.length > 0) {
        return (
            <Select defaultValue={"Выбирете компанию"} onChange={(value) => companySelect(value)} showSearch
                    style={{width: "100%", display: "flex"}}>
                {companies.map((i: any) => {
                    return (
                        <Select.Option key={i.key} value={i.id}>{i.name}</Select.Option>
                    )
                })}
            </Select>
        )
    } else {
        return <></>
    }

}

export default SelectField
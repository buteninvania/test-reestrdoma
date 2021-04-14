import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getCompaniesThunk} from "../../redux/companies-branch";
import {TableComponent} from "./TableComponent";
import SelectField from "./SelectField";

const CompaniesList: React.FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCompaniesThunk())
    }, [])

    return (
        <div>
            <SelectField/>
            <TableComponent/>
        </div>
    )
}

export default CompaniesList
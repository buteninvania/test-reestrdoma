import React from "react";
import {Input} from "antd";

const InputField: React.FC<InputFieldPropsValueType> = ({type, id, formik, name}) => {
    return (
        <div className="input-field">
            <label htmlFor={id}>{name}</label>
            <Input id={id}
                   type={type}
                   allowClear={true}
                   {...formik.getFieldProps(id)}
            />
        </div>
    )
}

export default InputField

type InputFieldPropsValueType = {
    type: string,
    id: string,
    formik: any,
    name: string
}
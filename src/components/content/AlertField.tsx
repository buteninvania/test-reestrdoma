import React from "react";
import {Alert} from "antd";

const AlertField: React.FC<AlertFieldType> = ({touch, errors}) => touch && errors ? <Alert message={errors} type="error"/> : null

export default AlertField

type AlertFieldType = {
    touch: boolean | undefined,
    errors: string | undefined
}

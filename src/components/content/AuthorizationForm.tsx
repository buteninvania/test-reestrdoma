import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getErrorMessage} from "../../redux/auth-selector";
import {login} from "../../redux/auth-branch";
import {useFormik} from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import AlertField from "./AlertField";
import {Alert, Button} from "antd";

const AuthorizationForm: React.FC = () => {

    const dispatch = useDispatch()
    const errorMessage = useSelector(getErrorMessage)
    const submit = (values: FarmValuesType) => {
        const {username, password} = values
        dispatch(login(username, password))
    }

    const formik = useFormik({
        initialValues: {username: '', password: ''},
        validationSchema: Yup.object({
            username: Yup.string()
                .email('Не валидная почта')
                .required('Обязательное поле'),
            password: Yup.string()
                .required('Обязательное поле')
        }),
        onSubmit: ((values: FarmValuesType) => submit(values))
    })

    return (
        <form className="authorization-form"  onSubmit={formik.handleSubmit}>
            <InputField type="email" id="username" formik={formik} name="Username(Почта)"/>
            <AlertField touch={formik.touched.username} errors={formik.errors.username}/>
            <InputField type="password" id="password" formik={formik} name="Пароль"/>
            <AlertField touch={formik.touched.password} errors={formik.errors.password}/>
            <Button size="large" type="primary" htmlType="submit">Submit</Button>
            {errorMessage !== null ? <Alert style={{marginTop:10}} message={errorMessage} type="error"/> : null}
        </form>
    )
}

export default AuthorizationForm

interface FarmValuesType {
    username: string | null,
    password: string | null
}
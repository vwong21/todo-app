import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";
import * as Yup from 'yup';

interface IValue {
    description: string;
}

export const TodoForm: React.FC = () => {
    const ipcRenderer = (window as any).ipcRenderer
    const initialValues: IValue = {
        description: ''
    }
    const onSubmit = (values: IValue) => {
        console.log('value', values)
        ipcRenderer.send('submit:todoForm', values)
    }

    const validationSchema = Yup.object().shape({
        description: Yup.string().required()
    })
    return <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <div>
                    <Field name="description" id="description" />
                    <ErrorMessage name="description" />
                </div>
                <button type="submit">Save</button>
            </Form>
        </Formik>
    </div>
}
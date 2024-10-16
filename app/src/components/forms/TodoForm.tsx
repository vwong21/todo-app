import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useEffect } from 'react';
import * as Yup from 'yup';

import { Button } from '../common/Button';
import { TextField } from '../common/TextField';

interface IValues {
  description: string;
}

const validationSchema = Yup.object().shape({
  description: Yup.string().required('The description is required'),
});

export const TodoForm: React.FC = () => {
  const ipcRenderer = (window as any).ipcRenderer;
  const initialValues: IValues = { description: '' };
  const handleSubmit = (
    values: IValues,
    formikHelpers: FormikHelpers<IValues>
  ) => {
    ipcRenderer.send('submit:todoForm', values);
    formikHelpers.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="shadow border rounded-xl p-4 my-4">
            <div className="my-4">
            <label htmlFor="description" className="font-bold">
                Task description
            </label>
            <Field
                className="px-2 py-3 mt-2 mb-2 border rounded shadow-sm w-full"
                name="description"
                id="description"
                component={TextField}
                placeholder="Enter the description"
                autoFocus={true}
            />
          </div>
          <Button text="Add" />
        </Form>
      </Formik>
    </div>
  );
};


// interface IValue {
//     description: string;
// }

// export const TodoForm: React.FC = () => {
//     const ipcRenderer = (window as any).ipcRenderer
//     const initialValues: IValue = {
//         description: ''
//     }
//     const onSubmit = (values: IValue) => {
//         console.log('value', values)
//         ipcRenderer.send('submit:todoForm', values)
//     }

//     const validationSchema = Yup.object().shape({
//         description: Yup.string().required()
//     })
//     return <div>
//         <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
//             <Form>
//                 <div>
//                     <Field name="description" id="description" />
//                     <ErrorMessage name="description" />
//                 </div>
//                 <button type="submit">Save</button>
//             </Form>
//         </Formik>
//     </div>
// }
import { ErrorMessage, FieldProps } from 'formik';
import React from 'react';

export const TextField: React.FC<FieldProps> = ({
  field,
  form: { touched, errors },
  ...args
}) => {
  return (
    <div>
      <input
        type="text"
        {...field}
        {...args}
      />
      {touched[field.name] && errors[field.name] && (
        <ErrorMessage
          name={field.name}
          component="span"
          className="text-red-500 text-sm"
        />
      )}
    </div>
  );
};
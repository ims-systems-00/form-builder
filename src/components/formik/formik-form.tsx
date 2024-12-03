import React from "react";
import { Formik, FormikHelpers, FormikValues } from "formik";
import { AnySchema } from "yup";

interface FormikFormProps<T = FormikValues> {
  initialValues: T;
  onSubmit?: (
    values: T,
    formikHelpers: FormikHelpers<T>
  ) => void | Promise<unknown>;
  validationSchema: AnySchema;
  children: React.ReactNode;
  validateOnChange?: boolean;
  enableReinitialize?: boolean;
}

export const FormikForm = <T extends FormikValues>({
  initialValues,
  onSubmit = () => {},
  validationSchema,
  children,
  validateOnChange = true,
  enableReinitialize = false,
}: FormikFormProps<T>) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={validateOnChange}
      enableReinitialize={enableReinitialize}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

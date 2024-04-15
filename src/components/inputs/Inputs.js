import { Formik, Form, useField } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { Button } from "../../allPages";

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.firstName}>{label}</label>
      <input className='input' {...props} {...field} />
      {meta.touched && meta.error ? (
        <div className='errorMessage'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export function Inputs() {
  const isButtonDisabled = (getFieldProps) => {
    return !(
      getFieldProps("phoneNumber").value &&
      getFieldProps("streetnameAndHousenumber").value &&
      getFieldProps("city").value &&
      getFieldProps("phoneNumber").value &&
      getFieldProps("streetnameAndHousenumber").value &&
      getFieldProps("city").value
    );
  };

  const handleButtonClick = (e, getFieldProps) => {
    if (isButtonDisabled(getFieldProps)) {
      e.preventDefault();
    }
  };

  const navigate = useNavigate();

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          streetnameAndHousenumber: "",
          city: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .trim()
            .required("This field is required")
            .min(2, "At least 2 characters")
            .matches(/^[A-Za-z]+$/u, "Name must be in english"),

          lastName: Yup.string()
            .trim()
            .required("This field is required")
            .min(2, "At least 2 characters")
            .matches(/^[A-Za-z]+$/u, "Last name must be in english"),
          email: Yup.string()
            .email("Email must have correct format")
            .trim()
            .required("This field is required"),
          phoneNumber: Yup.string()
            .required("This field is required")
            .matches(/^[0-9]+$/u, "Phone number must have 10 digits")
            .length(10, "Phone number must have 10 digits"),
          streetnameAndHousenumber: Yup.string()
            .required("This field is required")
            .min(6, "At least 6 characters")
            .matches(
              /^[A-Za-z0-9\s]+$/u,
              "Street name and house number must be valid"
            ),
          city: Yup.string()
            .required("This field is required")
            .min(2, "At least 2 characters")
            .matches(/^[A-Za-z]+$/u, "Name must be in english"),
        })}
      >
        {({ getFieldProps }) => (
          <Form className='formClass'>
            <MyInput
              label='Your name'
              id='firstName'
              name='firstName'
              type='text'
            />

            <MyInput
              label='Your second name'
              id='lastName'
              name='lastName'
              type='text'
            />

            <MyInput label='Email' id='email' name='email' type='email' />

            <MyInput
              label='Phone number'
              id='phoneNumber'
              name='phoneNumber'
              type='tel'
            />

            <MyInput
              label='Street name and housenumber'
              id='streetnameAndHousenumber'
              name='streetnameAndHousenumber'
              type='text'
            />

            <MyInput label='City' id='city' name='city' type='text' />

            <p className='smallText'>
              We’ll only use your phone to call you about your order
            </p>

            <div className='btnClass btnContainer'>
              <div>
                <Button
                  text='Come back'
                  className='large-dark'
                  onClick={handleGoBack}
                />
              </div>
              <Button
                text='Complete order'
                className={`large-${
                  isButtonDisabled(getFieldProps) ? "gray" : "dark"
                }`}
                page='/success'
                disabled={isButtonDisabled(getFieldProps)}
                onClick={(e) => handleButtonClick(e, getFieldProps)}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

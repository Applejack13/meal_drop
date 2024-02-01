import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

import { Button, YourOrder } from "../../allPages";

import "../checkout/checkout.scss";

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.firstName}>{label}</label>
      <input className="input" {...props} {...field} />
      {meta.touched && meta.error ? (
        <div className="errorMessage">{meta.error}</div>
      ) : null}
    </>
  );
};

export function Checkout({ ...props }) {
  return (
    <div className="orderPage__content">
      <div className="checkout">
        <h2>Checkout</h2>
      </div>
      <div className="bodyContainer">
        <div className={`orderContainer1 ${props.clazz}`}>
          <div className="contactAndSteps">
            <p>{props.headerText}</p>
            <p>Step {props.step} of 2</p>
          </div>
          <p className={`progressBar ${props.progress}`}></p>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              StreetnameAndHousenumber: "",
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
              StreetnameAndHousenumber: Yup.string()
                .required("This field is required")
                .min(6, "At least 6 characters")
                .matches(
                  /^[A-Za-z0-9\s]+$/u,
                  "Street and house number must be valid"
                  // I've to fix it later
                ),
              city: Yup.string()
                .required("This field is required")
                .min(2, "At least 2 characters")
                .matches(/^[A-Za-z]+$/u, "Name must be in english"),
            })}
            onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
          >
            <Form className="formClass">
              <MyInput
                label="Your name"
                id="firstName"
                name="firstName"
                type="text"
              />
              <MyInput
                label="Your second name"
                id="lastName"
                name="lastName"
                type="text"
              />
              <MyInput
                label="Your email"
                id="email"
                name="email"
                type="email"
              />
              <MyInput
                label="Your phone number"
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
              />
              <MyInput
                label="Your street name and housenumber"
                id="StreetnameAndHousenumber"
                name="StreetnameAndHousenumber"
                type="text"
              />
              <MyInput label="Your city" id="city" name="city" type="text" />

              <p className={`${props.clazz2} smallText`}>
                We’ll only use your phone to call you about your order
              </p>
              <div className={`${props.btnClass} btnContainer`}>
                <div className={props.isHidden ? "hide" : ""}>
                  <Button
                    text={props.btnText2}
                    onClick={props.onClick}
                    className={`medium-ghost btn ${props.clazz3}`}
                  />
                </div>
                <Button
                  onClick={props.onClick}
                  text={props.btnText}
                  className={`btn ${
                    props.isWorked ? "large-dark" : "large-gray"
                  }`}
                  // I'll make later how to choose the color of the button
                  page={props.page}
                />
              </div>
            </Form>
          </Formik>
        </div>
        <YourOrder cartItems={props.cartItems} className="yourOrder" />
      </div>
    </div>
  );
}

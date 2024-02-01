import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Button, YourOrder } from "../../allPages";

import "../checkout/checkout.scss";

export function Checkout(props) {
  const {
    headerText,
    step,
    clazz,
    clazz2,
    clazz3,
    btnText,
    btnText2,
    btnClass,
    page,
    onClick,
    progress,
    cartItems,
    isHidden,
    isWorked,
  } = props;

  return (
    <div className="orderPage__content">
      <div className="checkout">
        <h2>Checkout</h2>
      </div>
      <div className="bodyContainer">
        <div className={`orderContainer1 ${clazz}`}>
          <div className="contactAndSteps">
            <p>{headerText}</p>
            <p>Step {step} of 2</p>
          </div>
          <p className={`progressBar ${progress}`}></p>

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
                .required("Obligatory field")
                .min(2, "At least 2 characters")
                .matches(/^[A-Za-z]+$/u, "Name must be in english"),
              lastName: Yup.string()
                .trim()
                .required("Obligatory field")
                .min(2, "At least 2 characters")
                .matches(/^[A-Za-z]+$/u, "Last name must be in english"),
              email: Yup.string()
                .email("Email must have correct format")
                .trim()
                .required("Obligatory field"),
              phoneNumber: Yup.string()
                .required("Obligatory field")
                .matches(/^[0-9]+$/u, "Phone number must have 10 digits")
                .length(10, "Phone number must have 10 digits"),
              StreetnameAndHousenumber:
                Yup.string().required("Obligatory field"),
              // осталось написать валидацию в поле streetnameAndHousenumber
              city: Yup.string()
                .trim()
                .required("Obligatory field")
                .min(2, "At least 2 characters"),
            })}
            onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
          >
            <Form className="formClass">
              <p>First name</p>
              <Field
                className="input"
                id="firstName"
                name="firstName"
                type="text"
              />
              <ErrorMessage
                className="errorMessage"
                name="firstName"
                component="div"
              />
              <p>Last name</p>
              <Field
                className="input"
                id="lastName"
                name="lastName"
                type="text"
              />
              <ErrorMessage
                className="errorMessage"
                name="lastName"
                component="div"
              />
              <p>Email</p>
              <Field className="input" id="email" name="email" type="email" />
              <ErrorMessage
                className="errorMessage"
                name="email"
                component="div"
              />
              <p>Phone number</p>
              <Field
                className="input"
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
              />
              <ErrorMessage
                className="errorMessage"
                name="phoneNumber"
                component="div"
              />
              <p>Streetname and housenumber</p>
              <Field
                className="input"
                id="StreetnameAndHousenumber"
                name="StreetnameAndHousenumber"
                type="text"
              />
              <ErrorMessage
                className="errorMessage"
                name="StreetnameAndHousenumber"
                component="div"
              />
              <p>City</p>
              <Field className="input" id="city" name="city" type="text" />
              <ErrorMessage
                className="errorMessage"
                name="city"
                component="div"
              />

              <p className={`${clazz2} smallText`}>
                We’ll only use your phone to call you about your order
              </p>
              <div className={`${btnClass} btnContainer`}>
                <div className={isHidden ? "hide" : ""}>
                  <Button
                    text={btnText2}
                    onClick={onClick}
                    className={`medium-ghost btn ${clazz3}`}
                  />
                </div>
                <Button
                  onClick={onClick}
                  text={btnText}
                  className={`btn ${isWorked ? "large-dark" : "large-gray"}`}
                  // I'll make later how to choose the color of the button
                  page={page}
                />
              </div>
            </Form>
          </Formik>
        </div>
        <YourOrder cartItems={cartItems} className="yourOrder" />
      </div>
    </div>
  );
}

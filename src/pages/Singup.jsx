import { useLocation } from "react-router-dom";
import { BiSolidMessageRoundedDetail, BiUser } from "react-icons/bi";
import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import { FormValidationSchema } from "../FromValidationSchema.jsx";
import { RiLockPasswordLine } from "react-icons/ri";
import { getContext } from "../context/ContextProvider.jsx";

export default function Singup() {
  const location = useLocation();
  const { setLogin } = getContext();

  return (
    <div className="mx-auto grid h-screen w-full place-content-center   ">
      {location?.state?.inital && (
        <p className="w-full rounded bg-yellow-400 p-2 text-slate-700 shadow">
          <BiSolidMessageRoundedDetail className="me-2 inline-block text-3xl text-slate-700" />
          It's the first time I see you viewing the profile page. To go to the
          profile page, you must first create a registration.
        </p>
      )}
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={FormValidationSchema}
        onSubmit={(values, actions) => {
          console.log(JSON.stringify(values, null, 2));
          console.log(actions);
          setLogin(true);
          actions.resetForm();
        }}
      >
        {(props) => (
          <Form className="flex flex-col gap-y-5">
            <div>
              <label
                htmlFor="username"
                className="flex flex-row items-center gap-1"
              >
                <BiUser className="text-2xl" />
                Username :
              </label>
              <Field
                type="text"
                name="username"
                className="mt-1 block rounded border-2 p-1 shadow focus:bg-purple-100"
                id="username"
              />
              <ErrorMessage name="username">
                {(msg) => <span className="text-sm text-red-400">{msg}</span>}
              </ErrorMessage>
            </div>
            <div>
              <label
                htmlFor="password"
                className="flex flex-row items-center gap-1"
              >
                <RiLockPasswordLine className="text-2xl" />
                Password :
              </label>
              <Field
                type="password"
                name="password"
                className="mt-1 block rounded border-2 p-1 shadow focus:bg-purple-100"
              />
              <ErrorMessage name="password">
                {(msg) => <span className="text-sm text-red-400">{msg}</span>}
              </ErrorMessage>
            </div>

            <button
              type="submit"
              className=" rounded bg-red-400 py-2 font-bold tracking-wider text-slate-50 duration-200 hover:bg-red-500"
            >
              Sing Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { BiSolidMessageRoundedDetail, BiUser } from "react-icons/bi";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormValidationSchema } from "../FromValidationSchema.jsx";
import { RiLockPasswordLine } from "react-icons/ri";
import { getContext } from "../context/ContextProvider.jsx";
import { CustomHelmet } from "../helmet/index.jsx";

export default function Singup() {
  const location = useLocation();
  const { setLogin, profile, setProfile } = getContext();
  const navigate = useNavigate();

  return (
    <div className="mx-auto grid h-screen w-1/3 w-full items-center">
      <CustomHelmet title="React Formik | Singup" />
      {location?.state?.inital && (
        <p className="mb-2 max-w-lg rounded bg-red-300 p-2 text-slate-700 shadow">
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
          setProfile((prevState) => ({ ...prevState, ...values }));
          setLogin(true);
          actions.resetForm();
          navigate("/profile");
        }}
      >
        {(props) => (
          <Form className="relative flex flex-col items-center gap-y-5 overflow-hidden rounded border-2 border-slate-200 bg-slate-100 py-20 shadow">
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
                className="mt-1 block rounded border-2 p-1 shadow"
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
                className="mt-1 block rounded border-2 p-1 shadow"
              />
              <ErrorMessage name="password">
                {(msg) => <span className="text-sm text-red-400">{msg}</span>}
              </ErrorMessage>
            </div>

            <button
              type="submit"
              className=" w-52 rounded bg-red-400 py-2 font-bold tracking-wider text-slate-50 duration-200 hover:bg-red-500"
            >
              Sing Up
            </button>
            <div className="absolute -start-20 -top-20 h-40 w-40 rounded-lg bg-red-100"></div>
            <div className="absolute -end-20 -top-20 h-40 w-40 rounded-lg bg-sky-100"></div>
            <div className="absolute -bottom-20 -start-20 h-40 w-40 rounded-lg bg-green-100"></div>
            <div className="absolute -bottom-20 -end-20 h-40 w-40 rounded-lg bg-yellow-100"></div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
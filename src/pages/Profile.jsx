import { getContext } from "../context/ContextProvider.jsx";
import { CustomHelmet } from "../helmet/index.jsx";

export default function Profile() {
  const { profile } = getContext();
  return (
    <div className="mt-2 mt-5 flex flex-col gap-y-5 border-t-2 pt-5">
      <CustomHelmet title="React Formik | Profile" />
      <span className="text-xl font-bold text-slate-100">
        Username : {profile.username}
      </span>
      <span className="text-xl font-bold text-slate-100">
        Password : {profile.password}
      </span>
    </div>
  );
}
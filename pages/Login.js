import React from "react";

const Login = () => {
  return (
    <div className="py-32 bg-blue-primary">
      <h3 className="text-2xl text-center text-gray-50 mb-9">
        Login to Hexatech
      </h3>
      <div className="flex flex-col max-w-xl p-10 mx-auto bg-slate-50 space-y-7">
        <input placeholder="Username" className="p-3" />
        <input placeholder="Password" className="p-3" />
        <button className="px-4 py-2 bg-green-primary ">Login</button>
      </div>
    </div>
  );
};

export default Login;

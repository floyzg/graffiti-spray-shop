import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FloatingInput from "../../components/FloatingInput/FloatingInput";

function Register() {
  return (
    <div className="bg-[#0b1126] min-h-screen flex flex-col">
      <Header />

      {/* CONTENT */}
      <div className="flex-1 w-full max-w-md mx-auto px-4 py-8 text-white mt-15">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign up</h2>

        <FloatingInput type="text" label="Login" />
        <FloatingInput type="email" label="E-mail" />
        <FloatingInput type="password" label="Password" />
        <FloatingInput type="password" label="Confirm Password" />
        <FloatingInput type="text" label="Name" />
        <FloatingInput type="text" label="Last Name" />

        {/* BUTTON */}
        <button className="mt-4 w-full bg-[#FF006E] text-white py-3 rounded-full font-semibold">
          Register
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Register;

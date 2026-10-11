import React, { useState } from 'react'
import { ShipWheelIcon } from 'lucide-react'

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  })
  const handleSignup = (e) => {
    e.preventDefault();
  }
  return (
    <div className="h-screen flex justify-center items-center p-4 sm:p-6 md:p-8 " data-theme="night">
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        <div className="w-full lg:w-1/2 flex flex-col p-4 sm:p-8">
          {/* logo */}
          <div className="mb-4 flex items-center justify-start gap-2">
            <ShipWheelIcon className="size-9 text-primary" />
            <span className="text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary tracking-wider">
              Streamify
            </span>
          </div>
        </div>
      </div>
    </div>

  )
};

export default SignUpPage

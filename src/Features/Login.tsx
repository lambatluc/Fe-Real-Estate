import React from "react";

const Login = (): JSX.Element => {
  return (
    <div className="bg-cover bg-center h-screen background-image: url('background.jpg');">
        <div className="flex items-center justify-center h-full">
            <div className="flex bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden w-full">
                <div className="w-1/3 h-screen p-8">
                    <div className="flex justify-center mb-8">
                        <img src="logo.png" alt="Fresher Logo" className="w-24"/>
                    </div>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email or Username</label>
                            <input type="text" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" name="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"/>
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-sm text-orange-500 hover:underline">Forgot Password?</a>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Sign In</button>
                        </div>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-500">
                        Don't have an account? <a href="#" className="text-orange-500 hover:underline">Sign Up!</a>
                    </p>
                    <footer className="mt-8 text-center text-xs text-gray-500">
                        &copy; 2020 Fresher | <a href="#" className="text-orange-500 hover:underline">Contact Us</a> | <a href="#" className="text-orange-500 hover:underline">Home</a>
                    </footer>
                </div>
                <div className="w-2/3 h-screen bg-black bg-opacity-70 flex flex-col justify-center items-center text-white p-8">
                    <h1 className="text-4xl mb-2">Register Now</h1>
                    <p className="text-lg">Stay With Us</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;

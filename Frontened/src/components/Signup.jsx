import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Login from './Login';
import toast from 'react-hot-toast';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        };
        try {
            const res = await axios.post("http://localhost:4000/user/signup", userInfo);
            console.log(res.data);
            toast.success('Signup successful!');
            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate('/'); // Navigate to the home page
        } catch (err) {
            if (err.response) {
                console.log(err);
                toast.error("Error: " + err.response.data.message);
            }
        }
    };

    const openLoginModal = () => {
        document.getElementById("loginModal").showModal();
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-[600px]">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        
                        <h3 className="font-bold text-lg">Signup</h3>
                        
                        {/* Fullname */}
                        <div className="mt-4 space-y-2">
                            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                id="fullname"
                                type="text"
                                placeholder="Enter your fullname"
                                className="w-80 px-4 py-2 border rounded-md outline-none"
                                {...register("fullname", { required: "This field is required" })}
                            />
                            {errors.fullname && <span className="text-sm text-red-600">{errors.fullname.message}</span>}
                        </div>

                        {/* Email */}
                        <div className="mt-4 space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-4 py-2 border rounded-md outline-none"
                                {...register("email", { required: "This field is required" })}
                            />
                            {errors.email && <span className="text-sm text-red-600">{errors.email.message}</span>}
                        </div>

                        {/* Password */}
                        <div className="mt-4 space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="w-80 px-4 py-2 border rounded-md outline-none"
                                {...register("password", { required: "This field is required" })}
                            />
                            {errors.password && <span className="text-sm text-red-600">{errors.password.message}</span>}
                        </div>

                        {/* Submit button */}
                        <div className="flex justify-around mt-4">
                            <button type="submit" className="bg-yellow-500 text-white rounded-md px-3 py-1 hover:bg-yellow-700 duration-200">Signup</button>
                            <p className="text-xl">
                                Have an Account?{" "}
                                <Link to="#" className="underline text-blue-500 cursor-pointer" onClick={openLoginModal}>
                                    Login
                                </Link>
                                <Login/>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {/* Login Modal */}
            <dialog id="loginModal" className="modal">
                <div className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("loginModal").close()}>✕</button>
                    <Login />
                </div>
            </dialog>
        </div>
    );
};

export default Signup;

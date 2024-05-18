import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="w-[600px]">
                    <div className='modal-box'>
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* Close button */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            
                            <h3 className="font-bold text-lg">Signup</h3>
                            
                            {/* Name */}
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Enter your fullname'
                                    className="w-80 px-4 py-2 border rounded-md outline-none"
                                    {...register("name", { required: "This field is required" })}
                                />
                                <br />
                                {errors.name && <span className="text-sm text-red-600">{errors.name.message}</span>}
                            </div>

                            {/* Email */}
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Enter your email'
                                    className="w-80 px-4 py-2 border rounded-md outline-none"
                                    {...register("email", { required: "This field is required" })}
                                />
                                <br />
                                {errors.email && <span className="text-sm text-red-600">{errors.email.message}</span>}
                            </div>

                            {/* Password */}
                            <div className='mt-4 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder='Enter your password'
                                    className="w-80 px-4 py-2 border rounded-md outline-none"
                                    {...register("password", { required: "This field is required" })}
                                />
                                <br />
                                {errors.password && <span className="text-sm text-red-600">{errors.password.message}</span>}
                            </div>

                            {/* Submit button */}
                            <div className="flex justify-around mt-4">
                                <button type="submit" className="bg-yellow-500 text-white rounded-md px-3 py-1 hover:bg-yellow-700 duration-200">Signup</button>
                                <p className='text-xl'>
                                    Have an Account?{" "}
                                    <span
                                        className='underline text-blue-500 cursor-pointer'
                                        onClick={() => document.getElementById("my_modal_3").showModal()}
                                    >
                                        Login
                                    </span>
                                </p>
                            </div>
                        </form>
                        {/* Include Login component */}
                        <Login />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;

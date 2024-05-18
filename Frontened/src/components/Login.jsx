import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Close button */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => closeModal()}>✕</Link>
                        <h3 className="font-bold text-lg">Login</h3>
                        {/* email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                name="email"
                                placeholder='Enter your email'
                                className="w-80 px-4 py-2 border rounded-md outline-none"
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className="text-sm text-red-600">This field is required</span>}
                        </div>
                        {/* password */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input
                                type="password"
                                name="password"
                                placeholder='Enter your password'
                                className="w-80 px-4 py-2 border rounded-md outline-none"
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className="text-sm text-red-600">This field is required</span>}
                        </div>
                        {/* button */}
                        <div className="flex justify-around mt-4">
                            <button className="bg-yellow-500 text-white rounded-md px-3 py-1 hover:bg-yellow-700 duration-200">Login</button>
                            <p>Not Registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Login;
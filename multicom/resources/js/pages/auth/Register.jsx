import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../redux/features/api/authApiSlice";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify"; // Assuming you're using toast for notifications
import { setCookie } from "../../utils/cookies";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/slice/authSlice";

const Register = () => {
    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();
    const [registerUser, { data: userData, isSuccess, isError }] = useRegisterUserMutation();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    // Handle form submission
    const userRegisterSubmit = (data) => {
        if (data.name && data.password) {
            data.username = data.name;
            data.confirm_password = data.password;

            registerUser(data).unwrap()
                .then(response => {
                    console.log(response);
                    if (response.status == 200) {
                        toast.success("User Created Successfully");
                        reset();
                        setCookie('user-token', response?.data?.token, 30);

                        dispatch(setAuth(response?.data?.token));
                        navigate('/')
                    } else {
                        const error = response.errors;
                        if (error.email) {
                            setError("email", {
                                message: error.email[0],
                            });
                        }
                        if (error.name) {
                            setError("name", {
                                message: error.name[0],
                            });
                        }
                        if (error.password) {
                            setError("password", {
                                message: error.password[0],
                            });
                        }
                    }
                })
                .catch(error => {
                    console.error("Failed to create user", error);
                    toast.error(error.error);
                });
        }
    };

    return (
        <div className="w-full flex justify-center items-center min-h-screen font-nunito">
            <div className="bg-base-200 px-10 py-10 rounded-lg shadow-md max-w-[400px]">
                <h4 className="text-center mb-5 font-bold text-3xl font-nunito">Sign Up</h4>

                <form className="grid gap-5" onSubmit={handleSubmit(userRegisterSubmit)}>
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: "Name is required" })}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}

                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Invalid email address"
                            }
                        })}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", {
                            required: "Password is required",
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                message: "Password must be at least 6 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character"
                            }
                        })}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                    <button type="submit" className="btn btn-primary text-white">Sign Up</button>
                </form>

                <p className="my-2">If you have an account, please <Link className="text-warning link" to="/sign-in">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;

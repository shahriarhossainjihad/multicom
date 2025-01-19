import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "../../redux/features/api/authApiSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/slice/authSlice";
import { toast } from "react-toastify";
import { setCookie } from "../../utils/cookies";

const Login = () => {
    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();
    const [loginUser, { data: userData, isSuccess, isError }] = useLoginUserMutation();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    // Handle form submission
    const userLoginSubmit = (data) => {
        loginUser(data).unwrap()
            .then(response => {
                // console.log(response);
                // console.log(response.data);
                if (response.status == 200) {
                    toast.success("User Login Successfully");
                    reset();
                    dispatch(setAuth(response?.data));
                    navigate('/');
                } else {
                    const error = response.errors;
                    if (error.email) {
                        setError("email", {
                            message: error.email[0],
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
    };

    return (
        <div className="w-full flex justify-center items-center min-h-screen font-nunito">
            <div className="bg-base-200 px-10 py-10 rounded-lg shadow-md max-w-[400px]">
                <h4 className="text-center mb-5 font-bold text-3xl font-nunito">Sign Up</h4>

                <form className="grid gap-5" onSubmit={handleSubmit(userLoginSubmit)}>
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
                        })}
                        className="input input-bordered w-full max-w-xs"
                    />
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                    <button type="submit" className="btn btn-primary text-white">Sign In</button>
                </form>

                <p className="my-2">If you haven't account, please <Link className="text-warning link" to="/sign-up">Signup</Link></p>
            </div>
        </div>
    );
};

export default Login;
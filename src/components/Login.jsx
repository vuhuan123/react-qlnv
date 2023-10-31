import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { loginApi } from "../services/UserService";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { useNavigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassWord, setIsShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem("token")
        if (token) {
            navigate("/")
        }
    }, [])
    const handleLogin = async () => {
        if (!email || !password) {
            toast.error("Email/Password is required")
            return;
        }
        setIsLoading(true)
        let res = await loginApi(email, password);
        if (res && res.token) {
            localStorage.setItem("token", res.token)
            navigate("/")
        } else {
            if (res.data && res.headers && res.status) {
                toast.error(res.data.error)
            }
        }
        setIsLoading(false)
    }
    return (
        <div className="login-container col-4">

            <div className="title-login" > Login</div>

            <div className="title-input">Email or UserName ("eve.holt@reqres.in)</div>

            <input value={email} className="input-Name" type="text" placeholder="Email or username..." onChange={(e) => setEmail(e.target.value)} />
            <div className="conatiner-password">
                <input value={password} className="input-password" type={isShowPassWord ? "text" : "password"} placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
                {isShowPassWord ? <AiFillEye className="iconShow" onClick={() => setIsShowPassword(!isShowPassWord)} /> : <AiFillEyeInvisible className="iconShow" onClick={() => setIsShowPassword(!isShowPassWord)} />}
            </div>

            <button className={email && password && password.length > 6 ? "active login" : "login"}
                disabled={email && password && password.length > 6 ? false : true}
                onClick={handleLogin}
            > {isLoading ? <AiOutlineLoading3Quarters className="loading-login" /> : null} Login</button>

            <div className="go-back"> <IoIosArrowBack />Go back</div>
        </div>
    );
}

export default Login;
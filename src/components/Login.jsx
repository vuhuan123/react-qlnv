import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassWord, setIsShowPassword] = useState(false)
    return (
        <div className="login-container col-4">

            <div className="title-login">Login</div>

            <div className="title-input">Email or UserName</div>

            <input value={email} className="input-Name" type="text" placeholder="Email or username..." onChange={(e) => setEmail(e.target.value)} />
            <div className="conatiner-password">
                <input value={password} className="input-password" type={isShowPassWord ? "text" : "password"} placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
                {isShowPassWord ? <AiFillEye className="iconShow" onClick={() => setIsShowPassword(!isShowPassWord)} /> : <AiFillEyeInvisible className="iconShow" onClick={() => setIsShowPassword(!isShowPassWord)} />}
            </div>

            <button className={email && password && password.length > 6 ? "active login" : "login"}
                disabled={email && password && password.length > 6 ? false : true}

            >Login</button>

            <div className="go-back"> <IoIosArrowBack />Go back</div>
        </div>
    );
}

export default Login;
import React from "react";


const Login = () => {

    const kakaoToken = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

    return (
    <div>
        <a href={kakaoToken}>
            <img src="/login.png"></img>
        </a>
    </div>
);
};

export default Login;
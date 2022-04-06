import axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

function Register() {
    const history = useHistory();
    const [registerInput, setRegister] = useState({
        name: "",
        email: "",
        password: "",
        error_list: [],
    });
    const handleInput = (e) => {
        e.persist();
        setRegister({ ...registerInput, [e.target.name]: e.target.value });
    };

    const registerSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        };
        axios.get("/sanctum/csrf-cookie").then((response) => {
            axios.post(`/api/register`, data).then((res) => {
                if (res.data.status === 200) {
                    localStorage.setItem("auth_token", res.data.token);
                    localStorage.setItem("auth_name", res.data.username);
                    swal("Success", res.data.message, "success");
                    history.push("/");
                } else {
                    setRegister({
                        ...registerInput,
                        error_list: res.data.validation_errors,
                    });
                }
            });
        });
    };
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-6 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h4>ユーザー登録</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={registerSubmit}>
                                <div className="form-group md-3">
                                    <label>User name</label>
                                    <input
                                        type=""
                                        name="name"
                                        onChange={handleInput}
                                        value={registerInput.name}
                                        className="form-control"
                                    />
                                    <span>{registerInput.error_list.name}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Email Address</label>
                                    <input
                                        type=""
                                        name="email"
                                        onChange={handleInput}
                                        value={registerInput.email}
                                        className="form-control"
                                    />
                                    <span>
                                        {registerInput.error_list.email}
                                    </span>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Password</label>
                                    <input
                                        type=""
                                        name="password"
                                        onChange={handleInput}
                                        value={registerInput.password}
                                        className="form-control"
                                    />
                                    <span>
                                        {registerInput.error_list.password}
                                    </span>
                                </div>
                                <div className="form-group mb-3">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        登録
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;

import useForm from "../Hooks/UseForm.jsx";
import {useEffect} from "react";

const RegisterComponent = () => {
    const {info, handleChange} = useForm();

    useEffect(() => {
        console.log(info);
    }, [info]);

    return (
        <section className="w-full max-h-max bg-green-800 text-white">
            <form>
                <input type="text" placeholder="Enter your username" name="username" onChange={handleChange} value={info.username} className="text-black"/> <br/>
                <input type="text" placeholder="Enter your facebook link" name="link" onChange={handleChange} value={info.link} className="text-black"/> <br/>
                <input type="email" placeholder="Enter email" name="email" onChange={handleChange} value={info.email} className="text-black"/> <br/>
                <input type="password" placeholder="Enter password" name="password" onChange={handleChange} value={info.password} className="text-black"/> <br/>
                <button type="submit" className="p-2">Submit</button>
                <br/>
            </form>

            <p>Name: {info.username}</p>
            <p>Name: {info.link}</p>
            <p>Email: {info.email}</p>
            <p>Password: {info.password}</p>
        </section>
    )
}

export default RegisterComponent;
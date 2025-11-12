import {Link, useNavigate} from "react-router";
import {useState} from "react";
import {userLogin} from "../../lib/api/UserApi.jsx";
import {alertError} from "../../lib/alert.js";
import {useLocalStorage} from "react-use";

export default function UserLogin() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const [_, setToken] = useLocalStorage("token", "")
    const [isSubmitting, setIsSubmitting] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();

        if (isSubmitting) return; // Prevent double submission
        setIsSubmitting(true); // Disable button


        const response = await userLogin({
            username: username,
            password: password
        });
        const responseBody = await response.json();
        console.log(responseBody)
        if(response.status === 200){
         //save data token nya
            const token = responseBody.data.token;
            setToken(token);

            await navigate({
                pathname : '/dashboard/contacts'
            })
        }else {
            await alertError(responseBody.errors)
        }

        setTimeout(() =>{
            setIsSubmitting(false)
        },2000)

    }


    return <>
        <div
            className="animate-fade-in bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-custom border border-gray-700 backdrop-blur-sm w-full max-w-md">
            <div className="text-center mb-8">
                <div className="inline-block p-3 bg-gradient rounded-full mb-4">
                    <i className="fas fa-address-book text-3xl text-white"></i>
                </div>
                <h1 className="text-3xl font-bold text-white">Contact Management</h1>
                <p className="text-gray-300 mt-2">Sign in to your account</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="username" className="block text-gray-300 text-sm font-medium mb-2">Username</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i className="fas fa-user text-gray-500"></i>
                        </div>
                        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}
                               className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                               placeholder="Enter your username" required/>
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-300 text-sm font-medium mb-2">Password</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i className="fas fa-lock text-gray-500"></i>
                        </div>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                               className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                               placeholder="Enter your password" required/>
                    </div>
                </div>

                <div className="mb-6">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-gradient text-white py-3 px-4 rounded-lg transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 
                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
                    >
                        {isSubmitting ? (
                            <>
                                <i className="fas fa-spinner fa-spin mr-2"></i>
                                Processing...
                            </>
                        ) : (
                            <>
                                <i className="fas fa-sign-in-alt mr-2"></i>
                                Sign In
                            </>
                        )}
                    </button>

                </div>

                <div className="text-center text-sm text-gray-400">
                    Don't have an account?
                    <Link to="/register"
                       className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200">Sign
                        up</Link>
                </div>
            </form>
        </div>
    </>
}
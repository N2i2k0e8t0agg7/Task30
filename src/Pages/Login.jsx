
function Login() {

    return (
        <div className="max-w-md mx-auto mt-10 border p-6 rounded">
            <h1 className="text-3xl font-bold mb-5 text-center">
                Login
            </h1>
            <input type="email" placeholder="Email" className="border w-full p-2 mb-4 rounded-2xl" />
            <input type="password" placeholder="Password" className="border w-full p-2 mb-4 rounded-2xl" />
            <button className="bg-green-500 text-white px-4 py-2 rounded-2xl cursor-pointer hover:scale-110 transition-all">
                Login
            </button>
        </div>
    );
}

export default Login;
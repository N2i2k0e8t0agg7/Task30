
function Signup() {

    return (
        <div className="max-w-md mx-auto mt-10 border p-6 rounded">
            <h1 className="text-3xl font-bold mb-5 text-center">
                Signup
            </h1>
            <input type="text" placeholder="Name" className="border w-full p-2 mb-4 rounded-2xl" />
            <input type="email" placeholder="Email" className="border w-full p-2 mb-4 rounded-2xl" />
            <input type="password" placeholder="Password" className="border w-full p-2 mb-4 rounded-2xl" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl cursor-pointer hover:scale-110 transition-all">
                Signup
            </button>
        </div>
    );
}

export default Signup;
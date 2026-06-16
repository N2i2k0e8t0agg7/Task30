
function Signup() {

    return (
        <div className="max-w-md mx-auto mt-10 border p-6 rounded">
            <h1 className="text-3xl font-bold mb-5">
                Signup
            </h1>
            <input type="text" placeholder="Name" className="border w-full p-2 mb-4" />
            <input type="email" placeholder="Email" className="border w-full p-2 mb-4" />
            <input type="password" placeholder="Password" className="border w-full p-2 mb-4" />
            <button className="bg-green-500 text-white px-4 py-2 rounded">
                Signup
            </button>
        </div>
    );
}

export default Signup;
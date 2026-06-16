
function Dashboard() {

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h1 className="text-4xl font-bold mb-6">
                Dashboard
            </h1>
            <div className="grid md:grid-cols-3 gap-5">
                <div className="border rounded p-5">
                    <h2 className="text-2xl font-bold">
                        12
                    </h2>
                    <p className="text-gray-500">
                        Total Users
                    </p>
                </div>
                <div className="border rounded p-5">
                    <h2 className="text-2xl font-bold">
                        8
                    </h2>
                    <p className="text-gray-500">
                        Active Users
                    </p>
                </div>
                <div className="border rounded p-5">
                    <h2 className="text-2xl font-bold">
                        5
                    </h2>
                    <p className="text-gray-500">
                        New Signups
                    </p>
                </div>
            </div>
            <div className="border rounded p-5 mt-8">
                <h2 className="text-xl font-semibold mb-3">
                    Recent Activity
                </h2>
                <ul className="space-y-2 text-gray-600">
                    <li>User 1 logged in.</li>
                    <li>User 2 created an account.</li>
                    <li>User 3 updated profile information.</li>
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;

function Home() {

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-4">
        Home Page
      </h1>
      <p className="text-gray-600 mb-8">
        Welcome to the website. This project uses React Router for navigation.
      </p>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="border p-5 rounded">
          <h2 className="font-semibold text-lg mb-2">
            Dashboard
          </h2>
          <p className="text-gray-500">
            View information and statistics.
          </p>
        </div>
        <div className="border p-5 rounded">
          <h2 className="font-semibold text-lg mb-2">
            Login
          </h2>
          <p className="text-gray-500">
            Access your account securely.
          </p>
        </div>
        <div className="border p-5 rounded">
          <h2 className="font-semibold text-lg mb-2">
            Signup
          </h2>
          <p className="text-gray-500">
            Create a new account.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
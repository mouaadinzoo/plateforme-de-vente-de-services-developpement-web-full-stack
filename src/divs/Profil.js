const profile = () => {
  return (
    <div className="h-[400]">
      <h2 class="text-2xl font-semibold mb-4">User Registration Form</h2>
      <div className=" bg-slate-50 h-10/12 w-11/12 m-8 p-4 ">
        <div className="flex justify-between">
          <div class="mb-14 w-full mx-8">
            <label
              for="firstName"
              class="block text-sm font-medium text-gray-700 text-left  "
            >
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block h-10 w-full shadow-sm sm:text-sm border-gray-300 rounded-md w-9/12"
            />
          </div>

          <div class="mb-14 w-full mx-8">
            <label
              for="lastName"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md w-9/12"
            />
          </div>
        </div>

        <div class="mb-14 mx-8">
          <label
            for="userName"
            class="block text-sm font-medium text-gray-700 text-left"
          >
            Username:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div className="flex justify-between">
          <div class="mb-14 w-full mx-8">
            <label
              for="firstName"
              class="block text-sm font-medium text-gray-700 text-left  "
            >
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md w-9/12"
            />
          </div>

          <div class="mb-14 w-full mx-8">
            <label
              for="lastName"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md w-9/12"
            />
          </div>
        </div>

        <div class="mb-14 mx-8">
          <label
            for="location"
            class="block text-sm font-medium text-gray-700 text-left"
          >
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div className="flex justify-between">
          <div class="mb-14 w-full mx-8">
            <label
              for="firstName"
              class="block text-sm font-medium text-gray-700 text-left  "
            >
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md w-9/12"
            />
          </div>

          <div class="mb-14 w-full mx-8">
            <label
              for="lastName"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md w-9/12"
            />
          </div>
        </div>

        <div class="mb-14 mx-8">
          <label
            for="confirmPassword"
            class="block text-sm font-medium text-gray-700 text-left"
          >
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default profile;

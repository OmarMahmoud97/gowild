import BackgroundAnimation from "@/components/backgroundAnimation/backgroundAnimation";

function Contact() {
  return (
    <div className="mt-[6rem] h-[100vh] flex items-center justify-center">
      <BackgroundAnimation />
      <div className="lg:w-full h-full flex flex-col items-center justify-between">
        <h1 className=" text-black text-3xl textshadow font-bold font">
          Contact
        </h1>
        <div className="h-full w-full flex items-center justify-center">
          <form
            action="https://getform.io/f/e254fb14-ba47-4572-be84-be3a137b3bf4"
            className="max-w-3xl flex flex-col w-10/12 mb-8"
            method="POST"
          >
            <input
              type="text"
              autoComplete="off"
              name="_gotcha"
              className="name w-1"
            />
            <div className="flex items-center justify-between">
              <div className="mx-1 w-6/12 my-2">
                <label
                  htmlFor="small-input"
                  className=" textshadow block mb-2 text-sm font-medium text-gray-900 "
                >
                  First name:
                </label>
                <input
                  type="text"
                  placeholder="First name..."
                  name="name"
                  required
                  id="small-input"
                  className="block font-semibold w-full p-2 text-[#41cf34] border  rounded-lg sm:text-xs bg-white border-[#123d0f] placeholder-gray-400   "
                />
              </div>
              <div className="mx-1 w-6/12 my-2">
                <label
                  htmlFor="small-input"
                  className=" textshadow block mb-2 text-sm font-medium text-gray-900 "
                >
                  Last name:
                </label>
                <input
                  type="text"
                  placeholder="Last name..."
                  required
                  name="Last name"
                  id="small-input"
                  className="block font-semibold w-full p-2 text-[#41cf34] border  rounded-lg sm:text-xs bg-white border-[#123d0f] placeholder-gray-400   "
                />
              </div>
            </div>
            <div className="my-2">
              <label
                htmlFor="small-input"
                className=" textshadow block mb-2 text-sm font-medium text-gray-900 "
              >
                Email:
              </label>
              <input
                type="text"
                id="small-input"
                name="email"
                required
                placeholder="Email..."
                className="block font-semibold w-full p-2 text-[#41cf34] border  rounded-lg sm:text-xs bg-white border-[#123d0f] placeholder-gray-400   "
              />
            </div>
            <div className="my-2">
              <label
                htmlFor="message"
                className=" textshadow block mb-2 text-sm font-medium text-gray-900 "
              >
                Message:
              </label>
              <textarea
                id="message"
                rows={4}
                name="message"
                className="block font-semibold p-2.5 w-full text-sm text-[#41cf34] rounded-lg border  bg-white border-[#123d0f] placeholder-gray-400  "
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                value="Submit"
                className="bg-[#123d0f] w-1/2 border  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 border-[#123d0f] text-white  hover:bg-[#41cf34] focus:ring-gray-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

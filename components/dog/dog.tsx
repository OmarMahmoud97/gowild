import "./dog.css";
function Dog() {
  return (
    <div className="main relative flex justify-center items-center mb-4 w-[85vw] sm:justify-end m-4">
      <div className="dog relative w-[22.5rem] h-[8.25rem]">
        <div className="dog__paws absolute bottom-0 left-[7.5rem] w-[12rem] h-12">
          <div className="dog__bl-leg left-12 leg z-[-10] absolute bottom-0 w-12 h-[4.125rem]">
            <div className="dog__bl-paw paw absolute bottom-0 left-0 w-[3.75rem] h-[1.875rem] overflow-hidden"></div>
            <div className="dog__bl-top top "></div>
          </div>
          <div className="dog__fl-leg left-0 leg z-10 absolute bottom-0 w-12 h-[4.125rem]">
            <div className="dog__fl-paw paw absolute bottom-0 left-0 w-[3.75rem] h-[1.875rem] overflow-hidden"></div>
            <div className="dog__fl-top top "></div>
          </div>
          <div className="dog__fr-leg leg right-0 ">
            <div className="dog__fr-paw paw absolute bottom-0 left-0 w-[3.75rem] h-[1.875rem] overflow-hidden"></div>
            <div className="dog__fr-top top "></div>
          </div>
        </div>
        <div className="dog__body flex justify-center items-end absolute bottom-1 left-[3.75rem] w-[18.75rem] h-[7.2rem] bg-[#ff702e] z-[-2] animate-body">
          <div className="dog__tail absolute right-[-3rem] w-[4.5rem] h-6 rounded-[1.5rem] bg-[#e96839]"></div>
        </div>
        <div className="dog__head absolute left-6 bottom-0 w-[9.75rem] h-[8.25rem] bg-[#ff8147] animate-head">
          <div className="dog__snout absolute left-[-1.5rem] bottom-0 w-[7.5rem] h-[3.75rem] bg-[#d7dbd2] animate-snout">
            <div className="dog__nose absolute top-[-1.95rem] left-[40%] w-3 h-[2.4rem] rounded-[0.525rem] transform rotate-[10deg] origin-bottom bg-[#d7dbd2]"></div>
            <div className="dog__eyes">
              <div className="dog__eye-l absolute top-[-0.9rem] left-[27%] w-3 h-2 rounded-full bg-[#1c3130] animate-eye"></div>
              <div className="dog__eye-r absolute top-[-0.9rem] left-[65%] w-3 h-2 rounded-full bg-[#1c3130] animate-eye"></div>
            </div>
          </div>
        </div>
        <div className="dog__head-c absolute left-6 bottom-0 w-[9.75rem] h-[8.25rem] z-[-1]">
          <div className="dog__ear-l absolute w-[10.5rem] h-[3.375rem] bg-[#e26538] top-[1.5rem] left-24 z-[-1]"></div>
          <div className="dog__ear-r absolute w-[10.5rem] h-[3.375rem] bg-[#e26538] top-[1.5rem] z-[-2] right-12"></div>
        </div>
      </div>
    </div>
  );
}

export default Dog;

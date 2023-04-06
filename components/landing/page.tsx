function Landing() {
  return (
    <section className="flex items-center justify-center w-screen flex-col relative">
      <video
        autoPlay
        muted
        loop
        className="h-[85vh] bradius w-screen object-cover"
      >
        <source src="assets/backgrounds/dogrunning.mp4" type="video/mp4" />
      </video>
      <div className="absolute h-[85vh] w-screen overlay"></div>
      <div className="flex absolute w-full flex-col">
        <div className="flex justify-center items-center">
          <div className=" pl-2 flex justify-center items-start flex-col w-[64rem]">
            <h1 className="text-white text-7xl  shadorange shadow2 font pb-1">
              Go Wild
            </h1>
            <h2 className="text-white text-2xl font shadow1  gowild">
              Dog Walking &
            </h2>
            <h2 className="text-white text-2xl font shadow1  gowild ">
              Pet Sitting Services
            </h2>
          </div>
        </div>
        <div className="w-screen emptyrow hide"></div>
      </div>
    </section>
  );
}

export default Landing;

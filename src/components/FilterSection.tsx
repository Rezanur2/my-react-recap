const FilterSection = () => {
  return (
    <div className="bg-blue-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold">Find your next developer role.</h1>
        <p className="text-xl text-slate-600 mt-2">
          Search, filter, and save the jobs you like - everything updates
          instantly.
        </p>
        <div className="mt-5 gap-6 flex items-center">
          <div className="w-2/3 ">
            <label className="input w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search by the title or company" />
            </label>
          </div>
          <div className="flex gap-5">
            <button className="btn btn-neutral rounded-full">All</button>
            <button className="btn btn-outline rounded-full">Frontend</button>
            <button className="btn btn-outline rounded-full">Backend</button>
            <button className="btn btn-outline rounded-full">Design</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;

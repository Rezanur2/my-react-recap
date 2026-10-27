const JobsSection = () => {
  return (
    <div className="bg-blue-100">
      <div className="container mx-auto py-4 flex justify-between gap-8">
        <div className="flex justify-between items-center w-3/4">
          <h2 className="font-bold text-xl">Latest Jobs</h2>
          <p>6 roles found</p>
        </div>
        <div className="flex justify-between items-center w-1/4">
          <h2 className="font-bold text-xl">Saved Jobs</h2>
          <p>2 saved</p>
        </div>
      </div>
    </div>
  );
};

export default JobsSection;

function Dashboard() {
  return (
    <div className="flex">
      {/* left and right side */}
      <div className="w-60 h-screen bg-slate-700"></div>
      <div className="h-screen w-full bg-slate-200">
        {/* top section */}
        <div className="flex justify-between max-w-6xl mx-auto p-2">
          <p>Good Morning!</p>
          <div className="flex gap-2 items-center bg-white p-2 rounded-md shadow-md ">
            <div className="flex flex-col gap-1">
              <p className="font-semibold">John Doe</p>
              <p className="text-xs">john@gmail.com</p>
            </div>
            <img
              className="max-w-10 max-h-10"
              src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
              alt="person image"
            />
          </div>
        </div>
      </div>
      {/* left and right side */}
    </div>
  );
}
export default Dashboard;

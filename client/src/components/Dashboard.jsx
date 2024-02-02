import briefcase from "../Assets/Briefcase.png";
import statBoard from "../Assets/StatBoard.png";
import circleMenu from "../Assets/Circled Menu.png";
import support from "../Assets/Support.png";
import plugins from "../Assets/Puzzle.png";
import help from "../Assets/Help.png";
import ShutDown from "../Assets/Shutdown.png";

function Dashboard() {
  return (
    <div className="flex">
      {/* left and right side */}
      <div className="w-60 h-screen bg-slate-700 flex flex-col justify-between">
        {/* briefcase */}
        <div className="flex flex-col justify-center items-center">
          <img className="self-center" src={briefcase} alt="briefcase" />
          <img src={statBoard} />
        </div>

        {/* pages */}
        <div className="flex flex-col gap-8 mx-auto w-full">
          <div className="ml-4 flex gap-3 justify-start items-center bg-gray-800 p-3 rounded-md">
            <img src={circleMenu} alt="circlemenu" />
            <p className="text-white">Dashboard</p>
          </div>
          <div className="ml-4 flex gap-3 justify-start items-center bg-gray-800 p-3 rounded-md">
            <img src={support} alt="support" />
            <p className="text-white">Support</p>
          </div>
          <div className="ml-4 flex gap-3 justify-start items-center bg-gray-800 p-3 rounded-md">
            <img src={plugins} alt="plugin" />
            <p className="text-white">Plugins</p>
          </div>
          <div className="ml-4 flex gap-3 justify-start items-center bg-gray-800 p-3 rounded-md">
            <img src={help} alt="help" />
            <p className="text-white">Help</p>
          </div>
        </div>
        {/* button */}
        <div className="flex justify-center items-center gap-2 text-red-500 w-full bg-white p-3">
          <button>Logout</button>
          <img src={ShutDown} alt="shutdown" />
        </div>
      </div>
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
        {/* end of top section */}
        {/* mid section */}
        <div></div>
        {/*end of mid section */}
      </div>
      {/* left and right side */}
    </div>
  );
}
export default Dashboard;

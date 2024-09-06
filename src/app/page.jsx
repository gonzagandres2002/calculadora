// pages/index.js
import ControlUnit from "../components/controlUnit";
import Alu from "@/components/alu";
import Memory from "../components/memory";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl p-4 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <ControlUnit />
          </div>
          <div className="flex-1">
            <Alu />
          </div>
        </div>
        <div className="mx-20 my-20">
          <Memory />
        </div>
      </div>
    </div>
  );
};

export default Home;

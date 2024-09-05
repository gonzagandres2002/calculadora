// pages/index.js
import ControlUnit from "../components/ControlUnit";
import Alu from "@/components/alu";
import Memory from "../components/Memory";
import MemoryTable from "../components/MemoryTable";

const Home = () => {
  return (
    <div className="p-8 grid grid-cols-2 gap-4">
      <ControlUnit />
      <Alu />
      <div className="col-span-2">
        <Memory />
        <MemoryTable />
      </div>
    </div>
  );
};

export default Home;


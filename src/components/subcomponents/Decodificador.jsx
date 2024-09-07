import { Handle } from "reactflow";

export default function Decodificador() {
    return (
        <div className="p-4 bg-yellow-200/40 border-2 border-yellow-300 rounded-md">
            <div className="flex items-center border-2 border-yellow-300 font-bold p-2 mb-2">
                <div className="border-2 border-black w-7 h-7 absolute right-1/4"></div>
                <span className="ml-2">Decodificador</span>
            </div>
            <Handle
                type="source" // outgoing connection
                position="right" // position of the handle on the node (top, bottom, left, right)
                style={{ top: "50%", background: "blue" }} // adjust the vertical position
            />
            <Handle
                type="target" // incoming connection
                position="left" // position of the handle on the node
            />
        </div>
    );
}

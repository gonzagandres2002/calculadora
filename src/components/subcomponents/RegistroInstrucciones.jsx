import { Handle } from "reactflow";

export default function RegistroInstrucciones() {
    return (
        <div className="border-2 border-yellow-500 bg-yellow-300 p-2 flex justify-between">
            <span className="font-bold">Reg. Instrucciones</span>
            <span>00000000</span>
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

import { Handle } from "reactflow";

export default function ContPrograma() {
    return (
        <div className="border-2 border-yellow-500 bg-yellow-300 p-2 flex justify-between">
            <span className="font-bold">Cont. Programa</span>
            <span>0000</span>
            <Handle
                type="source" 
                position="right" 
                style={{ top: "50%", background: "blue" }} 
            />
            <Handle
                type="target" 
                position="left" 
            />
        </div>
    );
}

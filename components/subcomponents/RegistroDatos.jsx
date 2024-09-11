import { Handle } from "reactflow";

export default function RegistroDatos({value}) {
    return (
        <div className="border-2 border-red-500 bg-red-300 p-2 flex justify-between">
            <span className="font-bold">R. Datos</span>
            <span>{value}</span>
            <Handle
                type="source"
                position="right"
                style={{ top: "50%", background: "blue" }}
            />
            <Handle type="target" position="left" />
        </div>
    );
}

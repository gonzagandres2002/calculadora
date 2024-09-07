import { Handle } from "reactflow";

export default function RegistroDatos() {
    return (
        <div className="border-2 border-red-500 bg-red-300 p-2 flex justify-between">
            <span className="font-bold">R. Direcciones</span>
            <span>0000</span>
            <Handle
                type="source"
                position="left"
                style={{ top: "50%", background: "blue" }}
            />
            <Handle type="target" position="left" />
        </div>
    );
}

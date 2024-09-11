import { Handle } from 'reactflow';

export default function RegistroDirecciones({value}) {
    return (
        <div className="border-2 border-red-500 bg-red-300 p-2 flex justify-between">
            <span className="font-bold">R. Direcciones</span>
            <span>{value}</span>
            <Handle
                type="source"
                position="left"
                style={{ top: "50%", background: "blue" }}
            />
            <Handle type="target" position="left" />
        </div>
    );
}

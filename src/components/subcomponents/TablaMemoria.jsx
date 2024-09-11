import { Handle } from "reactflow";

export default function TablaMemoria({value}) {

    return (
        <div className="border-2 border-red-800  rounded-md p-4 mt-2 bg-red-600/35">
            <h2 className="font-bold mb-2 ">Tabla de memoria</h2>
            <div className="flex justify-between mb-1 font-bold mt-2">
                <span>Dir.</span>
                <span>Contenido</span>
            </div>
            {value.map((item) => (
                <div
                    key={item.dir}
                    className="flex justify-between border-2 border-red-800/30 py-auto"
                >
                    <span>{item.dir}</span>
                    <span>{item.content}</span>
                </div>
            ))}
            <Handle type="target" position="left" />
        </div>
    );
}

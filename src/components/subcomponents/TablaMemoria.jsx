import { Handle } from "reactflow";

export default function TablaMemoria() {
    const memoryData = [
        { dir: "0000", content: "00000100" },
        { dir: "0001", content: "00000101" },
        { dir: "0010", content: "01100111" },
        { dir: "0011", content: "01110000" },
        { dir: "0100", content: "00001001" },
        { dir: "0101", content: "00000100" },
        { dir: "0110", content: "00000000" },
        { dir: "0111", content: "00000000" },
    ];

    return (
        <div className="border-2 border-red-800  rounded-md p-4 mt-2 bg-red-600/35">
            <h2 className="font-bold mb-2 ">Tabla de memoria</h2>
            <div className="flex justify-between mb-1 font-bold mt-2">
                <span>Dir.</span>
                <span>Contenido</span>
            </div>
            {memoryData.map((item) => (
                <div
                    key={item.dir}
                    className="flex justify-between border-2 border-red-800/30 py-auto"
                >
                    <span>{item.dir}</span>
                    <span>{item.content}</span>
                </div>
            ))}
            <Handle
                type="source"
                position="left"
                style={{ top: "50%", background: "blue" }}
            />
            <Handle type="target" position="left" />
        </div>
    );
}

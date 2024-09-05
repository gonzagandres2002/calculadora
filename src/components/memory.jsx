
export default function memory() {
  const memoryData = [
    { dir: '0000', content: '00000100' },
    { dir: '0001', content: '00000101' },
    { dir: '0010', content: '01100111' },
    { dir: '0011', content: '01110000' },
    { dir: '0100', content: '00001001' },
    { dir: '0101', content: '00000100' },
    { dir: '0110', content: '00000000' },
    { dir: '0111', content: '00000000' },
  ];
    return (
      <div className="p-4 border-2 border-orange-300 rounded-md">
        <h2 className="font-bold mb-2">Memoria</h2>
        <div className="flex flex-col gap-2">
          <div className="border border-gray-300 p-2 flex justify-between">
            <span>R. Direcciones</span>
            <span>0000</span>
          </div>
          <div className="border border-gray-300 p-2 flex justify-between">
            <span>R. Datos</span>
            <span>00000000</span>
          </div>
        </div>
        <div className="border-2 border-orange-300 rounded-md p-4 mt-2">
        <h2 className="font-bold mb-2">Tabla de memoria</h2>
        <div className="flex justify-between mb-1 font-bold">
          <span>Dir.</span>
          <span>Contenido</span>
        </div>
        {memoryData.map((item) => (
          <div key={item.dir} className="flex justify-between border-b border-gray-300 py-1">
            <span>{item.dir}</span>
            <span>{item.content}</span>
          </div>
        ))}
      </div>
      </div>
    );
  };
  
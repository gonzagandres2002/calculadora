
export default function Memory() {
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
    <div className="relative">
      <h2 className="font-bold mb-2">Memoria</h2>
      <div className="p-4 bg-red-600/35 border-2 border-red-800 rounded-md w-auto h-auto">

        <div className="flex flex-col gap-2">
          <div className="border-2 border-red-800 p-2 flex justify-between">
            <span >R. Direcciones</span>
            <span>0000</span>
          </div>
          <div className="border-2 border-red-800 p-2 flex justify-between">
            <span>R. Datos</span>
            <span>00000000</span>
          </div>
        </div>
        <div className="border-2 border-red-800  rounded-md p-4 mt-2">
          <h2 className="font-bold mb-2 ">Tabla de memoria</h2>
          <div className="flex justify-between mb-1 font-bold mt-2">
            <span>Dir.</span>
            <span>Contenido</span>
          </div>
          {memoryData.map((item) => (
            <div key={item.dir} className="flex justify-between border-2 border-red-800/30 py-auto">
              <span>{item.dir}</span>
              <span>{item.content}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

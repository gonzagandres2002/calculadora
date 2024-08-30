
export default function memory() {
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
      </div>
    );
  };
  
export default function controlUnit() {
  return (
    <div className="p-4 bg-yellow-200 border-yellow-300 rounded-md w-96 h-52">
      <h2 className="font-bold mb-2">Unidad de control</h2>
      <div className="border-2 border-gray-300 font-bold p-2 mb-2">
        <span>Decodificador</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className=" border-2 border-gray-300 p-2 flex justify-between">
          <span className="font-bold">Cont. Programa</span>
          <span>0000</span>
        </div>
        <div className="border-2 border-gray-300 p-2 flex justify-between">
          <span className="font-bold">R. Instrucciones</span>
          <span>00000000</span>
        </div>
      </div>
    </div>
  )
}

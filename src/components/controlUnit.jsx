export default function controlUnit() {
  return (
    <div className="p-4 border-2 border-blue-300 rounded-md">
      <h2 className="font-bold mb-2">Unidad de control</h2>
      <div className="border border-gray-300 p-2 mb-2">
        <span>Decodificador</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="border border-gray-300 p-2 flex justify-between">
          <span>Cont. Programa</span>
          <span>0000</span>
        </div>
        <div className="border border-gray-300 p-2 flex justify-between">
          <span>R. Instrucciones</span>
          <span>00000000</span>
        </div>
      </div>
    </div>
  )
}

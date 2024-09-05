export default function alu() {
  return (

        <div className="p-4 border-blue-500 bg-blue-300/45 bg- rounded-md  w-96 h-52">
          <h2 className="font-bold mb-2">Unidad aritmético-lógica (ALU)</h2>
          <div className="flex flex-col gap-2">
            <div className="border-2 border-gray-300 p-2 flex justify-between">
              <span className="font-bold">Acumulador</span>
              <span>00000000</span>
            </div>
            <div className="border-2 border-gray-300 p-2 flex justify-between">
              <span className="font-bold">R. Entrada</span>
              <span>00000000</span>
            </div>
          </div>
        </div>
  )
}

export default function Alu() {
  return (
      <div className="">
        <h2 className="font-bold mb-2">Unidad aritmético-lógica (ALU)</h2>
        <div className="p-4 border-2 border-blue-500 bg-blue-300/35 bg- rounded-md  w-26 h-52">
          
          <div className="flex flex-col gap-2">
            <div className="border-2 border-blue-500 p-2 flex justify-between">
              <span className="font-bold">Acumulador</span>
              <span>00000000</span>
            </div>
            <div className="border-2 border-blue-500 p-2 flex justify-between">
              <span className="font-bold">R. Entrada</span>
              <span>00000000</span>
            </div>
          </div>
        </div>
        </div>
  )
}

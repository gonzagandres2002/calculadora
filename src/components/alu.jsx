export default function alu() {
  return (

        <div className="p-4 border-2 border-green-300 rounded-md">
          <h2 className="font-bold mb-2">Unidad aritmético-lógica (ALU)</h2>
          <div className="flex flex-col gap-2">
            <div className="border border-gray-300 p-2 flex justify-between">
              <span>Acumulador</span>
              <span>00000000</span>
            </div>
            <div className="border border-gray-300 p-2 flex justify-between">
              <span>R. Entrada</span>
              <span>00000000</span>
            </div>
          </div>
        </div>
  )
}

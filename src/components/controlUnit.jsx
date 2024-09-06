export default function ControlUnit() {
  return (
    <div className="relative">
      <h2 className="font-bold mb-2">Unidad de control</h2>
    <div className="p-4 bg-yellow-200/40 border-2 border-yellow-300 rounded-md w-26 h-52">
      
    <div className="flex items-center border-2 border-yellow-300 font-bold p-2 mb-2">
          <div className="border-2 border-black w-7 h-7 absolute right-1/4"></div>
          <span className="ml-2">Decodificador</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className=" border-2 border-yellow-300 p-2 flex justify-between">
          <span className="font-bold">Cont. Programa</span>
          <span>0000</span>
        </div>
        <div className="border-2 border-yellow-300 p-2 flex justify-between">
          <span className="font-bold">R. Instrucciones</span>
          <span>00000000</span>
        </div>
      </div>
    </div>
    </div>
  )
}

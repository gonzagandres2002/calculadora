import { Handle } from 'reactflow';

const Acumulador = () => {
  return (
    <div className="border-2 border-blue-500 bg-blue-300 p-2 flex justify-between">
      <span className="font-bold">Acumulador</span>
      <span>00000000</span>
      <Handle
        type="source" // outgoing connection
        position="right" // position of the handle on the node (top, bottom, left, right)
        style={{ top: '50%', background: 'blue' }} // adjust the vertical position
      />
      <Handle
        type="target" // incoming connection
        position="left" // position of the handle on the node
      />
    </div>
  );
};

export default Acumulador;
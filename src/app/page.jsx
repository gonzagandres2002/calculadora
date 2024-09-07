"use client";

import { useCallback } from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

//main components
import ControlUnit from "../components/ControlUnit";
import Alu from "@/components/Alu";
import Memory from "../components/Memory";

//subcomponents
import RegistroEntrada from '@/components/subcomponents/RegistroEntrada';
import Acumulador from '@/components/subcomponents/Acumulador';
import ContPrograma from '@/components/subcomponents/ContPrograma';
import RegistroInstrucciones from '@/components/subcomponents/RegistroInstrucciones';
import Decodificador from '@/components/subcomponents/Decodificador';

const initialNodes = [
  {
    id: 'control-unit',
    type: 'input',
    data: { label: <ControlUnit /> },
    position: { x: 0, y: 90 },
    style: { width: 300, height: 200, }
  },
  {
    id: 'contador-programa',
    data: { label: <ContPrograma /> },
    position: { x: 140, y: 140 },
    style: { width: 220, height: 60 }
  },
  {
    id: 'registro-instrucciones',
    data: { label: <RegistroInstrucciones /> },
    position: { x: 140, y: 200 },
    style: { width: 220, height: 60 }
  },
  {
    id: 'decodificador',
    data: { label: <Decodificador /> },
    position: { x: -100, y: 150 },
    style: { width: 220, height: 110 }
  },
  {
    id: 'alu',
    data: { label: <Alu /> },
    position: { x: 490, y: 90 },
    style: { width: 250, height: 200 }
  },
  {
    id: 'acumulador',
    data: { label: <Acumulador /> },
    position: { x: 500, y: 140 },  // Positioning inside/near the ALU
    style: { width: 200, height: 60 }
  },
  {
    id: 'registro-entrada',
    data: { label: <RegistroEntrada /> },
    position: { x: 500, y: 200 },  // Positioning inside/near the ALU
    style: { width: 200, height: 60 }
  },
  {
    id: 'memory',
    data: { label: <Memory /> },
    position: { x: 200, y: 350 },
    style: { width: 400, height: 450 }
  }
];

// Create edges between the nodes
const initialEdges = [
  { id: 'edge4', source: 'acumulador', target: 'memory', type: 'step' },  // Acumulador to Memory
  { id: 'edge5', source: 'registro-entrada', target: 'memory', type: 'smoothstep' }  // RegistroEntrada to Memory
];

const Home = () => {
  const onNodesChange = useCallback(() => {}, []);
  const onEdgesChange = useCallback(() => {}, []);
  const onConnect = useCallback(() => {}, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full p-4 flex flex-col gap-4 h-screen">
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Home;
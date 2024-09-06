"use client";

import { useCallback } from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

import ControlUnit from "../components/controlUnit";
import Alu from "@/components/alu";
import Memory from "../components/memory";

const initialNodes = [
  {
    id: 'control-unit',
    type: 'input',
    data: { label: <ControlUnit /> },
    position: { x: 100, y: 100 },
  },
  {
    id: 'alu',
    data: { label: <Alu /> },
    position: { x: 400, y: 100 },
  },
  {
    id: 'memory',
    data: { label: <Memory /> },
    position: { x: 250, y: 300 },
  }
];

const initialEdges = [
  { id: 'edge1', source: 'control-unit', target: 'alu', type: 'smoothstep' },
  { id: 'edge2', source: 'control-unit', target: 'memory', type: 'smoothstep' },
  { id: 'edge3', source: 'alu', target: 'memory', type: 'smoothstep' }
];

const Home = () => {
  const onNodesChange = useCallback(() => {}, []);
  const onEdgesChange = useCallback(() => {}, []);
  const onConnect = useCallback(() => {}, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl p-4 flex flex-col gap-4 h-screen">
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
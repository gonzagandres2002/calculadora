"use client";

import { useCallback } from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import "./globals.css";

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
import RegistroDirecciones from '@/components/subcomponents/RegistroDirecciones';
import RegistroDatos from '@/components/subcomponents/RegistroDatos';
import TablaMemoria from '@/components/subcomponents/TablaMemoria';

//edges
import Edge11 from '@/components/edges/Edge11';

const Home = () => {
  const onNodesChange = useCallback(() => {}, []);
  const onEdgesChange = useCallback(() => {}, []);
  const onConnect = useCallback(() => {}, []);

  const edgeTypes = {
    custom: Edge11,  // Register the custom edge type
  };
  
  const initialNodes = [
    {
      id: 'control-unit',
      type: 'input',
      data: { label: <ControlUnit /> },
      position: { x: 0, y: 90 },
      style: { width: 300, height: 200}
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
      position: { x: 550, y: 90 },
      style: { width: 250, height: 180 }
    },
    {
      id: 'acumulador',
      data: { label: <Acumulador /> },
      position: { x: 450, y: 160 }, 
      style: { width: 200, height: 60 }
    },
    {
      id: 'registro-entrada',
      data: { label: <RegistroEntrada /> },
      position: { x: 700, y: 160 },  
      style: { width: 200, height: 60 }
    },
    {
      id: 'memory',
      data: { label: <Memory /> },
      position: { x: 200, y: 350 },
      style: { width: 400, height: 300 }
    },
    {
      id: 'registro-direcciones',
      data: { label: <RegistroDirecciones /> },
      position: { x: 140, y: 400 },
      style: { width: 220, height: 60 }
    },
    {
      id: 'registro-datos',
      data: { label: <RegistroDatos /> },
      position: { x: 420, y: 400 },
      style: { width: 220, height: 60 }
    },
    {
      id: 'tabla-memoria',
      data: { label: <TablaMemoria /> },
      position: { x: 290, y: 480 },
      style: { width: 220, height: 300 }
    }
  ];
  
  const initialEdges = [
    /*{ id: 'edge1', source: 'contador-programa', target: 'registro-direcciones', type: 'step',  style: { stroke: '#000'} },
    { id: 'edge2', source: 'contador-programa', target: 'contador-programa', type: 'step' },
    { id: 'edge3', source: 'registro-direcciones', target: 'tabla-memoria', type: 'step' }, 
    { id: 'edge4', source: 'tabla-memoria', target: 'registro-datos', type: 'step' },  
    { id: 'edge5', source: 'registro-datos', target: 'registro-instrucciones', type: 'smoothstep' },
    { id: 'edge6', source: 'registro-instrucciones', target: 'decodificador', type: 'smoothstep' },
    { id: 'edge7', source: 'registro-instrucciones', target: 'registro-direcciones', type: 'smoothstep' },
    { id: 'edge8', source: 'registro-direcciones', target: 'tabla-memoria', type: 'step' }, 
    { id: 'edge9', source: 'tabla-memoria', target: 'registro-datos', type: 'step' },  
    { id: 'edge10', source: 'registro-datos', target: 'registro-entrada', type: 'smoothstep' },*/
    { id: 'edge11', source: 'registro-entrada', target: 'acumulador', type: 'custom' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full p-4 flex flex-col gap-4 h-screen">
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          edgeTypes={edgeTypes}
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
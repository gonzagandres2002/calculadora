"use client";

import { useCallback, useState } from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
import "./globals.css";

// Main components
import ControlUnit from "../components/ControlUnit";
import Alu from "@/components/Alu";
import Memory from "../components/Memory";

// Subcomponents
import RegistroEntrada from "@/components/subcomponents/RegistroEntrada";
import Acumulador from "@/components/subcomponents/Acumulador";
import ContPrograma from "@/components/subcomponents/ContPrograma";
import RegistroInstrucciones from "@/components/subcomponents/RegistroInstrucciones";
import Decodificador from "@/components/subcomponents/Decodificador";
import RegistroDirecciones from "@/components/subcomponents/RegistroDirecciones";
import RegistroDatos from "@/components/subcomponents/RegistroDatos";
import TablaMemoria from "@/components/subcomponents/TablaMemoria";

// Edges
import Edge1 from "@/components/edges/Edge1";
import Edge2 from "@/components/edges/Edge2";
import Edge3 from "@/components/edges/Edge3";
import Edge4 from "@/components/edges/Edge4";
import Edge5 from "@/components/edges/Edge5";
import Edge6 from "@/components/edges/Edge6";
import Edge7 from "@/components/edges/Edge7";
import Edge8 from "@/components/edges/Edge8";
import Edge9 from "@/components/edges/Edge9";

const Home = () => {
    const onNodesChange = useCallback(() => {}, []);
    const onEdgesChange = useCallback(() => {}, []);
    const onConnect = useCallback(() => {}, []);

    const edgeTypes = {
        custom1: Edge1,
        custom2: Edge2,
        custom3: Edge3,
        custom4: Edge4,
        custom5: Edge5,
        custom6: Edge6,
        custom7: Edge7,
        custom8: Edge8,
        custom9: Edge9,
    };

    const initialNodes = [
        /* Control Unit */
        {
            id: "control-unit",
            type: "input",
            data: { label: <ControlUnit /> },
            position: { x: 0, y: 90 },
            style: { width: 300, height: 200 },
        },
        {
            id: "contador-programa",
            data: { label: <ContPrograma /> },
            position: { x: 140, y: 140 },
            style: { width: 220, height: 60 },
        },
        {
            id: "registro-instrucciones",
            data: { label: <RegistroInstrucciones /> },
            position: { x: 140, y: 200 },
            style: { width: 220, height: 60 },
        },
        {
            id: "decodificador",
            data: { label: <Decodificador /> },
            position: { x: -100, y: 150 },
            style: { width: 220, height: 110 },
        },
        /* ALU */
        {
            id: "alu",
            data: { label: <Alu /> },
            position: { x: 650, y: 90 },
            style: { width: 250, height: 180 },
        },
        {
            id: "acumulador",
            data: { label: <Acumulador /> },
            position: { x: 550, y: 160 },
            style: { width: 200, height: 60 },
        },
        {
            id: "registro-entrada",
            data: { label: <RegistroEntrada /> },
            position: { x: 800, y: 160 },
            style: { width: 200, height: 60 },
        },
        /* Memory */
        {
            id: "memory",
            data: { label: <Memory /> },
            position: { x: 300, y: 450 },
            style: { width: 400, height: 300 },
        },
        {
            id: "registro-direcciones",
            data: { label: <RegistroDirecciones /> },
            position: { x: 240, y: 500 },
            style: { width: 220, height: 60 },
        },
        {
            id: "registro-datos",
            data: { label: <RegistroDatos /> },
            position: { x: 520, y: 500 },
            style: { width: 220, height: 60 },
        },
        {
            id: "tabla-memoria",
            data: { label: <TablaMemoria /> },
            position: { x: 390, y: 580 },
            style: { width: 220, height: 300 },
        },
    ];

    const initialEdges = [
        {
            id: "edge1",
            source: "contador-programa",
            target: "registro-direcciones",
            type: "custom1",
        },
        {
            id: "edge2",
            source: "contador-programa",
            target: "contador-programa",
            type: "custom2",
        },
        {
            id: "edge3",
            source: "registro-direcciones",
            target: "tabla-memoria",
            type: "custom3",
        },
        {
            id: "edge4",
            source: "tabla-memoria",
            target: "registro-datos",
            type: "custom4",
        },
        {
            id: "edge5",
            source: "registro-datos",
            target: "registro-instrucciones",
            type: "custom5",
        },
        {
            id: "edge6",
            source: "registro-instrucciones",
            target: "decodificador",
            type: "custom6",
        },
        {
            id: "edge7",
            source: "registro-datos",
            target: "registro-entrada",
            type: "custom7",
        },
        {
            id: "edge8",
            source: "registro-entrada",
            target: "acumulador",
            type: "custom8",
        },
        {
            id: "edge9",
            source: "acumulador",
            target: "registro-datos",
            type: "custom9",
        },
    ];

    const [edges, setEdges] = useState(initialEdges);
    const [currentIndex, setCurrentIndex] = useState(0); // Index to track which edge is currently active

    const changeEdgeWidth = () => {
        setEdges((prevEdges) => {
            // Find the index of the edge to be updated
            const newEdges = prevEdges.map((edge, index) => {
                if (index === currentIndex) {
                    return {
                        ...edge,
                        style: { ...edge.style, strokeWidth: 3 },
                    };
                } else if (
                    index ===
                    (currentIndex - 1 + prevEdges.length) % prevEdges.length
                ) {
                    return {
                        ...edge,
                        style: { ...edge.style, strokeWidth: 1 },
                    };
                }
                return edge;
            });

            return newEdges;
        });

        // Update the currentIndex to the next edge
        setCurrentIndex((prevIndex) => (prevIndex + 1) % initialEdges.length);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="w-full p-4 flex flex-col gap-4 h-screen">
                <ReactFlow
                    nodes={initialNodes}
                    edges={edges}
                    edgeTypes={edgeTypes}
                    fitView
                >
                    <MiniMap />
                    <Controls />
                    <Background />
                </ReactFlow>
                <button onClick={changeEdgeWidth}>Change Edge Width</button>
            </div>
        </div>
    );
};

export default Home;

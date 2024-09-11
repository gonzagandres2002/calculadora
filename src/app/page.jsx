"use client";

import { useCallback, useState } from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import { ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";
import "./globals.css";

// Main components
import ControlUnit from "@/components/ControlUnit";
import Alu from "@/components/Alu";
import Memory from "@/components/Memory";

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
import Edge10 from "@/components/edges/Edge10";

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
    {
        id: "edge10",
        source: "registro-instrucciones",
        target: "registro-direcciones",
        type: "custom10",
    },
];

const updateOrder = [
    "edge1",
    "edge2",
    "edge3",
    "edge4",
    "edge5",
    "edge6",
    "edge10",
    "edge3",
    "edge4",
    "edge7" /*10*/,
    "edge8",
    "edge1",
    "edge2",
    "edge3",
    "edge4",
    "edge5",
    "edge6",
    "edge10",
    "edge3",
    "edge4" /*20*/,
    "edge7",
    "edge8",
    "edge1",
    "edge2",
    "edge3",
    "edge4",
    "edge5",
    "edge6",
    "edge10",
    "edge3" /*30*/,
    "edge4",
    "edge7",
    "edge8",
    "edge1",
    "edge2",
    "edge3",
    "edge4",
    "edge5",
    "edge6", //M
    "edge10",
    "edge3",
    "edge9",
    "edge4",
    "edge1",
    "edge2",
    "edge3",
    "edge4",
    "edge5",
    "edge6",
]; // This controls the specific update sequence

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
    custom10: Edge10,
};

const memoryData = [
    { dir: "0000", content: "00000100" }, //Suma
    { dir: "0001", content: "00000101" }, 
    { dir: "0010", content: "00100110" }, //Producto
    { dir: "0011", content: "01100111" },
    { dir: "0100", content: "00000101" },
    { dir: "0101", content: "00001010" },
    { dir: "0110", content: "00010000" },
    { dir: "0111", content: "00000000" },
];

const Home = () => {
    const [edges, setEdges] = useState(initialEdges);
    const [currentIndex, setCurrentIndex] = useState(0); // Track which edge in updateOrder to change
    const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Track when the button should stop
    const [clickCount, setClickCount] = useState(1);

    // Component values
    const [contProgramaValue, setContProgramaValue] = useState("0000");
    const [registroDireccionesValue, setRegistroDireccionesValue] =
        useState("0000");
    const [registroDatosValue, setRegistroDatosValue] = useState("0000");
    const [registroInstruccionesValue, setRegistroInstruccionesValue] =
        useState("0000");
    const [decodificadorValue, setDecodificadorValue] = useState("");
    const [registroEntradaValue, setRegistroEntradaValue] = useState("0000");
    const [acumuladorValue, setAcumuladorValue] = useState("0000");
    const [memoryDataValue, setMemoryDataValue] = useState(memoryData);

    //Cambio de las conexiones

    const changeEdgeWidth = useCallback(() => {
        if (currentIndex < updateOrder.length) {
            const edgeToUpdate = updateOrder[currentIndex]; // Get the specific edge to update

            setEdges((prevEdges) => {
                const newEdges = prevEdges.map((edge) => {
                    if (edge.id === edgeToUpdate) {
                        return {
                            ...edge,
                            style: { ...edge.style, strokeWidth: 4 },
                        }; // Increment width
                    }
                    return {
                        ...edge,
                        style: { ...edge.style, strokeWidth: 1 },
                    }; // Reset others to default
                });
                return newEdges;
            });

            // Move to the next edge in the updateOrder array
            setCurrentIndex((prevIndex) => prevIndex + 1);

            // If the current index reaches the end of the array, disable the button
            if (currentIndex + 1 === updateOrder.length) {
                setIsButtonDisabled(true);
            }
        }
    }, [currentIndex, updateOrder]);

    //Logica de la calculadora

    const changeCalcState = useCallback(() => {
        // Contador de programa
        if (
            clickCount === 2 ||
            clickCount === 13 ||
            clickCount === 24 ||
            clickCount === 35 ||
            clickCount === 45
        ) {
            setContProgramaValue((prevValue) => {
                const newValue = (parseInt(prevValue, 2) + 1)
                    .toString(2)
                    .padStart(4, "0");
                return newValue;
            });
        }

        // Registro de direcciones
        if (
            clickCount === 7 ||
            clickCount === 12 ||
            clickCount === 18 ||
            clickCount === 23 ||
            clickCount === 29 ||
            clickCount === 34 ||
            clickCount === 40 ||
            clickCount === 44
        ) {
            if (clickCount === 12 || clickCount === 23 || clickCount === 34 || clickCount === 44) {
                setRegistroDireccionesValue(() => {
                    const newValue = contProgramaValue;
                    return newValue;
                });
            } else {
                setRegistroDireccionesValue(() => {
                    const newValue = registroInstruccionesValue.slice(4, 8);
                    return newValue;
                });
            }
        }

        // Registro de datos
        if (
            clickCount === 4 ||
            clickCount === 9 ||
            clickCount === 15 ||
            clickCount === 20 ||
            clickCount === 26 ||
            clickCount === 31 ||
            clickCount === 37 ||
            clickCount === 42 ||
            clickCount === 47 
        ) {
            if (clickCount === 38 || clickCount === 42) {
                setRegistroDatosValue(() => {
                    const newValue = acumuladorValue;
                    return newValue;
                });
            } else {
                setRegistroDatosValue(() => {
                    for (let i = 0; i < memoryData.length; i++) {
                        if (memoryData[i].dir === registroDireccionesValue) {
                            const newValue = memoryData[i].content;
                            return newValue;
                        }
                    }
                });
            }
        }

        // Registro de instrucciones
        if (
            clickCount === 5 ||
            clickCount === 10 ||
            clickCount === 16 ||
            clickCount === 21 ||
            clickCount === 27 ||
            clickCount === 38 ||
            clickCount === 48
        ) {
            setRegistroInstruccionesValue(() => {
                const newValue = registroDatosValue;
                return newValue;
            });
        }

        // Decodificador
        if (
            clickCount === 6 ||
            clickCount === 17 ||
            clickCount === 28 ||
            clickCount === 39 ||
            clickCount === 45 ||
            clickCount === 49
        ) {
            setDecodificadorValue(() => {
                if (clickCount === 49) {
                    const newValue = "...";
                    return newValue;
                }else if (registroDatosValue.slice(0, 4) === "0000") {
                    const newValue = "+";
                    return newValue;
                } else if (registroDatosValue.slice(0, 4) === "0010") {
                    const newValue = "*";
                    return newValue;
                } else if (registroDatosValue.slice(0, 4) === "0110") {
                    const newValue = "M";
                    return newValue;
                
                } 
            });
        }

        //Registro de entrada
        if (clickCount === 10 || clickCount === 21 || clickCount === 32) {
            setRegistroEntradaValue(() => {
                const newValue = registroDatosValue;
                return newValue;
            });
        }

        //Acumulador
        if (clickCount === 11 || clickCount === 22 || clickCount === 33) {
            if(decodificadorValue === "+"){
                setAcumuladorValue((prevValue) => {
                    const newValue = (
                        parseInt(prevValue, 2) + parseInt(registroEntradaValue, 2)
                    ).toString(2).padStart(8, "0");
                    return newValue;
                });
            }else{
                setAcumuladorValue((prevValue) => {
                    const newValue = (
                        parseInt(prevValue, 2) * parseInt(registroEntradaValue, 2)
                    ).toString(2).padStart(8, "0");
                    return newValue;
                });
            }
        }

        //Tabla de memoria
        if (clickCount === 43) {
            setMemoryDataValue((prevValue) => {
                const newValue = prevValue.map((item) => {
                    if (item.dir === registroDireccionesValue) {
                        return { ...item, content: registroDatosValue.padStart(8, "0") };
                    }
                    return item;
                });
                return newValue;
            });
        }

    }, [clickCount]); // Add clickCount as a dependency

    //Logica de avance
    const handleButtonClick = useCallback(() => {
        setClickCount((prevCount) => prevCount + 1);
        changeEdgeWidth();
        changeCalcState(); // Call to update the counter value
    }, [changeEdgeWidth, changeCalcState]);

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
            data: { label: <ContPrograma value={contProgramaValue} /> },
            position: { x: 140, y: 140 },
            style: { width: 220, height: 60 },
        },
        {
            id: "registro-instrucciones",
            data: {
                label: (
                    <RegistroInstrucciones value={registroInstruccionesValue} />
                ),
            },
            position: { x: 140, y: 200 },
            style: { width: 220, height: 60 },
        },
        {
            id: "decodificador",
            data: { label: <Decodificador value={decodificadorValue} /> },
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
            data: { label: <Acumulador value={acumuladorValue} /> },
            position: { x: 550, y: 160 },
            style: { width: 200, height: 60 },
        },
        {
            id: "registro-entrada",
            data: { label: <RegistroEntrada value={registroEntradaValue} /> },
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
            data: {
                label: <RegistroDirecciones value={registroDireccionesValue} />,
            },
            position: { x: 240, y: 500 },
            style: { width: 220, height: 60 },
        },
        {
            id: "registro-datos",
            data: { label: <RegistroDatos value={registroDatosValue} /> },
            position: { x: 520, y: 500 },
            style: { width: 220, height: 60 },
        },
        {
            id: "tabla-memoria",
            data: { label: <TablaMemoria value={memoryDataValue} /> },
            position: { x: 390, y: 580 },
            style: { width: 220, height: 300 },
        },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="w-full p-4 flex flex-col gap-4 h-screen">
                <ReactFlowProvider>
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
                </ReactFlowProvider>
                <button onClick={handleButtonClick} disabled={isButtonDisabled} className="border-2 border-blue-600 bg-blue-300 h-16 w-40 mx-auto mb-3 rounded-md font-semibold">
                    {isButtonDisabled
                        ? "Proceso completado"
                        : "Siguiente"}
                </button>
            </div>
        </div>
    );
};

export default Home;

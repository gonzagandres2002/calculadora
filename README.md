
# Von Neumann Calculator Application

## Description

This project is a web-based simulation of a Von Neumann architecture machine, implemented using React, Next.js, and React Flow. It visualizes the connections between different components of the machine, such as the Control Unit, Arithmetic Logic Unit (ALU), Memory, and various registers, and allows for interactive data manipulation within the components.
Link: https://vonneumman.netlify.app/

## Features

- **Component Visualization**: Displays components such as the Control Unit, ALU, Memory, and registers.
- **Customizable Connections**: Interactive connections between components, visualized using React Flow.
- **Binary Arithmetic**: Supports binary addition and data transfer between components.
- **Edge Customization**: Allows manual control of edge appearance and width changes, including sequential updates triggered by a button.
- **Dynamic Register Updates**: Registers dynamically update their displayed values as operations occur.
- **Binary Value Representation**: Displays and operates on binary values throughout the system, reflecting the behavior of a Von Neumann machine.

## Components

- **Control Unit**: Manages the flow of data within the system.
- **ALU (Arithmetic Logic Unit)**: Performs arithmetic operations.
- **Memory**: Stores data and instructions.
- **Registers**: Include various registers like Cont. Programa, Acumulador, Registro de Instrucciones, Registro de Datos, and more.
- **Custom Edges**: Visual connections between components are customizable, with sequential updates handled via button interactions.

## Technologies Used

- **React**: For building the user interface.
- **Next.js**: Server-side rendering and file-based routing.
- **React Flow**: To visualize and manage the components and connections in a flow-based interface.
- **JavaScript**: Logic and functionality.
- **CSS**: Styling of components and layout.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/von-neumann-app.git
   cd von-neumann-app
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser:
   ```bash
   http://localhost:3000
   ```

## Usage

- The main interface displays all components of the Von Neumann machine.
- Click the button to trigger edge transitions and data flow between components.
- The components and connections update in real-time, reflecting the results of operations like binary addition and data transfers.

## Future Enhancements

- Additional operations in the ALU.
- Enhanced memory management and data visualization.
- Integration of more complex instructions and simulations.

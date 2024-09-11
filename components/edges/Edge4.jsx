const Edge4 = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    style = {},
    markerEnd,
  }) => {
  
    const midX0 = sourceX;
    const midY0 = sourceY + 27; 
  
    const midX1 = midX0 + 270;
    const midY1 = midY0;
  
    const midX2 = midX1;
    const midY2 = midY1 - 380;
  
    const edgePath = `M${sourceX},${sourceY} L${midX0},${midY0} L${midX1},${midY1} L${midX2},${midY2} L${targetX},${targetY+35}`;
  
  
    return (
      <g className="react-flow__edge">
        <path
          id={id}
          className="react-flow__edge-path"
          d={edgePath}  // Assign the custom path to the edge
          style={{ stroke: '#000', strokeWidth: 1, fill: 'none', ...style }} // Darker line
          markerEnd={markerEnd}  // Optional arrowhead at the end of the edge
        />
      </g>
    );
  };
  
  export default Edge4;
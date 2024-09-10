const Edge10 = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    style = {},
    markerEnd,
  }) => {
  
    const midX0 = sourceX + 30;
    const midY0 = sourceY ; 
  
    const midX1 = sourceX + 30;
    const midY1 = sourceY + 140;
  
    const midX2 = midX1 - 200;
    const midY2 = midY1;
  
    const midX3 = midX2;
    const midY3 = midY2 + 160;
  
    const edgePath = `M${sourceX},${sourceY} L${midX0},${midY0} L${midX1},${midY1} L${midX2},${midY2} L${midX3},${midY3} L${targetX},${targetY+35}`;
  
  
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
  
  export default Edge10;
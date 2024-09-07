
export default function Memory() {
  const memoryData = [
    { dir: '0000', content: '00000100' },
    { dir: '0001', content: '00000101' },
    { dir: '0010', content: '01100111' },
    { dir: '0011', content: '01110000' },
    { dir: '0100', content: '00001001' },
    { dir: '0101', content: '00000100' },
    { dir: '0110', content: '00000000' },
    { dir: '0111', content: '00000000' },
  ];
  return (
    <div className="relative">
      <h2 className="font-bold mb-2">Memoria</h2>
    </div>
  );
};

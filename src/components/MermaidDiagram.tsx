import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { v4 as uuidv4 } from 'uuid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'loose',
});

interface MermaidDiagramProps {
  chart: string;
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const id = useRef(`mermaid-${uuidv4()}`);

  useEffect(() => {
    if (chartRef.current) {
      mermaid.render(id.current, chart).then(({ svg }) => {
        if (chartRef.current) {
          chartRef.current.innerHTML = svg;
        }
      }).catch(e => console.error(e));
    }
  }, [chart]);

  return <div className="flex justify-center my-4" ref={chartRef} />;
}

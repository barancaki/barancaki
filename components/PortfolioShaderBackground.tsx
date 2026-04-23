import React from 'react';
import { MeshGradient } from '@paper-design/shaders-react';

const PortfolioShaderBackground: React.FC = () => {
  return (
    <div className="portfolio-shader-background fixed inset-0 pointer-events-none overflow-hidden">
      <MeshGradient
        className="absolute inset-0 h-full w-full"
        colors={['#000000', '#1a1a1a', '#333333', '#ffffff']}
        speed={1.0}
        backgroundColor="#000000"
        minPixelRatio={1}
        maxPixelCount={1600000}
      />
    </div>
  );
};

export default PortfolioShaderBackground;

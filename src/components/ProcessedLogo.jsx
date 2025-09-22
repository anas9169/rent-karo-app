import { useState, useEffect } from 'react';
import { processLogoImage } from '@/utils/backgroundRemoval';
import logo from '@/assets/RentKaro_Final_Logo.png';

const ProcessedLogo = ({ className, alt = "Rent Karo Logo", style = {}, enableHover = false }) => {
  const [processedLogo, setProcessedLogo] = useState(null);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const processLogo = async () => {
      try {
        const processed = await processLogoImage(logo);
        if (processed) {
          setProcessedLogo(processed);
        }
      } catch (error) {
        console.error('Failed to process logo:', error);
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, []);

  // Show original logo while processing or if processing failed
  if (isProcessing || !processedLogo) {
    const hoverClass = enableHover ? 'transition-transform duration-300 hover:animate-bounce' : '';
    
    return (
      <img 
        src={logo} 
        alt={alt} 
        className={`${className} ${hoverClass}`.trim()}
        style={{ ...style, imageRendering: 'crisp-edges', objectFit: 'cover' }}
      />
    );
  }

  const hoverClass = enableHover ? 'transition-transform duration-300 hover:animate-bounce' : '';

  return (
    <img 
      src={processedLogo} 
      alt={alt} 
      className={`${className} ${hoverClass}`.trim()}
      style={{ ...style, imageRendering: 'crisp-edges', objectFit: 'cover' }}
    />
  );
};

export default ProcessedLogo;
import { useState, useEffect } from 'react';
import { processLogoImage } from '@/utils/backgroundRemoval';
import logo from '@/assets/RentKaro_Final_Logo.jpg';

const ProcessedLogo = ({ className, alt = "Rent Karo Logo", style = {} }) => {
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
    return (
      <img 
        src={logo} 
        alt={alt} 
        className={className}
        style={{ ...style, imageRendering: 'crisp-edges' }}
      />
    );
  }

  return (
    <img 
      src={processedLogo} 
      alt={alt} 
      className={className}
      style={{ ...style, imageRendering: 'crisp-edges' }}
    />
  );
};

export default ProcessedLogo;
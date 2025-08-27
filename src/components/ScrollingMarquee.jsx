const ScrollingMarquee = ({ text, speed = 50 }) => {
  return (
    <div className="bg-muted border-y border-border py-2 overflow-hidden whitespace-nowrap">
      <div 
        className="inline-block text-sm text-muted-foreground animate-marquee"
        style={{
          animation: `marquee ${speed}s linear infinite`
        }}
      >
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee ${speed}s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingMarquee;
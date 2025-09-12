
const ScrollingMarquee = ({ text }) => {
  return (
    <div className="bg-muted border-y border-border py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap text-sm text-muted-foreground">
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
      </div>
    </div>
  );
};

export default ScrollingMarquee;

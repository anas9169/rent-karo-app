
const ScrollingMarquee = ({ text }) => {
  return (
    <div className="bg-muted border-y border-border py-2">
      <div className="text-center text-sm text-muted-foreground">
        {text}
      </div>
    </div>
  );
};

export default ScrollingMarquee;

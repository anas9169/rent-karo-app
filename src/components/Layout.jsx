
import Navbar from './Navbar';
import Footer from './Footer';
import GlobalChatModal from './GlobalChatModal';
import ScrollingMarquee from './ScrollingMarquee';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollingMarquee 
        text="Rent Karo connects renters and owners — we don't verify items or guarantee transactions, so please act responsibly." 
        speed={80}
      />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <GlobalChatModal />
    </div>
  );
};

export default Layout;

import Navbar from './Navbar';
import Footer from './Footer';
import GlobalChatModal from './GlobalChatModal';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <GlobalChatModal />
    </div>
  );
};

export default Layout;
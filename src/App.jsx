import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatProvider } from "./contexts/ChatContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ListingDetails from "./pages/ListingDetails";
import CreateListing from "./pages/CreateListing";
import OwnerDashboard from "./pages/OwnerDashboard";  
import RenterDashboard from "./pages/RenterDashboard";
import Messages from "./pages/Messages";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import SubscriptionPlans from "./pages/SubscriptionPlans";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import UserProfile from "./pages/UserProfile";
import Favorites from "./pages/Favorites";
import AccountSettings from "./pages/AccountSettings";
import Categories from "./pages/Categories";
import Locations from "./pages/Locations";
import BecomeAHost from "./pages/BecomeAHost";
import HelpCenter from "./pages/HelpCenter";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FavoritesProvider>
        <ChatProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/listing/:id" element={<ListingDetails />} />
              <Route path="/create-listing" element={<CreateListing />} />
              <Route path="/owner-dashboard" element={<OwnerDashboard />} />
              <Route path="/renter-dashboard" element={<RenterDashboard />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/subscription-plans" element={<SubscriptionPlans />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/settings" element={<AccountSettings />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/become-host" element={<BecomeAHost />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ChatProvider>
    </FavoritesProvider>
  </TooltipProvider>
</QueryClientProvider>
);

export default App;
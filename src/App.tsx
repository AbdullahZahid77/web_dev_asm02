import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Horilist from "./Horilist";
import Listings from "./Listings";
import ListingDetails from "./pages/ListingDetails";
import Booking from "./pages/Booking";
import Register from "./Register"; // Import Register Component
import Login from "./Login"; // Import Login Component
import AdminDashboard from "./admin/AdminDashboard";
import AdminListings from "./admin/AdminListings";
import AdminBookings from "./admin/AdminBookings";

const App: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      alert("Use code ABDULLAH-ZAHID for 30% OFF");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Horilist />
              <Listings />
            </>
          }
        />
        <Route path="/listings/:id" element={<ListingDetails />} />
        <Route path="/book/:id" element={<Booking />} />
        <Route path="/register" element={<Register />} /> {/* Register Route */}
        <Route path="/login" element={<Login />} /> {/* Login Route */}
        {/* Admin Panel Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/listings" element={<AdminListings />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

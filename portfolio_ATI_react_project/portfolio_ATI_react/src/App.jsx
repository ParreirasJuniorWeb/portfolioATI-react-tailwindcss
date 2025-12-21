import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/index";
import ErrorBoundary from "./components/ErrorBoundary";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Animação com a biblioteca AOS js
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Simula um carregamento
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {isLoading ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <Loader />
          </div>
        ) : (
          <>
            <Navbar />
            <main className="flex-1">
              <Index />
            </main>
            <Footer />
          </>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;

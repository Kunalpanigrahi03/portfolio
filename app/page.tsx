'use client';
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { MultiStepLoader} from "@/components/ui/multi-step-loader";
import { useState, useEffect } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  
  const loadingSteps = [
    { text: "Initializing" },
    { text: "Loading Resources" },
    { text: "Fetching Data" },
    { text: "Almost There" },
    { text: "Ready to Go!" },
  ];

  useEffect(() => {
    const loadingTime = setTimeout(() => {
      setLoading(false); 
    }, 10000);

    return () => clearTimeout(loadingTime);
  }, []);

  return (
    <>
      {loading ? (
        <MultiStepLoader loadingStates={loadingSteps} loading={loading} />
      ) : (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full">
            <FloatingNav navItems={navItems} />
            <Hero />
            <Grid />
            <RecentProjects />
            <Experience />
            <Footer />
          </div>
        </main>
      )}
    </>
  );
};

export default Home;

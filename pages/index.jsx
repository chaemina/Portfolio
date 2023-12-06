import React, { useState, useEffect } from "react";
import WebTemplates from "../components/templates/WebTemplates";
import MobileTemplates from "../components/templates/MobileTemplates";

const Index = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1230);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobileView ? (
        <main className="flex flex-col h-screen">
          <aside className="p-6">
            <WebTemplates isMobileView={isMobileView} />
            <MobileTemplates isMobileView={isMobileView} />
          </aside>
        </main>
      ) : (
        <main className="flex h-screen">
          <section className="w-3/5 flex justify-center">
            <WebTemplates />
          </section>
          <aside className="p-6 w-2/5">
            <MobileTemplates isMobileView={isMobileView} />
          </aside>
        </main>
      )}
    </>
  );
};

export default Index;

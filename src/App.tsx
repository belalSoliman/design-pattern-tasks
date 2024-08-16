import React from "react";

import Header from "./components/Header";

import Toast from "./components/toast-task/ToastSection";

const App: React.FC = () => {
  return (
    <div className="container py-3">
      <Header />

      <div className="flex flex-column sm:flex-row gap-3"></div>

      <Toast />
    </div>
  );
};

export default App;

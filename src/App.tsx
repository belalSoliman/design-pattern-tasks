import React from "react";

// components
import Header from "./components/Header";

import Toast from "./components/toast-task/ToastSection";
import Iterator from "./components/range-task/Iterator";

const App: React.FC = () => {
  return (
    <div className="container py-3">
      <Header />

      <div className="flex flex-column sm:flex-row gap-3">
        <Iterator />
      </div>

      <Toast />
    </div>
  );
};

export default App;

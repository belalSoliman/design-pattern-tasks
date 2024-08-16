import React from "react";

// components
import { Button } from "primereact/button";
import { ToastContainer } from "./ToastContainer";

// toast service
import { toast, clearToasts } from "../../utils/toastService";

const Toast: React.FC = () => {
  return (
    <div className="notification-container mt-8 border-2 border-pink-300 rounded-lg shadow-lg">
      <div className="notification-header flex flex-col gap-4 p-5 mb-4 rounded-t-lg bg-pink-100">
        <p className="m-0 text-base font-medium text-pink-600">
          Observer Design Pattern Implementation.
        </p>
      </div>

      <div className="actions-buttons flex flex-wrap justify-content-start align-items-center gap-2 p-3">
        <Button
          label="Default"
          size="small"
          onClick={() => toast("default", "Hi, I am a default toast.")}
        />
        <Button
          icon="pi pi-check"
          label="Success"
          size="small"
          severity="success"
          onClick={() => toast("success", "Hi, I am a success toast.")}
        />
        <Button
          icon="pi pi-info-circle"
          label="Info"
          size="small"
          severity="info"
          onClick={() => toast("info", "Hi, I am a info toast.")}
        />
        <Button
          icon="pi pi-exclamation-triangle"
          label="Warning"
          size="small"
          severity="warning"
          onClick={() => toast("warning", "Hi, I am a warning toast.")}
        />
        <Button
          icon="pi pi-times"
          label="Error"
          size="small"
          severity="danger"
          onClick={() => toast("error", "Hi, I am a error toast.")}
        />
        <Button
          icon="pi pi-refresh"
          label="Dismiss All"
          size="small"
          severity="danger"
          onClick={() => clearToasts()}
        />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Toast;

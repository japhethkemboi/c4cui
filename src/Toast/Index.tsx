"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../Button/Index";
import { MdClose } from "react-icons/md";
import { PiCheckCircle, PiInfo, PiWarning, PiXCircle } from "react-icons/pi";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
}

let addToastToContainer: ((toast: Toast) => void) | null = null;

export const toast = {
  success: (message: string) => addToastToContainer?.({ id: generateId(), message, type: "success" }),
  error: (message: string) => addToastToContainer?.({ id: generateId(), message, type: "error" }),
  info: (message: string) => addToastToContainer?.({ id: generateId(), message, type: "info" }),
  warning: (message: string) => addToastToContainer?.({ id: generateId(), message, type: "warning" }),
};

const generateId = () => Math.random().toString(36).substring(7);

export const ToastContainer = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    addToastToContainer = (newToast) => {
      setToasts((prev) => [...prev, newToast]);
    };
  }, []);

  useEffect(() => {
    if (toasts.length > 0) {
      const timeout = setTimeout(() => {
        setToasts((prev) => prev.slice(1));
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [toasts]);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="fixed z-40 right-2 top-2 flex flex-col w-auto gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex gap-2 w-auto items-center p-2 rounded-lg shadow-md transition-opacity duration-300 ${
            toast.type === "success"
              ? "text-green-500 bg-green-50"
              : toast.type === "error"
              ? "text-red-500 bg-red-50"
              : toast.type === "info"
              ? "text-blue-500 bg-blue-50"
              : toast.type === "warning"
              ? "text-yellow-500 bg-yellow-50"
              : ""
          }`}
        >
          {toast.type === "success" ? (
            <PiCheckCircle size={18} />
          ) : toast.type === "error" ? (
            <PiXCircle size={18} />
          ) : toast.type === "info" ? (
            <PiInfo size={18} />
          ) : toast.type === "warning" ? (
            <PiWarning size={18} />
          ) : null}

          <p className="flex w-fit">{toast.message}</p>

          <Button
            outline
            className="border-none rounded-full p-2"
            icon={<MdClose size={18} />}
            onClick={() => removeToast(toast.id)}
          />
        </div>
      ))}
    </div>
  );
};

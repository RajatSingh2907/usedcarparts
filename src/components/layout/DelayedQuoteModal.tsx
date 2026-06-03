"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";

const storageKey = "parts-central-quote-modal-dismissed";

const VehicleSelectorForm = dynamic(
  () => import("@/components/forms/VehicleSelectorForm"),
  {
    loading: () => (
      <div className="w-full rounded-[28px] border border-white/10 bg-slate-900/90 p-8 text-center text-sm font-semibold text-slate-300 shadow-2xl">
        Loading quote form...
      </div>
    ),
  }
);

export default function DelayedQuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = useCallback(() => {
    window.sessionStorage.setItem(storageKey, "true");
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (window.sessionStorage.getItem(storageKey)) {
      return;
    }

    const timeout = window.setTimeout(() => setIsOpen(true), 5000);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeModal, isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-3 backdrop-blur-sm sm:p-6">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close quote form"
        onClick={closeModal}
      />
      <div className="relative my-auto w-full max-w-xl">
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-slate-950/75 text-white shadow-lg backdrop-blur transition hover:bg-slate-900"
          aria-label="Close quote form"
        >
          <X size={18} />
        </button>
        <VehicleSelectorForm formId="delayed-quote-form" />
      </div>
    </div>
  );
}

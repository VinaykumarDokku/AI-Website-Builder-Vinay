"use client";

import React from "react";

export default function GenerationLoader({
  message = "Generating your website...",
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "16px",
        borderRadius: "8px",
        backgroundColor: "#f3f4f6",
        color: "#111827",
      }}
    >
      <span aria-hidden="true">⏳</span>
      <span>{message}</span>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function PromptCharacterCounter({
  maxLength = 2000,
  onPromptChange,
}) {
  const [prompt, setPrompt] = useState("");

  const remaining = maxLength - prompt.length;

  function handleChange(event) {
    const value = event.target.value.slice(0, maxLength);
    setPrompt(value);
    onPromptChange?.(value);
  }

  return (
    <div className="w-full space-y-2">
      <label
        htmlFor="ai-prompt"
        className="block text-sm font-medium"
      >
        Describe your website
      </label>

      <textarea
        id="ai-prompt"
        value={prompt}
        onChange={handleChange}
        maxLength={maxLength}
        rows={5}
        placeholder="Describe the website you want to build..."
        className="w-full rounded-lg border p-3 text-sm"
      />

      <div
        className="flex justify-between text-sm"
        aria-live="polite"
      >
        <span>{prompt.length} / {maxLength} characters</span>
        <span>
          {remaining} remaining
        </span>
      </div>
    </div>
  );
}

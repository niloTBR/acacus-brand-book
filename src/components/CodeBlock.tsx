"use client";

import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "css",
  filename,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden border border-[#001e3c]/10 bg-[#0a0a0a]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#0a0a0a] border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          {filename && (
            <span className="text-xs text-white/40 ml-3 font-mono">{filename}</span>
          )}
        </div>
        <button
          onClick={copyToClipboard}
          className={cn(
            "text-xs px-3 py-1 rounded-md transition-all",
            copied
              ? "bg-emerald-500/20 text-emerald-400"
              : "bg-white/5 text-white/40 hover:text-white/70 hover:bg-white/10"
          )}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code */}
      <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cn("p-4 overflow-x-auto text-sm", className)}
            style={{ ...style, background: "transparent" }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell pr-4 text-white/20 select-none text-right">
                    {i + 1}
                  </span>
                )}
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

interface InlineCodeProps {
  children: string;
}

export function InlineCode({ children }: InlineCodeProps) {
  return (
    <code className="px-1.5 py-0.5 rounded bg-[#001e3c]/5 text-[#001e3c] text-sm font-mono">
      {children}
    </code>
  );
}

interface TokenDisplayProps {
  name: string;
  value: string;
  preview?: "color" | "font" | "spacing";
}

export function TokenDisplay({ name, value, preview }: TokenDisplayProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(`var(${name})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={copy}
      className="w-full flex items-center gap-4 p-3 rounded-lg border border-[#001e3c]/5 hover:border-[#001e3c]/20 hover:bg-[#001e3c]/[0.02] transition-all text-left group"
    >
      {preview === "color" && (
        <span
          className="w-10 h-10 rounded-lg shrink-0 border border-[#001e3c]/10"
          style={{ backgroundColor: value }}
        />
      )}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-mono text-[#001e3c] truncate">{name}</p>
        <p className="text-[10px] font-mono text-[#001e3c]/40 truncate">{value}</p>
      </div>
      <span className={cn(
        "text-[10px] opacity-0 group-hover:opacity-100 transition-opacity",
        copied ? "text-emerald-500" : "text-[#001e3c]/40"
      )}>
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}

import React from "react";

declare namespace CopyToClipboard{
  interface Options {
    debug?: boolean;
    format?: "text/html" | "text/plain";
    message?: string;
  }
  
  interface Props {
    children: React.ReactNode;
    text: string;
    onCopy?(text: string, result: boolean): void;
    options?: Options;
  }
}

declare const CopyToClipboard : React.FC<CopyToClipboard.Props>

export { CopyToClipboard }

// Type definitions for react-copy-clipboard

declare module 'react-copy-to-clipboard' {
  export class CopyToClipboard extends React.PureComponent<{
    text: string;
    children: React.ReactNode;
    onCopy?: (text: string, result: boolean) => void;
    options?: {
      debug: boolean;
      message: string;
      format: srtring;
    };
  }> {}
}

// @ts-nocheck
import React, { ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  errorStr: string;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      errorStr: ""
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorStr: error.toString() };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", color: "red", backgroundColor: "white", zIndex: 99999, position: "relative" }}>
          <h1>Sorry.. there was an error</h1>
          <pre>{this.state.errorStr}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

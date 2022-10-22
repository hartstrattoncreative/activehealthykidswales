import * as React from 'react';

export type ErrorBoundaryProps = {
  children: React.ReactNode;
  FallbackComponent?: React.ComponentType<any>;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  State
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // log.error(error.message, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.FallbackComponent;
      return FallbackComponent ? <FallbackComponent /> : null;
    }

    return this.props.children;
  }
}

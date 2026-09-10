import { AlertTriangle, Info, XCircle, X } from 'lucide-react';
import * as React from 'react';

import { cn } from './utils';

export type ErrorBannerVariant = 'info' | 'warning' | 'error';

interface IErrorBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The message to display in the banner.
   */
  message: React.ReactNode;
  /**
   * The severity of the message. Controls the icon and colour.
   *
   * @default 'error'
   */
  variant?: ErrorBannerVariant;
  /**
   * Called when the user dismisses the banner. When omitted the banner is not
   * dismissable and no close button is rendered.
   */
  onDismiss?: () => void;
}

const variantIcon: Record<ErrorBannerVariant, React.ReactNode> = {
  info: <Info data-size="md" />,
  warning: <AlertTriangle data-size="md" />,
  error: <XCircle data-size="md" />,
};

const variantLabel: Record<ErrorBannerVariant, string> = {
  info: 'Information',
  warning: 'Warning',
  error: 'Error',
};

const variantClass: Record<ErrorBannerVariant, string> = {
  info: 'border-info/40 bg-info/12 [&_[data-slot=error-banner-icon]]:text-info',
  warning:
    'border-warning/40 bg-warning/12 [&_[data-slot=error-banner-icon]]:text-warning',
  error:
    'border-destructive/40 bg-destructive/12 [&_[data-slot=error-banner-icon]]:text-destructive',
};

/**
 * A dismissable inline banner for surfacing scoped messages (info / warning /
 * error) inside a dialog body, side panel or any other React tree.
 *
 * For app-global messages that are not tied to a specific open surface, use
 * `Notification` from `@jupyterlab/apputils` instead.
 */
export function ErrorBanner({
  message,
  variant = 'error',
  onDismiss,
  className,
  ...props
}: IErrorBannerProps) {
  return (
    <div
      role={variant === 'error' ? 'alert' : 'status'}
      data-slot="error-banner"
      data-variant={variant}
      className={cn(
        'flex items-start gap-2 rounded-md border border-transparent px-3 py-2 text-[0.8125rem] leading-[1.4] text-foreground',
        variantClass[variant],
        className,
      )}
      {...props}
    >
      <span
        data-slot="error-banner-icon"
        className="flex shrink-0 items-center [&_svg]:size-4"
        aria-hidden="true"
      >
        {variantIcon[variant]}
      </span>
      <span className="sr-only">{variantLabel[variant]}:</span>
      <span className="min-w-0 flex-1 wrap-break-word">{message}</span>
      {onDismiss && (
        <button
          type="button"
          data-slot="error-banner-dismiss"
          className="flex shrink-0 cursor-pointer items-center border-0 bg-transparent p-0 text-inherit opacity-70 transition-opacity hover:opacity-100 focus-visible:opacity-100 [&_svg]:size-3.5"
          aria-label="Dismiss"
          onClick={onDismiss}
        >
          <X data-size="sm" />
        </button>
      )}
    </div>
  );
}

export default ErrorBanner;

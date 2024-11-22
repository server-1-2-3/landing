"use client";

import { DirectionProvider } from '@radix-ui/react-direction';

/**
 * This wrapper will wraps the server Direction wrapper
 * to make shadcn elements RTL.
 */

export function RTLDirectionWrapper({ children }: { children: React.ReactNode }) {
  return (<DirectionProvider dir="rtl">{children}</DirectionProvider>)
}
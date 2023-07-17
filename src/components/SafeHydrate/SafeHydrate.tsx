import { ReactNode } from 'react'

export const SafeHydrate = ({ children }: { children: ReactNode }) => (
  <div suppressHydrationWarning>
    {typeof document === 'undefined' ? null : children}
  </div>
)

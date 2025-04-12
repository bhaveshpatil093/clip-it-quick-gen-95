
import React from 'react';
import { LucideProps } from 'lucide-react';

export const AspectRatio = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }: LucideProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
};

export default AspectRatio;

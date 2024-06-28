import React from 'react';

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className='progress-bar-container'>
      <div className='progress-bar' style={{ width: `${progress}%` }}></div>
    </div>
  );
}

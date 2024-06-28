import React from 'react';

interface ProgressBarProps {
  progress: number;
  links: string[];
}

export default function ProgressBar({ progress, links }: ProgressBarProps) {
  return (
    <div className='progress-bar-wrapper'>
      <div className='progress-bar-container'>
        <div className='progress-bar' style={{ width: `${progress}%` }}></div>
        <div className='notches'>
          {links.map((link, index) => (
            <a
              key={index}
              href={link}
              className='notch'
              style={{ left: `calc(${index * 33}% - 2.5px)` }} // Adjust position
            ></a>
          ))}
        </div>
      </div>
    </div>
  );
}

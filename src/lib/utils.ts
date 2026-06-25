import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDriveImageLink = (url: string) => {
  try {
    if (!url) return '';
    // Handle already direct links
    if (url.includes('googleusercontent.com') || url.includes('export=view') || url.includes('sz=w1000')) return url;

    // Extract ID from standard share links
    let id = '';
    const match1 = url.match(/\/d\/(.+?)\//);
    const match2 = url.match(/id=(.+?)(&|$)/);

    if (match1) id = match1[1];
    else if (match2) id = match2[1];

    if (id) return `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
    return url;
  } catch {
    return url;
  }
};

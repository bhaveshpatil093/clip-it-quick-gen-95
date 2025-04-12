
export interface Highlight {
  id: string;
  startTime: number;
  endTime: number;
  videoUrl: string;
  thumbnail?: string;
  summary: string;
}

export interface ProcessingStatus {
  status: 'idle' | 'uploading' | 'processing' | 'complete' | 'error';
  progress: number;
  message: string;
}

export interface VideoData {
  file: File;
  url: string;
  duration: number;
  name: string;
}

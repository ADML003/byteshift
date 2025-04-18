export interface Video {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  publicId: string;
  originalSize: number;
  compressedSize: number;
  duration: number;
}

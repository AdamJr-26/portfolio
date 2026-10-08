const CLOUDINARY_BASE = 'https://res.cloudinary.com/dy1od3qwx/image/upload';

/**
 * Builds a Cloudinary delivery URL. Images are always served in the best format
 * and quality for the browser; pass extra transformations to resize or crop.
 */
export function cld(publicId: string, transformation?: string) {
  const t = ['f_auto', 'q_auto', transformation].filter(Boolean).join(',');
  return `${CLOUDINARY_BASE}/${t}/${publicId}`;
}

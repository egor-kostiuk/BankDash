import { useCallback } from 'react';
import { toast } from 'react-toastify';

export const useCopyToClipboard = () => {
  const copyToClipboard = useCallback((text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success('Number copied to clipboard');
      console.log('Number copied to clipboard:', text);
    }).catch(err => {
      toast.error('Failed to copy');
      console.error('Failed to copy: ', err);
    });
  }, []);

  return { copyToClipboard };
}
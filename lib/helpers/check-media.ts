export const isImage = (url: string) => {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];
  const extension = url.split('.').pop()?.toLowerCase();
  if (extension && !extension.includes('.')) {
    return url.includes('yandex.net') && url.includes('images-thumbs');
  }
  return imageExtensions.includes('.' + extension);
};

export const isVideo = (url: string) => {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
  const extension = url.split('.').pop()?.toLowerCase();
  return videoExtensions.includes('.' + extension);
};

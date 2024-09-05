export const useDateFormat = (timestamp) => {
  if (timestamp && timestamp.seconds) {
    const date = new Date(timestamp.seconds * 1000);
    return date.toISOString().split('T')[0].replace(/-/g, '/');
  }
  return null;
};
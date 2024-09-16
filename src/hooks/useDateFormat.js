export const useDateFormat = (timestamp) => {
  if (timestamp && timestamp.seconds) {
    const date = new Date(timestamp.seconds * 1000);
    const timeZoneOffset = date.getTimezoneOffset() * 60000;
    const adjustedDate = new Date(date.getTime() - timeZoneOffset);

    return adjustedDate.toISOString().split('T')[0].replace(/-/g, '/');
  }
  return null;
};
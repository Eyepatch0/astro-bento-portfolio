export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getCurrentTimeInEastern(): Date {
  // Get the current time in UTC
  const now = new Date();

  // Get the time in the Eastern Time Zone (ET)
  const options: Intl.DateTimeFormatOptions = { timeZone: "America/New_York" };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const parts = formatter.formatToParts(now);

  // Extract the hour, minute, and second parts
  const hour = parseInt(parts.find(p => p.type === "hour")?.value || "0", 10);
  const minute = parseInt(parts.find(p => p.type === "minute")?.value || "0", 10);
  const second = parseInt(parts.find(p => p.type === "second")?.value || "0", 10);

  // Create a new Date object with the adjusted time
  const easternTime = new Date(now);
  easternTime.setUTCHours(hour, minute, second);

  return easternTime;
}

export function formatTimeForEastern(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // 12-hour format with AM/PM
    timeZone: "America/New_York",
    timeZoneName: "short" // Automatically detects EST or EDT
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}

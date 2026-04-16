export const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];

/** Returns a human-readable duration string, e.g. "1 year 3 months". */
export function getDurationStr(start: Date, end: Date): string {
    const monthsDiff =
        (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth());
    if (monthsDiff <= 0) return "";
    const years = Math.floor(monthsDiff / 12);
    const months = monthsDiff % 12;
    const parts: string[] = [];
    if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
    if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);
    return parts.join(" ");
}

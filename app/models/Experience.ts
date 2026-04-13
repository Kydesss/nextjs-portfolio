const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

interface ExperienceQueryResultData {
    _id?: string;
    companyName?: string;
    jobTitle?: string;
    companyLogo?: string;
    location?: string;
    isCurrent?: boolean;
    startDate?: string;
    endDate?: string;
    details?: string;
    tags?: string[];
}

class Experience implements ExperienceQueryResultData {
    _id?: string;
    companyName?: string;
    jobTitle?: string;
    companyLogo?: string;
    location?: string;
    isCurrent?: boolean;
    startDate?: string;
    endDate?: string;
    details?: string;
    tags?: string[];

    constructor(data: ExperienceQueryResultData) {
        this._id = data._id;
        this.companyName = data.companyName;
        this.jobTitle = data.jobTitle;
        this.companyLogo = data.companyLogo;
        this.location = data.location;
        this.isCurrent = data.isCurrent;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.details = data.details;
        this.tags = data.tags;
    }

    dateDuration(): string {
        if (!this.startDate) return "—";
        const start = new Date(this.startDate);
        const rawEndDate = this.isCurrent ? "Present" : (this.endDate ?? null);
        const end =
            rawEndDate && rawEndDate !== "Present"
                ? new Date(rawEndDate)
                : this.isCurrent
                  ? new Date()
                  : null;

        const getDurationStr = (s: Date | null, e: Date | null) => {
            if (!s || !e) return "";
            const monthsDiff =
                (e.getFullYear() - s.getFullYear()) * 12 +
                (e.getMonth() - s.getMonth());
            if (monthsDiff <= 0) return "";
            const years = Math.floor(monthsDiff / 12);
            const monthsOnly = monthsDiff % 12;
            const parts: string[] = [];
            if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
            if (monthsOnly > 0)
                parts.push(`${monthsOnly} month${monthsOnly > 1 ? "s" : ""}`);
            return parts.join(" ");
        };

        const durationStr =
            rawEndDate === "Present"
                ? getDurationStr(start, new Date())
                : getDurationStr(start, end);

        const jobDateRange = start
            ? `${months[start.getMonth()]} ${start.getFullYear()} - ${
                  rawEndDate === "Present"
                      ? "Present"
                      : end
                        ? `${months[end.getMonth()]} ${end.getFullYear()}`
                        : "—"
              }${durationStr ? ` (${durationStr})` : ""}`
            : "—";
        return jobDateRange;
    }
}

export default Experience;

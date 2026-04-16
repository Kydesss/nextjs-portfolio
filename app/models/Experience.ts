import { MONTHS, getDurationStr } from "../utils/dateUtils";

class Experience {
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

    constructor(data: Record<string, unknown>) {
        Object.assign(this, data);
    }

    /** Returns a formatted date range with duration, e.g. "Jan 2022 - Present (1 year 3 months)". */
    dateDuration(): string {
        if (!this.startDate) return "—";
        const start = new Date(this.startDate);
        const isPresent = this.isCurrent || !this.endDate;
        const end = isPresent ? new Date() : new Date(this.endDate!);
        const endLabel = isPresent
            ? "Present"
            : `${MONTHS[end.getMonth()]} ${end.getFullYear()}`;
        const duration = getDurationStr(start, end);
        return `${MONTHS[start.getMonth()]} ${start.getFullYear()} - ${endLabel}${duration ? ` (${duration})` : ""}`;
    }
}

export default Experience;

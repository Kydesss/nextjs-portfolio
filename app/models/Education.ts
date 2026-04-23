import type { RichContent } from "@wix/ricos";
import { MONTHS, getDurationStr } from "../utils/dateUtils";

class Education {
    _id?: string;
    degreeType?: string;
    instituteName?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    instituteLogo?: string;
    richcontent?: RichContent;

    constructor(data: Record<string, unknown>) {
        Object.assign(this, data);
    }

    /** Returns a formatted date range with duration, e.g. "Sep 2019 - Apr 2023 (3 years 7 months)". */
    dateRange(): string {
        if (!this.startDate || !this.endDate) return "—";
        const start = new Date(this.startDate);
        const end = new Date(this.endDate);
        const duration = getDurationStr(start, end);
        return `${MONTHS[start.getMonth()]} ${start.getFullYear()} - ${MONTHS[end.getMonth()]} ${end.getFullYear()}${duration ? ` (${duration})` : ""}`;
    }
}

export default Education;

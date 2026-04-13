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

interface EducationQueryResultData {
    _id?: string;
    degreeType?: string;
    instituteName?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    instituteLogo?: string;
    richcontent?: string;
}

class Education implements EducationQueryResultData {
    _id?: string;
    degreeType?: string;
    instituteName?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    instituteLogo?: string;
    richcontent?: string;

    constructor(data: EducationQueryResultData) {
        this._id = data._id;
        this.degreeType = data.degreeType;
        this.instituteName = data.instituteName;
        this.location = data.location;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.instituteLogo = data.instituteLogo;
        this.richcontent = data.richcontent;
    }

    dateRange(): string {
        if (!this.startDate) return "—";
        if (!this.endDate) return "—";
        const start = new Date(this.startDate);
        const end = new Date(this.endDate);

        const getDurationStr = (s: Date, e: Date | null) => {
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

        const durationStr = getDurationStr(start, end);

        const jobDateRange = start
            ? `${months[start.getMonth()]} ${start.getFullYear()} - ${`${months[end.getMonth()]} ${end.getFullYear()}`}${durationStr ? ` (${durationStr})` : ""}`
            : "—";
        return jobDateRange;
    }
}

export default Education;

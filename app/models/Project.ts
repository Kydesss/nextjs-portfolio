class Project {
    _id?: string;
    projectName?: string;
    description?: string;
    youtubeVideoEmbed?: string;
    githubRepositoryLink?: string;
    liveDemo?: string;
    bulletPoints?: string;
    tags?: string[];
    projectImage?: string;
    imageWidth?: number;
    imageHeight?: number;
    category?: string;
    slug?: string;
    date?: string;

    constructor(data: Record<string, unknown>) {
        Object.assign(this, data);
    }
}

export default Project;

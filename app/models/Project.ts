interface ProjectQueryResultData {
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
}

class Project implements ProjectQueryResultData {
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

    constructor(data: ProjectQueryResultData) {
        this._id = data._id;
        this.projectName = data.projectName;
        this.description = data.description;
        this.youtubeVideoEmbed = data.youtubeVideoEmbed;
        this.githubRepositoryLink = data.githubRepositoryLink;
        this.liveDemo = data.liveDemo;
        this.bulletPoints = data.bulletPoints;
        this.tags = data.tags;
        this.projectImage = data.projectImage;
        this.imageWidth = data.imageWidth;
        this.imageHeight = data.imageHeight;
        this.category = data.category;
        this.slug = data.slug;
    }
}

export default Project;

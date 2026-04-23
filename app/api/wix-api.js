"use server";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { items } from "@wix/data";

const wixClient = createClient({
    auth: OAuthStrategy({
        clientId: process.env.WIX_STUDIO_HEADLESS_CMS_CLIENT_ID,
    }),
    modules: { items },
});

export async function fetchExperienceData() {
    const queryResults = await wixClient.items.query("WorkExperience").find();
    return queryResults.items;
}

export async function fetchEducationData() {
    const queryResults = await wixClient.items
        .query("EducationCollection")
        .find();
    return queryResults.items;
}

export async function fetchProjectData() {
    const queryResults = await wixClient.items.query("Projects").find();
    return queryResults.items;
}

export async function fetchProjectBySlug(slug) {
    const result = await wixClient.items
        .query("Projects")
        .eq("slug", slug)
        .find();

    return result.items[0] || null;
}

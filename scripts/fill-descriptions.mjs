import { createClient, ApiKeyStrategy } from "@wix/sdk";
import { items } from "@wix/data";

const wixClient = createClient({
  auth: ApiKeyStrategy({
    siteId: "f5422054-37e1-40ce-8981-0220a685ff0d",
    apiKey: "IST.eyJraWQiOiJQb3pIX2FDMiIsImFsZyI6IlJTMjU2In0.eyJkYXRhIjoie1wiaWRcIjpcIjk1NmJhZmMxLTBkNTUtNDVkOC1hNmE3LWI4ODRkNjdkMjg3NlwiLFwiaWRlbnRpdHlcIjp7XCJ0eXBlXCI6XCJhcHBsaWNhdGlvblwiLFwiaWRcIjpcIjFhYjEwY2JjLWI0ODgtNGZhYS1hZmIxLWQ3ZjUzMTRiZmUyOVwifSxcInRlbmFudFwiOntcInR5cGVcIjpcImFjY291bnRcIixcImlkXCI6XCI4NjI3NDhkMy04YjMxLTRhNDctYjJjNS01NWZmMmFlNjY3OTFcIn19IiwiaWF0IjoxNzc3NzMwODQyfQ.hqdiTpmof7BPrK2Ud6HBkwP_gLAtsGggwp990CERKnhnWWz6SQU8XQJxzt-LvnhegQj2gmdbG4qpmLGhFqbAqS1zQGl0IUIuz-NZhsSiEcXoGoDiC-d32r_HdQkO2V3M4E_duSbsVZT3w01S19aaFPiRdgUZCYm1xWKgrCN18Qh9g6fAdoS-mSHzsGHhiW5Iw6EW4OiKA_S-7SiDNwXCl_OomYj0xE9iCpvpCXDyFia_f99uEHbp0FYqFc2YpvVT0vWD1cJsj9qU4WE3Qn7IMQQQGYZsORU_0rggghTl1k9rqSWafMbPbvPgNKftMLFge03cRswYIyFWuN7PXXxjwQ",
  }),
  modules: { items },
});

function makeDoc(heading, body) {
  return {
    documentStyle: {},
    nodes: [
      {
        id: "h1",
        type: "HEADING",
        headingData: { level: 2, textStyle: { textAlignment: "AUTO" } },
        nodes: [{ id: "", type: "TEXT", nodes: [], textData: { decorations: [{ type: "BOLD", fontWeightValue: 700 }], text: heading } }],
      },
      { id: "pgap", type: "PARAGRAPH", paragraphData: { indentation: 0, textStyle: { textAlignment: "AUTO" } }, nodes: [] },
      {
        id: "p1",
        type: "PARAGRAPH",
        paragraphData: { indentation: 0, textStyle: { textAlignment: "AUTO" } },
        nodes: [{ id: "", type: "TEXT", nodes: [], textData: { decorations: [], text: body } }],
      },
      { id: "ptrail", type: "PARAGRAPH", paragraphData: { indentation: 0, textStyle: { textAlignment: "AUTO" } }, nodes: [] },
    ],
  };
}

const projects = [
  {
    id: "72d327e3-531c-4afa-9c07-bc5432d98b69",
    heading: "Social Media Event Poster Design",
    body: `Designed this Instagram post for the UTM Filipino Student Association's Asian Airlines event, a cultural night co-hosted with ISA UTM and UTM VSA at the University of Toronto Mississauga. The brief required communicating all key event details — date, time, location, and activity lineup — while feeling festive enough to stop users mid-scroll. I used Adobe Photoshop to build the design around a vibrant teal background with flowing white wave patterns that evoke movement and energy, pairing it with oversized bold white typography for "ASIAN AIRLINES" to anchor the visual hierarchy. A globe and airplane icon reinforced the travel theme, while the activity line — DINNER · GAMES · MUSIC · RAFFLE — was set in smaller spaced type beneath the event details to layer information without cluttering the focal text. The logos of all three co-hosting organizations were placed cleanly in the top-left corner, and a "SWIPE FOR DETAILS" call-to-action was added to drive engagement with follow-up story slides. Feedback from the UTM FSA team was incorporated to refine the composition and overall visual impact, resulting in a post that received positive reception from the UTM community and contributed to strong event attendance.`,
  },
  {
    id: "399be0a7-9b9b-4859-b7c8-fecf1fb73d6e",
    heading: "Instagram Story Design",
    body: `Designed this Instagram Story for the UTM Filipino Student Association to announce the results of the 2021–2022 executive team elections. The challenge was presenting a large volume of name-and-role information in a format that felt organized, on-brand, and visually engaging on a mobile screen. I chose a dark charcoal background as the base to let the content breathe, using bold white sans-serif typography to establish a clear hierarchy between role titles and elected members' names. A subtle large-scale "FSA" watermark in the background adds depth without competing with the foreground content, while geometric yellow and blue circle accents — consistent with UTM FSA's brand palette — frame the composition and break up the vertical layout. The story was optimized for mobile portrait viewing, with generous spacing between sections to make each role and name easy to read at a glance. Applied branding guidelines and consistent color schemes to maintain organizational identity across social media platforms, resulting in a polished, on-brand announcement that clearly communicated the election outcomes to the broader UTM FSA audience.`,
  },
  {
    id: "ce97cf38-fd2d-40e0-9d2f-e3e4666d4f61",
    heading: "Event Promotion Poster Design",
    body: `Designed this Instagram post for the UTM Filipino Student Association to promote a screening of The Kingmaker, a documentary about Imelda Marcos, timed alongside the 2022 Philippine presidential elections. The design needed to communicate the film's gravitas while clearly conveying event logistics to a student audience. I used Adobe Photoshop to build an atmospheric editorial composition: a faded gray gradient background evokes the documentary's serious, political tone, while a centered gold-framed portrait of Imelda Marcos in a red dress immediately signals the subject matter. The typography pairs an elegant serif title for "The Kingmaker" with lighter-weight sans-serif for the subtitle and event details, balancing formality with readability. A red color highlight on the venue callout draws the eye to the location, and a brief contextual note about the Philippine elections grounds the screening's relevance for the audience. The UTM FSA logo sits in the top-left to maintain brand presence without disrupting the editorial aesthetic. I collaborated with event organizers to ensure all promotional objectives were met, and the post effectively communicated the event's purpose and encouraged attendance from the UTM community.`,
  },
  {
    id: "dd44e1be-d060-4a3a-a51b-34b2244a310e",
    heading: "Social Media Event Poster Design",
    body: `Designed this Instagram post for the UTM Filipino Student Association's Coffee House event, a Valentine's Day virtual talent showcase held on Discord inviting students to perform, watch, and celebrate together. The design had to feel warm, romantic, and inviting while communicating multiple details across a two-panel layout. I used Adobe Photoshop to build a rich red-to-orange gradient background accented with cherry blossom elements and a romantic couple silhouette, creating an immediately warm and festive atmosphere that fit the Valentine's Day theme. The left panel carries the event title — "A Cup of Love Between You & Us" — along with the date, time, and platform in clean left-aligned typography, while a scroll-style card on the right holds the event description and calls-to-action in a contrasting white layout, adding visual structure to the information-heavy side of the post. Both UTM FSA and UTM VSA logos are included to reflect the co-hosted nature of the event. The result was a cohesive, visually inviting post that encouraged student participation and sign-ups, while maintaining consistency with UTM FSA's established social media visual identity.`,
  },
  {
    id: "f5814c65-0f76-4630-b1ff-6a64fb07488b",
    heading: "Social Media Informational Design",
    body: `Designed this Instagram post to communicate the UTM Filipino Student Association's Winter 2022 office hours schedule to students in a clear and visually engaging format. Rather than presenting the timetable as plain text, I built the layout as a structured weekly grid overlaid on a dark navy background featuring a subtle Philippine flag motif — the blue, red, and golden sun — that reinforces organizational identity while adding depth to the design. Circular cutout headshots of each executive member are placed directly within the timetable at their corresponding day and time slots, making it immediately intuitive to identify who is available and when, without requiring students to cross-reference a separate roster. A color-coded legend at the bottom distinguishes between executive departments — Communications, Engagement, Finance, External, and Internal — allowing for quick visual scanning. The "OFFICE HOURS SCHEDULE" title is set in bold yellow all-caps for high contrast against the dark background. I ensured the design was consistent with UTM FSA's branding and optimized for easy sharing on social media, where it served as the primary reference for students seeking executive support throughout the Winter 2022 semester.`,
  },
  {
    id: "4dd2402a-a494-452f-9811-52eedae133b6",
    heading: "Social Media Fundraiser Poster Design",
    body: `Designed this Instagram post for the UTM Filipino Student Association's Christmas Fundraiser, a campaign raising donations for The Salvation Army through a raffle incentive. The design needed to be festive enough to catch attention in a holiday-saturated social media feed while clearly communicating the specific donation instructions. I built the composition around a classic Christmas gift-wrap aesthetic: a bold red and green grid background filled with candy cane patterns and a large red ribbon bow immediately signals the holiday theme and stops the scroll. "CHRISTMAS FUNDRAISER" is set in a rounded, bubbly green display font that balances festivity with legibility. A white information card centered below is styled with a "Must read!" header and clean body text outlining donation amounts, raffle prize details — up to $50 — and eTransfer instructions including the required note fields. The Salvation Army logo is integrated to build credibility and transparency for the charitable cause. I worked with the fundraising team to ensure all donation information was accurate and clearly presented, and optimized the design for maximum shareability across Instagram to extend the campaign's reach and drive donations.`,
  },
  {
    id: "8095ce7d-f521-4911-a4d9-57b98c0e0575",
    heading: "Social Media Informational Design",
    body: `Designed this Instagram post to display the UTM Filipino Student Association's Fall 2021 office hours schedule — the first iteration of what became a recurring format across subsequent semesters. The goal was to present a complex weekly timetable in a format that felt approachable, well-branded, and easy to read on mobile. I used a soft pastel gradient background shifting from light blue to lavender to warm yellow, giving the design a lighter and more casual energy compared to the later Winter 2022 version. The "office hours schedule" title is rendered in a flowing script font that feels friendly and informal, offsetting the structured grid content beneath it. Circular cutout headshots of each executive member are placed within the corresponding day and time columns, making it visually intuitive to identify who is holding office hours and when. A department color legend at the bottom — Comms, Engagement, Finance, External, Internal — provides a quick-reference key for the role-based color coding. I coordinated directly with the executive team to verify the accuracy and completeness of every schedule entry before publishing, ensuring students could rely on the post as a trustworthy reference throughout the fall semester.`,
  },
  {
    id: "16dddbfe-3304-4f88-a3ec-856f38d04bf0",
    heading: "Social Media Campaign Design",
    body: `Designed a series of Instagram posts to introduce each department of the UTM Filipino Student Association's 2021 executive team to the broader UTM community. Each post followed a consistent scrapbook-inspired visual identity — a style drawn from Olivia Rodrigo's Sour album aesthetic — featuring a textured teal background with horizontal notebook-style lines, a torn paper banner with handwritten-style type naming the team (e.g., "External Team"), and kawaii-style sticker illustrations including megaphones, crowns, microphones, and stars scattered across the composition. Cutout photos of the executives are placed centrally, posed with personality, to give the posts a warm and human feel that introduces each person rather than just their title. The design system was built to be repeatable across all departments while leaving room for individual team identity through photo placement and sticker arrangement. I collaborated with team members to gather photos and confirm role information, iterating on each layout to maintain visual consistency across the full series. The campaign successfully introduced the executive team in a memorable, on-brand way that resonated with UTM FSA's student audience on Instagram.`,
  },
  {
    id: "5ca2a629-636b-4c28-863c-25ea4829691e",
    heading: "Event Poster Design",
    body: `Designed three poster variants for the Western Academy of Beijing's Spring Concert Showcase, a large-scale school performance event featuring groups including Concert Band, String Orchestra, HS Choir, APAC Strings, MYP/DP Dance, Junior Dance, and APAC Dance. The poster needed to work across print and digital channels, with one variant incorporating a QR code linking to either the livestream or ticket reservation page to support both in-person and remote audiences. I used Adobe Illustrator to build a bold, high-energy design around a red and white palette with flowing organic wave shapes and a large green circular element at the top that gives the layout a dynamic, modern feel. "spring showcase concert" is set in a cursive white display font on the red field for contrast, while the list of performing groups is presented in clean sans-serif black on the white section for maximum readability. Subtle Chinese characters in the background add cultural depth appropriate to the Beijing school context. Three design variants were developed to give the school's communications team flexibility for different use cases. I collaborated with the school throughout the process to ensure the poster adhered to institutional branding, and all files were delivered in print-ready and digital formats for distribution across multiple channels.`,
  },
  {
    id: "beb72ed1-7d84-41ac-841d-1c17ea141f6a",
    heading: "Social Media Marketing Design",
    body: `Designed a set of Facebook promotional posts for Las Tres Maria's in support of a brand partnership project with ELA Essentials, a Philippine-based essential oils company. The posts needed to present the ELA Essentials product line in a clean, commercial style that would perform on social media and drive purchases through Lazada and Shopee marketplace links. I used Adobe Photoshop to build a product-focused layout with a sharp diagonal red stripe dividing a white background — a design choice that creates visual energy and directs the eye toward the product photography. "ESSENTIAL OILS ///" is set in bold red and black type with triple slashes as a graphic accent, establishing a modern and confident brand voice. Multiple ELA Essentials amber glass bottles of varying sizes are arranged in a centered product cluster to showcase the full range at once. Marketplace logos for Lazada and Shopee are clearly placed at the bottom with an "AVAILABLE ON" label to reinforce the purchase path. I worked closely with both clients throughout the process to ensure the final designs met marketing objectives, maintained brand consistency for both Las Tres Maria's and ELA Essentials, and were optimized for Facebook's feed format.`,
  },
  {
    id: "0b1b9c29-0656-4395-999f-ffdc89d72a67",
    heading: "Product Label Design",
    body: `Designed product jar labels for Las Tres Maria's, a Filipino food brand specializing in traditional homemade condiments and preserved foods. The brief called for labels that clearly communicated product identity, weight, and key details while feeling authentic to the brand's Filipino heritage. I developed the label system with a clean white base to ensure legibility on the glass jar surface, using bold red stripes at the top and bottom to create a strong visual frame and reinforce brand consistency across the product line. The product name — such as "TABA NG TALANGKA" — is set in large, bold green and red typography that commands attention on the shelf, while the "LAS TRES MARIAS" brand name sits above in a more refined treatment that balances the expressive product name. A small product-specific icon, such as a crab for the crab fat variant, reinforces the product type visually at a glance, and a spicy badge is included on relevant variants to communicate heat level. The label was designed to wrap cleanly around the jar and remain readable from multiple angles, with all information — weight in grams and ounces, brand identifiers, and ingredient area — clearly organized within the layout. Final deliverables included print-ready files for the full range of product variants.`,
  },
  {
    id: "6178429a-d1dc-4454-98e0-5604f59de554",
    heading: "Event Poster Design",
    body: `Designed a livestream schedule poster for the Western Academy of Beijing's Grin to Win sports event, a school-wide athletics day broadcast online for students, parents, and community members unable to attend in person. The poster needed to function as an informational piece — communicating the livestream URL and event schedule — while also building excitement for the broadcast. I built the design around a bold dark background with a centrally placed livestream icon: a play button surrounded by radiating signal waves rendered in red outlines, which immediately communicates "live broadcast" at a glance. "LIVE" is called out in a bold red badge, with "GRIN to WIN" in large white and red condensed display type beneath it creating a strong typographic focal point. The livestream URL — LIVESTREAM.WAB.EDU — is placed prominently in clean all-caps white text, followed by the TSEN Program Schedule with time slots and event names highlighted in yellow for high contrast against the dark background. I applied institutional branding and color schemes to ensure consistency with the school's event materials, and prepared both digital and print versions for distribution across WAB's communication channels so students and parents could reference the schedule from any device.`,
  },
  {
    id: "9529101c-d4d8-42f3-ab7f-d4ff5c2fc122",
    heading: "Event Poster Design",
    body: `Designed this Halloween Costume Contest poster for the Western Academy of Beijing High School Student Council, promoting a costume competition with cash prizes held during Friday lunch on October 30th. The design needed to be immediately attention-grabbing, festive, and clearly communicate the prize breakdown and event logistics to a high school audience in a busy school hallway environment. I leaned into Halloween maximalism: a bold orange background filled with black jack-o-lantern face silhouettes and scattered geometric triangle shapes creates an immersive and festive backdrop. "HALLOWEEN COSTUME CONTEST" is set across three distinct typeface treatments — a dripping green style for "HALLOWEEN," purple for "COSTUME," and orange for "CONTEST" — that play on classic Halloween color associations while keeping each word distinct and readable. The prize breakdown — 1st: ¥250, 2nd: ¥100, 3rd: ¥50 — is highlighted inside a circular candy-shaped graphic in neon yellow-green, making the incentive the clearest hook on the poster. Event details are set in bold black text at the bottom for quick scanning. I collaborated with student council members throughout the process to ensure the poster accurately represented the event, and delivered print-ready files optimized for both physical display around the school and digital sharing.`,
  },
  {
    id: "61dc2360-8f94-4a57-8795-a2c93e460ba0",
    heading: "Band Recruitment Poster Design",
    body: `Designed a drummer recruitment poster for Perfectly Adequate, a student band at the Western Academy of Beijing looking to fill their open drummer position. The poster needed to feel authentic to the band's energy and immediately communicate the ask to fellow students. I used Adobe Photoshop and Illustrator to build the design around a live performance photo of the band playing at an outdoor school festival — real proof of the group's activity that sets a genuine tone for the recruitment pitch and differentiates it from a generic flyer. A bold blue border frames the composition with the visual weight of a gig poster. "PERFECTLY ADEQUATE" is set in large white and yellow brushstroke-style display typography across the top, capturing the band's irreverent self-aware name with the energy of a concert poster, while "DRUMMER NEEDED!" is called out below in high-contrast bold yellow text that delivers the message instantly. Contact information is placed cleanly at the bottom for easy reference. I worked directly with the band members to ensure the poster accurately reflected the group's personality and style, resulting in a design that felt genuine to the Perfectly Adequate brand and effectively targeted the right audience within the school community.`,
  },
];

async function run() {
  const res = await wixClient.items.query("Projects").limit(50).find();
  const itemMap = {};
  res.items.forEach((i) => (itemMap[i._id] = i));

  for (const p of projects) {
    const existing = itemMap[p.id];
    if (!existing) { console.log("NOT FOUND:", p.id); continue; }
    await wixClient.items.update("Projects", { ...existing, description: makeDoc(p.heading, p.body) });
    console.log("OK:", existing.projectName);
  }
  console.log("All done.");
}
run().catch(console.error);

import bsky from "@atproto/api";
const { BskyAgent } = bsky;
import * as dotenv from "dotenv";
dotenv.config();
const agent = new BskyAgent({
    service: "https://bsky.social",
});
// // validate environment variables
// if (!process.env.BLUESKY_USERNAME || !process.env.BLUESKYPASSWORD) {
//   throw new Error(
//     "Environment variables BLUESKY_USERNAME and BLUESKY_PASSWORD must be set."
//   );
// }
await agent.login({
    identifier: process.env.BLUESKY_USERNAME,
    password: process.env.BLUESKY_PASSWORD,
});
// insert getYearProgessEmoji function
function getYearProgressEmoji() {
    const currentDate = new Date();
    const dayOfYear = Math.floor(Number(currentDate) - Number(new Date(currentDate.getFullYear(), 0, 1))) /
        (1000 * 60 * 60 * 24);
    const percentageDone = dayOfYear / 365;
    const greenCircles = Math.round(percentageDone * 10);
    const greyCirlces = 10 - greenCircles;
    return "🟢".repeat(greenCircles) + "⚪️".repeat(greyCirlces);
}
const response = await agent.post({ text: getYearProgressEmoji() });
console.log(response);
//   re/aturn "".repeat(greenCircles) + "".repeat(greyCirlces);
// }
// const response = await agent.getProfile({ "text": getYearProgressEmoji() });

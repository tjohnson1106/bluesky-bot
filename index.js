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
// insert getYearProgessEmoji function
function getYearProgressEmoji() {
    const currentDate = new Date();
    const dayOfYear = Math.floor(Number(currentDate) - Number(new Date(currentDate)));
    const percentageDone = dayOfYear / 365;
    const greenCircles = Math.round(percentageDone * 10);
    const greyCirlces = 10 - greenCircles;
}
await agent.login({
    identifier: process.env.BLUESKY_USERNAME,
    password: process.env.BLUESKY_PASSWORD,
});
const response = await agent.getProfile({ actor: "clearafter.bsky.social" });
console.log(response);
//   return "".repeat(greenCircles) + "".repeat(greyCirlces);
// }
// const response = await agent.getProfile({ "text": getYearProgressEmoji() });

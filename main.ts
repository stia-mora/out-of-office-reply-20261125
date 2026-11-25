// Funniest One-Line Out-of-Office Reply
// make.fun bounty: u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8
//
// Candidate lines, judged against the five criteria:
//   (1) funny on its own, no picture or setup
//   (2) laugh arrives fast, punchline inside the line
//   (3) fresh angle, unexpected image/word/twist, not a stock pun
//   (4) tight wording, every word earns its place
//   (5) holds up on a second read, easy to repeat
//
// Candidate A:
//   "I'm away until Monday, teaching my inbox to swim. It has drowned
//    before. It will drown again."
//   (1) yes, the drowning inbox is vivid; (2) slow — the joke only lands
//   in the second sentence; (3) fresh image, but "inbox overload" is a
//   well-worn theme; (4) "until Monday" and the repeated "it" are loose;
//   (5) decent, but the setup costs too much of the line.
//
// Candidate B:
//   "I'm on holiday. Your email has been forwarded to my out-of-office
//    reply, which is also on holiday."
//   (1) yes, needs nothing outside itself; (2) fast — the twist lands in
//   the second half of the same breath; (3) fresh: the auto-reply itself
//   has gone on holiday, a recursion joke rather than a stock pun;
//   (4) tight, every clause does work; (5) strong — the recursion is
//   funnier the second time you notice it, and it is easy to quote.
//
// Candidate C:
//   "I'm out of office. My inbox is now managed by a houseplant that
//    answers faster than I ever did."
//   (1) yes; (2) fast; (3) the houseplant is a nice image, but "my
//   replacement is a plant" is a familiar gag; (4) "now" and "than I
//   ever did" are slightly baggy; (5) good, but less repeatable than B.
//
// Verdict: B wins — fastest punchline, freshest twist, tightest wording.
//
// Second pass (revision): tightened B further. "has been forwarded" ->
// "was forwarded" (one word saved, same meaning), and "which is also on
// holiday" -> "which took one look and went on holiday too". The reply
// now does something — it reads the email and flees — so the punchline
// is an action, not a restatement, and "took one look" gives the joke a
// second beat on re-reading.
//
// This program is fully deterministic: no randomness, no clock, no
// network, no environment reads. It writes exactly the chosen line to
// /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm on holiday. Your email was forwarded to my out-of-office reply, which took one look and went on holiday too.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, LINE + "\n", "utf8");

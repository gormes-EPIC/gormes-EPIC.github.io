// --- Warm-Ups ---
// Each class page shows a "Warm-Up of the Day" box at the top.
//
// To add a warm-up:
//   1. Save the question as a markdown file in the class's Warm-Ups folder:
//          markdown/<Class-Name>/Warm-Ups/<File-Name>.md
//      Leave the title out of the file. The file name becomes the title
//      (dashes turn into spaces), just like the files in curriculum.js.
//   2. Add a line for it below with:
//          file: the file name, without ".md"
//          date: the day it is the warm-up, written "YYYY-MM-DD"
//          unit: the unit number it belongs to (named in curriculum.js)
//
// On its date, a warm-up is shown in full in the box. After that it moves to
// the "Previous warm-ups" list, where students click through to open it.
// A warm-up with a future date stays off the site until that day, so you can
// write them ahead of time.

const warmups = {
    "Pi's-and-Python": [
        { file: "If-Statement-Vocab", date:"2026-09-10", unit: 2},
        { file: "Hidden-Mystery-Puzzle", date:"2026-10-06", unit: 3},
        { file: "Decode-the-Secret-Message", date:"2026-10-08", unit: 3},
        { file: "Loops-and-Data-Collections-Review", date: "2026-10-12", unit: 4}
    ],
    "Data-Structures-and-Algorithms": [
    ],
    "Software-Engineering": [
        // { file: "Query-Parameters", date: "2026-10-07", unit: 2 },
        // { file: "Reading-a-Route", date: "2026-10-08", unit: 2 },
        // { file: "Status-Codes", date: "2026-10-09", unit: 2 },
    ],
    "Foundations-of-AI": [
    ],
    "Workforce-Readiness": [
    ]
};

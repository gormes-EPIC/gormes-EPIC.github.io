// --- Warm-Ups ---
// Each unit on a class page has a "Warm-Ups" list, newest first.
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
// On its date, a warm-up appears in its unit's list, where students click
// through to open it. Link to it from the day's agenda (see agendas.js).
// A warm-up with a future date stays off the site until that day, so you can
// write them ahead of time.

const warmups = {
    "Pi's-and-Python": [
        { file: "Reverse-Engineering-Activity", date:"2026-08-20", unit: 1},
        { file: "Linux-Terminal-Command-Review", date:"2026-08-24", unit: 1},
        { file: "PEMMDDAS-Problems", date:"2026-08-26", unit: 1},
        { file: "If-Statement-Vocab", date:"2026-09-10", unit: 2},
        { file: "Hidden-Mystery-Puzzle", date:"2026-10-06", unit: 3},
        { file: "Decode-the-Secret-Message", date:"2026-10-08", unit: 3},
        // { file: "Bank-Heist", date: "2026-10-14", unit: 4}
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

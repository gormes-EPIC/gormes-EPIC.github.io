// --- Unit Names & Visibility ---
// Each file below is tagged with a single unit number (e.g. `unit: 0`).
// Give a unit a friendly name here so it shows as "Unit 0: Linux and
// Operating Systems" instead of just "Unit 0". A unit left out of this
// list just displays as "Unit <number>".
//
// Set `visible: false` on a unit to hide it (and every file in it) from
// the whole site until it's ready. This is separate from the show/hide
// checkboxes visitors see on the site, which only affect their own browser.
const unitInfo = {
    "Pi's-and-Python": {
        0: { name: "Linux and Operating Systems" },
        1: { name: "Variables and Functions" },
        2: { name: "If Statements" },
        3: { name: "Loops and Data Collections" },
        4: { name: "Objects" },
        5: { name: "Recursion" },
        6: { name: "Final Project" }
    },
    "Data-Structures-and-Algorithms": {
        0: { name: "Programming in Java" },
        1: { name: "Seaching and Sorting"},
        2: { name: "Stacks and Queues"},
        3: { name: "Lists" },
        4: { name: "Trees and Heaps"},
        5: { name: "Graphs"},
        6: { name: "Final Project", visible: false},
        7: { name: "Optional"}
    },
    "Software-Engineering": {
        0: { name: "CI/CD and Version Control" },
        1: { name: "Databases with SQLite"},
        2: { name: "How Computers Talk and APIs"},
        3: { name: "Containerization" , visible: false},
        4: { name: "Distrobution", visible: false}
    },
    "Foundations-of-AI": {
        0: { name: "CI/CD and Version Control"},
    }
};

const curriculum = {
            "Pi's-and-Python": [
                { file: "Pi's-and-Python-Syllabus", type: "document", unit: 0 },
                { file: "Intentions-and-Goal-setting", type: "wfr", unit: 0 },
                // { file: "Terminal-Commands-Notes", type: "notes", unit: 0 },
                // { file: "Diagnostic-Pretest", type: "assignment", unit: 0 },
                { file: "Linux-Exercises", type: "exercise", unit: 0 },
                { file: "Over-the-Wire-Lab", type: "assignment", unit: 0 },
                { file: "Text-Editors-Lab", type: "assignment", unit: 0 },
                { file: "Meet-Your-Raspberry-Pi-Lab", type: "assignment", unit: 0 },
                { file: "cron-Optional-Lab", type: "optional", unit: 0 },

                { file: "Variables-and-Functions-Notes", type: "notes", unit: 1 },
                { file: "Variables-and-Functions-Exercises", type: "exercise", unit: 1 },
                { file: "Variables-and-Functions-Lab", type: "assignment", unit: 1 },
                // { file: "Working-with-Raspberry-Pis-Notes", type: "notes", unit: 1 },
                { file: "Light-the-LED-Lab", type: "assignment", unit: 1 },
                { file: "Elevator-Pitch", type: "wfr", unit: 1 },

                { file: "If-Statement-Notes", type: "notes", unit: 2},
                { file: "If-Statement-Exercises", type: "exercise", unit: 2 },
                { file: "If-Statement-Lab", type: "assignment", unit: 2 },
                { file: "Dim-the-LED-Lab", type: "assignment", unit: 2 },
                { file: "Job-Research-Presentation", type: "wfr", unit: 2 },
                
                { file: "Loops-and-Data-Collections-Notes", type: "notes", unit: 3 },
                { file: "Loops-and-Data-Collections-Exercises", type: "exercise", unit: 3 },
                { file: "Loops-and-Data-Collections-Lab", type: "assignment", unit: 3 },
                { file: "File-Reading-and-Writing-Notes", type: "notes", unit: 3 },
                { file: "Temperature-in-Color-Lab", type: "assignment", unit: 3 },
                { file: "Try-Except-and-Regex-Optional-Lab", type: "optional", unit: 3},

                { file: "Objects-Notes", type: "notes", unit: 4 },
                { file: "Object-Exericses", type: "exercise", unit: 4 },
                { file: "Fun-With-Objects-Lab", type: "assignment", unit: 4 },
                { file: "Digital-Slot-Machine-Lab", type: "assignment", unit: 4 },
                { file: "Workforce-Readiness-Reflection", type: "wfr", unit: 4 },
                { file: "STAR-Format-Notes", type: "notes", unit: 4 },
                { file: "Preparing-for-the-Interview", type: "wfr", unit: 4 },    
                
                { file: "Recursion-Notes", type: "notes", unit: 5 },
                { file: "Recursion-Lab", type: "assignment", unit: 5 },
                { file: "Binary-Display-Lab", type: "assignment", unit: 5 },
                { file: "Effective-Collaboration-Activity", type: "wfr", unit: 5 },    
                

                { file: "Final-Project", type: "assignment", unit: 6 },
                { file: "Creating-a-Resume", type: "wfr", unit: 6 },
                { file: "Update-Your-Portfolio", type: "wfr", unit: 6}
                
                
            ],
            "Data-Structures-and-Algorithms": [
                
                { file: "Data-Structures-and-Algorithms-Syllabus", type: "document", unit: 0 },
                // { file: "Welcome-to-Java-Notes", type: "notes", unit: 0 },
                { file: "Objects-in-Java-Notes", type: "notes", unit: 0 },
                { file: "Objects-and-OOP-Exercises", type: "exercise", unit: 0 },
                { file: "Object-Review-Lab", type: "assignment", unit: 0 },
                { file: "Object-Oriented-Programming-Principles-Lab", type: "assignment", unit: 0 },
                
                { file: "Big-O-Notation-and-Sorting-Algorithms-Notes", type: "notes", unit: 1 },
                { file: "Big-O-Notation-and-Sorting-Algorithms-Exercises", type: "exercise", unit: 1 },
                { file: "Quad-Sorts-Lab", type: "assignment", unit: 1 },
                
                { file: "Stack-and-Queue-Notes", type: "notes", unit: 2 },
                { file: "Stack-and-Queue-Exercises", type: "exercise", unit: 2 },
                { file: "Stack-and-Queue-Lab", type: "assignment", unit: 2 },
                { file: "Reverse-Polish-Notation-Lab", type: "assignment", unit: 2 },

                { file: "ArrayList,-LinkedList,-and-List-Interface-Notes", type: "notes", unit: 3 },
                { file: "List-Exercises", type: "exercise", unit: 3 },
                { file: "ArrayList-Lab", type: "assignment", unit: 3 },
                { file: "Doubly-Linked-List-Lab", type: "assignment", unit: 3 },

                { file: "Tree-Notes", type: "notes", unit: 4 },
                { file: "BST-and-AVL-Tree-Exercises", type: "exercise", unit: 4 },
                { file: "Binary-Search-Tree-Lab", type: "assignment", unit: 4 },
                //{ file: "Autocomplete-Trie-Lab", type: "assignment", unit: 0 },
                { file: "Heap-Notes", type: "notes", unit: 4 },
                { file: "Heap-Exercises", type: "exercise", unit: 4 },
                { file: "Priority-Queue-Lab", type: "assignment", unit: 4 },

                { file: "Graph-Notes", type: "notes", unit: 5 },
                { file: "Graph-Exercises", type: "exercise", unit: 5 },
                { file: "Graphs-Lab", type: "assignment", unit: 5 },

                { file: "Data-Utility-Lab", type: "assignment", unit: 6 },

                { file: "Radix-Sort-Lab", type: "optional", unit: 7 },
                { file: "Evil-Hangman-Lab", type: "optional", unit: 7 },
                { file: "Maze-Solver-Lab", type: "optional", unit: 7 }

                // { file: "Data-Utility-Lab", type: "assignment", unit: 0 }
                // { file: "Music-With-JFugue", type: "notes", unit: 0 },
                //{ file: "URL-Shortener-Lab", type: "assignment", unit: 0 }
            ],
            "Software-Engineering": [
                // { file: "Norms-and-Community-Agreements", type: "assignment", unit: 0 }, 
                // { file: "Git-Rescue-Simulation", type: "assignment", unit: 0 },
                // { file: "Solving-an-Ethical-Dilemma", type: "assignment", unit: 0 },
                // { file: "Workflow-Repository-Hygiene-Check", type: "assignment", unit: 0 },
                // { file: "Demo-Day-Presentation", type: "assignment", unit: 0 },

                { file: "Software-Engineering-Syllabus", type: "document", unit: 0 },
                // Unit 0: CI/CD and Version Control
                { file: "Intentions-and-Goal-setting", type: "wfr", unit: 0},
                { file: "Blockbuster-Lab", type: "assignment", unit: 0 },
                { file: "Style-Guides-and-Great-READMEs", type: "assignment", unit: 0 },
                { file: "Advanced-Git-Lab", type: "assignment", unit: 0 },
                { file: "Cowsay-ENV-Lab", type: "assignment", unit: 0 },
                { file: "Currency-Translator-Lab", type: "assignment", unit: 0 },

                // Unit 1: Databases with SQLite
                { file: "No-Silver-Bullets-Discussion", type: "assignment", unit: 1 },
                { file: "Setting-Up-a-Database-Lab", type: "assignment", unit: 1 },
                { file: "Manipulating-a-Database-Lab", type: "assignment", unit: 1 },
                { file: "Database-Design", type: "assignment", unit: 1 },
                { file: "SQLite-with-Python-Lab", type: "assignment", unit: 1 },
                { file: "Database-Implementation-Lab", type: "assignment", unit: 1 },
                { file: "Response-to-Guest-Speaker", type:"wfr", unit: 1},
                { file: "Section-230", type:"wfr", unit: 1},

                // Unit 2: How Computers Talk and APIs
                { file: "Sockets-Lab", type: "assignment", unit: 2 },
                { file: "Requests-and-Using-APIs-Lab", type: "assignment", unit: 2 },
                { file: "Creating-an-API-Lab", type: "assignment", unit: 2},
                { file: "Error-Messages-and-Logging-Lab", type: "assignment", unit: 2},
                { file: "Design-Review-Discussion", type: "assignment", unit: 2 },
                { file: "Creating-a-Resume", type: "wfr", unit: 2},
                { file: "Black-Box-API-Simulation", type: "wfr", unit: 2},
                { file: "Required-Skills-Writeup", type: "wfr", unit: 2},

                // Unit 3: Containerizing
                { file: "Front-end-Development-Lab", type: "assignment", unit: 3 },
                { file: "Deployment-and-Monitoring-Lab", type: "assignment", unit: 3 },
                { file: "Hello-World-in-Docker-Lab", type: "assignment", unit: 3 },
                { file: "Containerize-Your-Application-Lab", type: "assignment", unit: 3 },
                { file: "Engineering-Case-Study-Presentation", type: "assignment", unit: 3 },
                { file: "Proxmox-and-Hypervisors-Lab", type: "assignment", unit: 3 },
                
                // Unit 4: Distribution
                { file: "Demo-Day-Presentation", type: "assignment", unit: 4 }
            ],
            "Foundations-of-AI": [
                { file: "notes", type: "notes", unit: 0 },
                { file: "Image-Classification", type: "assignment", unit: 0 }
            ],
            "Workforce-Readiness": [
                // Pi's and Python
                
                // Data Structures
                { file: "Writing-in-Markdown-Notes", type: "notes", unit: 0 },
                { file: "Technical-Writing-Notes", type: "notes", unit: 0 },
                { file: "Effective-READMEs", type: "assignment", unit: 0 },
                { file: "Computer-Science-News-Presentation", type: "assignment", unit: 0 },
                { file: "Writing-a-Cover-Letter", type: "assignment", unit: 0 },
                { file: "My-Strengths-and-Weaknesses", type: "assignment", unit: 0 },
                { file: "Technical-Interview-Practice", type: "assignment", unit: 0 },

                // Software Engineering
               
                // Foundations of AI
            ]
            // "Other": [
            //     { file: "Diagnostic-Pretest", type: "assignment", unit: 0 }
            // ]
            
        };
# Blockbuster Lab

*This assignment is under construction and is subject to change for the 26-27 school year.* 


## Objective
1. Use Python to model data using object-oriented program
2. Use Git and GitHub to track version control and hosting your project


## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
|||

## Your Task

Your task is to create a program to represent a movie rental company. 

1. First create the class `Movie` that has three instance variables `title`, `tagline`, `director`, `rental_price`, and `rented`(a boolean variable). 
2. Then create the class `Rental` that has a list of movies. Use the CSV below to populate your rental store.

<details>
<summary>Click here to view `movies.csv`</summary>

```
index,original_title,tagline,director,rental_price
0,Avatar,Enter the World of Pandora.,James Cameron,7.38
1,Pirates of the Caribbean: At World's End,"At the end of the world, the adventure begins.",Gore Verbinski,14.87
2,Spectre,A Plan No One Escapes,Sam Mendes,5.00
3,The Dark Knight Rises,The Legend Ends,Christopher Nolan,5.33
4,John Carter,"Lost in our world, found in another.",Andrew Stanton,11.62
5,Spider-Man 3,The battle within.,Sam Raimi,12.69
6,Tangled,They're taking adventure to new lengths.,Byron Howard,7.44
7,Avengers: Age of Ultron,A New Age Has Come.,Joss Whedon,6.67
8,Harry Potter and the Half-Blood Prince,Dark Secrets Revealed,David Yates,12.72
9,Batman v Superman: Dawn of Justice,Justice or revenge,Zack Snyder,6.54
10,Superman Returns,,Bryan Singer,9.90
11,Quantum of Solace,"For love, for hate, for justice, for revenge.",Marc Forster,12.50
12,Pirates of the Caribbean: Dead Man's Chest,Jack is back!,Gore Verbinski,5.09
13,The Lone Ranger,Never Take Off the Mask,Gore Verbinski,9.44
14,Man of Steel,You will believe that a man can fly.,Zack Snyder,12.17
15,The Chronicles of Narnia: Prince Caspian,Hope has a new face.,Andrew Adamson,8.57
16,The Avengers,Some assembly required.,Joss Whedon,10.11
17,Pirates of the Caribbean: On Stranger Tides,Live Forever Or Die Trying.,Rob Marshall,5.23
18,Men in Black 3,They are back... in time.,Barry Sonnenfeld,8.45
19,The Hobbit: The Battle of the Five Armies,Witness the defining chapter of the Middle-Earth saga,Peter Jackson,6.69
20,The Amazing Spider-Man,The untold story begins.,Marc Webb,6.62
21,Robin Hood,"Rise and rise again, until lambs become lions.",Ridley Scott,8.94
22,The Hobbit: The Desolation of Smaug,Beyond darkness... beyond desolation... lies the greatest danger of all.,Peter Jackson,6.18
23,The Golden Compass,There are worlds beyond our own - the compass will show the way.,Chris Weitz,6.20
24,King Kong,The eighth wonder of the world.,Peter Jackson,8.48
25,Titanic,Nothing on Earth could come between them.,James Cameron,14.56
26,Captain America: Civil War,Divided We Fall,Anthony Russo,7.04
27,Battleship,The Battle for Earth Begins at Sea,Peter Berg,6.11
28,Jurassic World,The park is open.,Colin Trevorrow,6.50
29,Skyfall,Think on your sins.,Sam Mendes,7.05
30,Spider-Man 2,There's a hero in all of us.,Sam Raimi,9.55
31,Iron Man 3,Unleash the power behind the armor.,Shane Black,7.60
32,Alice in Wonderland,You're invited to a very important date.,Tim Burton,10.08
33,X-Men: The Last Stand,Take a Stand,Brett Ratner,12.13
34,Monsters University,School never looked this scary.,Dan Scanlon,13.29
35,Transformers: Revenge of the Fallen,Revenge is coming.,Michael Bay,12.78
36,Transformers: Age of Extinction,This is not war. It's extinction.,Michael Bay,13.23
37,Oz: The Great and Powerful,"In Oz, nothing is what it seems",Sam Raimi,13.87
38,The Amazing Spider-Man 2,No more secrets.,Marc Webb,13.18
39,TRON: Legacy,The Game Has Changed.,Joseph Kosinski,10.10
40,Cars 2,Ka-ciao!,John Lasseter,10.09
41,Green Lantern,"In our darkest hour, there will be light.",Martin Campbell,14.68
42,Toy Story 3,No toy gets left behind.,Lee Unkrich,7.95
43,Terminator Salvation,The End Begins.,McG,13.36
44,Furious 7,Vengeance Hits Home,James Wan,6.40
45,World War Z,Remember Philly!,Marc Forster,6.58
46,X-Men: Days of Future Past,"To save the future, they must alter the past",Bryan Singer,9.90
47,Star Trek Into Darkness,Earth Will Fall,J.J. Abrams,13.46
48,Jack the Giant Slayer,Prepare for a giant adventure,Bryan Singer,6.05
49,The Great Gatsby,Reserving judgments is a matter of infinite hope... I come to the admission that it has a limit.,Baz Luhrmann,5.30
50,Prince of Persia: The Sands of Time,Defy the Future,Mike Newell,8.77
51,Pacific Rim,"To Fight Monsters, We Created Monsters",Guillermo del Toro,13.87
52,Transformers: Dark of the Moon,The invasion we always feared. An enemy we never expected.,Michael Bay,10.27
53,Indiana Jones and the Kingdom of the Crystal Skull,The adventure continues . . .,Steven Spielberg,9.70
54,The Good Dinosaur,Little Arms With Big Attitude,Peter Sohn,11.96
55,Brave,Change your fate.,Brenda Chapman,7.00
56,Star Trek Beyond,,Justin Lin,12.62
57,WALL·E,An adventure beyond the ordinar-E.,Andrew Stanton,9.01
58,Rush Hour 3,The Rush Is On!,Brett Ratner,8.62
59,2012,We Were Warned.,Roland Emmerich,9.47
60,A Christmas Carol,Season's Greedings,Robert Zemeckis,12.15
61,Jupiter Ascending,Expand your universe.,Lilly Wachowski,8.50
62,The Legend of Tarzan,Human. Nature.,David Yates,12.84
63,"The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",Evil Has Reigned For 100 Years...,Andrew Adamson,11.93
64,X-Men: Apocalypse,Only the strong will survive,Bryan Singer,5.42
65,The Dark Knight,Why So Serious?,Christopher Nolan,6.44
66,Up,,Pete Docter,13.32
67,Monsters vs Aliens,"When aliens attack, monsters fight back.",Conrad Vernon,13.26
68,Iron Man,Heroes aren't born. They're built.,Jon Favreau,13.08
69,Hugo,One of the most legendary directors of our time takes you on an extraordinary adventure.,Martin Scorsese,10.77
70,Wild Wild West,It's a whole new west.,Barry Sonnenfeld,11.31
71,The Mummy: Tomb of the Dragon Emperor,A New Evil Awakens.,Rob Cohen,11.46
72,Suicide Squad,Worst Heroes Ever,David Ayer,12.81
73,Evan Almighty,A comedy of biblical proportions,Tom Shadyac,10.83
74,Edge of Tomorrow,"Live, Die, Repeat",Doug Liman,11.13
75,Waterworld,Beyond the horizon lies the secret to a new beginning.,Kevin Reynolds,6.48
76,G.I. Joe: The Rise of Cobra,"When all else fails, they don't.",Stephen Sommers,8.11
77,Inside Out,Meet the little voices inside your head.,Pete Docter,9.15
78,The Jungle Book,,Jon Favreau,12.13
79,Iron Man 2,"It's not the armor that makes the hero, but the man inside.",Jon Favreau,14.76
80,Snow White and the Huntsman,The Fairytale is Over,Rupert Sanders,7.80
81,Maleficent,Don't believe the fairy tale.,Robert Stromberg,8.81
82,Dawn of the Planet of the Apes,One last chance for peace.,Matt Reeves,5.79
83,The Lovers,Love is longer than life.,Roland Joff\u00e9,12.55
84,47 Ronin,For courage. For loyalty. For honor.,Carl Rinsch,7.46
85,Captain America: The Winter Soldier,In heroes we trust.,Anthony Russo,11.09
86,Shrek Forever After,It ain't Ogre... Til it's Ogre,Mike Mitchell,7.63
87,Tomorrowland,Imagine a world where nothing is impossible.,Brad Bird,7.83
88,Big Hero 6,From the creators of Wreck-it Ralph and Frozen,Chris Williams,14.40
89,Wreck-It Ralph,The story of a regular guy just looking for a little wreck-ognition.,Rich Moore,7.88
90,The Polar Express,This holiday season... believe.,Robert Zemeckis,8.48
91,Independence Day: Resurgence,We had twenty years to prepare. So did they.,Roland Emmerich,8.03
92,How to Train Your Dragon,One adventure will change two worlds,Chris Sanders,7.27
93,Terminator 3: Rise of the Machines,The Machines Will Rise.,Jonathan Mostow,12.68
94,Guardians of the Galaxy,All heroes start somewhere.,James Gunn,10.82
95,Interstellar,Mankind was born on Earth. It was never meant to die here.,Christopher Nolan,5.26
96,Inception,Your mind is the scene of the crime.,Christopher Nolan,13.73
97,シン・ゴジラ,A god incarnate. A city doomed.,Hideaki Anno,12.54
98,The Hobbit: An Unexpected Journey,From the smallest beginnings come the greatest legends.,Peter Jackson,7.42
99,The Fast and the Furious,Live life 1/4 mile at a time.,Rob Cohen,6.50
100,The Curious Case of Benjamin Button,"Life isn't measured in minutes, but in moments.",David Fincher,5.67
101,X-Men: First Class,Witness the moment that will change our world.,Matthew Vaughn,14.70
102,The Hunger Games: Mockingjay - Part 2,The fire will burn forever.,Francis Lawrence,12.54
103,The Sorcerer's Apprentice,It's The Coolest Job Ever.,Jon Turteltaub,10.73
104,Poseidon,Mayday,Wolfgang Petersen,7.08
105,Alice Through the Looking Glass,It's time for a little madness.,James Bobin,8.13
106,Shrek the Third,Who's ready for Thirds?,Chris Miller,14.19
107,Warcraft,Two worlds. One home.,Duncan Jones,12.80
108,Terminator Genisys,Reset the future,Alan Taylor,12.99
109,The Chronicles of Narnia: The Voyage of the Dawn Treader,Return to magic. Return to hope. Return to Narnia.,Michael Apted,7.95
110,Pearl Harbor,It takes a moment to change history. It takes love to change lives.,Michael Bay,6.44
111,Transformers,Their war. Our world.,Michael Bay,5.59
112,Alexander,The greatest legend of all was real.,Oliver Stone,5.67
113,Harry Potter and the Order of the Phoenix,Evil Must Be Confronted.,David Yates,7.41
114,Harry Potter and the Goblet of Fire,Dark And Difficult Times Lie Ahead.,Mike Newell,6.70
115,Hancock,Bad Behavior. Bad Attitude. Real Hero.,Peter Berg,11.72
116,I Am Legend,The last man on Earth is not alone,Francis Lawrence,12.62
117,Charlie and the Chocolate Factory,Willy Wonka is semi-sweet and nuts.,Tim Burton,5.16
118,Ratatouille,He's dying to become a chef.,Jan Pinkava,9.10
119,Batman Begins,Evil fears the knight.,Christopher Nolan,12.46
120,Madagascar: Escape 2 Africa,Still together. Still lost!,Eric Darnell,6.69
121,Night at the Museum: Battle of the Smithsonian,When the lights go off the battle is on.,Shawn Levy,7.14
122,X-Men Origins: Wolverine,Witness the Origin.,Gavin Hood,11.88
123,The Matrix Revolutions,Everything that has a beginning has an end.,Lilly Wachowski,13.24
124,Frozen,Only the act of true love will thaw a frozen heart.,Chris Buck,10.62
125,The Matrix Reloaded,Free your mind.,Lilly Wachowski,8.66
126,Thor: The Dark World,Delve into the darkness,Alan Taylor,10.33
127,Mad Max: Fury Road,What a Lovely Day.,George Miller,8.71
128,Angels & Demons,,Ron Howard,14.78
129,Thor,Two worlds. One hero.,Kenneth Branagh,8.45
130,Bolt,Fully Awesome. Ridonculous. Let It Begin.,Chris Williams,13.33
131,G-Force,The world needs bigger heroes,Hoyt Yeatman,6.71
132,Wrath of the Titans,Feel the Wrath,Jonathan Liebesman,8.50
133,Dark Shadows,Every Family Has Its Demons,Tim Burton,7.60
134,Mission: Impossible - Rogue Nation,Desperate Times. Desperate Measures.,Christopher McQuarrie,7.17
135,The Wolfman,When the moon is full the legend comes to life,Joe Johnston,7.56
136,Bee Movie,Born to bee wild.,Steve Hickner,11.54
137,Kung Fu Panda 2,Prepare for the Year of Awesomeness!,Jennifer Yuh Nelson,14.25
138,The Last Airbender,"Four nations, one destiny",M. Night Shyamalan,13.11
139,Mission: Impossible III,The Mission Begins 05:05:06.,J.J. Abrams,8.58
140,White House Down,It will start like any other day.,Roland Emmerich,13.15
141,Mars Needs Moms,Mom needs a little space.,Simon Wells,11.20
142,Flushed Away,Someone's Going Down,David Bowers,9.49
143,Pan,Every legend has a beginning.,Joe Wright,5.52
144,Mr. Peabody & Sherman,He's Leaving His Mark On History,Rob Minkoff,6.18
145,Troy,For passion. For honor. For destiny. For victory. For love.,Wolfgang Petersen,7.26
146,Madagascar 3: Europe's Most Wanted,"Six years ago, they disappeared without a trace. Next summer, they finally resurface.",Conrad Vernon,13.08
147,Die Another Day,He’s never been cooler.,Lee Tamahori,8.44
148,Ghostbusters,Who You Gonna Call?,Paul Feig,8.07
149,Armageddon,The Earth's Darkest Day Will Be Man's Finest Hour,Michael Bay,9.98
150,Men in Black II,Same Planet. New Scum.,Barry Sonnenfeld,14.36
151,Beowulf,Evil breeds pain.,Robert Zemeckis,5.52
152,Kung Fu Panda 3,Grab destiny by the rice dumplings.,Jennifer Yuh Nelson,10.57
153,Mission: Impossible - Ghost Protocol,No Plan. No Backup. No Choice.,Brad Bird,12.60
154,Rise of the Guardians,You better believe.,Peter Ramsey,13.06
155,Fun with Dick and Jane,Giving big businesses a run for their money!,Dean Parisot,14.95
156,The Last Samurai,"In the face of an enemy, in the heart of one man, lies the soul of a warrior.",Edward Zwick,5.62
157,Exodus: Gods and Kings,"Once brothers, now enemies.",Ridley Scott,12.47
158,Star Trek,The future begins.,J.J. Abrams,13.06
159,Spider-Man,With great power comes great responsibility.,Sam Raimi,9.37
160,How to Train Your Dragon 2,The training is over.,Dean DeBlois,13.72
161,Gods of Egypt,The battle for eternity begins,Alex Proyas,8.78
162,Stealth,Fear The Sky,Rob Cohen,8.34
163,Watchmen,Justice is coming to all of us.  No matter what we do.,Zack Snyder,7.55
164,Lethal Weapon 4,The faces you love. The action you expect.,Richard Donner,10.51
165,Hulk,Unleash the hero within,Ang Lee,7.32
166,G.I. Joe: Retaliation,,Jon M. Chu,7.74
167,Sahara,Dirk Pitt. Adventure has a new name.,Breck Eisner,10.77
168,Final Fantasy: The Spirits Within,Unleash a new reality,Hironobu Sakaguchi,6.26
169,Captain America: The First Avenger,When patriots become heroes,Joe Johnston,5.67
170,The World Is Not Enough,As the countdown begins for the new millennium there is still one number you can always count on.,Michael Apted,12.98
171,Master and Commander: The Far Side of the World,The courage to do the impossible lies in the hearts of men.,Peter Weir,13.00
172,The Twilight Saga: Breaking Dawn - Part 2,The epic finale that will live forever,Bill Condon,9.42
173,Happy Feet Two,Every step counts.,George Miller,10.75
174,The Incredible Hulk,You'll like him when he's angry.,Louis Leterrier,12.51
175,The BFG,The world is more giant than you can imagine.,Steven Spielberg,8.83
176,The Revenant,"(n. One who has returned, as if from the dead.)",Alejandro Gonz\u00e1lez I\u00f1\u00e1rritu,8.46
177,Turbo,SLO NO MO,David Soren,13.35
178,Rango,Heroes come in all different colors.,Gore Verbinski,9.70
179,Penguins of Madagascar,The Movie Event That Will Blow Their Cover,Eric Darnell,14.12
180,The Bourne Ultimatum,Remember everything. Forgive nothing.,Paul Greengrass,9.85
181,Kung Fu Panda,Prepare for awesomeness.,Mark Osborne,9.24
182,Ant-Man,Heroes don't get any bigger.,Peyton Reed,13.33
183,The Hunger Games: Catching Fire,Every revolution begins with a spark.,Francis Lawrence,5.45
184,Home,Worlds Collide,Tim Johnson,13.28
185,War of the Worlds,They're already here.,Steven Spielberg,8.52
186,Bad Boys II,"If you can't stand the heat, get out of Miami.",Michael Bay,14.86
187,Puss in Boots,Live for danger. Fight for justice. Pray for mercy.,Chris Miller,13.07
188,Salt,Who is Salt?,Phillip Noyce,10.66
189,Noah,The end of the world is just the beginning.,Darren Aronofsky,12.98
190,The Adventures of Tintin,"This year, discover how far adventure will take you.",Steven Spielberg,5.15
191,Harry Potter and the Prisoner of Azkaban,Something wicked this way comes.,Alfonso Cuar\u00f3n,7.94
192,Australia,Welcome to Australia!,Baz Luhrmann,9.60
193,After Earth,"Danger is real, fear is a choice",M. Night Shyamalan,13.96
194,Dinosaur,You have never seen anything like this.,Ralph Zondag,7.80
195,Night at the Museum: Secret of the Tomb,One Final Night to Save the Day.,Shawn Levy,14.16
196,Megamind,His brain is off the chain.,Tom McGrath,8.85
197,Harry Potter and the Philosopher's Stone,Let the Magic Begin.,Chris Columbus,12.65
198,R.I.P.D.,To protect and serve the living,Robert Schwentke,5.11
199,Pirates of the Caribbean: The Curse of the Black Pearl,Prepare to be blown out of the water.,Gore Verbinski,5.18
200,The Hunger Games: Mockingjay - Part 1,Fire burns brighter in the darkness,Francis Lawrence,14.33
201,The Da Vinci Code,Seek the truth.,Ron Howard,10.47
202,Rio 2,"He's villainous, she's venomous.",Carlos Saldanha,14.74
203,X2,The time has come for those who are different to stand united.,Bryan Singer,12.98
204,Fast Five,Get the Fifth Gear.,Justin Lin,9.02
205,Sherlock Holmes: A Game of Shadows,The game is afoot.,Guy Ritchie,5.95
206,Clash of the Titans,Titans will clash.,Louis Leterrier,10.41
207,Total Recall,"They stole his mind, now he wants it back.",Paul Verhoeven,5.50
208,The 13th Warrior,Prey for the living.,John McTiernan,11.74
209,The Bourne Legacy,There Was Never Just One,Tony Gilroy,11.12
210,Batman & Robin,Strength. Courage. Honor. And loyalty.,Joel Schumacher,11.56
211,How the Grinch Stole Christmas,He puts the mean in green.,Ron Howard,11.25
212,The Day After Tomorrow,Where will you be?,Roland Emmerich,12.78
213,Mission: Impossible II,Expect the impossible again.,John Woo,5.74
214,The Perfect Storm,The storm is coming.,Wolfgang Petersen,11.21
215,4: Rise of the Silver Surfer,Discover the secret of the Surfer.,Tim Story,7.27
216,Life of Pi,Believe The Unbelievable,Ang Lee,10.77
217,Ghost Rider,Hell Is About To Be Unleashed,Mark Steven Johnson,6.70
218,Jason Bourne,You know his name,Paul Greengrass,13.78
219,Charlie's Angels: Full Throttle,This summer the Angels are back.,McG,7.88
220,Prometheus,The Search for Our Beginning Could Lead to Our End.,Ridley Scott,9.62
221,Stuart Little 2,A Little Goes A Long Way,Rob Minkoff,13.38
222,Elysium,He can save us all.,Neill Blomkamp,7.52
223,The Chronicles of Riddick,All the power in the universe can't change destiny,David Twohy,9.63
224,RoboCop,We've got the future under control.,Jos\u00e9 Padilha,10.68
225,Speed Racer,Go!,Lilly Wachowski,7.10
226,How Do You Know,How do you know it's love?,James L. Brooks,6.39
227,Knight and Day,Every Hit Man Deserves a Second Shot!,James Mangold,11.54
228,Oblivion,Earth is a memory worth fighting for,Joseph Kosinski,8.87
229,Star Wars: Episode III - Revenge of the Sith,The saga is complete.,George Lucas,11.23
230,Star Wars: Episode II - Attack of the Clones,A Jedi Shall Not Know Anger. Nor Hatred. Nor Love.,George Lucas,8.03
231,"Monsters, Inc.",We Scare Because We Care.,Pete Docter,7.98
232,The Wolverine,"When he's most vulnerable, he's most dangerous.",James Mangold,13.42
233,Star Wars: Episode I - The Phantom Menace,Every generation has a legend. Every journey has a first step. Every saga has a beginning.,George Lucas,6.14
234,The Croods,Meet the first modern family.,Chris Sanders,12.19
235,Astérix aux Jeux Olympiques,,Thomas Langmann,12.59
236,Windtalkers,Honor Was Their Code.,John Woo,5.11
237,The Huntsman: Winter's War,The story before Snow White,Cedric Nicolas-Troyan,6.54
238,Teenage Mutant Ninja Turtles,Mysterious. Dangerous. Reptilious. You've never seen heroes like this.,Jonathan Liebesman,6.88
239,Gravity,Don't Let Go,Alfonso Cuar\u00f3n,12.79
240,Dante's Peak,The pressure is building...,Roger Donaldson,11.73
241,Teenage Mutant Ninja Turtles: Out of the Shadows,Raise some shell.,Dave Green,5.41
242,Fantastic Four,Change is coming.,Josh Trank,5.42
243,Night at the Museum,Where History Comes To Life,Shawn Levy,12.83
244,San Andreas,"A rescue pilot survived an earthquake, this is what happens next",Brad Peyton,5.69
245,Tomorrow Never Dies,Yesterday is a memory. Today is history. Tomorrow is in the hands of one man.,Roger Spottiswoode,10.18
246,The Patriot,Some things are worth fighting for.,Roland Emmerich,8.12
247,Ocean's Twelve,Twelve is the new eleven.,Steven Soderbergh,8.19
248,Mr. & Mrs. Smith,Smart and sexy.,Doug Liman,10.39
249,Insurgent,One Choice Can Destroy You,Robert Schwentke,11.43
250,The Aviator,"For some men, the sky was the limit. For him, it was just the beginning.",Martin Scorsese,5.65
251,Gulliver's Travels,Something big is going down.,Rob Letterman,6.56
252,The Green Hornet,Breaking the Law to Protect It.,Michel Gondry,8.61
253,300: Rise of an Empire,Seize your glory!,Noam Murro,11.97
254,The Smurfs,Smurf Happens.,Raja Gosnell,5.42
255,Home on the Range,Bust a Moo,Will Finn,9.60
256,Allegiant,Break the boundaries of your world,Robert Schwentke,10.87
257,Real Steel,"If you get one shot, make it real.",Shawn Levy,9.05
258,The Smurfs 2,Get ready to get naughty!,Raja Gosnell,5.18
259,Speed 2: Cruise Control,"As the stakes get higher, the ride gets even faster.",Jan de Bont,6.68
260,Ender's Game,This is not a game.,Gavin Hood,5.47
261,Live Free or Die Hard,The old school cop is back!,Len Wiseman,8.15
262,The Lord of the Rings: The Fellowship of the Ring,One ring to rule them all,Peter Jackson,8.64
263,Around the World in 80 Days,Let your imagination soar.,Frank Coraci,9.01
264,Ali,Float like a butterfly and sting like a bee.,Michael Mann,14.32
265,The Cat in the Hat,Don't mess with the hat.,Bo Welch,14.91
266,"I, Robot",Laws are made to be broken.,Alex Proyas,8.31
267,Kingdom of Heaven,"Be without fear in the face of your enemies. Safeguard the helpless, and do no wrong",Ridley Scott,8.55
268,Stuart Little,The Little Family Just Got Bigger,Rob Minkoff,12.24
269,The Princess and the Frog,Every Love Story Begins With a Kiss...,Ron Clements,10.36
270,The Martian,Bring Him Home,Ridley Scott,9.38
271,The Island,Your time will come...,Michael Bay,14.71
272,Town & Country,There's no such thing as a small affair.,Peter Chelsom,6.73
273,Gone in Sixty Seconds,"Ice Cold, Hot Wired.",Dominic Sena,14.75
274,Gladiator,A Hero Will Rise.,Ridley Scott,14.80
275,Minority Report,The system is perfect until it comes after you.,Steven Spielberg,7.16
276,Harry Potter and the Chamber of Secrets,Hogwarts is back in session.,Chris Columbus,5.59
277,Casino Royale,Everyone has a past. Every legend has a beginning.,Martin Campbell,9.78
278,Planet of the Apes,You'll be sorry you were ever born human,Tim Burton,6.90
279,Terminator 2: Judgment Day,It's nothing personal.,James Cameron,6.94
280,Public Enemies,America's Most Wanted.,Michael Mann,14.94
281,American Gangster,There are two sides to the American dream,Ridley Scott,14.25
282,True Lies,"When he said I do, he never said what he did.",James Cameron,13.48
283,The Taking of Pelham 1 2 3,I can't get it out of my head. I'm gonna die today.,Tony Scott,13.92
284,Little Fockers,"Kids bring everyone closer, right?",Paul Weitz,12.90
285,The Other Guys,When the cops are busy... Our only hope is...,Adam McKay,8.24
286,Eraser,He will erase your past to protect your future.,Chuck Russell,6.68
287,Django Unchained,"Life, liberty and the pursuit of vengeance.",Quentin Tarantino,7.56
288,The Hunchback of Notre Dame,,Gary Trousdale,6.01
289,The Emperor's New Groove,It's All About.....ME!,Mark Dindal,12.97
290,The Expendables 2,Back for War.,Simon West,5.47
291,National Treasure,The greatest adventure history has ever revealed.,Jon Turteltaub,12.58
292,Eragon,"As darkness falls, the last dragon will choose its rider.",Stefen Fangmeier,10.18
293,Where the Wild Things Are,There's one in all of us.,Spike Jonze,6.36
294,Epic,Discover a world beyond your imagination,Chris Wedge,14.11
295,The Tourist,It all started when he met a woman,Florian Henckel von Donnersmarck,9.80
296,End of Days,Prepare for the end.,Peter Hyams,9.62
297,Blood Diamond,It will cost you everything.,Edward Zwick,13.84
298,The Wolf of Wall Street,EARN. SPEND. PARTY.,Martin Scorsese,11.69
299,Batman Forever,"Courage now, truth always...",Joel Schumacher,9.42
300,Starship Troopers,The only good bug is a dead bug.,Paul Verhoeven,11.88
301,Cloud Atlas,Everything is Connected,Tom Tykwer,7.97
302,Legend of the Guardians: The Owls of Ga'Hoole,On his way to finding a legend...he will become one.,Zack Snyder,8.67
303,Catwoman,CATch her in IMAX,Pitof,9.83
304,Hercules,"Before he was a legend, he was a man.",Brett Ratner,7.42
305,Treasure Planet,Find your place in the universe.,Ron Clements,6.50
306,Land of the Lost,Right place. Wrong time.,Brad Silberling,8.91
307,The Expendables 3,New team. New attitude. New mission.,Patrick Hughes,5.24
308,Point Break,The only law that matters is gravity,Ericson Core,8.36
309,Son of the Mask,Who's next?,Lawrence Guterman,12.55
310,In the Heart of the Sea,Based on the incredible true story that inspired Moby Dick,Ron Howard,12.00
311,The Adventures of Pluto Nash,Action's future has arrived...,Ron Underwood,11.92
312,Green Zone,Chief Warrant Officer Roy Miller is done following orders,Paul Greengrass,8.91
313,The Peanuts Movie,The story of an underdog. And his dog.,Steve Martino,11.06
314,The Spanish Prisoner,It's the oldest con in the book.,David Mamet,12.86
315,The Mummy Returns,The most powerful force on earth is about to be unleashed by the two people who should know better.,Stephen Sommers,8.67
316,Gangs of New York,America was born in the streets.,Martin Scorsese,5.94
317,金陵十三釵,,Zhang Yimou,12.83
318,Surf's Up,"In the coldest place on Earth, he's the hottest thing around.",Ash Brannon,11.47
319,The Stepford Wives,The wives of Stepford have a secret.,Frank Oz,14.79
320,Black Hawk Down,Leave No Man Behind.,Ridley Scott,8.27
321,The Campaign,May The Best Loser Win.,Jay Roach,9.47
322,The Fifth Element,There is no future without it.,Luc Besson,10.42
323,Sex and the City 2,Carrie on.,Michael Patrick King,10.19
324,The Road to El Dorado,They came for the gold... they stayed for the adventure.,Don Michael Paul,14.85
325,Ice Age: Continental Drift,"Manny, Diego, and Sid embark upon another adventure after their continent is set adrift.",Steve Martino,8.42
326,Cinderella,Midnight is just the beginning.,Kenneth Branagh,11.74
327,The Lovely Bones,The story of a life and everything that came after...,Peter Jackson,10.13
328,Finding Nemo,"There are 3.7 trillion fish in the ocean, they're looking for one.",Andrew Stanton,8.07
329,The Lord of the Rings: The Return of the King,The eye of the enemy is moving.,Peter Jackson,12.01
330,The Lord of the Rings: The Two Towers,A New Power Is Rising.,Peter Jackson,12.12
331,Seventh Son,"When darkness falls, the son will rise. When the son falls, the dark knight will rise.",Sergei Bodrov,5.37
332,Lara Croft: Tomb Raider,Born into Wealth. Groomed by the Elite. Trained for Combat.,Simon West,10.64
333,Transcendence,"Yesterday, Dr. Will Caster was only human...",Wally Pfister,13.28
334,Jurassic Park III,"This time, it's not just a walk in the park!",Joe Johnston,8.80
335,Rise of the Planet of the Apes,Evolution Becomes Revolution.,Rupert Wyatt,6.69
336,The Spiderwick Chronicles,Their World Is Closer Than You Think.,Mark Waters,6.10
337,A Good Day to Die Hard,Yippee Ki-Yay Mother Russia,John Moore,11.22
338,The Alamo,You will never forget,John Lee Hancock,6.70
339,The Incredibles,"No gut, no glory",Brad Bird,6.64
340,Cutthroat Island,The Course Has Been Set. There Is No Turning Back. Prepare Your Weapons. Summon Your Courage. Discover the Adventure of a Lifetime!,Renny Harlin,11.31
341,Percy Jackson & the Olympians: The Lightning Thief,Worlds Collide,Chris Columbus,13.73
342,Men in Black,Protecting the Earth from the scum of the universe.,Barry Sonnenfeld,10.83
343,Toy Story 2,The toys are back!,John Lasseter,11.04
344,Unstoppable,"1,000,000 Tons. 100,000 Lives. 100 Minutes.",Tony Scott,6.95
345,Rush Hour 2,Get ready for a second Rush!,Brett Ratner,7.68
346,What Lies Beneath,He was the perfect husband until his one mistake followed them home.,Robert Zemeckis,11.67
347,Cloudy with a Chance of Meatballs,Prepare to get served.,Phil Lord,10.01
348,Ice Age: Dawn of the Dinosaurs,You Won't Believe Your Ice!,Carlos Saldanha,7.00
349,The Secret Life of Walter Mitty,"Stop Dreaming, Start Living",Ben Stiller,8.90
350,Charlie's Angels,Get Some Action,McG,14.01
351,The Departed,Lies. Betrayal. Sacrifice. How far will you take it?,Martin Scorsese,9.69
352,Mulan,"This time, the princess saves the prince.",Tony Bancroft,10.76
353,Tropic Thunder,The movie they think they're making... isn't a movie anymore.,Ben Stiller,8.39
354,The Girl with the Dragon Tattoo,Evil shall with evil be expelled.,David Fincher,7.58
355,Die Hard: With a Vengeance,Think fast. Look alive. Die hard.,John McTiernan,5.16
356,Sherlock Holmes,Nothing escapes him.,Guy Ritchie,10.51
357,Ben-Hur,First to finish. Last to die.,Timur Bekmambetov,6.11
358,Atlantis: The Lost Empire,Atlantis is waiting...,Gary Trousdale,11.58
359,Alvin and the Chipmunks: The Road Chip,Fast & furry-ous,Walt Becker,6.07
360,Valkyrie,Many saw evil. They dared to stop it.,Bryan Singer,13.62
361,You Don't Mess with the Zohan,Lather. Rinse. Save the world.,Dennis Dugan,11.94
362,Pixels,Game On.,Chris Columbus,7.37
363,A.I. Artificial Intelligence,"David is 11 years old. He weighs 60 pounds. He is 4 feet, 6 inches tall. He has brown hair. His love is real. But he is not.",Steven Spielberg,12.00
364,The Haunted Mansion,Check your pulse at the door... if you have one.,Rob Minkoff,12.58
365,Contact,"If it's just us, it seems like an awful waste of space.",Robert Zemeckis,5.98
366,Hollow Man,What would you do if you knew you couldn't be seen?,Paul Verhoeven,7.71
367,The Interpreter,The truth needs no translation.,Sydney Pollack,11.51
368,Percy Jackson: Sea of Monsters,"Where There Are Gods, There Are Monsters.",Thor Freudenthal,12.09
369,Lara Croft Tomb Raider: The Cradle of Life,Adventuress Lara Croft goes on a quest to save the mythical Pandora's Box,Jan de Bont,11.24
370,Now You See Me 2,You Haven't Seen Anything Yet,Jon M. Chu,10.81
371,The Saint,Never reveal your name. Never turn your back. Never surrender your heart.,Phillip Noyce,12.29
372,Spy Game,It's not how you play the game. It's how the game plays you.,Tony Scott,9.92
373,Mission to Mars,Let There Be Life.,Brian De Palma,13.68
374,Rio,1 out of every 8 Americans is afraid of flying. Most of them don't have feathers.,Carlos Saldanha,14.07
375,Bicentennial Man,One robot's 200 year journey to become an ordinary man.,Chris Columbus,10.37
376,Volcano,The coast is toast,Mick Jackson,12.97
377,The Devil's Own,"They come from different worlds. They fight for different causes. Now, two men from opposite sides of the law are about to go to war.",Alan J. Pakula,8.46
378,K-19: The Widowmaker,Fate has found its hero.,Kathryn Bigelow,12.44
379,Conan the Barbarian,Thief. Warrior. Gladiator. King.,John Milius,10.57
380,Cinderella Man,One man's extraordinary fight to save the family he loved.,Ron Howard,11.15
381,The Nutcracker: The Untold Story,,Andrei Konchalovsky,13.25
382,Seabiscuit,The hopes of a nation rode on a long shot.,Gary Ross,11.73
383,Twister,The Dark Side of Nature.,Jan de Bont,14.85
384,Cast Away,"At the edge of the world, his journey begins.",Robert Zemeckis,14.41
385,Happy Feet,WARNING: May Cause Toe-Tapping.,George Miller,10.43
386,The Bourne Supremacy,They should have left him alone.,Paul Greengrass,6.92
387,Air Force One,The fate of a nation rests on the courage of one man.,Wolfgang Petersen,6.84
388,Ocean's Eleven,Are you in or out?,Steven Soderbergh,10.77
389,The Three Musketeers,Every legend has a new beginning.,Paul W.S. Anderson,5.66
390,Hotel Transylvania,Where monsters go to get away from it all,Genndy Tartakovsky,14.49
391,Enchanted,This fairytale princess is about to meet a real Prince Charming,Kevin Lima,9.10
392,Safe House,No one is safe,Daniel Espinosa,5.18
393,102 Dalmatians,Meet Two Unlikely Heroes With A Bone To Pick.,Kevin Lima,6.65
394,Tower Heist,Ordinary guys. An extraordinary robbery.,Brett Ratner,8.91
395,The Holiday,It's Christmas Eve and we are going to go celebrate being young and being alive.,Nancy Meyers,10.37
396,Enemy of the State,It's not paranoia if they're really after you.,Tony Scott,8.66
397,It's Complicated,First comes marriage. Then comes divorce. And then...,Nancy Meyers,8.07
398,Ocean's Thirteen,What are the odds of getting even? 13 to one.,Steven Soderbergh,9.33
399,Open Season,One Fur All & All Fur One,Jill Culton,9.23
400,Divergent,What makes you different makes you dangerous.,Neil Burger,12.14
401,Enemy at the Gates,Some Men Are Born To Be Heroes.,Jean-Jacques Annaud,5.97
402,The Rundown,cut to the chase,Peter Berg,10.09
403,Last Action Hero,This isn't the movies anymore.,John McTiernan,9.50
404,Memoirs of a Geisha,"My world is as forbidden as it is fragile; without its mysteries, it cannot survive.",Rob Marshall,14.35
405,The Fast and the Furious: Tokyo Drift,"On the streets of Tokyo, speed needs no translation...",Justin Lin,14.31
406,Arthur Christmas,Ever wonder how 2 Billion presents get delivered all in 1 night?,Barry Cook,13.76
407,Meet Joe Black,Sooner or later everyone does.,Martin Brest,14.05
408,Collateral Damage,What would you do if you lost everything?,Andrew Davis,13.82
409,All That Jazz,All that work. All that glitter. All that pain. All that love. All that crazy rhythm. All that jazz.,Bob Fosse,8.27
410,Mirror Mirror,The Snow White legend comes alive.,Tarsem Singh,9.96
411,Scott Pilgrim vs. the World,Get the hot girl. Defeat her evil exes. Hit love where it hurts.,Edgar Wright,13.08
412,The Core,Earth has a deadline.,Jon Amiel,5.68
413,Nutty Professor II: The Klumps,The Klumps are back!,Peter Segal,8.21
414,Scooby-Doo,Get a Clue,Raja Gosnell,9.65
415,Dredd,Judgement is coming,Pete Travis,13.60
416,Click,What If You Had A Remote... That Controlled Your Universe?,Frank Coraci,5.44
417,Creepshow,The Most Fun You'll Ever Have... BEING SCARED!,George A. Romero,9.02
418,Cats & Dogs 2 : The Revenge of Kitty Galore,Just like real spies... only furrier.,Brad Peyton,11.21
419,Jumper,anywhere is possible.,Doug Liman,11.97
420,Hellboy II: The Golden Army,Saving the world is a hell of a job.,Guillermo del Toro,7.29
421,Zodiac,There's more than one way to lose your life to a killer.,David Fincher,12.52
422,The 6th Day,Are You Who You Think You Are,Roger Spottiswoode,14.35
423,Bruce Almighty,In Bruce we trust,Tom Shadyac,7.74
424,The Expendables,Choose Your Weapon.,Sylvester Stallone,13.42
425,Mission: Impossible,Expect the Impossible.,Brian De Palma,9.81
426,The Hunger Games,May The Odds Be Ever In Your Favor.,Gary Ross,13.02
427,The Hangover Part II,The Wolfpack Is Back,Todd Phillips,11.82
428,Batman Returns,"The Bat, the Cat, the Penguin.",Tim Burton,14.26
429,Over the Hedge,Taking back the neighborhood... One snack at a time.,Karey Kirkpatrick,6.39
430,Lilo & Stitch,He's coming to our galaxy.,Chris Sanders,13.72
431,Charlotte's Web,"Something unexpected, unbelievable, unforgettable.",Gary Winick,7.78
432,Deep Impact,Heaven and Earth are about to collide.,Mimi Leder,10.76
433,RED 2,The best never rest.,Dean Parisot,6.96
434,The Longest Yard,"If you can't get out, get even.",Peter Segal,11.50
435,Alvin and the Chipmunks: Chipwrecked,This holiday it's gonna get squeaky.,Mike Mitchell,6.21
436,Grown Ups 2,Just because they're a little older doesn't mean they've grown up.,Dennis Dugan,7.45
437,Get Smart,Saving The World...And Loving It!,Peter Segal,6.96
438,Something's Gotta Give,Schmucks are people too.,Nancy Meyers,12.78
439,Shutter Island,Someone is missing.,Martin Scorsese,5.94
440,Four Christmases,"His father, her mother, his mother and her father all in one day.",Seth Gordon,9.25
441,Robots,You can shine no matter what you're made of.,Chris Wedge,6.39
442,Face/Off,"In order to catch him, he must become him.",John Woo,10.96
443,Bedtime Stories,Whatever they dream up... he has to survive.,Adam Shankman,6.65
444,Road to Perdition,Pray for Michael Sullivan.,Sam Mendes,12.45
445,Just Go with It,Sometimes a guy's best wingman... is a wingwoman,Dennis Dugan,8.63
446,Con Air,They were deadly on the ground; Now they have wings,Simon West,6.36
447,Eagle Eye,Don't walk. Run.,D.J. Caruso,12.31
448,Cold Mountain,Find the strength. Find the courage. No matter what it takes... find the way home.,Anthony Minghella,13.83
449,The Book of Eli,Some will kill to have it. He will kill to protect it.,Albert Hughes,10.34
450,Flubber,Catch it if you can!,Les Mayfield,11.87
451,The Haunting,Some houses are born bad.,Jan de Bont,12.44
452,Space Jam,Get ready to jam.,Joe Pytka,10.40
453,The Pink Panther,Pardon His French.,Shawn Levy,13.88
454,The Day the Earth Stood Still,12.12.08 is the Day the Earth Stood Still,Scott Derrickson,8.72
455,Conspiracy Theory,What if your most paranoid nightmares had just come true?,Richard Donner,9.26
456,Fury,War never ends quietly.,David Ayer,12.60
457,Six Days Seven Nights,"After this week in paradise, they’re going to need a vacation.",Ivan Reitman,9.76
458,Yogi Bear,Life's a Pic-A-Nic,Eric Brevig,12.78
459,Spirit: Stallion of the Cimarron,Leader. Hero. Legend.,Kelly Asbury,11.03
460,Zookeeper,Welcome to his jungle.,Frank Coraci,14.92
461,Lost in Space,"Danger, Will Robinson!",Stephen Hopkins,10.47
462,The Manchurian Candidate,This summer everything is under control.,Jonathan Demme,10.91
463,Déjà Vu,Your future is set...,Henry Jaglom,8.36
464,Hotel Transylvania 2,They're back to raise a little terror,Genndy Tartakovsky,8.16
465,Fantasia 2000,,James Algar,9.76
466,The Time Machine,The greatest adventure THROUGH all time!,Simon Wells,13.92
467,Mighty Joe Young,Survival is an instinct.,Ron Underwood,13.22
468,Swordfish,Log On. Hack In. Go Anywhere. Get Everything.,Dominic Sena,8.12
469,The Legend of Zorro,The original caped crusader is back!,Martin Campbell,5.18
470,What Dreams May Come,After life there is more. The end is just the beginning.,Vincent Ward,5.82
471,Little Nicky,He's Never Been To Earth. He's Never Even Slept Over Some Other Dude's House.,Steven Brill,8.35
472,The Brothers Grimm,Eliminating Evil Since 1812.,Terry Gilliam,6.81
473,Mars Attacks!,Nice planet. We'll take it!,Tim Burton,13.01
474,Évolution,,Lucile Hadzihalilovic,6.55
475,The Edge,"They were fighting over a woman when the plane went down. Now, their only chance for survival is each other.",Lee Tamahori,11.95
476,Surrogates,How do you save humanity when the only thing that's real is you?,Jonathan Mostow,11.20
477,Thirteen Days,You'll never believe how close we came,Roger Donaldson,7.84
478,Daylight,No air. No escape. No time.,Rob Cohen,7.17
479,Walking With Dinosaurs,The Greatest Adventure in 70 Million Years,Barry Cook,11.05
480,Battlefield Earth,Take Back The Planet,Roger Christian,8.50
481,Looney Tunes: Back in Action,Real life has never been so animated.,Joe Dante,13.08
482,Nine,"This Holiday Season, Be Italian",Rob Marshall,12.22
483,Timeline,They had to travel into the past to save the future,Richard Donner,9.41
484,The Postman,The year is 2013. One man walked in off the horizon and hope came with him.,Kevin Costner,13.38
485,Babe: Pig in the City,This little pig went to the city...,George Miller,6.21
486,The Last Witch Hunter,Hunt forever.,Breck Eisner,6.76
487,Red Planet,Not A Sound. Not A Warning. Not A Chance. Not Alone.,Antony Hoffman,6.11
488,Arthur et les Minimoys,Adventure awaits in your own backyard.,Luc Besson,13.52
489,Oceans,Explore the depths of our planet's oceans.  Experience the stories that connect their world to ours.,Jacques Perrin,14.82
490,A Sound of Thunder,Some Rules Should Never Be Broken.,Peter Hyams,10.50
491,Pompeii,No warning. No escape.,Paul W.S. Anderson,7.78
492,Don Gato: El inicio de la pandilla,,Andr\u00e9s Couturier,14.81
493,A Beautiful Mind,I need to believe that something extra ordinary is possible...,Ron Howard,13.21
494,The Lion King,Life's greatest adventure is finding your place in the Circle of Life.,Roger Allers,11.32
495,Journey 2: The Mysterious Island,Believe the Impossible. Discover the Incredible.,Brad Peyton,5.14
496,Cloudy with a Chance of Meatballs 2,Something big was leftover.,Cody Cameron,9.67
497,Red Dragon,Before the Silence.,Brett Ratner,8.13
498,Hidalgo,Unbridled. Unbroken. Unbeaten.,Joe Johnston,14.38
499,Jack and Jill,His twin sister is coming for the holidays... ...and it ain't pretty.,Dennis Dugan,11.16
500,2 Fast 2 Furious,How Fast Do You Want It?,John Singleton,6.48
501,The Little Prince,Growing up isn't the problem... forgetting is.,Mark Osborne,6.56
502,The Invasion,Do not trust anyone. Do not show emotion. Do not fall asleep.,Oliver Hirschbiegel,14.93
503,The Adventures of Rocky & Bullwinkle,This summer it's not the same old bull.,Des McAnuff,10.84
504,The Secret Life of Pets,Think this is what they do all day?,Chris Renaud,11.90
505,The League of Extraordinary Gentlemen,The power of seven become a league of one.,Stephen Norrington,8.44
506,Despicable Me 2,Back 2 Work,Pierre Coffin,11.54
507,Independence Day,Earth. Take a good look. It might be your last.,Roland Emmerich,13.69
508,The Lost World: Jurassic Park,Something has survived.,Steven Spielberg,12.02
509,Madagascar,Someone's got a zoo loose.,Eric Darnell,5.23
510,Children of Men,The future's a thing of the past.,Alfonso Cuar\u00f3n,5.69
511,X-Men,Evolution Begins,Bryan Singer,9.29
512,Wanted,Choose your destiny.,Timur Bekmambetov,7.46
513,The Rock,Alcatraz.  Only one man has ever broken out.  Now five million lives depend on two men breaking in.,Michael Bay,8.51
514,Ice Age: The Meltdown,The Ice age is melting away.,Carlos Saldanha,5.92
515,50 First Dates,Imagine having to win over the girl of your dreams... every friggin' day.,Peter Segal,9.04
516,Hairspray,"When you follow your own beat, the world will follow you.",Adam Shankman,11.84
517,Exorcist: The Beginning,Go back to where the horror began.,Renny Harlin,9.86
518,Inspector Gadget,The greatest hero ever assembled.,David Kellogg,12.78
519,Now You See Me,4 amazing magicians. 3 impossible heists. 1 billion dollars. This is no illusion.,Louis Leterrier,14.46
520,Grown Ups,Boys will be boys. . . some longer than others.,Dennis Dugan,13.97
521,The Terminal,Life is waiting.,Steven Spielberg,11.27
522,Hotel for Dogs,No stray gets turned away.,Thor Freudenthal,8.66
523,Vertical Limit,The Mountain Will Decide.,Martin Campbell,10.31
524,Charlie Wilson's War,Based on a true story. You think we could make all this up?,Mike Nichols,7.64
525,Shark Tale,The story of what happens when one little fish tells a great white lie...,Vicky Jenson,12.72
526,Dreamgirls,One Dream Will Change Everything,Bill Condon,14.81
527,Be Cool,Everyone is looking for the next big hit,F. Gary Gray,6.68
528,Munich,The world was watching in 1972 as 11 Israeli athletes were murdered at the Munich Olympics. This is the story of what happened next.,Steven Spielberg,5.55
529,Tears of the Sun,He was trained to follow orders. He became a hero by defying them.,Antoine Fuqua,6.59
530,Killers,Perfect wife. Perfect target.,Robert Luketic,12.77
531,The Man from U.N.C.L.E.,Saving the world never goes out of style.,Guy Ritchie,13.70
532,Spanglish,Every family has a hero.,James L. Brooks,8.48
533,Monster House,The House is . . . ALIVE!,Gil Kenan,12.76
534,Bandits,"Two's company, three's a crime.",Barry Levinson,12.68
535,First Knight,Their greatest battle would be for her love.,Jerry Zucker,6.99
536,Anna and the King,,Andy Tennant,13.54
537,Immortals,The Gods need a hero.,Tarsem Singh,5.99
538,Hostage,Every Second Counts,Florent-Emilio Siri,12.50
539,Titan A.E.,"When Earth Ends, The Adventure Begins.",Gary Goldman,5.64
540,Hollywood Homicide,,Ron Shelton,5.72
541,Soldier,"Left for dead on a remote planet for obsolete machines and people, a fallen hero has one last battle to fight",Paul W.S. Anderson,6.19
542,Carriers,"The rules are simple. You break them, you die...",\u00c0lex Pastor,14.40
543,Monkeybone,"If It Yells, If It Swings, It's Got To Be Monkeybone!",Henry Selick,7.28
544,Flight of the Phoenix,"Out of the ashes, hope will rise.",John Moore,8.33
545,Unbreakable,Some things are only revealed by accident.,M. Night Shyamalan,11.72
546,Minions,"Before Gru, they had a history of bad bosses",Kyle Balda,6.16
547,Sucker Punch,You will be unprepared,Zack Snyder,11.26
548,Snake Eyes,Believe everything except your eyes.,Brian De Palma,7.59
549,Sphere,"A thousand feet beneath the sea, the blackest holes are in the mind...",Barry Levinson,12.69
550,The Angry Birds Movie,Why so angry?,Fergal Reilly,14.27
551,Fool's Gold,This February True Love Takes a Dive.,Andy Tennant,12.91
552,Funny People,"George Simmons was prepared to die, but then a funny thing happened.",Judd Apatow,12.49
553,The Kingdom,How do you stop an enemy who isn't afraid to die?,Peter Berg,6.60
554,Talladega Nights: The Ballad of Ricky Bobby,The story of a man who could only count to #1,Adam McKay,12.01
555,Dr. Dolittle 2,The doctor is in again.,Steve Carr,9.86
556,Braveheart,Every man dies. Not every man truly lives.,Mel Gibson,14.41
557,Jarhead,Welcome to the suck.,Sam Mendes,7.53
558,The Simpsons Movie,See our family. And feel better about yours.,David Silverman,9.38
559,The Majestic,Sometimes your life comes into focus one frame at a time.,Frank Darabont,6.79
560,Driven,Get ready for the race of your life.,Renny Harlin,10.93
561,Deux frères,"Two infant tiger cubs, separated from their parents and each other.",Jean-Jacques Annaud,12.56
562,The Village,There is no turning back,M. Night Shyamalan,10.90
563,Doctor Dolittle,He doesn't just talk to the animals!,Betty Thomas,5.80
564,Signs,It’s not like they didn’t warn us.,M. Night Shyamalan,14.48
565,Shrek 2,Once upon another time...,Andrew Adamson,14.84
566,Cars,Ahhh... it's got that new movie smell.,John Lasseter,13.22
567,Runaway Bride,Catch her if you can.,Garry Marshall,11.49
568,xXx,A New Breed Of Secret Agent.,Rob Cohen,12.64
569,The SpongeBob Movie: Sponge Out of Water,He's leaving his world behind.,Paul Tibbitt,7.27
570,Ransom,Someone is going to pay.,Ron Howard,14.99
571,Inglourious Basterds,Once upon a time in Nazi occupied France...,Quentin Tarantino,7.31
572,Hook,What if Peter Pan grew up?,Steven Spielberg,8.59
573,Die Hard 2,Die Harder,Renny Harlin,7.31
574,S.W.A.T.,You're either S.W.A.T. or you're not.,Clark Johnson,10.12
575,Vanilla Sky,"Forget everything you know, and open your eyes.",Cameron Crowe,6.49
576,Lady in the Water,Time is running out for a happy ending.,M. Night Shyamalan,11.26
577,AVP: Alien vs. Predator,Whoever wins... We lose,Paul W.S. Anderson,6.31
578,Alvin and the Chipmunks: The Squeakquel,The Boys are back in town... and they have competition.,Betty Thomas,7.02
579,We Were Soldiers,400 U.S paratroopers. 4000 Vietnamese soldiers. 12 000 miles away from home. 1 man led them into battle.,Randall Wallace,12.67
580,Olympus Has Fallen,When our flag falls our nation will rise.,Antoine Fuqua,13.48
581,Star Trek: Insurrection,The battle for paradise has begun.,Jonathan Frakes,9.93
582,Battle: Los Angeles,It's not war. It's survival.,Jonathan Liebesman,7.50
583,Big Fish,An adventure as big as life itself.,Tim Burton,6.94
584,Wolf,The animal is out.,Mike Nichols,12.82
585,War Horse,Separated by War. Tested by Battle. Bound by Friendship.,Steven Spielberg,13.45
586,The Monuments Men,It was the greatest art heist in history,George Clooney,7.65
587,The Abyss,"There's everything you've ever known about adventure, and then there's The Abyss.",James Cameron,10.21
588,Wall Street: Money Never Sleeps,Gordon never gives up.,Oliver Stone,12.87
589,Dracula Untold,Every bloodline has a beginning,Gary Shore,11.09
590,The Siege,On November 6th our freedom is history,Edward Zwick,12.27
591,Stardust,This Summer A Star Falls. The Chase Begins.,Matthew Vaughn,14.08
592,Seven Years in Tibet,At the end of the world his real journey began.,Jean-Jacques Annaud,10.73
593,The Dilemma,Two best friends. Nothing could come between them... or could it?,Ron Howard,10.23
594,Bad Company,Two Mismatched Partners. One Messed Up Case!,Joel Schumacher,7.19
595,Doom,No one gets out alive.,Andrzej Bartkowiak,10.25
596,I Spy,Attitude meets espionage.,Betty Thomas,9.96
597,Underworld: Awakening,Vengeance Returns,M\u00e5ns M\u00e5rlind,10.57
598,Rock of Ages,Nothin' but a good time,Adam Shankman,8.22
599,Hart's War,"Beyond Courage, Beyond Honor.",Gregory Hoblit,14.25
600,Killer Elite,May the best man live.,Gary McKendry,6.43
601,Rollerball,Go Ballistic,John McTiernan,14.99
602,Ballistic: Ecks vs. Sever,,Wych Kaosayananda,14.54
603,Hard Rain,"In the worst storm in living memory, one guard stands between five men and three million dollars.",Mikael Salomon,8.19
604,Osmosis Jones,Every BODY needs a hero,Bobby Farrelly,12.50
605,Legends of Oz: Dorothy's Return,There's trouble in OZ...,Dan St. Pierre,12.98
606,Blackhat,We are no longer in control.,Michael Mann,13.92
607,Sky Captain and the World of Tomorrow,Who will save us?,Kerry Conran,14.65
608,Basic Instinct 2,Everything interesting begins in the mind,Michael Caton-Jones,8.06
609,Escape Plan,No one breaks out alone.,Mikael H\u00e5fstr\u00f6m,14.85
610,The Legend of Hercules,Every Man Has a Destiny,Renny Harlin,5.38
611,The Sum of All Fears,"27,000 nuclear weapons. One is missing.",Phil Alden Robinson,9.39
612,The Twilight Saga: Eclipse,It all begins ... With a choice.,David Slade,10.75
613,The Score,There are no partners in crime,Frank Oz,13.80
614,Despicable Me,Superbad. Superdad.,Pierre Coffin,10.57
615,Money Train,"Get on, or GET OUT THE WAY!",Joseph Ruben,10.54
616,Ted 2,"Ted is Coming, Again.",Seth MacFarlane,13.03
617,Agora,"Alexandria, Egypt. 391 A.D. The World Changed Forever.",Alejandro Amen\u00e1bar,14.50
618,Mystery Men,"We're not your classic heroes, we're the other guys.",Kinka Usher,9.22
619,Hall Pass,"One Week, No Rules",Bobby Farrelly,10.69
620,The Insider,Two men driven to tell the truth... whatever the cost.,Michael Mann,8.27
621,The Finest Hours,"32 survivors, room for 12.",Craig Gillespie,10.40
622,Body of Lies,Trust no one. Deceive everyone.,Ridley Scott,10.94
623,Dinner for Schmucks,Takes One To Know One.,Jay Roach,14.10
624,Abraham Lincoln: Vampire Hunter,Are you a patriot or a vampire?,Timur Bekmambetov,11.58
625,Entrapment,The trap is set.,Jon Amiel,7.97
626,The X Files,Fight the Future,Rob Bowman,5.60
627,The Last Legion,The end of an empire...the beginning of a legend.,Doug Lefler,11.24
628,Saving Private Ryan,The mission is a man.,Steven Spielberg,8.21
629,Need for Speed,For honor. For love. For redemption.,Scott Waugh,14.66
630,What Women Want,He has the power to hear everything women are thinking. Finally... a man is listening.,Nancy Meyers,6.17
631,Ice Age,They came. They thawed. They conquered.,Chris Wedge,9.02
632,Dreamcatcher,A circle of friendship. A web of mystery. A pattern of fear.,Lawrence Kasdan,12.91
633,Lincoln,"With the moral courage and fierce determination to succeed, his choices will change the fate of generations to come.",Steven Spielberg,12.97
634,The Matrix,Welcome to the Real World.,Lilly Wachowski,8.24
635,Apollo 13,"Houston, we have a problem.",Ron Howard,8.58
636,The Santa Clause 2,What's Christmas Fun without some Reindeer Games?,Michael Lembeck,6.41
637,Les Misérables,Fight. Dream. Hope. Love.,Tom Hooper,8.16
638,You've Got Mail,Someone you pass on the street may already be the love of your life.,Nora Ephron,8.62
639,Step Brothers,They grow up so fast.,Adam McKay,6.32
640,The Mask of Zorro,No one has seen his face... but everyone ... knows this mark.,Martin Campbell,6.83
641,Due Date,Leave Your Comfort Zone,Todd Phillips,8.88
642,Unbroken,Survival. Resilience. Redemption.,Angelina Jolie,7.63
643,Space Cowboys,Space will never be the same.,Clint Eastwood,11.92
644,Cliffhanger,The height of adventure.,Renny Harlin,10.44
645,Broken Arrow,Prepare to Go Ballistic.,John Woo,6.72
646,The Kid,Nobody ever grows up quite like they imagined.,Jon Turteltaub,13.18
647,World Trade Center,The world saw evil that day. Two men saw something else.,Oliver Stone,13.30
648,Mona Lisa Smile,"In a world that told them how to think, she showed them how to live.",Mike Newell,6.08
649,The Dictator,kurd,Larry Charles,5.46
650,Eyes Wide Shut,Cruise. Kidman. Kubrick.,Stanley Kubrick,9.96
651,Annie,It's a Hard Knock Life,Will Gluck,7.59
652,Focus,Never Drop The Con.,Glenn Ficarra,10.24
653,This Means War,It's SPY Against SPY,McG,5.02
654,Blade: Trinity,The final hunt begins.,David S. Goyer,10.62
655,Red Dawn,,John Milius,13.29
656,Primary Colors,What went down on the way to the top.,Mike Nichols,10.20
657,Resident Evil: Retribution,The Ultimate Battle Begins,Paul W.S. Anderson,7.44
658,Death Race,Get ready for a killer race.,Paul W.S. Anderson,6.58
659,The Long Kiss Goodnight,What's forgotten is not always gone.,Renny Harlin,6.23
660,Proof of Life,,Taylor Hackford,5.12
661,Zathura: A Space Adventure,Adventure Is Waiting,Jon Favreau,7.32
662,Fight Club,Mischief. Mayhem. Soap.,David Fincher,10.23
663,We Are Marshall,From the ashes we rose.,McG,5.55
664,Hudson Hawk,Danger is his middle name.,Michael Lehmann,5.91
665,Lucky Numbers,When they put their heads together... it's a no brainer.,Nora Ephron,11.50
666,"I, Frankenstein","In the battle between good and evil, an immortal holds the key",Stuart Beattie,9.54
667,Oliver Twist,,Roman Polanski,9.61
668,Elektra,Looks can kill,Rob Bowman,5.70
669,Sin City: A Dame to Kill For,There is no justice without sin.,Robert Rodriguez,12.36
670,Random Hearts,In a perfect world...they never would have met.,Sydney Pollack,8.36
671,Everest,The Storm Awaits.,Baltasar Korm\u00e1kur,13.70
672,Perfume: The Story of a Murderer,Based on the best-selling novel,Tom Tykwer,12.52
673,Austin Powers in Goldmember,He's still evil... He's still deadly... and he's still surrounded by frickin' idiots!,Jay Roach,5.57
674,Astro Boy,Have a blast.,David Bowers,13.93
675,Jurassic Park,An adventure 65 million years in the making.,Steven Spielberg,8.81
676,Wyatt Earp,The epic story of love and adventure in a lawless land.,Lawrence Kasdan,7.48
677,Clear and Present Danger,The war of drugs would lead him to the war of power.,Phillip Noyce,5.62
678,天將雄師,When the Eagle meets the Dragon,Daniel Lee,8.02
679,Little Man,Big things come in small packages,Keenen Ivory Wayans,10.30
680,U-571,Heroes are ordinary men who do extraordinary things in extraordinary times.,Jonathan Mostow,7.58
681,The American President,Why can't the most powerful man in the world have the one thing he wants most?,Rob Reiner,7.54
682,The Love Guru,His Karma is Huge,Marco Schnabel,13.92
683,3000 Miles to Graceland,Crime Is King.,Demian Lichtenstein,14.78
684,The Hateful Eight,No one comes up here without a damn good reason.,Quentin Tarantino,12.52
685,Blades of Glory,Kick Some Ice.,Josh Gordon,5.98
686,Hop,"Candy, chicks and rock 'n' roll.",Tim Hill,9.03
687,300,"Spartans, prepare for glory!",Zack Snyder,12.76
688,Meet the Fockers,Misery loves family.,Jay Roach,13.42
689,Marley & Me,Heel the love.,David Frankel,6.58
690,The Green Mile,Miracles do happen.,Frank Darabont,5.33
691,Wild Hogs,A lot can happen on the road to nowhere.,Walt Becker,5.47
692,Chicken Little,"When it comes to saving the world, it helps to be a little chicken.",Mark Dindal,6.46
693,Gone Girl,You don't know what you've got 'til it's...,David Fincher,8.16
694,The Bourne Identity,He was the perfect weapon until he became the target.,Doug Liman,6.84
695,GoldenEye,No limits. No fears. No substitutes.,Martin Campbell,11.96
696,The General's Daughter,Go behind the lies.,Simon West,7.79
697,The Truman Show,On the air. Unaware.,Peter Weir,8.51
698,The Prince of Egypt,The Power Is Real.,Simon Wells,13.68
699,Daddy Day Care,Who's your daddy?,Steve Carr,13.93
700,2 Guns,"2 Guns, 1 Bank.",Baltasar Korm\u00e1kur,7.43
701,Cats & Dogs,Things Are Gonna Get Hairy!,Lawrence Guterman,14.77
702,The Italian Job,Get in. Get out. Get even.,F. Gary Gray,11.12
703,Two Weeks Notice,Over. Done. Finished. A comedy about love at last glance.,Marc Lawrence,14.18
704,Antz,Every ant has his day.,Eric Darnell,12.10
705,Couples Retreat,It may be paradise... but it's no vacation.,Peter Billingsley,5.53
706,Days of Thunder,You can't stop the thunder.,Tony Scott,5.91
707,Cheaper by the Dozen 2,Same Big Family... Even Bigger Adventure.,Adam Shankman,12.95
708,Maze Runner: The Scorch Trials,The Maze Was Just the Beginning.,Wes Ball,14.93
709,Eat Pray Love,Let Yourself GO,Ryan Murphy,5.55
710,The Family Man,"What if you made different choices? What if you said yes, instead of no? What if you got a second chance?",Brett Ratner,14.94
711,RED,Still armed. Still dangerous. Still got it.,Robert Schwentke,14.46
712,Any Given Sunday,Play or be Played.,Oliver Stone,12.45
713,The Horse Whisperer,,Robert Redford,12.41
714,Collateral,It started like any other night.,Michael Mann,14.83
715,The Scorpion King,Warrior. Legend. King.,Chuck Russell,8.59
716,Ladder 49,Their greatest challenge lies in rescuing one of their own,Jay Russell,9.29
717,Jack Reacher,The Law Has Limits. He Does Not.,Christopher McQuarrie,6.45
718,Deep Blue Sea,Bigger. Smarter. Faster. Meaner.,Renny Harlin,6.60
719,Michael Jackson's This Is It,Like You've Never Seen Him Before,Kenny Ortega,9.91
720,Contagion,Nothing spreads like fear,Steven Soderbergh,13.08
721,Kangaroo Jack,He stole the money... And he's not giving it back.,David McNally,10.65
722,Coraline,Be careful what you wish for.,Henry Selick,6.32
723,The Happening,We've Sensed It. We've Seen The Signs. Now... It's Happening.,M. Night Shyamalan,7.54
724,Man on Fire,"Creasy's art is death, and he is about to paint his masterpiece.",Tony Scott,6.35
725,The Shaggy Dog,It's going to be a ruff day.,Brian Robbins,12.87
726,Starsky & Hutch,They're the man.,Todd Phillips,14.44
727,Jingle All the Way,"Two Dads, One Toy, No Prisoners.",Brian Levant,7.78
728,Hellboy,From the Dark Side to Our Side.,Guillermo del Toro,8.30
729,A Civil Action,Justice has its price.,Steven Zaillian,8.23
730,ParaNorman,It's all fun and games until someone raises the dead.,Sam Fell,6.79
731,The Jackal,How do you stop an assassin who has no identity?,Michael Caton-Jones,14.77
732,Paycheck,Remember the future.,John Woo,13.28
733,Up Close & Personal,"Every Day we Have, is One More Than We Deserve.",Jon Avnet,8.04
734,The Tale of Despereaux,Small Mouse. Big Dreams,Robert Stevenhagen,13.11
735,The Tuxedo,Suit up for action!,Kevin Donovan,6.02
736,Under Siege 2: Dark Territory,Last time he rocked the boat. This time the sky's the limit.,Geoff Murphy,5.56
737,Jack Ryan: Shadow Recruit,Trust no one.,Kenneth Branagh,10.99
738,Joy,,David O. Russell,10.60
739,London Has Fallen,The world's leaders have assembled. So have their enemies.,Babak Najafi,9.20
740,Alien: Resurrection,It's already too late.,Jean-Pierre Jeunet,14.22
741,Shooter,Yesterday was about honor. Today is about justice.,Antoine Fuqua,8.30
742,The Boxtrolls,When troubles strikes friends stack together,Anthony Stacchi,7.97
743,Practical Magic,"For two sisters from a family of witches, falling in love is the trickiest spell of all.",Griffin Dunne,12.09
744,The Lego Movie,The story of a nobody who saved everybody.,Phil Lord,5.45
745,Miss Congeniality 2: Armed and Fabulous,You might feel a little prick,John Pasquin,11.01
746,Reign of Fire,Fight Fire With Fire,Rob Bowman,5.97
747,Gangster Squad,No Names. No Badges. No Mercy.,Ruben Fleischer,6.39
748,Year One,Meet your ancestors,Harold Ramis,7.64
749,Invictus,His people needed a leader. He gave them a champion.,Clint Eastwood,8.78
750,State of Play,Find The Truth,Kevin Macdonald,14.12
751,Duplicity,Outwit. Outspy. Outsmart. Outplay. Then get out.,Tony Gilroy,5.39
752,My Favorite Martian,The martian has landed. There goes the neighborhood.,Donald Petrie,10.72
753,The Sentinel,"In 141 years, there's never been a traitor in the Secret Service.... Until Now.",Clark Johnson,7.32
754,Planet 51,Something strange is coming to their planet...Us!,Jorge Blanco,11.63
755,Star Trek: Nemesis,A generation's final journey... begins.,Stuart Baird,12.03
756,Intolerable Cruelty,They can't keep their hands off each others assets.,Joel Coen,7.89
757,Trouble with the Curve,Whatever Life Throws at You,Robert Lorenz,9.91
758,Edge of Darkness,Some secrets take us to the edge.,Martin Campbell,11.15
759,The Relic,The Next Evolution In Terror.,Peter Hyams,5.03
760,Analyze That,Back in therapy,Harold Ramis,13.56
761,Righteous Kill,Most people respect the badge. Everybody respects the gun.,Jon Avnet,6.77
762,Mercury Rising,Someone knows too much.,Harold Becker,13.49
763,The Soloist,Life has a mind of its own,Joe Wright,12.02
764,The Legend of Bagger Vance,It Was Just A Moment Ago.,Robert Redford,14.56
765,Almost Famous,Experience it. Enjoy it. Just don't fall for it.,Cameron Crowe,5.04
766,Garfield: A Tail of Two Kitties,The Ego has landed.,Tim Hill,12.92
767,xXx: State of the Union,Prepare for the next level,Lee Tamahori,13.25
768,Priest,Vampire Killer,Scott Stewart,8.98
769,Sinbad: Legend of the Seven Seas,,Tim Johnson,7.37
770,Event Horizon,Infinite Space - Infinite Terror,Paul W.S. Anderson,6.99
771,Dragonfly,When someone you love dies... are they gone forever?,Tom Shadyac,5.20
772,The Black Dahlia,Inspired by the most notorious unsolved murder in California history.,Brian De Palma,13.78
773,Flyboys,Inspired by a true story,Tony Bill,9.35
774,The Last Castle,A Castle Can Only Have One King,Rod Lurie,13.42
775,Supernova,"In the farthest reaches of space, something has gone terribly wrong.",Walter Hill,14.92
776,Winter's Tale,This is not a true story. This is true love.,Akiva Goldsman,14.18
777,The Mortal Instruments: City of Bones,You have been chosen,Harald Zwart,7.25
778,Meet Dave,There's a Whole Other World Going on Inside of Him.,Brian Robbins,8.70
779,Dark Water,"This Season, The Mystery Of The Darkness Will Consume Your Life",Walter Salles,13.52
780,Edtv,Fame. Be careful. It's out there.,Ron Howard,9.24
781,Inkheart,Every story ever written is just waiting to become real.,Iain Softley,8.34
782,The Spirit,I'm gonna kill you all kinds of dead.,Frank Miller,6.66
783,Mortdecai,Sophistication Has a Name.,David Koepp,12.79
784,In the Name of the King: A Dungeon Siege Tale,Rise and fight,Uwe Boll,7.47
785,Beyond Borders,Where hope survives.,Martin Campbell,7.96
786,西游记之孙悟空三打白骨精,,Soi Cheang,12.00
787,The Great Raid,The most daring rescue mission of our time is a story that has never been told,John Dahl,13.61
788,Deadpool,Witness the beginning of a happy ending,Tim Miller,12.12
789,Holy Man,The Comedy Where Nothing's Sacred!,Stephen Herek,12.47
790,American Sniper,The most lethal sniper in U.S. history.,Clint Eastwood,6.15
791,Goosebumps,The stories are alive.,Rob Letterman,14.71
792,Just Like Heaven,It's a wonderful afterlife.,Mark Waters,11.88
793,The Flintstones in Viva Rock Vegas,Get ready to rock!,Brian Levant,5.76
794,Rambo III,The first was for himself. The second for his country. This time it's to save his friend.,Peter MacDonald,7.92
795,Leatherheads,"If Love Is a Game, Who'll Make the First Pass?",George Clooney,7.97
796,The Ridiculous 6,,Frank Coraci,12.46
797,Did You Hear About the Morgans?,We're not in Manhattan anymore.,Marc Lawrence,5.28
798,The Internship,Hiring them was a brilliant mistake.,Shawn Levy,11.35
799,Resident Evil: Afterlife,She's back...And she's bringing a few of her friends.,Paul W.S. Anderson,9.39
800,Red Tails,High-Octane Action and Daring Dogfights!,Anthony Hemingway,10.67
801,The Devil's Advocate,Evil has its winning ways.,Taylor Hackford,9.16
802,That's My Boy,The story of a child… and his son.,Sean Anders,5.13
803,DragonHeart,You will believe.,Rob Cohen,5.39
804,After the Sunset,Who will walk away?,Brett Ratner,9.55
805,Ghost Rider: Spirit of Vengeance,He Rides Again.,Brian Taylor,5.23
806,Captain Corelli's Mandolin,,John Madden,5.34
807,The Pacifier,Welcome to the infantry.,Adam Shankman,5.36
808,Walking Tall,One man will stand up for what's right.,Kevin Bray,10.49
809,Forrest Gump,"The world will never be the same, once you've seen it through the eyes of Forrest Gump.",Robert Zemeckis,5.13
810,Alvin and the Chipmunks,Get your squeak on!,Tim Hill,13.84
811,Meet the Parents,First comes love. Then comes the interrogation.,Jay Roach,5.94
812,Pocahontas,An American legend comes to life.,Mike Gabriel,7.16
813,Superman,You'll Believe a Man Can Fly!,Richard Donner,8.34
814,The Nutty Professor,"Inside Sherman Klump, a party animal is about to break out.",Tom Shadyac,12.40
815,Hitch,The cure for the common man.,Andy Tennant,11.23
816,George of the Jungle,Watch out!,Sam Weisman,13.20
817,American Wedding,Forever hold your piece.,Jesse Dylan,8.32
818,Captain Phillips,Out here survival is everything.,Paul Greengrass,7.99
819,Date Night,One ordinary couple. One little white lie.,Shawn Levy,5.39
820,Casper,Get an afterlife,Brad Silberling,9.25
821,The Equalizer,What do you see when you look at me?,Antoine Fuqua,6.81
822,Maid in Manhattan,,Wayne Wang,14.35
823,Crimson Tide,Danger runs deep.,Tony Scott,5.00
824,The Pursuit of Happyness,,Gabriele Muccino,10.31
825,Flightplan,If Someone Took Everything You Live For... How Far Would You Go To Get It Back?,Robert Schwentke,6.83
826,Disclosure,Sex Is Power.,Barry Levinson,10.66
827,City of Angels,She didn't believe in angels until she fell in love with one.,Brad Silberling,11.32
828,Kill Bill: Vol. 1,Go for the kill.,Quentin Tarantino,8.03
829,Bowfinger,The con is on.,Frank Oz,6.01
830,Kill Bill: Vol. 2,The bride is back for the final cut.,Quentin Tarantino,9.49
831,Tango & Cash,Two of L.A.'s top rival cops are going to have to work together... Even if it kills them.,Andrei Konchalovsky,7.46
832,Death Becomes Her,In one small bottle... The fountain of youth. The secret of eternal life. The power of an ancient potion. Sometimes it works... sometimes it doesn't.,Robert Zemeckis,8.91
833,Shanghai Noon,The old west meets the far east.,Tom Dey,8.53
834,Executive Decision,Fasten your seat belts,Stuart Baird,7.31
835,Mr. Popper's Penguins,,Mark Waters,5.07
836,The Forbidden Kingdom,The battle for eternity is the fantasy of a lifetime.,Rob Minkoff,5.50
837,Free Birds,Hang On To Your Nuggets,Jimmy Hayward,5.22
838,Alien³,The bitch is back.,David Fincher,8.64
839,Evita,The Most Anticipated Motion Picture Event of The Year,Alan Parker,8.60
840,Ronin,Your ally could become your enemy.,John Frankenheimer,13.92
841,The Ghost and the Darkness,Prey For The Hunters,Stephen Hopkins,8.81
842,Paddington,The Adventure Begins,Paul King,10.03
843,The Watch,Got Protection?,Akiva Schaffer,7.84
844,The Hunted,Some men should not be found.,William Friedkin,5.89
845,Instinct,,Jon Turteltaub,6.61
846,Stuck on You,"Whatever happens to the boys, one thing is certain. Nothing will ever come between them.",Bobby Farrelly,12.95
847,Semi-Pro,Putting the funk into the dunk.,Kent Alterman,10.38
848,The Pirates! In an Adventure with Scientists!,It's A Plunderful Life,Peter Lord,8.12
849,Changeling,"To find her son, she did what no one else dared.",Clint Eastwood,12.85
850,Chain Reaction,Reaction Time 8-4-96,Andrew Davis,11.71
851,The Fan,All fans have a favorite player.  This one has a favorite target.,Tony Scott,5.30
852,The Phantom of the Opera,The classic musical comes to the big screen for the first time.,Joel Schumacher,5.69
853,Elizabeth: The Golden Age,Woman. Warrior. Queen.,Shekhar Kapur,10.98
854,Æon Flux,The Perfect World Meets The Perfect Assassin,Karyn Kusama,8.27
855,Gods and Generals,The nations heart was touched by...,Ronald F. Maxwell,9.37
856,Turbulence,"If you weren't afraid of flying before, you will be now.",Robert Butler,13.55
857,Imagine That,What if your daughter's imagination... Was the secret to your success?,Karey Kirkpatrick,13.61
858,Muppets Most Wanted,Taking the world by farce,James Bobin,9.30
859,Thunderbirds,,Jonathan Frakes,6.99
860,Burlesque,It takes a legend... to make a star,Steve Antin,9.05
861,Un long dimanche de fiançailles,Never let go,Jean-Pierre Jeunet,6.97
862,Lolita,How did they ever make a movie of ...,Stanley Kubrick,6.19
863,D-Tox,Survival is a Killer.,Jim Gillespie,9.20
864,Blade II,Faster. Sharper. Deadlier.,Guillermo del Toro,6.17
865,Seven Pounds,Seven names. Seven strangers. One secret.,Gabriele Muccino,11.10
866,Bullet to the Head,Revenge Never Gets Old.,Walter Hill,9.42
867,The Godfather: Part III,All the power on earth can't change destiny.,Francis Ford Coppola,9.56
868,Elizabethtown,It's a heck of a place to find yourself,Cameron Crowe,10.93
869,"You, Me and Dupree",Two's company. Dupree's a crowd.,Anthony Russo,8.00
870,Superman II,The Man of Steel meets his match!,Richard Lester,7.37
871,Gigli,Life doesn't play by the rules.,Martin Brest,8.18
872,All the King's Men,Some people will do anything to gain power. Some will do anything to keep it.,Steven Zaillian,7.59
873,Shaft,"Still the man, any questions?",John Singleton,9.33
874,Anastasia,Discover the Adventure Behind the Greatest Mystery of Our Time.,Gary Goldman,5.57
875,Moulin Rouge!,No Laws. No Limits. One Rule. Never Fall In Love.,Baz Luhrmann,9.00
876,Domestic Disturbance,He will do anything to protect his family.,Harold Becker,5.58
877,Black Mass,Keep your enemies close.,Scott Cooper,5.56
878,Flags of Our Fathers,They fight for their country but they die for their friends.,Clint Eastwood,11.26
879,Law Abiding Citizen,The System Must Pay.,F. Gary Gray,13.44
880,Grindhouse,A double feature that'll tear you in two!,Robert Rodriguez,14.18
881,Beloved,The past has a life of its own.,Jonathan Demme,9.83
882,Lucky You,Change your game. Change your life.,Curtis Hanson,5.49
883,Catch Me If You Can,The true story of a real fake.,Steven Spielberg,9.08
884,Zero Dark Thirty,The Greatest Manhunt in History,Kathryn Bigelow,12.87
885,The Break-Up,. . . pick a side.,Peyton Reed,5.09
886,Mamma Mia!,Take a trip down the aisle you'll never forget,Phyllida Lloyd,5.98
887,Valentine's Day,A Love Story. More or Less.,Garry Marshall,5.70
888,The Dukes of Hazzard,Cousins. Outlaws. Thrillbillies.,Jay Chandrasekhar,6.44
889,The Thin Red Line,Every man fights his own war.,Terrence Malick,5.94
890,The Change-Up,Who says men can't change?,David Dobkin,13.63
891,Man on the Moon,"Hello, my name is Andy and this is my movie.",Milo\u0161 Forman,6.53
892,Casino,No one stays at the top forever.,Martin Scorsese,14.77
893,From Paris with Love,Two agents. One city. No merci.,Pierre Morel,10.52
894,Bulletproof Monk,A power beyond measure requires a protector without equal.,Paul Hunter,10.88
895,"Me, Myself & Irene",From gentle to mental.,Bobby Farrelly,14.26
896,Barnyard,What happens in the barn stays in the barn,Steve Oedekerk,13.52
897,Deck the Halls,There glows the neighborhood,John Whitesell,6.24
898,The Twilight Saga: New Moon,The Next Chapter Begins.,Chris Weitz,9.91
899,Shrek,The greatest fairy tale never told.,Andrew Adamson,11.00
900,The Adjustment Bureau,Fight for your fate.,George Nolfi,14.01
901,Robin Hood: Prince of Thieves,"For the good of all men, and the love of one woman, he fought to uphold justice by breaking the law.",Kevin Reynolds,6.69
902,Jerry Maguire,Everybody loved him... Everybody disappeared.,Cameron Crowe,8.49
903,Ted,Ted is coming.,Seth MacFarlane,8.04
904,As Good as It Gets,A comedy from the heart that goes for the throat.,James L. Brooks,14.12
905,Patch Adams,Laughter is contagious,Tom Shadyac,11.57
906,Anchorman 2: The Legend Continues,It's kind of a big deal,Adam McKay,13.52
907,Mr. Deeds,"Small town kid, big time right hook.",Steven Brill,8.17
908,Super 8,It Arrives.,J.J. Abrams,6.51
909,Erin Brockovich,She brought a small town to its feet and a huge corporation to its knees.,Steven Soderbergh,8.86
910,How to Lose a Guy in 10 Days,One of them is lying. So is the other.,Donald Petrie,7.61
911,22 Jump Street,They're not 21 anymore,Phil Lord,11.72
912,Interview with the Vampire,Drink from me and live forever,Neil Jordan,11.14
913,Yes Man,One Word Can Change Everything.,Peyton Reed,5.45
914,Central Intelligence,Saving the world takes a little Hart and a big Johnson,Rawson Marshall Thurber,9.90
915,Stepmom,Be there for the joy. Be there for the tears. Be there for each other.,Chris Columbus,8.01
916,Daddy's Home,Choose your Daddy,Sean Anders,5.99
917,Into the Woods,Be careful what you wish for...,Rob Marshall,8.16
918,Inside Man,It looked like the perfect bank robbery. But you can't judge a crime by its cover.,Spike Lee,14.50
919,Payback,No More Mr. Nice Guy.,Brian Helgeland,10.16
920,Congo,Where you are the endangered species.,Frank Marshall,13.75
921,We Bought a Zoo,A True Zoo Story,Cameron Crowe,6.40
922,Knowing,Knowing is everything...,Alex Proyas,8.59
923,Failure to Launch,"To leave the nest, some men just need a little push.",Tom Dey,5.01
924,The Ring Two,The dead don't sleep.,Hideo Nakata,9.67
925,"Crazy, Stupid, Love.",This Is Stupid,Glenn Ficarra,12.65
926,Garfield,Get ready for frisky business.,Peter Hewitt,14.46
927,Christmas with the Kranks,No! Ho! Ho!,Joe Roth,7.32
928,Moneyball,What are you really worth?,Bennett Miller,12.28
929,Outbreak,This animal carries a deadly virus... and the greatest medical crisis in the world is about to happen.,Wolfgang Petersen,14.22
930,Non-Stop,The hijacking was just the beginning.,Jaume Collet-Serra,6.38
931,Race to Witch Mountain,The race is on,Andy Fickman,9.88
932,V for Vendetta,People should not be afraid of their governments. Governments should be afraid of their people.,James McTeigue,14.20
933,Shanghai Knights,A Royal Kick In The Arse.,David Dobkin,8.31
934,Curious George,Get Carried Away With The Cutest Little Monkey Around!,Matthew O'Callaghan,12.41
935,Herbie Fully Loaded,Start your engines...,Angela Robinson,10.54
936,Don't Say a Word,...I'll never tell.,Gary Fleder,11.63
937,Hansel & Gretel: Witch Hunters,Classic tale. New twist.,Tommy Wirkola,8.58
938,Unfaithful,Where do you go when you've gone too far?,Adrian Lyne,5.84
939,I Am Number Four,Three like him have already been killed…he is Number Four.,D.J. Caruso,11.84
940,Syriana,Everything is connected.,Stephen Gaghan,12.97
941,13 Hours: The Secret Soldiers of Benghazi,"When everything went wrong, six men had the courage to do what was right.",Michael Bay,8.14
942,The Book of Life,,Jorge R. Gutierrez,11.37
943,Firewall,Nothing Is More Dangerous Than A Man With Everything To Lose.,Richard Loncraine,9.71
944,Absolute Power,Corrupts Absolutely.,Clint Eastwood,6.09
945,G.I. Jane,Failure is not an option.,Ridley Scott,9.99
946,The Game,What do you get for the man who has everything?,David Fincher,5.25
947,Silent Hill,We've been expecting you.,Christophe Gans,11.55
948,The Replacements,Throw the ball. Catch the girl. Keep it simple.,Howard Deutch,12.62
949,American Reunion,Save the best piece for last.,Jon Hurwitz,11.47
950,The Negotiator,He frees hostages for a living. Now he's taking hostages to survive.,F. Gary Gray,5.98
951,Into the Storm,Prepare to go,Steven Quale,6.59
952,Beverly Hills Cop III,,John Landis,14.11
953,Gremlins 2: The New Batch,Here they grow again.,Joe Dante,11.40
954,The Judge,Defend your Honor.,David Dobkin,13.35
955,The Peacemaker,How do you get the world's attention?,Mimi Leder,13.71
956,Resident Evil: Apocalypse,You're all going to die.,Alexander Witt,6.61
957,Bridget Jones: The Edge of Reason,Same Bridget. Brand new diary.,Beeban Kidron,5.85
958,Out of Time,The Clock Is Ticking...,Carl Franklin,5.54
959,On Deadly Ground,His Battle To Save The Alaskan Wilderness And Protect Its People Can Only Be Won...,Steven Seagal,10.29
960,The Adventures of Sharkboy and Lavagirl,Smaller heroes. Just as super.,Robert Rodriguez,8.99
961,The Beach,Somewhere on this planet it must exist.,Danny Boyle,6.27
962,Raising Helen,Her uptown life gets turned inside out!,Garry Marshall,9.24
963,Ninja Assassin,"Fear not the weapon, but the hand that wields it.",James McTeigue,9.40
964,For Love of the Game,Billy Chapel must choose between the woman he loves and the game he lives for.,Sam Raimi,5.38
965,Striptease,Some People Get Into Trouble No Matter What They WEAR.,Andrew Bergman,6.59
966,Marmaduke,Live Large,Tom Dey,13.74
967,Hereafter,Touched by death. Changed by life.,Clint Eastwood,10.08
968,Murder by Numbers,The only flaw in their plan was her.,Barbet Schroeder,11.38
969,Assassins,"In the shadows of life, In the business of death, One man found a reason to live...",Richard Donner,5.91
970,Hannibal Rising,It started with revenge.,Peter Webber,5.76
971,The Story of Us,,Rob Reiner,10.68
972,The Host,You will be one of us,Andrew Niccol,5.94
973,Basic,Deception is their most deadly weapon.,John McTiernan,13.34
974,Blood Work,He's a heartbeat away from catching the killer,Clint Eastwood,9.13
975,The International,Is your money making a killing?,Tom Tykwer,7.01
976,Escape from L.A.,Snake Is Back.,John Carpenter,11.46
977,The Iron Giant,It came from outer space!,Brad Bird,11.99
978,The Life Aquatic with Steve Zissou,"The deeper you go, the weirder life gets.",Wes Anderson,5.19
979,Free State of Jones,Based on the incredible true story.,Gary Ross,12.72
980,The Life of David Gale,The crime is clear. The truth is not.,Alan Parker,7.20
981,Man of the House,Protecting witnesses is a challenge. Living with them is impossible.,Stephen Herek,14.63
982,Run All Night,No sin goes unpunished,Jaume Collet-Serra,10.50
983,Eastern Promises,Every sin leaves a mark.,David Cronenberg,12.56
984,Into the Blue,Treasure has its price.,John Stockwell,5.56
985,Joan of Arc,,Luc Besson,11.30
986,Your Highness,Get your quest on.,David Gordon Green,13.47
987,Dream House,"Once upon a time, there were two little girls who lived in a house.",Jim Sheridan,13.54
988,Mad City,One man will make a mistake. The other will make it a spectacle.,Costa-Gavras,8.10
989,Baby's Day Out,No bib. No crib. No problem.,Patrick Read Johnson,12.67
990,The Scarlet Letter,"When intimacy is forbidden and passion is a sin, love is the most defiant crime of all.",Roland Joff\u00e9,12.42
991,Fair Game,Wife. Mother. Spy.,Doug Liman,12.73
992,Domino,Heads You Live... Tails You Die.,Tony Scott,9.24
993,Jade,Some fantasies go too far.,William Friedkin,12.27
994,Gamer,"In the near future, you don't live to play... you'll play to live.",Brian Taylor,12.56
995,Beautiful Creatures,Dark secrets will come to light.,Richard LaGravenese,8.36
996,Death to Smoochy,Get ready for an unexpected hit.,Danny DeVito,9.50
997,Zoolander 2,Long time no Z,Ben Stiller,11.67
998,The Big Bounce,It's all in who you trust,George Armitage,9.13
999,What Planet Are You From?,"To save his planet, an alien must find a woman on Earth to have his baby. There's just one problem.",Mike Nichols,6.10
1000,Drive Angry,One hell of a ride.,Patrick Lussier,6.02
1001,Street Fighter: The Legend of Chun-Li,Some fight for power. Some fight for us.,Andrzej Bartkowiak,11.68
1002,The One,Stealing the power of the universes one by one.,James Wong,5.30
1003,The Adventures of Ford Fairlane,Kojak. Columbo. Dirty Harry. Wimps.,Renny Harlin,11.11
1004,The Boat That Rocked,On air. Off shore. Out of control.,Richard Curtis,5.89
1005,Traffic,No one gets away clean,Steven Soderbergh,5.00
1006,Indiana Jones and the Last Crusade,"The man with the hat is back. And this time, he's bringing his Dad.",Steven Spielberg,5.27
1007,Anna Karenina,An epic story of love.,Joe Wright,13.11
1008,Chappie,I am consciousness. I am alive. I am Chappie.,Neill Blomkamp,9.08
1009,The Bone Collector,Serial killer vs. forensic genius,Phillip Noyce,5.14
1010,Panic Room,,David Fincher,12.46
1011,The Tooth Fairy,,Chuck Bowman,8.10
1012,Three Kings,It's good to be King.,David O. Russell,5.84
1013,Child 44,How do you find a killer who doesn’t exist?,Daniel Espinosa,6.86
1014,Rat Race,563 miles. 9 people. $2 million. 1001 problems!,Jerry Zucker,6.35
1015,K-PAX,Change the way you look at the world.,Iain Softley,5.78
1016,Kate & Leopold,If they lived in the same century they'd be perfect for each other.,James Mangold,6.68
1017,Bedazzled,Meet the Devil. She's giving Elliott seven wishes. But not a chance in Hell.,Harold Ramis,12.43
1018,The Cotton Club,It was the jazz age. It was an era of elegance and violence. The action was gambling. The stakes were life and death.,Francis Ford Coppola,12.33
1019,3:10 to Yuma,Time waits for one man.,James Mangold,14.10
1020,Taken 3,It Ends Here,Olivier Megaton,6.60
1021,Out of Sight,Opposites attract.,Steven Soderbergh,12.73
1022,The Cable Guy,There's no such thing as free cable.,Ben Stiller,10.80
1023,1947: Earth,,Deepa Mehta,11.89
1024,Dick Tracy,Their turf. Their game. Their rules. They didn't count on HIS law...,Warren Beatty,12.87
1025,The Thomas Crown Affair,How do you get the man who has everything?,John McTiernan,5.41
1026,Riding in Cars with Boys,One day can make your life; one day can ruin your life. All life is is four or five big days that change everything.,Penny Marshall,13.32
1027,First Blood,This time he's fighting for his life.,Ted Kotcheff,11.14
1028,Солярис,,Andrei Tarkovsky,12.56
1029,Happily N'Ever After,Fairy Tale Endings Aren't What They Used To Be,Yvette Kaplan,10.17
1030,Mary Reilly,The untold story of Jekyll and Hyde,Stephen Frears,9.81
1031,My Best Friend's Wedding,It's about finding the love of your life. And deciding what to do about it.,P.J. Hogan,9.23
1032,America's Sweethearts,Hollywood's hottest couple just split up. It'll take more than special effects to reunite them.,Joe Roth,10.92
1033,Insomnia,A tough cop. A brilliant killer. An unspeakable crime.,Christopher Nolan,10.60
1034,Star Trek: First Contact,Resistance is futile.,Jonathan Frakes,8.33
1035,Jonah Hex,Revenge gets ugly.,Jimmy Hayward,10.87
1036,Courage Under Fire,A medal for honor. A search for justice. A battle for truth.,Edward Zwick,11.28
1037,Liar Liar,Trust me.,Tom Shadyac,9.25
1038,The Infiltrator,The true story of one man against the biggest drug cartel in history.,Brad Furman,6.40
1039,Inchon,LOVE. DESTINY. HEROES. War Changes Everything.,Terence Young,14.04
1040,The Flintstones,Yabba-Dabba-Doo!,Brian Levant,10.99
1041,Taken 2,First they took his daughter. Now they're coming for him.,Olivier Megaton,5.82
1042,Scary Movie 3,Great trilogies come in threes.,David Zucker,13.92
1043,Miss Congeniality,Never Mess With An Agent In A Dress.,Donald Petrie,13.26
1044,Journey to the Center of the Earth,Same Planet. Different World.,Eric Brevig,9.00
1045,The Princess Diaries 2: Royal Engagement,It can take a lifetime to find true love; she's got 30 days!,Garry Marshall,8.76
1046,The Pelican Brief,Two Supreme Court Justices have been assassinated. One lone law student has stumbled upon the truth. An investigative journalist wants her story. Everybody else wants her dead.,Alan J. Pakula,11.60
1047,The Client,A district attorney out for a conviction. A new lawyer out of her league. A young boy who knew too much.,Joel Schumacher,12.89
1048,The Bucket List,Find the joy.,Rob Reiner,12.04
1049,Patriot Games,Not for honor. Not for country. For his wife and child.,Phillip Noyce,5.53
1050,Monster-in-Law,This relationship is going to be a real mother.,Robert Luketic,10.02
1051,Prisoners,Every moment matters.,Denis Villeneuve,9.86
1052,Training Day,"The only thing more dangerous than the line being crossed, is the cop who will cross it.",Antoine Fuqua,5.38
1053,Galaxy Quest,A comedy of Galactic Proportions.,Dean Parisot,10.42
1054,Scary Movie 2,No More Mercy. No More Shame. No More Sequels - Honest! - We Lied.,Keenen Ivory Wayans,11.50
1055,The Muppets,They're closer than you think.,James Bobin,5.62
1056,Blade,Part Man. Part Vampire. All Hero.,Stephen Norrington,12.66
1057,Coach Carter,It begins on the street. It ends here.,Thomas Carter,10.66
1058,Changing Lanes,"An ambitious lawyer, a desperate father, they had no reason to meet, until today,",Roger Michell,8.48
1059,Anaconda,When You Can't Breathe You Can't Scream.,Luis Llosa,8.25
1060,Coyote Ugly,This party never ends.,David McNally,10.57
1061,Love Actually,The ultimate romantic comedy.,Richard Curtis,12.29
1062,A Bug's Life,An epic presentation of miniature proportions.,Andrew Stanton,8.75
1063,From Hell,Only the legend will survive.,Albert Hughes,13.33
1064,The Specialist,The government taught him to kill. Now he's using his skills to help a woman seek revenge against the Miami underworld.,Luis Llosa,5.62
1065,Tin Cup,Golf Pro. Love Amateur.,Ron Shelton,7.86
1066,"Yours, Mine and Ours",Their wedding night set new attendence records,Melville Shavelson,7.87
1067,Kicking & Screaming,One man could lead this team to glory. . . That man was busy,Jesse Dylan,5.68
1068,The Hitchhiker's Guide to the Galaxy,Don't leave Earth without it.,Garth Jennings,5.26
1069,Fat Albert,,Joel Zwick,13.44
1070,Resident Evil: Extinction,The Extinction Is Coming...,Russell Mulcahy,5.38
1071,Blended,"Single Dad, No Clue. Single Mum, Flying Solo.",Frank Coraci,5.90
1072,Last Holiday,She always thought she was somebody special... and she was.,Wayne Wang,9.94
1073,The River Wild,The vacation is over,Curtis Hanson,11.03
1074,The Indian in the Cupboard,,Frank Oz,7.53
1075,Savages,Young Beautiful Deadly.,Oliver Stone,6.88
1076,Cellular,If the signal dies so does she,David R. Ellis,13.98
1077,Johnny English,"He knows no fear, he knows no danger, he knows nothing.",Peter Howitt,10.44
1078,The Ant Bully,The battle for the lawn is on.,John A. Davis,6.33
1079,Dune,"A world beyond your experience, beyond your imagination.",David Lynch,7.13
1080,Across the Universe,All you need is love.,Julie Taymor,9.44
1081,Revolutionary Road,How do you break free without breaking apart?,Sam Mendes,9.67
1082,16 Blocks,"For a New York cop and his witness, the distance between life and death just got very short.",Richard Donner,14.96
1083,Babylon A.D.,Kill or be Killed.,Mathieu Kassovitz,12.73
1084,The Glimmer Man,Two good cops. One bad situation.,John Gray,5.65
1085,Multiplicity,"Sometimes to get more out of life, you have to make more of yourself.",Harold Ramis,9.39
1086,Aliens in the Attic,The aliens vs. the Pearsons,John Schultz,5.80
1087,The Pledge,,Sean Penn,10.61
1088,The Producers,,Susan Stroman,8.03
1089,The Phantom,Slam Evil!,Simon Wincer,5.61
1090,All the Pretty Horses,Some passions can never be tamed.,Billy Bob Thornton,11.14
1091,Nixon,"Triumphant in Victory, Bitter in Defeat. He Changed the World, But Lost a Nation.",Oliver Stone,9.41
1092,The Ghost Writer,Read between the lies.,Roman Polanski,10.20
1093,Deep Rising,Full Scream Ahead,Stephen Sommers,6.61
1094,Miracle at St. Anna,,Spike Lee,13.49
1095,滿城盡帶黃金甲,Unspeakable secrets are hidden within the Forbidden City.,Zhang Yimou,11.70
1096,Bangkok Dangerous,There's only one way out.,Danny Pang,11.86
1097,Big Trouble,They have forty-five minutes to save the world. They need forty-six.,Barry Sonnenfeld,14.38
1098,Love in the Time of Cholera,How long would you wait for love?,Mike Newell,13.04
1099,Shadow Conspiracy,,George P. Cosmatos,9.74
1100,Johnny English Reborn,One man. One mission. No chance.,Oliver Parker,12.83
1101,Foodfight!,When good food... goes bad!,Lawrence Kasanoff,8.23
1102,Argo,The movie was fake. The mission was real.,Ben Affleck,6.12
1103,The Fugitive,A murdered wife. A one-armed man. An obsessed detective. The chase begins.,Andrew Davis,13.32
1104,The Bounty Hunter,"It's a Job. It Isn't Personal. Well, Maybe a Little...",Andy Tennant,5.32
1105,Sleepers,When friendship runs deeper than blood.,Barry Levinson,12.10
1106,Rambo: First Blood Part II,"What most people call hell, he calls home.",George P. Cosmatos,14.72
1107,The Juror,There is no defense.,Brian Gibson,11.52
1108,Pinocchio,For anyone who has ever wished upon a star.,Ben Sharpsteen,9.53
1109,Heaven's Gate,The only thing greater than their passion for America... was their passion for each other.,Michael Cimino,10.63
1110,Underworld: Evolution,"My God. Brother, what have you done?",Len Wiseman,7.76
1111,Victor Frankenstein,Discover the origin of the monster and his creation.,Paul McGuigan,11.30
1112,Finding Forrester,"In an ordinary place, he found the one person to make his life extraordinary.",Gus Van Sant,9.14
1113,28 Days,The Life of the Party... before she got a life.,Betty Thomas,7.24
1114,Unleashed,Serve No Master,Louis Leterrier,8.28
1115,The Sweetest Thing,A romantic comedy without the sugar.,Roger Kumble,6.40
1116,The Firm,Power can be murder to resist.,Sydney Pollack,8.65
1117,Charlie St. Cloud,Life is for living.,Burr Steers,11.79
1118,The Mechanic,Someone has to fix the problems.,Simon West,9.15
1119,21 Jump Street,They thought the streets were mean. Then they went back to high school.,Phil Lord,12.62
1120,Notting Hill,Can the most famous film star in the world fall for the man on the street?,Roger Michell,7.10
1121,Chicken Run,This ain't no chick flick. It's poultry in motion.,Nick Park,14.76
1122,Along Came Polly,"For the most cautious man on Earth, life is about to get interesting.",John Hamburg,11.55
1123,Boomerang,A Player Who's About to be Played.,Reginald Hudlin,6.08
1124,The Heat,Action's never been so hot!,Paul Feig,12.45
1125,Cleopatra,The motion picture the world has been waiting for!,Joseph L. Mankiewicz,5.37
1126,Here Comes the Boom,No one will fight for his students like Mr. Voss.,Frank Coraci,9.55
1127,High Crimes,Everything you trust. Everything you know. May be a lie...,Carl Franklin,6.56
1128,The Mirror Has Two Faces,A story about just how wrong two people can be before they can be right.,Barbra Streisand,12.95
1129,The Mothman Prophecies,What do you see?,Mark Pellington,9.49
1130,Brüno,Borat was so 2006,Larry Charles,13.44
1131,Licence to Kill,His bad side is a dangerous place to be.,John Glen,7.20
1132,Red Riding Hood,Who's afraid?,Catherine Hardwicke,11.69
1133,15 Minutes,America Likes to Watch,John Herzfeld,9.51
1134,Super Mario Bros.,This Ain't No Game.,Annabel Jankel,5.61
1135,Lord of War,"Where there's a will, there's a weapon",Andrew Niccol,13.39
1136,英雄,One man's strength will unite an empire.,Zhang Yimou,8.53
1137,One for the Money,She's looking for a few not-so-good men,Julie Anne Robinson,10.86
1138,The Interview,The Film Hackers Tried To Get Banned,Seth Rogen,12.86
1139,The Warrior's Way,Assassin. Hero. Legend.,Sngmoo Lee,11.81
1140,Micmacs à tire-larigot,Non Stop Madness,Jean-Pierre Jeunet,7.53
1141,8 Mile,Every moment is another chance.,Curtis Hanson,8.97
1142,Pourquoi j'ai pas mangé mon père,These feet are made for walkin',Jamel Debbouze,8.33
1143,A Knight's Tale,He Will Rock You,Brian Helgeland,13.06
1144,The Medallion,,Gordon Chan,8.35
1145,The Sixth Sense,Not every gift is a blessing.,M. Night Shyamalan,8.37
1146,Man on a Ledge,You can only push an innocent man so far,Asger Leth,11.88
1147,The Big Year,Everyone is searching for something.,David Frankel,14.62
1148,The Karate Kid,Only the 'Old One' could teach him the secrets of the masters.,John G. Avildsen,9.53
1149,American Hustle,Everyone Hustles To Survive,David O. Russell,5.12
1150,The Proposal,Here comes the bribe...,Anne Fletcher,11.90
1151,Double Jeopardy,Murder isn't always a crime.,Bruce Beresford,14.56
1152,Back to the Future Part II,"Roads? Where we're going, we don't need roads!",Robert Zemeckis,7.20
1153,Lucy,The average person uses 10% of their brain capacity. Imagine what she could do with 100%.,Luc Besson,14.79
1154,Fifty Shades of Grey,Are you curious?,Sam Taylor-Johnson,12.49
1155,Spy Kids 3-D: Game Over,3rd Mission. 3rd Dimension.,Robert Rodriguez,14.52
1156,A Time to Kill,Experience a time you'll never forget.,Joel Schumacher,9.99
1157,Cheaper by the Dozen,Growing pains? They've got twelve of them!,Shawn Levy,11.46
1158,Lone Survivor,Based on True Acts of Courage,Peter Berg,6.20
1159,A League of Their Own,"To achieve the incredible, you have to attempt the impossible.",Penny Marshall,13.17
1160,The Conjuring 2,The next true story from the case files of Ed and Lorraine Warren,James Wan,11.75
1161,The Social Network,You don't get to 500 million friends without making a few enemies.,David Fincher,12.55
1162,He's Just Not That Into You,Are you the exception...or the rule?,Ken Kwapis,13.84
1163,Scary Movie 4,Bury the grudge. Burn the village.  See the saw.,David Zucker,8.07
1164,Scream 3,Someone has taken their love of trilogies one step too far.,Wes Craven,11.55
1165,Back to the Future Part III,They've saved the best trip for last... But this time they may have gone too far.,Robert Zemeckis,10.21
1166,Get Hard,An education in incarceration.,Etan Cohen,11.74
1167,Dracula,Love never dies.,Francis Ford Coppola,8.30
1168,Julie & Julia,Based on Two True Stories,Nora Ephron,13.17
1169,42,The True Story Of An American Legend,Brian Helgeland,12.91
1170,The Talented Mr. Ripley,How far would you go to become someone else?,Anthony Minghella,7.76
1171,Dumb and Dumber To,The Second Parts Are More Fools,Bobby Farrelly,7.22
1172,Eight Below,"The Most Amazing Story Of Survival, Friendship, And Adventure Ever Told.",Frank Marshall,9.27
1173,The Intern,Experience never gets old,Nancy Meyers,13.25
1174,Ride Along 2,The brothers-in-law are back,Tim Story,12.79
1175,The Last of the Mohicans,The first American hero.,Michael Mann,6.84
1176,Ray,The extraordinary life story of Ray Charles.,Taylor Hackford,14.73
1177,Sin City,Walk down the right back alley in Sin City and you can find anything...,Robert Rodriguez,14.20
1178,Vantage Point,"8 Strangers, 8 points of view.  1 Truth.",Pete Travis,6.67
1179,"I Love You, Man",He needed a best man... He got the worst.,John Hamburg,7.20
1180,Shallow Hal,Are You A Shallow Guy?,Bobby Farrelly,11.08
1181,JFK,The story that won’t go away.,Oliver Stone,13.98
1182,Big Momma's House 2,The momma of all comedies is back!!!,John Whitesell,6.40
1183,The Mexican,Love with the safety off.,Gore Verbinski,14.21
1184,17 Again,Who says you're only young once?,Burr Steers,12.76
1185,The Other Woman,The oddest friends are about to get even,Nick Cassavetes,5.19
1186,The Final Destination,Rest In Pieces,David R. Ellis,7.93
1187,Bridge of Spies,"In the shadow of war, one man showed the world what we stood for.",Steven Spielberg,12.78
1188,Behind Enemy Lines,His only weapon is his will to survive.,John Moore,12.89
1189,Get Him to the Greek,Aaron Green has 72 hours to get a Rock Star from London to L.A. Pray for him.,Nicholas Stoller,6.72
1190,Shall We Dance?,Step out of the ordinary,Peter Chelsom,8.79
1191,Small Soldiers,"The few, the proud, and the small.",Joe Dante,12.12
1192,Spawn,Born in darkness. Sworn to justice.,Mark A.Z. Dipp\u00e9,11.66
1193,The Count of Monte Cristo,Prepare for adventure. Count on revenge.,Kevin Reynolds,11.60
1194,The Lincoln Lawyer,This Case is a Dangerous Game of Life and Death,Brad Furman,9.09
1195,Unknown,Take Back Your Life,Jaume Collet-Serra,14.85
1196,The Prestige,Are You Watching Closely?,Christopher Nolan,8.36
1197,Horrible Bosses 2,New Crime. Same Tools.,Sean Anders,13.69
1198,Escape from Planet Earth,Earth's greatest secrets are about to break out!,Callan Brunker,12.48
1199,Apocalypto,No one can outrun their destiny.,Mel Gibson,10.56
1200,The Living Daylights,Licensed to thrill.,John Glen,10.43
1201,Predators,Fear is Reborn,Nimr\u00f3d Antal,9.69
1202,Legal Eagles,Tom Logan has a law partner who put a dog on the witness stand. A client who can't enter a room without a crime being committed. And a case that could turn out to be the murder of the year. His.,Ivan Reitman,6.11
1203,Secret Window,The most important part of a story is the ending.,David Koepp,13.77
1204,The Lake House,How do you hold on to someone you've never met?,Alejandro Agresti,12.62
1205,The Skeleton Key,Fearing Is Believing,Iain Softley,14.43
1206,The Odd Life of Timothy Green,He's a force of nature.,Peter Hedges,8.02
1207,Made of Honor,He'll do anything to get the groom out of the picture.,Paul Weiland,7.70
1208,Jersey Boys,,Clint Eastwood,12.27
1209,The Rainmaker,They were totally unqualified to try the case of a lifetime... but every underdog has his day.,Francis Ford Coppola,9.63
1210,Gothika,Because someone is dead doesn't mean they're gone.,Mathieu Kassovitz,10.60
1211,Amistad,Freedom is not given. It is our right at birth. But there are some moments when it must be taken.,Steven Spielberg,5.98
1212,Medicine Man,He turned his back on civilization. Only to discover he had the power to save it.,John McTiernan,11.02
1213,Aliens vs Predator: Requiem,The Last Place On Earth We Want To Be Is In The Middle,Colin Strause,6.83
1214,Ri¢hie Ri¢h,An adventure so big... even the world's richest kid can't afford to miss it!,Donald Petrie,14.11
1215,Autumn in New York,He fell in love for the first time. She fell in love forever.,Joan Chen,9.16
1216,Music and Lyrics,Share the music with someone you love.,Marc Lawrence,7.39
1217,Paul,Who's up for a close encounter?,Greg Mottola,5.64
1218,The Guilt Trip,Get ready for one mother of a road trip,Anne Fletcher,12.03
1219,Scream 4,New Decade. New Rules.,Wes Craven,5.64
1220,8MM,You can't prepare for where the truth will take you.,Joel Schumacher,8.28
1221,The Doors,"The Ultimate Story of Sex, Drugs & Rock 'N' Roll",Oliver Stone,11.26
1222,Sex Tape,A movie about a movie they don't want you to see.,Jake Kasdan,6.18
1223,Hanging Up,Every family has a few hang-ups.,Diane Keaton,12.84
1224,Final Destination 5,We all share a common destination.,Steven Quale,8.65
1225,Mickey Blue Eyes,A romantic comedy you can't refuse,Kelly Makin,12.55
1226,Pay It Forward,"When someone does you a big favor, don't pay it back... Pay It Forward",Mimi Leder,8.86
1227,Fever Pitch,A Comedy About The Game of Love.,Bobby Farrelly,11.52
1228,Drillbit Taylor,You get what you pay for,Steven Brill,6.78
1229,A Million Ways to Die in the West,Bring protection.,Seth MacFarlane,13.79
1230,The Shadow,The Shadow Knows!,Russell Mulcahy,14.58
1231,Extremely Loud & Incredibly Close,"This is not a story about September 11th, it's a story about every day after.",Stephen Daldry,12.32
1232,Morning Glory,Breakfast TV just got interesting.,Roger Michell,6.61
1233,Get Rich or Die Tryin',If You Think You Know the Story...You Don't Know the Man.,Jim Sheridan,10.99
1234,The Art of War,Who is your foe?,Christian Duguay,10.80
1235,Rent,No day but today.,Chris Columbus,10.76
1236,Bless the Child,Mankind's last hope just turned six.,Chuck Russell,12.62
1237,The Out-of-Towners,"They fell in love 24 years ago... and in the next 24 hours, they'll remember why.",Sam Weisman,11.54
1238,The Island of Dr. Moreau,The gates of hell are unlocked.,John Frankenheimer,6.96
1239,The Musketeer,As you've never seen it before.,Peter Hyams,7.11
1240,The Other Boleyn Girl,Two sisters divided for the love of a king.,Justin Chadwick,11.13
1241,Sweet November,She Just Needed A Month To Change His Life For Ever.,Pat O'Connor,9.54
1242,The Reaping,What Hath God Wrought?,Stephen Hopkins,7.75
1243,Mean Streets,You don't make up for your sins in church. You do it in the streets...,Martin Scorsese,6.34
1244,Renaissance Man,"One Man's Mission To Teach The Few, The Proud... The Impossible!",Penny Marshall,6.99
1245,Colombiana,Revenge is beautiful.,Olivier Megaton,11.97
1246,Quest for Camelot,An evil knight gives nobility a bad name.,Frederik Du Chau,8.43
1247,City By The Sea,When you're searching for a killer... the last suspect you want to see is your son.,Michael Caton-Jones,6.11
1248,At First Sight,Science gave him sight. She gave him vision.,Irwin Winkler,8.14
1249,Torque,Circuit of Fire,Joseph Kahn,14.75
1250,City Hall,It started with a shootout on a rainswept street and ended in a scandal that shattered New York.,Harold Becker,10.96
1251,Showgirls,Beyond your wildest dreams. Beyond your wildest fantasies.,Paul Verhoeven,12.47
1252,Marie Antoinette,Rumor. Scandal. Fame. Revolution.,Sofia Coppola,7.21
1253,Kiss of Death,,Barbet Schroeder,10.29
1254,Get Carter,The Truth Hurts,Stephen T. Kay,5.53
1255,Lo imposible,Nothing is more powerful than the human spirit.,Juan Antonio Bayona,10.05
1256,Ishtar,,Elaine May,5.72
1257,Fantastic Mr. Fox,Dig the life fantastic!,Wes Anderson,7.22
1258,Life or Something Like It,,Stephen Herek,10.47
1259,Memoirs of an Invisible Man,An adventure like you've never seen.,John Carpenter,7.30
1260,Le fabuleux destin d'Amélie Poulain,One person can change your life forever.,Jean-Pierre Jeunet,9.67
1261,New York Minute,,Dennie Gordon,7.87
1262,Alfie,Meet a man who never met a woman he didn't love.,Charles Shyer,5.38
1263,Big Miracle,A family of whales trapped beneath the ice. One unforgettable rescue.,Ken Kwapis,13.63
1264,The Deep End of the Ocean,The search for her son was over. The search for her family was just beginning.,Ulu Grosbard,6.18
1265,FearDotCom,The last site you'll ever see.,William Malone,13.01
1266,Cirque du Freak: The Vampire's Assistant,Meet Darren. He's sixteen going on immortal.,Paul Weitz,14.54
1267,Duplex,,Danny DeVito,11.22
1268,Soul Men,,Malcolm D. Lee,7.70
1269,Raise the Titanic,They've found the Titanic. There's just one thing left to do...,Jerry Jameson,13.44
1270,Universal Soldier: The Return,Prepare to become obsolete,Mic Rodgers,12.97
1271,Pandorum,Don't fear the end of the world. Fear what happens next.,Christian Alvart,7.90
1272,Impostor,"In the Future, not everyone is who they seem to be.",Gary Fleder,14.88
1273,Extreme Ops,Fear is a trigger,Christian Duguay,14.58
1274,Just Visiting,"They're not just from another time, they're from France.",Jean-Marie Poir\u00e9,13.94
1275,Sunshine,"If the sun dies, so do we.",Danny Boyle,10.44
1276,A Thousand Words,He only has 1000 words left to discover what matters the most.,Brian Robbins,11.85
1277,Delgo,,Marc F. Adler,13.40
1278,The Gunman,Armed With the Truth.,Pierre Morel,7.73
1279,Stormbreaker,Rule the school. Save the world.,Geoffrey Sax,6.97
1280,Disturbia,"The quieter the street, the darker the secrets....",D.J. Caruso,5.33
1281,Hackers,"There is no right or wrong, only fun and boring",Iain Softley,14.87
1282,The Hunting Party,How can they find the world's most wanted war criminal when the C.I.A. can't? [by actually looking],Richard Shepard,11.22
1283,The Hudsucker Proxy,They took him for a fall guy... but he threw them for a hoop.,Joel Coen,12.97
1284,投名狀,,Peter Chan,8.97
1285,Nomad,Courage know no limit,Sergei Bodrov Jr.,8.21
1286,Snowpiercer,"AD 2031, the passengers in the train are the only survivors on Earth.",Bong Joon-ho,7.23
1287,Un monstre à Paris,,Bibo Bergeron,8.11
1288,The Last Shot,,Jeff Nathanson,7.65
1289,The Crow,Real love is forever.,Alex Proyas,12.12
1290,Baahubali: The Beginning,,S.S. Rajamouli,6.27
1291,The Time Traveler's Wife,,Robert Schwentke,14.80
1292,Because I Said So,"She's just your normal, overprotective, overbearing, over-the-top mother.",Michael Lehmann,13.84
1293,Frankenweenie,The electrifying dog is back from beyond the grave,Tim Burton,14.67
1294,Serenity,Can't stop the signal.,Joss Whedon,9.64
1295,Against the Ropes,,Charles S. Dutton,8.48
1296,Superman III,If the world's most powerful computer can control even Superman...no one on earth is safe.,Richard Lester,13.28
1297,Grudge Match,DeNiro vs Stallone,Peter Segal,7.73
1298,Chi bi,The future will be decided.,John Woo,10.95
1299,Sweet Home Alabama,Sometimes What You're Looking For Is Right Where You Left It.,Andy Tennant,8.50
1300,The Ugly Truth,The battle of the sexes is on.,Robert Luketic,5.04
1301,Sgt. Bilko,All he ever wanted was an honest week's pay for an honest day's work.,Jonathan Lynn,7.22
1302,Spy Kids 2: The Island of Lost Dreams,Little Spies. Big Attitudes,Robert Rodriguez,10.15
1303,Star Trek: Generations,Boldly go.,David Carson,13.71
1304,一代宗師,"In Martial Arts there is no right or wrong, only the last man standing.",Wong Kar-wai,13.84
1305,Water for Elephants,Life is the most spectacular show on earth.,Francis Lawrence,10.40
1306,Dragon Nest: Warriors' Dawn,,Yuefeng Song,5.93
1307,The Hurricane,His greatest fight was for justice.,Norman Jewison,9.95
1308,Enough,Everyone has a limit.,Michael Apted,8.50
1309,Heartbreakers,Caution: Dangerous Curves Ahead,David Mirkin,14.34
1310,Paul Blart: Mall Cop 2,Vegas has a new high roller.,Andy Fickman,13.35
1311,Angel Eyes,"The deeper you look, the more you will find.",Luis Mandoki,11.93
1312,Joe Somebody,Someone just picked on the wrong nobody.,John Pasquin,5.58
1313,The Ninth Gate,Every book has a life of its own.,Roman Polanski,6.31
1314,Extreme Measures,Not all surgery is intended to cure.,Michael Apted,12.38
1315,Rock Star,The story of a wanna be who got to be.,Stephen Herek,8.59
1316,Precious,Life is hard. Life is short. Life is painful. Life is rich. Life is....Precious.,Lee Daniels,11.95
1317,White Squall,,Ridley Scott,8.41
1318,The Thing,Man is The Warmest Place to Hide.,John Carpenter,10.31
1319,Riddick,Survival Is His Revenge,David Twohy,8.38
1320,Switchback,The hunter becomes the hunted.,Jeb Stuart,6.74
1321,Texas Rangers,,Steve Miner,10.79
1322,City of Ember,Escape is the only option,Gil Kenan,11.45
1323,The Master,Every Man Needs a Guide,Paul Thomas Anderson,11.97
1324,Virgin Territory,Anything Can Happen When You're In ... Virgin Territory,David Leland,7.64
1325,The Express,He changed our country... one yard at a time.,Gary Fleder,11.85
1326,The 5th Wave,Protect Your Own,J Blakeson,6.12
1327,Creed,Your legacy is more than a name,Ryan Coogler,6.39
1328,The Town,Welcome to the bank robbery capital of America.,Ben Affleck,12.41
1329,What to Expect When You're Expecting,It's too late to pull out now.,Kirk Jones,11.61
1330,Burn After Reading,Intelligence is relative.,Joel Coen,5.36
1331,Nim's Island,Your adventure starts here.,Jennifer Flackett,13.59
1332,Rush,Everyone's driven by something.,Ron Howard,12.58
1333,Magnolia,"Things fall down. People look up. And when it rains, it pours.",Paul Thomas Anderson,14.39
1334,Cop Out,Rock out with your Glock out,Kevin Smith,8.99
1335,How to Be Single,Welcome to the party,Christian Ditter,7.07
1336,Dolphin Tale,Inspired by the amazing true story of Winter.,Charles Martin Smith,6.77
1337,Twilight,"When you can live forever, what do you live for?",Catherine Hardwicke,9.89
1338,John Q,Give a father no options and you leave him no choice.,Nick Cassavetes,10.97
1339,Blue Streak,He's A Cop That's Not.,Les Mayfield,13.04
1340,We're the Millers,-If anyone asks.,Rawson Marshall Thurber,5.65
1341,Obitaemyy Ostrov,,Fyodor Bondarchuk,5.71
1342,Breakdown,It could happen to you.,Jonathan Mostow,7.69
1343,Never Say Never Again,Sean Connery is James Bond 007,Irvin Kershner,13.52
1344,Hot Tub Time Machine,Kick some past,Steve Pink,7.63
1345,Dolphin Tale 2,WINTER's amazing true story... now has HOPE.,Charles Martin Smith,13.57
1346,Reindeer Games,The trap is set. The game is on.,John Frankenheimer,8.96
1347,A Man Apart,Love changes a man. Revenge tears him apart.,F. Gary Gray,13.76
1348,Aloha,Sometimes you have to say goodbye before you can say hello.,Cameron Crowe,7.72
1349,Ghosts of Mississippi,From the director of A FEW GOOD MEN comes a compelling TRUE STORY.,Rob Reiner,5.63
1350,Snow Falling on Cedars,From the director of 'Shine',Scott Hicks,11.57
1351,The Rite,You can only defeat it when you believe.,Mikael H\u00e5fstr\u00f6m,6.26
1352,Gattaca,There is no gene for the human spirit.,Andrew Niccol,10.79
1353,Isn't She Great,Talent Isn't Everything...,Andrew Bergman,11.08
1354,Space Chimps,"Houston, we have a problem!",Kirk De Micco,9.73
1355,Head of State,,Chris Rock,5.08
1356,The Hangover,Some guys just can't handle Vegas.,Todd Phillips,5.72
1357,葉問3,,Wilson Yip,11.97
1358,Austin Powers: The Spy Who Shagged Me,"I'm back, baby!",Jay Roach,9.64
1359,Batman,Have you ever danced with the devil in the pale moonlight?,Tim Burton,14.26
1360,There Be Dragons,,Roland Joff\u00e9,5.23
1361,Lethal Weapon 3,The magic is back again!,Richard Donner,9.82
1362,The Blind Side,Based on the extraordinary true story,John Lee Hancock,14.57
1363,Spy Kids,Real spies...only smaller,Robert Rodriguez,12.37
1364,Horrible Bosses,Ever wish your boss was dead?,Seth Gordon,13.12
1365,True Grit,Punishment Comes One Way or Another.,Joel Coen,12.51
1366,The Devil Wears Prada,Meet Andy Sachs. A million girls would kill to have her job. She's not one of them.,David Frankel,12.90
1367,Star Trek: The Motion Picture,The human adventure is just beginning.,Robert Wise,11.19
1368,Identity Thief,She's having the time of his life,Seth Gordon,12.26
1369,Cape Fear,There is nothing in the dark that isn't there in the light. Except fear.,Martin Scorsese,14.11
1370,21,They proved the Vegas Blackjack System was beatable...by beating the hell out of it.,Robert Luketic,11.56
1371,Trainwreck,We All Know One.,Judd Apatow,13.10
1372,Guess Who,His house. His rules. Some in-laws were made to be broken.,Kevin Rodney Sullivan,10.38
1373,The English Patient,"In love, there are no boundaries.",Anthony Minghella,9.00
1374,L.A. Confidential,Everything is suspect... Everyone is for sale... And nothing is what it seems.,Curtis Hanson,7.88
1375,Sky High,Saving The World... One Homework Assignment At A Time.,Mike Mitchell,9.77
1376,In & Out,An out-and-out comedy.,Frank Oz,9.79
1377,Species,Our time is up.,Roger Donaldson,7.31
1378,A Nightmare on Elm Street,"If Nancy Doesn't Wake Up Screaming, She Won't Wake Up At All!",Wes Craven,8.12
1379,The Cell,Enter The Mind Of A Killer,Tarsem Singh,6.70
1380,The Man in the Iron Mask,For the honor of a king. And the destiny of a country. All for one.,Randall Wallace,8.96
1381,Secretariat,The Impossible True Story,Randall Wallace,9.24
1382,TMNT,,Kevin Munroe,8.68
1383,Radio,His courage made them champions.,Mike Tollin,6.52
1384,Friends with Benefits,Some friends come with a happy ending.,Will Gluck,7.23
1385,Neighbors 2: Sorority Rising,New neighbors.,Nicholas Stoller,12.90
1386,Saving Mr. Banks,"Where her book ended, their story began.",John Lee Hancock,5.81
1387,Malcolm X,,Spike Lee,13.33
1388,This Is 40,The sort-of sequel to 'Knocked Up',Judd Apatow,6.86
1389,Old Dogs,Life is Not Child-Proof.,Walt Becker,6.21
1390,Underworld: Rise of the Lycans,Every war has a beginning.,Patrick Tatopoulos,6.23
1391,License to Wed,First came love... then came Reverend Frank.,Ken Kwapis,13.97
1392,The Benchwarmers,Get off the bench and get into the game.,Dennis Dugan,13.78
1393,Must Love Dogs,,Gary David Goldberg,9.28
1394,Donnie Brasco,Based on a true story.,Mike Newell,6.60
1395,Resident Evil,A secret experiment. A deadly virus. A fatal mistake.,Paul W.S. Anderson,7.90
1396,Poltergeist,They're here.,Tobe Hooper,13.38
1397,The Ladykillers,The greatest criminal minds of all time have finally met their match.,Joel Coen,10.81
1398,Max Payne,When a Man Has Lost Everything. He Only has Revenge,John Moore,10.50
1399,In Time,Time Is Power,Andrew Niccol,12.39
1400,The Back-Up Plan,"Fall in love, get married, have a baby. Not necessarily in that order.",Alan Poul,7.19
1401,Something Borrowed,It's a thin line between love and friendship.,Luke Greenfield,14.46
1402,Black Knight,It's only a flesh wound!,Gil Junger,5.62
1403,The Bad News Bears,The coach is waiting for his next beer. The pitcher is waiting for her first bra. The team is waiting for a miracle. Consider the possibilities.,Michael Ritchie,13.84
1404,Street Fighter,The fight to save the world is on!,Steven E. de Souza,8.53
1405,The Pianist,Music was his passion. Survival was his masterpiece.,Roman Polanski,6.52
1406,The Nativity Story,Her child would change the world.,Catherine Hardwicke,12.62
1407,House of Wax,Prey. Slay. Display,Jaume Collet-Serra,11.22
1408,Closer,"If you believe in love at first sight, you never stop looking.",Mike Nichols,7.42
1409,J. Edgar,The most powerful man in the world.,Clint Eastwood,11.10
1410,Mirrors,There is evil...On the other side.,Alexandre Aja,5.53
1411,Queen of the Damned,This time there are no interviews.,Michael Rymer,8.37
1412,Predator 2,Silent. Invisible. Invincible. He's in town with a few days to kill.,Stephen Hopkins,6.74
1413,Untraceable,A cyber killer has finally found the perfect accomplice: You.,Gregory Hoblit,14.73
1414,Blast from the Past,She'd never met anyone like him. He's never met anyone... Period.,Hugh Wilson,9.47
1415,Flash Gordon,He'll save every one of us!,Mike Hodges,10.34
1416,Jersey Girl,He wanted it all...but he got more than he bargained for.,Kevin Smith,10.60
1417,Alex Cross,Don't Ever Cross Alex Cross,Rob Cohen,10.73
1418,Midnight in the Garden of Good and Evil,,Clint Eastwood,14.32
1419,Heist,Never make a bet you can't afford to lose.,Scott Mann,13.03
1420,Nanny McPhee and the Big Bang,You'll Believe That Pigs Can Fly!,Susanna White,13.11
1421,Hoffa,,Danny DeVito,12.33
1422,The X Files: I Want to Believe,"To find the truth, you must believe.",Chris Carter,10.47
1423,Ella Enchanted,Get enchanted,Tommy O'Haver,6.90
1424,Concussion,Even Legends Need a Hero,Peter Landesman,9.04
1425,Abduction,They stole his life. He's taking it back.,John Singleton,6.43
1426,Valiant,"Some pigeons eat crumbs, others make history.",Gary Chapman,6.29
1427,Wonder Boys,Undependable. Unpredictable. Unforgettable.,Curtis Hanson,9.57
1428,Superhero Movie,The greatest Superhero movie of all time! (not counting all the others),Craig Mazin,6.61
1429,Broken City,Proof Can Be a Powerful Weapon.,Allen Hughes,8.12
1430,Cursed,What doesn't kill you makes you stronger.,Wes Craven,10.19
1431,Premium Rush,Ride Like Hell,David Koepp,8.64
1432,Hot Pursuit,Armed and Sort-of Dangerous.,Anne Fletcher,8.64
1433,The Four Feathers,"Freedom. Country. Honor. Passion. To save his best friend, one man must risk everything he loves.",Shekhar Kapur,12.29
1434,Parker,"To get away clean, you have to play dirty.",Taylor Hackford,10.84
1435,Wimbledon,She's the golden girl. He's the longshot. It's a match made in...,Richard Loncraine,7.20
1436,Furry Vengeance,He came. He saw. They conquered.,Roger Kumble,7.74
1437,Bait,Cleanup on aisle 7.,Kimble Rendall,5.50
1438,Krull,A world light-years beyond your imagination.,Peter Yates,10.97
1439,Lions for Lambs,"If you don't STAND for something, you might FALL for anything.",Robert Redford,6.14
1440,Flight of the Intruder,The only thing they can count on is each other.,John Milius,9.97
1441,Walk Hard: The Dewey Cox Story,Life made him tough. Love made him strong. Music made him hard.,Jake Kasdan,8.79
1442,The Shipping News,You'll never guess what you'll find inside...,Lasse Hallstr\u00f6m,11.71
1443,American Outlaws,Sometimes the wrong side of the law is the right place to be.,Les Mayfield,8.61
1444,The Young Victoria,Love rules all.,Jean-Marc Vall\u00e9e,8.96
1445,Whiteout,See Your Last Breath,Dominic Sena,13.17
1446,The Tree of Life,Nothing stands still.,Terrence Malick,12.85
1447,Knock Off,There is no substitute.,Tsui Hark,12.74
1448,Sabotage,Leave no loose ends,David Ayer,6.35
1449,The Order,Every soul has its price.,Brian Helgeland,6.33
1450,Punisher: War Zone,Vengeance has a name,Lexi Alexander,7.55
1451,Zoom,They're going to save the world... as long as they're home for dinner.,Peter Hewitt,12.11
1452,The Walk,Dream High.,Robert Zemeckis,11.32
1453,Warriors of Virtue,In a world beyond your imagination a battle for the universe has begun.,Ronny Yu,12.91
1454,A Good Year,Everything matures... eventually.,Ridley Scott,8.64
1455,Radio Flyer,Powered by imagination.,Richard Donner,14.00
1456,Bound by Honor,An epic story of three brothers. Bound by blood. Divided by fate. Driven by destiny.,Taylor Hackford,13.18
1457,Smilla's Sense of Snow,Some Tracks Should Never Be Uncovered.,Bille August,5.91
1458,Femme Fatale,Nothing is more desirable or more deadly than a woman with a secret.,Brian De Palma,11.74
1459,Lion of the Desert,He was a man of honor in a war without any.,Moustapha Akkad,9.44
1460,Le Hussard sur le toit,,Jean-Paul Rappeneau,14.52
1461,Ride with the Devil,"In a No-man's Land between North and South, You didn't fight for the Blue or the Grey... You fought for your friends and family.",Ang Lee,7.95
1462,Biutiful,"You don't choose your family. We all belong to somebody, but to belong to Uxbal and Marambra, is both a blessing and a curse.",Alejandro Gonz\u00e1lez I\u00f1\u00e1rritu,11.58
1463,Bandidas,Being BAD never looked so GOOD!,Joachim R\u00f8nning,8.99
1464,Black Water Transit,,Tony Kaye,10.27
1465,The Maze Runner,Run - Remember - Survive,Wes Ball,10.99
1466,Unfinished Business,Best business trip ever.,Ken Scott,13.45
1467,The Age of Innocence,In a world of tradition. In an age of innocence. They dared to break the rules.,Martin Scorsese,6.88
1468,The Fountain,Death is the road to awe,Darren Aronofsky,14.61
1469,Chill Factor,"This Fall, Action is served on the rocks, with a twist.",Hugh Johnson,6.10
1470,Stolen,Never steal from the world's greatest thief.,Simon West,11.10
1471,崖の上のポニョ,Welcome To A World Where Anything Is Possible.,Hayao Miyazaki,6.78
1472,The Longest Ride,Two couples. Two love stories. One epic tale.,"George Tillman, Jr.",7.16
1473,The Astronaut's Wife,How well do you know the one you love?,Rand Ravich,12.20
1474,I Dreamed of Africa,Sometimes the adventure of a lifetime becomes life itself.,Hugh Hudson,5.55
1475,Playing for Keeps,,Gabriele Muccino,5.52
1476,Mandela: Long Walk to Freedom,It is an ideal for which I am prepared to die.,Justin Chadwick,9.69
1477,Reds,Not since Gone With The Wind has there been a great romantic epic like it!,Warren Beatty,7.76
1478,A Few Good Men,,Rob Reiner,5.57
1479,Exit Wounds,This Is Gonna Hurt,Andrzej Bartkowiak,9.99
1480,Big Momma's House,This FBI agent is going undercover... and he's concealing more than a weapon.,Raja Gosnell,10.02
1481,The House of Magic,One lost little cat. One magical adventure.,Ben Stassen,11.10
1482,The Darkest Hour,Survive The Holidays,Chris Gorak,7.90
1483,Step Up Revolution,One Step Can Change Your World,Scott Speer,14.52
1484,Snakes on a Plane,"At 30,000 feet, snakes aren't the deadliest thing on this plane.",David R. Ellis,11.87
1485,The Watcher,Don't go home alone.,Joe Charbanic,12.74
1486,The Punisher,"There is no justice, there is only revenge.",Jonathan Hensleigh,12.38
1487,Goal!: The Dream Begins,Every Dream Has A Beginning,Danny Cannon,14.06
1488,Safe,She has the code. He is the key.,Boaz Yakin,9.78
1489,Pushing Tin,A comedy about losing control,Mike Newell,10.21
1490,Return of the Jedi,The Empire Falls...,Richard Marquand,13.66
1491,Doomsday,Mankind has an expiration date.,Neil Marshall,7.60
1492,The Reader,Behind the mystery lies a truth that will make you question everything you know.,Stephen Daldry,11.13
1493,Wanderlust,Leave your baggage behind,David Wain,12.38
1494,Elf,"This holiday, discover your inner elf.",Jon Favreau,14.59
1495,Phenomenon,Some things in life just can't be explained.,Jon Turteltaub,9.82
1496,Snow Dogs,Get ready for mush hour!,Brian Levant,5.14
1497,Scrooged,The spirits will move you in odd and hysterical ways.,Richard Donner,5.47
1498,Nacho Libre,He's not lean. He's not mean. He's nacho average hero.,Jared Hess,7.35
1499,Bridesmaids,Save the date,Paul Feig,5.08
1500,This Is the End,Nothing ruins a party like the end of the world.,Seth Rogen,7.15
1501,Stigmata,The messenger must be silenced.,Rupert Wainwright,12.37
1502,Men of Honor,History is made by those who break the rules.,"George Tillman, Jr.",11.93
1503,Takers,Who's Taking Who?,John Luessenhop,10.80
1504,The Big Wedding,It's never too late to start acting like a family,Justin Zackham,13.23
1505,"Big Mommas: Like Father, Like Son",Momma's got back-up.,John Whitesell,11.25
1506,Source Code,Make Every Second Count,Duncan Jones,14.44
1507,Alive,They survived the impossible...by doing the unthinkable.,Frank Marshall,10.79
1508,The Number 23,First it takes hold of your mind...then it takes hold of your life.,Joel Schumacher,5.25
1509,The Young and Prodigious T.S. Spivet,,Jean-Pierre Jeunet,14.20
1510,1941,Paranoia meets pandemonium.,Steven Spielberg,10.11
1511,Dreamer: Inspired By a True Story,,John Gatins,14.12
1512,A History of Violence,Tom Stall had the perfect life... until he became a hero.,David Cronenberg,14.58
1513,Transporter 2,The Best In The Business Is Back In The Game.,Louis Leterrier,5.53
1514,The Quick and the Dead,Think you are quick enough?,Sam Raimi,5.83
1515,Laws of Attraction,Love always has the last word.,Peter Howitt,12.94
1516,Bringing Out the Dead,,Martin Scorsese,11.64
1517,Repo Men,"For a price, any organ in your body can be replaced. But it can also be repossessed.",Miguel Sapochnik,6.18
1518,디워,They've made our world their battleground,Shim Hyung-Rae,8.72
1519,Bogus,"A comedy about losing your heart, finding your inner child and meeting the one friend you've always tried to avoid.",Norman Jewison,12.90
1520,The Incredible Burt Wonderstone,Abracatastic!,Don Scardino,8.93
1521,Cats Don't Dance,It's a Jungle Out There!,Mark Dindal,9.01
1522,Cradle Will Rock,,Tim Robbins,8.85
1523,The Good German,"If war is Hell, then what comes after?",Steven Soderbergh,14.37
1524,George and the Dragon,,Tom Reeve,6.00
1525,Apocalypse Now,This is the end...,Francis Ford Coppola,8.44
1526,Going the Distance,A comedy about meeting each other halfway.,Nanette Burstein,8.83
1527,Mr. Holland's Opus,"Of All the Lives He Changed, the One That Changed the Most Was His Own.",Stephen Herek,11.81
1528,Criminal,,Ariel Vromen,5.63
1529,Out of Africa,Based on a true story.,Sydney Pollack,13.50
1530,Flight,,Robert Zemeckis,7.21
1531,Moonraker,Outer space now belongs to 007.,Lewis Gilbert,6.81
1532,The Grand Budapest Hotel,A perfect holiday without leaving home.,Wes Anderson,13.52
1533,Hearts in Atlantis,What if one of life's great mysteries moved in upstairs?,Scott Hicks,13.84
1534,Arachnophobia,"Eight legs, two fangs, and an attitude.",Frank Marshall,9.46
1535,Frequency,The future is listening.,Gregory Hoblit,14.66
1536,Vacation,What could go wrong?,John Francis Daley,6.68
1537,Get Shorty,"The mob is tough, but it’s nothing like show business.",Barry Sonnenfeld,12.23
1538,Chicago,"If You Can't Be Famous, Be Infamous",Rob Marshall,10.05
1539,Big Daddy,Nature called. Look who answered.,Dennis Dugan,13.14
1540,American Pie 2,This Summer It's All About Sticking Together.,J.B. Rogers,6.45
1541,Toy Story,,John Lasseter,14.14
1542,Speed,Get ready for rush hour,Jan de Bont,11.64
1543,The Vow,,Michael Sucsy,6.76
1544,Extraordinary Measures,Don't hope for a miracle. Make one.,Tom Vaughan,6.17
1545,Remember the Titans,History is written by the winners.,Boaz Yakin,13.96
1546,The Hunt for Red October,Invisible. Silent. Stolen.,John McTiernan,13.41
1547,The Butler,One quiet voice can ignite a revolution.,Lee Daniels,8.93
1548,DodgeBall: A True Underdog Story,Grab Life By The Ball,Rawson Marshall Thurber,8.93
1549,The Addams Family,Weird Is Relative,Barry Sonnenfeld,8.25
1550,Ace Ventura: When Nature Calls,New animals. New adventures. Same hair.,Steve Oedekerk,11.18
1551,The Princess Diaries,She rocks. She rules. She reigns.,Garry Marshall,9.72
1552,The First Wives Club,Don't get mad. Get everything.,Hugh Wilson,13.03
1553,Se7en,Seven deadly sins. Seven ways to die.,David Fincher,5.75
1554,District 9,You are not welcome here.,Neill Blomkamp,9.25
1555,The SpongeBob SquarePants Movie,Bigger. Better. More absorbent.,Stephen Hillenburg,7.86
1556,Mystic River,"We bury our sins, we wash them clean.",Clint Eastwood,9.93
1557,Million Dollar Baby,"Beyond his silence, there is a past. Beyond her dreams, there is a feeling. Beyond hope, there is a memory. Beyond their journey, there is a love.",Clint Eastwood,8.25
1558,Analyze This,New York's most powerful gangster is about to get in touch with his feelings. YOU try telling him his 50 minutes are up.,Harold Ramis,8.11
1559,The Notebook,Behind every great love is a great story.,Nick Cassavetes,6.61
1560,27 Dresses,She's about to find the perfect fit.,Anne Fletcher,6.10
1561,Hannah Montana: The Movie,She has the best of both worlds...now she has to choose just one.,Peter Chelsom,14.09
1562,Rugrats in Paris: The Movie,Ooo la la! Paris will never be the same!,Stig Bergqvist,14.87
1563,The Prince of Tides,"A story about the memories that haunt us, and the truth that sets us free.",Barbra Streisand,14.47
1564,Legends of the Fall,After the Fall from Innocence the Legend begins.,Edward Zwick,5.56
1565,Up in the Air,The story of a man ready to make a connection.,Jason Reitman,9.48
1566,About Schmidt,Schmidt Happens,Alexander Payne,12.90
1567,Warm Bodies,Cold body. Warm heart.,Jonathan Levine,11.95
1568,Looper,"Hunted By Your Future, Haunted By Your Past",Rian Johnson,9.80
1569,Down to Earth,,Chris Weitz,7.59
1570,Babe,A little pig goes a long way.,Chris Noonan,8.37
1571,Hope Springs,"Sometimes to keep the magic, you need to learn a few tricks.",David Frankel,10.67
1572,Forgetting Sarah Marshall,"You lose some, you get some.",Nicholas Stoller,11.66
1573,Four Brothers,They came home to bury mom... and her killer,John Singleton,6.85
1574,Baby Mama,Would you put your eggs...in this basket?,Michael McCullers,10.29
1575,Hope Floats,"When life fell apart, love fell into place.",Forest Whitaker,13.18
1576,Bride Wars,May the best bride win,Gary Winick,12.91
1577,Without a Paddle,"The call of the wild, the thrill of adventure. The mistake of a lifetime.",Steven Brill,10.58
1578,13 Going on 30,"For some, 13 feels like it was just yesterday. For Jenna, it was.",Gary Winick,6.88
1579,Midnight in Paris,,Woody Allen,7.14
1580,The Nut Job,Let's Get Nuts!,Peter Lepeniotis,13.20
1581,Blow,Based on a True Story.,Ted Demme,12.00
1582,Message in a Bottle,A story of love lost and found.,Luis Mandoki,9.26
1583,Star Trek V: The Final Frontier,Adventure and imagination will meet at the final frontier.,William Shatner,7.45
1584,Like Mike,"Think like Mike, Achieve like Mike, Be Like Mike.",John Schultz,11.47
1585,The Naked Gun 33⅓: The Final Insult,"A Mad Bomber is on the Loose, and If Anyone Can Stop Him....So Can Frank!",Peter Segal,9.99
1586,A View to a Kill,Has James Bond finally met his match?,John Glen,6.35
1587,The Curse of the Were-Rabbit,Something bunny is going on...,Nick Park,11.62
1588,P.S. I Love You,"His life ended. Now, a new one will begin.",Richard LaGravenese,8.30
1589,Racing Stripes,Cheer 'til you're horse!,Frederik Du Chau,5.80
1590,Atonement,Torn apart by betrayal. Separated by war. Bound by love.,Joe Wright,11.83
1591,Letters to Juliet,What if you had a second chance to find true love?,Gary Winick,8.39
1592,Black Rain,Their country. Their laws. Their game. His rules.,Ridley Scott,8.55
1593,The Three Stooges,Just Say Moe.,Bobby Farrelly,13.46
1594,Corpse Bride,There's been a grave misunderstanding.,Tim Burton,12.90
1595,Glory Road,The incredible story of the team that changed the game forever.,James Gartner,10.05
1596,Sicario,The border is just another line to cross.,Denis Villeneuve,6.57
1597,Southpaw,Believe in Hope.,Antoine Fuqua,7.16
1598,Drag Me to Hell,"Christine Brown has a good job, a great boyfriend, and a bright future. But in three days, she's going to hell.",Sam Raimi,8.15
1599,The Age of Adaline,Love is timeless.,Lee Toland Krieger,8.06
1600,Secondhand Lions,,Tim McCanlies,5.37
1601,Step Up 3D,Two Worlds. One Dream.,Jon M. Chu,14.40
1602,Blue Crush,"Three Friends, One Passion, No Limits.",John Stockwell,9.71
1603,Stranger Than Fiction,Harold Crick isn't ready to go. Period.,Marc Forster,6.59
1604,30 Days of Night,They're Coming!,David Slade,13.06
1605,The Cabin in the Woods,If you hear a strange sound outside... have sex,Drew Goddard,6.74
1606,Meet the Spartans,"The Bigger the Hit, The Harder They Fall",Jason Friedberg,11.76
1607,Midnight Run,This could be the beginning of a beautiful friendship.,Martin Brest,14.32
1608,The Running Man,A game nobody survives. But Schwarzenegger has yet to play.,Paul Michael Glaser,12.11
1609,Little Shop of Horrors,Don't feed the plants.,Frank Oz,14.63
1610,Hanna,Adapt or die.,Joe Wright,13.22
1611,Mortal Kombat: Annihilation,"The world was created in six days, so too shall it be destroyed and on the seventh day mankind will rest... in peace",John R. Leonetti,5.52
1612,Larry Crowne,Rediscover life and love,Tom Hanks,6.60
1613,Carrie,Know her name. Fear her power.,Kimberly Peirce,6.61
1614,Take the Lead,Never Follow,Liz Friedlander,7.61
1615,Gridiron Gang,One goal. A second chance.,Phil Joanou,10.29
1616,What's the Worst That Could Happen?,It takes a thief to nail a crook.,Sam Weisman,7.22
1617,9,When our world ended their mission began.,Shane Acker,9.84
1618,Side Effects,One pill can change your life.,Steven Soderbergh,11.97
1619,The Prince & Me,Finding your inner princess can be such a royal pain.,Martha Coolidge,7.90
1620,Winnie the Pooh,Oh Pooh.,Stephen Anderson,12.10
1621,Dumb and Dumberer: When Harry Met Lloyd,The evolution of dumb...,Troy Miller,14.50
1622,Bulworth,Brace yourself. This politician is about to tell the truth!,Warren Beatty,7.66
1623,Get on Up,The Funk Don't Quit,Tate Taylor,12.86
1624,One True Thing,Love What You Have.,Carl Franklin,8.97
1625,Virtuosity,Justice needs a new program.,Brett Leonard,10.26
1626,My Super Ex-Girlfriend,Hell hath no fury like a superwoman scorned.,Ivan Reitman,10.42
1627,Deliver Us from Evil,,Scott Derrickson,8.30
1628,Sanctum,The only way out is down.,Alister Grierson,13.21
1629,Little Black Book,Have you ever been tempted to look inside his...,Nick Hurran,8.54
1630,The Five-Year Engagement,A comedy about the journey between popping the question and tying the knot.,Nicholas Stoller,6.76
1631,Mr. 3000,Big league. Big mouth. Big time.,Charles Stone III,10.81
1632,The Next Three Days,What if you had 72 hours to save everything you live for?,Paul Haggis,14.27
1633,Ultraviolet,The blood war is on.,Kurt Wimmer,13.67
1634,Assault on Precinct 13,Unite and fight.,Jean-Fran\u00e7ois Richet,13.94
1635,The Replacement Killers,Kill or be replaced.,Antoine Fuqua,6.54
1636,Fled,See how they run.,Kevin Hooks,14.30
1637,Eight Legged Freaks,Do you hate spiders? Do you really hate spiders? Well they don't like you either.,Ellory Elkayem,12.97
1638,Love & Other Drugs,Addicted to one-night stands or dependent on one another?,Edward Zwick,6.49
1639,88 Minutes,He has 88 minutes to solve a murder. His own.,Jon Avnet,7.24
1640,North Country,All She Wanted Was To Make A Living. Instead She Made History.,Niki Caro,6.11
1641,The Whole Ten Yards,"They missed each other. This time, their aim is better.",Howard Deutch,12.83
1642,Splice,Science's newest miracle...is a mistake.,Vincenzo Natali,12.46
1643,Howard the Duck,You will believe that a duck can talk.,Willard Huyck,9.86
1644,Pride and Glory,Truth. Honor. Loyalty. Family. What are you willing to sacrifice?,Gavin O'Connor,13.55
1645,The Cave,There are places man was never meant to go.,Bruce Hunt,5.96
1646,Alex & Emma,Is it love... or are they just imagining things?,Rob Reiner,11.96
1647,Wicker Park,Passion never dies.,Paul McGuigan,6.51
1648,Fright Night,You can't run from evil when it lives next door.,Craig Gillespie,5.28
1649,The New World,"Once discovered, it was changed forever.",Terrence Malick,12.52
1650,Wing Commander,An action packed thrill ride!,Christopher Roberts,9.25
1651,In Dreams,You don't have to sleep to dream,Neil Jordan,10.92
1652,Dragonball Evolution,The legend comes to life.,James Wong,14.35
1653,The Last Stand,Not in his town. Not on his watch.,Kim Jee-woon,10.31
1654,Godsend,"When a miracle becomes a nightmare, evil is born.",Nick Hamm,10.98
1655,Chasing Liberty,How do you fall in love with the whole world watching?,Andy Cadiff,14.75
1656,Hoodwinked Too! Hood VS. Evil,Not All Fairy Tales Go By the Book.,Mike Disa,14.99
1657,An Unfinished Life,Every secret takes on a life of its own.,Lasse Hallstr\u00f6m,13.34
1658,The Imaginarium of Doctor Parnassus,,Terry Gilliam,10.67
1659,Barney's Version,First he got married. Then he got married again. Then he met the love of his life.,Richard J. Lewis,13.08
1660,Runner Runner,The house always wins.,Brad Furman,5.73
1661,Antitrust,Truth can be dangerous...Trust can be deadly.,Peter Howitt,11.81
1662,Glory,Their innocence. Their heritage. Their lives.,Edward Zwick,5.46
1663,Once Upon a Time in America,"Crime, passion and lust for power - Sergio Leone's explosive saga of gangland America.",Sergio Leone,8.22
1664,Dead Man Down,Blood demands blood,Niels Arden Oplev,7.41
1665,The Merchant of Venice,,Michael Radford,11.84
1666,The Good Thief,He doesn't want money. He wants what money can't buy.,Neil Jordan,14.20
1667,Supercross,,Steve Boyum,7.47
1668,Miss Potter,The life of Beatrix Potter is the most enchanting tale of all.,Chris Noonan,14.10
1669,Wu Ji,the promise,Chen Kaige,9.67
1670,DOA: Dead or Alive,"They're the ultimate fighters. They've got the looks. They've got the moves, and the men fall at their feet.",Corey Yuen Kwai,14.44
1671,The Assassination of Jesse James by the Coward Robert Ford,Beyond the myth lies America's greatest betrayal,Andrew Dominik,13.36
1672,辛亥革命,Fall of the Last Empire,Jackie Chan,7.26
1673,Le petit Nicolas,,Laurent Tirard,6.71
1674,Wild Card,Never bet against a man with a killer hand.,Simon West,7.61
1675,Machine Gun Preacher,Hope is the greatest weapon of all,Marc Forster,7.63
1676,Konferenz der Tiere,,Reinhard Klooss,13.83
1677,Goodbye Bafana,,Bille August,8.70
1678,United Passions,Every dream has it's own rules,Fr\u00e9d\u00e9ric Auburtin,13.60
1679,Grace of Monaco,,Olivier Dahan,10.52
1680,Савва. Сердце воина,You need only wish with all of your heart!,Maksim Fadeev,5.81
1681,Ripley's Game,,Liliana Cavani,9.02
1682,Sausage Party,Always use condiments,Conrad Vernon,14.27
1683,Pitch Perfect 2,We're back pitches,Elizabeth Banks,6.03
1684,Walk the Line,Love is a burning thing.,James Mangold,6.39
1685,Keeping the Faith,"If you have to believe in something, you may as well believe in love.",Edward Norton,5.34
1686,The Borrowers,Little People. Big Trouble. Lots of fun.,Peter Hewitt,10.26
1687,Frost/Nixon,400 million people were waiting for the truth.,Ron Howard,12.72
1688,Confessions of a Dangerous Mind,Some things are better left top secret.,George Clooney,8.13
1689,Serving Sara,The One Thing That Could Bring Them Together Is Revenge.,Reginald Hudlin,7.14
1690,The Boss,Watch your assets,Ben Falcone,10.31
1691,Cry Freedom,,Richard Attenborough,14.47
1692,Mumford,Some towns have all the fun.,Lawrence Kasdan,9.97
1693,Seed of Chucky,Fear The Second Coming,Don Mancini,9.54
1694,The Jacket,Terror has a new name.,John Maybury,11.52
1695,Aladdin,Wish granted!,Ron Clements,7.01
1696,Straight Outta Compton,The Story of N.W.A.,F. Gary Gray,8.72
1697,Indiana Jones and the Temple of Doom,If adventure has a name... it must be Indiana Jones.,Steven Spielberg,13.41
1698,The Rugrats Movie,,Norton Virgien,8.01
1699,Along Came a Spider,The game is far from over.,Lee Tamahori,5.31
1700,Florence Foster Jenkins,"People may say I couldn't sing, but no one can say I didn't sing",Stephen Frears,5.77
1701,Once Upon a Time in Mexico,The Time Has Come.,Robert Rodriguez,12.03
1702,Die Hard,40 Stories. Twelve Terrorists. One Cop.,John McTiernan,13.01
1703,Role Models,They're about to get more than they plea-bargained for.,David Wain,8.63
1704,The Big Short,This is a true story.,Adam McKay,12.80
1705,Taking Woodstock,A Generation Began In His Backyard.,Ang Lee,7.89
1706,Miracle,"If you believe in yourself, anything can happen.",Gavin O'Connor,14.70
1707,Dawn of the Dead,"When the undead rise, civilization will fall.",Zack Snyder,11.30
1708,The Wedding Planner,His big day is her big problem.,Adam Shankman,9.86
1709,キャプテンハーロック,,Shinji Aramaki,5.95
1710,The Royal Tenenbaums,"Family isn’t a word, it’s a sentence.",Wes Anderson,11.10
1711,Identity,The secret lies within.,James Mangold,5.88
1712,Last Vegas,It's going to be legendary,Jon Turteltaub,14.67
1713,For Your Eyes Only,"No one comes close to James Bond, 007.",John Glen,6.85
1714,Serendipity,Sometimes True Love Can Have More Than One Face.,Peter Chelsom,9.86
1715,Timecop,They killed his wife ten years ago. There's still time to save her. Murder is forever... until now.,Peter Hyams,7.94
1716,Zoolander,3% Body Fat. 1% Brain Activity.,Ben Stiller,13.52
1717,Safe Haven,You know it when you find it,Lasse Hallstr\u00f6m,7.10
1718,Hocus Pocus,It's just a bunch of Hocus Pocus.,Kenny Ortega,14.97
1719,No Reservations,Life isn't always made to order.,Scott Hicks,8.86
1720,Kick-Ass,Shut up. Kick ass.,Matthew Vaughn,9.50
1721,30 Minutes or Less,A lot can happen in 30 minutes.,Ruben Fleischer,11.07
1722,Dracula 2000,The Most Seductive Evil of All Time Has Now Been Unleashed in Ours.,Patrick Lussier,7.83
1723,"Alexander and the Terrible, Horrible, No Good, Very Bad Day",One day can change everything.,Miguel Arteta,6.40
1724,Pride & Prejudice,A romance ahead of its time.,Joe Wright,11.03
1725,Blade Runner,Man has made his match... now it's his problem.,Ridley Scott,7.12
1726,Rob Roy,Honor made him a man. Courage made him a hero. History made him a legend.,Michael Caton-Jones,7.21
1727,3 Days to Kill,,McG,7.84
1728,We Own the Night,Two brothers on opposite sides of the law. Beyond their differences lies loyalty.,James Gray,9.32
1729,Lost Souls,,Janusz Kami\u0144ski,12.24
1730,Le peuple migrateur,,Jacques Perrin,12.25
1731,Just My Luck,Everything changed in the wink of an eye.,Donald Petrie,5.28
1732,"Mystery, Alaska",A Small Town on the Outskirts of Greatness.,Jay Roach,11.54
1733,The Spy Next Door,"Spying is easy, Babysitting is hard",Brian Levant,9.80
1734,A Simple Wish,Anabel made a wish. Murray made a mess,Michael Ritchie,7.26
1735,Ghosts of Mars,Terror is the same on any planet.,John Carpenter,12.97
1736,Our Brand Is Crisis,May the best campaign win.,David Gordon Green,13.07
1737,Pride and Prejudice and Zombies,Bloody lovely.,Burr Steers,7.67
1738,Kundun,,Martin Scorsese,14.43
1739,How to Lose Friends & Alienate People,"He's across the pond, and out of his depth.",Robert B. Weide,10.34
1740,Kick-Ass 2,You Can't Fight Your Destiny.,Jeff Wadlow,9.07
1741,Alatriste,,Agust\u00edn D\u00edaz Yanes,12.90
1742,Brick Mansions,Undercover and never Outgunned,Camille Delamarre,14.63
1743,Octopussy,James Bond’s all time high.,John Glen,15.00
1744,Knocked Up,Save the due date.,Judd Apatow,6.20
1745,My Sister's Keeper,"A tale of life, love, and letting go.",Nick Cassavetes,13.32
1746,Welcome Home Roscoe Jenkins,"Roscoe Jenkins aims for the heartstrings and funny bones, a raucous helping of family soul food.",Malcolm D. Lee,14.33
1747,A Passage to India,"David Lean, the Director of ""Doctor Zhivago"", ""Lawrence of Arabia"" and ""The Bridge on the River Kwai"", invites you on . .",David Lean,8.13
1748,Notes on a Scandal,One woman's secret is another woman's power. One woman's fear is another woman's weapon. One woman's life is in another woman's hands....,Richard Eyre,5.44
1749,Rendition,What if someone you love...just disappeared?,Gavin Hood,11.24
1750,Star Trek VI: The Undiscovered Country,The battle for peace has begun.,Nicholas Meyer,14.96
1751,Divine Secrets of the Ya-Ya Sisterhood,The Secret Is Out.,Callie Khouri,14.77
1752,Kiss the Girls,Smart Girls. Pretty Girls. Missing Girls.,Gary Fleder,5.77
1753,The Blues Brothers,They'll never get caught. They're on a mission from God.,John Landis,11.30
1754,The Sisterhood of the Traveling Pants 2,Some friends just fit together.,Sanaa Hamri,13.21
1755,Joyful Noise,Dream a whole lot louder,Todd Graff,13.13
1756,About a Boy,One ordinary couple. One little white lie.,Chris Weitz,8.05
1757,Lake Placid,You'll never know what bit you.,Steve Miner,7.09
1758,Lucky Number Slevin,Wrong Time. Wrong Place. Wrong Number.,Paul McGuigan,11.49
1759,The Right Stuff,How the future began.,Philip Kaufman,9.47
1760,Anonymous,Was Shakespeare a Fraud?,Roland Emmerich,8.02
1761,The Neverending Story,A boy who needs a friend finds a world that needs a hero in a land beyond imagination!,Wolfgang Petersen,8.40
1762,Dark City,A world where the night never ends.,Alex Proyas,7.19
1763,The Duchess,Based on the incredible true story.,Saul Dibb,11.62
1764,Return to Oz,An all-new adventure down the yellow brick road.,Walter Murch,11.50
1765,The Newton Boys,Four Brothers. Four Criminals. For The Money... They Would Stop At Nothing.,Richard Linklater,5.70
1766,Case 39,Some cases should  never be opened.,Christian Alvart,6.79
1767,Suspect Zero,Who's next?,E. Elias Merhige,9.28
1768,Martian Child,"doesn't matter where you come from, as long as you find where you belong!",Menno Meyjes,10.87
1769,Spy Kids: All the Time in the World,,Robert Rodriguez,11.80
1770,Money Monster,Not every conspiracy is a theory.,Jodie Foster,5.03
1771,The 51st State,Nice Wheels. Dirty Deals. And One Mean Mother In A Kilt.,Ronny Yu,12.55
1772,Flawless,,Joel Schumacher,12.90
1773,Mindhunters,"For seven elite profilers, finding a serial killer is a process of elimination. Their own.",Renny Harlin,6.05
1774,What Just Happened,Admit nothing.,Barry Levinson,13.15
1775,The Statement,"At the end of World War II, many of those involved in war crimes were prosecuted. Some got away. Until now.",Norman Jewison,8.70
1776,The Magic Flute,,Kenneth Branagh,6.97
1777,Paul Blart: Mall Cop,Safety Never Takes A Holiday.,Steve Carr,8.98
1778,Freaky Friday,Mondays are manic. Wednesdays are wild. And Fridays are about to get a little freaky.,Mark Waters,5.49
1779,The 40 Year Old Virgin,"The longer you wait, the harder it gets",Judd Apatow,11.00
1780,Shakespeare in Love,Love is the only inspiration.,John Madden,12.50
1781,A Walk Among the Tombstones,Some people are afraid of all the wrong things,Scott Frank,7.59
1782,Kindergarten Cop,"Go ahead, you tell him you didn't do your homework.",Ivan Reitman,6.22
1783,Pineapple Express,Put this in your pipe and smoke it.,David Gordon Green,11.75
1784,EverAfter,Desire. Defy. Escape.,Andy Tennant,7.66
1785,Open Range,No place to run. No reason to hide.,Kevin Costner,6.07
1786,Flatliners,Some lines shouldn't be crossed.,Joel Schumacher,5.04
1787,A Bridge Too Far,Out of the sky comes the screen's most incredible spectacle of men and war!,Richard Attenborough,7.02
1788,Red Eye,Fear takes flight.,Wes Craven,14.32
1789,Final Destination 2,Death is like a boomerang. it keeps coming back,David R. Ellis,13.46
1790,"O Brother, Where Art Thou?",They have a plan...but not a clue.,Joel Coen,10.59
1791,Legion,"When the last angel falls, the fight for mankind begins.",Scott Stewart,10.18
1792,Pain & Gain,Their American dream is bigger than yours.,Michael Bay,14.02
1793,In Good Company,"He's rich, young and handsome. He's in love with you and he's your dad's boss.",Paul Weitz,6.50
1794,Clockstoppers,"The adventure of a lifetime, in a few mere seconds.",Jonathan Frakes,14.55
1795,Silverado,Four strangers become friends. Four friends become heros. On the road to...,Lawrence Kasdan,5.45
1796,Brothers,There are two sides to every family.,Jim Sheridan,13.69
1797,Agent Cody Banks 2: Destination London,Adventure is an attitude.,Kevin Allen,14.50
1798,New Year's Eve,The one night anything is possible.,Garry Marshall,8.02
1799,Original Sin,This is not a love story - it's a story about love.,Michael Cristofer,11.70
1800,The Raven,The only one who can stop a serial killer is the man who inspired him.,James McTeigue,11.18
1801,Welcome to Mooseport,,Donald Petrie,11.62
1802,Highlander III: The Sorcerer,"Throughout time they have hunted each other fulfilling the prophecy, that there can be only one.",Andrew Morahan,13.91
1803,Blood and Wine,There is no honour amongst thieves.,Bob Rafelson,11.47
1804,Snow White: A Tale of Terror,The fairy tale is over.,Michael Cohn,7.77
1805,The Curse of the Jade Scorpion,Love stings,Woody Allen,7.99
1806,Accidental Love,Sometimes you nail love. Sometimes it nails you.,David O. Russell,8.51
1807,Flipper,This summer it's finally safe to go back in the water.,Alan Shapiro,10.24
1808,Self/less,God Created Man. Man Created Immortality.,Tarsem Singh,14.16
1809,The Constant Gardener,Love. At any cost.,Fernando Meirelles,12.80
1810,The Passion of the Christ,"By his wounds, we were healed.",Mel Gibson,7.83
1811,Mrs. Doubtfire,She makes dinner. She does windows. She reads bedtime stories. She's a blessing... in disguise.,Chris Columbus,10.36
1812,Rain Man,A journey through understanding and fellowship.,Barry Levinson,11.44
1813,Gran Torino,Ever come across somebody you shouldn't have messed with?,Clint Eastwood,13.00
1814,W.,A life misunderestimated.,Oliver Stone,10.35
1815,Taken,They took his daughter.  He'll take their lives.,Pierre Morel,10.02
1816,The Best of Me,You never forget your first love.,Michael Hoffman,8.72
1817,The Bodyguard,Never let her out of your sight. Never let your guard down. Never fall in love.,Mick Jackson,11.13
1818,Schindler's List,"Whoever saves one life, saves the world entire.",Steven Spielberg,14.49
1819,The Help,Change begins with a whisper.,Tate Taylor,14.02
1820,The Fifth Estate,You can't expose the world's secrets without exposing yourself,Bill Condon,11.43
1821,Scooby-Doo 2: Monsters Unleashed,They came. They saw. They ran.,Raja Gosnell,14.43
1822,Viy,The truth is in you,Oleg Stepchenko,14.03
1823,Freddy vs. Jason,Evil Will Battle Evil,Ronny Yu,11.73
1824,The Face of an Angel,"Forget the truth, find the story.",Michael Winterbottom,11.31
1825,Jimmy Neutron: Boy Genius,"He may be small, but he's got a big brain!",John A. Davis,12.49
1826,Cloverfield,Some Thing Has Found Us,Matt Reeves,14.41
1827,Teenage Mutant Ninja Turtles II: The Secret of the Ooze,"Cowabunga, it's the new turtle movie.",Michael Pressman,6.71
1828,The Untouchables,What are you prepared to do?,Brian De Palma,11.40
1829,No Country for Old Men,There are no clean getaways.,Joel Coen,8.13
1830,Ride Along,Propose to this cop's sister? Rookie mistake.,Tim Story,14.08
1831,Bridget Jones's Diary,Health Warning: Adopting Bridget's lifestyle could seriously damage your health.,Sharon Maguire,14.19
1832,Chocolat,...and the world is still indulging!,Lasse Hallstr\u00f6m,10.75
1833,"Legally Blonde 2: Red, White & Blonde",Bigger. Bolder. Blonder.,Charles Herman-Wurmfeld,12.66
1834,Parental Guidance,Here come the grandparents.  There go the rules.,Andy Fickman,9.47
1835,No Strings Attached,Friendship has its benefits.,Ivan Reitman,5.90
1836,Tombstone,Justice is coming.,George P. Cosmatos,14.62
1837,Romeo Must Die,"In the city ruled by criminals, two families have forgotten their fear. He will make them remember.",Andrzej Bartkowiak,7.59
1838,The Omen,It is the greatest mystery of all because no human being will ever solve it.,Richard Donner,14.65
1839,Final Destination 3,This Ride Will Be The Death Of You.,James Wong,11.80
1840,The Lucky One,,Scott Hicks,11.34
1841,Bridge to Terabithia,"Close your eyes, but keep your mind wide open.",G\u00e1bor Csup\u00f3,12.69
1842,Finding Neverland,Where will your imagination take you?,Marc Forster,7.09
1843,A Madea Christmas,This Little Fool Thinks She's Getting A Damn Pony,Tyler Perry,11.37
1844,The Grey,Live or Die on This Day,Joe Carnahan,12.85
1845,Hide and Seek,"Come out, come out, whatever you are.",John Polson,14.96
1846,Anchorman: The Legend of Ron Burgundy,They bring you the news so you don't have to get it yourself.,Adam McKay,5.98
1847,GoodFellas,Three Decades of Life in the Mafia.,Martin Scorsese,7.57
1848,Agent Cody Banks,Save the world. Get the girl. Pass math.,Harald Zwart,5.83
1849,Nanny McPhee,You'll Learn To Love Her. Warts And All.,Kirk Jones,14.85
1850,Scarface,The world is yours...,Brian De Palma,9.26
1851,Nothing to Lose,"When the odds are against you, sometimes the only bet is yourself.",Steve Oedekerk,14.34
1852,The Last Emperor,"He was the Lord of Ten Thousand Years, the absolute monarch of China. He was born to rule a world of ancient tradition. Nothing prepared him for our world of change.",Bernardo Bertolucci,14.89
1853,Contraband,What would you hide to protect your family?,Baltasar Korm\u00e1kur,10.75
1854,Money Talks,This ain't no buddy movie.,Brett Ratner,13.49
1855,There Will Be Blood,There Will Be Greed. There Will Be Vengeance.,Paul Thomas Anderson,5.45
1856,The Wild Thornberrys Movie,You don't need extraordinary powers to do extraordinary things.,Cathy Malkasian,5.79
1857,Rugrats Go Wild,The Family Vacation Goes Overboard,Norton Virgien,6.34
1858,Undercover Brother,He's All Action,Malcolm D. Lee,5.15
1859,The Sisterhood of the Traveling Pants,Laugh. Cry. Share the pants.,Ken Kwapis,9.11
1860,Kiss of the Dragon,Kiss Fear Goodbye,Chris Nahon,13.39
1861,The House Bunny,"For the girls of ZETA house college life was no party, until Shelley showed up.",Fred Wolf,5.02
1862,Beauty Shop,A Cut Above,Bille Woodruff,12.05
1863,Million Dollar Arm,"Sometimes to win, sometimes you have to change the game",Craig Gillespie,5.41
1864,The Giver,Search for truth. Find freedom.,Phillip Noyce,11.04
1865,What a Girl Wants,Trying to fit in. Born to stand out.,Dennie Gordon,8.44
1866,Jeepers Creepers 2,He can taste your fear.,Victor Salva,10.80
1867,Good Luck Chuck,He has to break his curse before she breaks his heart.,Mark Helfrich,8.69
1868,Cradle 2 the Grave,Mortal enemies make dangerous friends.,Andrzej Bartkowiak,10.86
1869,The Hours,The time to hide is over. The time to regret is gone. The time to live is now.,Stephen Daldry,12.65
1870,She's the Man,"If you wanna chase your dream, sometimes you gotta break the rules.",Andy Fickman,13.19
1871,Mr. Bean's Holiday,Disaster has a passport.,Steve Bendelack,13.71
1872,Anacondas: The Hunt for the Blood Orchid,,Dwight H. Little,8.41
1873,Blood Ties,Crime runs in the family.,Guillaume Canet,14.65
1874,August Rush,An incredible journey moving at the speed of sound,Kirsten Sheridan,10.39
1875,Elizabeth,Declared illegitimate aged 3. Tried for treason aged 21. Crowned Queen aged 25.,Shekhar Kapur,12.84
1876,Bride of Chucky,Chucky Gets Lucky.,Ronny Yu,11.54
1877,Tora! Tora! Tora!,The incredible attack on Pearl Harbor.,Richard Fleischer,9.83
1878,Spice World,You say you want a revolution?,Bob Spiers,12.09
1879,The Sitter,Worst. Babysitter. Ever.,David Gordon Green,9.48
1880,Dance Flick,,Damien Dante Wayans,12.74
1881,The Shawshank Redemption,Fear can hold you prisoner. Hope can set you free.,Frank Darabont,14.73
1882,Crocodile Dundee in Los Angeles,He heard there was wildlife in L.A. He didn't know how wild.,Simon Wincer,11.46
1883,Kingpin,You wouldn't want to meet these pinheads in an alley.,Bobby Farrelly,9.14
1884,The Gambler,The only way out is all in,Rupert Wyatt,9.12
1885,August: Osage County,Misery loves family,John Wells,6.87
1886,Ice Princess,,Tim Fywell,9.69
1887,A Lot Like Love,There's nothing better than a great romance... to ruin a perfectly good friendship.,Nigel Cole,11.24
1888,Eddie the Eagle,"Win or lose, always aim high",Dexter Fletcher,6.97
1889,He Got Game,"The father, the son and the holy game.",Spike Lee,13.95
1890,Don Juan DeMarco,The story of the man who thought he was the greatest lover in the world... and the people who tried to cure him of it!,Jeremy Leven,14.37
1891,Dear John,Love brought them together. Will fate tear them apart?,Lasse Hallstr\u00f6m,11.17
1892,The Losers,Anyone Else Would Be Dead By Now.,Sylvain White,11.74
1893,Don't Be Afraid of the Dark,Fear is never just make believe,Troy Nixey,6.71
1894,War,Vengeance is the ultimate weapon.,Philip G. Atwell,5.84
1895,Punch-Drunk Love,,Paul Thomas Anderson,14.96
1896,EuroTrip,No actual Europeans were harmed in the making of this film.,Jeff Schaffer,8.50
1897,Half Past Dead,,Don Michael Paul,10.60
1898,Unaccompanied Minors,"No plane, no parents, no problem!",Paul Feig,14.16
1899,"Bright Lights, Big City",,James Bridges,8.63
1900,The Adventures of Pinocchio,A new angle on the classic tale... And that's no lie!,Steve Barron,5.22
1901,The Greatest Game Ever Played,Based on a True Story,Bill Paxton,13.47
1902,The Box,All you have to do is push the button.,Richard Kelly,8.40
1903,The Ruins,Terror has evolved.,Carter Smith,6.69
1904,The Next Best Thing,Best Friends Make The Best Mistakes,John Schlesinger,7.30
1905,My Soul to Take,Only One Has The Power To Save Their Souls,Wes Craven,13.67
1906,The Girl Next Door,Matt never saw her coming... but all his friends had!,Luke Greenfield,12.30
1907,Maximum Risk,The Other Side of Safety.,Ringo Lam,9.97
1908,Stealing Harvard,Their intentions were honorable. Their methods were criminal.,Bruce McCulloch,5.02
1909,Legend,"Love, fight, live, rule like a legend.",Brian Helgeland,5.19
1910,Hot Rod,Smack destiny in the face.,Akiva Schaffer,9.43
1911,Shark Night,Terror runs deep.,David R. Ellis,13.09
1912,Angela's Ashes,,Alan Parker,13.62
1913,Draft Day,The greatest victories don't always happen on the field.,Ivan Reitman,11.69
1914,Lifeforce,"In the blink of an eye, the terror begins.",Tobe Hooper,8.61
1915,The Conspirator,One bullet killed the President. But not one man.,Robert Redford,11.91
1916,Lords of Dogtown,"They never thought they'd be famous, but they always thought they'd be friends.",Catherine Hardwicke,6.89
1917,The 33,Hope Runs Deep,Patricia Riggen,10.78
1918,Big Trouble in Little China,Adventure doesn't come any bigger!,John Carpenter,6.16
1919,Un Plan parfait,,Pascal Chaumeil,13.91
1920,Warrior,Fight for Family,Gavin O'Connor,7.37
1921,Michael Collins,"Ireland, 1916. His Dreams Inspired Hope. His Words Ignited Passion. His Courage Forged A Nation's Destiny.",Neil Jordan,12.97
1922,Gettysburg,,Ronald F. Maxwell,14.07
1923,Stop-Loss,The bravest place to stand is by each other's side.,Kimberly Peirce,12.85
1924,Abandon,Watch who you leave behind.,Stephen Gaghan,6.41
1925,Brokedown Palace,"Their graduation present was a trip to paradise, but they never thought they would land in hell.",Jonathan Kaplan,9.10
1926,The Possession,Fear The Demon That Doesn't Fear God,Ole Bornedal,5.32
1927,Mrs. Winterbourne,The story of a girl who is going from filthy to rich,Richard Benjamin,7.71
1928,Straw Dogs,Everyone Has A Breaking Point,Rod Lurie,14.64
1929,The Hoax,Never let the truth get in the way of a good story.,Lasse Hallstr\u00f6m,12.47
1930,Stone Cold,A cop who enforces his own brand of justice.,Craig R. Baxley,10.50
1931,The Road,In a moment the world changed forever.,John Hillcoat,5.25
1932,Sheena,,John Guillermin,14.86
1933,Underclassman,,Marcos Siega,13.97
1934,Say It Isn't So,,J.B. Rogers,13.10
1935,The World's Fastest Indian,,Roger Donaldson,12.16
1936,Tank Girl,"In 2033, justice rides a tank and wears lip gloss.",Rachel Talalay,5.60
1937,King's Ransom,,Jeffrey W. Byrd,14.58
1938,Blindness,,Fernando Meirelles,11.02
1939,BloodRayne,Revenge never tasted so sweet.,Uwe Boll,11.25
1940,Carnage,A new comedy of no manners,Roman Polanski,12.14
1941,Where the Truth Lies,,Atom Egoyan,6.57
1942,Cirque du Soleil: Worlds Away,Experience a Journey Like Never Before,Andrew Adamson,6.76
1943,Without Limits,PRE. The way he competed. The way he lived his life.,Robert Towne,8.84
1944,Me and Orson Welles,If you want to discover life learn from the master,Richard Linklater,5.96
1945,La migliore offerta,A Master of Possession. A Crime of Obsession,Giuseppe Tornatore,10.68
1946,The Bad Lieutenant: Port of Call - New Orleans,The only criminal he can't catch is himself.,Werner Herzog,12.30
1947,Sammy's avonturen: De geheime doorgang,He's Turtly Amazing,Ben Stassen,9.90
1948,Les petits mouchoirs,The one thing friends can't escape is a few home truths.,Guillaume Canet,8.05
1949,Love Ranch,When It Comes To Love... Everyone Pays A Price.,Taylor Hackford,12.96
1950,La véritable histoire du Chat Botté,,J\u00e9r\u00f4me Deschamps,12.16
1951,Белка и Стрелка. Звёздные собаки,,Inna Evlannikova,14.34
1952,The Counselor,Sin Is A Choice.,Ridley Scott,9.01
1953,Ironclad,Heavy metal goes medieval.,Jonathan English,5.72
1954,Waterloo,,Sergey Bondarchuk,5.03
1955,一個人的武林,Kung Fu is a Skill for Killing,Teddy Chan,10.01
1956,Red Sky,Go Rogue,Mario Van Peebles,9.18
1957,Dangerous Liaisons,Lust. Seduction. Revenge. The Game As You've Never Seen It Played Before.,Stephen Frears,7.57
1958,On the Road,The best teacher is experience.,Walter Salles,11.76
1959,Star Trek IV: The Voyage Home,The key to saving the future can only be found in the past.,Leonard Nimoy,12.47
1960,Rocky Balboa,It ain't over 'til it's over.,Sylvester Stallone,9.92
1961,Scream 2,Someone has taken their love of sequels one step too far.,Wes Craven,11.55
1962,Jane Got a Gun,,Gavin O'Connor,11.76
1963,Think Like a Man Too,,Tim Story,8.70
1964,The Whole Nine Yards,"In the heart of suburbia, a hit man with heart has just moved in.",Jonathan Lynn,11.60
1965,Footloose,,Herbert Ross,11.43
1966,Old School,"All the fun of college, none of the education.",Todd Phillips,12.63
1967,The Fisher King,"A Modern Day Tale About The Search For Love, Sanity, Ethel Merman And The Holy Grail.",Terry Gilliam,8.01
1968,I Still Know What You Did Last Summer,Someone is dying for a second chance.,Danny Cannon,5.69
1969,Return to Me,A comedy straight from the heart,Bonnie Hunt,10.18
1970,Zack and Miri Make a Porno,What would you do to get out of debt?,Kevin Smith,12.07
1971,Nurse Betty,She's chasing a dream... they're chasing her.,Neil LaBute,8.85
1972,The Men Who Stare at Goats,No goats. No glory.,Grant Heslov,12.69
1973,Double Take,One big shot. One big mouth. The switch is on.,George Gallo,5.27
1974,"Girl, Interrupted","The crazy thing is, you're not crazy.",James Mangold,12.30
1975,Win a Date with Tad Hamilton!,"In every love story, there's only room for one leading man.",Robert Luketic,10.48
1976,Muppets from Space,Space. It's not as deep as you think.,Tim Hill,13.94
1977,The Wiz,From the book that's an American tradition… from the smash-hit Broadway show… the entertainment of the year!,Sidney Lumet,6.12
1978,Ready to Rumble,They're headed to the big time...face first.,Brian Robbins,9.17
1979,Play It to the Bone,,Ron Shelton,5.97
1980,I Don't Know How She Does It,"If it were easy, men would do it too.",Douglas McGrath,6.10
1981,Piranha 3D,There's something in the water.,Alexandre Aja,13.98
1982,Beyond the Sea,"In the era of cool, Bobby Darin was the soundtrack.",Kevin Spacey,12.51
1983,Meet the Deedles,Fish out of water...Surfers in Yellowstone,Steve Boyum,13.95
1984,The Thief and the Cobbler,,Richard Williams,7.90
1985,The Bridge of San Luis Rey,,Mary McGuckian,5.97
1986,Faster,Slow Justice is no Justice,"George Tillman, Jr.",8.23
1987,ハウルの動く城,The two lived there,Hayao Miyazaki,12.52
1988,Zombieland,This place is so dead,Ruben Fleischer,13.52
1989,The Waterboy,You can mess with him. But don't mess with his water.,Frank Coraci,7.15
1990,The Empire Strikes Back,The Adventure Continues...,Irvin Kershner,12.68
1991,Bad Boys,Whatcha gonna do?,Michael Bay,12.55
1992,The Naked Gun 2½: The Smell of Fear,If you see only one movie this year...you ought to get out more often,David Zucker,11.68
1993,Final Destination,No accidents. No coincidences. No escapes. You can't cheat death.,James Wong,6.39
1994,The Ides of March,Ambition seduces. Power corrupts.,George Clooney,12.14
1995,Pitch Black,Don't be afraid of the dark. Be afraid of what's in the dark,David Twohy,5.97
1996,Someone Like You...,The story about the one that got away and the one she never saw coming.,Tony Goldwyn,8.39
1997,Her,A Spike Jonze Love Story,Spike Jonze,8.30
1998,Joy Ride,"It was just a joke, just for fun.",John Dahl,14.66
1999,The Adventurer: The Curse of the Midas Box,The new name for adventure.,Jonathan Newman,13.44
2000,Anywhere But Here,A story of a mother who knows best... and a daughter who knows better.,Wayne Wang,5.36
```

</details>

3. The `Rental` class contains these instance methods:
    1. `get_movie(name)` - Returns the movie object 
    2. `rent_movie(name)` - Sets the `rented` value of the movie to true. Returns the cost of the rental.

4. `git init` and Pushing to GitHub

## Tips, Tricks, and Resources
- [Objects in Python Notes](#Pi's-and-Python/Objects-In-Python-Notes)
- [W3 Schools - Classes](https://www.w3schools.com/python/python_classes.asp)
- [Geeks for Geeks - Python Objects](https://www.geeksforgeeks.org/python/python-object/)
- [Introduction to Classes and Objects](https://www.youtube.com/watch?v=8yjkWGRlUmY) and [Using Classes and Objects in Python](https://www.youtube.com/watch?v=wfcWRAxRVBA)
- [Reading Files in Python](https://www.w3schools.com/python/python_file_open.asp)


## Extensions
1.

## Reflection Questions
1. Create a memory diagram 
2. Create 

## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person

## Rubric
- **20 points** - All required items are present.
- **15 points** - Task was completed, but supplementary materials are weak or missing.
- **10 points** - Task was attempted, but is missing major components.
- **0 points** - Task was not attempted to 50% completion or student should reattempt.

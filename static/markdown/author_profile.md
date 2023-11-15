<<<<<<< HEAD
## <span style="color:#1e9595">Own repositories</span>

### <span style="color:#c7437ccd">1. BinLTools</span>

Gin Framework-based project.
Used for small features and articles created by the author.

To see the repository, please click [this link](https://github.com/BinL233/BinLTools_Gin).

Website: http://binltools.fun

1. Tech
    - Framework: Gin
    - Frontend: HTML + CSS + JavaScript
    - Backend: Go
    - Database: Mysql

2. Features
    - Login/Registation
        - Password encryption
        - JWT web tokens for users
        - Prevent duplicate logins/registrations
        - Error handlers
    - Reaction Test
        - Automatic upload of scores
        - Ranking System
    - Live2D Widgit
        - Developed based on [l2d](https://github.com/UsernameFull/l2d)
        - Model adaptation
        - Website adaptation
        - Window mousemove tracking
        - Thanks for the L2D model made by [拉莫斯的壳](https://space.bilibili.com/6769942/?spm_id_from=333.999.0.0) !
    - Digit Converter
        - Fast conversion of digits
        - Support Binary, Octal, Decimal and Hexadecimal conversions.
    - Download handler

### <span style="color:#c7437ccd">2. CPU Organization and Design</span>
This project implements 5 stages: 
Instruction Fetch, Instruction Decode, Instruction Execute, Memory of the pipelined CPU 
using the Xilinx design package for FPGAs.

To see the repository, please click [this link](https://github.com/BinL233/Computer-Organization-and-Design)

1. Tech
   - Software: Vivado
   - Language: Verilog
2. Features:
   - Pipelining
   - Circuits of the Instruction Fetch Stage
   - Circuits of the Instruction Decode Stage
   - Circuits of the Execution Stage
   - Circuits of the Memory Access Stage
   - Circuits of the Write Back Stage


### <span style="color:#c7437ccd">3. Thread scheduler</span>

This repository contains code for emulation of a single CPU with 
the Shortest Remaining Time First scheduling policy 
and two IO Devices based thread scheduler.

To see the repository, please click [this link](https://github.com/BinL233/Thread-scheduler).

1. Languages
   - C language
   - Makefile

2. Features
   - Implemented and parsed various mechanisms for virtual memory to 
   physical memory to page mapping and page scheduling algorithms (FIFO, LRU, CLOCK).
   - Implemented multi-process, CPU/IO multi-threading 
   (spin locks, mutex locks, and thread scheduling algorithms (FCFS, SRJF)).
   - implemented TLB mechanism to determine the 
   physical address of the memory request at the time of the TLB hit.

### <span style="color:#c7437ccd">4. One Death Clear</span>

This is a 2D RPG game. 
Control the character to fight against monsters 
and defeat the boss at the end to clear the game.
The most important thing is that if you die you need to start over!

To download this game, please click [this link](/download/No_Death_Clear_0.8.3.exe).

To download the repository, please click [this link](/download/No_Death_Clear_0.8.3_Project.zip)

1. Tech
   - Game Engine: Godot
   - UI and Object Painting: Aseprite & PhotoShop

2. Features
   - Character movement acceleration system
   - Physical collision
   - Health system
   - Buff mechanism

## <span style="color:#1e9595">Open Source projects contributions</span>

### <span style="color:#c7437ccd">1. Kueue</span>

Kueue is a kubernetes-native system that manages quotas and how jobs consume them. 
Kueue decides when a job should wait, when a job should be admitted to start (as in pods can be created) 
and when a job should be preempted (as in active pods should be deleted).

To see the repository, please click [this link](https://github.com/kubernetes-sigs/kueue).

**My contributions:**
   - Pull requests: 8
   - Code: 132 lines
   - Issues: 1
=======
- [My Projects](#my-projects)
   - [Cage](#cage)
   - [Revive](#revive)
   - [Campus](#campus)
   - [One Death Clear (Video Game)](#one-death-clear-video-game)
   - [CPU Organization and Design](#cpu-organization-and-design)
   - [Thread scheduler](#thread-scheduler)
   - [Pentominoes](#pentominoes)
   - [Pokedex](#pokedex)
   - [BinLTools](#binltools)
   - [LionSpell](#lionspell)
   - [Kueue](#kueue)
   - [Course Scheduler](#course-scheduler)
   - [Drawing Application](#drawing-application)


# My Projects

## Cage

This is a Research project. Initiated by Dr. Jiecong Lin of Harvard University, I joined his team and began research and development.

This project reduces the time complexity of analyzing ChIP-nexus data by constructing efficient and accurate models through Deep Learning techniques.

1. Tech
   - Machine Learning Framework: pyTorch
   - Library: pyBigWig, numpy, pandas, tqdm, sklearn, json

2. Features
   - Data Preprocessing:
      - Construct an extractor for FASTA files, primarily for extracting and processing DNA sequence information to ensure that their format and content meet the requirements of the model inputs.
      - Build a system to read the .bed file and extract peaks from it, then map these peaks to the corresponding signal intensity index in the .bw files.
   - Fit:
      - Data Loading and Transfer to GPU: Loads data from the training set and ensures they are on the GPU.
      - Model Preparation: Clears the optimizer state and puts the model in training mode.
      - Forward Pass: Runs the model to get predictions, applies the softmax function to the predictions, and then computes the loss.
      - Backward Pass and Update: Computes the gradients of the loss and performs a step of gradient descent.
   - Losses:
      - A MSE loss function.
      - A multinomial negative log-likelihood loss function.
   - Predict:
      - Construct a trained model to analyze new DNA sequences and predicts the distribution of the signal intensity of protein-DNA interactions across the genome

## [Revive](https://github.com/BinL233/Revive)

Revive is a Focus App for iOS, based on taking care of endangered or extinct species. In Revive, you can take care of a species from 0 to 1, starting with an egg. For your  species to thrive, you need to do anything in a focused way-----such as studying, working, or other activities, which is the core of Revive.

To see the repository, please check [this link](https://github.com/BinL233/Revive)

1. Tech
   - Frontend: SwiftUI
   - Backend: Swift, CloudKit
2. Features
   - Focus
      1. The focus mechanism detects if the user is leaving the application. This prevents the user from doing other things.
      2. For the timer, users are free to set the time they want to focus on.
      3. There are three kinds of focus approaches: hatching, training and exploring.
         - Hatching:
            - Hatching eggs through focus.
            - Eggs are randomly assigned to the user, and eggs from different types of Secipes take different amounts of time to hatch.
            - Users can choose their own focus time, which is used to reduce the amount of time remaining for the egg to hatch. (In other words, egg hatching doesn't need to be done all at once, it can be done by multiple Focuses)
         - Training:
            - Training users' own species through focus.
            - The longer users focus, the higher EXP users' species gain.
         - Exploring:
            - Exploring through focus.
            - Users can select a time period for the focus. The exact time is random in the selected time period.
            - The longer users focus, the higher probability of getting rare items.
   - Backyard
      1. Users can check their species in the Species List. Species List contains information about each species.
         - Name
         - Date of birth
         - Level
         - Sex
      2. Users can take care of their species by feeding them. The items gains by exploring.
   - Analysis
      1. Users can view the history of focus records as well as time distribution graphs.
      2. Users can categorize the view by action and time span.
   - Cloud Sync
      1. Cloud Sync will automatically store user information.
      2. The users' data will be stored in their iCloud.
   - Setting
      1. Focus
      -  Keep Screen On
         - Users can set it on if you want.
      2. Notification
      - Notification
         - Notification switch helps users turn on/off the notification.
      - Reminder
         - Reminder will remind users to start focusing by sending the notification.
         - Users can set the reminder time in this field.
   - Notification
      - If the time set by users is reached, the user will be alerted via notification.

## [Campus](https://github.com/BinL233/campus)

An iOS map App for searching campus buildings and navigating. It also integrates many easy-to-use features. The project follows the MVVM structure.

To see the repository, please check [this link](https://github.com/BinL233/campus)

1. Tech
   - Frontend: SwiftUI + UIKit + MapKit
   - Backend: Swift
   - Configuration: Json

2. Features
   - Decode Json for configuration and encode back for persistence.
   - A map of campus centered on the center of campus and showing most of the central campus.
   - It shows the users' current location. Users can find the building annotations near them.
   - A list of buildings which user can select and favorite. Also, the filter function allows users to filter and sort the list in a variety of ways.
   - Provide detailed information about each building, including name, built time, photos.
   - The navigation function guides the user to the corresponding building or any destination he wants to go.

## [One Death Clear](http://binltools.fun/download/No_Death_Clear_0.8.3_Project.zip) (Video Game)

This is a 2D RPG game.
Control the character to fight against monsters
and defeat the boss at the end to clear the game.
The most important thing is that if you die you need to start over!

To download this game, please check [this link](http://binltools.fun/download/No_Death_Clear_0.8.3.exe).

To download the repository, please check [this link](http://binltools.fun/download/No_Death_Clear_0.8.3_Project.zip)

1. Tech
   - Game Engine: Godot
   - UI and Object Painting: Aseprite & PhotoShop

2. Features
   - Character movement acceleration system
   - Physical collision
   - Health system
   - Buff mechanism


## [CPU Organization and Design](https://github.com/BinL233/Computer-Organization-and-Design)
This project implements 5 stages:
Instruction Fetch, Instruction Decode, Instruction Execute, Memory of the pipelined CPU
using the Xilinx design package for FPGAs.

To see the repository, please check [this link](https://github.com/BinL233/Computer-Organization-and-Design)

1. Tech
   - Software: Vivado
   - Language: Verilog
2. Features
   - Pipelining
   - Circuits of the Instruction Fetch Stage
   - Circuits of the Instruction Decode Stage
   - Circuits of the Execution Stage
   - Circuits of the Memory Access Stage
   - Circuits of the Write Back Stage


## [Thread scheduler](https://github.com/BinL233/Thread-scheduler)

This repository contains code for emulation of a single CPU with
the Shortest Remaining Time First scheduling policy
and two IO Devices based thread scheduler.

To see the repository, please check [this link](https://github.com/BinL233/Thread-scheduler).

1. Languages
   - C language
   - Makefile

2. Features
   - Implemented and parsed various mechanisms for virtual memory to
     physical memory to page mapping and page scheduling algorithms (FIFO, LRU, CLOCK).
   - Implemented multi-process, CPU/IO multi-threading
     (spin locks, mutex locks, and thread scheduling algorithms (FCFS, SRJF)).
   - implemented TLB mechanism to determine the
     physical address of the memory request at the time of the TLB hit.


## [Pentominoes](https://github.com/BinL233/pentominoes)

A Pentominoes Game App for iOS. The project follows the MVVM structure.

To seel the repository, please check [this link](https://github.com/BinL233/pentominoes)

1. Tech
   - Frontend: SwiftUI
   - Backend: Swift
   - Configuration: Json

2. Features
   - All objects built by Shape protocol. Objects constructed by this method do not have pixel problems because they are vector graphics.
   - Build 14*14 Grid, 12 Pieces with different shapes.
   - Gesture functions on Pieces:
      - Drag Gesture: Allows the user to place the Piece into the corresponding grid.
      - Tap Gesture: Allows the user to rotate the Piece 90 degrees.
      - Long Tap Gesture: Allows the user to flip the Piece.
   - Reset: Returns all the pieces to their original positions.
   - Solve: Solve the current puzzle, which means putting all pieces into the correct grid with the correct direction automatically.
   - Decode Json to get persistence.

## [Pokedex](https://github.com/BinL233/pokedex)

A Pokémon infographic for iOS. The project follows the MVVM structure.

To see the repository, please check [this link](https://github.com/BinL233/pokedex)

1. Tech
   - Frontend: SwiftUI
   - Backend: Swift
   - Configuration: Json

2. Features
   - Decode Json for configuration.
   - Store user data by using AppStorage.
   - Adapting light and dark mode.
   - A list of Pokémon displays name, number and thumbnail size image.
   - Selecting a row brings users to the detail view.
   - Detail view contains name, image, type, weakness, prevEvolution, nextEvolution, height and weight.
   - User can select which Pokémon has been captured.
   - HomeView to show captured Pokémon.
   - Filters by Pokémon type.


## [BinLTools](https://github.com/BinL233/BinLTools_Gin)

Gin Framework-based project.
Used for small features and articles created by the author.

To see the repository, please check [this link](https://github.com/BinL233/BinLTools_Gin).

Website: http://binltools.fun

1. Tech
   - Framework: Gin
   - Frontend: HTML + CSS + JavaScript
   - Backend: Go
   - Database: Mysql

2. Features
   - Login/Regisrtation
      - Password encryption
      - JWT web tokens for users
      - Prevent duplicate logins/registrations
      - Error handlers
   - Reaction Test
      - Automatic upload of scores
      - Ranking System
   - Live2D Widgit
      - Developed based on [l2d](https://github.com/UsernameFull/l2d)
      - Model adaptation
      - Website adaptation
      - Window mouse move tracking
      - Thanks for the L2D model made by [拉莫斯的壳](https://space.bilibili.com/6769942/?spm_id_from=333.999.0.0) !
   - Digit Converter
      - Fast conversion of digits
      - Support Binary, Octal, Decimal and Hexadecimal conversions.
   - Download handler


## [LionSpell](https://github.com/BinL233/lion-spell)

A Word Scramble Game for iOS. The project follows the MVVM structure.

To see the repository, please check [this link](https://github.com/BinL233/lion-spell)

1. Tech
   - Frontend: SwiftUI
   - Backend: Swift

2. Features
   - Support switching between English, French, German, and Italian vocabulary modes.
   - Randomly choose scrambled letters from the thesaurus, but at the same time make sure that you can definitely form words.
   - A scorer to calculate and display the current score.
   - Users can choose the level of difficulty, which determines the length of the word as well as the number of buttons (buttons are used to select the letter)
   - The hint interface displays how many words of each length can be solved in the current puzzle.

## [Kueue](https://github.com/kubernetes-sigs/kueue)

Kueue is a kubernetes-native system that manages quotas and how jobs consume them.
Kueue decides when a job should wait, when a job should be admitted to start (as in pods can be created)
and when a job should be preempted (as in active pods should be deleted).

To see the repository, please check [this link](https://github.com/kubernetes-sigs/kueue).

**My contributions:**
- Pull requests: 8
- Code: 132 lines
- Issues: 1

## [Course Scheduler](https://github.com/BinL233/CourseScheduler)

Simulated Course Scheduling application.

To see the repository, please check [this link](https://github.com/BinL233/CourseScheduler)

1. Tech
   - Frontend: Java GUI, Swing
   - Backend: Java
   - Database: Derby

2. Features
   - GUI interface for Student part and Admin part.
   - Linking databases and applications through APIs.
   - Create different authorizations for students and admin users.
   - Features for student: Drop Course, Add Course and Display Courses List.
   - Features for Admin Users: Create Semester, Create Course, Add Student, Drop Student, Display Students List and Display Courses List.


## [Drawing Application](https://github.com/BinL233/drawing-application)

This is Java 2D Drawing Application.

To see the repository, please check [this link](https://github.com/BinL233/drawing-application)

1. Tech
   - Frontend: Java GUI, Swing
   - Backend: Java
2. Feature
   - Store vector diagrams based on the coordinates of the user's drawing.
   - A combo box for selecting the shape to draw, a line, oval, or rectangle.
   - Two JButtons that each show a JColorChooser dialog to allow the user to choose the first and second color in the gradient.
   - Undo button: undo the last shape drawn.
   - Clear button: clear all shapes from the drawing.
   - Checkboxes:
      - Specifies if the shape should be filled or unfilled.
      - Specify whether to paint using a gradient.
      - Specifying whether to draw a dashed or solid line.
   - JSpinner: Modify Stroke width, Stroke dash length.
   - A status bar JLabel at the bottom of the frame that displays the current location of the mouse on the draw panel.
>>>>>>> 388f102937fe07671b437a0ed11c3b79cb6d0006

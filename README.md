CrosswordSolver
=======================

// Authors
	Dong Liu


// Requirements
    Write a program that solves the daily 15x15 puzzle from onlinecrosswords.net:
    http://www.onlinecrosswords.net/printable-daily-crosswords-1.php

    The program should access the web page, parse it, solve the crossword
    as much as possible, and print it on stdout. Use "#" to represent
    black squares and "." to represent squares you weren't able to fill
    out.

    Tip: There are plenty of free websites that suggest answers for
    individual crossword clues. There are also free dictionaries
    available. However, this is not meant to be a very time-consuming
    project, so it is OK to be much less than perfect. Aim for a solution
    that is able to fill out 50% of the initial empty squares. (More is
    nice, of course, but by no means needed.)

    If possible, please choose to code in Python, Java, or Scala; if
    you're not comfortable with any of those, any language is fine. Feel
    free to use of 3rd-party libraries (e.g. PIL) and/or public APIs.


// Libraries used
  - jQuery: used to help process the web page http://www.onlinecrosswords.net 
  - CImg: a C++ Templated Image Processing Library
  - Image Magick: ImageMagick, a software suite for editing, composing and 
  	converting bitmap images, to figure out which cells were white 
  	and which cells were black
  - BeautifulSoup: Python library, to scrape words from three websites that 
  	generated answers for crossword-puzzle clues.


// Explanation
  - The JavaScript file is used as a front end to read that day's puzzle from 
  	onlinecrosswords.net. It will also parse the page to get the puzzle image 
  	and cluses, they are the input for the rest of the program.
  - CImg will read in the image of the board, process it and decide if a certain 
  	cell is black and white. 
  - After the clues are parsed, they are inputted as search values into three 
  	crossword-puzzle clue/answer websites: crosswordnexus.com, 
  	crosswordheaven.com, and crosswordtracker.com.  
	I used python to read the html from the different websites and to create 
	lists of possible answers (that met our length requirement and were not 
	duplicates) to the clue. 
  - The general idea behind the algorithm used for filling out the puzzle is: 
	I would pick a random answer and try it, and it would repeat the process 
	until it ran into a problem. Once that happened, the algorithm backtracks 
	and fixes it.
  - A display will show up with the solved crossword puzzle.


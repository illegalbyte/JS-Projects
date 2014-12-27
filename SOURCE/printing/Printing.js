var printing = new Object();

printing.chessBoard = function(size, fullChar, emptyChar) { 

    var linCounter = 0;
    var rowCounter = 0;

    while ( rowCounter < size ) {
        
        var line = "";
        linCounter = 0;
      
        if (rowCounter % 2 == 0)
        {
        while (linCounter < size) 
        {
            if (linCounter % 2 == 0) 
            { line += fullChar; }
            else
            { line += emptyChar; }
        
            linCounter++;
        }
        }

        if (rowCounter % 2 != 0)
        {
        while (linCounter < size) 
        {
            if (linCounter % 2 == 0) 
            { line += emptyChar; }
            else
            { line += fullChar; }
        
            linCounter++;
        }
        }
      
      console.log(line);
        rowCounter++;
    }   
}

printing.triangle = function(desiredHeight) {
          var out = 0;
          var down = 1;

          while (desiredHeight >= down) {

            while ( out < down ) {
            process.stdout.write("#");
            out++;
            }

          out = 0;
          process.stdout.write("\n");
          down++;
        }
    }

printing.rect = function (height, width, edges, fill) {
   var rectObj = {
    ends: "",
    sides: "",
    triangle: "",
   }

   for (var i = 0; i < width; i++) {
        rectObj.ends += edges;
   };

   //for constructing the sides with spaces
   for (var w = 0; w < width; w++) {
        if (w == 0 || w == width-1) {
            rectObj.sides += edges;
        } else {
            rectObj.sides += fill;
        }
   }

   //printing the rectangle layer by layer
   for (var h = 0; h < height; h++) {

        if (h == 0 || h == height-1) {
            console.log(rectObj.ends);
        } else if (h > 0 || h < height-1) {
            console.log(rectObj.sides);
        }
   }


}


printing.rect(10,10, "*", " ")
// parameters: height, width, edges, fill
printing.triangle(10);
// parameters: height
printing.chessBoard(11,"x","≈")
// parameters: dimensions², 1st fill character, 2nd fill character 


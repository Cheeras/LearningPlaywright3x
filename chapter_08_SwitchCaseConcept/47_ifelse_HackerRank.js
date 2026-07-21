    const data = require("fs").readFileSync(0, "utf8").trim();
    var marks = Number(data);
    var MARKS_TEST = marks;
    //Head Ends Here
    if(MARKS_TEST > 90){
        console.log("AA");
    } else if(MARKS_TEST > 80 && MARKS_TEST <= 90){
        console.log("AB");
    } else if(MARKS_TEST > 70 && MARKS_TEST <= 80){
        console.log("BB");
    }else if(MARKS_TEST > 60 && MARKS_TEST <= 70){
        console.log("BC");
    } else if(MARKS_TEST > 50 && MARKS_TEST <= 60){
        console.log("CC");
    }else if(MARKS_TEST > 40 && MARKS_TEST <= 50){
        console.log("CD");
    }else if(MARKS_TEST > 30 && MARKS_TEST <= 40){
        console.log("DD");
    }else if(MARKS_TEST <= 30){
        console.log("FF");
    }


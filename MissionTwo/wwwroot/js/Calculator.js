$("#CalBtn").click(function () {
    assignment = 55;
    groupProject = 5;
    quizzes = 10;
    exams = 20;
    intex = 10;
    gradeNumeric = (this.assignedSlot * Int64.Parse($("#Asg").val())/100) + (this.groupProject * Int64.Parse($("#GP").val())/100) + (this.quizzes * Int64.Parse($("#Qzz").val())/100) + (this.exams * Int64.Parse($("#Ex").val())/100) + (this.intex * Int64.Parse($("#ITX").val())/100);
    gradeLetter = "";
    if (gradeNumeric >= 94) {
        gradeLetter = "A"
    }
    else if (gradeNumeric >= 90) {
        gradeLetter = "A-"
    }
    else if (gradeNumeric >= 87) {
        gradeLetter = "B+"
    }
    else if (gradeNumeric >= 84) {
        gradeLetter = "B"
    }
    else if (gradeNumeric >= 80) {
        gradeLetter = "B-"
    }
    else if (gradeNumeric >= 77) {
        gradeLetter = "C+"
    }
    else if (gradeNumeric >= 74) {
        gradeLetter = "C"
    }
    else if (gradeNumeric >= 70) {
        gradeLetter = "C-"
    }
    else if (gradeNumeric >= 67) {
        gradeLetter = "D+"
    }
    else if (gradeNumeric >= 64) {
        gradeLetter = "D"
    }
    else if (gradeNumeric >= 60) {
        gradeLetter = "D-"
    }
    else {
        gradeLetter = "E"
    }
    alert("You got " + gradeNumeric + "/100 which is a " + gradeLetter)

})
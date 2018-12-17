var Tutor = require('./Tutorial.js');


exports.NodeTutorial = function () {
    
       console.log("Second layer")
    
    this.pTutor = function () {
        var PTutor = Tutor
        PTutor.tutorial();
    } 
    

}
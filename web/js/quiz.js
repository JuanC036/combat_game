function answers(){
  var testScore= 0
  var question1 = document.querySelector("input[name='battlefield']:checked").value
  if (question1 == "10"){
    testScore = testScore + 1
  }
   var question2 = document.querySelector("input[name='war']:checked").value
   if (question2 == "10"){
    testScore = testScore + 1 
   }
   var question3 = document.querySelector("input[name='gears']:checked").value
   if (question3 == "10"){
    testScore = testScore + 1 
   }
   var question4 = document.querySelector("input[name='dead']:checked").value
   if (question4 == "10"){
    testScore = testScore + 1 
   }
   var question5 = document.querySelector("input[name='meme']:checked").value
   if (question5 == "10"){
    testScore = testScore + 1 
   }
   var question6 = document.querySelector("input[name='pepe']:checked").value
   if (question6 == "10"){
    testScore = testScore + 1 
   }
   var question7 = document.querySelector("input[name='race']:checked").value
   if (question7 == "10"){
    testScore = testScore + 1 
   }
   var question8 = document.querySelector("input[name='prez']:checked").value
   if (question8 == "10"){
    testScore = testScore + 1 
   }
   var question9 = document.querySelector("input[name='win']:checked").value
   if (question9 == "10"){
    testScore = testScore + 1 
   }
   var question10 = document.querySelector("input[name='go']:checked").value
   if (question10 == "10"){
    testScore = testScore + 1 
   }
    var question11 = document.querySelector("input[name='hi']:checked").value
  if (question11 == "10"){
    testScore = testScore + 1
  }
  alert("Calculating...")
  alert("Your final score is...")
  alert(testScore)
}
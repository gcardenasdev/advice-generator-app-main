$(document).ready(function(){

    //function to request data from API
    function callAdvice() {
        $.ajax({
            type: 'GET',
            url: 'https://api.adviceslip.com/advice',
            success: function(data) {
 
                 let text = JSON.parse(data);
             
                $(".advice-id").text("ADVICE #" + text.slip.id);
                $(".advice-quote").text(text.slip.advice);
            }
        })
     }
    
     callAdvice()

    $(".dice-btn").click(function(){ 
        callAdvice()
    })

     
})


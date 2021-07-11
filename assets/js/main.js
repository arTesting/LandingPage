const hamburger_menu = document.querySelector(".hamburger-menu");

const container = document.querySelector(".cont");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})


function quote(){
     quotes=[
        "“The future belongs to those who believe in the beauty of their dreams.“- Eleanor Roosvelt",
        "“If you're not making someone else's life better, then you're wasting your time. Your life will become better by making some other lives better.”  - Will Smith",
        "“It is during our darkest moments that we must focus to see the light.“ - Aristotle",
        "“You will face many defeats in life, but never let yourself be defeated.“ - Maya Angelou",
        "“The only impossible journey is the one you never begin.“ - Tony Robbins",
        "“I never think of the future, it comes soon enough.“ - Albert Einstein",
        "“Believe in your infinite potential. Your only limitations are those you set upon yourself.“ - Roy Bennett" 
    ]


    random = Math.floor(Math.random() * 6)  
    quo = document.getElementById("quote")
    setTimeout(()=>{quo.innerHTML = '<p class="description" id="quote">'+ quotes[random]+     
    '</p><br>'},3000)
        
}
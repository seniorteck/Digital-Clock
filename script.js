const clock = document.querySelector('.clock');

//a function that print out the hours, minutes, and seconds to html
function tick() {
    
    const realTime = new Date();

    //generates the hour from the new date 
    const hour = realTime.getHours();
    const minutes = realTime.getMinutes();
    const seconds = realTime.getSeconds();

    // console.log(hour, minutes, seconds)
    
    // == generates an html template 
    const htmlOutput = `
        <span>${hour}</span> : 
        <span>${minutes}</span> : 
        <span>${seconds}</span>
    `
    // == output the result of the html template to the clock class atrributes in html
    clock.innerHTML = htmlOutput
}

//ca;; the tick function every 1000 miliseconds
setInterval(tick, 1000)


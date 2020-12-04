function calculateGrainYield(){
    let inchesRain = Math.round(prompt("How many inches of rain fell?"));
    // .repeat not supported in IE accding to MDN..
        //  console.log(`Inches of rain: ${"*".repeat(inchesRain)}`);
    let rainDrops ="";
    for (i=0; i< inchesRain; i++){
        rainDrops += "*";
    }
    console.log(`Inches of rain: ${rainDrops}`);


    let baseYield = 50;
    let rainYield = 50;
    let finalYield = 50;
    let fertilizerType = "None";

    if (inchesRain >= 20) {
        rainYield = baseYield*.9;
    } else if (inchesRain < 10){
        rainYield = baseYield*.8;
    } else {
        rainYield = baseYield;
    }

    let fertilizer= prompt("Did you use fertilizer? Yes or No?");
        if (fertilizer.toLowerCase() === "yes"){
            fertilizerType= prompt("What kind of fertilizer did you use? Regular or Premium?");
        }  

    switch(fertilizerType.toLowerCase()) {
        case "regular": 
            finalYield = rainYield*1.1;
            break;
        case "premium": 
            finalYield = rainYield*1.15;
            break;
        default: 
            finalYield = rainYield;
    }

    console.log(`The final yield should be ${finalYield.toFixed(2)} bushels of grain per acre.`);

}

calculateGrainYield();


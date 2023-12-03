console.log("Hello World");

function calculateScoreStatus(score: number) {
    let scoreStatus: string = "";

    if (score > 80)
        scoreStatus = "Excellent";
    else if (score > 60)
        scoreStatus = "Average";
    else
        scoreStatus = "Poor";

    return scoreStatus;
}

calculateScoreStatus(25);


// build in types introduced by Typescript
/*
  any, unknown, never, enum, tuple
*/ 


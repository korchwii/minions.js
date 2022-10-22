const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

  //functions
  function isPresence(minion){
    console.log (minion +" - here");
  }

  function getCapitalNames(minion){
    if(minion!="kevin"){
    return minion.substr(0,1).toUpperCase() + minion.substr(1);
    }
    else{
      return minion;

    }
  
  }
  function getActuallyCapitalized (minion){ 
    //console.log(minion.substr(0,1));
    //console.log (minion.substr(0,1).toUpperCase());

    return minion.substr(0,1)=== minion.substr(0,1).toUpperCase();
  }

  function getIfCapitalized (minion){
     return minion.substr(0,1)=== minion.substr(0,1).toUpperCase();
  }

  function isCapitalized (minion){
    return minion.substr(0,1)=== minion.substr(0,1).toUpperCase();
  }

  function whoIsNotCapitalized (minion){
    return minion.substr(0,1)!= minion.substr(0,1).toUpperCase();

  }
  function whichIndex (minion){
    return minion.substr(0,1)!= minion.substr(0,1).toUpperCase();
  }

  function countMinionNameLength(minion){
    return minion.length;
  }
  
  function sumUpminionNameLengths(total,num){
  return total+num;
  }

  function checkLesserThan(num){
  return num<6;
  }

  function checkGreaterThan(num){
    return num>6;
    }

 function compareMinions (var1,var2){
  return var1.length-var2.length;
 }


  //terminalprint
  minions.forEach(isPresence);

  const capitalizedMinions= minions.map(getCapitalNames);
  console.log(capitalizedMinions);

  const actuallyCapitalizedMinions= capitalizedMinions.filter(getActuallyCapitalized);
  console.log (actuallyCapitalizedMinions);

  const isCap= actuallyCapitalizedMinions.every(getIfCapitalized);
  console.log (isCap);

  const isCapMap= capitalizedMinions.every(isCapitalized);
  console.log (isCapMap);

  const uncapitalizedMinion= capitalizedMinions.find(whoIsNotCapitalized);
  console.log (uncapitalizedMinion);

  const uncapitalizedMinionIndex= capitalizedMinions.findIndex (whichIndex);
  console.log (uncapitalizedMinionIndex);

  minion=capitalizedMinions[uncapitalizedMinionIndex];
  capitalizedMinions[uncapitalizedMinionIndex]= minion.substr(0,1).toUpperCase() + minion.substr(1);

  console.log (capitalizedMinions[uncapitalizedMinionIndex]);

   const isCapEvery = capitalizedMinions.every(isCapitalized);
   console.log (isCapEvery);

   const minionNameLengths= minions.map(countMinionNameLength);

   console.log (minionNameLengths);

   const sumUp= minionNameLengths.reduce(sumUpminionNameLengths);
   console.log (sumUp);

  const isLesserThan= minionNameLengths.some(checkLesserThan);
  console.log (isLesserThan);

  const isGreaterThan= minionNameLengths.some(checkGreaterThan);
  console.log (isGreaterThan);

  const sortAsc= minionNameLengths.some(checkGreaterThan);
  console.log (isGreaterThan);

  const sortingVar= capitalizedMinions.sort(compareMinions);
  console.log (sortingVar);

  
  //console.log (actuallyCapitalizedMinions);
  

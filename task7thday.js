var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send(); 
request.onload= function(){
    var  res =JSON.parse(request.response);
    console.log(res);

    //1. Get all the countries from the Asia continent /region using the Filter function

    var region= res.filter((ele)=>ele.region=="Asia").map((ele)=>ele.name)
    console.log(region)

    //2.Get all the countries with a population of less than 2 lakhs using Filter function

          var pop= res.filter((ele)=>ele.population<200000).map((ele)=>ele.name)
          console.log(pop);

    //3.Print the total population of countries using reduce function
          var sum= 0;
         var arr= res.reduce((acc,cv)=> acc + cv.population,sum);
         console.log(arr)
    //4.Print the following details name, capital, flag using forEach function

    var cap= res.forEach(element => console.log(element.name,element.capital,element.flag));
     console.log(cap)   
    
    // 5.Print the country which uses US Dollars as currency.

     for( let i=0;i<res.length;i++){
         if(res[i].currencies[0].code=="USD")
         {
             console.log("name:",res[i].name,"==>",res[i].currencies[0].code)
         }
     }

}
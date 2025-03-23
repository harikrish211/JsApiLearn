function checkCar() {

    return new Promise((resolve, reject) => {
   
     setTimeout(() => {
   
      const carReady = true;
   
      if (carReady) {
   
       resolve("Car is ready");
   
      } else {
   
       reject("Error: Car needs maintenance");
   
      }
   
     }, 2000);
   
    });
   
   }
   
   
   
   function packForPicnic() {
   
    return new Promise((resolve, reject) => {
   
     setTimeout(() => {
   
      const itemsPacked = true;
   
      if (itemsPacked) {
   
       resolve("Packed everything for picnic");
   
      } else {
   
       reject("Error: Not have some essentials");
   
      }
   
     }, 1000);
   
    });
   
   }
   
   
   
   async function check()
   {
    try{
        console.log(a1);
        var a1=await checkCar();
        const a2=await packForPicnic();
        
        console.log(a2);
        console.log(a1);
        

    }
    catch(error)
    {

        console.log(error);
    }


   }


   check();
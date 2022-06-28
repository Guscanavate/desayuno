

let cafe = 0;

let cafeMas = document.getElementById('cafeMas');

cafeMas.onclick = ()=>{
    cafe++;}

cafeMas.onclick = ()=>{
     swal({
      title: "Genial!",
      text: "Qué rico café!",
      icon: "success",
      button: "Seguir!",
    })
  };

let cafeMenos = document.getElementById('cafeMenos');

cafeMenos.onclick =()=>{
   if (cafe == 0)
   swal({
    title: "Hey!",
    text: "No tenés café en tu pedido!",
    icon: "warning",
    button: "Volver!",
  });
    else (cafe--)}

let te = 0;

let teMas = document.getElementById('teMas');
    
teMas.onclick = ()=>{
        te++;}
    
teMas.onclick = ()=>{
         swal({
          title: "Genial!",
          text: "Qué rico Té!",
          icon: "success",
          button: "Seguir!",
        })
      };
    
let teMenos = document.getElementById('teMenos');
teMenos.onclick =()=>{
       if (te == 0)
       swal({
        title: "Hey!",
        text: "No tenés Té en tu pedido!",
        icon: "warning",
        button: "Volver!",
      });
        else (Te--)};

        
let cortado = 0;

let cortadoMas = document.getElementById('cortadoMas');

cortadoMas.onclick = ()=>{
    cortado++;}

cortadoMas.onclick = ()=>{
     swal({
      title: "Genial!",
      text: "Qué rico café!",
      icon: "success",
      button: "Seguir!",
    })
  };

let cortadoMenos = document.getElementById('cortadoMenos');

cortadoMenos.onclick =()=>{
   if (cortado == 0)
   swal({
    title: "Hey!",
    text: "No tenés cortado en tu pedido!",
    icon: "warning",
    button: "Volver!",
  });
    else (cortado--)};

let mate = 0;

let mateMas = document.getElementById('mateMas');

mateMas.onclick = ()=>{
    mate++;}

mateMas.onclick = ()=>{
     swal({
      title: "Genial!",
      text: "Qué rico mate cocido!",
      icon: "success",
      button: "Seguir!",
    })
  };

let mateMenos = document.getElementById('mateMenos');

mateMenos.onclick =()=>{
   if (mate == 0)
   swal({
    title: "Hey!",
    text: "No tenés mate cocido en tu pedido!",
    icon: "warning",
    button: "Volver!",
  });
    else (mate--)};

let naranja = 0;

let naranjaMas = document.getElementById('naranjaMas');

naranjaMas.onclick = ()=>{
    cafe++;}

naranjaMas.onclick = ()=>{
     swal({
      title: "Genial!",
      text: "Qué rico juguito!",
      icon: "success",
      button: "Seguir!",
    })
  };

let naranjaMenos = document.getElementById('naranjaMenos');

naranjaMenos.onclick =()=>{
   if (cafe == 0)
   swal({
    title: "Hey!",
    text: "No tenés Jugo en tu pedido!",
    icon: "warning",
    button: "Volver!",
  });
    else (naranja--)};


let limon = 0;

let limonMas = document.getElementById('limonMas');

limonMas.onclick = ()=>{
    limon++;}

limonMas.onclick = ()=>{
     swal({
      title: "Genial!",
      text: "Qué rico juguito!",
      icon: "success",
      button: "Seguir!",
    })
  };

let limonMenos = document.getElementById('limonMenos');

limonMenos.onclick =()=>{
   if (limon == 0)
   swal({
    title: "Hey!",
    text: "No tenés jugo de limón en tu pedido!",
    icon: "warning",
    button: "Volver!",
  });
else (limon--)};

let pomelo = 0;

let pomeloMas = document.getElementById('pomeloMas');

pomeloMas.onclick = ()=>{
    pomelo++;}

pomeloMas.onclick = ()=>{
     swal({
      title: "Genial!",
      text: "Qué rico juguito!",
      icon: "success",
      button: "Seguir!",
    })
  };

let pomeloMenos = document.getElementById('pomeloMenos');

pomeloMenos.onclick =()=>{
   if (pomelo == 0)
   swal({
    title: "Hey!",
    text: "No tenés pomelo en tu pedido!",
    icon: "warning",
    button: "Volver!",
  });
    else (pomelo--)};

let divCafeTotal = document.getElementById ('cafeTotal');
divCafeTotal.innerHTML = [cafe];

let divTeTotal = document.getElementById ('teTotal');
divTeTotal.innerHTML = [te];

let divCortadoTotal = document.getElementById ('cortadoTotal');
divCortadoTotal.innerHTML = [cortado];

let divMateTotal = document.getElementById ('mateTotal');
divMateTotal.innerHTML = [mate];

let divNaranjaTotal = document.getElementById ('naranjaTotal');
divNarajaTotal.innerHTML = [naranja];

let divLimonTotal = document.getElementById ('limonTotal');
divLimonTotal.innerHTML = [limon];

let divPomeloTotal = document.getElementById ('pomeloTotal');
divPomeloTotal.innerHTML = [pomelo];

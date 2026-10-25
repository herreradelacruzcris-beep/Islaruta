const excursions={
  salto:{name:'Salto Azul',destination:'Hato Mayor, RD',duration:'1 dia · 7 h',price:'RD$ 2,450'},
  saona:{name:'Saona Esencial',destination:'Bayahibe, RD',duration:'1 dia · 9 h',price:'RD$ 3,200'},
  'tres-ojos':{name:'Los Tres Ojos',destination:'Santo Domingo, RD',duration:'Medio dia · 4 h',price:'RD$ 1,350'}
};

const title=document.querySelector('#summary-title');
const text=document.querySelector('#summary-text');
const clear=document.querySelector('#clear');

function selectExcursion(id){
  const item=excursions[id];
  title.textContent=item.name;
  text.textContent=`${item.destination} · ${item.duration} · ${item.price} por persona`;
  document.querySelector('#resumen').scrollIntoView({behavior:'smooth'});
}

document.querySelectorAll('.select').forEach(button=>{
  button.addEventListener('click',()=>selectExcursion(button.dataset.id));
});

clear.addEventListener('click',()=>{
  title.textContent='Todavia no has seleccionado una excursion';
  text.textContent='Pulsa “Me interesa” para ver aqui tu resumen.';
});

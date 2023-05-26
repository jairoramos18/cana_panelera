let posts = [];

// Obtener elementos del DOM
const postsContainer = document.getElementById('posts-container');
const postForm = document.getElementById('post-form');
const postContent = document.getElementById('postContent');
const contentError = document.getElementById('contentError');

// Función para mostrar las publicaciones
function displayPosts() {
  // Limpiar el contenedor de publicaciones
  postsContainer.innerHTML = '';

  // Recorrer las publicaciones y crear los elementos correspondientes
  posts.forEach((post, index) => {
    const postElement = document.createElement('div');
    postElement.className = 'flex';
    postElement.innerHTML = `
      <div class="flex items-center">
        <div class="w-8 h-8">
          <img class="w-full h-full rounded-full object-cover" src="/parcial-ib-i-sem-2023-jairoramos18/caña1.jpg" alt="Avatar">
        </div>
        <div class="ml-3">
          <p class="text-gray-700 font-semibold">Nombre del Agricultor</p>
          <p class="text-gray-500">${post}</p>
          <div class="mt-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onclick="editPost(${index})">Editar</button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onclick="deletePost(${index})">Eliminar</button>
          </div>
        </div>
      </div>
    `;

    postsContainer.appendChild(postElement);
  });
}

   // Función para validar el formulario de publicación
   function validateForm() {
     let isValid = true;

     if (postContent.value.trim() === '') {
       contentError.classList.remove('hidden');
       isValid = false;
     } else {
       contentError.classList.add('hidden');
     }

     return isValid;
   }

   // Función para agregar una nueva publicación
   function addPost(content) {
     posts.push(content);
     displayPosts();
   }

   // Función para editar una publicación
   function editPost(index) {
     const newContent = prompt('Ingrese el nuevo contenido:');
     if (newContent !== null) {
       posts[index] = newContent;
       displayPosts();
     }
   }

   // Función para eliminar una publicación
   function deletePost(index) {
     posts.splice(index, 1);
     displayPosts();
   }

   // Manejador de eventos para enviar el formulario de publicación
   postForm.addEventListener('submit', function (event) {
     event.preventDefault();
     if (validateForm()) {
       const content = postContent.value.trim();
       addPost(content);
       postContent.value = '';
       showNotification('Publicación creada exitosamente.');
     }
   });

   // Función para mostrar notificaciones
   function showNotification(message) {
     const notification = document.createElement('div');
     notification.className = 'bg-green-500 text-white font-bold py-2 px-4 rounded';
     notification.textContent = message;
     document.body.appendChild(notification);
     setTimeout(() => {
       notification.remove();
     }, 3000);
   }

   // Mostrar las publicaciones iniciales
   displayPosts();

   var udateTime = function() {
    let currentDate = new Date(),
        hours = currentDate.getHours(),
        minutes = currentDate.getMinutes(), 
        seconds = currentDate.getSeconds(),
        weekDay = currentDate.getDay(), 
        day = currentDate.getDay(), 
        month = currentDate.getMonth(), 
        year = currentDate.getFullYear();
 
    const weekDays = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sabado'
    ];
 
    document.getElementById('weekDay').textContent = weekDays[weekDay];
    document.getElementById('day').textContent = day;
 
    const months = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];
 
    document.getElementById('month').textContent = months[month];
    document.getElementById('year').textContent = year;
 
    document.getElementById('hours').textContent = hours;
 
    if (minutes < 10) {
        minutes = "0" + minutes
    }
 
    if (seconds < 10) {
        seconds = "0" + seconds
    }
 
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
};
 
udateTime();
 
setInterval(udateTime, 1000);

document.getElementById('toggleBtn').addEventListener('click', function() {
  var introContent = document.getElementById('introContent');
  var toggleBtn = document.getElementById('toggleBtn');
  
  if (introContent.style.display === 'none') {
    introContent.style.display = 'block';
    toggleBtn.textContent = 'Ocultar';
  } else {
    introContent.style.display = 'none';
    toggleBtn.textContent = 'Leer más';
  }
});


const icono = document.querySelector('#icono');
const video = document.querySelector('video');

icono.addEventListener('click',()=>{
    video.play();
    video.controls = false;
})

function toggleSubMenu() {
  const subMenu = this.nextElementSibling;
  subMenu.classList.toggle("hidden");
}

// Obtener todos los botones con clase 'group' (que contienen un submenú)
const menuButtons = document.querySelectorAll(".group > button");

// Agregar el evento 'click' a cada botón para mostrar/ocultar el submenú correspondiente
menuButtons.forEach((button) => {
  button.addEventListener("click", toggleSubMenu);
});

(function(){
  const listElements = document.querySelectorAll('.menu__item--show');
  const list = document.querySelector('.menu__links');
  const menu = document.querySelector('.menu__hamburguer');

  const addClick = ()=>{
      listElements.forEach(element =>{
          element.addEventListener('click', ()=>{

              
              let subMenu = element.children[1];
              let height = 0;
              element.classList.toggle('menu__item--active');


              if(subMenu.clientHeight === 0){
                  height = subMenu.scrollHeight;
              }

              subMenu.style.height = `${height}px`;

          });
      });
  }

  const deleteStyleHeight = ()=>{
      listElements.forEach(element=>{

          if(element.children[1].getAttribute('style')){
              element.children[1].removeAttribute('style');
              element.classList.remove('menu__item--active');
          }

      });
  }


  window.addEventListener('resize', ()=>{
      if(window.innerWidth > 800){
          deleteStyleHeight();
          if(list.classList.contains('menu__links--show'))
              list.classList.remove('menu__links--show');

      }else{
          addClick();
      }
  });

  if(window.innerWidth <= 800){
      addClick();
  }

  menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));



})();

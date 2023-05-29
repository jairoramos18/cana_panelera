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
        <div class="w-2 h-2">
          <img class="w-2 h-2 rounded-full object-cover" src="/cana_panelera/foto panela.jpg" alt="Avatar">
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
  

   var updateTime = function() {
    let currentDate = new Date(),
        hours = currentDate.getHours(),
        minutes = currentDate.getMinutes(), 
        seconds = currentDate.getSeconds(),
        weekDay = currentDate.getDay(), 
        day = currentDate.getDate(), // Corregido: Obtener el día del mes
        month = currentDate.getMonth(), 
        year = currentDate.getFullYear();
 
    const weekDays = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado'
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
        minutes = "0" + minutes;
    }
 
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
 
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
};

updateTime();

setInterval(updateTime, 1000);



function toggleContent() {
  var extraContent = document.getElementById("extraContent");
  var extraContent2 = document.getElementById("extraContent2");
  var toggleBtn = document.getElementById("toggleBtn");

  if (extraContent.style.display === "none") {
    extraContent.style.display = "block";
    extraContent2.style.display = "block";
    toggleBtn.innerText = "Leer menos";
  } else {
    extraContent.style.display = "none";
    extraContent2.style.display = "none";
    toggleBtn.innerText = "Leer más";
  }
}


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

function scrollToElement(element) {
  const target = document.querySelector(element);
  target.scrollIntoView({ behavior: 'smooth' });
}


const menuLogin = document.getElementById("menu-login");
const menuRegistration = document.getElementById("menu-registration");
const loginForm = document.getElementById("login-form");
const registrationForm = document.getElementById("registration-form");
const loginCloseButton = document.getElementById("login-close-button");
const registrationCloseButton = document.getElementById("registration-close-button");
const loginFormValidation = document.getElementById("login-form-validation");
const registrationFormValidation = document.getElementById("registration-form-validation");
const loginError = document.getElementById("login-error");
const registrationError = document.getElementById("registration-error");

menuLogin.addEventListener("click", function(e) {
  e.preventDefault();
  showForm(loginForm);
});

menuRegistration.addEventListener("click", function(e) {
  e.preventDefault();
  showForm(registrationForm);
});

loginCloseButton.addEventListener("click", function() {
  hideForm(loginForm);
});

registrationCloseButton.addEventListener("click", function() {
  hideForm(registrationForm);
});

loginFormValidation.addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (username.trim() === "") {
    showError(loginError, "Por favor, introduce tu nombre de usuario");
  } else {
    hideError(loginError);
  }

  if (password.trim() === "") {
    showError(loginError, "Por favor, introduce tu contraseña");
  } else {
    hideError(loginError);
  }

  // Aquí puedes realizar la lógica adicional para el inicio de sesión
});

registrationFormValidation.addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("registration-username").value;
  const password = document.getElementById("registration-password").value;

  if (username.trim() === "") {
    showError(registrationError, "Por favor, introduce tu nombre de usuario");
  } else {
    hideError(registrationError);
  }

  if (password.trim() === "") {
    showError(registrationError, "Por favor, introduce tu contraseña");
  } else {
    hideError(registrationError);
  }

  // Aquí puedes realizar la lógica adicional para el registro
});

function showForm(form) {
  form.classList.add("active");
}

function hideForm(form) {
  form.classList.remove("active");
  hideError(loginError);
  hideError(registrationError);
}

function showError(element, message) {
  element.innerText = message;
  element.style.display = "block";
}

function hideError(element) {
  element.style.display = "none";
}

window.addEventListener('scroll', function() {
  var scrollButton = document.querySelector('.scroll-to-top');
  if (window.scrollY > 300) {
    scrollButton.classList.add('show');
  } else {
    scrollButton.classList.remove('show');
  }
});

document.querySelector('.scroll-to-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', function() {
  var scrollButton = document.querySelector('.scroll-down');
  if (window.scrollY > 300) {
    scrollButton.classList.add('show');
  } else {
    scrollButton.classList.remove('show');
  }
});

document.querySelector('.scroll-down').addEventListener('click', function() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
});

function scrollToSection() {
  const targetSection = document.getElementById("titulo-logo");
  targetSection.scrollIntoView({ behavior: 'smooth' });
}
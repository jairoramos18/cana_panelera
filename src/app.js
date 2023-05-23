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

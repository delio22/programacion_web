// ==========================================
// Tutorial: JavaScript para Aprender React
// ==========================================

// 1. Módulos: Importando funciones desde otros archivos
import subtract, { add, multiply } from './add.js';

console.log('Suma con módulo importado:', add(10, 20));
console.log('Multiplicación:', multiply(5, 4));
console.log('Resta (export default):', subtract(10, 4));

// 2. Arrow Functions con Retorno Implícito
const showText = () => 'Hola Mundo desde Arrow Function';
const addNumbers = (x = 0, y = 0) => x + y;
console.log(showText());
console.log(addNumbers(10, 20));

// 3. Objetos y Shorthand Syntax
const name = 'Laptop Gamer';
const price = 3000;

const product = {
  name,
  price
};
console.log('Objeto producto:', product);

// 4. Destructuring de Objetos
const user = {
  username: 'Fazt',
  age: 30
};

function printUser({ username, age }) {
  return `El usuario ${username} tiene ${age} años`;
}
console.log(printUser(user));

// 5. Manipulación del DOM y Operador Ternario
const isAuthorized = true;
const button = document.createElement('button');
button.innerText = 'Click Me';
button.style.cssText = `background: ${isAuthorized ? 'green' : 'red'}; color: white; padding: 10px;`;

button.addEventListener('click', () => {
  if (isAuthorized) {
    console.log('Acceso autorizado con éxito');
  } else {
    console.log('Acceso denegado');
  }
});
document.body.appendChild(button);

// 6. Métodos de Arreglos (Inmutabilidad)
const names = ['Fazt', 'Marcos', 'Joe', 'Ryan'];

// .map()
const mappedNames = names.map(name => `Hola ${name}`);
console.log('Mapped:', mappedNames);

// .filter()
const filteredNames = names.filter(name => name !== 'Joe');
console.log('Filtered:', filteredNames);

// .find()
const foundName = names.find(name => name === 'Marcos');
console.log('Found:', foundName);

// 7. Operador Spread (...)
const frontendTools = ['HTML', 'CSS', 'JavaScript'];
const fullstackTools = [...frontendTools, 'React', 'NodeJS'];
console.log('Spread result:', fullstackTools);

// 8. Optional Chaining (?.)
const student = {
  name: 'Alex'
};
console.log('Safe access:', student?.location?.city);

// 9. Asincronía: Fetch y Async/Await con JSONPlaceholder
const ul = document.getElementById('posts-list');

async function loadPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error(`Status code: ${response.status}`);
    const posts = await response.json();

    posts.slice(0, 10).forEach(post => {
      const li = document.createElement('li');
      li.innerText = `${post.id} - ${post.title}`;
      if (ul) ul.appendChild(li);
    });
  } catch (error) {
    console.error('No se pudieron cargar los posts:', error.message);
  }
}

loadPosts();


// SAMPLE

const user = { name: "Alice", age: 25 };
let mylist = ['hello', 'buy'];
const userString = JSON.stringify(user);

const jsonString = '[ "apple", "banana", "cherry" ]';
const fruits = JSON.parse(jsonString);
console.log(fruits[1]);  // Output: "banana"

// Save data

localStorage.setItem("myList", '[ "apple", "banana", "cherry" ]');


// // Read data
let name = localStorage.getItem("name"); // "Alice"
console.log(name);
// // Remove specific item
// localStorage.removeItem("name");

// // Clear all local storage
// localStorage.clear();



// let myboxes = document.querySelectorAll('.mybox')
// myboxes.forEach(box,function name(params) {
//   box.style.color = 'red';
// })

// // Save preference
// localStorage.setItem("theme", "dark");

// // Retrieve preference
// let theme = localStorage.getItem("theme"); // "dark"

// // Apply theme
// if (theme === "dark") {
//   document.body.classList.add("dark");
// }

  let something = new Date()

  let mytime = something.toLocaleTimeString()
  
  console.log(mytime)

// ==== CLOCK ====
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock(); // Initial call

// ==== TO-DO LIST ====
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

function loadTodos() {
  const todosString = localStorage.getItem('todos');
  const todos =  JSON.parse(todosString) || [];

  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;
    li.onclick = function () {
      removeTodo(index);
    };    
    todoList.appendChild(li);
  });
}

function addTodo() {
  const value = todoInput.value.trim();
  if (value !== '') {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(value);
    localStorage.setItem('todos', JSON.stringify(todos));
    todoInput.value = '';
    loadTodos();
  }
}

function removeTodo(index) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  loadTodos();
}

addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') addTodo();
});
loadTodos();

// ==== THEME TOGGLE ====
const themeToggle = document.getElementById('themeToggle');
function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
themeToggle.addEventListener('click', toggleTheme);

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// ==== FORM VALIDATION ====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  if (!name || !email) {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.style.color = 'red';
  } else if (!validateEmail(email)) {
    formMessage.textContent = 'Please enter a valid email.';
    formMessage.style.color = 'red';
  } else {
    formMessage.textContent = `Thanks for contacting us, ${name}!`;
    formMessage.style.color = 'green';
    contactForm.reset();
  }
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ==== RANDOM QUOTE FETCH ====
const loadQuoteBtn = document.getElementById('loadQuote');
const quoteBlock = document.getElementById('quote');

loadQuoteBtn.addEventListener('click', async () => {
  quoteBlock.textContent = 'Loading...';
  try {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    quoteBlock.textContent = `"${data.content}" — ${data.author}`;
  } catch (err) {
    quoteBlock.textContent = 'Failed to fetch quote.';
  }
});

// ==== MODAL POPUP ====
const modal = document.getElementById('myModal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

openModal.onclick = () => {
  modal.style.display = 'block';
};

closeModal.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};


// alert('hello')
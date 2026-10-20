    // Initialize Lucide icons and default UI
    document.addEventListener('DOMContentLoaded', () => {
      try {
        if (window.lucide && typeof lucide.createIcons === 'function') {
          lucide.createIcons();
        }
      } catch (err) {
        console.warn('Lucide icon initial load error:', err);
      }
      initDomInteractiveButton();
    });

    // 1. Funciones & Higher Order Functions Demo
    function testFunctionsDemo() {
      const x = parseFloat(document.getElementById('inputNumX')?.value) || 0;
      const y = parseFloat(document.getElementById('inputNumY')?.value) || 0;
      const name = document.getElementById('inputGreetName')?.value || 'Amigo';

      // Fazt Example: Arrow function con retorno implícito
      const add = (a = 0, b = 0) => a + b;
      
      // Fazt Example: Higher order function
      function buildGreeting(prefix) {
        return (person) => `${prefix}, ${person}! Bienvenido a React.`;
      }

      const sumResult = add(x, y);
      const greeter = buildGreeting('¡Hola');
      const greetingMessage = greeter(name);

      const consoleBox = document.getElementById('funcConsole');
      if (consoleBox) {
        consoleBox.innerHTML = `
          <div class="space-y-1">
            <div><span class="text-gray-400">// add(${x}, ${y}):</span> <strong class="text-white">${sumResult}</strong></div>
            <div><span class="text-gray-400">// buildGreeting('¡Hola')('${escapeHtml(name)}'):</span> <span class="text-emerald-300">"${escapeHtml(greetingMessage)}"</span></div>
          </div>
        `;
      }
    }

    // 2. Destructuring Demo
    function testDestructuringDemo() {
      const user = {
        name: document.getElementById('destructName')?.value || 'Usuario',
        age: document.getElementById('destructAge')?.value || 25,
        role: document.getElementById('destructRole')?.value || 'Developer',
        location: { country: 'Latinoamérica' }
      };

      // Exact Destructuring pattern taught by Fazt:
      function renderUserCard({ name, age, role }) {
        return `
          <div class="flex items-center justify-between p-2.5 bg-[#202020] rounded-lg border border-faztBorder">
            <div>
              <h4 class="font-bold text-white text-sm">${escapeHtml(name)}</h4>
              <p class="text-xs text-yellow-400">${escapeHtml(role)}</p>
            </div>
            <span class="text-xs font-mono bg-faztDark px-2 py-1 rounded text-gray-300 border border-faztBorder">${escapeHtml(String(age))} años</span>
          </div>
        `;
      }

      const out = document.getElementById('destructOutput');
      if (out) {
        out.innerHTML = renderUserCard(user);
      }
    }

    // 3. DOM & Events Demo (Fazt dynamic button)
    let clickCount = 0;
    function initDomInteractiveButton() {
      updateDynamicButton();
    }

    function updateDynamicButton() {
      const container = document.getElementById('domButtonSlot');
      const toggle = document.getElementById('authToggle');
      const label = document.getElementById('authLabel');
      if (!container || !toggle || !label) return;

      const isAuthorized = toggle.checked;

      if (isAuthorized) {
        label.innerText = 'Autorizado (True)';
        label.className = 'ml-2 text-xs font-mono text-emerald-400';
      } else {
        label.innerText = 'No Autorizado (False)';
        label.className = 'ml-2 text-xs font-mono text-rose-400';
      }

      // Re-create Fazt button programmatically
      container.innerHTML = '';
      const button = document.createElement('button');
      button.innerText = 'Haz Clic Aquí';
      button.className = `px-5 py-2.5 rounded-xl font-semibold text-xs transition duration-200 shadow-md ${
        isAuthorized 
          ? 'bg-emerald-500 hover:bg-emerald-400 text-black active:scale-95' 
          : 'bg-rose-600 hover:bg-rose-500 text-white active:scale-95'
      }`;

      button.style.letterSpacing = '0.05em';

      button.addEventListener('click', () => {
        clickCount++;
        const feedback = document.getElementById('domEventOutput');
        if (feedback) {
          if (isAuthorized) {
            feedback.innerHTML = `<span class="text-emerald-400">✓ Acción aprobada: Acceso concedido (#${clickCount}) con Template String dinámico.</span>`;
          } else {
            feedback.innerHTML = `<span class="text-rose-400">✗ Advertencia: No estás autorizado (#${clickCount}). Bloqueado por operador ternario.</span>`;
          }
        }
      });

      container.appendChild(button);
    }

    // 4. Métodos de Arreglos Inmutables
    const originalNames = ['Fazt', 'Marcos', 'Joe', 'Ryan'];

    function runArrayOp(type) {
      const explanation = document.getElementById('arrayExplanation');
      const output = document.getElementById('arrayOutput');
      if (!explanation || !output) return;

      if (type === 'map') {
        const result = originalNames.map(name => `Prof. ${name}`);
        explanation.innerHTML = '<span class="text-emerald-400 font-semibold">.map():</span> Transforma cada elemento retornando un NUEVO arreglo sin modificar el original.';
        output.innerText = JSON.stringify(result, null, 2);
      } else if (type === 'filter') {
        const result = originalNames.filter(name => name !== 'Joe');
        explanation.innerHTML = '<span class="text-yellow-400 font-semibold">.filter():</span> Conserva sólo los elementos que cumplen la condición (ej. filtra y descarta a "Joe").';
        output.innerText = JSON.stringify(result, null, 2);
      } else if (type === 'find') {
        const result = originalNames.find(name => name.startsWith('M'));
        explanation.innerHTML = '<span class="text-blue-400 font-semibold">.find():</span> Retorna el primer elemento que coincide con la condición (primer nombre con "M").';
        output.innerText = `Resultado: "${result}"`;
      } else if (type === 'spread') {
        const newColleagues = ['Ada', 'Turing'];
        const result = [...originalNames, ...newColleagues];
        explanation.innerHTML = '<span class="text-pink-400 font-semibold">[...Spread]:</span> Clona y combina arreglos sin mutar los originales, vital en el estado de React.';
        output.innerText = JSON.stringify(result, null, 2);
      }
    }

    // 5. Optional Chaining (?.) Demo
    function testOptionalChaining(hasAddress) {
      const person = hasAddress ? {
        name: 'Fazt',
        location: {
          city: 'Lima',
          country: 'Perú'
        }
      } : {
        name: 'Desconocido'
      };

      const badge = document.getElementById('optChainBadge');
      const out = document.getElementById('optChainOutput');
      if (!badge || !out) return;

      // Safe access using Optional Chaining
      const city = person?.location?.city;

      if (city) {
        badge.innerText = 'Propiedad Encontrada';
        badge.className = 'text-xs text-emerald-400';
        out.innerHTML = `person?.location?.city → <strong class="text-emerald-400 ml-1">"${escapeHtml(city)}"</strong> (El objeto contenía la dirección).`;
      } else {
        badge.innerText = 'Safe Undefined';
        badge.className = 'text-xs text-pink-400';
        out.innerHTML = `person?.location?.city → <strong class="text-pink-400 ml-1">undefined</strong> (Sin error de ejecución, la app sigue funcionando).`;
      }
    }

    // 6. JSONPlaceholder Live Fetch & Async/Await Demo
    let cachedPosts = [];

    const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function setLoadingButtons(disabled) {
      ['btnFetchAsync', 'btnFetchPromise'].forEach(id => {
        const btn = document.getElementById(id);
        if (!btn) return;
        btn.disabled = disabled;
        btn.classList.toggle('opacity-50', disabled);
        btn.classList.toggle('cursor-not-allowed', disabled);
      });
    }

    // Versión con async/await
    async function fetchPostsAsync() {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Status code: ' + response.status);
      const data = await response.json();
      return data.slice(0, 15);
    }

    // Versión con .then() (sin envolver en "new Promise": fetch ya devuelve una)
    function fetchPostsPromise() {
      return fetch(API_URL)
        .then(res => {
          if (!res.ok) throw new Error('Status code: ' + res.status);
          return res.json();
        })
        .then(json => json.slice(0, 15));
    }

    async function loadPosts(mode) {
      const container = document.getElementById('postsContainer');
      if (!container) return;

      container.innerHTML = `
        <div class="py-12 flex flex-col items-center justify-center text-gray-400">
          <svg class="animate-spin h-6 w-6 text-reactBlue mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          <p class="text-xs font-mono">Consumiendo jsonplaceholder.typicode.com/posts con ${mode === 'async' ? 'Async/Await' : '.then()'}...</p>
        </div>
      `;

      const filterInput = document.getElementById('postFilterInput');
      if (filterInput) filterInput.value = '';
      setLoadingButtons(true);

      try {
        cachedPosts = mode === 'async' ? await fetchPostsAsync() : await fetchPostsPromise();
        renderPostsList(cachedPosts);
      } catch (err) {
        container.innerHTML = `
          <div class="p-4 bg-rose-900/30 border border-rose-700 text-rose-300 rounded-xl text-xs">
            Hubo un error al realizar la petición: ${escapeHtml(err.message)}
          </div>
        `;
      } finally {
        setLoadingButtons(false);
      }
    }

    function renderPostsList(posts) {
      const container = document.getElementById('postsContainer');
      const counter = document.getElementById('postsCounterBadge');
      if (counter) counter.innerText = `${posts.length} posts`;
      if (!container) return;

      if (posts.length === 0) {
        container.innerHTML = `
          <div class="text-center py-8 text-gray-500 text-xs">
            No se encontraron posts que coincidan con la búsqueda.
          </div>
        `;
        return;
      }

      container.innerHTML = posts.map(post => `
        <div class="p-3.5 bg-[#1b1b1b] hover:bg-[#222222] border border-faztBorder rounded-xl transition duration-150 flex gap-3 items-start">
          <span class="w-7 h-7 rounded-lg bg-reactBlue/10 text-reactBlue border border-reactBlue/20 flex items-center justify-center font-mono text-xs font-bold shrink-0">
            ${escapeHtml(String(post.id))}
          </span>
          <div class="space-y-1">
            <h4 class="text-xs sm:text-sm font-semibold text-white capitalize leading-snug">${escapeHtml(post.title)}</h4>
            <p class="text-xs text-gray-400 line-clamp-2 leading-relaxed">${escapeHtml(post.body)}</p>
          </div>
        </div>
      `).join('');
    }

    function filterLoadedPosts() {
      if (cachedPosts.length === 0) return;
      const termInput = document.getElementById('postFilterInput');
      const term = (termInput ? termInput.value : '').toLowerCase();
      const filtered = cachedPosts.filter(p => 
        (p.title && p.title.toLowerCase().includes(term)) || 
        (p.body && p.body.toLowerCase().includes(term))
      );
      renderPostsList(filtered);
    }

    function clearPosts() {
      cachedPosts = [];
      const container = document.getElementById('postsContainer');
      const counter = document.getElementById('postsCounterBadge');
      const filterInput = document.getElementById('postFilterInput');

      if (counter) counter.innerText = '0 posts';
      if (filterInput) filterInput.value = '';
      if (container) {
        container.innerHTML = `
          <div class="text-center py-12 text-gray-500 border border-dashed border-faztBorder rounded-xl">
            <i data-lucide="inbox" class="w-8 h-8 mx-auto mb-2 opacity-40"></i>
            <p class="text-xs">No hay posts cargados aún.</p>
            <p class="text-[11px] text-gray-500 mt-1">Presiona "Cargar con Async/Await" para consultar la API en vivo.</p>
          </div>
        `;
      }
      if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
      }
    }

    function escapeHtml(string) {
      return String(string)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

// src/index.js
function src_default(Alpine) {
  document.addEventListener("alpine:init", () => {
    let body = document.querySelector("body");
    body.insertAdjacentHTML("afterbegin", `<div
        style="display: none;" 
        class="fixed inset-0 z-50 grid w-screen h-screen max-h-dvh gap-2 px-4 bg-slate-200/70 dark:bg-slate-800/70 backdrop-blur-xl sm:px-12 place-items-center transform transition-all alpine-lightbox" 
        aria-labelledby="modal-title" 
        role="dialog" 
        aria-modal="true" 
        x-data 
        x-bind:class="$store.lightbox.show ? '' : 'hidden'" 
        x-show="$store.lightbox.show"
        x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="transform opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        x-transition:enter-end="transform opacity-100 translate-y-0 sm:scale-100"
        x-transition:leave="transition ease-in duration-200"
        x-transition:leave-start="transform opacity-100 translate-y-0 sm:scale-100"
        x-transition:leave-end="transform opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="block box-border max-w-full max-h-svh ">
            <img x-on:click="$store.lightbox.toggle()" @click.away="$store.lightbox.show = false" class="block sm:p-12 box-border object-contain w-auto h-auto max-w-full max-h-svh alpine-lightbox-image" x-bind:src="$store.lightbox.src"
          x-transition:enter="transition ease-out duration-300 delay-150"
          x-transition:enter-start="opacity-0"
          x-transition:enter-end="opacity-100"
          x-transition:leave="transition ease-in duration-300"
          x-transition:leave-start="opacity-100"
          x-transition:leave-end="opacity-0" /></div>
          <div class="hidden sm:block absolute top-4 right-4">
              <button x-on:click="$store.lightbox.toggle()" type="button" class="text-slate-700 hover:text-slate-900 dark:text-slate-300 hover:dark:text-slate-100 focus:outline-none focus:ring-none">
                  <span class="sr-only">Close</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </button>
          </div>
  </div>
        `);
    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        Alpine.store("lightbox").show = false;
      }
    });
    Alpine.store("lightbox", {
      show: false,
      src: null,
      toggle() {
        this.show = !this.show;
      }
    });
    Alpine.directive("lightbox", (el, {expression}) => {
      el.addEventListener("click", () => {
        Alpine.store("lightbox").toggle();
        Alpine.store("lightbox").src = expression;
      });
    });
  });
}

// builds/module.js
var module_default = src_default;
export {
  module_default as default
};

let interval
let defaultColor

const mousover = event => {
    event.target.style.color = 'teal'
}

const mousout = (event) => {
    event.target.style.color = defaultColor;
};

export default {
  mounted(el, binding) {
        console.log("el mounted", el, "binding mounted", binding);
        defaultColor = binding.value;
        el.style[binding.arg] = binding.value;
        if (binding.modifiers.blink) {
          let flag = true;
          interval = setInterval(() => {
            el.style.color = flag ? "#FFF" : binding.value;
            flag = !flag;
          }, 1000);
        }
        if (binding.modifiers.hover) {
            el.addEventListener("mouseover", mousover);
            el.addEventListener("mouseout", mousout);
        }
  },
    updated(el, binding) {
        console.log("el updated", el, "binding updated", binding);
        el.style[binding.arg] = binding.value;
  },
    unmounted(el) {
        console.log('unmouted')
        if (interval) {
            clearImmediate(interval)            
        }

        el.removeEventListener("mouseover", mousover);
        el.removeEventListener("mouseout", mousout);
  },
};
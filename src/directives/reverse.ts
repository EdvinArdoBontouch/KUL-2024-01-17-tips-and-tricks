import { Directive } from "vue";

/*
  v-reverse reverses the DOM order of the children to the element it is applied to.
  If it reversed the order in mounted or updated it will revert the children to the
  original order in beforeUpdate, to prevent inconsistent behaviour when adding or
  removing children to the element.
*/

const reverseChildren = (el: Element) => {
  const childCount = el.children.length;
  for (let i = childCount - 1; i >= 0; i -= 1) {
    el.appendChild(el.children[i]);
  }
};

export const reverseDirective: Directive<Element, boolean> = {
  mounted: (el, shouldReverse) => {
    if (shouldReverse.value) {
      reverseChildren(el);
    }
  },
  beforeUpdate: (el, shouldReverse) => {
    if (shouldReverse.oldValue) {
      reverseChildren(el);
    }
  },
  updated: (el, shouldReverse) => {
    if (shouldReverse.value) {
      reverseChildren(el);
    }
  },
};

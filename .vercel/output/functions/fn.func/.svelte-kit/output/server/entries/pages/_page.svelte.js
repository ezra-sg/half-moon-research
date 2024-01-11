import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Section_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `test`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section_1, "Section1").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

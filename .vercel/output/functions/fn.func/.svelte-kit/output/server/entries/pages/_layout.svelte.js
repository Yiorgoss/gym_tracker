import { c as create_ssr_component, b as subscribe, e as each, d as add_attribute, f as escape, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { s as sourceLanguageTag, a as availableLanguageTags } from "../../chunks/runtime.js";
function route(path, lang) {
  path = withoutLanguageTag(path);
  if (lang === sourceLanguageTag)
    return path;
  return `/${lang}${path}`;
}
function withoutLanguageTag(path) {
  const [_, maybeLang, ...rest] = path.split("/");
  if (availableLanguageTags.includes(maybeLang)) {
    return `/${rest.join("/")}`;
  }
  return path;
}
const Lang_switcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="flex gap-5">${each(availableLanguageTags, (lang) => {
    return `<a${add_attribute("href", route($page.url.pathname, lang), 0)}${add_attribute("hreflang", lang, 0)}>${escape(lang)}</a>`;
  })}</div>`;
});
const I18n_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-mcb845_START -->${each(availableLanguageTags, (lang) => {
    return `<link rel="alternate"${add_attribute("hreflang", lang, 0)}${add_attribute("href", route($page.url.pathname, lang), 0)}>`;
  })}<!-- HEAD_svelte-mcb845_END -->`, ""}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lang;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  lang = $page.params.lang ?? sourceLanguageTag;
  {
    console.log({ lang });
  }
  $$unsubscribe_page();
  return `${validate_component(I18n_header, "I18nHeader").$$render($$result, {}, {}, {})} ${validate_component(Lang_switcher, "LangSwitcher").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};

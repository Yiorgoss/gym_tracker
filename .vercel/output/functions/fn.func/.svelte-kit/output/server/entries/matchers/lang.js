import { a as availableLanguageTags } from "../../chunks/runtime.js";
const match = (param) => {
  return availableLanguageTags.includes(param);
};
const isRTL = (tag) => {
  const rtl = /* @__PURE__ */ new Set(["he"]);
  return rtl.has(tag);
};
export {
  isRTL,
  match
};

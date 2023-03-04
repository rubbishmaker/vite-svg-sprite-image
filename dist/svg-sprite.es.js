import { defineComponent as c, ref as m, watch as u, openBlock as h, createElementBlock as g, normalizeStyle as f, createElementVNode as v } from "vue";
const p = ["width", "height"], w = ["href"], y = /* @__PURE__ */ c({
  __name: "IconSvg",
  props: {
    iconName: { default: "" },
    color: { default: "" },
    address: null,
    width: null,
    height: null,
    stroke: { default: "none" }
  },
  setup(t) {
    const r = t, d = new DOMParser(), s = m("");
    return u(() => r.iconName, async () => {
      const l = `icon-${r.iconName}`, n = `#${l}`;
      let o = null;
      /.svg$/.test(r.address) ? o = await import(`${r.address}?raw`) : o = r.address;
      let e = document.querySelector("#Vite_Svg_Sprite_Image_");
      if ((!e || !e.querySelector(n)) && (e || (e = document.createElement("div"), e.id = "Vite_Svg_Sprite_Image_", e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), e.setAttribute("style", "position: absolute; width: 0; height: 0;overflow: hidden"), document.body.insertBefore(e, document.body.children[0])), !e.querySelector(n))) {
        const i = d.parseFromString(o.default ? o.default : o, "image/svg+xml").querySelector("svg");
        i && (["width", "height", "x", "y"].map((a) => i.removeAttribute(a)), Array.from(i.querySelectorAll("path")).map((a) => a.removeAttribute("fill")), i.id = l, e.appendChild(i));
      }
      s.value = n;
    }, {
      immediate: !0
    }), (l, n) => (h(), g("svg", {
      "aria-hidden": "true",
      style: f({ fill: t.color, stroke: t.stroke }),
      width: t.width,
      height: t.height
    }, [
      v("use", { href: s.value }, null, 8, w)
    ], 12, p));
  }
}), b = {
  install: (t) => {
    t.component("IconSvg", y);
  }
};
export {
  b as default
};

import "./styles/reset.scss";
import "./styles/main.scss";

const createElement = (
  tag: "div" | "h1" | "span" | "p",
  props: {
    children?: Node | string;
    class?: string[];
  }
) => {
  const target = document.createElement(tag);
  props.class && target.classList.add(props.class.join(" "));
  if (props.children) {
    typeof props.children === "string"
      ? (target.textContent = props.children)
      : target.appendChild(props.children);
  }
  return target;
};

const h1 = createElement("h1", { children: "The application is working!", class: ["header"] });
const div = createElement("div", { children: h1 });

document.body.appendChild(div);

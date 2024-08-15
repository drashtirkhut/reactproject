import AccordionItem from "./AccorionItem";
import AccordionMenu from "./AccordionMenu";
import "./style.css"

export default function App() {
  return (
    <div className="App">
      <AccordionMenu>
        <AccordionItem id="menu" title="Menu 1">
          <ul>
            <li>SubMenu 1</li>
            <li>SubMenu 2</li>
            <li>SubMenu 3</li>
          </ul>
        </AccordionItem>

        <AccordionItem id="menu-2" title="Menu 2">
          <ul>
            <li>SubMenu 1</li>
            <li>SubMenu 2</li>
            <li>SubMenu 3</li>
          </ul>
        </AccordionItem>
      </AccordionMenu>
    </div>
  );
}

import { NavBtn } from "./NavBtn";

function NavigationBtns() {
  const states = [
    { name: "Помодоро", type: "WORK_TIME" },
    { name: "Перерыв", type: "BREAK_TIME" },
    { name: "Отдых", type: "RELAX_TIME" },
  ];
  return (
    <div className="navigation">
      {states.map((item) => {
        return <NavBtn key={item.name} {...item} />;
      })}
    </div>
  );
}
export { NavigationBtns };

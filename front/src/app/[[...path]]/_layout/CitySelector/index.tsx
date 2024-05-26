import { CitySVG } from "@/app/[[...path]]/_layout/CitySelector/CitySVG";

import style from "./style.module.scss";

type CitySelectorProps = {
  options: { name: string; id: string }[];
  selectedId: string | null;
  onSelectId: (id: string) => void;
};

export const CitySelector: React.FC<CitySelectorProps> = ({
  options,
  selectedId,
  onSelectId,
}) => {
  const selectedIndex = options.findIndex((c) => c.id === selectedId);

  return (
    <div className={style.container} tabIndex={-1}>
      <CitySVG />
      <span>{options[selectedIndex]?.name ?? "Выберете город"}</span>
      <div className={style.options}>
        {options.map(({ name, id }) => (
          <div key={id} className={style.option} onClick={() => onSelectId(id)}>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

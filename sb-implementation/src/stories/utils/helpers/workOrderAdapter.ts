import { IArea, IElement, ISector, IService } from "../../interfaces/workOrder";

export const fromEntityToOptionList = (
  entities: ISector[] | IArea[] | IService[] | IElement[]
) => {
  return entities.map((entity) => {
    return { label: entity.name, value: entity.id };
  });
};

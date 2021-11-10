import {
  IArea,
  IAsset,
  IElement,
  ISector,
  IService,
} from "../interfaces/workOrder";

export const listSectors = async (): Promise<ISector[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Cuarto nivel",
          code: "E01",
        },
        {
          id: 2,
          name: "Comedor",
          code: "E02",
        },
        {
          id: 3,
          name: "Biblioteca",
          code: "E03",
        },
      ]);
    }, 1000);
  });
};

export const listAreas = async (sectorId: number): Promise<IArea[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const areas = [
        {
          id: 1,
          name: "Pasillo",
          code: "P01",
          sectorId: 1,
          serviceIds: [1, 2, 3, 4],
        },
        {
          id: 2,
          name: "Aula A",
          code: "AuA",
          sectorId: 1,
          serviceIds: [1, 2, 3, 4],
        },
        {
          id: 3,
          name: "Aula B",
          code: "AuB",
          sectorId: 1,
          serviceIds: [1, 2, 3, 4],
        },
        {
          id: 4,
          name: "Kiosco",
          code: "K01",
          sectorId: 2,
          serviceIds: [1, 2, 3, 4],
        },
        {
          id: 5,
          name: "Mesas",
          code: "M01",
          sectorId: 2,
          serviceIds: [1, 2, 3, 4],
        },
        {
          id: 6,
          name: "Baño",
          code: "B01",
          sectorId: 2,
          serviceIds: [1, 2, 3, 4, 5],
        },
        {
          id: 7,
          name: "Secretaría",
          code: "S01",
          sectorId: 3,
          serviceIds: [1, 2, 3, 4],
        },
        {
          id: 8,
          name: "Libros",
          code: "L01",
          sectorId: 3,
          serviceIds: [1, 2, 3, 4],
        },
        {
          id: 9,
          name: "Baño",
          code: "B02",
          sectorId: 3,
          serviceIds: [1, 2, 3, 4, 5],
        },
      ];

      resolve(areas.filter((area: IArea) => area.sectorId == sectorId));
    }, 1000);
  });
};

export const listServices = async (): Promise<IService[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Edilicio",
          code: "Ed",
        },
        {
          id: 2,
          name: "Cerramiento",
          code: "Ce",
        },
        {
          id: 3,
          name: "Iluminación",
          code: "Ilum",
        },
        {
          id: 4,
          name: "Energía Electrica",
          code: "EE",
        },
        {
          id: 5,
          name: "Cañerías",
          code: "Cañ",
        },
      ]);
    }, 1000);
  });
};

export const listElements = async (serviceId: number): Promise<IElement[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const elements = [
        {
          id: 1,
          name: "General",
          code: "Gral",
          serviceId: 1,
        },
        {
          id: 2,
          name: "Puerta",
          code: "Pue",
          serviceId: 2,
        },
        {
          id: 3,
          name: "Ventana",
          code: "Ven",
          serviceId: 2,
        },
        {
          id: 4,
          name: "Foco 75W",
          code: "Lum",
          serviceId: 3,
        },
        {
          id: 5,
          name: "Fluorescente 36W",
          code: "Lum",
          serviceId: 3,
        },
        {
          id: 6,
          name: "Interruptor simple",
          code: "Int1",
          serviceId: 4,
        },
        {
          id: 7,
          name: "Interruptor doble",
          code: "Int2",
          serviceId: 4,
        },
        {
          id: 8,
          name: "Interruptor triple",
          code: "Int3",
          serviceId: 4,
        },
        {
          id: 9,
          name: "Inodoro",
          code: "Ino",
          serviceId: 5,
        },
      ];
      resolve(elements.filter((element) => element.serviceId == serviceId));
    }, 1000);
  });
};

export const listAssets = async (): Promise<IAsset[]> => {
  let assets: IAsset[] = [];
  setTimeout(() => {
    assets = [
      {
        id: 1,
        code: "E01-P01-Ed-Gral",
        sectorId: 1,
        areaId: 1,
        serviceId: 1,
        elementId: 1,
      },
    ];
  }, 1000);
  return assets;
};

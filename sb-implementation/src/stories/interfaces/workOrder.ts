export interface ISector {
  id: number;
  code: string;
  name: string;
}

export interface IArea {
  id: number;
  name: string;
  code: string;
  sectorId: number;
  serviceIds: number[];
}

export interface IService {
  id: number;
  name: string;
  code: string;
}

export interface IElement {
  id: number;
  name: string;
  code: string;
  serviceId: number;
}

export interface IAsset {
  id: number;
  code: string;
  sectorId: number;
  areaId: number;
  serviceId: number;
  elementId: number;
}

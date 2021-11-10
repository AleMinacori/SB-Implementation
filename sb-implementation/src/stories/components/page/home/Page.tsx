import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Header, HeaderProps } from "../../composite/Header/Header";
import "./page.scss";
import { Sidebar, SidebarProps } from "../../composite/Sidebar/Sidebar";
import { Content } from "../../composite/Content/Content";
import { Button } from "../../base/button/Button";
import { Card } from "../../composite/Card/Card";
import { Select } from "../../base/select/Select";
import { Input } from "../../base/input/Input";
import {
  IArea,
  IAsset,
  IElement,
  ISector,
  IService,
} from "../../../interfaces/workOrder";
import {
  listAreas,
  listElements,
  listSectors,
  listServices,
} from "../../../service/workOrderAPI";
import { fromEntityToOptionList } from "../../../utils/helpers/workOrderAdapter";
import { priorities } from "../../../utils/constants/priority";

export type PageProps = {
  sidebarProps: SidebarProps;
  headerProps: HeaderProps;
};

export const Page = ({ sidebarProps, headerProps }: PageProps) => {
  const [sectors, setSectors]: [ISector[], Function] = useState([]);
  const [areas, setAreas]: [IArea[], Function] = useState([]);
  const [services, setServices]: [IService[], Function] = useState([]);
  const [elements, setElements]: [IElement[], Function] = useState([]);
  const [assets, setAssets]: [IAsset[], Function] = useState([]);
  const [sectorId, setSectorId]: [number | string, Function] = useState("");
  const [areaId, setAreaId]: [number | string, Function] = useState("");
  const [serviceId, setServiceId]: [number | string, Function] = useState("");
  const [elementId, setElementId]: [number | string, Function] = useState("");
  const [assetId, setAssetId]: [number | string, Function] = useState("");

  useEffect(() => {
    const getSectors = async () => {
      const res = await listSectors();
      setSectors(res);
    };
    getSectors();
  }, []);

  const handleChangeSector = async (sectorId: number) => {
    setSectorId(sectorId);
    setAreaId("");
    setServiceId("");
    setElementId("");
    const res = await listAreas(sectorId);
    setAreas(res);
  };

  const handleChangeArea = async (areaId: number) => {
    setAreaId(areaId);
    setServiceId("");
    setElementId("");
    const res = await listServices();
    setServices(res);
  };

  const handleChangeService = async (serviceId: number) => {
    setServiceId(serviceId);
    setElementId("");
    const res = await listElements(serviceId);
    setElements(res);
  };

  const handleChangeElement = async (elementId: number) => {
    setElementId(elementId);
  };

  return (
    <article>
      <Sidebar
        title={sidebarProps.title}
        optionItems={sidebarProps.optionItems}
      />
      <div>
        <Header user={headerProps.user} title={headerProps.title} />
        <Content>
          <Card
            variant={"secondary"}
            title={"Nueva Orden de Trabajo"}
            subtitle={"Complete los datos"}
            size={"large"}
          >
            <div className={"card-content"}>
              <img src={"https://via.placeholder.com/102x150"} />
              <div className={"card-form"}>
                <Select
                  variant={"primary"}
                  label={"Sector"}
                  defaultValue={sectorId}
                  optionItems={fromEntityToOptionList(sectors)}
                  onChange={(e: any) => handleChangeSector(e.target.value)}
                />
                <Select
                  variant={"primary"}
                  label={"Area"}
                  defaultValue={areaId}
                  optionItems={fromEntityToOptionList(areas)}
                  onChange={(e: any) => handleChangeArea(e.target.value)}
                />
                <Select
                  variant={"primary"}
                  label={"Servicio"}
                  defaultValue={serviceId}
                  optionItems={fromEntityToOptionList(services)}
                  onChange={(e: any) => handleChangeService(e.target.value)}
                />
                <Select
                  variant={"primary"}
                  label={"Elemento"}
                  defaultValue={elementId}
                  optionItems={fromEntityToOptionList(elements)}
                  onChange={(e: any) => handleChangeElement(e.target.value)}
                />
                <Select variant={"primary"} label={"Activo"} optionItems={[]} />
                <Input variant={"primary"} label={"Fecha de creación"} />
                <Select
                  variant={"primary"}
                  label={"Prioridad"}
                  optionItems={priorities}
                />
                <Input variant={"primary"} label={"Comentario"} />
                <Button
                  variant={"primary"}
                  label={"Crear"}
                  onClick={() => {
                    console.log();
                  }}
                />
              </div>
            </div>
          </Card>
        </Content>
      </div>
    </article>
  );
};

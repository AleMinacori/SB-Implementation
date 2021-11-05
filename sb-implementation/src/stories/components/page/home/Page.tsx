import React from "react";
import PropTypes from "prop-types";

import { Header, HeaderProps } from "../../composite/Header/Header";
import "./page.scss";
import { Sidebar, SidebarProps } from "../../composite/Sidebar/Sidebar";
import { Content } from "../../composite/Content/Content";
import { Button } from "../../base/button/Button";
import { Card } from "../../composite/Card/Card";
import { Select } from "../../base/select/Select";
import { Input } from "../../base/input/Input";

export type PageProps = {
  sidebarProps: SidebarProps;
  headerProps: HeaderProps;
};

export const Page = ({ sidebarProps, headerProps }: PageProps) => {
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
                <Select variant={"primary"} label={"Sector"} optionItems={[]} />
                <Select variant={"primary"} label={"Area"} optionItems={[]} />
                <Select
                  variant={"primary"}
                  label={"Servicio"}
                  optionItems={[]}
                />
                <Select
                  variant={"primary"}
                  label={"Elemento"}
                  optionItems={[]}
                />
                <Select variant={"primary"} label={"Activo"} optionItems={[]} />
                <Input variant={"primary"} label={"Fecha de creación"} />
                <Select
                  variant={"primary"}
                  label={"Prioridad"}
                  optionItems={[]}
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

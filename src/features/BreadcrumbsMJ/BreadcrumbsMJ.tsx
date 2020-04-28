import React from "react";
import { Breadcrumbs, Breadcrumb, IBreadcrumbProps } from "@blueprintjs/core";

const BREADCRUMBS: IBreadcrumbProps[] = [
  { href: "/home", icon: "home", text: "Home" },
  { text: "Mahjong" },
  { text: "Init" }
];

export class BreadcrumbsMJ extends React.Component {
  public render() {
    return (
      <Breadcrumbs
        currentBreadcrumbRenderer={this.renderCurrentBreadcrumb}
        items={BREADCRUMBS}
      />
    );
  }
  private renderCurrentBreadcrumb = ({
    text,
    ...restProps
  }: IBreadcrumbProps) => {
    // customize rendering of last breadcrumb
    return <Breadcrumb {...restProps}>{text}</Breadcrumb>;
  };
}

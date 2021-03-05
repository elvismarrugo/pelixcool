import React from "react";
import { Tab } from "semantic-ui-react";

export default function TabsMovie(props) {
  const { movie } = props;

  const panes = [
    {
      menuItem: "Información",
      render: () => (
        <Tab.Pane>
          <h1>Info movie</h1>
        </Tab.Pane>
      ),
    },
  ];

  return  <Tab className="tabs-movie" panes={panes} />;
}
import React from "react";
import { Tab } from "semantic-ui-react";
import InfoMovie from "../InfoMovie";

export default function TabsMovie(props) {
  const { movie } = props;

  const panes = [
    {
      menuItem: "Información",
      render: () => (
        <Tab.Pane>
          <InfoMovie movie={movie} />
        </Tab.Pane>
      ),
    },
  ];

  return  <Tab className="tabs-movie" panes={panes} />;
}
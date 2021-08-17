import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Home, LibraryMusic, Search } from "@material-ui/icons";
import { useDataLayerValue } from "./DataLayer";
function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img className="sidebar-logo" src="https://bit.ly/3sm4aFc" alt="" />
      <SidebarOption title="Home" Icon={Home} />
      <SidebarOption title="Search" Icon={Search} />
      <SidebarOption title="Your Libary" Icon={LibraryMusic} />
      <br />
      <strong className="sidebar-title">PLAYLIST</strong>
      <hr />

      {playlists?.items?.map((playlist) => {
        return <SidebarOption title={playlist.name} />;
      })}
    </div>
  );
}

export default Sidebar;

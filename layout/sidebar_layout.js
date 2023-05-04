import SideBar from "@/components/sidebar";
import Header from "@/components/header";
import Media from "react-media";
import styles from "@/styles/Sidebarlayout.module.css";
import { useContext, useEffect, useState, useRef } from "react";

export default function SidebarLayout({ children }) {
  return (
    <div>
      <Media
        queries={{
          small: "(max-width: 640px)",
          large: "(min-width: 641px)",
        }}
      >
        {(matches) => (
          <div>
            {matches.small && (
              <div style={{ marginLeft: "0px" }}>
                <Header />
                <div>{children}</div>
              </div>
            )}
            {matches.large && (
              <div style={{ marginLeft: "70px" }}>
                <Header />
                <div>{children}</div>
              </div>
            )}
          </div>
        )}
      </Media>
      <SideBar />
    </div>
  );
}

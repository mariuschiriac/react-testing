import React from "react";
import MediaQuery from "react-responsive";
import ListaCanzoni from "../canzoni/lista_canzoni";
import AggiungiCanzone from "../canzoni/aggiungi_canzone";

const ResponsiveComponent = () => {
  return (
    <div>
      <div>
        <section style={{ margin: "100px 0px" }}>
          <MediaQuery query="(min-device-width: 1224px)">
            <div>You are a desktop or laptop</div>
            <MediaQuery query="(min-device-width: 1824px)">
              <div>You also have a huge screen</div>
            </MediaQuery>
            <MediaQuery query="(max-width: 1224px)">
              <div>You are sized like a tablet or mobile phone though</div>
            </MediaQuery>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <div>You are a tablet or mobile phone</div>
          </MediaQuery>
          <MediaQuery query="(orientation: portrait)">
            <div>You are portrait</div>
          </MediaQuery>
          <MediaQuery query="(orientation: landscape)">
            <div>You are landscape</div>
          </MediaQuery>
          <MediaQuery query="(min-resolution: 2dppx)">
            <div>You are retina</div>
          </MediaQuery>
        </section>
        <section>
          <AggiungiCanzone />
          <ListaCanzoni />
        </section>
      </div>
    </div>
  );
};

export default ResponsiveComponent;

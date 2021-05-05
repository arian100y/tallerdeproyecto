import React from "react";
import "./DataView.css";
import Stat from "./Stat";
const data = {
  sad: {
    value: 1,
    url:
      "https://iconape.com/wp-content/files/pk/59993/svg/facebook-reaction-like.svg",
  },
  laugh: {
    value: 1,
    url: "https://cdn.worldvectorlogo.com/logos/facebook-reaction-haha.svg",
  },
  mad: {
    value: 1,
    url: "https://svgur.com/i/AAJ.svg",
  },
  love: {
    value: 1,
    url:
      "https://seeklogo.com/images/F/facebook-reaction-love-logo-FA246AF759-seeklogo.com.png",
  },
  like: {
    value: 1,
    url:
      "https://iconape.com/wp-content/files/pk/59993/svg/facebook-reaction-like.svg",
  },
  heart: {
    value: 1,
    url:
      "https://iconape.com/wp-content/files/pk/59993/svg/facebook-reaction-like.svg",
  },
};
const popModal = () => {
  document.querySelector(".modal").classList.toggle("pop");
};
export default function DataView() {
  return (
    <div className="dataview-container">
      <div className="iframe">
        <div
          style={{ overflowY: "scroll", backgroundColor: "white" }}
          data-mobile="true"
          className="fb-comments"
          data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
          data-width=""
          data-numposts="5"
        ></div>
      </div>
      <div className="analytics">
        <div className="title">
          <div></div>
          <p>Facebook</p>
        </div>
        <div className="stats">
          <Stat data={data} name="Reacciones" type="first"></Stat>
          <div style={{ position: "relative" }}>
            <div className="long"></div>
            <Stat data="7" name="Comentarios" type="second"></Stat>
            <br></br>
            <Stat
              data={{
                url:
                  "https://www.pngkit.com/png/full/0-6616_view-samegoogleiqdbsaucenao-qcbbexbc5-green-check-mark-circle.png",
                value: "3",
              }}
              red={true}
              name="Compartidas"
              type="second"
            ></Stat>
            <Stat
              data={{
                url:
                  "https://www.safetysuppliesunlimited.net/wp-content/uploads/2020/06/ISO472AP.jpg",
                value: "2",
              }}
              red={true}
              name="Compartidas"
              type="second"
            ></Stat>
            <Stat
              data={{
                url:
                  "https://cdn.shopify.com/s/files/1/1061/1924/products/Neutral_Face_Emoji_grande.png?v=1571606037",
                value: "3",
              }}
              red={true}
              name="Compartidas"
              type="second"
            ></Stat>
          </div>
          <Stat data="5" name="Compartidas" type="second"></Stat>
        </div>
        <button onClick={popModal} className="masResultados">
          Mas resultados
        </button>
      </div>
      <div className="modal"></div>
    </div>
  );
}

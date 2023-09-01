import { useEffect } from "react";

const Fiverr = () => {
  useEffect(() => {
    const script: HTMLScriptElement = document.createElement("script");
    script.id =
      "fiverr-seller-widget-script-f2315090-61c3-4ca0-9e0b-69b4694e01cd";
    script.src =
      "https://widgets.fiverr.com/api/v1/seller/salemfeyzo?widget_id=f2315090-61c3-4ca0-9e0b-69b4694e01cd";
    // @ts-ignore
    script.attributes["data-config"] =
      '{"category_name":"Programming \u0026 Tech"}';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      // clean up the script when the component in unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        itemScope
        itemType="http://schema.org/Person"
        className="fiverr-seller-widget"
        style={{ display: "inline-block" }}
      >
        <a
          itemProp="url"
          href="https://www.fiverr.com/salemfeyzo"
          rel="nofollow"
          target="_blank"
          style={{ display: "inline-block" }}
        >
          <div
            className="fiverr-seller-content"
            id="fiverr-seller-widget-content-f2315090-61c3-4ca0-9e0b-69b4694e01cd"
            itemProp="contentURL"
            style={{ display: "none" }}
          ></div>
          <div id="fiverr-widget-seller-data" style={{ display: "none" }}>
            <div itemProp="name">salemfeyzo</div>
            <div itemScope itemType="http://schema.org/Organization">
              <span itemProp="name">Fiverr</span>
            </div>
            <div itemProp="jobtitle">Seller</div>
            <div itemProp="description">
              Full stack web developer I will offer you high quality web sites
              using various latest technologies. Skills: Html Javascript: React
              JS ,Next JS Node JS: Express JS, Nest JS Css: Bootstrap, Tailwind
              Css DB: MongoDB, Postgres
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Fiverr;

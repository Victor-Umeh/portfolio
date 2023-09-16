//@ts-ignore
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { CardHeader } from "./styled/home.styled.ts";

// import i18next from "i18next";
export const IntroCard = () => {
  const [lang, setLang] = useState(false);
  const { t, ready, i18n } = useTranslation();

  /*
  An i18next method, changing language has not effect, unless the browser is refreshed,
   the useState(lang) changes when i18n detects a language change,
   rerendering the useEffect hook and typedJs library
   */
  i18n.on("languageChanged", () => {
    setLang(!lang);
  });

  function getTranslation() {
    if (!ready) return "Loading getTranslationlations....";

    return t("typed", {
      returnObjects: true,
    });
  }
  const typedData = Object.values(getTranslation());
  typedData.unshift("💖");

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: typedData,
      typeSpeed: 120,
      showCursor: false,
      bindInputFocusEvents: true,
      backDelay: 1000,
      loop: true,
      loopCount: 1,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [lang]);

  return (
    <>
      <CardHeader style={{ fontSize: "3.3rem" }}>
        {t("homePage.greet")}
        Victor
      </CardHeader>
      <CardHeader
        as="span"
        $fontf=" poppins"
        style={{
          fontSize: "1.3rem",
          height: "2.5vh",
        }}
        ref={el}
      />
    </>
  );
};

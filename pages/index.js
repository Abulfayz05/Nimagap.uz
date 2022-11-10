import React from "react";
import Yangilik from "../Component/Yangilik";

export default function Home({ hero }) {
  return <Yangilik hero={hero.data} />;
}

export async function getServerSideProps() {
  const res2 = await fetch("https://admin.nimagap.uz/items/news_translations");
  const hero = await res2.json();

  return {
    props: {
      hero,
    },
  };
}

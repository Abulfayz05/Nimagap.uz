import React from "react";
import Yangilik from "../Component/Yangilik";

export default function Home({data}) {
  return <Yangilik data={data.data} />;
}

export async function getServerSideProps() {
  const res = await fetch('https://admin.uzbekvoice.ai/items/news_translations')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

import React from "react";
import YangilikById from "../../Component/YangilikById";

const NewsById = ({ data }) => {
  return (
    <>
      <YangilikById data={data} />
    </>
  );
};

export default NewsById;

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://admin.uzbekvoice.ai/items/news_translations/?filter[news_id]=${params.news}`
  );

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

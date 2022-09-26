import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/NewsById.module.css";
import Image from "next/image";
import { getAssetURL } from "../utils/get-asset-url";
import { NextSeo } from "next-seo";

const YangilikById = ({ data }) => {
  const { locale } = useRouter();
  const dataFilter = data.data.filter((p) => p.languages_code === locale)[0];
  return (
    <>
      <NextSeo
        title={dataFilter.news_title}
        description={dataFilter.news_content.split(" ", 20).join(" ")}
        titleTemplate={dataFilter.news_title}
      />
      <div className={styles.news}>
        <h3>{dataFilter.news_title}</h3>

        <p className={styles.date}>
          {dataFilter.data_created.slice(0, 10) +
            " " +
            dataFilter.data_created.slice(11, 16)}
        </p>

        <div className={styles.image}>
          <Image
            src={getAssetURL(dataFilter.news_image)}
            layout="responsive"
            width={600}
            height={400}
            alt="Image"
          />
        </div>

        <div className={styles.desc}>
          <p dangerouslySetInnerHTML={{ __html: dataFilter.news_content }} />
        </div>
      </div>
    </>
  );
};

export default YangilikById;

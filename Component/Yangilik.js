import React from "react";
import styles from "../styles/Yangilik.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { getAssetURL } from "../utils/get-asset-url";
import Link from "next/link";

export default function Yangilik({  hero}) {
  console.log(hero)
  const { locale } = useRouter();

  return (
    <div className={styles.news}>
      <div className={styles.today_news}>
        <div className={styles.head}>
          <h3>Welcome to Nimagap.uz</h3>
          <h4>Thursday, 22 September</h4>
        </div>

        <div className={styles.gridmain}>
        {hero
          .filter((p) => p.languages_code === locale && p.news_id)
          .map(({ news_id, image, title, content }) => (
            <div key={news_id} className={styles.card}>
              
                <Image
                  src={getAssetURL(image)}
                  layout="responsive"
                  width={350}
                  height={210}
                  alt="Image"
                />
            

              <div className={styles.title}>
                {/* <Link href={`/news/${news_id}`}>
                  <a>{title}</a>
                </Link> */}
                <h4>{title}</h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: content.split(" ", 25).join(" "),
                  }}
                ></p>
              </div>
            </div>
          ))}
      
        </div>
      </div>


<h6>News</h6>
      <div className={styles.section}>
        
      <div className={styles.grid}>
        {hero
          .filter((p) => p.languages_code === locale && p.news_id)
          .map(({ news_id, image, title, content }) => (
            <div key={news_id} className={styles.card}>
              <div className={styles.image}>
                <Image
                  src={getAssetURL(image)}
                  layout="responsive"
                  width={350}
                  height={210}
                  alt="Image"
                />
              </div>

              <div className={styles.item}>
                <Link href={`/news/${news_id}`}>
                  <a>{title}</a>
                </Link>
                <p
                  dangerouslySetInnerHTML={{
                    __html: content.split(" ", 15).join(" "),
                  }}
                ></p>
              </div>
            </div>
          ))}
      </div>
        <div className={styles.ads}></div>
      </div>

      
    </div>
  );
}

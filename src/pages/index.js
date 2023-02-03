import React from 'react';
import clsx from 'clsx';
import ReactiveButton from 'reactive-button';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './home.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="{styles.container}">
        <h1 className="{styles.hero__title}">{siteConfig.title}</h1>
        <p className="{styles.hero__subtitle}">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="{styles.button button--secondary button--lg}"
            to="/docs/intro">
​雙龍職籃 ... 籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運，目的是將籃球投入對方球籃得分，並阻止 ...
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={``}
      description="​雙龍職籃 ... 籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運，目的是將籃球投入對方球籃得分，並阻止 ...">
      <main>
      <>
  <div className="{styles.header}">
    <div className="{styles.container}">
      <div className="{styles.h{styles.ero-content}">
        <div className="{styles.hero-block}">
          <div className="{styles.content-block-hero}">
            <h1 className="{styles.heading-2}">
              <strong className="{styles.bold-text-9}">我們的</strong>
              <span>
                <strong className="{styles.bold-text}">使命</strong>
              </span>
              <strong className="{styles.bold-text-9}">是將</strong>
              <span>
                <strong className="{styles.bold-text-3}">雙</strong>
              </span>
              <strong className="{styles.bold-text-3}">龍</strong>
              <span>
                <strong className="{styles.bold-text-3}">體</strong>
                <strong className="{styles.bold-text-3}">育</strong>
              </span>
              <strong className="{styles.bold-text-10}">組成</strong>
              <span>
                <strong className="{styles.bold-text-6}">最棒</strong>
             </span>
              <strong className="{styles.bold-text-10}">體育組織</strong>
              <span>
              </span>
              <span className="cursor">
                <strong className="{styles.cursor}" data-owner="main"></strong>
              </span>
            </h1>
            <div className="{styles.button-wrap-hero}">
            <a
                className="{styles._6 w-inline-block}"
                data-w-id="d90f4fb2-2134-be56-aa63-3fe5d940d2aa"
                href="#123"
              >
                        <ReactiveButton shadow size="large" idleText="我們的體育" />

              </a>
            </div>
          </div>
        </div>
        <div className="{styles.hero-image-wrap}">
          <img
            alt=""
            className="{styles.hero-image}"
            src="https://74-rho.vercel.app/images/undraw_fitness_stats_sht6.svg"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="{styles.section-content}">
    <div className="{styles.container space-below}" id={123}>
      <div className="{styles.title-wrap-left}">
        <p className="{styles.title}">OUR&nbsp;sport</p>
        <h3 className="{styles.heading-primary}">
          雙龍體育
          <span className="{styles.text-span}">的運動</span>
        </h3>
      </div>
      <div className="{styles.service-card-wrap}">
        <div className="{styles.column}">
          <div className="{styles.service-card}">
            <img
              alt=""
              className="{styles.service-icon}"
              src="https://74-rho.vercel.app/images/baseball-16.png"
              width={75}
            />
            <div className="{styles.card-content-wrap}">
              <h3 className="{styles.heading-3}">雙龍職棒</h3>
              <p className="{styles.paragraph-2}">
                <strong>
                  棒球，（英語：Baseball、日韓稱為野球），為一種團體球類運動，由人數最少為9人的两支队伍在一個扇形的球場进行攻擊與守備。棒球球員分為攻...
                </strong>
              </p>
            </div>
          
            <a href="https://www.slbtw.cf/" target="_blank">
    <ReactiveButton color="yellow" idleText="更多消息" />
  </a>
          </div>
        </div>
        <div className="{styles.column}">
          <div className="{styles.service-card}">
            <img
              alt=""
              className="{styles.service-icon}"
              src="https://74-rho.vercel.app/images/889455.png"
              width={75}
            />
            <div className="{styles.card-content-wrap}">
              <h3 className="{styles.heading-3}">​雙龍職籃</h3>
              <p className="{styles.paragraph-2}">
                <strong>
                  籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運，目的是將籃球投入對方球籃得分，並阻止對方獲得控球權或得...
                </strong>
              </p>
            </div>
            <a href="https://www.sbatw.ml" target="_blank">
    <ReactiveButton idleText="更多消息" />
  </a>
          </div>
        </div>
        <div className="{styles.column}">
          <div className="{styles.service-card}">
            <img
              alt=""
              className="{styles.service-icon}"
              src="https://74-rho.vercel.app/images/53283.png"
              width={75}
            />
            <div className="{styles.card-content-wrap}">
              <h3 className="{styles.heading-3}">雙龍足球</h3>
              <p className="{styles.paragraph-2}">
                <strong>}
                  足球（football）主要專指英式足球，官方名為協會足球（association
                  football，簡稱soccer），是一種世界流行的團體球類運動，也是所有體育運動中最受歡迎、接受度最高、普及面最廣的一種，被譽為「世界遊戲」
                </strong>
              </p>
            </div>
            <a href="/" target="_blank">
    <ReactiveButton color="teal" idleText="更多消息" />
  </a>
          </div>
        </div>
      </div>
    </div>
    <div className="{styles.container}">
      <div className="{styles.column-wrap-reversed}">
        <div className="{styles.image-block}">
          <img
            alt=""
            data-w-id="cd4d931f-771b-3662-2f2f-9a8f90ae76b5"
            src="https://74-rho.vercel.app/images/62d564600ff95899fb6eda9d_75df1528-2822-4edf-9c6a-8cd50c0c2c28-p-500.png"
          />
        </div>
        <div className="{styles.content-block-left}">
          <div className="{styles.content-wrap}">
            <p className="{styles.title}">
              slb
              <br />
            </p>
            <h2 className="{styles.heading-primary}">​雙龍職棒</h2>
            <p className="{styles.paragraph}">
              <strong>
                棒球，（英語：Baseball、日韓稱為野球），為一種團體球類運動，由人數最少為9人的两支队伍在一個扇形的球場进行攻擊與守備。棒球球員分為攻...
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div className="{styles.column-wrap}">
        <div className="{styles.image-block}">
          <img
            alt=""
            src="https://74-rho.vercel.app/images/62d56332e87b47c78b67ac6c_taxi-basketball.png"
            width={398}
          />
              <p>&nbsp;</p>
  <p>
    <br />
  </p>
        </div>
  
        <div className="{styles.content-block-right}">
          <div className="{styles.content-wrap}">
            <p className="{styles.title}">sba</p>
            <h2 className="{styles.heading-primary}">​雙龍職籃</h2>
            <p className="{styles.paragraph}">
              <strong>
                籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運，目的是將籃球投入對方球籃得分，並阻止對方獲得控球權或得分。籃球是世界上最多人觀看
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="{styles.section-statistics}">
    <div className="{styles.container}">
      <div className="{styles.title-wrap}">
        <p className="{styles.title}">about ssport</p>
        <h3 className="{styles.heading-primary h3-centre}">
          關於我們
          <br />
        </h3>
      </div>
      <div className="{styles.feature-number-wrap}">
        <div className="{styles.statistic-circle-wrap}">
          <div className="{styles.circle-div}">
            <h4 className="{styles.counterup}">2017</h4>
            <div className="{styles.title-capped}">創建雙龍體育</div>
          </div>
        </div>
        <div className="{styles.arrow-wrap">
          <img alt="" className="{styles.arrow-image}" src="https://site123-git-main-ssangyongsports.vercel.app/images/arrow-right.svg" />
          <img
            alt=""
            className="{styles.arrow-image-mobile}"
            src="https://site123-git-main-ssangyongsports.vercel.app/images/arrow-down.svg"
          />
        </div>
        <div className="{styles.statistic-circle-wrap}">
          <div className="{styles.circle-div}">
            <h1 className="{styles.counterup}">2019</h1>
            <div className="{styles.title-capped}">創建sba,slb</div>
          </div>
        </div>
        <div className="{styles.arrow-wrap}">
          <img alt="" className="arrow-image" src="https://site123-git-main-ssangyongsports.vercel.app/images/arrow-right.svg" />
          <img
            alt=""
            className="{styles.arrow-image-mobile-02}"
            src="https://site123-git-main-ssangyongsports.vercel.app/images/arrow-down-02.svg"
          />
        </div>
        <div className="{styles.statistic-circle-wrap}">
          <div className="{styles.circle-div}">
            <h1 className="{styles.counterup}">2022</h1>
            <div className="{styles.title-capped}">收購js</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
      </main>
    </Layout>
  );
}

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Simplified API's</>,
    imageUrl: 'img/undraw_code_typing_7jnv.svg',
    description: (
      <>
				Create a Face Recognition Application within 5 lines of code. 
      </>
    ),
  },
  {
    title: <>Written in C++</>,
    imageUrl: 'img/c.png',
    description: (
      <>
				Written in C++ makes it one of the fastest face-recognition on edge. 
      </>
    ),
  },
  {
    title: <>Support to 3rd Party Apps</>,
    imageUrl: 'img/undraw_dashboard_nklg.svg',
    description: (
      <>
				Send Alerts, View Dashboards, Arrange Data and Apply Machine Learning with 3rd Party Apps. 
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const demos = [
  {
    title: <>Face Detection</>,
    imageUrl: 'img/face.svg',
    description: (
      <>
				Detect a person in frame/video with a single line of code. 
      </>
    ),
  },
  {
    title: <>Face Recognition</>,
    imageUrl: 'img/face.svg',
    description: (
      <>
				One of the fastest Face-Recognition on edge.
      </>
    ),
  },
  {
    title: <>People Counter</>,
    imageUrl: 'img/undraw_financial_data_es63.svg',
    description: (
      <>
				Count number of people in the frame. 
      </>
    ),
  },
];

function Demo({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.demos)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.demoImage} src={imgUrl} alt={title} />
        </div>
      )}
			<div className="text--center">
      <h1>{title}</h1>
      <p>{description}</p>
			</div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Simple Low code library to build AI Face Applications">
      <header className={classnames('hero hero--primary-dark', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.indexCtasGetStartedButton,
              )}
              to={useBaseUrl('docs/demos/face-recognition')}>
              See Demo
            </Link>
          </div>
        </div>
      </header>
      <main>
        {demos && demos.length && (
          <section className={styles.demos}>
            <div className="container">
							<h1>Build</h1>
              <div className="row">
                {demos.map((props, idx) => (
                  <Demo key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
						<h1>Why?</h1>
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

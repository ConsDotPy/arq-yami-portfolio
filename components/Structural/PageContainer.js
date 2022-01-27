import Head from "next/head";
import { useRouter } from "next/router";

const PageContainer = ({ children, page, desc, img, type, ...customMeta }) => {
  const router = useRouter();

  const meta = {
    title: `${page} | Max Pozen | Architectural Portfolio Website`,
    description: desc ? desc : "TSK",
    image: img ? img : "/static/backgrounds/tsk.png",
    type: type ? type : "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.maxpozen.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.maxpozen.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Bulletproof Code" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* TSK */}
        {/* <meta name="twitter:site" content="@CodeBulletproof" /> */}

        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {/* TSK: Incorporate this */}
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      {children}
    </>
  );
};

export default PageContainer;

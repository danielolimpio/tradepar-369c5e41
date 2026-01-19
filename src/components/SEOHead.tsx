import { Helmet } from "react-helmet";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  keywords?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  noIndex?: boolean;
}

const SEOHead = ({
  title,
  description,
  canonicalPath,
  keywords,
  ogType = "website",
  ogImage = "https://tradepar.com.br/og-image.jpg",
  articlePublishedTime,
  articleModifiedTime,
  noIndex = false,
}: SEOHeadProps) => {
  // URLs SEM trailing slash (exceto homepage)
  const normalizedPath = canonicalPath === "/" 
    ? "" 
    : canonicalPath.endsWith("/") 
      ? canonicalPath.slice(0, -1) 
      : canonicalPath;
  const canonicalUrl = `https://tradepar.com.br${normalizedPath}`;
  const fullTitle = title.includes("Tradepar") ? title : `${title} | Tradepar`;

  return (
    <Helmet>
      {/* Título */}
      <title>{fullTitle}</title>
      
      {/* Meta tags básicas */}
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {!noIndex && <meta name="robots" content="index, follow" />}
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Tradepar" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Tradepar" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Article specific (for blog posts) */}
      {ogType === "article" && articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {ogType === "article" && articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      {ogType === "article" && (
        <meta property="article:author" content="Equipe Tradepar" />
      )}
    </Helmet>
  );
};

export default SEOHead;

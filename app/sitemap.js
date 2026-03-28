export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fujirag.voitex.biz";
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${baseUrl}/thanks`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4
    }
  ];
}

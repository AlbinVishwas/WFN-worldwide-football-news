import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://wfn.vercel.app' // Replace with actual domain

    // Static routes
    const routes = [
        '',
        '/leagues',
        '/transfers',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // In a real app, we would fetch dynamic routes here (matches, news)
    // const matches = await db.match.findMany(...)

    return [...routes]
}

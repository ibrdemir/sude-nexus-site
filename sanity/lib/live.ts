export const sanityFetch = async (query: string) => {
  const { client } = await import('./client')
  return client.fetch(query)
}

export const SanityLive = () => null
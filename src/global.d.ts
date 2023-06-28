declare interface Character {
    id: number,
    name?: string,
    url?: string,
    img?: string,
    planet?: string,
    gender?: string,
    episodes?: string[],
  }

declare interface Episode {
  id: number,
  title: string,
  date: string,
  episode: string,
}

export interface Album {
  id: string;
  name: string;
  release_date: string;
  images: { url: string }[];
  artists: { name: string }[];
}
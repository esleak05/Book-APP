import { Category } from './category-interface';
import { Tag } from './tag-interface';

export interface Book {
  id: number | string;
  title: string;
  author: string;
  content: string;
  content_short: string;
  publisher: string;
  publisher_date: string;
  pages: string | number;
  languague: string;
  url_details: string;
  url_download: string;
  cover: string;
  thumbnail: string;
  num_comments: number;
  category: Category[];
  tags: Tag[];
}

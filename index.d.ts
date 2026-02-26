interface ContentImage {
  url: string;
  alt: string;
}

interface ContentData {
  images: ContentImage[];
}

declare const content: ContentData;
export = content;

interface ContentImage {
  url: string;
  alt?: string;
  type?: "LANDSCAPE" | "PORTRAIT" | "ICON" | "OTHER";
}

interface ContentData {
  images: ContentImage[];
}

declare const content: ContentData;
export = content;

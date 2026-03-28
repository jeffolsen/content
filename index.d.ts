interface ContentImage {
  url: string;
  alt?: string;
  type?: "LANDSCAPE" | "PORTRAIT" | "ICON" | "OTHER";
}

interface ContentTag {
  name: string;
}

interface ContentComponentType {
  name: string;
  subjectType: "SINGLE" | "COLLECTION";
  propertySchema?: Record<string, unknown>; // Optional schema for additional properties
}

interface UpsertableContentData {
  images: ContentImage[];
  tags: ContentTag[];
  componentTypes: ContentComponentType[];
}

interface DeletableContentData {
  images: string[]; // URLs of images to delete
  tags: string[]; // Names of tags to delete
  componentTypes: string[]; // Names of component types to delete
}

interface ContentData {
  deletes: DeletableContentData;
  upserts: UpsertableContentData;
}

declare const content: ContentData;
export = content;

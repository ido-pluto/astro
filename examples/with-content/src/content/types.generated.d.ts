declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]];
	export function collectionToPaths<C extends keyof typeof entryMap>(
		collection: C
	): Promise<import('astro').GetStaticPathsResult>;

	type BaseCollectionConfig = { schema: import('astro/zod').ZodRawShape };
	export function defineCollection<C extends BaseCollectionConfig>(input: C): C;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E]>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<typeof entryMap[C][keyof typeof entryMap[C]][]>;
	export function renderEntry<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(entry: {
		collection: C;
		id: E;
	}): Promise<{
		Content: import('astro').MarkdownInstance<{}>['Content'];
		headings: import('astro').MarkdownHeading[];
		injectedFrontmatter: Record<string, any>;
	}>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<CollectionsConfig['collections'][C]['schema']>
	>;

	const entryMap: {
		"blog": {
"columbia.md": {
  id: "columbia.md",
  slug: "columbia",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"endeavour.md": {
  id: "endeavour.md",
  slug: "endeavour",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"enterprise.md": {
  id: "enterprise.md",
  slug: "enterprise",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"promo/launch-week.mdx": {
  id: "promo/launch-week.mdx",
  slug: "promo/launch-week",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},

	};

	type CollectionsConfig = typeof import('/Users/benholmes/Repositories/astro/examples/with-content/src/content/config');
}

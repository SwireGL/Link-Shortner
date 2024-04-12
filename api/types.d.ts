export interface Link {
    id: string;
    linkUrl: string
}

export type LinkWithoutId = Omit<Link, 'id'>;
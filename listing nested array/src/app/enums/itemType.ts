export interface itemType {
    id: number;
    name: string;
    parentId: number;
    children: Array<itemType> | null;
}
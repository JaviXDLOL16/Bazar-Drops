export type Comment = {
    id: number;
    comments: string;
    sellerId: number;
    uuid: string;
}

export type NewComment = Omit<Comment, 'id'>;
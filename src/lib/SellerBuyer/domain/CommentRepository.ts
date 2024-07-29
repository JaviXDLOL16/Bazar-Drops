import { Comment, NewComment } from "./Comment";

export interface CommentRepository {
    save(comment: NewComment): Promise<void>;
    getAllBySellerId(sellerId: number): Promise<Comment[]>;
}
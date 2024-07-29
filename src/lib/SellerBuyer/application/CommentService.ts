import { NewComment } from "../domain/Comment";
import { CommentRepository } from "../domain/CommentRepository";

export const createCommentService = (repository: CommentRepository) => {
    return {
        save: async (comment: NewComment) => await repository.save(comment),
        getAllBySellerId: async (sellerId: number) => await repository.getAllBySellerId(sellerId)
    };
}

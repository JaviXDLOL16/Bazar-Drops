import axios from "axios";
import { CommentRepository } from "../domain/CommentRepository";
import { NewComment } from "../domain/Comment";

const sellerApiUrl = process.env.EXPO_PUBLIC_API_SELLER_URL;

export const createAxiosCommentRepository = (): CommentRepository => {
    return {
        save: async (comment: NewComment) => {
            await axios.post(`${sellerApiUrl}/commentaries/create`, comment);
        },
        getAllBySellerId: async (sellerId: number) => {
            const response = await axios.get(`${sellerApiUrl}/commentaries/seller/${sellerId}`);
            const comments = response.data.data;
            return comments;
        }
    }
}
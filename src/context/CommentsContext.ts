import { createContext } from 'react';
import type { Comment } from '../models';

export interface CommentsContextType {
  comments: Comment[];
  addComment: (text: string) => Promise<boolean>;
  editComment: (updated: Comment) => void;
  deleteComment: (id: number) => Promise<void>;
  getComments: () => Promise<void>;
}

export const CommentsContext = createContext<CommentsContextType>({
  comments: [],
  addComment: async () => false,
  editComment: () => {},
  deleteComment: async () => {},
  getComments: async () => {},
});

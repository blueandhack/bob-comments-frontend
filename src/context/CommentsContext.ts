import { createContext } from 'react';
import { defaultSettings, type Comment, type Settings } from '../models';

export interface CommentsContextType {
  comments: Comment[];
  settings: Settings;
  updateSettings: (key: string, value: string) => void;
  addComment: (text: string) => Promise<boolean>;
  editComment: (updated: Comment) => void;
  deleteComment: (id: number) => Promise<void>;
  getComments: () => Promise<void>;
}

export const CommentsContext = createContext<CommentsContextType>({
  comments: [],
  settings: defaultSettings,
  updateSettings: () => { },
  addComment: async () => false,
  editComment: () => { },
  deleteComment: async () => { },
  getComments: async () => { },
});

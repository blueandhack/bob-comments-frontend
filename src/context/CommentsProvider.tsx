import { useEffect, useState } from 'react';
import { notification } from 'antd';
import type { Comment } from '../models';
import { CommentsContext } from './CommentsContext';

export function CommentsProvider({ children }: { children: React.ReactNode }) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch('http://localhost:3001/api/comments');
      if (!response.ok) {
        notification.error({ title: 'Error', description: 'Failed to fetch comments' });
        throw new Error('Failed to fetch comments');
      }
      const { data } = await response.json();
      notification.success({ title: 'Success', description: 'Comments loaded successfully' });
      setComments(data);
    };
    fetchComments();
  }, []);

  const getComments = async () => {
    const response = await fetch('http://localhost:3001/api/comments');
    if (!response.ok) {
      notification.error({ title: 'Error', description: 'Failed to fetch comments' });
      throw new Error('Failed to fetch comments');
    }
    notification.success({ title: 'Success', description: 'Comments refreshed successfully' });
    const { data } = await response.json();
    setComments(data);
  };

  const addComment = async (text: string) => {
    const response = await fetch('http://localhost:3001/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ authorName: "Admin", content: text }),
    });
    if (!response.ok) {
      notification.error({ title: 'Error', description: 'Failed to add comment' });
      return false;
    }
    const { data } = await response.json();
    notification.success({ title: 'Success', description: 'Comment added successfully' });
    const comment: Comment = { ...data };
    setComments((prev) => [comment, ...prev]);
    return true;
  };

  const editComment = async (updated: Comment) => {
    const response = await fetch(`http://localhost:3001/api/comments/${updated.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    if (!response.ok) {
      notification.error({ title: 'Error', description: 'Failed to update comment' });
      throw new Error('Failed to update comment');
    }
    notification.success({ title: 'Updated', description: 'Comment updated successfully' });
    setComments((prev) =>
      prev.map((c) => (c.id === updated.id ? updated : c))
    );
  };

  const deleteComment = async (id: number) => {
    const response = await fetch(`http://localhost:3001/api/comments/${id}`, { method: 'DELETE' });
    if (!response.ok) {
      notification.error({ title: 'Error', description: 'Failed to delete comment' });
      throw new Error('Failed to delete comment');
    }
    notification.success({ title: 'Deleted', description: 'Comment deleted successfully' });
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <CommentsContext.Provider value={{ comments, addComment, editComment, deleteComment, getComments }}>
      {children}
    </CommentsContext.Provider>
  );
}

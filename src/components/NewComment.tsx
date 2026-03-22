import { Button, Flex, Input, notification } from 'antd';
import React, { useContext } from 'react';
import { CommentsContext } from '../context/CommentsContext';


export default function NewComment() {
  const { addComment } = useContext(CommentsContext);

  const [editedText, setEditedText] = React.useState('');

  return (
    <Flex gap={10} style={{ marginBottom: 24 }} align="center">
      <Flex vertical flex={1} gap={8}>
        <Input.TextArea
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          autoSize={{ minRows: 4, maxRows: 6 }}
          placeholder="Write a comment..."
        />
      </Flex>
      <Flex vertical gap={4} justify="space-between">
        <Button type="primary" style={{ marginLeft: 8 }} onClick={async () => {
          if (!editedText.trim()) {
            notification.error({ title: 'Error', description: 'Comment cannot be empty' });
            return;
          }
          const success = await addComment(editedText);
          if (success) {
            setEditedText('');
          }
        }}>
          Add Comment
        </Button>
        <Button style={{ marginLeft: 8 }} onClick={() => setEditedText('')}>
          Clear
        </Button>
      </Flex>
    </Flex>
  );
}

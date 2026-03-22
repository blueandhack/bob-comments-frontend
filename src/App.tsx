import { Flex, Typography, Button, Divider } from 'antd';
import CommentCard from './components/CommentCard';
import { CommentsContext } from './context/CommentsContext';
import NewComment from './components/NewComment';
import { useContext } from 'react';

// import './App.css'

function App() {
  const { comments, getComments } = useContext(CommentsContext);

  return (
    <div style={{ maxWidth: 640, margin: '32px auto', padding: '0 16px' }}>
      <Typography.Title level={2}>Bob Community</Typography.Title>
      <Flex align="center" gap={8} style={{ marginBottom: 24 }} justify="space-between">
        <Flex align="center" gap={4}>
          <Typography.Text type="secondary">Total Comments:</Typography.Text>
          <Typography.Text strong>{comments.length}</Typography.Text>
        </Flex>
        <Button type="primary" size="small" onClick={() => {
          getComments();
        }}>Refresh</Button>
      </Flex>
      <Divider />
      <NewComment />
      <Flex vertical gap={10}>
        {comments.map((comment) => (
          <Flex vertical key={comment.id} gap={10}>
            <CommentCard key={comment.id} comment={comment} />
          </Flex>
        ))}
      </Flex>
    </div>
  );
}

export default App

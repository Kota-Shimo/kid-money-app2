// components/TaskItem.js
import { Card, CardContent, Typography, Button } from '@mui/material';

export default function TaskItem({ task, onComplete }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          報酬: {task.reward} 円
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => onComplete(task.id, task.reward)}
          disabled={task.done}
        >
          {task.done ? '完了済' : '完了する'}
        </Button>
      </CardContent>
    </Card>
  );
}

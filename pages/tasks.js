// pages/tasks.js
import { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc
} from 'firebase/firestore';
import { Box, Button, Typography, Paper } from '@mui/material';

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    const snapshot = await getDocs(collection(db, 'tasks'));
    const list = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    setTasks(list);
  }

  async function handleComplete(taskId, reward) {
    // タスクの done を true に更新
    await updateDoc(doc(db, 'tasks', taskId), { done: true });

    // 残高に報酬を加算
    const balanceRef = doc(db, 'appState', 'common');
    const balanceSnap = await getDoc(balanceRef);
    if (balanceSnap.exists()) {
      const currentBalance = balanceSnap.data().balance || 0;
      await updateDoc(balanceRef, { balance: currentBalance + reward });
    }

    // もう一度タスク一覧を取得して画面を更新
    fetchTasks();
  }

  return (
    <Box sx={{ m: 3 }}>
      <Typography variant="h4" gutterBottom>
        家事ミッション
      </Typography>

      {tasks.map(task => (
        <Paper key={task.id} sx={{ p: 2, mb: 2 }}>
          <Typography variant="h6">
            {task.title} ({task.reward}円)
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleComplete(task.id, task.reward)}
            disabled={task.done}
            sx={{ mt: 1 }}
          >
            {task.done ? '完了済' : '完了する'}
          </Button>
        </Paper>
      ))}
    </Box>
  );
}


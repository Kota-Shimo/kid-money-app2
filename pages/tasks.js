// pages/tasks.js
import { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { Typography, Grid } from '@mui/material';
import TaskItem from '../components/TaskItem';

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    const snapshot = await getDocs(collection(db, 'tasks'));
    const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    setTasks(list);
  }

  async function handleComplete(taskId, reward) {
    // タスクの done: true
    await updateDoc(doc(db, 'tasks', taskId), { done: true });
    // 残高に報酬を加算
    const balanceRef = doc(db, 'appState', 'common');
    const balanceSnap = await getDoc(balanceRef);
    if (balanceSnap.exists()) {
      const currentBalance = balanceSnap.data().balance || 0;
      await updateDoc(balanceRef, { balance: currentBalance + reward });
    }
    // 再取得
    fetchTasks();
  }

  return (
    <>
      <Typography variant="h5" gutterBottom>
        家事ミッション
      </Typography>
      <Grid container spacing={2}>
        {tasks.map((task) => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <TaskItem task={task} onComplete={handleComplete} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

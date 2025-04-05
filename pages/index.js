// pages/index.js
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import Link from 'next/link';
import { LinearProgress, Typography, Box } from '@mui/material';

export default function HomePage() {
  const [balance, setBalance] = useState(0);
  const [goalAmount, setGoalAmount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const ref = doc(db, 'appState', 'common');
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        setBalance(data.balance);
        setGoalAmount(data.goalAmount);
      }
    }
    fetchData();
  }, []);

  const progress = goalAmount > 0 ? (balance / goalAmount) * 100 : 0;

  return (
    <Box sx={{ m: 3 }}>
      <Typography variant="h4" gutterBottom>
        子どもマネー
      </Typography>

      <Typography>現在の残高: {balance}円</Typography>
      <Typography>目標金額: {goalAmount}円</Typography>

      <Box sx={{ my: 2, width: '80%', maxWidth: 400 }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>

      <nav>
        <Link href="/tasks" style={{ marginRight: 20 }}>家事ミッション</Link>
        <Link href="/goal" style={{ marginRight: 20 }}>貯金目標</Link>
        <Link href="/study">学習ページ</Link>
      </nav>
    </Box>
  );
}

// pages/index.js
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { LinearProgress, Typography, Card, CardContent, Box } from '@mui/material';

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
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          ホーム
        </Typography>

        <Typography variant="body1">
          現在の残高: <strong>{balance} 円</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          目標金額: <strong>{goalAmount} 円</strong>
        </Typography>

        <Box sx={{ mb: 1 }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
        <Typography variant="body2" color="textSecondary">
          達成率: {Math.floor(progress)}%
        </Typography>
      </CardContent>
    </Card>
  );
}

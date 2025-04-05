// pages/goal.js
import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { Box, Button, TextField, Typography } from '@mui/material';

export default function GoalPage() {
  const [goalAmount, setGoalAmount] = useState(0);
  const [goalDesc, setGoalDesc] = useState('');

  useEffect(() => {
    loadGoal();
  }, []);

  async function loadGoal() {
    const ref = doc(db, 'appState', 'common');
    const snap = await getDoc(ref);
    if (snap.exists()) {
      const data = snap.data();
      setGoalAmount(data.goalAmount || 0);
      setGoalDesc(data.goalDesc || '');
    }
  }

  async function saveGoal() {
    const ref = doc(db, 'appState', 'common');
    await updateDoc(ref, {
      goalAmount: Number(goalAmount),
      goalDesc
    });
    alert('目標を保存しました');
  }

  return (
    <Box sx={{ m: 3 }}>
      <Typography variant="h4" gutterBottom>
        貯金目標設定
      </Typography>
      <Box sx={{ mb: 2 }}>
        <TextField
          type="number"
          label="目標金額"
          value={goalAmount}
          onChange={(e) => setGoalAmount(e.target.value)}
          sx={{ mr: 2 }}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="目標の説明"
          value={goalDesc}
          onChange={(e) => setGoalDesc(e.target.value)}
          sx={{ mr: 2 }}
        />
      </Box>
      <Button variant="contained" onClick={saveGoal}>
        保存
      </Button>
    </Box>
  );
}


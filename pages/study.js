// pages/study.js
import { Box, Typography } from '@mui/material';

export default function StudyPage() {
  return (
    <Box sx={{ m: 3 }}>
      <Typography variant="h4" gutterBottom>
        お金の勉強ページ
      </Typography>
      <Typography sx={{ mb: 2 }}>
        ここでは、おこづかいの使い方や貯金の大切さを学べます。
      </Typography>
      <Typography>
        1. お金を使う前にゴールを決めよう <br />
        2. 欲しいものより必要なものを優先しよう <br />
        3. 小さなお手伝いでもコツコツと報酬を得よう
      </Typography>
      <Typography sx={{ mt: 2 }}>
        将来はクイズや動画も追加予定！
      </Typography>
    </Box>
  );
}


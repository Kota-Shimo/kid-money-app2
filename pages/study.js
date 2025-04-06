// pages/study.js
import { Typography, Card, CardContent } from '@mui/material';

export default function StudyPage() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          お金の勉強ページ
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          ここでは、おこづかいの使い方や貯金の大切さを学べます。
        </Typography>
        <Typography variant="body2" paragraph>
          1. お金を使う前にゴールを決めよう<br />
          2. 欲しいものより必要なものを優先しよう<br />
          3. 小さなお手伝いでもコツコツと報酬を得よう<br />
        </Typography>
        <Typography variant="body1">
          今後、クイズ機能や動画も追加予定です！お楽しみに！
        </Typography>
      </CardContent>
    </Card>
  );
}

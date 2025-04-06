// components/Layout.js
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      {/* ヘッダー */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            子どもマネー
          </Typography>
          {/* ヘッダーナビゲーション例 */}
          <Link href="/" style={{ color: '#fff', marginRight: 16 }}>HOME</Link>
          <Link href="/tasks" style={{ color: '#fff', marginRight: 16 }}>家事ミッション</Link>
          <Link href="/goal" style={{ color: '#fff', marginRight: 16 }}>貯金目標</Link>
          <Link href="/study" style={{ color: '#fff' }}>学習</Link>
        </Toolbar>
      </AppBar>

      {/* メインコンテンツ */}
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        {children}
      </Container>

      {/* フッター */}
      <Box
        component="footer"
        sx={{ bgcolor: 'primary.main', color: 'white', py: 2, textAlign: 'center' }}
      >
        <Typography variant="body2">
          © 2025 Kid Money App
        </Typography>
      </Box>
    </>
  );
}

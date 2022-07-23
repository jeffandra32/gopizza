import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';

import theme from '@theme/index';

export const Container = styled<any>(LinearGradient).attrs(() => ({
  colors: theme.COLORS.GRADIENT,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 },
}))`
  flex: 1;
  justify-content: center;
`;

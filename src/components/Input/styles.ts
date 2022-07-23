import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

import theme from '@src/theme';

export type TypeProps = 'primary' | 'secondary';

type Props = {
  type: TypeProps;
};

export const Container = styled<any>(TextInput).attrs<Props>(({ type }) => ({
  placeholderTextColor:
    type === 'primary' ? theme.COLORS.SECONDARY_900 : theme.COLORS.PRIMARY_50,
}))<Props>`
  width: 100%;
  height: 56px;
  background-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 16px;

  ${({ type }) => css`
    font-family: ${theme.FONTS.TEXT};
    border: 1px solid ${theme.COLORS.SHAPE};
    color: ${type === 'primary'
      ? theme.COLORS.SECONDARY_900
      : theme.COLORS.TITLE};
  `};
`;

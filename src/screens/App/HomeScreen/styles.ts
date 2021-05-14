import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.surface};
`

export const TextPrimary = styled.Text`
  font-size: 22px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
`

export const Spacing = styled.View`
  margin-top: 5px;
`

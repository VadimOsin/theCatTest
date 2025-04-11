import styled from 'styled-components';
import { FC } from 'react';

interface HeaderProps {
  isAutoRefresh: boolean;
  onAutoRefreshChange: (checked: boolean) => void;
  onGetCat: () => void;
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Button = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Header: FC<HeaderProps> = ({
  isAutoRefresh,
  onAutoRefreshChange,
  onGetCat,
}) => {
  return (
    <HeaderWrapper>
      <CheckboxWrapper>
        <input
          type="checkbox"
          checked={isAutoRefresh}
          onChange={(e) => onAutoRefreshChange(e.target.checked)}
          id="auto-refresh"
        />
        <label htmlFor="auto-refresh">Auto-refresh every 5 second</label>
      </CheckboxWrapper>
      <Button onClick={onGetCat}>Get cat</Button>
    </HeaderWrapper>
  );
}; 
import styled from 'styled-components';
import Image from 'next/image';
import { FC } from 'react';

interface CatCardProps {
  imageUrl: string;
}

const CardWrapper = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const CatCard: FC<CatCardProps> = ({ imageUrl }) => {
  // Преобразуем URL, чтобы он соответствовал разрешенным доменам
  const processedImageUrl = imageUrl.replace(/^https:\/\/cdn[0-9]*.thecatapi.com/, 'https://cdn2.thecatapi.com');

  return (
    <CardWrapper>
      <StyledImage
        src={processedImageUrl}
        alt="Cat"
        fill
        priority
      />
    </CardWrapper>
  );
}; 
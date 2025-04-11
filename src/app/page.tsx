'use client';

import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CatCard } from '@/components/CatCard';
import { Header } from '@/components/Header';

const API_KEY = 'live_J1nTdAmow46ZoajtuOxXSByIVsARMuVoSQOpzIuwqeV56Qc2d0mwQqP5FjtZFUTg';
const API_URL = 'https://api.thecatapi.com/v1/images/search';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export default function Home() {
  const [catImage, setCatImage] = useState<string>('');
  const [isAutoRefresh, setIsAutoRefresh] = useState(false);

  const fetchCat = useCallback(async () => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          'x-api-key': API_KEY,
        },
      });
      const [data] = await response.json();
      setCatImage(data.url);
    } catch (error) {
      console.error('Error fetching cat:', error);
    }
  }, []);

  useEffect(() => {
    fetchCat();
  }, [fetchCat]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoRefresh) {
      interval = setInterval(fetchCat, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoRefresh, fetchCat]);

  return (
    <Container>
      <Header
        isAutoRefresh={isAutoRefresh}
        onAutoRefreshChange={setIsAutoRefresh}
        onGetCat={fetchCat}
      />
      {catImage && <CatCard imageUrl={catImage} />}
    </Container>
  );
} 
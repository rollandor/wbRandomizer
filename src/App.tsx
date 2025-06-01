import React, { useState, useCallback } from 'react';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Dice } from './components/Dice';
import { NumberDisplay } from './components/NumberDisplay';
import { GenerateButton } from './components/GenerateButton';
import './styles/global.css';
import { MAX_THRESHOLD, MIN_THRESHOLD } from './constants';

const App: React.FC = () => {
  const [number, setNumber] = useState<string>('- - - - - -');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateNumber = useCallback(() => {
    setIsGenerating(true);
    setNumber('...');

    setTimeout(() => {
      const min = MIN_THRESHOLD;
      const max = MAX_THRESHOLD;
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      
      setNumber(randomNumber.toLocaleString());
      setIsGenerating(false);

      // Open in new tab
      const dynamicUrl = `https://www.wildberries.ru/catalog/${randomNumber}/detail.aspx`;
      window.open(dynamicUrl, '_blank');
    }, 500);
  }, []);

  return (
    <Layout>
      <Header
        title="Random WB's item generator"
        description="Get a random item on the WB's platform"
      />
      <Dice />
      <NumberDisplay value={number} />
      <GenerateButton onClick={generateNumber} isGenerating={isGenerating} />
      <div className="mt-8 text-sm text-gray-500">
        <p>Your random WB's item will open in a new tab</p>
      </div>
    </Layout>
  );
};

export default App;

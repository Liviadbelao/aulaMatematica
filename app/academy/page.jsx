'use client'
import React, { useState } from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import Buttons from '../components/buttons/Buttons';
import styles from './academy.module.css';

const StatisticsCalculator = () => {
  const [inputs, setInputs] = useState(Array(23).fill(''));
  const [statistics, setStatistics] = useState({
    mean: 0,
    mode: 'No data',
    median: 0,
    meanDeviation: 0,
    variance: 0,
    standardDeviation: 0
  });
  const [showDetails, setShowDetails] = useState({
    mean: false,
    mode: false,
    median: false,
    meanDeviation: false,
    variance: false,
    standardDeviation: false
  });

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const calculateStatistics = () => {
    const dataArray = inputs.map(input => parseFloat(input)).filter(value => !isNaN(value));

    if (dataArray.length === 0) {
      alert('Por favor, insira pelo menos um valor numérico válido.');
      return;
    }

    const mean = calculateMean(dataArray);
    const mode = calculateMode(dataArray);
    const median = calculateMedian(dataArray);
    const meanDeviation = calculateMeanDeviation(dataArray, mean);
    const variance = calculateVariance(dataArray, mean);
    const standardDeviation = calculateStandardDeviation(variance);

    setStatistics({
      mean,
      mode,
      median,
      meanDeviation,
      variance,
      standardDeviation
    });
  };

  const calculateMean = (dataArray) => {
    const sum = dataArray.reduce((acc, val) => acc + val, 0);
    return sum / dataArray.length;
  };

  const calculateMode = (dataArray) => {
    const countMap = {};
    dataArray.forEach(num => {
      countMap[num] = (countMap[num] || 0) + 1;
    });

    let maxCount = 0;
    let modes = [];
    for (const num in countMap) {
      const count = countMap[num];
      if (count > maxCount) {
        maxCount = count;
        modes = [num];
      } else if (count === maxCount) {
        modes.push(num);
      }
    }

    return modes.length === dataArray.length ? 'No mode' : modes;
  };

  const calculateMedian = (dataArray) => {
    const sortedArray = dataArray.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2 === 0) {
      return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
    } else {
      return sortedArray[middleIndex];
    }
  };

  const calculateMeanDeviation = (dataArray, mean) => {
    const sum = dataArray.reduce((acc, val) => acc + Math.abs(val - mean), 0);
    return sum / dataArray.length;
  };

  const calculateVariance = (dataArray, mean) => {
    const sum = dataArray.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
    return sum / dataArray.length;
  };

  const calculateStandardDeviation = (variance) => {
    return Math.sqrt(variance);
  };

  const toggleDetails = (statistic) => {
    setShowDetails(prevState => ({
      ...prevState,
      [statistic]: !prevState[statistic]
    }));
  };

  return (
    <div>
      <Header />
      <div className={styles.mainDiv}>
        <h2 style={{ color: 'white' }}>Insira os valores que deseja calcular:</h2>
        {inputs.map((input, index) => (
          <div key={index}>
            <input
              className={styles.inp}
              type="number"
              value={input}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder={`Input ${index + 1}`}
            />
            <br />
          </div>
        ))}
        <Buttons fn={calculateStatistics} text={'Calcular'} />
        <div className={styles.valores}>
          <h2>Valores:</h2>
          <p style={{ marginTop: '20px' }} onClick={() => toggleDetails('mean')}>Média: {statistics.mean}</p>
          {showDetails.mean && (
            <p style={{ marginTop: '20px', color: 'blue' }}>
              Calculo da Média:
              <br />
              <span style={{ marginLeft: '20px' }}>Média = (x1 + x2 + ... + xn) / n</span>
            </p>
          )}
          <p style={{ marginTop: '20px' }} onClick={() => toggleDetails('mode')}>Moda: {statistics.mode}</p>
          {showDetails.mode && (
            <p style={{ marginTop: '20px', color: 'blue' }}>
              Calculo da Moda:
              <br />
              <span style={{ marginLeft: '20px', color: 'blue' }}>Conte a frequência de cada número e encontre aquele(s) com maior frequência</span>
            </p>
          )}
          <p style={{ marginTop: '20px' }} onClick={() => toggleDetails('median')}>Mediana: {statistics.median}</p>
          {showDetails.median && (
            <p style={{ marginTop: '20px', color: 'blue' }}>
              Calculo Mediana:
              <br />
              <span style={{ marginLeft: '20px' }}>Classifique todos os números em ordem crescente e encontre o(s) valor(es) intermediário(s)</span>
            </p>
          )}
          <p style={{ marginTop: '20px' }} onClick={() => toggleDetails('meanDeviation')}>Desvio Médio: {statistics.meanDeviation}</p>
          {showDetails.meanDeviation && (
            <p style={{ marginTop: '20px', color: 'blue' }}>
              Calculo Desvio Médio:
              <br />
              <span style={{ marginLeft: '20px' }}>Desvio Médio = Σ |x - média| / n</span>
            </p>
          )}
          <p style={{ marginTop: '20px' }} onClick={() => toggleDetails('variance')}>Variância: {statistics.variance}</p>
          {showDetails.variance && (
            <p style={{ marginTop: '20px', color: 'blue' }}>
              Calculo da Variância:
              <br />
              <span style={{ marginLeft: '20px' }}>Variância = Σ (x - média)² / n</span>
            </p>
          )}
          <p style={{ marginTop: '20px' }} onClick={() => toggleDetails('standardDeviation')}>Desvio Padrão: {statistics.standardDeviation}</p>
          {showDetails.standardDeviation && (
            <p style={{ marginTop: '20px', color: 'blue' }}>
              Calculo Desvio Padrão:
              <br />
              <span style={{ marginLeft: '20px' }}>Desvio Padrão = √(Variância)</span>
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StatisticsCalculator;






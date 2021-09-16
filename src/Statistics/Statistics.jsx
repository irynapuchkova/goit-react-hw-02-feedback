import React from "react";

import { CounterList, CounterItem, Counter, Percentage, Total} from './Statistics.styled';
  

export default function Statistics({options, onTotal, onPosivePercent}) {

  const total = onTotal();
  const positivePercentage = Number.parseInt(onPosivePercent(total));
  
  return (
    <CounterList>
        
      <CounterItem>Good:
        <Counter>{options.good}</Counter></CounterItem>
      <CounterItem>Neutral:
        <Counter>{options.neutral}</Counter></CounterItem>
      <CounterItem>Bad:
        <Counter>{options.bad}</Counter></CounterItem>
        
      <CounterItem>Total: 
        <Total>{total}
        </Total>
      </CounterItem>
        
      <CounterItem>Positive feedback: 
        <Percentage>
          {positivePercentage >= 0
            ? positivePercentage
            : 0} %
        </Percentage>
        </CounterItem>
      </CounterList>
  )
}
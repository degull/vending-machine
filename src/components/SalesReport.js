import React, { useState } from 'react';

const SalesReport = () => {
  // 가상의 주문 정보
  const orders = [
    { id: 1, amount: 100, date: '2024-06-01' },
    { id: 2, amount: 150, date: '2024-06-01' },
    { id: 3, amount: 200, date: '2024-06-02' },
    { id: 4, amount: 120, date: '2024-06-02' },
    // 추가 주문 정보...
  ];

  // 일별 매출 계산
  const dailySales = orders.reduce((acc, order) => {
    const date = order.date;
    acc[date] = (acc[date] || 0) + order.amount;
    return acc;
  }, {});

  // 월별 매출 계산
  const monthlySales = orders.reduce((acc, order) => {
    const month = order.date.slice(0, 7); // 'YYYY-MM' 형식
    acc[month] = (acc[month] || 0) + order.amount;
    return acc;
  }, {});

  return (
    <div>
      <h2>일별 매출</h2>
      <ul>
        {Object.entries(dailySales).map(([date, sales]) => (
          <li key={date}>{date}: ${sales}</li>
        ))}
      </ul>

      <h2>월별 매출</h2>
      <ul>
        {Object.entries(monthlySales).map(([month, sales]) => (
          <li key={month}>{month}: ${sales}</li>
        ))}
      </ul>
    </div>
  );
};

export default SalesReport;

import React, { useEffect, useState } from 'react';
import { fetchHolidays } from '../../api/holidayApi';

function HolidayList() {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetchHolidays();
      setHolidays(res.data);
    }
    load();
  }, []);

  return (
    <div className="mt-3">
      <h5>Holiday List</h5>
      <ul>
        {holidays.map((h, i) => (
          <li key={i}>{h.date} - {h.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default HolidayList;

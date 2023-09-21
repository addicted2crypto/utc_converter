
import React, { useState } from 'react';
import moment from 'moment-timezone';

const UtcConverter: React.FC = () => {
    const [utcTime, setUtcTime] = useState<string>('');
    const [selectedTimeZone, setSelectedTimeZone] = useState<string>('');

    const convertTime = () => {
        if (!utcTime || !selectedTimeZone) {
            alert('Please enter UTC time and select a time zone.');
            return;
        }

        const convertedTime = moment.utc(utcTime).tz(selectedTimeZone).format('HH:mm:ss');
        alert(`Converted Time: ${convertedTime}`);
    };

    return (
        <div>
            <h1>Addicteds UTC to Real Time zones Converter</h1>
            <label htmlFor="utcTime">UTC Time:</label>
            <input type="text" id="utcTime" value={utcTime} onChange={(e) => setUtcTime(e.target.value)} placeholder="Format: HH:mm:ss" />
            <label htmlFor="timezone">Select Time Zone:</label>
            <select id="timezone" value={selectedTimeZone} onChange={(e) => setSelectedTimeZone(e.target.value)}>
                <option value="">Select a Time Zone</option>
                <option value="America/New_York">New York</option>
                <option value="America/Los_Angeles">Los Angeles</option>
                {/* will add more times after testing here */}
                {/* Add more time zones here */}
            </select>
            <button onClick={convertTime}>Magic Math</button>
        </div>
    );
};

export default UtcConverter;

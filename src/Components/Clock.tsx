import React, { useEffect, useState } from 'react';

interface Clock{
    currenttime: string;
    timezone: string;
    country: string;
}

const Clock = () => {
    const [currenttime, setcurrenttime] = useState<string>(new Date().toLocaleTimeString());
    const [timezone, settimezone] = useState<string>(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [country, setcountry] = useState<string>('US');

    const updateTime = () => {
        const date = new Date();
        const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
        setcurrenttime(date.toLocaleTimeString('en-US', options));
    };

    useEffect(() => {
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, [timezone]);

    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCountry = event.target.value;
        setcountry(selectedCountry);
        switch (selectedCountry) {
            case 'US':
                settimezone('America/New_York');
                break;
            case 'IN':
                settimezone('Asia/Kolkata');
                break;
            case 'JP':
                settimezone('Asia/Tokyo');
                break;
            case 'CN':
                settimezone('Asia/Shanghai');
                break;
            case 'KR':
                settimezone('Asia/Seoul');
                break;
            default:
                settimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto bg-white shadow-2xl rounded-lg p-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-indigo-600"> World Time</h1>

      
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
        <p className="text-2xl font-semibold text-gray-700">
           Current Time: <span className="text-indigo-500">{currenttime}</span>
        </p>
        <p className="text-2xl font-semibold text-gray-700">
           Date: <span className="text-indigo-500">{new Date().toLocaleDateString()}</span>
        </p>
        <p className="text-2xl font-semibold text-gray-700">
           Country: <span className="text-indigo-500">{country}</span>
        </p>
        <p className="text-2xl font-semibold text-gray-700">
           Time Zone: <span className="text-indigo-500">{timezone}</span>
        </p>
      </div>

      
      <label className="block text-lg font-medium text-gray-700 mb-2">
        Select Country:
      </label>
      <select
        value={country}
        onChange={handleCountryChange}
        className="bg-indigo-50 border border-indigo-300 text-gray-900 text-lg rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 shadow-md transition"
      >
        <option value="US">🇺🇸 United States</option>
        <option value="IN">🇮🇳 India</option>
        <option value="JP">🇯🇵 Japan</option>
        <option value="CN">🇨🇳 China</option>
        <option value="KR">🇰🇷 Korea</option>
      </select>
    </div>
    );
};

export default Clock;

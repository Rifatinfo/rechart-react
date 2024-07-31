import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const StraightChart = () => {

    const temperatureData = [
        { name: 'January', temperature: 30, uv: 400, pv: 2400 },
        { name: 'February', temperature: 32, uv: 420, pv: 2500 },
        { name: 'March', temperature: 45, uv: 430, pv: 2600 },
        { name: 'April', temperature: 55, uv: 440, pv: 2700 },
        { name: 'May', temperature: 65, uv: 450, pv: 2800 },
        { name: 'June', temperature: 75, uv: 460, pv: 2900 },
        { name: 'July', temperature: 80, uv: 470, pv: 3000 },
        { name: 'August', temperature: 78, uv: 480, pv: 3100 },
        { name: 'September', temperature: 70, uv: 490, pv: 3200 },
        { name: 'October', temperature: 60, uv: 500, pv: 3300 },
        { name: 'November', temperature: 50, uv: 510, pv: 3400 },
        { name: 'December', temperature: 35, uv: 520, pv: 3500 }
      ];
      

    return (
        <div>
            <BarChart width={600} height={300} data={temperatureData}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
            <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="uv" fill="#8884d8" barSize={30} />
            <Bar dataKey="pv" fill="#8884d8" barSize={30} />
            </BarChart>
        </div>
    );
};

export default StraightChart;
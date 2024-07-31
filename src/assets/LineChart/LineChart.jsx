import { LineChart as LCharts, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const LineChart = () => {
    const mathMarksData = [
        { student_id: 1, name: "Alice", math: 85, physics: 78, chemistry: 82 },
        { student_id: 2, name: "Bob", math: 78, physics: 74, chemistry: 80 },
        { student_id: 3, name: "Charlie", math: 92, physics: 85, chemistry: 88 },
        { student_id: 4, name: "Diana", math: 88, physics: 90, chemistry: 85 },
        { student_id: 5, name: "Eve", math: 74, physics: 69, chemistry: 73 },
        { student_id: 6, name: "Frank", math: 80, physics: 75, chemistry: 78 },
        { student_id: 7, name: "Grace", math: 95, physics: 92, chemistry: 94 },
        { student_id: 8, name: "Hank", math: 67, physics: 60, chemistry: 65 },
        { student_id: 9, name: "Ivy", math: 91, physics: 88, chemistry: 90 },
        { student_id: 10, name: "Jack", math: 82, physics: 81, chemistry: 83 }
      ];
      

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <LCharts data={mathMarksData}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="marks" stroke="red" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="physics" stroke="green" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="chemistry" stroke="purple" activeDot={{ r: 8 }} />
        </LCharts>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;

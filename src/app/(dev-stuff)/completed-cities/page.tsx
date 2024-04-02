import { cityData } from '@/data/cityData';

const CompletedCities = () => {
  return (
    <div className="content-grid">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>City</th>
            <th>Region</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {cityData.map((item, index) => (
            <tr key={index}>
              <td>{item.city}</td>
              <td>{item.region}</td>
              <td>{item.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompletedCities;

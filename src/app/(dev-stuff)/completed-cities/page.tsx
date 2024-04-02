import { cityData } from '@/data/cityData';

const CompletedCities = () => {
  return (
    <div className="content-grid">
      <h2 className="underline-full mt-16">Completed Cities</h2>
      <p>
        Below is a list of cities that have content and pages created for them.
        In order to see the latest list it must be uploaded to main or viewed on
        your local host!
      </p>
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

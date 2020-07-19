// gets devices on load
import React from 'react';
// import './DeviceTable.scss';
import useAxios from 'axios-hooks';
import Loader from './Loader';
import { Link } from 'react-router-dom';
const DeviceTable = ({ }) => {
  const [{ data, loading, error }, refreshHandler] = useAxios('/devices')
  return (
    <div>
      <button onClick={refreshHandler}>Refresh</button>
      {loading && <Loader />}
      {error && (
        <details>
          <summary>Error</summary>
          {error}
        </details>
      )}
      <table>
        <thead>
          <tr>

            <th>
              Remote Device ID
          </th>
            <th>
              Battery Level
          </th>
            <th>
              Interface Type
          </th>
            <th>
              Has Neighbours
          </th>
            <th>
              Date
          </th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ?
            data.map(device => (
              <tr>
                <td>
                  <Link to={`/device/${device.remoteDeviceId}`}>
                    {device.remoteDeviceId}
                  </Link>
                </td>
                <td>{device.level}</td>
                <td>{device.interface}</td>
                <td><input type='checkbox' readOnly checked={device.neighbours.length > 0} /></td>
                <td>{Date(device.time).toString()}</td>
              </tr>
            )) :
            'No Devices Found'}
        </tbody>
      </table>
    </div>
  )
};
export default DeviceTable;

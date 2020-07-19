import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useAxios from 'axios-hooks';
const DeviceDetail = ({ }) => {
  const { deviceId } = useParams()
  const [{ data, loading, error }, refreshHandler] = useAxios(`/devices/${deviceId}`)
  return (
    <div>
      {data &&
        <>
          <h2>
            Device: {deviceId}
          </h2>
          <div><strong>Level:</strong>{data.level}</div>
          <div><strong>Interface</strong>{data.interface}</div>
          <ul>
            <strong>Neighbours: </strong>
            {data?.neighbours?.length > 0 && data.neighbours.map(neighbour => (
              <li><Link to={`/device/${neighbour}`}>{neighbour}</Link></li>
            ))}
          </ul>
          <div>
            <strong>
              Updated:
        </strong>
            {Date(data.time).toString()}</div>
        </>}
    </div >
  )
};
export default DeviceDetail;

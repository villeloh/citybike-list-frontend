import React from 'react';

export default function StationListItem (props) {

  return (
    <div className="Station-List-Item">
       <table>
        <tr>
          <td>{props.name || ''}</td>
          <td>{props.address || ''}</td>
        </tr>
      </table> 
    </div>
  );
}
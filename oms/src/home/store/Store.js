import React from "react";

import { useNavigate } from "react-router-dom";

const Store = () => {
  const navigate = useNavigate();

  const viewItem = () => {
    navigate("/home/item");
  };

  return (
    <div>
      <h1>Stores</h1>

      <input type="button" value="Add" />

      <table border="1">
        <tbody>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Owner</th>

            <th>Actions</th>
          </tr>

          {stores.map((store) => {
            return (
              <tr key={store?.id}>
                <td>{store?.id}</td>
                <td>{store?.name}</td>
                <td>{store?.owner}</td>
                <td>
                  <input type="button" value="View" onClick={viewItem} />
                  &nbsp;
                  <input type="button" value="Update" />
                  &nbsp;
                  <input type="button" value="Delete" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Store;

const stores = [
  { id: "100", name: "SMart", owner: "Sreekanth" },
  { id: "200", name: "SMart", owner: "Sreekanth" },
  { id: "300", name: "SMart", owner: "Sreekanth" },
  { id: "400", name: "SMart", owner: "Sreekanth" },
  { id: "500", name: "SMart", owner: "Sreekanth" },
];

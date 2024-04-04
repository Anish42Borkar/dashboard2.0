import React from "react";

type ProductT = {
  name: string;
  description: string;
  image: string;
};

export type TableT = {
  product: ProductT;
  stock: number;
  price: number;
  totalSales: number;
};

const Table = ({ data }: { data: TableT[] }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right  ">
        <thead className="text-xs border-b text-[#c3c4ca]   ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product Name
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Total Sales
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index} className="bg-white border-b hover:bg-gray-50 ">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                >
                  <img
                    className="w-16 h-10 rounded-xl object-cover"
                    src={item.product.image}
                    alt="Jese image"
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">
                      {item.product.name}
                    </div>
                    <div className="font-normal text-gray-500">
                      {item.product.description}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{item.stock} in stock</td>
                <td className="px-6 py-4 font-bold">$&nbsp;{item.price}</td>
                <td className="px-6 py-4">{item.totalSales}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

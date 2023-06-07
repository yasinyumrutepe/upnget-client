// ** React Imports
import { Fragment, useState, useEffect, memo } from "react";

// ** Table Columns

// ** Third Party Components
import { ChevronDown } from "react-feather";
import DataTable from "react-data-table-component";

// ** Reactstrap Imports
import { Button, Card, CardHeader, CardTitle } from "reactstrap";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const data = [
  {
    id: 1,
    name: "Tiger Nixon",
    my_bid: "$320,800",
    last_bid: "$320,800",
    status: "Winning",
  },
  {
    id: 2,
    name: "Garrett Winters",
    my_bid: "$310,800",
    last_bid: "$320,800",
    status: "Losing",
  },
];

const DataTableServerSide = ({ data }) => {
  const columns = [
    {
      sortable: true,
      name: "Product Name",
      minWidth: "225px",
      selector: (row) => row.name,
    },
    {
      sortable: true,
      name: "Category",
      minWidth: "225px",
      selector: (row) => row.category.name,
    },
    {
      sortable: true,
      name: "Last Bid",
      minWidth: "225px",
      selector: (row) =>
        row.bids ? "$" + row.bids[row.bids.length - 1].price : "------",
    },
    {
      sortable: true,
      name: "Winner",
      minWidth: "225px",
      selector: (row) => {
        if (row.bids) {
          const endDate = moment(row.end_date);
          const today = moment();
          if (today.isAfter(endDate)) {
            const lastBidSeller =
              row.bids[row.bids.length - 1].seller.identification;
            return lastBidSeller.name + " " + lastBidSeller.surname;
          } else {
            return "-----";
          }
        } else {
          return "------";
        }
      },
    },
    {
      sortable: true,
      name: "Actions",
      minWidth: "225px",
      cell: (row) => (
        <Button
          color="primary"
          size="sm"
          onClick={() => navigate("/live/product/detail/" + row.id)}
        >
          Go to product
        </Button>
      ),
    },
  ];

  const navigate = useNavigate();
  // ** Store Vars

  // ** States

  // ** Get data on mount
  useEffect(() => {
    // dispatch(
    //   getData({
    //     page: currentPage,
    //     perPage: rowsPerPage,
    //     q: searchValue
    //   })
    // )
  }, []);

  return (
    <Fragment>
      <Card>
        <CardHeader className="border-bottom">
          <CardTitle tag="h4">My Bids</CardTitle>
        </CardHeader>

        <div className="react-dataTable">
          <DataTable
            noHeader
            pagination
            paginationServer
            className="react-dataTable"
            columns={columns}
            sortIcon={<ChevronDown size={10} />}
            data={data}
          />
        </div>
      </Card>
    </Fragment>
  );
};

export default memo(DataTableServerSide);

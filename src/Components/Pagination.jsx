import React, { Component } from "react";
import UserData from "./UserData";

class Pagination extends Component {
  constructor() {
    super();
  }
  state = {
    UserData: null,
    pageNumber: 0,
  };
  componentDidMount() {
    this.Fetchuserdata();
  }
  componentDidUpdate(preprops, prestate) {
    if (prestate.pageNumber !== this.state.pageNumber) {
      this.Fetchuserdata();
    }
  }

  Fetchuserdata = async () => {
    const response = await fetch(
      `https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,
      { method: "GET", headers: { "app-id": "633e33e98efd49504c9c7643" } }
    );
    const { data } = await response.json();
    console.log(data);
    this.setState({ UserData: data });
  };
  handlePageNumber(num) {
    this.setState({ pageNumber: num });
    // console.log(num);
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <h2>Pagination</h2>
          <div className="row">
            {this.state.UserData && this.state.UserData.length > 0 ? (
              this.state.UserData.map((user) => (
                <div className="col-lg-6">
                  <div className="card">
                    <div className="row">
                      <div className="col-lg-4">
                        <img src={user.picture} alt={user.title} />
                      </div>
                      <div className="col-lg-8">
                        <h6>{user.id}</h6>
                        <p>
                          {user.firstName} {user.lastName}{" "}
                        </p>
                        {/* <p>{user.firstName}</p>
                        <p>{user.lastName}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="row">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div className="col-lg-1">
                <button
                  className="btn btn-primary"
                  onClick={() => this.handlePageNumber(num)}
                >
                  {num}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;

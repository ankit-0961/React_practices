// import React, { Component } from 'react'

// class Users extends Component {
//     constructor(){
//         super()
//     };
//     state={
//      UserData:[],
//     };
//      componentDidMount(){
//      this.fetchData();
//      };
//      fetchData=async()=>{
//       const response=await fetch("https://jsonplaceholder.typicode.com/users")
//       const Data =await response.json();
//       this.setState({UserData:Data});
//      };

//   render() {
//     console.log(this.state);
    
//     return (
//         <>
//         <h2>users</h2>
//       {this.state.UserData && this.state.UserData.length > 0 ? (
//           <table className="table">
//             <thead>
//               <tr>
//                 <th scope="col">ID</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">UserName</th>
//                 <th scope="col">Email</th>
//                 <th scope="col">Zipcode</th>
//               </tr>
//             </thead>
//             <tbody>
//               {this.state.UserData.length > 0 &&
//                 this.state.UserData.map((user) => (
//                   <tr key={user.id}>
//                     <td>{user.id}</td>
//                     <td>{user.name}</td>
//                     <td>{user.username}</td>
//                     <td>{user.email}</td>
//                     <td>{user.address.zipcode}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>Loading...</p>
//         )}
        
      
// </>
//     )
//   }
// }

// export default Users



import React, { Component, Fragment } from "react";

class Users extends Component {
  constructor() {
    super();
  }
  state = {
    userData:[],
  };
  static getDerivedStateFromProps() {
    return null;
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.setState({ userData: data });
  };

  render() {
    console.log(this.state);

    return (
      <>
        <h2>Users</h2>
        {this.state.userData && this.state.userData.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Zipcode</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userData.length > 0 &&
                this.state.userData.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.address.zipcode}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
      </>
    );
  }
}

export default Users;
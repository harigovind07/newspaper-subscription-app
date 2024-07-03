import React from 'react'

const View = () => {
  return (
    <div>
      <div className="container">
      <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand"><b>INSIGHT NEWS</b></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/"><b>Add</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/View"><b>View</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/Search"><b>Search</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Delete"><b>Delete</b></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="card">
  <div class="card-body">
                <div className="row">
                <div className="row" style={{ marginTop: '75px' }}>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <h5>LIST OF SUBSCRIBERS</h5>
                </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="card">
                    <div class="card-body">
                    <table class="table">
                        
  <thead>
    <tr>
      <th scope="col">Subscriber Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Address</th>
      <th scope="col">Pincode</th>
      <th scope="col">District</th>
      <th scope="col">Village Office</th>
      <th scope="col">Email ID</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="row">Rajesh Kumar</th>
      <td>9897654321</td>
      <td>House No. 23, XYZ Road</td>
      <td>680001</td>
      <td>Thrissur</td>
      <td>Thrissur East</td>
      <td>rajesh@example.com</td>
    </tr>
    <tr>
    <th scope="row">Shiny Nair</th>
      <td>9876543210</td>
      <td>Flat No. 5, ABC Apartments</td>
      <td>695001</td>
      <td>Thiruvananthapuram</td>
      <td>Vizhinjam</td>
      <td>shiny.nair@email.com</td>
    </tr>
    <tr>
    <th scope="row">Anil Menon</th>
      <td>9743210897</td>
      <td>Sreevalsam, Kunnukuzhi</td>
      <td>695004</td>
      <td>Thiruvananthapuram</td>
      <td>Kunnukuzhi</td>
      <td>anil.menon@example.com</td>
    </tr>
    <tr>
    <th scope="row">Deepa Suresh</th>
      <td>9567890123</td>
      <td>Jyothi Nivas, MG Road</td>
      <td>682001</td>
      <td>Ernakulam</td>
      <td>Kochi North</td>
      <td>deepa.suresh@email.com</td>
    </tr>
    <tr>
    <th scope="row">Arjun Menon</th>
      <td>9442109876</td>
      <td>Thottathil, Pala</td>
      <td>686001</td>
      <td>Kottayam</td>
      <td>Pala</td>
      <td>arjun.menon@email.com</td>
    </tr>
    <tr>
    <th scope="row">Meera Nair</th>
      <td>9076543210</td>
      <td>Varikkattu, Kollam</td>
      <td>691001</td>
      <td>Kollam</td>
      <td>Kollam South</td>
      <td>meera.nair@example.com</td>
    </tr>
    <tr>
    <th scope="row">Praveen Kumar</th>
      <td>9898765432</td>
      <td>Raj Bhavan Road, Kannur</td>
      <td>670001</td>
      <td>Kannur</td>
      <td>Kannur South</td>
      <td>praveen.kumar@example.com</td>
    </tr>
    <tr>
    <th scope="row">Maya Menon</th>
      <td>9123456789</td>
      <td>Devi Nilayam, Alappuzha</td>
      <td>688001</td>
      <td>Alappuzha</td>
      <td>Alappuzha North</td>
      <td>maya.menon@example.com</td>
    </tr>
    <tr>
    <th scope="row">Suresh Nambiar</th>
      <td>9012345678</td>
      <td>Sreevalsam, Palakkad</td>
      <td>678001</td>
      <td>Palakkad</td>
      <td>Palakkad East</td>
      <td>suresh.nambiar@example.com</td>
    </tr>
    <tr>
    <th scope="row">Nandini Pillai</th>
      <td>9654321890</td>
      <td>Parambil House, Vadakara</td>
      <td>673001</td>
      <td>Kozhikode</td>
      <td>Vadakara</td>
      <td>nandini.p@example.com</td>
    </tr>

  </tbody>
</table>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default View

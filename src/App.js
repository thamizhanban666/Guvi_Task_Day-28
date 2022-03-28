import './App.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js'
import SideBar from './Components/SideBar';
import TopBar from './Components/TopBar';
import Dashboard from './Components/Dashboard';
import Tables from './Components/Tables';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chart from './Components/Chart';

function App() { 
  return (
  <BrowserRouter>
    <div id="page-top">
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">

        <SideBar></SideBar>
        
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
          <div id="content">

            <TopBar></TopBar>

                {/* // <!-- Begin Page Content --> */}
                <div className="container-fluid">
                  <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="tables" element={<Tables />} />
                    <Route path="charts" element={<Chart />} />
                  </Routes>
                </div>
                {/* <!-- /.container-fluid --> */}
          </div>
        </div>
        </div>
        {/* <!-- End of Content Wrapper --> */}
       {/* <!-- Footer --> */}
        <footer className="sticky-footer bg-white">
            <div className="container my-auto">
                <div className="copyright text-center my-auto">
                    <span>Copyright &copy; Your Website 2021</span>
                </div>
            </div>
        </footer>
        {/* <!-- End of Footer --> */}
     
      </div>
      {/* // <!-- End of Page Wrapper --> */}
      
  </BrowserRouter>
  );
}

export default App;

import React from "react";
import "../assets/css/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <div className="d-flex align-items-center justify-content-between">
        <Link to="index.html" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="" />
          <span className="d-none d-lg-block">ERP TOOL</span>
        </Link>
      </div>
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="index.html">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Home</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="components-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link href="components-alerts.html">
                <i className="bi bi-circle"></i>
                <span>Alerts</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#forms-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-journal-text"></i>
            <span>User</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="forms-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link href="forms-elements.html" to={"/createuser"}>
                <i className="bi bi-circle"></i>
                <span>Create User</span>
              </Link>
            </li>
            <li>
              <Link to={"/userlist"}>
                <i className="bi bi-circle"></i>
                <span>UserList</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#tables-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-layout-text-window-reverse"></i>
            <span>Monitor</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="tables-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link href="tables-general.html">
                <i className="bi bi-circle"></i>
                <span>General Tables</span>
              </Link>
            </li>
            <li>
              <Link href="tables-data.html">
                <i className="bi bi-circle"></i>
                <span>Data Tables</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#charts-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-bar-chart"></i>
            <span>Reports</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="charts-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link href="charts-chartjs.html">
                <i className="bi bi-circle"></i>
                <span>Chart.js</span>
              </Link>
            </li>
            <li>
              <Link href="charts-apexcharts.html">
                <i className="bi bi-circle"></i>
                <span>ApexCharts</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#icons-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-gem"></i>
            <span>Admin</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="icons-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link href="icons-bootstrap.html">
                <i className="bi bi-circle"></i>
                <span>Bootstrap Icons</span>
              </Link>
            </li>
            <li>
              <Link href="icons-remix.html">
                <i className="bi bi-circle"></i>
                <span>Remix Icons</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

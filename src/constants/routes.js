/*
 * Pages
 */
import Home from "../pages/Home";
import Lectures from "../pages/Lectures";
import Lecture from "../pages/Lecture";

export const routes = [
  {
    name: "HOME",
    path: "/",
    component: Home,
    private: false,
    exact: true,
  },
  {
    name: "LECTURES",
    path: "/lectures",
    component: Lectures,
    private: false,
    exact: true,
  },
  {
    name: "LECTURE_ID",
    path: "/lectures/:id",
    component: Lecture,
    private: false,
    exact: true,
  },
];

const getRoutex = () => {
  let routex = {};
  for (let route of routes) {
    routex[route.name] = route;
    delete routex[route.name].name;
  }
  return routex;
};

export const routex = getRoutex();

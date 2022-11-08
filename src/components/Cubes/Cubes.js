import { Fragment } from "react";
import AvailableCubes from "./AvailableCubes";
import CubesSummary from "./CubesSummary";

const Cubes = () => {
  return <Fragment>
    <CubesSummary />
    <AvailableCubes />
  </Fragment>
}

export default Cubes;
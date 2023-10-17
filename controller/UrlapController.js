import UrlapModel from "../model/UrlapModel.js";
import UrlapView from "../view/UrlapView.js";

class UrlapController {
  constructor() {
    const URLAPMODEL = new UrlapModel();
    const URLAPVIEW = new UrlapView($(".urlap"), URLAPMODEL.leiro);
    console.log(URLAPVIEW.urlapAdat)

  }
}
export default UrlapController;

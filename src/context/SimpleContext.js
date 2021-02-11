import { createContext } from 'react';

const SimpleContext = createContext({
  listPlan: [],
  listDonedPlan: [],
  handleAddListPlanToTemp: () => {},
  handleAddListPlan: () => {},
  handleShow_hideAddDailyPlan: () => {},
  getPlanIdForEditing: () => {},
  handleCloseWith_IdForEdit: () => {},
  handleEditPlan: () => {},
  handleDone: () => {},
  handleColor: () => {},
  handleAddPrimaryPlanList: () => {},
});

export default SimpleContext;

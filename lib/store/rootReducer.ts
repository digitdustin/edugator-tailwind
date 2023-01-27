import { combineReducers } from "redux";
import problemEditorContainerReducer from "../../src/pages/ProblemEditor/ProblemEditorContainer/problemEditorContainerSlice";
import codeEditorReducer from "components/CodeEditor/CodeEditorSlice";
import contentEditorReducer from "../../src/pages/ContentEditor/contentEditorPageSlice";
import { loginSlice } from "../../src/pages/Login/LoginPage.slice";
import moduleReducer from "../../src/pages/modules/ModulesPage.slice";
import gradingReducer from "../../src/pages/grading/GradingDialog.slice";
import accountManagerReducer from "../../src/pages/accounts/AdminAccountsPage.slice";
/* import slices of state here */

/* Place the object keys for state here followed by the reducer taken from that slice
    e.g. key : keyReducer
*/
const rootReducer = combineReducers({
  login: loginSlice.reducer,
  modules: moduleReducer,
  grading: gradingReducer,
  accountManager: accountManagerReducer,
  problemEditorContainer: problemEditorContainerReducer,
  contentEditorPage: contentEditorReducer,
  codeEditor: codeEditorReducer,
});

export default rootReducer;

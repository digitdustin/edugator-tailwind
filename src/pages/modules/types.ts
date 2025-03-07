import {
  IProblemBase,
  IModuleBase,
  IFeedback,
  ILessonBase,
} from "../../shared/types";

/** Admin Module Interface */

export interface IAdminModule extends IModuleBase {
  problems: IProblemBase[];
  lessons: ILessonBase[];
}

export const NullModule: IAdminModule = {
  name: "",
  number: -1,
  problems: [],
  lessons: [],
};

/** Creating a New-Module dialog */

export enum DialogStatus {
  EDIT = "edit",
  CREATE = "create",
  CLOSED = "closed",
}

export interface IDialog {
  open: boolean;
  action: DialogStatus;
  module: IModuleBase;
}

/* Redux State - Modules */
export interface IModuleState {
  modules: IAdminModule[];
  isLoading: boolean;
  feedback: IFeedback;
  dialogState: IDialog;
}

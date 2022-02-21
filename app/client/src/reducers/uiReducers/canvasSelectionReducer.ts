import { ReduxAction, ReduxActionTypes } from "constants/ReduxActionConstants";
import { MAIN_CONTAINER_WIDGET_ID } from "constants/WidgetConstants";
import { XYCord } from "pages/common/CanvasArenas/hooks/useCanvasDragging";
import { createImmerReducer } from "utils/AppsmithUtils";

const initialState: CanvasSelectionState = {
  isDraggingForSelection: false,
  widgetId: "",
  outOfCanvasStartPositions: undefined,
  dragToSelectSelections: {
    lastSelectedWidget: undefined,
    selectedWidgets: [],
  },
};

export const canvasSelectionReducer = createImmerReducer(initialState, {
  [ReduxActionTypes.START_CANVAS_SELECTION]: (
    state: CanvasSelectionState,
    action: ReduxAction<{ widgetId?: string }>,
  ) => {
    state.isDraggingForSelection = true;
    state.widgetId = action.payload.widgetId;
  },
  [ReduxActionTypes.STOP_CANVAS_SELECTION]: (state: CanvasSelectionState) => {
    state.isDraggingForSelection = false;
    state.widgetId = "";
    state.outOfCanvasStartPositions = undefined;
    state.dragToSelectSelections = {
      lastSelectedWidget: undefined,
      selectedWidgets: [],
    };
  },
  [ReduxActionTypes.START_CANVAS_SELECTION_FROM_EDITOR]: (
    state: CanvasSelectionState,
    action: ReduxAction<{ startPoints?: XYCord }>,
  ) => {
    state.isDraggingForSelection = true;
    state.widgetId = MAIN_CONTAINER_WIDGET_ID;
    state.outOfCanvasStartPositions = action.payload.startPoints;
  },
  [ReduxActionTypes.STOP_CANVAS_SELECTION_FROM_EDITOR]: (
    state: CanvasSelectionState,
  ) => {
    state.isDraggingForSelection = false;
    state.widgetId = "";
    state.outOfCanvasStartPositions = undefined;
  },
  [ReduxActionTypes.DRAG_SELECT_MULTIPLE_WIDGETS]: (
    state: CanvasSelectionState,
    action: ReduxAction<{ widgetIds?: string[] }>,
  ) => {
    const { widgetIds } = action.payload;
    if (widgetIds) {
      state.dragToSelectSelections.selectedWidgets = widgetIds || [];
      if (widgetIds.length > 1) {
        state.dragToSelectSelections.lastSelectedWidget = "";
      } else {
        state.dragToSelectSelections.lastSelectedWidget = widgetIds[0];
      }
    }
  },
});

export type CanvasSelectionState = {
  isDraggingForSelection: boolean;
  widgetId?: string;
  outOfCanvasStartPositions?: XYCord;
  dragToSelectSelections: {
    lastSelectedWidget?: string;
    selectedWidgets: string[];
  };
};

export default canvasSelectionReducer;

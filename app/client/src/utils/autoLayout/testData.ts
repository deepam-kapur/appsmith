import { RenderModes } from "constants/WidgetConstants";
import { LayoutDirection, ResponsiveBehavior } from "./constants";

export const data = {
  "0": {
    widgetName: "MainContainer",
    backgroundColor: "none",
    rightColumn: 1224,
    snapColumns: 64,
    detachFromLayout: true,
    widgetId: "0",
    topRow: 0,
    bottomRow: 460,
    containerStyle: "none",
    snapRows: 46,
    parentRowSpace: 1,
    type: "CANVAS_WIDGET",
    canExtend: true,
    version: 75,
    minHeight: 470,
    useAutoLayout: true,
    parentColumnSpace: 1,
    dynamicTriggerPathList: [],
    dynamicBindingPathList: [],
    leftColumn: 0,
    children: ["mglfryj65c", "vaqw5v85cs"],
    positioning: "vertical",
    flexLayers: [
      {
        children: [
          {
            id: "mglfryj65c",
            align: "start",
          },
          {
            id: "vaqw5v85cs",
            align: "start",
          },
        ],
      },
    ],
    direction: LayoutDirection.Vertical,
    renderMode: RenderModes.CANVAS,
    isLoading: false,
  },
  pt32jvs72k: {
    resetFormOnClick: false,
    boxShadow: "none",
    widgetName: "Button7",
    buttonColor: "{{appsmith.theme.colors.primaryColor}}",
    displayName: "Button",
    iconSVG: "/static/media/icon.cca026338f1c8eb6df8ba03d084c2fca.svg",
    searchTags: ["click", "submit"],
    topRow: 0,
    bottomRow: 4,
    parentRowSpace: 10,
    type: "BUTTON_WIDGET",
    hideCard: false,
    animateLoading: true,
    parentColumnSpace: 8.796875,
    leftColumn: 0,
    dynamicBindingPathList: [
      {
        key: "buttonColor",
      },
      {
        key: "borderRadius",
      },
    ],
    text: "Submit",
    isDisabled: false,
    key: "jvfayx7kel",
    isDeprecated: false,
    rightColumn: 16,
    isDefaultClickDisabled: true,
    widgetId: "pt32jvs72k",
    minWidth: 120,
    isVisible: true,
    recaptchaType: "V3",
    version: 1,
    parentId: "a3lldg1wg9",
    renderMode: RenderModes.CANVAS,
    isLoading: false,
    responsiveBehavior: ResponsiveBehavior.Hug,
    disabledWhenInvalid: false,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    buttonVariant: "PRIMARY",
    placement: "CENTER",
    alignment: "start",
  },
  tg6jcd1kjp: {
    resetFormOnClick: false,
    boxShadow: "none",
    widgetName: "Button8",
    buttonColor: "{{appsmith.theme.colors.primaryColor}}",
    displayName: "Button",
    iconSVG: "/static/media/icon.cca026338f1c8eb6df8ba03d084c2fca.svg",
    searchTags: ["click", "submit"],
    topRow: 0,
    bottomRow: 4,
    parentRowSpace: 10,
    type: "BUTTON_WIDGET",
    hideCard: false,
    animateLoading: true,
    parentColumnSpace: 8.796875,
    leftColumn: 48,
    dynamicBindingPathList: [
      {
        key: "buttonColor",
      },
      {
        key: "borderRadius",
      },
    ],
    text: "Submit",
    isDisabled: false,
    key: "jvfayx7kel",
    isDeprecated: false,
    rightColumn: 64,
    isDefaultClickDisabled: true,
    widgetId: "tg6jcd1kjp",
    minWidth: 120,
    isVisible: true,
    recaptchaType: "V3",
    version: 1,
    parentId: "a3lldg1wg9",
    renderMode: RenderModes.CANVAS,
    isLoading: false,
    responsiveBehavior: ResponsiveBehavior.Hug,
    originalTopRow: 11,
    disabledWhenInvalid: false,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    originalBottomRow: 15,
    buttonVariant: "PRIMARY",
    placement: "CENTER",
    alignment: "start",
  },
  a3lldg1wg9: {
    widgetName: "Canvas6",
    displayName: "Canvas",
    topRow: 0,
    bottomRow: 100,
    parentRowSpace: 1,
    type: "CANVAS_WIDGET",
    canExtend: false,
    hideCard: true,
    minHeight: 100,
    parentColumnSpace: 1,
    leftColumn: 0,
    dynamicBindingPathList: [],
    children: ["pt32jvs72k", "tg6jcd1kjp"],
    key: "7gw94mobie",
    isDeprecated: false,
    rightColumn: 1166,
    detachFromLayout: true,
    widgetId: "a3lldg1wg9",
    containerStyle: "none",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "mglfryj65c",
    renderMode: RenderModes.CANVAS,
    isLoading: false,
    responsiveBehavior: ResponsiveBehavior.Fill,
    flexLayers: [
      {
        children: [
          {
            id: "pt32jvs72k",
            align: "start",
          },
          {
            id: "tg6jcd1kjp",
            align: "end",
          },
        ],
      },
    ],
  },
  mglfryj65c: {
    boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
    widgetName: "Container2",
    borderColor: "#E0DEDE",
    isCanvas: true,
    displayName: "Container",
    iconSVG: "/static/media/icon.1977dca3370505e2db3a8e44cfd54907.svg",
    searchTags: ["div", "parent", "group"],
    topRow: 0,
    bottomRow: 10,
    parentRowSpace: 10,
    type: "CONTAINER_WIDGET",
    hideCard: false,
    shouldScrollContents: true,
    animateLoading: true,
    parentColumnSpace: 18.21875,
    leftColumn: 0,
    dynamicBindingPathList: [
      {
        key: "borderRadius",
      },
      {
        key: "boxShadow",
      },
    ],
    children: ["a3lldg1wg9"],
    borderWidth: "1",
    key: "bxkxveofyb",
    backgroundColor: "#FFFFFF",
    isDeprecated: false,
    rightColumn: 32,
    dynamicHeight: "AUTO_HEIGHT",
    widgetId: "mglfryj65c",
    containerStyle: "card",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "0",
    renderMode: RenderModes.CANVAS,
    isLoading: false,
    responsiveBehavior: ResponsiveBehavior.Fill,
    originalTopRow: 0,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    maxDynamicHeight: 9000,
    originalBottomRow: 11,
    alignment: "start",
    minDynamicHeight: 10,
  },
  "2ydfwnmayi": {
    widgetName: "Canvas5",
    displayName: "Canvas",
    topRow: 0,
    bottomRow: 100,
    parentRowSpace: 1,
    type: "CANVAS_WIDGET",
    canExtend: false,
    hideCard: true,
    minHeight: 100,
    parentColumnSpace: 1,
    leftColumn: 0,
    dynamicBindingPathList: [],
    children: [],
    key: "7gw94mobie",
    isDeprecated: false,
    rightColumn: 1166,
    detachFromLayout: true,
    widgetId: "2ydfwnmayi",
    containerStyle: "none",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "vaqw5v85cs",
    renderMode: RenderModes.CANVAS,
    isLoading: false,
    responsiveBehavior: ResponsiveBehavior.Fill,
    flexLayers: [],
  },
  vaqw5v85cs: {
    boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
    widgetName: "Container1",
    borderColor: "#E0DEDE",
    isCanvas: true,
    displayName: "Container",
    iconSVG: "/static/media/icon.1977dca3370505e2db3a8e44cfd54907.svg",
    searchTags: ["div", "parent", "group"],
    topRow: 0,
    bottomRow: 11,
    parentRowSpace: 10,
    type: "CONTAINER_WIDGET",
    hideCard: false,
    shouldScrollContents: true,
    animateLoading: true,
    parentColumnSpace: 18.21875,
    leftColumn: 32,
    dynamicBindingPathList: [
      {
        key: "borderRadius",
      },
      {
        key: "boxShadow",
      },
    ],
    children: ["2ydfwnmayi"],
    borderWidth: "1",
    key: "bxkxveofyb",
    backgroundColor: "#FFFFFF",
    isDeprecated: false,
    rightColumn: 64,
    dynamicHeight: "AUTO_HEIGHT",
    widgetId: "vaqw5v85cs",
    containerStyle: "card",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "0",
    renderMode: RenderModes.CANVAS,
    isLoading: false,
    responsiveBehavior: ResponsiveBehavior.Fill,
    originalTopRow: 0,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    maxDynamicHeight: 9000,
    originalBottomRow: 11,
    alignment: "start",
    minDynamicHeight: 10,
  },
};
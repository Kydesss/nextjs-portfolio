"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var viewer_exports = {};
__export(viewer_exports, {
  pluginGallery: () => pluginGallery
});
module.exports = __toCommonJS(viewer_exports);
var import_defaults = require("./defaults.js");
var import_types = require("./types.js");
var import_node_view_renderers = require("./viewer/node-view-renderers.js");
const pluginGallery = (config) => {
  return {
    config: { ...import_defaults.DEFAULTS.containerData, ...config },
    type: import_types.GALLERY_TYPE,
    nodeViewRenderers: import_node_view_renderers.nodeViewRenderers
  };
};
//# sourceMappingURL=viewer.js.map

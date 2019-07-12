(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~@jupyter-widgets/controls"],{

/***/ "+RhG":
/*!*******************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_bool.js ***!
  \*******************************************************************/
/*! exports provided: BoolModel, CheckboxModel, CheckboxView, ToggleButtonModel, ToggleButtonView, ValidModel, ValidView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoolModel", function() { return BoolModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxModel", function() { return CheckboxModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxView", function() { return CheckboxView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonModel", function() { return ToggleButtonModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonView", function() { return ToggleButtonView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidModel", function() { return ValidModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidView", function() { return ValidView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var BoolModel = /** @class */ (function (_super) {
    __extends(BoolModel, _super);
    function BoolModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoolModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            value: false,
            disabled: false,
            _model_name: 'BoolModel'
        });
    };
    return BoolModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var CheckboxModel = /** @class */ (function (_super) {
    __extends(CheckboxModel, _super);
    function CheckboxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            indent: true,
            _view_name: 'CheckboxView',
            _model_name: 'CheckboxModel'
        });
    };
    return CheckboxModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var CheckboxView = /** @class */ (function (_super) {
    __extends(CheckboxView, _super);
    function CheckboxView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    CheckboxView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-checkbox');
        // adding a zero-width space to the label to help
        // the browser set the baseline correctly
        this.label.innerHTML = '&#8203;';
        // label containing the checkbox and description span
        this.checkboxLabel = document.createElement('label');
        this.checkboxLabel.classList.add('widget-label-basic');
        this.el.appendChild(this.checkboxLabel);
        // checkbox
        this.checkbox = document.createElement('input');
        this.checkbox.setAttribute('type', 'checkbox');
        this.checkboxLabel.appendChild(this.checkbox);
        // span to the right of the checkbox that will render the description
        this.descriptionSpan = document.createElement('span');
        this.checkboxLabel.appendChild(this.descriptionSpan);
        this.listenTo(this.model, 'change:indent', this.updateIndent);
        this.update(); // Set defaults.
        this.updateDescription();
        this.updateIndent();
    };
    /**
     * Overriden from super class
     *
     * Update the description span (rather than the label) since
     * we want the description to the right of the checkbox.
     */
    CheckboxView.prototype.updateDescription = function () {
        // can be called before the view is fully initialized
        if (this.checkboxLabel == null) {
            return;
        }
        var description = this.model.get('description');
        this.descriptionSpan.innerHTML = description;
        this.typeset(this.descriptionSpan);
        this.descriptionSpan.title = description;
        this.checkbox.title = description;
    };
    /**
     * Update the visibility of the label in the super class
     * to provide the optional indent.
     */
    CheckboxView.prototype.updateIndent = function () {
        var indent = this.model.get('indent');
        this.label.style.display = indent ? '' : 'none';
    };
    CheckboxView.prototype.events = function () {
        return {
            'click input[type="checkbox"]': '_handle_click'
        };
    };
    /**
     * Handles when the checkbox is clicked.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    CheckboxView.prototype._handle_click = function () {
        var value = this.model.get('value');
        this.model.set('value', !value, { updated_view: this });
        this.touch();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed. The model may have been
     * changed by another view or by a state update from the back-end.
     */
    CheckboxView.prototype.update = function (options) {
        this.checkbox.checked = this.model.get('value');
        if (options === undefined || options.updated_view != this) {
            this.checkbox.disabled = this.model.get('disabled');
        }
        return _super.prototype.update.call(this);
    };
    return CheckboxView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var ToggleButtonModel = /** @class */ (function (_super) {
    __extends(ToggleButtonModel, _super);
    function ToggleButtonModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToggleButtonModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'ToggleButtonView',
            _model_name: 'ToggleButtonModel',
            tooltip: '',
            icon: '',
            button_style: ''
        });
    };
    return ToggleButtonModel;
}(BoolModel));

var ToggleButtonView = /** @class */ (function (_super) {
    __extends(ToggleButtonView, _super);
    function ToggleButtonView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    ToggleButtonView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('jupyter-button');
        this.el.classList.add('widget-toggle-button');
        this.listenTo(this.model, 'change:button_style', this.update_button_style);
        this.set_button_style();
        this.update(); // Set defaults.
    };
    ToggleButtonView.prototype.update_button_style = function () {
        this.update_mapped_classes(ToggleButtonView.class_map, 'button_style');
    };
    ToggleButtonView.prototype.set_button_style = function () {
        this.set_mapped_classes(ToggleButtonView.class_map, 'button_style');
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed. The model may have been
     * changed by another view or by a state update from the back-end.
     */
    ToggleButtonView.prototype.update = function (options) {
        if (this.model.get('value')) {
            this.el.classList.add('mod-active');
        }
        else {
            this.el.classList.remove('mod-active');
        }
        if (options === undefined || options.updated_view !== this) {
            this.el.disabled = this.model.get('disabled');
            this.el.setAttribute('title', this.model.get('tooltip'));
            var description = this.model.get('description');
            var icon = this.model.get('icon');
            if (description.trim().length === 0 && icon.trim().length === 0) {
                this.el.innerHTML = '&nbsp;'; // Preserve button height
            }
            else {
                this.el.textContent = '';
                if (icon.trim().length) {
                    var i = document.createElement('i');
                    this.el.appendChild(i);
                    i.classList.add('fa');
                    i.classList.add('fa-' + icon);
                }
                this.el.appendChild(document.createTextNode(description));
            }
        }
        return _super.prototype.update.call(this);
    };
    ToggleButtonView.prototype.events = function () {
        return {
            // Dictionary of events and their handlers.
            'click': '_handle_click'
        };
    };
    /**
     * Handles and validates user input.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    ToggleButtonView.prototype._handle_click = function (event) {
        event.preventDefault();
        var value = this.model.get('value');
        this.model.set('value', !value, { updated_view: this });
        this.touch();
    };
    Object.defineProperty(ToggleButtonView.prototype, "tagName", {
        /**
         * The default tag name.
         *
         * #### Notes
         * This is a read-only attribute.
         */
        get: function () {
            // We can't make this an attribute with a default value
            // since it would be set after it is needed in the
            // constructor.
            return 'button';
        },
        enumerable: true,
        configurable: true
    });
    ToggleButtonView.class_map = {
        primary: ['mod-primary'],
        success: ['mod-success'],
        info: ['mod-info'],
        warning: ['mod-warning'],
        danger: ['mod-danger']
    };
    return ToggleButtonView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_2__["DOMWidgetView"]));

var ValidModel = /** @class */ (function (_super) {
    __extends(ValidModel, _super);
    function ValidModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValidModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            readout: 'Invalid',
            _view_name: 'ValidView',
            _model_name: 'ValidModel'
        });
    };
    return ValidModel;
}(BoolModel));

var ValidView = /** @class */ (function (_super) {
    __extends(ValidView, _super);
    function ValidView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    ValidView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-valid');
        this.el.classList.add('widget-inline-hbox');
        var icon = document.createElement('i');
        this.el.appendChild(icon);
        this.readout = document.createElement('span');
        this.readout.classList.add('widget-valid-readout');
        this.readout.classList.add('widget-readout');
        this.el.appendChild(this.readout);
        this.update();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    ValidView.prototype.update = function () {
        this.el.classList.remove('mod-valid');
        this.el.classList.remove('mod-invalid');
        this.readout.textContent = this.model.get('readout');
        if (this.model.get('value')) {
            this.el.classList.add('mod-valid');
        }
        else {
            this.el.classList.add('mod-invalid');
        }
    };
    return ValidView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));



/***/ }),

/***/ "01zH":
/*!*********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_upload.js ***!
  \*********************************************************************/
/*! exports provided: FileUploadModel, FileUploadView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModel", function() { return FileUploadModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadView", function() { return FileUploadView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var FileUploadModel = /** @class */ (function (_super) {
    __extends(FileUploadModel, _super);
    function FileUploadModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUploadModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_2__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'FileUploadModel',
            _view_name: 'FileUploadView',
            _counter: 0,
            accept: '',
            description: 'Upload',
            tooltip: '',
            disabled: false,
            icon: 'upload',
            button_style: '',
            multiple: false,
            metadata: [],
            data: [],
            error: '',
            style: null
        });
    };
    FileUploadModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDOMWidgetModel"].serializers, { data: { serialize: function (buffers) { return buffers.slice(); } } });
    return FileUploadModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDOMWidgetModel"]));

var FileUploadView = /** @class */ (function (_super) {
    __extends(FileUploadView, _super);
    function FileUploadView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FileUploadView.prototype, "tagName", {
        get: function () {
            return 'button';
        },
        enumerable: true,
        configurable: true
    });
    FileUploadView.prototype.render = function () {
        var _this = this;
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-upload');
        this.el.classList.add('jupyter-button');
        this.fileInput = document.createElement('input');
        this.fileInput.type = 'file';
        this.fileInput.style.display = 'none';
        this.el.appendChild(this.fileInput);
        this.el.addEventListener('click', function () {
            _this.fileInput.click();
        });
        this.fileInput.addEventListener('click', function () {
            _this.fileInput.value = '';
        });
        this.fileInput.addEventListener('change', function () {
            var promisesFile = [];
            Array.from(_this.fileInput.files).forEach(function (file) {
                promisesFile.push(new Promise(function (resolve, reject) {
                    var metadata = {
                        name: file.name,
                        type: file.type,
                        size: file.size,
                        lastModified: file.lastModified,
                    };
                    _this.fileReader = new FileReader();
                    _this.fileReader.onload = function (event) {
                        var buffer = event.target.result;
                        resolve({
                            buffer: buffer,
                            metadata: metadata,
                            error: '',
                        });
                    };
                    _this.fileReader.onerror = function () {
                        reject();
                    };
                    _this.fileReader.onabort = _this.fileReader.onerror;
                    _this.fileReader.readAsArrayBuffer(file);
                }));
            });
            Promise.all(promisesFile)
                .then(function (contents) {
                var metadata = [];
                var li_buffer = [];
                contents.forEach(function (c) {
                    metadata.push(c.metadata);
                    li_buffer.push(c.buffer);
                });
                var counter = _this.model.get('_counter');
                _this.model.set({
                    _counter: counter + contents.length,
                    metadata: metadata,
                    data: li_buffer,
                    error: '',
                });
                _this.touch();
            })
                .catch(function (err) {
                console.error('error in file upload: %o', err);
                _this.model.set({
                    error: err,
                });
                _this.touch();
            });
        });
        this.listenTo(this.model, 'change:button_style', this.update_button_style);
        this.set_button_style();
        this.update(); // Set defaults.
    };
    FileUploadView.prototype.update = function () {
        this.el.disabled = this.model.get('disabled');
        this.el.setAttribute('title', this.model.get('tooltip'));
        var description = this.model.get('description') + " (" + this.model.get('_counter') + ")";
        var icon = this.model.get('icon');
        if (description.length || icon.length) {
            this.el.textContent = '';
            if (icon.length) {
                var i = document.createElement('i');
                i.classList.add('fa');
                i.classList.add('fa-' + icon);
                if (description.length === 0) {
                    i.classList.add('center');
                }
                this.el.appendChild(i);
            }
            this.el.appendChild(document.createTextNode(description));
        }
        this.fileInput.accept = this.model.get('accept');
        this.fileInput.multiple = this.model.get('multiple');
        return _super.prototype.update.call(this);
    };
    FileUploadView.prototype.update_button_style = function () {
        this.update_mapped_classes(FileUploadView.class_map, 'button_style', this.el);
    };
    FileUploadView.prototype.set_button_style = function () {
        this.set_mapped_classes(FileUploadView.class_map, 'button_style', this.el);
    };
    FileUploadView.class_map = {
        primary: ['mod-primary'],
        success: ['mod-success'],
        info: ['mod-info'],
        warning: ['mod-warning'],
        danger: ['mod-danger']
    };
    return FileUploadView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["DOMWidgetView"]));



/***/ }),

/***/ "0c3I":
/*!*******************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_core.js ***!
  \*******************************************************************/
/*! exports provided: CoreWidgetModel, CoreDOMWidgetModel, CoreDescriptionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreWidgetModel", function() { return CoreWidgetModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreDOMWidgetModel", function() { return CoreDOMWidgetModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreDescriptionModel", function() { return CoreDescriptionModel; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version */ "VKie");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// widget_core implements some common patterns for the core widget collection
// that are not to be used directly by third-party widget authors.




var CoreWidgetModel = /** @class */ (function (_super) {
    __extends(CoreWidgetModel, _super);
    function CoreWidgetModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoreWidgetModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'CoreWidgetModel',
            _view_module: '@jupyter-widgets/controls',
            _model_module: '@jupyter-widgets/controls',
            _view_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
            _model_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
        });
    };
    return CoreWidgetModel;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["WidgetModel"]));

var CoreDOMWidgetModel = /** @class */ (function (_super) {
    __extends(CoreDOMWidgetModel, _super);
    function CoreDOMWidgetModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoreDOMWidgetModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'CoreDOMWidgetModel',
            _view_module: '@jupyter-widgets/controls',
            _model_module: '@jupyter-widgets/controls',
            _view_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
            _model_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
        });
    };
    return CoreDOMWidgetModel;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetModel"]));

var CoreDescriptionModel = /** @class */ (function (_super) {
    __extends(CoreDescriptionModel, _super);
    function CoreDescriptionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoreDescriptionModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'CoreDescriptionModel',
            _view_module: '@jupyter-widgets/controls',
            _model_module: '@jupyter-widgets/controls',
            _view_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
            _model_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
        });
    };
    return CoreDescriptionModel;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionModel"]));



/***/ }),

/***/ "0pQw":
/*!*************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_controller.js ***!
  \*************************************************************************/
/*! exports provided: ControllerButtonModel, ControllerButtonView, ControllerAxisModel, ControllerAxisView, ControllerModel, ControllerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerButtonModel", function() { return ControllerButtonModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerButtonView", function() { return ControllerButtonView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerAxisModel", function() { return ControllerAxisModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerAxisView", function() { return ControllerAxisView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerModel", function() { return ControllerModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerView", function() { return ControllerView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @phosphor/widgets */ "pif5");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @phosphor/algorithm */ "rqNV");
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "SisM");
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var ControllerButtonModel = /** @class */ (function (_super) {
    __extends(ControllerButtonModel, _super);
    function ControllerButtonModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerButtonModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_4__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'ControllerButtonModel',
            _view_name: 'ControllerButtonView',
            value: 0.0,
            pressed: false
        });
    };
    return ControllerButtonModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDOMWidgetModel"]));

/**
 * Very simple view for a gamepad button.
 */
var ControllerButtonView = /** @class */ (function (_super) {
    __extends(ControllerButtonView, _super);
    function ControllerButtonView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerButtonView.prototype.render = function () {
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-controller-button');
        this.el.style.width = 'fit-content';
        this.support = document.createElement('div');
        this.support.style.position = 'relative';
        this.support.style.margin = '1px';
        this.support.style.width = '16px';
        this.support.style.height = '16px';
        this.support.style.border = '1px solid black';
        this.support.style.background = 'lightgray';
        this.el.appendChild(this.support);
        this.bar = document.createElement('div');
        this.bar.style.position = 'absolute';
        this.bar.style.width = '100%';
        this.bar.style.bottom = '0px';
        this.bar.style.background = 'gray';
        this.support.appendChild(this.bar);
        this.update();
        this.label = document.createElement('div');
        this.label.textContent = this.model.get('description');
        this.label.style.textAlign = 'center';
        this.el.appendChild(this.label);
    };
    ControllerButtonView.prototype.update = function () {
        this.bar.style.height = (100 * this.model.get('value')) + '%';
    };
    return ControllerButtonView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["DOMWidgetView"]));

var ControllerAxisModel = /** @class */ (function (_super) {
    __extends(ControllerAxisModel, _super);
    function ControllerAxisModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerAxisModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_4__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'ControllerAxisModel',
            _view_name: 'ControllerAxisView',
            value: 0.0
        });
    };
    return ControllerAxisModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDOMWidgetModel"]));

/**
 * Very simple view for a gamepad axis.
 */
var ControllerAxisView = /** @class */ (function (_super) {
    __extends(ControllerAxisView, _super);
    function ControllerAxisView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerAxisView.prototype.render = function () {
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-controller-axis');
        this.el.style.width = '16px';
        this.el.style.padding = '4px';
        this.support = document.createElement('div');
        this.support.style.position = 'relative';
        this.support.style.margin = '1px';
        this.support.style.width = '4px';
        this.support.style.height = '64px';
        this.support.style.border = '1px solid black';
        this.support.style.background = 'lightgray';
        this.bullet = document.createElement('div');
        this.bullet.style.position = 'absolute';
        this.bullet.style.margin = '-3px';
        this.bullet.style.boxSizing = 'unset';
        this.bullet.style.width = '10px';
        this.bullet.style.height = '10px';
        this.bullet.style.background = 'gray';
        this.label = document.createElement('div');
        this.label.textContent = this.model.get('description');
        this.label.style.textAlign = 'center';
        this.support.appendChild(this.bullet);
        this.el.appendChild(this.support);
        this.el.appendChild(this.label);
        this.update();
    };
    ControllerAxisView.prototype.update = function () {
        this.bullet.style.top = (50 * (this.model.get('value') + 1)) + '%';
    };
    return ControllerAxisView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["DOMWidgetView"]));

var ControllerModel = /** @class */ (function (_super) {
    __extends(ControllerModel, _super);
    function ControllerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_4__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'ControllerModel',
            _view_name: 'ControllerView',
            index: 0,
            name: '',
            mapping: '',
            connected: false,
            timestamp: 0,
            buttons: [],
            axes: []
        });
    };
    ControllerModel.prototype.initialize = function (attributes, options) {
        _super.prototype.initialize.call(this, attributes, options);
        if (navigator.getGamepads === void 0) {
            // Checks if the browser supports the gamepad API
            this.readout = 'This browser does not support gamepads.';
            console.error(this.readout);
        }
        else {
            // Start the wait loop, and listen to updates of the only
            // user-provided attribute, the gamepad index.
            this.readout = 'Connect gamepad and press any button.';
            if (this.get('connected')) {
                // No need to re-create Button and Axis widgets, re-use
                // the models provided by the backend which may already
                // be wired to other things.
                this.update_loop();
            }
            else {
                // Wait for a gamepad to be connected.
                this.wait_loop();
            }
        }
    };
    /**
     * Waits for a gamepad to be connected at the provided index.
     * Once one is connected, it will start the update loop, which
     * populates the update of axes and button values.
     */
    ControllerModel.prototype.wait_loop = function () {
        var index = this.get('index');
        var pad = navigator.getGamepads()[index];
        if (pad) {
            var that_1 = this;
            this.setup(pad).then(function (controls) {
                that_1.set(controls);
                that_1.save_changes();
                window.requestAnimationFrame(that_1.update_loop.bind(that_1));
            });
        }
        else {
            window.requestAnimationFrame(this.wait_loop.bind(this));
        }
    };
    /**
     * Given a native gamepad object, returns a promise for a dictionary of
     * controls, of the form
     * {
     *     buttons: list of Button models,
     *     axes: list of Axis models,
     * }
     */
    ControllerModel.prototype.setup = function (pad) {
        // Set up the main gamepad attributes
        this.set({
            name: pad.id,
            mapping: pad.mapping,
            connected: pad.connected,
            timestamp: pad.timestamp
        });
        // Create buttons and axes. When done, start the update loop
        var that = this;
        return _utils__WEBPACK_IMPORTED_MODULE_5__["resolvePromisesDict"]({
            buttons: Promise.all(pad.buttons.map(function (btn, index) {
                return that._create_button_model(index);
            })),
            axes: Promise.all(pad.axes.map(function (axis, index) {
                return that._create_axis_model(index);
            })),
        });
    };
    /**
     * Update axes and buttons values, until the gamepad is disconnected.
     * When the gamepad is disconnected, this.reset_gamepad is called.
     */
    ControllerModel.prototype.update_loop = function () {
        var index = this.get('index');
        var id = this.get('name');
        var pad = navigator.getGamepads()[index];
        if (pad && index === pad.index && id === pad.id) {
            this.set({
                timestamp: pad.timestamp,
                connected: pad.connected
            });
            this.save_changes();
            this.get('buttons').forEach(function (model, index) {
                model.set({
                    value: pad.buttons[index].value,
                    pressed: pad.buttons[index].pressed
                });
                model.save_changes();
            });
            this.get('axes').forEach(function (model, index) {
                model.set('value', pad.axes[index]);
                model.save_changes();
            });
            window.requestAnimationFrame(this.update_loop.bind(this));
        }
        else {
            this.reset_gamepad();
        }
    };
    /**
     * Resets the gamepad attributes, and start the wait_loop.
     */
    ControllerModel.prototype.reset_gamepad = function () {
        this.get('buttons').forEach(function (button) {
            button.close();
        });
        this.get('axes').forEach(function (axis) {
            axis.close();
        });
        this.set({
            name: '',
            mapping: '',
            connected: false,
            timestamp: 0.0,
            buttons: [],
            axes: []
        });
        this.save_changes();
        window.requestAnimationFrame(this.wait_loop.bind(this));
    };
    /**
     * Creates a gamepad button widget.
     */
    ControllerModel.prototype._create_button_model = function (index) {
        return this.widget_manager.new_widget({
            model_name: 'ControllerButtonModel',
            model_module: '@jupyter-widgets/controls',
            model_module_version: this.get('_model_module_version'),
            view_name: 'ControllerButtonView',
            view_module: '@jupyter-widgets/controls',
            view_module_version: this.get('_view_module_version'),
        }).then(function (model) {
            model.set('description', index);
            return model;
        });
    };
    /**
     * Creates a gamepad axis widget.
     */
    ControllerModel.prototype._create_axis_model = function (index) {
        return this.widget_manager.new_widget({
            model_name: 'ControllerAxisModel',
            model_module: '@jupyter-widgets/controls',
            model_module_version: this.get('_model_module_version'),
            view_name: 'ControllerAxisView',
            view_module: '@jupyter-widgets/controls',
            view_module_version: this.get('_view_module_version'),
        }).then(function (model) {
            model.set('description', index);
            return model;
        });
    };
    ControllerModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDOMWidgetModel"].serializers, { buttons: { deserialize: _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["unpack_models"] }, axes: { deserialize: _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["unpack_models"] } });
    return ControllerModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDOMWidgetModel"]));

/**
 * A simple view for a gamepad.
 */
var ControllerView = /** @class */ (function (_super) {
    __extends(ControllerView, _super);
    function ControllerView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerView.prototype._createElement = function (tagName) {
        this.pWidget = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["JupyterPhosphorPanelWidget"]({ view: this });
        return this.pWidget.node;
    };
    ControllerView.prototype._setElement = function (el) {
        if (this.el || el !== this.pWidget.node) {
            // Boxes don't allow setting the element beyond the initial creation.
            throw new Error('Cannot reset the DOM element.');
        }
        this.el = this.pWidget.node;
    };
    ControllerView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.button_views = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["ViewList"](this.add_button, null, this);
        this.listenTo(this.model, 'change:buttons', function (model, value) {
            this.button_views.update(value);
        });
        this.axis_views = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["ViewList"](this.add_axis, null, this);
        this.listenTo(this.model, 'change:axes', function (model, value) {
            this.axis_views.update(value);
        });
        this.listenTo(this.model, 'change:name', this.update_label);
    };
    ControllerView.prototype.render = function () {
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-controller');
        this.label = document.createElement('div');
        this.el.appendChild(this.label);
        this.axis_box = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Panel"]();
        this.axis_box.node.style.display = 'flex';
        this.pWidget.addWidget(this.axis_box);
        this.button_box = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Panel"]();
        this.button_box.node.style.display = 'flex';
        this.pWidget.addWidget(this.button_box);
        this.button_views.update(this.model.get('buttons'));
        this.axis_views.update(this.model.get('axes'));
        this.update_label();
    };
    ControllerView.prototype.update_label = function () {
        this.label.textContent = this.model.get('name') || this.model.readout;
    };
    ControllerView.prototype.add_button = function (model) {
        var _this = this;
        // we insert a dummy element so the order is preserved when we add
        // the rendered content later.
        var dummy = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Widget"]();
        this.button_box.addWidget(dummy);
        return this.create_child_view(model).then(function (view) {
            // replace the dummy widget with the new one.
            var i = _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__["ArrayExt"].firstIndexOf(_this.button_box.widgets, dummy);
            _this.button_box.insertWidget(i, view.pWidget);
            dummy.dispose();
            return view;
        }).catch(_utils__WEBPACK_IMPORTED_MODULE_5__["reject"]('Could not add child button view to controller', true));
    };
    ControllerView.prototype.add_axis = function (model) {
        var _this = this;
        // we insert a dummy element so the order is preserved when we add
        // the rendered content later.
        var dummy = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Widget"]();
        this.axis_box.addWidget(dummy);
        return this.create_child_view(model).then(function (view) {
            // replace the dummy widget with the new one.
            var i = _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__["ArrayExt"].firstIndexOf(_this.axis_box.widgets, dummy);
            _this.axis_box.insertWidget(i, view.pWidget);
            dummy.dispose();
            return view;
        }).catch(_utils__WEBPACK_IMPORTED_MODULE_5__["reject"]('Could not add child axis view to controller', true));
    };
    ControllerView.prototype.remove = function () {
        _super.prototype.remove.call(this);
        this.button_views.remove();
        this.axis_views.remove();
    };
    return ControllerView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["DOMWidgetView"]));



/***/ }),

/***/ "1OD8":
/*!**************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_description.js ***!
  \**************************************************************************/
/*! exports provided: DescriptionStyleModel, DescriptionModel, DescriptionView, LabeledDOMWidgetModel, LabeledDOMWidgetView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionStyleModel", function() { return DescriptionStyleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionModel", function() { return DescriptionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionView", function() { return DescriptionView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabeledDOMWidgetModel", function() { return LabeledDOMWidgetModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabeledDOMWidgetView", function() { return LabeledDOMWidgetView; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version */ "VKie");
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var DescriptionStyleModel = /** @class */ (function (_super) {
    __extends(DescriptionStyleModel, _super);
    function DescriptionStyleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DescriptionStyleModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'DescriptionStyleModel', _model_module: '@jupyter-widgets/controls', _model_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"] });
    };
    DescriptionStyleModel.styleProperties = {
        description_width: {
            selector: '.widget-label',
            attribute: 'width',
            default: null
        },
    };
    return DescriptionStyleModel;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["StyleModel"]));

var DescriptionModel = /** @class */ (function (_super) {
    __extends(DescriptionModel, _super);
    function DescriptionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DescriptionModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'DescriptionModel', _view_name: 'DescriptionView', _view_module: '@jupyter-widgets/controls', _model_module: '@jupyter-widgets/controls', _view_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"], _model_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"], description: '', description_tooltip: null });
    };
    return DescriptionModel;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetModel"]));

var DescriptionView = /** @class */ (function (_super) {
    __extends(DescriptionView, _super);
    function DescriptionView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DescriptionView.prototype.render = function () {
        this.label = document.createElement('label');
        this.el.appendChild(this.label);
        this.label.className = 'widget-label';
        this.label.style.display = 'none';
        this.listenTo(this.model, 'change:description', this.updateDescription);
        this.listenTo(this.model, 'change:description_tooltip', this.updateDescription);
        this.updateDescription();
    };
    DescriptionView.prototype.typeset = function (element, text) {
        this.displayed.then(function () { return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["typeset"])(element, text); });
    };
    DescriptionView.prototype.updateDescription = function () {
        var description = this.model.get('description');
        var description_tooltip = this.model.get('description_tooltip');
        if (description_tooltip === null) {
            description_tooltip = description;
        }
        if (description.length === 0) {
            this.label.style.display = 'none';
        }
        else {
            this.label.innerHTML = description;
            this.typeset(this.label);
            this.label.style.display = '';
        }
        this.label.title = description_tooltip;
    };
    return DescriptionView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));

/**
 * For backwards compatibility with jupyter-js-widgets 2.x.
 *
 * Use DescriptionModel instead.
 */
var LabeledDOMWidgetModel = /** @class */ (function (_super) {
    __extends(LabeledDOMWidgetModel, _super);
    function LabeledDOMWidgetModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LabeledDOMWidgetModel;
}(DescriptionModel));

/**
 * For backwards compatibility with jupyter-js-widgets 2.x.
 *
 * Use DescriptionView instead.
 */
var LabeledDOMWidgetView = /** @class */ (function (_super) {
    __extends(LabeledDOMWidgetView, _super);
    function LabeledDOMWidgetView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LabeledDOMWidgetView;
}(DescriptionView));



/***/ }),

/***/ "4IhH":
/*!**************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/phosphor/accordion.js ***!
  \**************************************************************************/
/*! exports provided: Collapse, Accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return Collapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @phosphor/algorithm */ "rqNV");
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @phosphor/signaling */ "qUp9");
/* harmony import */ var _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @phosphor/widgets */ "pif5");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _currentselection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currentselection */ "XIYl");
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * The class name added to Collapse instances.
 */
var COLLAPSE_CLASS = 'p-Collapse';
/**
 * The class name added to a Collapse's header.
 */
var COLLAPSE_HEADER_CLASS = 'p-Collapse-header';
/**
 * The class name added to a Collapse's contents.
 */
var COLLAPSE_CONTENTS_CLASS = 'p-Collapse-contents';
/**
 * The class name added to a Collapse when it is opened
 */
var COLLAPSE_CLASS_OPEN = 'p-Collapse-open';
/**
 * A panel that supports a collapsible header, made from the widget's title.
 * Clicking on the title expands or contracts the widget.
 */
var Collapse = /** @class */ (function (_super) {
    __extends(Collapse, _super);
    function Collapse(options) {
        var _this = _super.call(this, options) || this;
        _this._collapseChanged = new _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__["Signal"](_this);
        _this.addClass(COLLAPSE_CLASS);
        _this._header = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Widget"]();
        _this._header.addClass(COLLAPSE_HEADER_CLASS);
        _this._header.node.addEventListener('click', _this);
        _this._content = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Panel"]();
        _this._content.addClass(COLLAPSE_CONTENTS_CLASS);
        var layout = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["PanelLayout"]();
        _this.layout = layout;
        layout.addWidget(_this._header);
        layout.addWidget(_this._content);
        if (options.widget) {
            _this.widget = options.widget;
        }
        _this.collapsed = false;
        return _this;
    }
    Collapse.prototype.dispose = function () {
        if (this.isDisposed) {
            return;
        }
        _super.prototype.dispose.call(this);
        this._header = null;
        this._widget = null;
        this._content = null;
    };
    Object.defineProperty(Collapse.prototype, "widget", {
        get: function () {
            return this._widget;
        },
        set: function (widget) {
            var oldWidget = this._widget;
            if (oldWidget) {
                oldWidget.disposed.disconnect(this._onChildDisposed, this);
                oldWidget.title.changed.disconnect(this._onTitleChanged, this);
                oldWidget.parent = null;
            }
            this._widget = widget;
            widget.disposed.connect(this._onChildDisposed, this);
            widget.title.changed.connect(this._onTitleChanged, this);
            this._onTitleChanged(widget.title);
            this._content.addWidget(widget);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collapse.prototype, "collapsed", {
        get: function () {
            return this._collapsed;
        },
        set: function (value) {
            // TODO: should we have this check here?
            if (value === this._collapsed) {
                return;
            }
            if (value) {
                this._collapse();
            }
            else {
                this._uncollapse();
            }
        },
        enumerable: true,
        configurable: true
    });
    Collapse.prototype.toggle = function () {
        this.collapsed = !this.collapsed;
    };
    Object.defineProperty(Collapse.prototype, "collapseChanged", {
        get: function () {
            return this._collapseChanged;
        },
        enumerable: true,
        configurable: true
    });
    Collapse.prototype._collapse = function () {
        this._collapsed = true;
        if (this._content) {
            this._content.hide();
        }
        this.removeClass(COLLAPSE_CLASS_OPEN);
        this._collapseChanged.emit(void 0);
    };
    Collapse.prototype._uncollapse = function () {
        this._collapsed = false;
        if (this._content) {
            this._content.show();
        }
        this.addClass(COLLAPSE_CLASS_OPEN);
        this._collapseChanged.emit(void 0);
    };
    /**
     * Handle the DOM events for the Collapse widget.
     *
     * @param event - The DOM event sent to the panel.
     *
     * #### Notes
     * This method implements the DOM `EventListener` interface and is
     * called in response to events on the panel's DOM node. It should
     * not be called directly by user code.
     */
    Collapse.prototype.handleEvent = function (event) {
        switch (event.type) {
            case 'click':
                this._evtClick(event);
                break;
            default:
                break;
        }
    };
    Collapse.prototype._evtClick = function (event) {
        this.toggle();
    };
    /**
     * Handle the `changed` signal of a title object.
     */
    Collapse.prototype._onTitleChanged = function (sender) {
        this._header.node.textContent = this._widget.title.label;
    };
    Collapse.prototype._onChildDisposed = function (sender) {
        this.dispose();
    };
    return Collapse;
}(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Widget"]));

/**
 * The class name added to Accordion instances.
 */
var ACCORDION_CLASS = 'p-Accordion';
/**
 * The class name added to an Accordion child.
 */
var ACCORDION_CHILD_CLASS = 'p-Accordion-child';
var ACCORDION_CHILD_ACTIVE_CLASS = 'p-Accordion-child-active';
/**
 * A panel that supports a collapsible header, made from the widget's title.
 * Clicking on the title expands or contracts the widget.
 */
var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion(options) {
        var _this = _super.call(this, options) || this;
        _this._selection = new _currentselection__WEBPACK_IMPORTED_MODULE_3__["Selection"](_this.widgets);
        _this._selection.selectionChanged.connect(_this._onSelectionChanged, _this);
        _this.addClass(ACCORDION_CLASS);
        return _this;
    }
    Object.defineProperty(Accordion.prototype, "collapseWidgets", {
        /**
         * A read-only sequence of the widgets in the panel.
         *
         * #### Notes
         * This is a read-only property.
         */
        /*  get widgets(): ISequence<Widget> {
            return new ArraySequence(toArray(map((this.layout as PanelLayout).widgets, (w: Collapse) => w.widget)));
          }
        */
        get: function () {
            return this.layout.widgets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Accordion.prototype, "selection", {
        get: function () {
            return this._selection;
        },
        enumerable: true,
        configurable: true
    });
    Accordion.prototype.indexOf = function (widget) {
        return _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0__["ArrayExt"].findFirstIndex(this.collapseWidgets, function (w) { return w.widget === widget; });
    };
    /**
     * Add a widget to the end of the accordion.
     *
     * @param widget - The widget to add to the accordion.
     *
     * @returns The Collapse widget wrapping the added widget.
     *
     * #### Notes
     * The widget will be wrapped in a CollapsedWidget.
     */
    Accordion.prototype.addWidget = function (widget) {
        var collapse = this._wrapWidget(widget);
        collapse.collapsed = true;
        _super.prototype.addWidget.call(this, collapse);
        this._selection.adjustSelectionForInsert(this.widgets.length - 1, collapse);
        return collapse;
    };
    /**
     * Insert a widget at the specified index.
     *
     * @param index - The index at which to insert the widget.
     *
     * @param widget - The widget to insert into to the accordion.
     *
     * #### Notes
     * If the widget is already contained in the panel, it will be moved.
     */
    Accordion.prototype.insertWidget = function (index, widget) {
        var collapse = this._wrapWidget(widget);
        collapse.collapsed = true;
        _super.prototype.insertWidget.call(this, index, collapse);
        this._selection.adjustSelectionForInsert(index, collapse);
    };
    Accordion.prototype.removeWidget = function (widget) {
        var index = this.indexOf(widget);
        if (index >= 0) {
            var collapse = this.collapseWidgets[index];
            widget.parent = null;
            collapse.dispose();
            this._selection.adjustSelectionForRemove(index, null);
        }
    };
    Accordion.prototype._wrapWidget = function (widget) {
        var collapse = new Collapse({ widget: widget });
        collapse.addClass(ACCORDION_CHILD_CLASS);
        collapse.collapseChanged.connect(this._onCollapseChange, this);
        return collapse;
    };
    Accordion.prototype._onCollapseChange = function (sender) {
        if (!sender.collapsed) {
            this._selection.value = sender;
        }
        else if (this._selection.value === sender && sender.collapsed) {
            this._selection.value = null;
        }
    };
    Accordion.prototype._onSelectionChanged = function (sender, change) {
        // Collapse previous widget, open current widget
        var pv = change.previousValue;
        var cv = change.currentValue;
        if (pv) {
            pv.collapsed = true;
            pv.removeClass(ACCORDION_CHILD_ACTIVE_CLASS);
        }
        if (cv) {
            cv.collapsed = false;
            cv.addClass(ACCORDION_CHILD_ACTIVE_CLASS);
        }
    };
    return Accordion;
}(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Panel"]));



/***/ }),

/***/ "JMIS":
/*!*********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_button.js ***!
  \*********************************************************************/
/*! exports provided: ButtonStyleModel, ButtonModel, ButtonView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonStyleModel", function() { return ButtonStyleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModel", function() { return ButtonModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonView", function() { return ButtonView; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version */ "VKie");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ButtonStyleModel = /** @class */ (function (_super) {
    __extends(ButtonStyleModel, _super);
    function ButtonStyleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonStyleModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'ButtonStyleModel',
            _model_module: '@jupyter-widgets/controls',
            _model_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
        });
    };
    ButtonStyleModel.styleProperties = {
        button_color: {
            selector: '',
            attribute: 'background-color',
            default: null
        },
        font_weight: {
            selector: '',
            attribute: 'font-weight',
            default: ''
        }
    };
    return ButtonStyleModel;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["StyleModel"]));

var ButtonModel = /** @class */ (function (_super) {
    __extends(ButtonModel, _super);
    function ButtonModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            description: '',
            tooltip: '',
            disabled: false,
            icon: '',
            button_style: '',
            _view_name: 'ButtonView',
            _model_name: 'ButtonModel',
            style: null
        });
    };
    return ButtonModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"]));

var ButtonView = /** @class */ (function (_super) {
    __extends(ButtonView, _super);
    function ButtonView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    ButtonView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('jupyter-button');
        this.el.classList.add('widget-button');
        this.listenTo(this.model, 'change:button_style', this.update_button_style);
        this.set_button_style();
        this.update(); // Set defaults.
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed. The model may have been
     * changed by another view or by a state update from the back-end.
     */
    ButtonView.prototype.update = function () {
        this.el.disabled = this.model.get('disabled');
        this.el.setAttribute('title', this.model.get('tooltip'));
        var description = this.model.get('description');
        var icon = this.model.get('icon');
        if (description.length || icon.length) {
            this.el.textContent = '';
            if (icon.length) {
                var i = document.createElement('i');
                i.classList.add('fa');
                i.classList.add('fa-' + icon);
                if (description.length === 0) {
                    i.classList.add('center');
                }
                this.el.appendChild(i);
            }
            this.el.appendChild(document.createTextNode(description));
        }
        return _super.prototype.update.call(this);
    };
    ButtonView.prototype.update_button_style = function () {
        this.update_mapped_classes(ButtonView.class_map, 'button_style');
    };
    ButtonView.prototype.set_button_style = function () {
        this.set_mapped_classes(ButtonView.class_map, 'button_style');
    };
    /**
     * Dictionary of events and handlers
     */
    ButtonView.prototype.events = function () {
        // TODO: return typing not needed in Typescript later than 1.8.x
        // See http://stackoverflow.com/questions/22077023/why-cant-i-indirectly-return-an-object-literal-to-satisfy-an-index-signature-re and https://github.com/Microsoft/TypeScript/pull/7029
        return { 'click': '_handle_click' };
    };
    /**
     * Handles when the button is clicked.
     */
    ButtonView.prototype._handle_click = function (event) {
        event.preventDefault();
        this.send({ event: 'click' });
    };
    Object.defineProperty(ButtonView.prototype, "tagName", {
        /**
         * The default tag name.
         *
         * #### Notes
         * This is a read-only attribute.
         */
        get: function () {
            // We can't make this an attribute with a default value
            // since it would be set after it is needed in the
            // constructor.
            return 'button';
        },
        enumerable: true,
        configurable: true
    });
    ButtonView.class_map = {
        primary: ['mod-primary'],
        success: ['mod-success'],
        info: ['mod-info'],
        warning: ['mod-warning'],
        danger: ['mod-danger']
    };
    return ButtonView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));



/***/ }),

/***/ "MIQu":
/*!*********************************************!*\
  !*** ./node_modules/jquery-ui/ui/widget.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "EVdn"), __webpack_require__(/*! ./version */ "Qwlt") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}( function( $ ) {

var widgetUuid = 0;
var widgetSlice = Array.prototype.slice;

$.cleanData = ( function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// Http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
} )( $.cleanData );

$.widget = function( name, base, prototype ) {
	var existingConstructor, constructor, basePrototype;

	// ProxiedPrototype allows the provided prototype to remain unmodified
	// so that it can be used as a mixin for multiple widgets (#8876)
	var proxiedPrototype = {};

	var namespace = name.split( "." )[ 0 ];
	name = name.split( "." )[ 1 ];
	var fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	if ( $.isArray( prototype ) ) {
		prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
	}

	// Create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {

		// Allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// Allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	// Extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,

		// Copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),

		// Track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	} );

	basePrototype = new base();

	// We need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = ( function() {
			function _super() {
				return base.prototype[ prop ].apply( this, arguments );
			}

			function _superApply( args ) {
				return base.prototype[ prop ].apply( this, args );
			}

			return function() {
				var __super = this._super;
				var __superApply = this._superApply;
				var returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		} )();
	} );
	constructor.prototype = $.widget.extend( basePrototype, {

		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	} );

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// Redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
				child._proto );
		} );

		// Remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widgetSlice.call( arguments, 1 );
	var inputIndex = 0;
	var inputLength = input.length;
	var key;
	var value;

	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :

						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );

				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string";
		var args = widgetSlice.call( arguments, 1 );
		var returnValue = this;

		if ( isMethodCall ) {

			// If this is an empty collection, we need to have the instance method
			// return undefined instead of the jQuery instance
			if ( !this.length && options === "instance" ) {
				returnValue = undefined;
			} else {
				this.each( function() {
					var methodValue;
					var instance = $.data( this, fullName );

					if ( options === "instance" ) {
						returnValue = instance;
						return false;
					}

					if ( !instance ) {
						return $.error( "cannot call methods on " + name +
							" prior to initialization; " +
							"attempted to call method '" + options + "'" );
					}

					if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
						return $.error( "no such method '" + options + "' for " + name +
							" widget instance" );
					}

					methodValue = instance[ options ].apply( instance, args );

					if ( methodValue !== instance && methodValue !== undefined ) {
						returnValue = methodValue && methodValue.jquery ?
							returnValue.pushStack( methodValue.get() ) :
							methodValue;
						return false;
					}
				} );
			}
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat( args ) );
			}

			this.each( function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			} );
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",

	options: {
		classes: {},
		disabled: false,

		// Callbacks
		create: null
	},

	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widgetUuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();
		this.classesElementLookup = {};

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			} );
			this.document = $( element.style ?

				// Element within the document
				element.ownerDocument :

				// Element is window or document
				element.document || element );
			this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();

		if ( this.options.disabled ) {
			this._setOptionDisabled( this.options.disabled );
		}

		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},

	_getCreateOptions: function() {
		return {};
	},

	_getCreateEventData: $.noop,

	_create: $.noop,

	_init: $.noop,

	destroy: function() {
		var that = this;

		this._destroy();
		$.each( this.classesElementLookup, function( key, value ) {
			that._removeClass( value, key );
		} );

		// We can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.off( this.eventNamespace )
			.removeData( this.widgetFullName );
		this.widget()
			.off( this.eventNamespace )
			.removeAttr( "aria-disabled" );

		// Clean up events and states
		this.bindings.off( this.eventNamespace );
	},

	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;
		var parts;
		var curOption;
		var i;

		if ( arguments.length === 0 ) {

			// Don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {

			// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},

	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},

	_setOption: function( key, value ) {
		if ( key === "classes" ) {
			this._setOptionClasses( value );
		}

		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this._setOptionDisabled( value );
		}

		return this;
	},

	_setOptionClasses: function( value ) {
		var classKey, elements, currentElements;

		for ( classKey in value ) {
			currentElements = this.classesElementLookup[ classKey ];
			if ( value[ classKey ] === this.options.classes[ classKey ] ||
					!currentElements ||
					!currentElements.length ) {
				continue;
			}

			// We are doing this to create a new jQuery object because the _removeClass() call
			// on the next line is going to destroy the reference to the current elements being
			// tracked. We need to save a copy of this collection so that we can add the new classes
			// below.
			elements = $( currentElements.get() );
			this._removeClass( currentElements, classKey );

			// We don't use _addClass() here, because that uses this.options.classes
			// for generating the string of classes. We want to use the value passed in from
			// _setOption(), this is the new value of the classes option which was passed to
			// _setOption(). We pass this value directly to _classes().
			elements.addClass( this._classes( {
				element: elements,
				keys: classKey,
				classes: value,
				add: true
			} ) );
		}
	},

	_setOptionDisabled: function( value ) {
		this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

		// If the widget is becoming disabled, then nothing is interactive
		if ( value ) {
			this._removeClass( this.hoverable, null, "ui-state-hover" );
			this._removeClass( this.focusable, null, "ui-state-focus" );
		}
	},

	enable: function() {
		return this._setOptions( { disabled: false } );
	},

	disable: function() {
		return this._setOptions( { disabled: true } );
	},

	_classes: function( options ) {
		var full = [];
		var that = this;

		options = $.extend( {
			element: this.element,
			classes: this.options.classes || {}
		}, options );

		function processClassString( classes, checkOption ) {
			var current, i;
			for ( i = 0; i < classes.length; i++ ) {
				current = that.classesElementLookup[ classes[ i ] ] || $();
				if ( options.add ) {
					current = $( $.unique( current.get().concat( options.element.get() ) ) );
				} else {
					current = $( current.not( options.element ).get() );
				}
				that.classesElementLookup[ classes[ i ] ] = current;
				full.push( classes[ i ] );
				if ( checkOption && options.classes[ classes[ i ] ] ) {
					full.push( options.classes[ classes[ i ] ] );
				}
			}
		}

		this._on( options.element, {
			"remove": "_untrackClassesElement"
		} );

		if ( options.keys ) {
			processClassString( options.keys.match( /\S+/g ) || [], true );
		}
		if ( options.extra ) {
			processClassString( options.extra.match( /\S+/g ) || [] );
		}

		return full.join( " " );
	},

	_untrackClassesElement: function( event ) {
		var that = this;
		$.each( that.classesElementLookup, function( key, value ) {
			if ( $.inArray( event.target, value ) !== -1 ) {
				that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
			}
		} );
	},

	_removeClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, false );
	},

	_addClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, true );
	},

	_toggleClass: function( element, keys, extra, add ) {
		add = ( typeof add === "boolean" ) ? add : extra;
		var shift = ( typeof element === "string" || element === null ),
			options = {
				extra: shift ? keys : extra,
				keys: shift ? element : keys,
				element: shift ? this.element : element,
				add: add
			};
		options.element.toggleClass( this._classes( options ), add );
		return this;
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement;
		var instance = this;

		// No suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// No element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {

				// Allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
						$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// Copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ );
			var eventName = match[ 1 ] + instance.eventNamespace;
			var selector = match[ 2 ];

			if ( selector ) {
				delegateElement.on( eventName, selector, handlerProxy );
			} else {
				element.on( eventName, handlerProxy );
			}
		} );
	},

	_off: function( element, eventName ) {
		eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.off( eventName ).off( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
			},
			mouseleave: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
			}
		} );
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
			},
			focusout: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
			}
		} );
	},

	_trigger: function( type, event, data ) {
		var prop, orig;
		var callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();

		// The original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// Copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}

		var hasOptions;
		var effectName = !options ?
			method :
			options === true || typeof options === "number" ?
				defaultEffect :
				options.effect || defaultEffect;

		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}

		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;

		if ( options.delay ) {
			element.delay( options.delay );
		}

		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue( function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			} );
		}
	};
} );

return $.widget;

} ) );


/***/ }),

/***/ "NHgk":
/*!*****************************************!*\
  !*** ./node_modules/jquery-ui/ui/ie.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "EVdn"), __webpack_require__(/*! ./version */ "Qwlt") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
} ( function( $ ) {

// This file is deprecated
return $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );
} ) );


/***/ }),

/***/ "QBwY":
/*!*****************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/slider.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Slider 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Slider
//>>group: Widgets
//>>description: Displays a flexible slider with ranges and accessibility via keyboard.
//>>docs: http://api.jqueryui.com/slider/
//>>demos: http://jqueryui.com/slider/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/slider.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(/*! jquery */ "EVdn"),
			__webpack_require__(/*! ./mouse */ "iGnl"),
			__webpack_require__(/*! ../keycode */ "vBzC"),
			__webpack_require__(/*! ../version */ "Qwlt"),
			__webpack_require__(/*! ../widget */ "MIQu")
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}( function( $ ) {

return $.widget( "ui.slider", $.ui.mouse, {
	version: "1.12.1",
	widgetEventPrefix: "slide",

	options: {
		animate: false,
		classes: {
			"ui-slider": "ui-corner-all",
			"ui-slider-handle": "ui-corner-all",

			// Note: ui-widget-header isn't the most fittingly semantic framework class for this
			// element, but worked best visually with a variety of themes
			"ui-slider-range": "ui-corner-all ui-widget-header"
		},
		distance: 0,
		max: 100,
		min: 0,
		orientation: "horizontal",
		range: false,
		step: 1,
		value: 0,
		values: null,

		// Callbacks
		change: null,
		slide: null,
		start: null,
		stop: null
	},

	// Number of pages in a slider
	// (how many times can you page up/down to go through the whole range)
	numPages: 5,

	_create: function() {
		this._keySliding = false;
		this._mouseSliding = false;
		this._animateOff = true;
		this._handleIndex = null;
		this._detectOrientation();
		this._mouseInit();
		this._calculateNewMax();

		this._addClass( "ui-slider ui-slider-" + this.orientation,
			"ui-widget ui-widget-content" );

		this._refresh();

		this._animateOff = false;
	},

	_refresh: function() {
		this._createRange();
		this._createHandles();
		this._setupEvents();
		this._refreshValue();
	},

	_createHandles: function() {
		var i, handleCount,
			options = this.options,
			existingHandles = this.element.find( ".ui-slider-handle" ),
			handle = "<span tabindex='0'></span>",
			handles = [];

		handleCount = ( options.values && options.values.length ) || 1;

		if ( existingHandles.length > handleCount ) {
			existingHandles.slice( handleCount ).remove();
			existingHandles = existingHandles.slice( 0, handleCount );
		}

		for ( i = existingHandles.length; i < handleCount; i++ ) {
			handles.push( handle );
		}

		this.handles = existingHandles.add( $( handles.join( "" ) ).appendTo( this.element ) );

		this._addClass( this.handles, "ui-slider-handle", "ui-state-default" );

		this.handle = this.handles.eq( 0 );

		this.handles.each( function( i ) {
			$( this )
				.data( "ui-slider-handle-index", i )
				.attr( "tabIndex", 0 );
		} );
	},

	_createRange: function() {
		var options = this.options;

		if ( options.range ) {
			if ( options.range === true ) {
				if ( !options.values ) {
					options.values = [ this._valueMin(), this._valueMin() ];
				} else if ( options.values.length && options.values.length !== 2 ) {
					options.values = [ options.values[ 0 ], options.values[ 0 ] ];
				} else if ( $.isArray( options.values ) ) {
					options.values = options.values.slice( 0 );
				}
			}

			if ( !this.range || !this.range.length ) {
				this.range = $( "<div>" )
					.appendTo( this.element );

				this._addClass( this.range, "ui-slider-range" );
			} else {
				this._removeClass( this.range, "ui-slider-range-min ui-slider-range-max" );

				// Handle range switching from true to min/max
				this.range.css( {
					"left": "",
					"bottom": ""
				} );
			}
			if ( options.range === "min" || options.range === "max" ) {
				this._addClass( this.range, "ui-slider-range-" + options.range );
			}
		} else {
			if ( this.range ) {
				this.range.remove();
			}
			this.range = null;
		}
	},

	_setupEvents: function() {
		this._off( this.handles );
		this._on( this.handles, this._handleEvents );
		this._hoverable( this.handles );
		this._focusable( this.handles );
	},

	_destroy: function() {
		this.handles.remove();
		if ( this.range ) {
			this.range.remove();
		}

		this._mouseDestroy();
	},

	_mouseCapture: function( event ) {
		var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle,
			that = this,
			o = this.options;

		if ( o.disabled ) {
			return false;
		}

		this.elementSize = {
			width: this.element.outerWidth(),
			height: this.element.outerHeight()
		};
		this.elementOffset = this.element.offset();

		position = { x: event.pageX, y: event.pageY };
		normValue = this._normValueFromMouse( position );
		distance = this._valueMax() - this._valueMin() + 1;
		this.handles.each( function( i ) {
			var thisDistance = Math.abs( normValue - that.values( i ) );
			if ( ( distance > thisDistance ) ||
				( distance === thisDistance &&
					( i === that._lastChangedValue || that.values( i ) === o.min ) ) ) {
				distance = thisDistance;
				closestHandle = $( this );
				index = i;
			}
		} );

		allowed = this._start( event, index );
		if ( allowed === false ) {
			return false;
		}
		this._mouseSliding = true;

		this._handleIndex = index;

		this._addClass( closestHandle, null, "ui-state-active" );
		closestHandle.trigger( "focus" );

		offset = closestHandle.offset();
		mouseOverHandle = !$( event.target ).parents().addBack().is( ".ui-slider-handle" );
		this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
			left: event.pageX - offset.left - ( closestHandle.width() / 2 ),
			top: event.pageY - offset.top -
				( closestHandle.height() / 2 ) -
				( parseInt( closestHandle.css( "borderTopWidth" ), 10 ) || 0 ) -
				( parseInt( closestHandle.css( "borderBottomWidth" ), 10 ) || 0 ) +
				( parseInt( closestHandle.css( "marginTop" ), 10 ) || 0 )
		};

		if ( !this.handles.hasClass( "ui-state-hover" ) ) {
			this._slide( event, index, normValue );
		}
		this._animateOff = true;
		return true;
	},

	_mouseStart: function() {
		return true;
	},

	_mouseDrag: function( event ) {
		var position = { x: event.pageX, y: event.pageY },
			normValue = this._normValueFromMouse( position );

		this._slide( event, this._handleIndex, normValue );

		return false;
	},

	_mouseStop: function( event ) {
		this._removeClass( this.handles, null, "ui-state-active" );
		this._mouseSliding = false;

		this._stop( event, this._handleIndex );
		this._change( event, this._handleIndex );

		this._handleIndex = null;
		this._clickOffset = null;
		this._animateOff = false;

		return false;
	},

	_detectOrientation: function() {
		this.orientation = ( this.options.orientation === "vertical" ) ? "vertical" : "horizontal";
	},

	_normValueFromMouse: function( position ) {
		var pixelTotal,
			pixelMouse,
			percentMouse,
			valueTotal,
			valueMouse;

		if ( this.orientation === "horizontal" ) {
			pixelTotal = this.elementSize.width;
			pixelMouse = position.x - this.elementOffset.left -
				( this._clickOffset ? this._clickOffset.left : 0 );
		} else {
			pixelTotal = this.elementSize.height;
			pixelMouse = position.y - this.elementOffset.top -
				( this._clickOffset ? this._clickOffset.top : 0 );
		}

		percentMouse = ( pixelMouse / pixelTotal );
		if ( percentMouse > 1 ) {
			percentMouse = 1;
		}
		if ( percentMouse < 0 ) {
			percentMouse = 0;
		}
		if ( this.orientation === "vertical" ) {
			percentMouse = 1 - percentMouse;
		}

		valueTotal = this._valueMax() - this._valueMin();
		valueMouse = this._valueMin() + percentMouse * valueTotal;

		return this._trimAlignValue( valueMouse );
	},

	_uiHash: function( index, value, values ) {
		var uiHash = {
			handle: this.handles[ index ],
			handleIndex: index,
			value: value !== undefined ? value : this.value()
		};

		if ( this._hasMultipleValues() ) {
			uiHash.value = value !== undefined ? value : this.values( index );
			uiHash.values = values || this.values();
		}

		return uiHash;
	},

	_hasMultipleValues: function() {
		return this.options.values && this.options.values.length;
	},

	_start: function( event, index ) {
		return this._trigger( "start", event, this._uiHash( index ) );
	},

	_slide: function( event, index, newVal ) {
		var allowed, otherVal,
			currentValue = this.value(),
			newValues = this.values();

		if ( this._hasMultipleValues() ) {
			otherVal = this.values( index ? 0 : 1 );
			currentValue = this.values( index );

			if ( this.options.values.length === 2 && this.options.range === true ) {
				newVal =  index === 0 ? Math.min( otherVal, newVal ) : Math.max( otherVal, newVal );
			}

			newValues[ index ] = newVal;
		}

		if ( newVal === currentValue ) {
			return;
		}

		allowed = this._trigger( "slide", event, this._uiHash( index, newVal, newValues ) );

		// A slide can be canceled by returning false from the slide callback
		if ( allowed === false ) {
			return;
		}

		if ( this._hasMultipleValues() ) {
			this.values( index, newVal );
		} else {
			this.value( newVal );
		}
	},

	_stop: function( event, index ) {
		this._trigger( "stop", event, this._uiHash( index ) );
	},

	_change: function( event, index ) {
		if ( !this._keySliding && !this._mouseSliding ) {

			//store the last changed value index for reference when handles overlap
			this._lastChangedValue = index;
			this._trigger( "change", event, this._uiHash( index ) );
		}
	},

	value: function( newValue ) {
		if ( arguments.length ) {
			this.options.value = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, 0 );
			return;
		}

		return this._value();
	},

	values: function( index, newValue ) {
		var vals,
			newValues,
			i;

		if ( arguments.length > 1 ) {
			this.options.values[ index ] = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, index );
			return;
		}

		if ( arguments.length ) {
			if ( $.isArray( arguments[ 0 ] ) ) {
				vals = this.options.values;
				newValues = arguments[ 0 ];
				for ( i = 0; i < vals.length; i += 1 ) {
					vals[ i ] = this._trimAlignValue( newValues[ i ] );
					this._change( null, i );
				}
				this._refreshValue();
			} else {
				if ( this._hasMultipleValues() ) {
					return this._values( index );
				} else {
					return this.value();
				}
			}
		} else {
			return this._values();
		}
	},

	_setOption: function( key, value ) {
		var i,
			valsLength = 0;

		if ( key === "range" && this.options.range === true ) {
			if ( value === "min" ) {
				this.options.value = this._values( 0 );
				this.options.values = null;
			} else if ( value === "max" ) {
				this.options.value = this._values( this.options.values.length - 1 );
				this.options.values = null;
			}
		}

		if ( $.isArray( this.options.values ) ) {
			valsLength = this.options.values.length;
		}

		this._super( key, value );

		switch ( key ) {
			case "orientation":
				this._detectOrientation();
				this._removeClass( "ui-slider-horizontal ui-slider-vertical" )
					._addClass( "ui-slider-" + this.orientation );
				this._refreshValue();
				if ( this.options.range ) {
					this._refreshRange( value );
				}

				// Reset positioning from previous orientation
				this.handles.css( value === "horizontal" ? "bottom" : "left", "" );
				break;
			case "value":
				this._animateOff = true;
				this._refreshValue();
				this._change( null, 0 );
				this._animateOff = false;
				break;
			case "values":
				this._animateOff = true;
				this._refreshValue();

				// Start from the last handle to prevent unreachable handles (#9046)
				for ( i = valsLength - 1; i >= 0; i-- ) {
					this._change( null, i );
				}
				this._animateOff = false;
				break;
			case "step":
			case "min":
			case "max":
				this._animateOff = true;
				this._calculateNewMax();
				this._refreshValue();
				this._animateOff = false;
				break;
			case "range":
				this._animateOff = true;
				this._refresh();
				this._animateOff = false;
				break;
		}
	},

	_setOptionDisabled: function( value ) {
		this._super( value );

		this._toggleClass( null, "ui-state-disabled", !!value );
	},

	//internal value getter
	// _value() returns value trimmed by min and max, aligned by step
	_value: function() {
		var val = this.options.value;
		val = this._trimAlignValue( val );

		return val;
	},

	//internal values getter
	// _values() returns array of values trimmed by min and max, aligned by step
	// _values( index ) returns single value trimmed by min and max, aligned by step
	_values: function( index ) {
		var val,
			vals,
			i;

		if ( arguments.length ) {
			val = this.options.values[ index ];
			val = this._trimAlignValue( val );

			return val;
		} else if ( this._hasMultipleValues() ) {

			// .slice() creates a copy of the array
			// this copy gets trimmed by min and max and then returned
			vals = this.options.values.slice();
			for ( i = 0; i < vals.length; i += 1 ) {
				vals[ i ] = this._trimAlignValue( vals[ i ] );
			}

			return vals;
		} else {
			return [];
		}
	},

	// Returns the step-aligned value that val is closest to, between (inclusive) min and max
	_trimAlignValue: function( val ) {
		if ( val <= this._valueMin() ) {
			return this._valueMin();
		}
		if ( val >= this._valueMax() ) {
			return this._valueMax();
		}
		var step = ( this.options.step > 0 ) ? this.options.step : 1,
			valModStep = ( val - this._valueMin() ) % step,
			alignValue = val - valModStep;

		if ( Math.abs( valModStep ) * 2 >= step ) {
			alignValue += ( valModStep > 0 ) ? step : ( -step );
		}

		// Since JavaScript has problems with large floats, round
		// the final value to 5 digits after the decimal point (see #4124)
		return parseFloat( alignValue.toFixed( 5 ) );
	},

	_calculateNewMax: function() {
		var max = this.options.max,
			min = this._valueMin(),
			step = this.options.step,
			aboveMin = Math.round( ( max - min ) / step ) * step;
		max = aboveMin + min;
		if ( max > this.options.max ) {

			//If max is not divisible by step, rounding off may increase its value
			max -= step;
		}
		this.max = parseFloat( max.toFixed( this._precision() ) );
	},

	_precision: function() {
		var precision = this._precisionOf( this.options.step );
		if ( this.options.min !== null ) {
			precision = Math.max( precision, this._precisionOf( this.options.min ) );
		}
		return precision;
	},

	_precisionOf: function( num ) {
		var str = num.toString(),
			decimal = str.indexOf( "." );
		return decimal === -1 ? 0 : str.length - decimal - 1;
	},

	_valueMin: function() {
		return this.options.min;
	},

	_valueMax: function() {
		return this.max;
	},

	_refreshRange: function( orientation ) {
		if ( orientation === "vertical" ) {
			this.range.css( { "width": "", "left": "" } );
		}
		if ( orientation === "horizontal" ) {
			this.range.css( { "height": "", "bottom": "" } );
		}
	},

	_refreshValue: function() {
		var lastValPercent, valPercent, value, valueMin, valueMax,
			oRange = this.options.range,
			o = this.options,
			that = this,
			animate = ( !this._animateOff ) ? o.animate : false,
			_set = {};

		if ( this._hasMultipleValues() ) {
			this.handles.each( function( i ) {
				valPercent = ( that.values( i ) - that._valueMin() ) / ( that._valueMax() -
					that._valueMin() ) * 100;
				_set[ that.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
				$( this ).stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );
				if ( that.options.range === true ) {
					if ( that.orientation === "horizontal" ) {
						if ( i === 0 ) {
							that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
								left: valPercent + "%"
							}, o.animate );
						}
						if ( i === 1 ) {
							that.range[ animate ? "animate" : "css" ]( {
								width: ( valPercent - lastValPercent ) + "%"
							}, {
								queue: false,
								duration: o.animate
							} );
						}
					} else {
						if ( i === 0 ) {
							that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
								bottom: ( valPercent ) + "%"
							}, o.animate );
						}
						if ( i === 1 ) {
							that.range[ animate ? "animate" : "css" ]( {
								height: ( valPercent - lastValPercent ) + "%"
							}, {
								queue: false,
								duration: o.animate
							} );
						}
					}
				}
				lastValPercent = valPercent;
			} );
		} else {
			value = this.value();
			valueMin = this._valueMin();
			valueMax = this._valueMax();
			valPercent = ( valueMax !== valueMin ) ?
					( value - valueMin ) / ( valueMax - valueMin ) * 100 :
					0;
			_set[ this.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
			this.handle.stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );

			if ( oRange === "min" && this.orientation === "horizontal" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					width: valPercent + "%"
				}, o.animate );
			}
			if ( oRange === "max" && this.orientation === "horizontal" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					width: ( 100 - valPercent ) + "%"
				}, o.animate );
			}
			if ( oRange === "min" && this.orientation === "vertical" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					height: valPercent + "%"
				}, o.animate );
			}
			if ( oRange === "max" && this.orientation === "vertical" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					height: ( 100 - valPercent ) + "%"
				}, o.animate );
			}
		}
	},

	_handleEvents: {
		keydown: function( event ) {
			var allowed, curVal, newVal, step,
				index = $( event.target ).data( "ui-slider-handle-index" );

			switch ( event.keyCode ) {
				case $.ui.keyCode.HOME:
				case $.ui.keyCode.END:
				case $.ui.keyCode.PAGE_UP:
				case $.ui.keyCode.PAGE_DOWN:
				case $.ui.keyCode.UP:
				case $.ui.keyCode.RIGHT:
				case $.ui.keyCode.DOWN:
				case $.ui.keyCode.LEFT:
					event.preventDefault();
					if ( !this._keySliding ) {
						this._keySliding = true;
						this._addClass( $( event.target ), null, "ui-state-active" );
						allowed = this._start( event, index );
						if ( allowed === false ) {
							return;
						}
					}
					break;
			}

			step = this.options.step;
			if ( this._hasMultipleValues() ) {
				curVal = newVal = this.values( index );
			} else {
				curVal = newVal = this.value();
			}

			switch ( event.keyCode ) {
				case $.ui.keyCode.HOME:
					newVal = this._valueMin();
					break;
				case $.ui.keyCode.END:
					newVal = this._valueMax();
					break;
				case $.ui.keyCode.PAGE_UP:
					newVal = this._trimAlignValue(
						curVal + ( ( this._valueMax() - this._valueMin() ) / this.numPages )
					);
					break;
				case $.ui.keyCode.PAGE_DOWN:
					newVal = this._trimAlignValue(
						curVal - ( ( this._valueMax() - this._valueMin() ) / this.numPages ) );
					break;
				case $.ui.keyCode.UP:
				case $.ui.keyCode.RIGHT:
					if ( curVal === this._valueMax() ) {
						return;
					}
					newVal = this._trimAlignValue( curVal + step );
					break;
				case $.ui.keyCode.DOWN:
				case $.ui.keyCode.LEFT:
					if ( curVal === this._valueMin() ) {
						return;
					}
					newVal = this._trimAlignValue( curVal - step );
					break;
			}

			this._slide( event, index, newVal );
		},
		keyup: function( event ) {
			var index = $( event.target ).data( "ui-slider-handle-index" );

			if ( this._keySliding ) {
				this._keySliding = false;
				this._stop( event, index );
				this._change( event, index );
				this._removeClass( $( event.target ), null, "ui-state-active" );
			}
		}
	}
} );

} ) );


/***/ }),

/***/ "Qwlt":
/*!**********************************************!*\
  !*** ./node_modules/jquery-ui/ui/version.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "EVdn") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
} ( function( $ ) {

$.ui = $.ui || {};

return $.ui.version = "1.12.1";

} ) );


/***/ }),

/***/ "SisM":
/*!*************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/utils.js ***!
  \*************************************************************/
/*! exports provided: uuid, WrappedError, resolvePromisesDict, reject, typeset, escape_html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return reject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeset", function() { return typeset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape_html", function() { return escape_html; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["uuid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrappedError", function() { return _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["WrappedError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvePromisesDict", function() { return _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["resolvePromisesDict"]; });

// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


/**
 * Creates a wrappable Promise rejection function.
 *
 * Creates a function that returns a Promise.reject with a new WrappedError
 * that has the provided message and wraps the original error that
 * caused the promise to reject.
 */
function reject(message, log) {
    return function promiseRejection(error) {
        var wrapped_error = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["WrappedError"](message, error);
        if (log) {
            console.error(wrapped_error);
        }
        return Promise.reject(wrapped_error);
    };
}
/**
 * Apply MathJax rendering to an element, and optionally set its text.
 *
 * If MathJax is not available, make no changes.
 *
 * Parameters
 * ----------
 * element: Node
 * text: optional string
 */
function typeset(element, text) {
    if (text !== void 0) {
        element.textContent = text;
    }
    if (window.MathJax !== void 0) {
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, element]);
    }
}
/**
 * escape text to HTML
 */
function escape_html(text) {
    var esc = document.createElement('div');
    esc.textContent = text;
    return esc.innerHTML;
}


/***/ }),

/***/ "TtYL":
/*!******************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_int.js ***!
  \******************************************************************/
/*! exports provided: IntModel, BoundedIntModel, SliderStyleModel, IntSliderModel, IntRangeSliderModel, BaseIntSliderView, IntRangeSliderView, IntSliderView, IntTextModel, BoundedIntTextModel, IntTextView, ProgressStyleModel, IntProgressModel, ProgressView, PlayModel, PlayView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntModel", function() { return IntModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundedIntModel", function() { return BoundedIntModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderStyleModel", function() { return SliderStyleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntSliderModel", function() { return IntSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntRangeSliderModel", function() { return IntRangeSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseIntSliderView", function() { return BaseIntSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntRangeSliderView", function() { return IntRangeSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntSliderView", function() { return IntSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntTextModel", function() { return IntTextModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundedIntTextModel", function() { return BoundedIntTextModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntTextView", function() { return IntTextView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressStyleModel", function() { return ProgressStyleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntProgressModel", function() { return IntProgressModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressView", function() { return ProgressView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayModel", function() { return PlayModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayView", function() { return PlayView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-format */ "rWgG");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery-ui/ui/widgets/slider */ "QBwY");
/* harmony import */ var jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_7__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};








var IntModel = /** @class */ (function (_super) {
    __extends(IntModel, _super);
    function IntModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'IntModel',
            value: 0,
        });
    };
    return IntModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var BoundedIntModel = /** @class */ (function (_super) {
    __extends(BoundedIntModel, _super);
    function BoundedIntModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoundedIntModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'BoundedIntModel',
            max: 100,
            min: 0
        });
    };
    return BoundedIntModel;
}(IntModel));

var SliderStyleModel = /** @class */ (function (_super) {
    __extends(SliderStyleModel, _super);
    function SliderStyleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SliderStyleModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'SliderStyleModel' });
    };
    SliderStyleModel.styleProperties = __assign({}, _widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyleModel"].styleProperties, { handle_color: {
            selector: '.ui-slider-handle',
            attribute: 'background-color',
            default: null
        } });
    return SliderStyleModel;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyleModel"]));

var IntSliderModel = /** @class */ (function (_super) {
    __extends(IntSliderModel, _super);
    function IntSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntSliderModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'IntSliderModel',
            _view_name: 'IntSliderView',
            step: 1,
            orientation: 'horizontal',
            readout: true,
            readout_format: 'd',
            continuous_update: true,
            style: null,
            disabled: false,
        });
    };
    IntSliderModel.prototype.initialize = function (attributes, options) {
        _super.prototype.initialize.call(this, attributes, options);
        this.on('change:readout_format', this.update_readout_format, this);
        this.update_readout_format();
    };
    IntSliderModel.prototype.update_readout_format = function () {
        this.readout_formatter = Object(d3_format__WEBPACK_IMPORTED_MODULE_4__["format"])(this.get('readout_format'));
    };
    return IntSliderModel;
}(BoundedIntModel));

var IntRangeSliderModel = /** @class */ (function (_super) {
    __extends(IntRangeSliderModel, _super);
    function IntRangeSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IntRangeSliderModel;
}(IntSliderModel));

var BaseIntSliderView = /** @class */ (function (_super) {
    __extends(BaseIntSliderView, _super);
    function BaseIntSliderView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._parse_value = parseInt;
        return _this;
    }
    BaseIntSliderView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-slider');
        this.el.classList.add('widget-hslider');
        (this.$slider = jquery__WEBPACK_IMPORTED_MODULE_6___default()('<div />'))
            .slider({
            slide: this.handleSliderChange.bind(this),
            stop: this.handleSliderChanged.bind(this)
        })
            .addClass('slider');
        // Put the slider in a container
        this.slider_container = document.createElement('div');
        this.slider_container.classList.add('slider-container');
        this.slider_container.appendChild(this.$slider[0]);
        this.el.appendChild(this.slider_container);
        this.readout = document.createElement('div');
        this.el.appendChild(this.readout);
        this.readout.classList.add('widget-readout');
        this.readout.contentEditable = 'true';
        this.readout.style.display = 'none';
        // Set defaults.
        this.update();
    };
    BaseIntSliderView.prototype.update = function (options) {
        /**
         * Update the contents of this view
         *
         * Called when the model is changed.  The model may have been
         * changed by another view or by a state update from the back-end.
         */
        if (options === undefined || options.updated_view !== this) {
            // JQuery slider option keys.  These keys happen to have a
            // one-to-one mapping with the corresponding keys of the model.
            var jquery_slider_keys = ['step', 'disabled'];
            var that_1 = this;
            that_1.$slider.slider({});
            jquery_slider_keys.forEach(function (key) {
                var model_value = that_1.model.get(key);
                if (model_value !== undefined) {
                    that_1.$slider.slider('option', key, model_value);
                }
            });
            if (this.model.get('disabled')) {
                this.readout.contentEditable = 'false';
            }
            else {
                this.readout.contentEditable = 'true';
            }
            var max = this.model.get('max');
            var min = this.model.get('min');
            if (min <= max) {
                if (max !== undefined) {
                    this.$slider.slider('option', 'max', max);
                }
                if (min !== undefined) {
                    this.$slider.slider('option', 'min', min);
                }
            }
            // WORKAROUND FOR JQUERY SLIDER BUG.
            // The horizontal position of the slider handle
            // depends on the value of the slider at the time
            // of orientation change.  Before applying the new
            // workaround, we set the value to the minimum to
            // make sure that the horizontal placement of the
            // handle in the vertical slider is always
            // consistent.
            var orientation_1 = this.model.get('orientation');
            this.$slider.slider('option', 'orientation', orientation_1);
            // Use the right CSS classes for vertical & horizontal sliders
            if (orientation_1 === 'vertical') {
                this.el.classList.remove('widget-hslider');
                this.el.classList.add('widget-vslider');
                this.el.classList.remove('widget-inline-hbox');
                this.el.classList.add('widget-inline-vbox');
            }
            else {
                this.el.classList.remove('widget-vslider');
                this.el.classList.add('widget-hslider');
                this.el.classList.remove('widget-inline-vbox');
                this.el.classList.add('widget-inline-hbox');
            }
            var readout = this.model.get('readout');
            if (readout) {
                this.readout.style.display = '';
                this.displayed.then(function () {
                    if (that_1.readout_overflow()) {
                        that_1.readout.classList.add('overflow');
                    }
                    else {
                        that_1.readout.classList.remove('overflow');
                    }
                });
            }
            else {
                this.readout.style.display = 'none';
            }
        }
        return _super.prototype.update.call(this);
    };
    /**
     * Returns true if the readout box content overflows.
     */
    BaseIntSliderView.prototype.readout_overflow = function () {
        return this.readout.scrollWidth > this.readout.clientWidth;
    };
    BaseIntSliderView.prototype.events = function () {
        return {
            // Dictionary of events and their handlers.
            'slide': 'handleSliderChange',
            'slidestop': 'handleSliderChanged',
            'blur [contentEditable=true]': 'handleTextChange',
            'keydown [contentEditable=true]': 'handleKeyDown'
        };
    };
    BaseIntSliderView.prototype.handleKeyDown = function (e) {
        if (e.keyCode === 13) { /* keyboard keycodes `enter` */
            e.preventDefault();
            this.handleTextChange();
        }
    };
    /**
     * Validate the value of the slider before sending it to the back-end
     * and applying it to the other views on the page.
     */
    BaseIntSliderView.prototype._validate_slide_value = function (x) {
        return Math.floor(x);
    };
    return BaseIntSliderView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var IntRangeSliderView = /** @class */ (function (_super) {
    __extends(IntRangeSliderView, _super);
    function IntRangeSliderView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // range numbers can be separated by a hyphen, colon, or an en-dash
        _this._range_regex = /^\s*([+-]?\d+)\s*[-:–]\s*([+-]?\d+)/;
        return _this;
    }
    IntRangeSliderView.prototype.update = function (options) {
        _super.prototype.update.call(this, options);
        this.$slider.slider('option', 'range', true);
        // values for the range case are validated python-side in
        // _Bounded{Int,Float}RangeWidget._validate
        var value = this.model.get('value');
        this.$slider.slider('option', 'values', value.slice());
        this.readout.textContent = this.valueToString(value);
        if (this.model.get('value') !== value) {
            this.model.set('value', value, { updated_view: this });
            this.touch();
        }
    };
    /**
     * Write value to a string
     */
    IntRangeSliderView.prototype.valueToString = function (value) {
        var format = this.model.readout_formatter;
        return value.map(function (v) {
            return format(v);
        }).join(' – ');
    };
    /**
     * Parse value from a string
     */
    IntRangeSliderView.prototype.stringToValue = function (text) {
        // ranges can be expressed either 'val-val' or 'val:val' (+spaces)
        var match = this._range_regex.exec(text);
        if (match) {
            return [this._parse_value(match[1]), this._parse_value(match[2])];
        }
        else {
            return null;
        }
    };
    /**
     * this handles the entry of text into the contentEditable label first, the
     * value is checked if it contains a parseable value then it is clamped
     * within the min-max range of the slider finally, the model is updated if
     * the value is to be changed
     *
     * if any of these conditions are not met, the text is reset
     */
    IntRangeSliderView.prototype.handleTextChange = function () {
        var value = this.stringToValue(this.readout.textContent);
        var vmin = this.model.get('min');
        var vmax = this.model.get('max');
        // reject input where NaN or lower > upper
        if (value === null ||
            isNaN(value[0]) ||
            isNaN(value[1]) ||
            (value[0] > value[1])) {
            this.readout.textContent = this.valueToString(this.model.get('value'));
        }
        else {
            // clamp to range
            value = [Math.max(Math.min(value[0], vmax), vmin),
                Math.max(Math.min(value[1], vmax), vmin)];
            if ((value[0] !== this.model.get('value')[0]) ||
                (value[1] !== this.model.get('value')[1])) {
                this.readout.textContent = this.valueToString(value);
                this.model.set('value', value, { updated_view: this });
                this.touch();
            }
            else {
                this.readout.textContent = this.valueToString(this.model.get('value'));
            }
        }
    };
    /**
     * Called when the slider value is changing.
     */
    IntRangeSliderView.prototype.handleSliderChange = function (e, ui) {
        var actual_value = ui.values.map(this._validate_slide_value);
        this.readout.textContent = this.valueToString(actual_value);
        // Only persist the value while sliding if the continuous_update
        // trait is set to true.
        if (this.model.get('continuous_update')) {
            this.handleSliderChanged(e, ui);
        }
    };
    /**
     * Called when the slider value has changed.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    IntRangeSliderView.prototype.handleSliderChanged = function (e, ui) {
        var actual_value = ui.values.map(this._validate_slide_value);
        this.model.set('value', actual_value, { updated_view: this });
        this.touch();
    };
    return IntRangeSliderView;
}(BaseIntSliderView));

var IntSliderView = /** @class */ (function (_super) {
    __extends(IntSliderView, _super);
    function IntSliderView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntSliderView.prototype.update = function (options) {
        _super.prototype.update.call(this, options);
        var min = this.model.get('min');
        var max = this.model.get('max');
        var value = this.model.get('value');
        if (value > max) {
            value = max;
        }
        else if (value < min) {
            value = min;
        }
        this.$slider.slider('option', 'value', value);
        this.readout.textContent = this.valueToString(value);
        if (this.model.get('value') !== value) {
            this.model.set('value', value, { updated_view: this });
            this.touch();
        }
    };
    /**
     * Write value to a string
     */
    IntSliderView.prototype.valueToString = function (value) {
        var format = this.model.readout_formatter;
        return format(value);
    };
    /**
     * Parse value from a string
     */
    IntSliderView.prototype.stringToValue = function (text) {
        return this._parse_value(text);
    };
    /**
     * this handles the entry of text into the contentEditable label first, the
     * value is checked if it contains a parseable value then it is clamped
     * within the min-max range of the slider finally, the model is updated if
     * the value is to be changed
     *
     * if any of these conditions are not met, the text is reset
     */
    IntSliderView.prototype.handleTextChange = function () {
        var value = this.stringToValue(this.readout.textContent);
        var vmin = this.model.get('min');
        var vmax = this.model.get('max');
        if (isNaN(value)) {
            this.readout.textContent = this.valueToString(this.model.get('value'));
        }
        else {
            value = Math.max(Math.min(value, vmax), vmin);
            if (value !== this.model.get('value')) {
                this.readout.textContent = this.valueToString(value);
                this.model.set('value', value, { updated_view: this });
                this.touch();
            }
            else {
                this.readout.textContent = this.valueToString(this.model.get('value'));
            }
        }
    };
    /**
     * Called when the slider value is changing.
     */
    IntSliderView.prototype.handleSliderChange = function (e, ui) {
        var actual_value = this._validate_slide_value(ui.value);
        this.readout.textContent = this.valueToString(actual_value);
        // Only persist the value while sliding if the continuous_update
        // trait is set to true.
        if (this.model.get('continuous_update')) {
            this.handleSliderChanged(e, ui);
        }
    };
    /**
     * Called when the slider value has changed.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    IntSliderView.prototype.handleSliderChanged = function (e, ui) {
        var actual_value = this._validate_slide_value(ui.value);
        this.model.set('value', actual_value, { updated_view: this });
        this.touch();
    };
    return IntSliderView;
}(BaseIntSliderView));

var IntTextModel = /** @class */ (function (_super) {
    __extends(IntTextModel, _super);
    function IntTextModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntTextModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'IntTextModel',
            _view_name: 'IntTextView',
            disabled: false,
            continuous_update: false,
        });
    };
    return IntTextModel;
}(IntModel));

var BoundedIntTextModel = /** @class */ (function (_super) {
    __extends(BoundedIntTextModel, _super);
    function BoundedIntTextModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoundedIntTextModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'BoundedIntTextModel',
            _view_name: 'IntTextView',
            disabled: false,
            continuous_update: false,
            step: 1,
        });
    };
    return BoundedIntTextModel;
}(BoundedIntModel));

var IntTextView = /** @class */ (function (_super) {
    __extends(IntTextView, _super);
    function IntTextView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._parse_value = parseInt;
        _this._default_step = '1';
        return _this;
    }
    IntTextView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-text');
        this.textbox = document.createElement('input');
        this.textbox.type = 'number';
        this.textbox.required = true;
        this.textbox.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])();
        this.el.appendChild(this.textbox);
        this.update(); // Set defaults.
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    IntTextView.prototype.update = function (options) {
        if (options === undefined || options.updated_view !== this) {
            var value = this.model.get('value');
            if (this._parse_value(this.textbox.value) !== value) {
                this.textbox.value = value.toString();
            }
            if (this.model.get('min') !== undefined) {
                this.textbox.min = this.model.get('min');
            }
            if (this.model.get('max') !== undefined) {
                this.textbox.max = this.model.get('max');
            }
            if (this.model.get('step') !== undefined
                && this.model.get('step') !== null) {
                this.textbox.step = this.model.get('step');
            }
            else {
                this.textbox.step = this._default_step;
            }
            this.textbox.disabled = this.model.get('disabled');
        }
        return _super.prototype.update.call(this);
    };
    IntTextView.prototype.events = function () {
        return {
            'keydown input': 'handleKeyDown',
            'keypress input': 'handleKeypress',
            'keyup input': 'handleKeyUp',
            'input input': 'handleChanging',
            'change input': 'handleChanged'
        };
    };
    /**
     * Handle key down
     *
     * Stop propagation so the event isn't sent to the application.
     */
    IntTextView.prototype.handleKeyDown = function (e) {
        e.stopPropagation();
    };
    /**
     * Handles key press
     */
    IntTextView.prototype.handleKeypress = function (e) {
        if (/[e,.\s]/.test(String.fromCharCode(e.keyCode))) {
            e.preventDefault();
        }
    };
    /**
     * Handle key up
     */
    IntTextView.prototype.handleKeyUp = function (e) {
        if (e.altKey || e.ctrlKey) {
            return;
        }
        var target = e.target;
        /* remove invalid characters */
        var value = target.value;
        value = value.replace(/[e,.\s]/g, "");
        if (value.length >= 1) {
            var subvalue = value.substr(1);
            value = value[0] + subvalue.replace(/[+-]/g, "");
        }
        if (target.value != value) {
            e.preventDefault();
            target.value = value;
        }
    };
    /**
     * Call the submit handler if continuous update is true and we are not
     * obviously incomplete.
     */
    IntTextView.prototype.handleChanging = function (e) {
        var target = e.target;
        var trimmed = target.value.trim();
        if (trimmed === '' || (['-', '-.', '.', '+.', '+'].indexOf(trimmed) >= 0)) {
            // incomplete number
            return;
        }
        if (this.model.get('continuous_update')) {
            this.handleChanged(e);
        }
    };
    /**
     * Applies validated input.
     */
    IntTextView.prototype.handleChanged = function (e) {
        var target = e.target;
        var numericalValue = this._parse_value(target.value);
        // If parse failed, reset value to value stored in model.
        if (isNaN(numericalValue)) {
            target.value = this.model.get('value');
        }
        else {
            // Handle both the unbounded and bounded case by
            // checking to see if the max/min properties are defined
            var boundedValue = numericalValue;
            if (this.model.get('max') !== undefined) {
                boundedValue = Math.min(this.model.get('max'), boundedValue);
            }
            if (this.model.get('min') !== undefined) {
                boundedValue = Math.max(this.model.get('min'), boundedValue);
            }
            if (boundedValue !== numericalValue) {
                target.value = boundedValue;
                numericalValue = boundedValue;
            }
            // Apply the value if it has changed.
            if (numericalValue !== this.model.get('value')) {
                this.model.set('value', numericalValue, { updated_view: this });
                this.touch();
            }
        }
    };
    return IntTextView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var ProgressStyleModel = /** @class */ (function (_super) {
    __extends(ProgressStyleModel, _super);
    function ProgressStyleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressStyleModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'ProgressStyleModel' });
    };
    ProgressStyleModel.styleProperties = __assign({}, _widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyleModel"].styleProperties, { bar_color: {
            selector: '.progress-bar',
            attribute: 'background-color',
            default: null
        } });
    return ProgressStyleModel;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyleModel"]));

var IntProgressModel = /** @class */ (function (_super) {
    __extends(IntProgressModel, _super);
    function IntProgressModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntProgressModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'IntProgressModel',
            _view_name: 'ProgressView',
            orientation: 'horizontal',
            bar_style: '',
            style: null
        });
    };
    return IntProgressModel;
}(BoundedIntModel));

var ProgressView = /** @class */ (function (_super) {
    __extends(ProgressView, _super);
    function ProgressView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.listenTo(this.model, 'change:bar_style', this.update_bar_style);
        this.pWidget.addClass('jupyter-widgets');
    };
    ProgressView.prototype.render = function () {
        _super.prototype.render.call(this);
        var orientation = this.model.get('orientation');
        var className = orientation === 'horizontal' ?
            'widget-hprogress' : 'widget-vprogress';
        this.el.classList.add(className);
        this.progress = document.createElement('div');
        this.progress.classList.add('progress');
        this.progress.style.position = 'relative';
        this.el.appendChild(this.progress);
        this.bar = document.createElement('div');
        this.bar.classList.add('progress-bar');
        this.bar.style.position = 'absolute';
        this.bar.style.bottom = '0px';
        this.bar.style.left = '0px';
        this.progress.appendChild(this.bar);
        // Set defaults.
        this.update();
        this.set_bar_style();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    ProgressView.prototype.update = function () {
        var value = this.model.get('value');
        var max = this.model.get('max');
        var min = this.model.get('min');
        var orientation = this.model.get('orientation');
        var percent = 100.0 * (value - min) / (max - min);
        if (orientation === 'horizontal') {
            this.el.classList.remove('widget-inline-vbox');
            this.el.classList.remove('widget-vprogress');
            this.el.classList.add('widget-inline-hbox');
            this.el.classList.add('widget-hprogress');
            this.bar.style.width = percent + '%';
            this.bar.style.height = '100%';
        }
        else {
            this.el.classList.remove('widget-inline-hbox');
            this.el.classList.remove('widget-hprogress');
            this.el.classList.add('widget-inline-vbox');
            this.el.classList.add('widget-vprogress');
            this.bar.style.width = '100%';
            this.bar.style.height = percent + '%';
        }
        return _super.prototype.update.call(this);
    };
    ProgressView.prototype.update_bar_style = function () {
        this.update_mapped_classes(ProgressView.class_map, 'bar_style', this.bar);
    };
    ProgressView.prototype.set_bar_style = function () {
        this.set_mapped_classes(ProgressView.class_map, 'bar_style', this.bar);
    };
    ProgressView.class_map = {
        success: ['progress-bar-success'],
        info: ['progress-bar-info'],
        warning: ['progress-bar-warning'],
        danger: ['progress-bar-danger']
    };
    return ProgressView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var PlayModel = /** @class */ (function (_super) {
    __extends(PlayModel, _super);
    function PlayModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'PlayModel',
            _view_name: 'PlayView',
            _playing: false,
            _repeat: false,
            show_repeat: true,
            interval: 100,
            step: 1,
            disabled: false,
        });
    };
    PlayModel.prototype.initialize = function (attributes, options) {
        _super.prototype.initialize.call(this, attributes, options);
    };
    PlayModel.prototype.loop = function () {
        if (this.get('_playing')) {
            var next_value = this.get('value') + this.get('step');
            if (next_value <= this.get('max')) {
                this.set('value', next_value);
                this.schedule_next();
            }
            else {
                if (this.get('_repeat')) {
                    this.set('value', this.get('min'));
                    this.schedule_next();
                }
                else {
                    this.set('_playing', false);
                }
            }
            this.save_changes();
        }
    };
    PlayModel.prototype.schedule_next = function () {
        window.setTimeout(this.loop.bind(this), this.get('interval'));
    };
    PlayModel.prototype.stop = function () {
        this.set('_playing', false);
        this.set('value', this.get('min'));
        this.save_changes();
    };
    PlayModel.prototype.pause = function () {
        this.set('_playing', false);
        this.save_changes();
    };
    PlayModel.prototype.play = function () {
        this.set('_playing', true);
        if (this.get('value') == this.get('max')) {
            // if the value is at the end, reset if first, and then schedule the next
            this.set('value', this.get('min'));
            this.schedule_next();
            this.save_changes();
        }
        else {
            // otherwise directly start with the next value
            // loop will call save_changes in this case
            this.loop();
        }
    };
    PlayModel.prototype.repeat = function () {
        this.set('_repeat', !this.get('_repeat'));
        this.save_changes();
    };
    return PlayModel;
}(BoundedIntModel));

var PlayView = /** @class */ (function (_super) {
    __extends(PlayView, _super);
    function PlayView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-play');
        this.playButton = document.createElement('button');
        this.pauseButton = document.createElement('button');
        this.stopButton = document.createElement('button');
        this.repeatButton = document.createElement('button');
        this.playButton.className = 'jupyter-button';
        this.pauseButton.className = 'jupyter-button';
        this.stopButton.className = 'jupyter-button';
        this.repeatButton.className = 'jupyter-button';
        this.el.appendChild(this.playButton); // Toggle button with playing
        this.el.appendChild(this.pauseButton); // Disable if not playing
        this.el.appendChild(this.stopButton); // Disable if not playing
        this.el.appendChild(this.repeatButton); // Always enabled, but may be hidden
        var playIcon = document.createElement('i');
        playIcon.className = 'fa fa-play';
        this.playButton.appendChild(playIcon);
        var pauseIcon = document.createElement('i');
        pauseIcon.className = 'fa fa-pause';
        this.pauseButton.appendChild(pauseIcon);
        var stopIcon = document.createElement('i');
        stopIcon.className = 'fa fa-stop';
        this.stopButton.appendChild(stopIcon);
        var repeatIcon = document.createElement('i');
        repeatIcon.className = 'fa fa-retweet';
        this.repeatButton.appendChild(repeatIcon);
        this.playButton.onclick = this.model.play.bind(this.model);
        this.pauseButton.onclick = this.model.pause.bind(this.model);
        this.stopButton.onclick = this.model.stop.bind(this.model);
        this.repeatButton.onclick = this.model.repeat.bind(this.model);
        this.listenTo(this.model, 'change:_playing', this.update_playing);
        this.listenTo(this.model, 'change:_repeat', this.update_repeat);
        this.listenTo(this.model, 'change:show_repeat', this.update_repeat);
        this.update_playing();
        this.update_repeat();
        this.update();
    };
    PlayView.prototype.update = function () {
        var disabled = this.model.get('disabled');
        this.playButton.disabled = disabled;
        this.pauseButton.disabled = disabled;
        this.stopButton.disabled = disabled;
        this.repeatButton.disabled = disabled;
        this.update_playing();
    };
    PlayView.prototype.update_playing = function () {
        var playing = this.model.get('_playing');
        var disabled = this.model.get('disabled');
        if (playing) {
            if (!disabled) {
                this.pauseButton.disabled = false;
            }
            this.playButton.classList.add('mod-active');
        }
        else {
            if (!disabled) {
                this.pauseButton.disabled = true;
            }
            this.playButton.classList.remove('mod-active');
        }
    };
    PlayView.prototype.update_repeat = function () {
        var repeat = this.model.get('_repeat');
        this.repeatButton.style.display = this.model.get('show_repeat') ? this.playButton.style.display : 'none';
        if (repeat) {
            this.repeatButton.classList.add('mod-active');
        }
        else {
            this.repeatButton.classList.remove('mod-active');
        }
    };
    return PlayView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_2__["DOMWidgetView"]));



/***/ }),

/***/ "WSRZ":
/*!*******************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_link.js ***!
  \*******************************************************************/
/*! exports provided: DirectionalLinkModel, LinkModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionalLinkModel", function() { return DirectionalLinkModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkModel", function() { return LinkModel; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var DirectionalLinkModel = /** @class */ (function (_super) {
    __extends(DirectionalLinkModel, _super);
    function DirectionalLinkModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DirectionalLinkModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_2__["extend"](_super.prototype.defaults.call(this), {
            target: undefined,
            source: undefined,
            _model_name: 'DirectionalLinkModel'
        });
    };
    DirectionalLinkModel.prototype.initialize = function (attributes, options) {
        _super.prototype.initialize.call(this, attributes, options);
        this.on('change', this.updateBindings, this);
        this.updateBindings();
    };
    DirectionalLinkModel.prototype.updateValue = function (sourceModel, sourceAttr, targetModel, targetAttr) {
        if (this._updating) {
            return;
        }
        this._updating = true;
        try {
            if (targetModel) {
                targetModel.set(targetAttr, sourceModel.get(sourceAttr));
                targetModel.save_changes();
            }
        }
        finally {
            this._updating = false;
        }
    };
    DirectionalLinkModel.prototype.updateBindings = function () {
        var _a, _b;
        var _this = this;
        this.cleanup();
        _a = this.get('source') || [null, null], this.sourceModel = _a[0], this.sourceAttr = _a[1];
        _b = this.get('target') || [null, null], this.targetModel = _b[0], this.targetAttr = _b[1];
        if (this.sourceModel) {
            this.listenTo(this.sourceModel, 'change:' + this.sourceAttr, function () {
                _this.updateValue(_this.sourceModel, _this.sourceAttr, _this.targetModel, _this.targetAttr);
            });
            this.updateValue(this.sourceModel, this.sourceAttr, this.targetModel, this.targetAttr);
            this.listenToOnce(this.sourceModel, 'destroy', this.cleanup);
        }
        if (this.targetModel) {
            this.listenToOnce(this.targetModel, 'destroy', this.cleanup);
        }
    };
    DirectionalLinkModel.prototype.cleanup = function () {
        // Stop listening to 'change' and 'destroy' events of the source and target
        if (this.sourceModel) {
            this.stopListening(this.sourceModel, 'change:' + this.sourceAttr, null);
            this.stopListening(this.sourceModel, 'destroy', null);
        }
        if (this.targetModel) {
            this.stopListening(this.targetModel, 'destroy', null);
        }
    };
    DirectionalLinkModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreWidgetModel"].serializers, { target: { deserialize: _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["unpack_models"] }, source: { deserialize: _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["unpack_models"] } });
    return DirectionalLinkModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreWidgetModel"]));

var LinkModel = /** @class */ (function (_super) {
    __extends(LinkModel, _super);
    function LinkModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinkModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_2__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'LinkModel'
        });
    };
    LinkModel.prototype.updateBindings = function () {
        var _this = this;
        _super.prototype.updateBindings.call(this);
        if (this.targetModel) {
            this.listenTo(this.targetModel, 'change:' + this.targetAttr, function () {
                _this.updateValue(_this.targetModel, _this.targetAttr, _this.sourceModel, _this.sourceAttr);
            });
        }
    };
    LinkModel.prototype.cleanup = function () {
        _super.prototype.cleanup.call(this);
        if (this.targetModel) {
            this.stopListening(this.targetModel, 'change:' + this.targetAttr, null);
        }
    };
    return LinkModel;
}(DirectionalLinkModel));



/***/ }),

/***/ "XIYl":
/*!*********************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/phosphor/currentselection.js ***!
  \*********************************************************************************/
/*! exports provided: Selection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @phosphor/algorithm */ "rqNV");
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @phosphor/signaling */ "qUp9");
/* harmony import */ var _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
/**
 * A variety of convenience methods for maintaining a current selection
 */


var Selection = /** @class */ (function () {
    function Selection(sequence, options) {
        if (options === void 0) { options = {}; }
        this._array = null;
        this._value = null;
        this._previousValue = null;
        this._selectionChanged = new _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__["Signal"](this);
        this._array = sequence;
        this._insertBehavior = options.insertBehavior || 'select-item-if-needed';
        this._removeBehavior = options.removeBehavior || 'select-item-after';
    }
    Object.defineProperty(Selection.prototype, "selectionChanged", {
        /**
         * A signal emitted when the current item is changed.
         *
         * #### Notes
         * This signal is emitted when the currently selected item is changed either
         * through user or programmatic interaction.
         *
         * Notably, this signal is not emitted when the index of the current item
         * changes due to other items being inserted, removed, or moved, but the
         * current item remains the same. It is only emitted when the actual current
         * item is changed.
         */
        get: function () {
            return this._selectionChanged;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adjust for setting an item.
     *
     * This should be called *after* the set.
     *
     * @param index - The index set.
     * @param oldValue - The old value at the index.
     */
    Selection.prototype.adjustSelectionForSet = function (index) {
        // We just need to send a signal if the currentValue changed.
        // Get the current index and value.
        var pi = this.index;
        var pv = this.value;
        // Exit early if this doesn't affect the selection
        if (index !== pi) {
            return;
        }
        this._updateSelectedValue();
        var cv = this.value;
        // The previous item is now null, since it is no longer in the array.
        this._previousValue = null;
        // Send signal if there was a change
        if (pv !== cv) {
            // Emit the current changed signal.
            this._selectionChanged.emit({
                previousIndex: pi, previousValue: pv,
                currentIndex: pi, currentValue: cv
            });
        }
    };
    Object.defineProperty(Selection.prototype, "value", {
        /**
         * Get the currently selected item.
         *
         * #### Notes
         * This will be `null` if no item is selected.
         */
        get: function () {
            return this._value;
        },
        /**
         * Set the currently selected item.
         *
         * #### Notes
         * If the item does not exist in the vector, the currentValue will be set to
         * `null`. This selects the first entry equal to the desired item.
         */
        set: function (value) {
            if (value === null) {
                this.index = null;
            }
            else {
                this.index = _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0__["ArrayExt"].firstIndexOf(this._array, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "index", {
        /**
         * Get the index of the currently selected item.
         *
         * #### Notes
         * This will be `null` if no item is selected.
         */
        get: function () {
            return this._index;
        },
        /**
         * Set the index of the currently selected tab.
         *
         * @param index - The index to select.
         *
         * #### Notes
         * If the value is out of range, the index will be set to `null`, which
         * indicates no item is selected.
         */
        set: function (index) {
            // Coerce the value to an index.
            var i;
            if (index !== null) {
                i = Math.floor(index);
                if (i < 0 || i >= this._array.length) {
                    i = null;
                }
            }
            else {
                i = null;
            }
            // Bail early if the index will not change.
            if (this._index === i) {
                return;
            }
            // Look up the previous index and item.
            var pi = this._index;
            var pv = this._value;
            // Update the state
            this._index = i;
            this._updateSelectedValue();
            this._previousValue = pv;
            // Emit the current changed signal.
            this._selectionChanged.emit({
                previousIndex: pi, previousValue: pv,
                currentIndex: i, currentValue: this._value
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "insertBehavior", {
        /**
         * Get the selection behavior when inserting a tab.
         */
        get: function () {
            return this._insertBehavior;
        },
        /**
         * Set the selection behavior when inserting a tab.
         */
        set: function (value) {
            this._insertBehavior = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "removeBehavior", {
        /**
         * Get the selection behavior when removing a tab.
         */
        get: function () {
            return this._removeBehavior;
        },
        /**
         * Set the selection behavior when removing a tab.
         */
        set: function (value) {
            this._removeBehavior = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adjust the current index for a tab insert operation.
     *
     * @param i - The new index of the inserted item.
     * @param j - The inserted item.
     *
     * #### Notes
     * This method accounts for the tab bar's insertion behavior when adjusting
     * the current index and emitting the changed signal. This should be called
     * after the insertion.
     */
    Selection.prototype.adjustSelectionForInsert = function (i, item) {
        // Lookup commonly used variables.
        var cv = this._value;
        var ci = this._index;
        var bh = this._insertBehavior;
        // Handle the behavior where the new item is always selected,
        // or the behavior where the new item is selected if needed.
        if (bh === 'select-item' || (bh === 'select-item-if-needed' && ci === null)) {
            this._index = i;
            this._value = item;
            this._previousValue = cv;
            this._selectionChanged.emit({
                previousIndex: ci, previousValue: cv,
                currentIndex: i, currentValue: item
            });
            return;
        }
        // Otherwise, silently adjust the current index if needed.
        if (ci >= i) {
            this._index++;
        }
    };
    /**
     * Adjust the current index for move operation.
     *
     * @param i - The previous index of the item.
     * @param j - The new index of the item.
     *
     * #### Notes
     * This method will not cause the actual current item to change. It silently
     * adjusts the current index to account for the given move.
     */
    Selection.prototype.adjustSelectionForMove = function (i, j) {
        if (this._index === i) {
            this._index = j;
        }
        else if (this._index < i && this._index >= j) {
            this._index++;
        }
        else if (this._index > i && this._index <= j) {
            this._index--;
        }
    };
    /**
     * Clear the selection and history.
     */
    Selection.prototype.clearSelection = function () {
        // Get the current index and item.
        var pi = this._index;
        var pv = this._value;
        // Reset the current index and previous item.
        this._index = null;
        this._value = null;
        this._previousValue = null;
        // If no item was selected, there's nothing else to do.
        if (pi === null) {
            return;
        }
        // Emit the current changed signal.
        this._selectionChanged.emit({
            previousIndex: pi, previousValue: pv,
            currentIndex: this._index, currentValue: this._value
        });
    };
    /**
     * Adjust the current index for an item remove operation.
     *
     * @param i - The former index of the removed item.
     * @param item - The removed item.
     *
     * #### Notes
     * This method accounts for the remove behavior when adjusting the current
     * index and emitting the changed signal. It should be called after the item
     * is removed.
     */
    Selection.prototype.adjustSelectionForRemove = function (i, item) {
        // Lookup commonly used variables.
        var ci = this._index;
        var bh = this._removeBehavior;
        // Silently adjust the index if the current item is not removed.
        if (ci !== i) {
            if (ci > i) {
                this._index--;
            }
            return;
        }
        // No item gets selected if the vector is empty.
        if (this._array.length === 0) {
            // Reset the current index and previous item.
            this._index = null;
            this._value = null;
            this._previousValue = null;
            this._selectionChanged.emit({
                previousIndex: i, previousValue: item,
                currentIndex: this._index, currentValue: this._value
            });
            return;
        }
        // Handle behavior where the next sibling item is selected.
        if (bh === 'select-item-after') {
            this._index = Math.min(i, this._array.length - 1);
            this._updateSelectedValue();
            this._previousValue = null;
            this._selectionChanged.emit({
                previousIndex: i, previousValue: item,
                currentIndex: this._index, currentValue: this._value
            });
            return;
        }
        // Handle behavior where the previous sibling item is selected.
        if (bh === 'select-item-before') {
            this._index = Math.max(0, i - 1);
            this._updateSelectedValue();
            this._previousValue = null;
            this._selectionChanged.emit({
                previousIndex: i, previousValue: item,
                currentIndex: this._index, currentValue: this._value
            });
            return;
        }
        // Handle behavior where the previous history item is selected.
        if (bh === 'select-previous-item') {
            if (this._previousValue) {
                this.value = this._previousValue;
            }
            else {
                this._index = Math.min(i, this._array.length - 1);
                this._updateSelectedValue();
            }
            this._previousValue = null;
            this._selectionChanged.emit({
                previousIndex: i, previousValue: item,
                currentIndex: this._index, currentValue: this.value
            });
            return;
        }
        // Otherwise, no item gets selected.
        this._index = null;
        this._value = null;
        this._previousValue = null;
        this._selectionChanged.emit({
            previousIndex: i, previousValue: item,
            currentIndex: this._index, currentValue: this._value
        });
    };
    /**
     * Set the current value based on the current index.
     */
    Selection.prototype._updateSelectedValue = function () {
        var i = this._index;
        this._value = i !== null ? this._array[i] : null;
    };
    return Selection;
}());



/***/ }),

/***/ "XPeQ":
/*!*************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/index.js ***!
  \*************************************************************/
/*! exports provided: JUPYTER_CONTROLS_VERSION, version, uuid, WrappedError, resolvePromisesDict, reject, typeset, escape_html, DirectionalLinkModel, LinkModel, BoolModel, CheckboxModel, CheckboxView, ToggleButtonModel, ToggleButtonView, ValidModel, ValidView, ButtonStyleModel, ButtonModel, ButtonView, BoxModel, HBoxModel, VBoxModel, BoxView, HBoxView, VBoxView, GridBoxView, GridBoxModel, ImageModel, ImageView, VideoModel, VideoView, AudioModel, AudioView, ColorPickerModel, ColorPickerView, serialize_date, deserialize_date, DatePickerModel, DatePickerView, IntModel, BoundedIntModel, SliderStyleModel, IntSliderModel, IntRangeSliderModel, BaseIntSliderView, IntRangeSliderView, IntSliderView, IntTextModel, BoundedIntTextModel, IntTextView, ProgressStyleModel, IntProgressModel, ProgressView, PlayModel, PlayView, FloatModel, BoundedFloatModel, FloatSliderModel, FloatLogSliderModel, FloatRangeSliderModel, FloatSliderView, FloatLogSliderView, FloatRangeSliderView, FloatTextModel, BoundedFloatTextModel, FloatTextView, FloatProgressModel, ControllerButtonModel, ControllerButtonView, ControllerAxisModel, ControllerAxisView, ControllerModel, ControllerView, SelectionModel, DropdownModel, DropdownView, SelectModel, SelectView, RadioButtonsModel, RadioButtonsView, ToggleButtonsStyleModel, ToggleButtonsModel, ToggleButtonsView, SelectionSliderModel, SelectionSliderView, MultipleSelectionModel, SelectMultipleModel, SelectMultipleView, SelectionRangeSliderModel, SelectionRangeSliderView, SelectionContainerModel, AccordionModel, JupyterPhosphorAccordionWidget, AccordionView, TabModel, JupyterPhosphorTabPanelWidget, TabView, StringModel, HTMLModel, HTMLView, HTMLMathModel, HTMLMathView, LabelModel, LabelView, TextareaModel, TextareaView, TextModel, TextView, PasswordModel, PasswordView, ComboboxModel, ComboboxView, DescriptionStyleModel, DescriptionModel, DescriptionView, LabeledDOMWidgetModel, LabeledDOMWidgetView, FileUploadModel, FileUploadView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["uuid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrappedError", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["WrappedError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvePromisesDict", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["resolvePromisesDict"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["reject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeset", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["typeset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escape_html", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["escape_html"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version */ "VKie");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JUPYTER_CONTROLS_VERSION", function() { return _version__WEBPACK_IMPORTED_MODULE_1__["JUPYTER_CONTROLS_VERSION"]; });

/* harmony import */ var _widget_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget_link */ "WSRZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalLinkModel", function() { return _widget_link__WEBPACK_IMPORTED_MODULE_2__["DirectionalLinkModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkModel", function() { return _widget_link__WEBPACK_IMPORTED_MODULE_2__["LinkModel"]; });

/* harmony import */ var _widget_bool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget_bool */ "+RhG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoolModel", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["BoolModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxModel", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["CheckboxModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxView", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["CheckboxView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonModel", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["ToggleButtonModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonView", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["ToggleButtonView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidModel", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["ValidModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidView", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["ValidView"]; });

/* harmony import */ var _widget_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widget_button */ "JMIS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonStyleModel", function() { return _widget_button__WEBPACK_IMPORTED_MODULE_4__["ButtonStyleModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonModel", function() { return _widget_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonView", function() { return _widget_button__WEBPACK_IMPORTED_MODULE_4__["ButtonView"]; });

/* harmony import */ var _widget_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widget_box */ "jSVB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoxModel", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["BoxModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HBoxModel", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["HBoxModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VBoxModel", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["VBoxModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoxView", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["BoxView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HBoxView", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["HBoxView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VBoxView", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["VBoxView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridBoxView", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["GridBoxView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridBoxModel", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["GridBoxModel"]; });

/* harmony import */ var _widget_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widget_image */ "uhLQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageModel", function() { return _widget_image__WEBPACK_IMPORTED_MODULE_6__["ImageModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageView", function() { return _widget_image__WEBPACK_IMPORTED_MODULE_6__["ImageView"]; });

/* harmony import */ var _widget_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widget_video */ "abMj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoModel", function() { return _widget_video__WEBPACK_IMPORTED_MODULE_7__["VideoModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoView", function() { return _widget_video__WEBPACK_IMPORTED_MODULE_7__["VideoView"]; });

/* harmony import */ var _widget_audio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widget_audio */ "iBkU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudioModel", function() { return _widget_audio__WEBPACK_IMPORTED_MODULE_8__["AudioModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudioView", function() { return _widget_audio__WEBPACK_IMPORTED_MODULE_8__["AudioView"]; });

/* harmony import */ var _widget_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widget_color */ "lGQ9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModel", function() { return _widget_color__WEBPACK_IMPORTED_MODULE_9__["ColorPickerModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerView", function() { return _widget_color__WEBPACK_IMPORTED_MODULE_9__["ColorPickerView"]; });

/* harmony import */ var _widget_date__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widget_date */ "XZ5k");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serialize_date", function() { return _widget_date__WEBPACK_IMPORTED_MODULE_10__["serialize_date"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deserialize_date", function() { return _widget_date__WEBPACK_IMPORTED_MODULE_10__["deserialize_date"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerModel", function() { return _widget_date__WEBPACK_IMPORTED_MODULE_10__["DatePickerModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerView", function() { return _widget_date__WEBPACK_IMPORTED_MODULE_10__["DatePickerView"]; });

/* harmony import */ var _widget_int__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widget_int */ "TtYL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundedIntModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["BoundedIntModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderStyleModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["SliderStyleModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntSliderModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntRangeSliderModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntRangeSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseIntSliderView", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["BaseIntSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntRangeSliderView", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntRangeSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntSliderView", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntTextModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntTextModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundedIntTextModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["BoundedIntTextModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntTextView", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntTextView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressStyleModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["ProgressStyleModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntProgressModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntProgressModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressView", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["ProgressView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["PlayModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayView", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["PlayView"]; });

/* harmony import */ var _widget_float__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widget_float */ "xOfY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundedFloatModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["BoundedFloatModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatSliderModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatLogSliderModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatLogSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatRangeSliderModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatRangeSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatSliderView", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatLogSliderView", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatLogSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatRangeSliderView", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatRangeSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatTextModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatTextModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundedFloatTextModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["BoundedFloatTextModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatTextView", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatTextView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatProgressModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatProgressModel"]; });

/* harmony import */ var _widget_controller__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widget_controller */ "0pQw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerButtonModel", function() { return _widget_controller__WEBPACK_IMPORTED_MODULE_13__["ControllerButtonModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerButtonView", function() { return _widget_controller__WEBPACK_IMPORTED_MODULE_13__["ControllerButtonView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerAxisModel", function() { return _widget_controller__WEBPACK_IMPORTED_MODULE_13__["ControllerAxisModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerAxisView", function() { return _widget_controller__WEBPACK_IMPORTED_MODULE_13__["ControllerAxisView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerModel", function() { return _widget_controller__WEBPACK_IMPORTED_MODULE_13__["ControllerModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerView", function() { return _widget_controller__WEBPACK_IMPORTED_MODULE_13__["ControllerView"]; });

/* harmony import */ var _widget_selection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./widget_selection */ "d61g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectionModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["DropdownModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["DropdownView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonsModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["RadioButtonsModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonsView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["RadioButtonsView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonsStyleModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["ToggleButtonsStyleModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonsModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["ToggleButtonsModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonsView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["ToggleButtonsView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionSliderModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectionSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionSliderView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectionSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultipleSelectionModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["MultipleSelectionModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectMultipleModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectMultipleView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionRangeSliderModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectionRangeSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionRangeSliderView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectionRangeSliderView"]; });

/* harmony import */ var _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./widget_selectioncontainer */ "rCYf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionContainerModel", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["SelectionContainerModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionModel", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["AccordionModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JupyterPhosphorAccordionWidget", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["JupyterPhosphorAccordionWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionView", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["AccordionView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabModel", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["TabModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JupyterPhosphorTabPanelWidget", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["JupyterPhosphorTabPanelWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabView", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["TabView"]; });

/* harmony import */ var _widget_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./widget_string */ "Y/0+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["StringModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["HTMLModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["HTMLView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLMathModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["HTMLMathModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLMathView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["HTMLMathView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["LabelModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["LabelView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextareaModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["TextareaModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextareaView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["TextareaView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["TextModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["TextView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["PasswordModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["PasswordView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComboboxModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["ComboboxModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComboboxView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["ComboboxView"]; });

/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptionStyleModel", function() { return _widget_description__WEBPACK_IMPORTED_MODULE_17__["DescriptionStyleModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptionModel", function() { return _widget_description__WEBPACK_IMPORTED_MODULE_17__["DescriptionModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptionView", function() { return _widget_description__WEBPACK_IMPORTED_MODULE_17__["DescriptionView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabeledDOMWidgetModel", function() { return _widget_description__WEBPACK_IMPORTED_MODULE_17__["LabeledDOMWidgetModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabeledDOMWidgetView", function() { return _widget_description__WEBPACK_IMPORTED_MODULE_17__["LabeledDOMWidgetView"]; });

/* harmony import */ var _widget_upload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./widget_upload */ "01zH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileUploadModel", function() { return _widget_upload__WEBPACK_IMPORTED_MODULE_18__["FileUploadModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileUploadView", function() { return _widget_upload__WEBPACK_IMPORTED_MODULE_18__["FileUploadView"]; });

// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.



















var version = __webpack_require__(/*! ../package.json */ "iPdL").version;


/***/ }),

/***/ "XZ5k":
/*!*******************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_date.js ***!
  \*******************************************************************/
/*! exports provided: serialize_date, deserialize_date, DatePickerModel, DatePickerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialize_date", function() { return serialize_date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserialize_date", function() { return deserialize_date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerModel", function() { return DatePickerModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerView", function() { return DatePickerView; });
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




function serialize_date(value) {
    if (value === null) {
        return null;
    }
    else {
        return {
            year: value.getUTCFullYear(),
            month: value.getUTCMonth(),
            date: value.getUTCDate()
        };
    }
}
function deserialize_date(value) {
    if (value === null) {
        return null;
    }
    else {
        var date = new Date();
        date.setUTCFullYear(value.year, value.month, value.date);
        date.setUTCHours(0, 0, 0, 0);
        return date;
    }
}
var DatePickerModel = /** @class */ (function (_super) {
    __extends(DatePickerModel, _super);
    function DatePickerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            value: null,
            _model_name: 'DatePickerModel',
            _view_name: 'DatePickerView'
        });
    };
    DatePickerModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDescriptionModel"].serializers, { value: {
            serialize: serialize_date,
            deserialize: deserialize_date
        } });
    return DatePickerModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDescriptionModel"]));

var DatePickerView = /** @class */ (function (_super) {
    __extends(DatePickerView, _super);
    function DatePickerView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-datepicker');
        this._datepicker = document.createElement('input');
        this._datepicker.setAttribute('type', 'date');
        this._datepicker.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        this.el.appendChild(this._datepicker);
        this.listenTo(this.model, 'change:value', this._update_value);
        this._update_value();
        this.update();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed. The model may have been
     * changed by another view or by a state update from the back-end.
     */
    DatePickerView.prototype.update = function (options) {
        if (options === undefined || options.updated_view !== this) {
            this._datepicker.disabled = this.model.get('disabled');
        }
        return _super.prototype.update.call(this);
    };
    DatePickerView.prototype.events = function () {
        // Typescript doesn't understand that these functions are called, so we
        // specifically use them here so it knows they are being used.
        void this._picker_change;
        void this._picker_focusout;
        return {
            'change [type="date"]': '_picker_change',
            'focusout [type="date"]': '_picker_focusout'
        };
    };
    DatePickerView.prototype._update_value = function () {
        var value = this.model.get('value');
        this._datepicker.valueAsDate = value;
    };
    DatePickerView.prototype._picker_change = function () {
        if (!this._datepicker.validity.badInput) {
            this.model.set('value', this._datepicker.valueAsDate);
            this.touch();
        }
    };
    DatePickerView.prototype._picker_focusout = function () {
        if (this._datepicker.validity.badInput) {
            this.model.set('value', null);
            this.touch();
        }
    };
    return DatePickerView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_0__["DescriptionView"]));



/***/ }),

/***/ "Y/0+":
/*!*********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_string.js ***!
  \*********************************************************************/
/*! exports provided: StringModel, HTMLModel, HTMLView, HTMLMathModel, HTMLMathView, LabelModel, LabelView, TextareaModel, TextareaView, TextModel, TextView, PasswordModel, PasswordView, ComboboxModel, ComboboxView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringModel", function() { return StringModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLModel", function() { return HTMLModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLView", function() { return HTMLView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMathModel", function() { return HTMLMathModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMathView", function() { return HTMLMathView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelModel", function() { return LabelModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelView", function() { return LabelView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaModel", function() { return TextareaModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaView", function() { return TextareaView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextModel", function() { return TextModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextView", function() { return TextView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordModel", function() { return PasswordModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordView", function() { return PasswordView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboboxModel", function() { return ComboboxModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboboxView", function() { return ComboboxView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




/**
 * Class name for a combobox with an invlid value.
 */
var INVALID_VALUE_CLASS = 'jpwidgets-invalidComboValue';
var StringModel = /** @class */ (function (_super) {
    __extends(StringModel, _super);
    function StringModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            value: '',
            disabled: false,
            placeholder: '\u200b',
            _model_name: 'StringModel'
        });
    };
    return StringModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var HTMLModel = /** @class */ (function (_super) {
    __extends(HTMLModel, _super);
    function HTMLModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'HTMLView',
            _model_name: 'HTMLModel'
        });
    };
    return HTMLModel;
}(StringModel));

var HTMLView = /** @class */ (function (_super) {
    __extends(HTMLView, _super);
    function HTMLView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    HTMLView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-html');
        this.content = document.createElement('div');
        this.content.classList.add('widget-html-content');
        this.el.appendChild(this.content);
        this.update(); // Set defaults.
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    HTMLView.prototype.update = function () {
        this.content.innerHTML = this.model.get('value');
        return _super.prototype.update.call(this);
    };
    return HTMLView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var HTMLMathModel = /** @class */ (function (_super) {
    __extends(HTMLMathModel, _super);
    function HTMLMathModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLMathModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'HTMLMathView',
            _model_name: 'HTMLMathModel'
        });
    };
    return HTMLMathModel;
}(StringModel));

var HTMLMathView = /** @class */ (function (_super) {
    __extends(HTMLMathView, _super);
    function HTMLMathView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    HTMLMathView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-htmlmath');
        this.content = document.createElement('div');
        this.content.classList.add('widget-htmlmath-content');
        this.el.appendChild(this.content);
        this.update(); // Set defaults.
    };
    /**
     * Update the contents of this view
     */
    HTMLMathView.prototype.update = function () {
        this.content.innerHTML = this.model.get('value');
        this.typeset(this.content);
        return _super.prototype.update.call(this);
    };
    return HTMLMathView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var LabelModel = /** @class */ (function (_super) {
    __extends(LabelModel, _super);
    function LabelModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LabelModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'LabelView',
            _model_name: 'LabelModel'
        });
    };
    return LabelModel;
}(StringModel));

var LabelView = /** @class */ (function (_super) {
    __extends(LabelView, _super);
    function LabelView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    LabelView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-label');
        this.update(); // Set defaults.
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    LabelView.prototype.update = function () {
        this.typeset(this.el, this.model.get('value'));
        return _super.prototype.update.call(this);
    };
    return LabelView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var TextareaModel = /** @class */ (function (_super) {
    __extends(TextareaModel, _super);
    function TextareaModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextareaModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'TextareaView',
            _model_name: 'TextareaModel',
            rows: null,
            continuous_update: true,
        });
    };
    return TextareaModel;
}(StringModel));

var TextareaView = /** @class */ (function (_super) {
    __extends(TextareaView, _super);
    function TextareaView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    TextareaView.prototype.render = function () {
        var _this = this;
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-textarea');
        this.textbox = document.createElement('textarea');
        this.textbox.setAttribute('rows', '5');
        this.textbox.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        this.el.appendChild(this.textbox);
        this.update(); // Set defaults.
        this.listenTo(this.model, 'change:placeholder', function (model, value, options) {
            _this.update_placeholder(value);
        });
        this.update_placeholder();
    };
    TextareaView.prototype.update_placeholder = function (value) {
        value = value || this.model.get('placeholder');
        this.textbox.setAttribute('placeholder', value.toString());
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    TextareaView.prototype.update = function (options) {
        if (options === undefined || options.updated_view != this) {
            this.textbox.value = this.model.get('value');
            var rows = this.model.get('rows');
            if (rows === null) {
                rows = '';
            }
            this.textbox.setAttribute('rows', rows);
            this.textbox.disabled = this.model.get('disabled');
        }
        return _super.prototype.update.call(this);
    };
    TextareaView.prototype.events = function () {
        return {
            'keydown input': 'handleKeyDown',
            'keypress input': 'handleKeypress',
            'input textarea': 'handleChanging',
            'change textarea': 'handleChanged'
        };
    };
    /**
     * Handle key down
     *
     * Stop propagation so the event isn't sent to the application.
     */
    TextareaView.prototype.handleKeyDown = function (e) {
        e.stopPropagation();
    };
    /**
     * Handles key press
     *
     * Stop propagation so the keypress isn't sent to the application.
     */
    TextareaView.prototype.handleKeypress = function (e) {
        e.stopPropagation();
    };
    /**
     * Triggered on input change
     */
    TextareaView.prototype.handleChanging = function (e) {
        if (this.model.get('continuous_update')) {
            this.handleChanged(e);
        }
    };
    /**
     * Sync the value with the kernel.
     *
     * @param e Event
     */
    TextareaView.prototype.handleChanged = function (e) {
        var target = e.target;
        this.model.set('value', target.value, { updated_view: this });
        this.touch();
    };
    return TextareaView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var TextModel = /** @class */ (function (_super) {
    __extends(TextModel, _super);
    function TextModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'TextView',
            _model_name: 'TextModel',
            continuous_update: true,
        });
    };
    return TextModel;
}(StringModel));

var TextView = /** @class */ (function (_super) {
    __extends(TextView, _super);
    function TextView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputType = 'text';
        return _this;
    }
    /**
     * Called when view is rendered.
     */
    TextView.prototype.render = function () {
        var _this = this;
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-text');
        this.textbox = document.createElement('input');
        this.textbox.setAttribute('type', this.inputType);
        this.textbox.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        this.el.appendChild(this.textbox);
        this.update(); // Set defaults.
        this.listenTo(this.model, 'change:placeholder', function (model, value, options) {
            _this.update_placeholder(value);
        });
        this.listenTo(this.model, 'change:description_tooltip', this.update_title);
        this.listenTo(this.model, 'change:description', this.update_title);
        this.update_placeholder();
        this.update_title();
    };
    TextView.prototype.update_placeholder = function (value) {
        this.textbox.setAttribute('placeholder', value || this.model.get('placeholder'));
    };
    TextView.prototype.update_title = function () {
        var title = this.model.get('description_tooltip');
        if (!title) {
            this.textbox.removeAttribute('title');
        }
        else if (this.model.get('description').length === 0) {
            this.textbox.setAttribute('title', title);
        }
    };
    TextView.prototype.update = function (options) {
        /**
         * Update the contents of this view
         *
         * Called when the model is changed.  The model may have been
         * changed by another view or by a state update from the back-end.
         */
        if (options === undefined || options.updated_view !== this) {
            if (this.textbox.value !== this.model.get('value')) {
                this.textbox.value = this.model.get('value');
            }
            this.textbox.disabled = this.model.get('disabled');
        }
        return _super.prototype.update.call(this);
    };
    TextView.prototype.events = function () {
        return {
            'keydown input': 'handleKeyDown',
            'keypress input': 'handleKeypress',
            'input input': 'handleChanging',
            'change input': 'handleChanged'
        };
    };
    /**
     * Handle key down
     *
     * Stop propagation so the keypress isn't sent to the application.
     */
    TextView.prototype.handleKeyDown = function (e) {
        e.stopPropagation();
    };
    /**
     * Handles text submission
     */
    TextView.prototype.handleKeypress = function (e) {
        e.stopPropagation();
        // The submit message is deprecated in widgets 7
        if (e.keyCode === 13) { // Return key
            this.send({ event: 'submit' });
        }
    };
    /**
     * Handles user input.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    TextView.prototype.handleChanging = function (e) {
        if (this.model.get('continuous_update')) {
            this.handleChanged(e);
        }
    };
    /**
     * Handles user input.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    TextView.prototype.handleChanged = function (e) {
        var target = e.target;
        this.model.set('value', target.value, { updated_view: this });
        this.touch();
    };
    return TextView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var PasswordModel = /** @class */ (function (_super) {
    __extends(PasswordModel, _super);
    function PasswordModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PasswordModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'PasswordView',
            _model_name: 'PasswordModel'
        });
    };
    return PasswordModel;
}(TextModel));

var PasswordView = /** @class */ (function (_super) {
    __extends(PasswordView, _super);
    function PasswordView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputType = 'password';
        return _this;
    }
    return PasswordView;
}(TextView));

/**
 * Combobox widget model class.
 */
var ComboboxModel = /** @class */ (function (_super) {
    __extends(ComboboxModel, _super);
    function ComboboxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComboboxModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'ComboboxModel', _view_name: 'ComboboxView', options: [], ensure_options: false });
    };
    return ComboboxModel;
}(TextModel));

/**
 * Combobox widget view class.
 */
var ComboboxView = /** @class */ (function (_super) {
    __extends(ComboboxView, _super);
    function ComboboxView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isInitialRender = true;
        return _this;
    }
    ComboboxView.prototype.render = function () {
        this.datalist = document.createElement('datalist');
        this.datalist.id = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        _super.prototype.render.call(this);
        this.textbox.setAttribute('list', this.datalist.id);
        this.el.appendChild(this.datalist);
    };
    ComboboxView.prototype.update = function (options) {
        _super.prototype.update.call(this, options);
        if (!this.datalist) {
            return;
        }
        var valid = this.isValid(this.model.get('value'));
        this.highlightValidState(valid);
        // Check if we need to update options
        if ((options !== undefined && options.updated_view) || (!this.model.hasChanged('options') &&
            !this.isInitialRender)) {
            // Value update only, keep current options
            return;
        }
        this.isInitialRender = false;
        var opts = this.model.get('options');
        var optLines = opts.map(function (o) {
            return "<option value=\"" + o + "\"></option>";
        });
        this.datalist.innerHTML = optLines.join('\n');
    };
    ComboboxView.prototype.isValid = function (value) {
        if (true === this.model.get('ensure_option')) {
            var options = this.model.get('options');
            if (options.indexOf(value) === -1) {
                return false;
            }
        }
        return true;
    };
    ComboboxView.prototype.handleChanging = function (e) {
        // Override to validate value
        var target = e.target;
        var valid = this.isValid(target.value);
        this.highlightValidState(valid);
        if (valid) {
            _super.prototype.handleChanging.call(this, e);
        }
    };
    ComboboxView.prototype.handleChanged = function (e) {
        // Override to validate value
        var target = e.target;
        var valid = this.isValid(target.value);
        this.highlightValidState(valid);
        if (valid) {
            _super.prototype.handleChanged.call(this, e);
        }
    };
    ComboboxView.prototype.highlightValidState = function (valid) {
        this.textbox.classList.toggle(INVALID_VALUE_CLASS, !valid);
    };
    return ComboboxView;
}(TextView));



/***/ }),

/***/ "abMj":
/*!********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_video.js ***!
  \********************************************************************/
/*! exports provided: VideoModel, VideoView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoModel", function() { return VideoModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoView", function() { return VideoView; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var VideoModel = /** @class */ (function (_super) {
    __extends(VideoModel, _super);
    function VideoModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_2__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'VideoModel',
            _view_name: 'VideoView',
            format: 'mp4',
            width: '',
            height: '',
            autoplay: true,
            loop: true,
            controls: true,
            value: new DataView(new ArrayBuffer(0))
        });
    };
    VideoModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"].serializers, { value: { serialize: function (value) {
                return new DataView(value.buffer.slice(0));
            } } });
    return VideoModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"]));

var VideoView = /** @class */ (function (_super) {
    __extends(VideoView, _super);
    function VideoView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoView.prototype.render = function () {
        /**
         * Called when view is rendered.
         */
        _super.prototype.render.call(this);
        this.pWidget.addClass('jupyter-widgets');
        this.pWidget.addClass('widget-image');
        this.update(); // Set defaults.
    };
    VideoView.prototype.update = function () {
        /**
         * Update the contents of this view
         *
         * Called when the model is changed.  The model may have been
         * changed by another view or by a state update from the back-end.
         */
        var url;
        var format = this.model.get('format');
        var value = this.model.get('value');
        if (format !== 'url') {
            var blob = new Blob([value], { type: "video/" + this.model.get('format') });
            url = URL.createObjectURL(blob);
        }
        else {
            url = (new TextDecoder('utf-8')).decode(value.buffer);
        }
        // Clean up the old objectURL
        var oldurl = this.el.src;
        this.el.src = url;
        if (oldurl && typeof oldurl !== 'string') {
            URL.revokeObjectURL(oldurl);
        }
        // Height and width
        var width = this.model.get('width');
        if (width !== undefined && width.length > 0) {
            this.el.setAttribute('width', width);
        }
        else {
            this.el.removeAttribute('width');
        }
        var height = this.model.get('height');
        if (height !== undefined && height.length > 0) {
            this.el.setAttribute('height', height);
        }
        else {
            this.el.removeAttribute('height');
        }
        // Video attributes
        this.el.loop = this.model.get('loop');
        this.el.autoplay = this.model.get('autoplay');
        this.el.controls = this.model.get('controls');
        return _super.prototype.update.call(this);
    };
    VideoView.prototype.remove = function () {
        if (this.el.src) {
            URL.revokeObjectURL(this.el.src);
        }
        _super.prototype.remove.call(this);
    };
    Object.defineProperty(VideoView.prototype, "tagName", {
        /**
         * The default tag name.
         *
         * #### Notes
         * This is a read-only attribute.
         */
        get: function () {
            // We can't make this an attribute with a default value
            // since it would be set after it is needed in the
            // constructor.
            return 'video';
        },
        enumerable: true,
        configurable: true
    });
    return VideoView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));



/***/ }),

/***/ "d61g":
/*!************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_selection.js ***!
  \************************************************************************/
/*! exports provided: SelectionModel, DropdownModel, DropdownView, SelectModel, SelectView, RadioButtonsModel, RadioButtonsView, ToggleButtonsStyleModel, ToggleButtonsModel, ToggleButtonsView, SelectionSliderModel, SelectionSliderView, MultipleSelectionModel, SelectMultipleModel, SelectMultipleView, SelectionRangeSliderModel, SelectionRangeSliderView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function() { return SelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownModel", function() { return DropdownModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownView", function() { return DropdownView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectModel", function() { return SelectModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectView", function() { return SelectView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonsModel", function() { return RadioButtonsModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonsView", function() { return RadioButtonsView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonsStyleModel", function() { return ToggleButtonsStyleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonsModel", function() { return ToggleButtonsModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonsView", function() { return ToggleButtonsView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionSliderModel", function() { return SelectionSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionSliderView", function() { return SelectionSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleSelectionModel", function() { return MultipleSelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleModel", function() { return SelectMultipleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleView", function() { return SelectMultipleView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionRangeSliderModel", function() { return SelectionRangeSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionRangeSliderView", function() { return SelectionRangeSliderView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var SelectionModel = /** @class */ (function (_super) {
    __extends(SelectionModel, _super);
    function SelectionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'SelectionModel', index: '', _options_labels: [], disabled: false });
    };
    return SelectionModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var DropdownModel = /** @class */ (function (_super) {
    __extends(DropdownModel, _super);
    function DropdownModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'DropdownModel', _view_name: 'DropdownView', button_style: '' });
    };
    return DropdownModel;
}(SelectionModel));

// TODO: Make a phosphor dropdown control, wrapped in DropdownView. Also, fix
// bugs in keyboard handling. See
// https://github.com/jupyter-widgets/ipywidgets/issues/1055 and
// https://github.com/jupyter-widgets/ipywidgets/issues/1049
// For now, we subclass SelectView to provide DropdownView
// For the old code, see commit f68bfbc566f3a78a8f3350b438db8ed523ce3642
var DropdownView = /** @class */ (function (_super) {
    __extends(DropdownView, _super);
    function DropdownView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Public constructor.
     */
    DropdownView.prototype.initialize = function (parameters) {
        var _this = this;
        _super.prototype.initialize.call(this, parameters);
        this.listenTo(this.model, 'change:_options_labels', function () { return _this._updateOptions(); });
    };
    /**
     * Called when view is rendered.
     */
    DropdownView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-dropdown');
        this.listbox = document.createElement('select');
        this.listbox.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        this.el.appendChild(this.listbox);
        this._updateOptions();
        this.update();
    };
    /**
     * Update the contents of this view
     */
    DropdownView.prototype.update = function () {
        // Disable listbox if needed
        this.listbox.disabled = this.model.get('disabled');
        // Select the correct element
        var index = this.model.get('index');
        this.listbox.selectedIndex = index === null ? -1 : index;
        return _super.prototype.update.call(this);
    };
    DropdownView.prototype._updateOptions = function () {
        this.listbox.textContent = '';
        var items = this.model.get('_options_labels');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var option = document.createElement('option');
            option.textContent = item.replace(/ /g, '\xa0'); // space -> &nbsp;
            option.setAttribute('data-value', encodeURIComponent(item));
            option.value = item;
            this.listbox.appendChild(option);
        }
    };
    DropdownView.prototype.events = function () {
        return {
            'change select': '_handle_change'
        };
    };
    /**
     * Handle when a new value is selected.
     */
    DropdownView.prototype._handle_change = function () {
        this.model.set('index', this.listbox.selectedIndex === -1 ? null : this.listbox.selectedIndex);
        this.touch();
    };
    return DropdownView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var SelectModel = /** @class */ (function (_super) {
    __extends(SelectModel, _super);
    function SelectModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'SelectModel', _view_name: 'SelectView', rows: 5 });
    };
    return SelectModel;
}(SelectionModel));

var SelectView = /** @class */ (function (_super) {
    __extends(SelectView, _super);
    function SelectView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Public constructor.
     */
    SelectView.prototype.initialize = function (parameters) {
        var _this = this;
        _super.prototype.initialize.call(this, parameters);
        this.listenTo(this.model, 'change:_options_labels', function () { return _this._updateOptions(); });
        this.listenTo(this.model, 'change:index', function (model, value, options) { return _this.updateSelection(options); });
        // Create listbox here so that subclasses can modify it before it is populated in render()
        this.listbox = document.createElement('select');
    };
    /**
     * Called when view is rendered.
     */
    SelectView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-select');
        this.listbox.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        this.el.appendChild(this.listbox);
        this._updateOptions();
        this.update();
        this.updateSelection();
    };
    /**
     * Update the contents of this view
     */
    SelectView.prototype.update = function () {
        _super.prototype.update.call(this);
        this.listbox.disabled = this.model.get('disabled');
        var rows = this.model.get('rows');
        if (rows === null) {
            rows = '';
        }
        this.listbox.setAttribute('size', rows);
    };
    SelectView.prototype.updateSelection = function (options) {
        if (options === void 0) { options = {}; }
        if (options.updated_view === this) {
            return;
        }
        var index = this.model.get('index');
        this.listbox.selectedIndex = index === null ? -1 : index;
    };
    SelectView.prototype._updateOptions = function () {
        this.listbox.textContent = '';
        var items = this.model.get('_options_labels');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var option = document.createElement('option');
            option.textContent = item.replace(/ /g, '\xa0'); // space -> &nbsp;
            option.setAttribute('data-value', encodeURIComponent(item));
            option.value = item;
            this.listbox.appendChild(option);
        }
    };
    SelectView.prototype.events = function () {
        return {
            'change select': '_handle_change'
        };
    };
    /**
     * Handle when a new value is selected.
     */
    SelectView.prototype._handle_change = function () {
        this.model.set('index', this.listbox.selectedIndex, { updated_view: this });
        this.touch();
    };
    return SelectView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var RadioButtonsModel = /** @class */ (function (_super) {
    __extends(RadioButtonsModel, _super);
    function RadioButtonsModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioButtonsModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'RadioButtonsModel', _view_name: 'RadioButtonsView', tooltips: [], icons: [], button_style: '' });
    };
    return RadioButtonsModel;
}(SelectionModel));

var RadioButtonsView = /** @class */ (function (_super) {
    __extends(RadioButtonsView, _super);
    function RadioButtonsView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    RadioButtonsView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-radio');
        this.container = document.createElement('div');
        this.el.appendChild(this.container);
        this.container.classList.add('widget-radio-box');
        this.update();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    RadioButtonsView.prototype.update = function (options) {
        var view = this;
        var items = this.model.get('_options_labels');
        var radios = underscore__WEBPACK_IMPORTED_MODULE_3__["pluck"](this.container.querySelectorAll('input[type="radio"]'), 'value');
        var stale = items.length != radios.length;
        if (!stale) {
            for (var i = 0, len = items.length; i < len; ++i) {
                if (radios[i] !== items[i]) {
                    stale = true;
                    break;
                }
            }
        }
        if (stale && (options === undefined || options.updated_view !== this)) {
            // Add items to the DOM.
            this.container.textContent = '';
            items.forEach(function (item, index) {
                var label = document.createElement('label');
                label.textContent = item;
                view.container.appendChild(label);
                var radio = document.createElement('input');
                radio.setAttribute('type', 'radio');
                radio.value = index.toString();
                radio.setAttribute('data-value', encodeURIComponent(item));
                label.appendChild(radio);
            });
        }
        items.forEach(function (item, index) {
            var item_query = 'input[data-value="' +
                encodeURIComponent(item) + '"]';
            var radio = view.container.querySelectorAll(item_query);
            if (radio.length > 0) {
                var radio_el = radio[0];
                radio_el.checked = view.model.get('index') === index;
                radio_el.disabled = view.model.get('disabled');
            }
        });
        // Schedule adjustPadding asynchronously to
        // allow dom elements to be created properly
        setTimeout(this.adjustPadding, 0, this);
        return _super.prototype.update.call(this, options);
    };
    /**
     * Adjust Padding to Multiple of Line Height
     *
     * Adjust margins so that the overall height
     * is a multiple of a single line height.
     *
     * This widget needs it because radio options
     * are spaced tighter than individual widgets
     * yet we would like the full widget line up properly
     * when displayed side-by-side with other widgets.
     */
    RadioButtonsView.prototype.adjustPadding = function (e) {
        // Vertical margins on a widget
        var elStyles = window.getComputedStyle(e.el);
        var margins = parseInt(elStyles.marginTop, 10) + parseInt(elStyles.marginBottom, 10);
        // Total spaces taken by a single-line widget
        var lineHeight = e.label.offsetHeight + margins;
        // Current adjustment value on this widget
        var cStyles = window.getComputedStyle(e.container);
        var containerMargin = parseInt(cStyles.marginBottom);
        // How far we are off from a multiple of single windget lines
        var diff = (e.el.offsetHeight + margins - containerMargin) % lineHeight;
        // Apply the new adjustment
        var extraMargin = diff == 0 ? 0 : (lineHeight - diff);
        e.container.style.marginBottom = extraMargin + 'px';
    };
    RadioButtonsView.prototype.events = function () {
        return {
            'click input[type="radio"]': '_handle_click'
        };
    };
    /**
     * Handle when a value is clicked.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    RadioButtonsView.prototype._handle_click = function (event) {
        var target = event.target;
        this.model.set('index', parseInt(target.value), { updated_view: this });
        this.touch();
    };
    return RadioButtonsView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var ToggleButtonsStyleModel = /** @class */ (function (_super) {
    __extends(ToggleButtonsStyleModel, _super);
    function ToggleButtonsStyleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToggleButtonsStyleModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'ToggleButtonsStyleModel',
        });
    };
    ToggleButtonsStyleModel.styleProperties = __assign({}, _widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyleModel"].styleProperties, { button_width: {
            selector: '.widget-toggle-button',
            attribute: 'width',
            default: null
        }, font_weight: {
            selector: '.widget-toggle-button',
            attribute: 'font-weight',
            default: ''
        } });
    return ToggleButtonsStyleModel;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyleModel"]));

var ToggleButtonsModel = /** @class */ (function (_super) {
    __extends(ToggleButtonsModel, _super);
    function ToggleButtonsModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToggleButtonsModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'ToggleButtonsModel', _view_name: 'ToggleButtonsView' });
    };
    return ToggleButtonsModel;
}(SelectionModel));

var ToggleButtonsView = /** @class */ (function (_super) {
    __extends(ToggleButtonsView, _super);
    function ToggleButtonsView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToggleButtonsView.prototype.initialize = function (options) {
        this._css_state = {};
        _super.prototype.initialize.call(this, options);
        this.listenTo(this.model, 'change:button_style', this.update_button_style);
    };
    /**
     * Called when view is rendered.
     */
    ToggleButtonsView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-toggle-buttons');
        this.buttongroup = document.createElement('div');
        this.el.appendChild(this.buttongroup);
        this.update();
        this.set_button_style();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    ToggleButtonsView.prototype.update = function (options) {
        var view = this;
        var items = this.model.get('_options_labels');
        var icons = this.model.get('icons') || [];
        var previous_icons = this.model.previous('icons') || [];
        var previous_bstyle = ToggleButtonsView.classMap[this.model.previous('button_style')] || '';
        var tooltips = view.model.get('tooltips') || [];
        var disabled = this.model.get('disabled');
        var buttons = this.buttongroup.querySelectorAll('button');
        var values = underscore__WEBPACK_IMPORTED_MODULE_3__["pluck"](buttons, 'value');
        var stale = false;
        for (var i = 0, len = items.length; i < len; ++i) {
            if (values[i] !== items[i] || icons[i] !== previous_icons[i]) {
                stale = true;
                break;
            }
        }
        if (stale && (options === undefined || options.updated_view !== this)) {
            // Add items to the DOM.
            this.buttongroup.textContent = '';
            items.forEach(function (item, index) {
                var item_html;
                var empty = item.trim().length === 0 &&
                    (!icons[index] || icons[index].trim().length === 0);
                if (empty) {
                    item_html = '&nbsp;';
                }
                else {
                    item_html = _utils__WEBPACK_IMPORTED_MODULE_2__["escape_html"](item);
                }
                var icon = document.createElement('i');
                var button = document.createElement('button');
                if (icons[index]) {
                    icon.className = 'fa fa-' + icons[index];
                }
                button.setAttribute('type', 'button');
                button.className = 'widget-toggle-button jupyter-button';
                if (previous_bstyle) {
                    button.classList.add(previous_bstyle);
                }
                button.innerHTML = item_html;
                button.setAttribute('data-value', encodeURIComponent(item));
                button.setAttribute('value', index.toString());
                button.appendChild(icon);
                button.disabled = disabled;
                if (tooltips[index]) {
                    button.setAttribute('title', tooltips[index]);
                }
                view.update_style_traits(button);
                view.buttongroup.appendChild(button);
            });
        }
        // Select active button.
        items.forEach(function (item, index) {
            var item_query = '[data-value="' + encodeURIComponent(item) + '"]';
            var button = view.buttongroup.querySelector(item_query);
            if (view.model.get('index') === index) {
                button.classList.add('mod-active');
            }
            else {
                button.classList.remove('mod-active');
            }
        });
        this.stylePromise.then(function (style) {
            if (style) {
                style.style();
            }
        });
        return _super.prototype.update.call(this, options);
    };
    ToggleButtonsView.prototype.update_style_traits = function (button) {
        for (var name_1 in this._css_state) {
            if (this._css_state.hasOwnProperty(name_1)) {
                if (name_1 === 'margin') {
                    this.buttongroup.style[name_1] = this._css_state[name_1];
                }
                else if (name_1 !== 'width') {
                    if (button) {
                        button.style[name_1] = this._css_state[name_1];
                    }
                    else {
                        var buttons = this.buttongroup
                            .querySelectorAll('button');
                        if (buttons.length) {
                            (buttons[0]).style[name_1] = this._css_state[name_1];
                        }
                    }
                }
            }
        }
    };
    ToggleButtonsView.prototype.update_button_style = function () {
        var buttons = this.buttongroup.querySelectorAll('button');
        for (var i = 0; i < buttons.length; i++) {
            this.update_mapped_classes(ToggleButtonsView.classMap, 'button_style', buttons[i]);
        }
    };
    ToggleButtonsView.prototype.set_button_style = function () {
        var buttons = this.buttongroup.querySelectorAll('button');
        for (var i = 0; i < buttons.length; i++) {
            this.set_mapped_classes(ToggleButtonsView.classMap, 'button_style', buttons[i]);
        }
    };
    ToggleButtonsView.prototype.events = function () {
        return {
            'click button': '_handle_click'
        };
    };
    /**
     * Handle when a value is clicked.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    ToggleButtonsView.prototype._handle_click = function (event) {
        var target = event.target;
        this.model.set('index', parseInt(target.value, 10), { updated_view: this });
        this.touch();
        // We also send a clicked event, since the value is only set if it changed.
        // See https://github.com/jupyter-widgets/ipywidgets/issues/763
        this.send({ event: 'click' });
    };
    return ToggleButtonsView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

(function (ToggleButtonsView) {
    ToggleButtonsView.classMap = {
        primary: ['mod-primary'],
        success: ['mod-success'],
        info: ['mod-info'],
        warning: ['mod-warning'],
        danger: ['mod-danger']
    };
})(ToggleButtonsView || (ToggleButtonsView = {}));
var SelectionSliderModel = /** @class */ (function (_super) {
    __extends(SelectionSliderModel, _super);
    function SelectionSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionSliderModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'SelectionSliderModel', _view_name: 'SelectionSliderView', orientation: 'horizontal', readout: true, continuous_update: true });
    };
    return SelectionSliderModel;
}(SelectionModel));

var SelectionSliderView = /** @class */ (function (_super) {
    __extends(SelectionSliderView, _super);
    function SelectionSliderView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    SelectionSliderView.prototype.render = function () {
        var _this = this;
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-hslider');
        this.el.classList.add('widget-slider');
        (this.$slider = jquery__WEBPACK_IMPORTED_MODULE_4___default()('<div />'))
            .slider({
            slide: this.handleSliderChange.bind(this),
            stop: this.handleSliderChanged.bind(this)
        })
            .addClass('slider');
        // Put the slider in a container
        this.slider_container = document.createElement('div');
        this.slider_container.classList.add('slider-container');
        this.slider_container.appendChild(this.$slider[0]);
        this.el.appendChild(this.slider_container);
        this.readout = document.createElement('div');
        this.el.appendChild(this.readout);
        this.readout.classList.add('widget-readout');
        this.readout.style.display = 'none';
        this.listenTo(this.model, 'change:slider_color', function (sender, value) {
            _this.$slider.find('a').css('background', value);
        });
        this.$slider.find('a').css('background', this.model.get('slider_color'));
        // Set defaults.
        this.update();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    SelectionSliderView.prototype.update = function (options) {
        if (options === undefined || options.updated_view !== this) {
            var labels = this.model.get('_options_labels');
            var max = labels.length - 1;
            var min = 0;
            this.$slider.slider('option', 'step', 1);
            this.$slider.slider('option', 'max', max);
            this.$slider.slider('option', 'min', min);
            // WORKAROUND FOR JQUERY SLIDER BUG.
            // The horizontal position of the slider handle
            // depends on the value of the slider at the time
            // of orientation change.  Before applying the new
            // workaround, we set the value to the minimum to
            // make sure that the horizontal placement of the
            // handle in the vertical slider is always
            // consistent.
            var orientation_1 = this.model.get('orientation');
            this.$slider.slider('option', 'value', min);
            this.$slider.slider('option', 'orientation', orientation_1);
            var disabled = this.model.get('disabled');
            this.$slider.slider('option', 'disabled', disabled);
            if (disabled) {
                this.readout.contentEditable = 'false';
            }
            else {
                this.readout.contentEditable = 'true';
            }
            // Use the right CSS classes for vertical & horizontal sliders
            if (orientation_1 === 'vertical') {
                this.el.classList.remove('widget-hslider');
                this.el.classList.remove('widget-inline-hbox');
                this.el.classList.add('widget-vslider');
                this.el.classList.add('widget-inline-vbox');
            }
            else {
                this.el.classList.remove('widget-vslider');
                this.el.classList.remove('widget-inline-vbox');
                this.el.classList.add('widget-hslider');
                this.el.classList.add('widget-inline-hbox');
            }
            var readout = this.model.get('readout');
            if (readout) {
                // this.$readout.show();
                this.readout.style.display = '';
            }
            else {
                // this.$readout.hide();
                this.readout.style.display = 'none';
            }
            this.updateSelection();
        }
        return _super.prototype.update.call(this, options);
    };
    SelectionSliderView.prototype.events = function () {
        return {
            'slide': 'handleSliderChange',
            'slidestop': 'handleSliderChanged'
        };
    };
    SelectionSliderView.prototype.updateSelection = function () {
        var index = this.model.get('index');
        this.$slider.slider('option', 'value', index);
        this.updateReadout(index);
    };
    SelectionSliderView.prototype.updateReadout = function (index) {
        var value = this.model.get('_options_labels')[index];
        this.readout.textContent = value;
    };
    /**
     * Called when the slider value is changing.
     */
    SelectionSliderView.prototype.handleSliderChange = function (e, ui) {
        this.updateReadout(ui.value);
        // Only persist the value while sliding if the continuous_update
        // trait is set to true.
        if (this.model.get('continuous_update')) {
            this.handleSliderChanged(e, ui);
        }
    };
    /**
     * Called when the slider value has changed.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    SelectionSliderView.prototype.handleSliderChanged = function (e, ui) {
        this.updateReadout(ui.value);
        this.model.set('index', ui.value, { updated_view: this });
        this.touch();
    };
    return SelectionSliderView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var MultipleSelectionModel = /** @class */ (function (_super) {
    __extends(MultipleSelectionModel, _super);
    function MultipleSelectionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultipleSelectionModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'MultipleSelectionModel' });
    };
    return MultipleSelectionModel;
}(SelectionModel));

var SelectMultipleModel = /** @class */ (function (_super) {
    __extends(SelectMultipleModel, _super);
    function SelectMultipleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectMultipleModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'SelectMultipleModel', _view_name: 'SelectMultipleView', rows: null });
    };
    return SelectMultipleModel;
}(MultipleSelectionModel));

var SelectMultipleView = /** @class */ (function (_super) {
    __extends(SelectMultipleView, _super);
    function SelectMultipleView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Public constructor.
     */
    SelectMultipleView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.listbox.multiple = true;
    };
    /**
     * Called when view is rendered.
     */
    SelectMultipleView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('widget-select-multiple');
    };
    SelectMultipleView.prototype.updateSelection = function (options) {
        if (options === void 0) { options = {}; }
        if (options.updated_view === this) {
            return;
        }
        var selected = this.model.get('index') || [];
        var listboxOptions = this.listbox.options;
        // Clear the selection
        this.listbox.selectedIndex = -1;
        // Select the appropriate options
        selected.forEach(function (i) {
            listboxOptions[i].selected = true;
        });
    };
    /**
     * Handle when a new value is selected.
     */
    SelectMultipleView.prototype._handle_change = function () {
        var index = Array.prototype.map
            .call(this.listbox.selectedOptions || [], function (option) {
            return option.index;
        });
        this.model.set('index', index, { updated_view: this });
        this.touch();
    };
    return SelectMultipleView;
}(SelectView));

var SelectionRangeSliderModel = /** @class */ (function (_super) {
    __extends(SelectionRangeSliderModel, _super);
    function SelectionRangeSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionRangeSliderModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'SelectionSliderModel', _view_name: 'SelectionSliderView', orientation: 'horizontal', readout: true, continuous_update: true });
    };
    return SelectionRangeSliderModel;
}(MultipleSelectionModel));

var SelectionRangeSliderView = /** @class */ (function (_super) {
    __extends(SelectionRangeSliderView, _super);
    function SelectionRangeSliderView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    SelectionRangeSliderView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.$slider.slider('option', 'range', true);
    };
    SelectionRangeSliderView.prototype.updateSelection = function () {
        var index = this.model.get('index');
        this.$slider.slider('option', 'values', index.slice());
        this.updateReadout(index);
    };
    SelectionRangeSliderView.prototype.updateReadout = function (index) {
        var labels = this.model.get('_options_labels');
        var minValue = labels[index[0]];
        var maxValue = labels[index[1]];
        this.readout.textContent = minValue + "-" + maxValue;
    };
    /**
     * Called when the slider value is changing.
     */
    SelectionRangeSliderView.prototype.handleSliderChange = function (e, ui) {
        this.updateReadout(ui.values);
        // Only persist the value while sliding if the continuous_update
        // trait is set to true.
        if (this.model.get('continuous_update')) {
            this.handleSliderChanged(e, ui);
        }
    };
    /**
     * Called when the slider value has changed.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    SelectionRangeSliderView.prototype.handleSliderChanged = function (e, ui) {
        // The jqueryui documentation indicates ui.values doesn't exist on the slidestop event,
        // but it appears that it actually does: https://github.com/jquery/jquery-ui/blob/ae31f2b3b478975f70526bdf3299464b9afa8bb1/ui/widgets/slider.js#L313
        this.updateReadout(ui.values);
        this.model.set('index', ui.values.slice(), { updated_view: this });
        this.touch();
    };
    return SelectionRangeSliderView;
}(SelectionSliderView));



/***/ }),

/***/ "dpys":
/*!*************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/phosphor/tabpanel.js ***!
  \*************************************************************************/
/*! exports provided: EventedPanel, TabPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventedPanel", function() { return EventedPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return TabPanel; });
/* harmony import */ var _phosphor_messaging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @phosphor/messaging */ "hpl1");
/* harmony import */ var _phosphor_messaging__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phosphor_messaging__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @phosphor/signaling */ "qUp9");
/* harmony import */ var _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _phosphor_domutils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @phosphor/domutils */ "XWTc");
/* harmony import */ var _phosphor_domutils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_phosphor_domutils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @phosphor/widgets */ "pif5");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_3__);
/* This file has code derived from PhosphorJS. The license for this PhosphorJS code is:

Copyright (c) 2014-2017, PhosphorJS Contributors
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * A panel where visible widgets are stacked atop one another.
 *
 * #### Notes
 * This class provides a convenience wrapper around a [[PanelLayout]].
 */
var EventedPanel = /** @class */ (function (_super) {
    __extends(EventedPanel, _super);
    function EventedPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._widgetRemoved = new _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__["Signal"](_this);
        return _this;
    }
    Object.defineProperty(EventedPanel.prototype, "widgetRemoved", {
        /**
         * A signal emitted when a widget is removed from the panel.
         */
        get: function () {
            return this._widgetRemoved;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * A message handler invoked on a `'child-removed'` message.
     */
    EventedPanel.prototype.onChildRemoved = function (msg) {
        this._widgetRemoved.emit(msg.child);
    };
    return EventedPanel;
}(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_3__["Panel"]));

/**
 * A widget which combines a `TabBar` and a `EventedPanel`.
 *
 * #### Notes
 * This is a simple panel which handles the common case of a tab bar
 * placed next to a content area. The selected tab controls the widget
 * which is shown in the content area.
 *
 * For use cases which require more control than is provided by this
 * panel, the `TabBar` widget may be used independently.
 *
 * TODO: Support setting the direction??
 */
var TabPanel = /** @class */ (function (_super) {
    __extends(TabPanel, _super);
    /**
     * Construct a new tab panel.
     *
     * @param options - The options for initializing the tab panel.
     */
    function TabPanel(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this._currentChanged = new _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__["Signal"](_this);
        _this.addClass('p-TabPanel');
        // Create the tab bar and contents panel.
        _this.tabBar = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_3__["TabBar"](options);
        _this.tabBar.addClass('p-TabPanel-tabBar');
        _this.tabContents = new EventedPanel();
        _this.tabContents.addClass('p-TabPanel-tabContents');
        // Connect the tab bar signal handlers.
        _this.tabBar.tabMoved.connect(_this._onTabMoved, _this);
        _this.tabBar.currentChanged.connect(_this._onCurrentChanged, _this);
        _this.tabBar.tabCloseRequested.connect(_this._onTabCloseRequested, _this);
        _this.tabBar.tabActivateRequested.connect(_this._onTabActivateRequested, _this);
        // Connect the evented panel signal handlers.
        _this.tabContents.widgetRemoved.connect(_this._onWidgetRemoved, _this);
        // Create the layout.
        var layout = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_3__["PanelLayout"]();
        // Add the child widgets to the layout.
        layout.addWidget(_this.tabBar);
        layout.addWidget(_this.tabContents);
        // Install the layout on the tab panel.
        _this.layout = layout;
        return _this;
    }
    Object.defineProperty(TabPanel.prototype, "currentChanged", {
        /**
         * A signal emitted when the current tab is changed.
         *
         * #### Notes
         * This signal is emitted when the currently selected tab is changed
         * either through user or programmatic interaction.
         *
         * Notably, this signal is not emitted when the index of the current
         * tab changes due to tabs being inserted, removed, or moved. It is
         * only emitted when the actual current tab node is changed.
         */
        get: function () {
            return this._currentChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabPanel.prototype, "currentIndex", {
        /**
         * Get the index of the currently selected tab.
         *
         * #### Notes
         * This will be `null` if no tab is selected.
         */
        get: function () {
            var currentIndex = this.tabBar.currentIndex;
            // Phosphor tab bars have an index of -1 if no tab is selected
            return (currentIndex === -1 ? null : currentIndex);
        },
        /**
         * Set the index of the currently selected tab.
         *
         * #### Notes
         * If the index is out of range, it will be set to `null`.
         */
        set: function (value) {
            this.tabBar.currentIndex = (value === null ? -1 : value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabPanel.prototype, "currentWidget", {
        /**
         * Get the currently selected widget.
         *
         * #### Notes
         * This will be `null` if there is no selected tab.
         */
        get: function () {
            var title = this.tabBar.currentTitle;
            return title ? title.owner : null;
        },
        /**
         * Set the currently selected widget.
         *
         * #### Notes
         * If the widget is not in the panel, it will be set to `null`.
         */
        set: function (value) {
            this.tabBar.currentTitle = value ? value.title : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabPanel.prototype, "tabsMovable", {
        /**
         * Get the whether the tabs are movable by the user.
         *
         * #### Notes
         * Tabs can always be moved programmatically.
         */
        get: function () {
            return this.tabBar.tabsMovable;
        },
        /**
         * Set the whether the tabs are movable by the user.
         *
         * #### Notes
         * Tabs can always be moved programmatically.
         */
        set: function (value) {
            this.tabBar.tabsMovable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabPanel.prototype, "widgets", {
        /**
         * A read-only array of the widgets in the panel.
         */
        get: function () {
            return this.tabContents.widgets;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add a widget to the end of the tab panel.
     *
     * @param widget - The widget to add to the tab panel.
     *
     * #### Notes
     * If the widget is already contained in the panel, it will be moved.
     *
     * The widget's `title` is used to populate the tab.
     */
    TabPanel.prototype.addWidget = function (widget) {
        this.insertWidget(this.widgets.length, widget);
    };
    /**
     * Insert a widget into the tab panel at a specified index.
     *
     * @param index - The index at which to insert the widget.
     *
     * @param widget - The widget to insert into to the tab panel.
     *
     * #### Notes
     * If the widget is already contained in the panel, it will be moved.
     *
     * The widget's `title` is used to populate the tab.
     */
    TabPanel.prototype.insertWidget = function (index, widget) {
        if (widget !== this.currentWidget) {
            widget.hide();
        }
        this.tabContents.insertWidget(index, widget);
        this.tabBar.insertTab(index, widget.title);
    };
    /**
     * Handle the `currentChanged` signal from the tab bar.
     */
    TabPanel.prototype._onCurrentChanged = function (sender, args) {
        // Extract the previous and current title from the args.
        var previousIndex = args.previousIndex, previousTitle = args.previousTitle, currentIndex = args.currentIndex, currentTitle = args.currentTitle;
        // Extract the widgets from the titles.
        var previousWidget = previousTitle ? previousTitle.owner : null;
        var currentWidget = currentTitle ? currentTitle.owner : null;
        // Hide the previous widget.
        if (previousWidget) {
            previousWidget.hide();
        }
        // Show the current widget.
        if (currentWidget) {
            currentWidget.show();
        }
        // Emit the `currentChanged` signal for the tab panel.
        this._currentChanged.emit({
            previousIndex: previousIndex, previousWidget: previousWidget, currentIndex: currentIndex, currentWidget: currentWidget
        });
        // Flush the message loop on IE and Edge to prevent flicker.
        if (_phosphor_domutils__WEBPACK_IMPORTED_MODULE_2__["Platform"].IS_EDGE || _phosphor_domutils__WEBPACK_IMPORTED_MODULE_2__["Platform"].IS_IE) {
            _phosphor_messaging__WEBPACK_IMPORTED_MODULE_0__["MessageLoop"].flush();
        }
    };
    /**
     * Handle the `tabActivateRequested` signal from the tab bar.
     */
    TabPanel.prototype._onTabActivateRequested = function (sender, args) {
        args.title.owner.activate();
    };
    /**
     * Handle the `tabCloseRequested` signal from the tab bar.
     */
    TabPanel.prototype._onTabCloseRequested = function (sender, args) {
        args.title.owner.close();
    };
    /**
     * Handle the `tabMoved` signal from the tab bar.
     */
    TabPanel.prototype._onTabMoved = function (sender, args) {
        this.tabContents.insertWidget(args.toIndex, args.title.owner);
    };
    /**
     * Handle the `widgetRemoved` signal from the stacked panel.
     */
    TabPanel.prototype._onWidgetRemoved = function (sender, widget) {
        this.tabBar.removeTab(widget.title);
    };
    return TabPanel;
}(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_3__["Widget"]));



/***/ }),

/***/ "iBkU":
/*!********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_audio.js ***!
  \********************************************************************/
/*! exports provided: AudioModel, AudioView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioModel", function() { return AudioModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioView", function() { return AudioView; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var AudioModel = /** @class */ (function (_super) {
    __extends(AudioModel, _super);
    function AudioModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudioModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_2__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'AudioModel',
            _view_name: 'AudioView',
            format: 'mp3',
            autoplay: true,
            loop: true,
            controls: true,
            value: new DataView(new ArrayBuffer(0))
        });
    };
    AudioModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"].serializers, { value: { serialize: function (value) {
                return new DataView(value.buffer.slice(0));
            } } });
    return AudioModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"]));

var AudioView = /** @class */ (function (_super) {
    __extends(AudioView, _super);
    function AudioView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudioView.prototype.render = function () {
        /**
         * Called when view is rendered.
         */
        _super.prototype.render.call(this);
        this.pWidget.addClass('jupyter-widgets');
        this.update(); // Set defaults.
    };
    AudioView.prototype.update = function () {
        /**
         * Update the contents of this view
         *
         * Called when the model is changed.  The model may have been
         * changed by another view or by a state update from the back-end.
         */
        var url;
        var format = this.model.get('format');
        var value = this.model.get('value');
        if (format !== 'url') {
            var blob = new Blob([value], { type: "audio/" + this.model.get('format') });
            url = URL.createObjectURL(blob);
        }
        else {
            url = (new TextDecoder('utf-8')).decode(value.buffer);
        }
        // Clean up the old objectURL
        var oldurl = this.el.src;
        this.el.src = url;
        if (oldurl && typeof oldurl !== 'string') {
            URL.revokeObjectURL(oldurl);
        }
        // Audio attributes
        this.el.loop = this.model.get('loop');
        this.el.autoplay = this.model.get('autoplay');
        this.el.controls = this.model.get('controls');
        return _super.prototype.update.call(this);
    };
    AudioView.prototype.remove = function () {
        if (this.el.src) {
            URL.revokeObjectURL(this.el.src);
        }
        _super.prototype.remove.call(this);
    };
    Object.defineProperty(AudioView.prototype, "tagName", {
        /**
         * The default tag name.
         *
         * #### Notes
         * This is a read-only attribute.
         */
        get: function () {
            // We can't make this an attribute with a default value
            // since it would be set after it is needed in the
            // constructor.
            return 'audio';
        },
        enumerable: true,
        configurable: true
    });
    return AudioView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));



/***/ }),

/***/ "iGnl":
/*!****************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/mouse.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Mouse
//>>group: Widgets
//>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
//>>docs: http://api.jqueryui.com/mouse/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(/*! jquery */ "EVdn"),
			__webpack_require__(/*! ../ie */ "NHgk"),
			__webpack_require__(/*! ../version */ "Qwlt"),
			__webpack_require__(/*! ../widget */ "MIQu")
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}( function( $ ) {

var mouseHandled = false;
$( document ).on( "mouseup", function() {
	mouseHandled = false;
} );

return $.widget( "ui.mouse", {
	version: "1.12.1",
	options: {
		cancel: "input, textarea, button, select, option",
		distance: 1,
		delay: 0
	},
	_mouseInit: function() {
		var that = this;

		this.element
			.on( "mousedown." + this.widgetName, function( event ) {
				return that._mouseDown( event );
			} )
			.on( "click." + this.widgetName, function( event ) {
				if ( true === $.data( event.target, that.widgetName + ".preventClickEvent" ) ) {
					$.removeData( event.target, that.widgetName + ".preventClickEvent" );
					event.stopImmediatePropagation();
					return false;
				}
			} );

		this.started = false;
	},

	// TODO: make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
		this.element.off( "." + this.widgetName );
		if ( this._mouseMoveDelegate ) {
			this.document
				.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
				.off( "mouseup." + this.widgetName, this._mouseUpDelegate );
		}
	},

	_mouseDown: function( event ) {

		// don't let more than one widget handle mouseStart
		if ( mouseHandled ) {
			return;
		}

		this._mouseMoved = false;

		// We may have missed mouseup (out of window)
		( this._mouseStarted && this._mouseUp( event ) );

		this._mouseDownEvent = event;

		var that = this,
			btnIsLeft = ( event.which === 1 ),

			// event.target.nodeName works around a bug in IE 8 with
			// disabled inputs (#7620)
			elIsCancel = ( typeof this.options.cancel === "string" && event.target.nodeName ?
				$( event.target ).closest( this.options.cancel ).length : false );
		if ( !btnIsLeft || elIsCancel || !this._mouseCapture( event ) ) {
			return true;
		}

		this.mouseDelayMet = !this.options.delay;
		if ( !this.mouseDelayMet ) {
			this._mouseDelayTimer = setTimeout( function() {
				that.mouseDelayMet = true;
			}, this.options.delay );
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted = ( this._mouseStart( event ) !== false );
			if ( !this._mouseStarted ) {
				event.preventDefault();
				return true;
			}
		}

		// Click event may never have fired (Gecko & Opera)
		if ( true === $.data( event.target, this.widgetName + ".preventClickEvent" ) ) {
			$.removeData( event.target, this.widgetName + ".preventClickEvent" );
		}

		// These delegates are required to keep context
		this._mouseMoveDelegate = function( event ) {
			return that._mouseMove( event );
		};
		this._mouseUpDelegate = function( event ) {
			return that._mouseUp( event );
		};

		this.document
			.on( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.on( "mouseup." + this.widgetName, this._mouseUpDelegate );

		event.preventDefault();

		mouseHandled = true;
		return true;
	},

	_mouseMove: function( event ) {

		// Only check for mouseups outside the document if you've moved inside the document
		// at least once. This prevents the firing of mouseup in the case of IE<9, which will
		// fire a mousemove event if content is placed under the cursor. See #7778
		// Support: IE <9
		if ( this._mouseMoved ) {

			// IE mouseup check - mouseup happened when mouse was out of window
			if ( $.ui.ie && ( !document.documentMode || document.documentMode < 9 ) &&
					!event.button ) {
				return this._mouseUp( event );

			// Iframe mouseup check - mouseup occurred in another document
			} else if ( !event.which ) {

				// Support: Safari <=8 - 9
				// Safari sets which to 0 if you press any of the following keys
				// during a drag (#14461)
				if ( event.originalEvent.altKey || event.originalEvent.ctrlKey ||
						event.originalEvent.metaKey || event.originalEvent.shiftKey ) {
					this.ignoreMissingWhich = true;
				} else if ( !this.ignoreMissingWhich ) {
					return this._mouseUp( event );
				}
			}
		}

		if ( event.which || event.button ) {
			this._mouseMoved = true;
		}

		if ( this._mouseStarted ) {
			this._mouseDrag( event );
			return event.preventDefault();
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted =
				( this._mouseStart( this._mouseDownEvent, event ) !== false );
			( this._mouseStarted ? this._mouseDrag( event ) : this._mouseUp( event ) );
		}

		return !this._mouseStarted;
	},

	_mouseUp: function( event ) {
		this.document
			.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.off( "mouseup." + this.widgetName, this._mouseUpDelegate );

		if ( this._mouseStarted ) {
			this._mouseStarted = false;

			if ( event.target === this._mouseDownEvent.target ) {
				$.data( event.target, this.widgetName + ".preventClickEvent", true );
			}

			this._mouseStop( event );
		}

		if ( this._mouseDelayTimer ) {
			clearTimeout( this._mouseDelayTimer );
			delete this._mouseDelayTimer;
		}

		this.ignoreMissingWhich = false;
		mouseHandled = false;
		event.preventDefault();
	},

	_mouseDistanceMet: function( event ) {
		return ( Math.max(
				Math.abs( this._mouseDownEvent.pageX - event.pageX ),
				Math.abs( this._mouseDownEvent.pageY - event.pageY )
			) >= this.options.distance
		);
	},

	_mouseDelayMet: function( /* event */ ) {
		return this.mouseDelayMet;
	},

	// These are placeholder methods, to be overriden by extending plugin
	_mouseStart: function( /* event */ ) {},
	_mouseDrag: function( /* event */ ) {},
	_mouseStop: function( /* event */ ) {},
	_mouseCapture: function( /* event */ ) { return true; }
} );

} ) );


/***/ }),

/***/ "iPdL":
/*!*************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/package.json ***!
  \*************************************************************/
/*! exports provided: name, version, description, repository, license, author, files, main, typings, scripts, dependencies, devDependencies, gitHead, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@jupyter-widgets/controls\",\"version\":\"1.5.1\",\"description\":\"Jupyter interactive widgets\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/jupyter-widgets/ipywidgets.git\"},\"license\":\"BSD-3-Clause\",\"author\":\"Project Jupyter\",\"files\":[\"lib/**/*.d.ts\",\"lib/**/*.js\",\"css/*.css\",\"dist/\"],\"main\":\"lib/index.js\",\"typings\":\"lib/index.d.ts\",\"scripts\":{\"build\":\"npm run build:src && npm run build:css\",\"build:css\":\"postcss --use postcss-import --use postcss-cssnext -o css/widgets.built.css css/widgets.css\",\"build:src\":\"tsc\",\"build:test\":\"tsc --project test && webpack --config test/webpack.conf.js\",\"clean\":\"npm run clean:src\",\"clean:src\":\"rimraf lib && rimraf tsconfig.tsbuildinfo\",\"lint\":\"tslint --project tslint.json --format stylish\",\"prepublish\":\"npm run clean && npm run build\",\"test\":\"npm run test:unit\",\"test:coverage\":\"npm run build:test && webpack --config test/webpack-cov.conf.js && karma start test/karma-cov.conf.js\",\"test:unit\":\"npm run test:unit:firefox && npm run test:unit:chrome\",\"test:unit:chrome\":\"npm run test:unit:default -- --browsers=Chrome\",\"test:unit:default\":\"npm run build:test && karma start test/karma.conf.js --log-level debug\",\"test:unit:firefox\":\"npm run test:unit:default -- --browsers=Firefox\",\"test:unit:ie\":\"npm run test:unit:default -- --browsers=IE\"},\"dependencies\":{\"@jupyter-widgets/base\":\"^1.0.0 || ^2.0.0\",\"@phosphor/algorithm\":\"^1.1.0\",\"@phosphor/domutils\":\"^1.1.0\",\"@phosphor/messaging\":\"^1.2.1\",\"@phosphor/signaling\":\"^1.2.0\",\"@phosphor/widgets\":\"^1.3.0\",\"d3-format\":\"^1.3.0\",\"jquery\":\"^3.1.1\",\"jquery-ui\":\"^1.12.1\",\"underscore\":\"^1.8.3\"},\"devDependencies\":{\"@jupyterlab/services\":\"^2.0.0 || ^3.0.0 || ^4.0.0\",\"@types/d3-format\":\"^1.3.1\",\"@types/expect.js\":\"^0.3.29\",\"@types/mathjax\":\"^0.0.35\",\"@types/mocha\":\"^5.2.7\",\"@types/node\":\"^12.0.10\",\"chai\":\"^4.0.0\",\"css-loader\":\"^3.0.0\",\"expect.js\":\"^0.3.1\",\"file-loader\":\"^4.0.0\",\"istanbul-instrumenter-loader\":\"^3.0.1\",\"json-loader\":\"^0.5.7\",\"karma\":\"^4.1.0\",\"karma-chrome-launcher\":\"^2.2.0\",\"karma-coverage\":\"^1.1.2\",\"karma-firefox-launcher\":\"^1.1.0\",\"karma-ie-launcher\":\"^1.0.0\",\"karma-mocha\":\"^1.3.0\",\"karma-mocha-reporter\":\"^2.2.5\",\"karma-webpack\":\"^4.0.2\",\"mocha\":\"^6.1.4\",\"npm-run-all\":\"^4.1.5\",\"postcss-cli\":\"^6.1.2\",\"postcss-cssnext\":\"^3.1.0\",\"postcss-import\":\"^12.0.1\",\"postcss-loader\":\"^3.0.0\",\"rimraf\":\"^2.6.1\",\"sinon\":\"^7.3.2\",\"sinon-chai\":\"^3.3.0\",\"style-loader\":\"^0.23.1\",\"tslint\":\"^5.18.0\",\"typescript\":\"~3.5.2\",\"url-loader\":\"^2.0.0\",\"webpack\":\"^4.35.0\"},\"gitHead\":\"b2a998402120c2b9a277508efd7453f678c5785e\"}");

/***/ }),

/***/ "jSVB":
/*!******************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_box.js ***!
  \******************************************************************/
/*! exports provided: BoxModel, HBoxModel, VBoxModel, BoxView, HBoxView, VBoxView, GridBoxView, GridBoxModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxModel", function() { return BoxModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HBoxModel", function() { return HBoxModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VBoxModel", function() { return VBoxModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxView", function() { return BoxView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HBoxView", function() { return HBoxView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VBoxView", function() { return VBoxView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridBoxView", function() { return GridBoxView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridBoxModel", function() { return GridBoxModel; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @phosphor/algorithm */ "rqNV");
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _phosphor_messaging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @phosphor/messaging */ "hpl1");
/* harmony import */ var _phosphor_messaging__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_phosphor_messaging__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @phosphor/widgets */ "pif5");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_6__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};







var BoxModel = /** @class */ (function (_super) {
    __extends(BoxModel, _super);
    function BoxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoxModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_6__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'BoxView',
            _model_name: 'BoxModel',
            children: [],
            box_style: ''
        });
    };
    BoxModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"].serializers, { children: { deserialize: _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["unpack_models"] } });
    return BoxModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"]));

var HBoxModel = /** @class */ (function (_super) {
    __extends(HBoxModel, _super);
    function HBoxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HBoxModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_6__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'HBoxView',
            _model_name: 'HBoxModel',
        });
    };
    return HBoxModel;
}(BoxModel));

var VBoxModel = /** @class */ (function (_super) {
    __extends(VBoxModel, _super);
    function VBoxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VBoxModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_6__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'VBoxView',
            _model_name: 'VBoxModel',
        });
    };
    return VBoxModel;
}(BoxModel));

var BoxView = /** @class */ (function (_super) {
    __extends(BoxView, _super);
    function BoxView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoxView.prototype._createElement = function (tagName) {
        this.pWidget = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["JupyterPhosphorPanelWidget"]({ view: this });
        return this.pWidget.node;
    };
    BoxView.prototype._setElement = function (el) {
        if (this.el || el !== this.pWidget.node) {
            // Boxes don't allow setting the element beyond the initial creation.
            throw new Error('Cannot reset the DOM element.');
        }
        this.el = this.pWidget.node;
    };
    BoxView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.children_views = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["ViewList"](this.add_child_model, null, this);
        this.listenTo(this.model, 'change:children', this.update_children);
        this.listenTo(this.model, 'change:box_style', this.update_box_style);
        this.pWidget.addClass('jupyter-widgets');
        this.pWidget.addClass('widget-container');
        this.pWidget.addClass('widget-box');
    };
    BoxView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.update_children();
        this.set_box_style();
    };
    BoxView.prototype.update_children = function () {
        this.children_views.update(this.model.get('children')).then(function (views) {
            // Notify all children that their sizes may have changed.
            views.forEach(function (view) {
                _phosphor_messaging__WEBPACK_IMPORTED_MODULE_4__["MessageLoop"].postMessage(view.pWidget, _phosphor_widgets__WEBPACK_IMPORTED_MODULE_5__["Widget"].ResizeMessage.UnknownSize);
            });
        });
    };
    BoxView.prototype.update_box_style = function () {
        this.update_mapped_classes(BoxView.class_map, 'box_style');
    };
    BoxView.prototype.set_box_style = function () {
        this.set_mapped_classes(BoxView.class_map, 'box_style');
    };
    BoxView.prototype.add_child_model = function (model) {
        var _this = this;
        // we insert a dummy element so the order is preserved when we add
        // the rendered content later.
        var dummy = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_5__["Widget"]();
        this.pWidget.addWidget(dummy);
        return this.create_child_view(model).then(function (view) {
            // replace the dummy widget with the new one.
            var i = _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__["ArrayExt"].firstIndexOf(_this.pWidget.widgets, dummy);
            _this.pWidget.insertWidget(i, view.pWidget);
            dummy.dispose();
            return view;
        }).catch(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["reject"])('Could not add child view to box', true));
    };
    BoxView.prototype.remove = function () {
        this.children_views = null;
        _super.prototype.remove.call(this);
    };
    BoxView.class_map = {
        success: ['alert', 'alert-success'],
        info: ['alert', 'alert-info'],
        warning: ['alert', 'alert-warning'],
        danger: ['alert', 'alert-danger']
    };
    return BoxView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));

var HBoxView = /** @class */ (function (_super) {
    __extends(HBoxView, _super);
    function HBoxView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Public constructor
     */
    HBoxView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.pWidget.addClass('widget-hbox');
    };
    return HBoxView;
}(BoxView));

var VBoxView = /** @class */ (function (_super) {
    __extends(VBoxView, _super);
    function VBoxView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Public constructor
     */
    VBoxView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.pWidget.addClass('widget-vbox');
    };
    return VBoxView;
}(BoxView));

var GridBoxView = /** @class */ (function (_super) {
    __extends(GridBoxView, _super);
    function GridBoxView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Public constructor
     */
    GridBoxView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.pWidget.addClass('widget-gridbox');
        // display needn't be set to flex and grid 
        this.pWidget.removeClass('widget-box');
    };
    return GridBoxView;
}(BoxView));

var GridBoxModel = /** @class */ (function (_super) {
    __extends(GridBoxModel, _super);
    function GridBoxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridBoxModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_6__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'GridBoxView',
            _model_name: 'GridBoxModel',
        });
    };
    return GridBoxModel;
}(BoxModel));



/***/ }),

/***/ "lGQ9":
/*!********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_color.js ***!
  \********************************************************************/
/*! exports provided: ColorPickerModel, ColorPickerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModel", function() { return ColorPickerModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerView", function() { return ColorPickerView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ColorPickerModel = /** @class */ (function (_super) {
    __extends(ColorPickerModel, _super);
    function ColorPickerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorPickerModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            value: 'black',
            concise: false,
            _model_name: 'ColorPickerModel',
            _view_name: 'ColorPickerView'
        });
    };
    return ColorPickerModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var ColorPickerView = /** @class */ (function (_super) {
    __extends(ColorPickerView, _super);
    function ColorPickerView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorPickerView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-colorpicker');
        this._color_container = document.createElement('div');
        this._color_container.className = 'widget-inline-hbox widget-colorpicker-input';
        this.el.appendChild(this._color_container);
        this._textbox = document.createElement('input');
        this._textbox.setAttribute('type', 'text');
        this._textbox.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        this._color_container.appendChild(this._textbox);
        this._textbox.value = this.model.get('value');
        this._colorpicker = document.createElement('input');
        this._colorpicker.setAttribute('type', 'color');
        this._color_container.appendChild(this._colorpicker);
        this.listenTo(this.model, 'change:value', this._update_value);
        this.listenTo(this.model, 'change:concise', this._update_concise);
        this._update_concise();
        this._update_value();
        this.update();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed. The model may have been
     * changed by another view or by a state update from the back-end.
     */
    ColorPickerView.prototype.update = function (options) {
        if (options === undefined || options.updated_view != this) {
            var disabled = this.model.get('disabled');
            this._textbox.disabled = disabled;
            this._colorpicker.disabled = disabled;
        }
        return _super.prototype.update.call(this);
    };
    ColorPickerView.prototype.events = function () {
        // Typescript doesn't understand that these functions are called, so we
        // specifically use them here so it knows they are being used.
        void this._picker_change;
        void this._text_change;
        return {
            'change [type="color"]': '_picker_change',
            'change [type="text"]': '_text_change'
        };
    };
    ColorPickerView.prototype._update_value = function () {
        var value = this.model.get('value');
        this._colorpicker.value = color2hex(value);
        this._textbox.value = value;
    };
    ColorPickerView.prototype._update_concise = function () {
        var concise = this.model.get('concise');
        if (concise) {
            this.el.classList.add('concise');
            this._textbox.style.display = 'none';
        }
        else {
            this.el.classList.remove('concise');
            this._textbox.style.display = '';
        }
    };
    ColorPickerView.prototype._picker_change = function () {
        this.model.set('value', this._colorpicker.value);
        this.touch();
    };
    ColorPickerView.prototype._text_change = function () {
        var value = this._validate_color(this._textbox.value, this.model.get('value'));
        this.model.set('value', value);
        this.touch();
    };
    ColorPickerView.prototype._validate_color = function (color, fallback) {
        return color.match(/#[a-fA-F0-9]{3}(?:[a-fA-F0-9]{3})?$/) ||
            named_colors[color.toLowerCase()] ? color : fallback;
    };
    return ColorPickerView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var named_colors = { aliceblue: '#f0f8ff', antiquewhite: '#faebd7', aqua: '#00ffff', aquamarine: '#7fffd4', azure: '#f0ffff', beige: '#f5f5dc', bisque: '#ffe4c4', black: '#000000', blanchedalmond: '#ffebcd', blue: '#0000ff', blueviolet: '#8a2be2', brown: '#a52a2a', burlywood: '#deb887', cadetblue: '#5f9ea0', chartreuse: '#7fff00', chocolate: '#d2691e', coral: '#ff7f50', cornflowerblue: '#6495ed', cornsilk: '#fff8dc', crimson: '#dc143c', cyan: '#00ffff', darkblue: '#00008b', darkcyan: '#008b8b', darkgoldenrod: '#b8860b', darkgray: '#a9a9a9', darkgrey: '#a9a9a9', darkgreen: '#006400', darkkhaki: '#bdb76b', darkmagenta: '#8b008b', darkolivegreen: '#556b2f', darkorange: '#ff8c00', darkorchid: '#9932cc', darkred: '#8b0000', darksalmon: '#e9967a', darkseagreen: '#8fbc8f', darkslateblue: '#483d8b', darkslategray: '#2f4f4f', darkslategrey: '#2f4f4f', darkturquoise: '#00ced1', darkviolet: '#9400d3', deeppink: '#ff1493', deepskyblue: '#00bfff', dimgray: '#696969', dimgrey: '#696969', dodgerblue: '#1e90ff', firebrick: '#b22222', floralwhite: '#fffaf0', forestgreen: '#228b22', fuchsia: '#ff00ff', gainsboro: '#dcdcdc', ghostwhite: '#f8f8ff', gold: '#ffd700', goldenrod: '#daa520', gray: '#808080', grey: '#808080', green: '#008000', greenyellow: '#adff2f', honeydew: '#f0fff0', hotpink: '#ff69b4', indianred: '#cd5c5c', indigo: '#4b0082', ivory: '#fffff0', khaki: '#f0e68c', lavender: '#e6e6fa', lavenderblush: '#fff0f5', lawngreen: '#7cfc00', lemonchiffon: '#fffacd', lightblue: '#add8e6', lightcoral: '#f08080', lightcyan: '#e0ffff', lightgoldenrodyellow: '#fafad2', lightgreen: '#90ee90', lightgray: '#d3d3d3', lightgrey: '#d3d3d3', lightpink: '#ffb6c1', lightsalmon: '#ffa07a', lightseagreen: '#20b2aa', lightskyblue: '#87cefa', lightslategray: '#778899', lightslategrey: '#778899', lightsteelblue: '#b0c4de', lightyellow: '#ffffe0', lime: '#00ff00', limegreen: '#32cd32', linen: '#faf0e6', magenta: '#ff00ff', maroon: '#800000', mediumaquamarine: '#66cdaa', mediumblue: '#0000cd', mediumorchid: '#ba55d3', mediumpurple: '#9370db', mediumseagreen: '#3cb371', mediumslateblue: '#7b68ee', mediumspringgreen: '#00fa9a', mediumturquoise: '#48d1cc', mediumvioletred: '#c71585', midnightblue: '#191970', mintcream: '#f5fffa', mistyrose: '#ffe4e1', moccasin: '#ffe4b5', navajowhite: '#ffdead', navy: '#000080', oldlace: '#fdf5e6', olive: '#808000', olivedrab: '#6b8e23', orange: '#ffa500', orangered: '#ff4500', orchid: '#da70d6', palegoldenrod: '#eee8aa', palegreen: '#98fb98', paleturquoise: '#afeeee', palevioletred: '#db7093', papayawhip: '#ffefd5', peachpuff: '#ffdab9', peru: '#cd853f', pink: '#ffc0cb', plum: '#dda0dd', powderblue: '#b0e0e6', purple: '#800080', red: '#ff0000', rosybrown: '#bc8f8f', royalblue: '#4169e1', saddlebrown: '#8b4513', salmon: '#fa8072', sandybrown: '#f4a460', seagreen: '#2e8b57', seashell: '#fff5ee', sienna: '#a0522d', silver: '#c0c0c0', skyblue: '#87ceeb', slateblue: '#6a5acd', slategray: '#708090', slategrey: '#708090', snow: '#fffafa', springgreen: '#00ff7f', steelblue: '#4682b4', tan: '#d2b48c', teal: '#008080', thistle: '#d8bfd8', tomato: '#ff6347', turquoise: '#40e0d0', violet: '#ee82ee', wheat: '#f5deb3', white: '#ffffff', whitesmoke: '#f5f5f5', yellow: '#ffff00', yellowgreen: '#9acd32', };
/*
 * From a valid html color (named color, 6-digits or 3-digits hex format)
 * return a 6-digits hexadecimal color #rrggbb.
 */
function color2hex(color) {
    return named_colors[color.toLowerCase()] || rgb3_to_rgb6(color);
}
function rgb3_to_rgb6(rgb) {
    if (rgb.length === 7) {
        return rgb;
    }
    else {
        return '#' + rgb.charAt(1) + rgb.charAt(1) +
            rgb.charAt(2) + rgb.charAt(2) +
            rgb.charAt(3) + rgb.charAt(3);
    }
}


/***/ }),

/***/ "rCYf":
/*!*********************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_selectioncontainer.js ***!
  \*********************************************************************************/
/*! exports provided: SelectionContainerModel, AccordionModel, JupyterPhosphorAccordionWidget, AccordionView, TabModel, JupyterPhosphorTabPanelWidget, TabView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionContainerModel", function() { return SelectionContainerModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModel", function() { return AccordionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JupyterPhosphorAccordionWidget", function() { return JupyterPhosphorAccordionWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionView", function() { return AccordionView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabModel", function() { return TabModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JupyterPhosphorTabPanelWidget", function() { return JupyterPhosphorTabPanelWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabView", function() { return TabView; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_box */ "jSVB");
/* harmony import */ var _phosphor_tabpanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phosphor/tabpanel */ "dpys");
/* harmony import */ var _phosphor_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phosphor/accordion */ "4IhH");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @phosphor/widgets */ "pif5");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @phosphor/algorithm */ "rqNV");
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_phosphor_algorithm__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _phosphor_messaging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @phosphor/messaging */ "hpl1");
/* harmony import */ var _phosphor_messaging__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_phosphor_messaging__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();










var SelectionContainerModel = /** @class */ (function (_super) {
    __extends(SelectionContainerModel, _super);
    function SelectionContainerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionContainerModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'SelectionContainerModel',
            selected_index: 0,
            _titles: {}
        });
    };
    return SelectionContainerModel;
}(_widget_box__WEBPACK_IMPORTED_MODULE_1__["BoxModel"]));

var AccordionModel = /** @class */ (function (_super) {
    __extends(AccordionModel, _super);
    function AccordionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccordionModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'AccordionModel',
            _view_name: 'AccordionView'
        });
    };
    return AccordionModel;
}(SelectionContainerModel));

// We implement our own tab widget since Phoshpor's TabPanel uses an absolute
// positioning BoxLayout, but we want a more an html/css-based Panel layout.
var JupyterPhosphorAccordionWidget = /** @class */ (function (_super) {
    __extends(JupyterPhosphorAccordionWidget, _super);
    function JupyterPhosphorAccordionWidget(options) {
        var _this = this;
        var view = options.view;
        delete options.view;
        _this = _super.call(this, options) || this;
        _this._view = view;
        return _this;
    }
    /**
     * Process the phosphor message.
     *
     * Any custom phosphor widget used inside a Jupyter widget should override
     * the processMessage function like this.
     */
    JupyterPhosphorAccordionWidget.prototype.processMessage = function (msg) {
        _super.prototype.processMessage.call(this, msg);
        this._view.processPhosphorMessage(msg);
    };
    /**
     * Dispose the widget.
     *
     * This causes the view to be destroyed as well with 'remove'
     */
    JupyterPhosphorAccordionWidget.prototype.dispose = function () {
        if (this.isDisposed) {
            return;
        }
        _super.prototype.dispose.call(this);
        if (this._view) {
            this._view.remove();
        }
        this._view = null;
    };
    return JupyterPhosphorAccordionWidget;
}(_phosphor_accordion__WEBPACK_IMPORTED_MODULE_3__["Accordion"]));

var AccordionView = /** @class */ (function (_super) {
    __extends(AccordionView, _super);
    function AccordionView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccordionView.prototype._createElement = function (tagName) {
        this.pWidget = new JupyterPhosphorAccordionWidget({ view: this });
        return this.pWidget.node;
    };
    AccordionView.prototype._setElement = function (el) {
        if (this.el || el !== this.pWidget.node) {
            // Accordions don't allow setting the element beyond the initial creation.
            throw new Error('Cannot reset the DOM element.');
        }
        this.el = this.pWidget.node;
        this.$el = jquery__WEBPACK_IMPORTED_MODULE_9___default()(this.pWidget.node);
    };
    AccordionView.prototype.initialize = function (parameters) {
        var _this = this;
        _super.prototype.initialize.call(this, parameters);
        this.children_views = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["ViewList"](this.add_child_view, this.remove_child_view, this);
        this.listenTo(this.model, 'change:children', function () { return _this.updateChildren(); });
        this.listenTo(this.model, 'change:selected_index', function () { return _this.update_selected_index(); });
        this.listenTo(this.model, 'change:_titles', function () { return _this.update_titles(); });
    };
    /**
     * Called when view is rendered.
     */
    AccordionView.prototype.render = function () {
        var _this = this;
        _super.prototype.render.call(this);
        var accordion = this.pWidget;
        accordion.addClass('jupyter-widgets');
        accordion.addClass('widget-accordion');
        accordion.addClass('widget-container');
        accordion.selection.selectionChanged.connect(function (sender) {
            if (!_this.updatingChildren) {
                _this.model.set('selected_index', accordion.selection.index);
                _this.touch();
            }
        });
        this.children_views.update(this.model.get('children'));
        this.update_titles();
        this.update_selected_index();
    };
    /**
     * Update children
     */
    AccordionView.prototype.updateChildren = function () {
        // While we are updating, the index may not be valid, so deselect the
        // tabs before updating so we don't get spurious changes in the index,
        // which would then set off another sync cycle.
        this.updatingChildren = true;
        this.pWidget.selection.index = null;
        this.children_views.update(this.model.get('children'));
        this.update_selected_index();
        this.updatingChildren = false;
    };
    /**
     * Set header titles
     */
    AccordionView.prototype.update_titles = function () {
        var collapsed = this.pWidget.collapseWidgets;
        var titles = this.model.get('_titles');
        for (var i = 0; i < collapsed.length; i++) {
            if (titles[i] !== void 0) {
                collapsed[i].widget.title.label = titles[i];
            }
        }
    };
    /**
     * Make the rendering and selected index consistent.
     */
    AccordionView.prototype.update_selected_index = function () {
        this.pWidget.selection.index = this.model.get('selected_index');
    };
    /**
     * Called when a child is removed from children list.
     */
    AccordionView.prototype.remove_child_view = function (view) {
        this.pWidget.removeWidget(view.pWidget);
        view.remove();
    };
    /**
     * Called when a child is added to children list.
     */
    AccordionView.prototype.add_child_view = function (model, index) {
        // Placeholder widget to keep our position in the tab panel while we create the view.
        var accordion = this.pWidget;
        var placeholder = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_4__["Widget"]();
        placeholder.title.label = this.model.get('_titles')[index] || '';
        accordion.addWidget(placeholder);
        return this.create_child_view(model).then(function (view) {
            var widget = view.pWidget;
            widget.title.label = placeholder.title.label;
            var collapse = accordion.collapseWidgets[accordion.indexOf(placeholder)];
            collapse.widget = widget;
            placeholder.dispose();
            return view;
        }).catch(_utils__WEBPACK_IMPORTED_MODULE_8__["reject"]('Could not add child view to box', true));
    };
    AccordionView.prototype.remove = function () {
        this.children_views = null;
        _super.prototype.remove.call(this);
    };
    return AccordionView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));

var TabModel = /** @class */ (function (_super) {
    __extends(TabModel, _super);
    function TabModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'TabModel',
            _view_name: 'TabView'
        });
    };
    return TabModel;
}(SelectionContainerModel));

// We implement our own tab widget since Phoshpor's TabPanel uses an absolute
// positioning BoxLayout, but we want a more an html/css-based Panel layout.
var JupyterPhosphorTabPanelWidget = /** @class */ (function (_super) {
    __extends(JupyterPhosphorTabPanelWidget, _super);
    function JupyterPhosphorTabPanelWidget(options) {
        var _this = this;
        var view = options.view;
        delete options.view;
        _this = _super.call(this, options) || this;
        _this._view = view;
        // We want the view's messages to be the messages the tabContents panel
        // gets.
        _phosphor_messaging__WEBPACK_IMPORTED_MODULE_6__["MessageLoop"].installMessageHook(_this.tabContents, function (handler, msg) {
            // There may be times when we want the view's handler to be called
            // *after* the message has been processed by the widget, in which
            // case we'll need to revisit using a message hook.
            _this._view.processPhosphorMessage(msg);
            return true;
        });
        return _this;
    }
    /**
     * Dispose the widget.
     *
     * This causes the view to be destroyed as well with 'remove'
     */
    JupyterPhosphorTabPanelWidget.prototype.dispose = function () {
        if (this.isDisposed) {
            return;
        }
        _super.prototype.dispose.call(this);
        if (this._view) {
            this._view.remove();
        }
        this._view = null;
    };
    return JupyterPhosphorTabPanelWidget;
}(_phosphor_tabpanel__WEBPACK_IMPORTED_MODULE_2__["TabPanel"]));

var TabView = /** @class */ (function (_super) {
    __extends(TabView, _super);
    function TabView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.updatingTabs = false;
        return _this;
    }
    TabView.prototype._createElement = function (tagName) {
        this.pWidget = new JupyterPhosphorTabPanelWidget({
            view: this,
        });
        return this.pWidget.node;
    };
    TabView.prototype._setElement = function (el) {
        if (this.el || el !== this.pWidget.node) {
            // TabViews don't allow setting the element beyond the initial creation.
            throw new Error('Cannot reset the DOM element.');
        }
        this.el = this.pWidget.node;
        this.$el = jquery__WEBPACK_IMPORTED_MODULE_9___default()(this.pWidget.node);
    };
    /**
     * Public constructor.
     */
    TabView.prototype.initialize = function (parameters) {
        var _this = this;
        _super.prototype.initialize.call(this, parameters);
        this.childrenViews = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["ViewList"](this.addChildView, function (view) { view.remove(); }, this);
        this.listenTo(this.model, 'change:children', function () { return _this.updateTabs(); });
        this.listenTo(this.model, 'change:_titles', function () { return _this.updateTitles(); });
    };
    /**
     * Called when view is rendered.
     */
    TabView.prototype.render = function () {
        _super.prototype.render.call(this);
        var tabs = this.pWidget;
        tabs.addClass('jupyter-widgets');
        tabs.addClass('widget-container');
        tabs.addClass('widget-tab');
        tabs.tabsMovable = true;
        tabs.tabBar.insertBehavior = 'none'; // needed for insert behavior, see below.
        tabs.tabBar.currentChanged.connect(this._onTabChanged, this);
        tabs.tabBar.tabMoved.connect(this._onTabMoved, this);
        tabs.tabBar.addClass('widget-tab-bar');
        tabs.tabContents.addClass('widget-tab-contents');
        // TODO: expose this option in python
        tabs.tabBar.tabsMovable = false;
        this.updateTabs();
        this.update();
    };
    /**
     * Render tab views based on the current model's children.
     */
    TabView.prototype.updateTabs = function () {
        // While we are updating, the index may not be valid, so deselect the
        // tabs before updating so we don't get spurious changes in the index,
        // which would then set off another sync cycle.
        this.updatingTabs = true;
        this.pWidget.currentIndex = null;
        this.childrenViews.update(this.model.get('children'));
        this.pWidget.currentIndex = this.model.get('selected_index');
        this.updatingTabs = false;
    };
    /**
     * Called when a child is added to children list.
     */
    TabView.prototype.addChildView = function (model, index) {
        // Placeholder widget to keep our position in the tab panel while we create the view.
        var label = this.model.get('_titles')[index] || '';
        var tabs = this.pWidget;
        var placeholder = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_4__["Widget"]();
        placeholder.title.label = label;
        tabs.addWidget(placeholder);
        return this.create_child_view(model).then(function (view) {
            var widget = view.pWidget;
            widget.title.label = placeholder.title.label;
            widget.title.closable = false;
            var i = _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_5__["ArrayExt"].firstIndexOf(tabs.widgets, placeholder);
            // insert after placeholder so that if placholder is selected, the
            // real widget will be selected now (this depends on the tab bar
            // insert behavior)
            tabs.insertWidget(i + 1, widget);
            placeholder.dispose();
            return view;
        }).catch(_utils__WEBPACK_IMPORTED_MODULE_8__["reject"]('Could not add child view to box', true));
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    TabView.prototype.update = function () {
        // Update the selected index in the overall update method because it
        // should be run after the tabs have been updated. Otherwise the
        // selected index may not be a valid tab in the tab bar.
        this.updateSelectedIndex();
        return _super.prototype.update.call(this);
    };
    /**
     * Updates the tab page titles.
     */
    TabView.prototype.updateTitles = function () {
        var titles = this.model.get('_titles') || {};
        Object(_phosphor_algorithm__WEBPACK_IMPORTED_MODULE_5__["each"])(this.pWidget.widgets, function (widget, i) {
            widget.title.label = titles[i] || '';
        });
    };
    /**
     * Updates the selected index.
     */
    TabView.prototype.updateSelectedIndex = function () {
        this.pWidget.currentIndex = this.model.get('selected_index');
    };
    TabView.prototype.remove = function () {
        this.childrenViews = null;
        _super.prototype.remove.call(this);
    };
    TabView.prototype._onTabChanged = function (sender, args) {
        if (!this.updatingTabs) {
            var i = args.currentIndex;
            this.model.set('selected_index', i === -1 ? null : i);
            this.touch();
        }
    };
    /**
     * Handle the `tabMoved` signal from the tab bar.
     */
    TabView.prototype._onTabMoved = function (sender, args) {
        var children = this.model.get('children').slice();
        _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_5__["ArrayExt"].move(children, args.fromIndex, args.toIndex);
        this.model.set('children', children);
        this.touch();
    };
    return TabView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));



/***/ }),

/***/ "uhLQ":
/*!********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_image.js ***!
  \********************************************************************/
/*! exports provided: ImageModel, ImageView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModel", function() { return ImageModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageView", function() { return ImageView; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var ImageModel = /** @class */ (function (_super) {
    __extends(ImageModel, _super);
    function ImageModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_2__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'ImageModel',
            _view_name: 'ImageView',
            format: 'png',
            width: '',
            height: '',
            value: new DataView(new ArrayBuffer(0))
        });
    };
    ImageModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"].serializers, { value: { serialize: function (value) {
                return new DataView(value.buffer.slice(0));
            } } });
    return ImageModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"]));

var ImageView = /** @class */ (function (_super) {
    __extends(ImageView, _super);
    function ImageView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageView.prototype.render = function () {
        /**
         * Called when view is rendered.
         */
        _super.prototype.render.call(this);
        this.pWidget.addClass('jupyter-widgets');
        this.pWidget.addClass('widget-image');
        this.update(); // Set defaults.
    };
    ImageView.prototype.update = function () {
        /**
         * Update the contents of this view
         *
         * Called when the model is changed.  The model may have been
         * changed by another view or by a state update from the back-end.
         */
        var url;
        var format = this.model.get('format');
        var value = this.model.get('value');
        if (format !== 'url') {
            var blob = new Blob([value], { type: "image/" + this.model.get('format') });
            url = URL.createObjectURL(blob);
        }
        else {
            url = (new TextDecoder('utf-8')).decode(value.buffer);
        }
        // Clean up the old objectURL
        var oldurl = this.el.src;
        this.el.src = url;
        if (oldurl && typeof oldurl !== 'string') {
            URL.revokeObjectURL(oldurl);
        }
        var width = this.model.get('width');
        if (width !== undefined && width.length > 0) {
            this.el.setAttribute('width', width);
        }
        else {
            this.el.removeAttribute('width');
        }
        var height = this.model.get('height');
        if (height !== undefined && height.length > 0) {
            this.el.setAttribute('height', height);
        }
        else {
            this.el.removeAttribute('height');
        }
        return _super.prototype.update.call(this);
    };
    ImageView.prototype.remove = function () {
        if (this.el.src) {
            URL.revokeObjectURL(this.el.src);
        }
        _super.prototype.remove.call(this);
    };
    Object.defineProperty(ImageView.prototype, "tagName", {
        /**
         * The default tag name.
         *
         * #### Notes
         * This is a read-only attribute.
         */
        get: function () {
            // We can't make this an attribute with a default value
            // since it would be set after it is needed in the
            // constructor.
            return 'img';
        },
        enumerable: true,
        configurable: true
    });
    return ImageView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));



/***/ }),

/***/ "vBzC":
/*!**********************************************!*\
  !*** ./node_modules/jquery-ui/ui/keycode.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "EVdn"), __webpack_require__(/*! ./version */ "Qwlt") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
} ( function( $ ) {
return $.ui.keyCode = {
	BACKSPACE: 8,
	COMMA: 188,
	DELETE: 46,
	DOWN: 40,
	END: 35,
	ENTER: 13,
	ESCAPE: 27,
	HOME: 36,
	LEFT: 37,
	PAGE_DOWN: 34,
	PAGE_UP: 33,
	PERIOD: 190,
	RIGHT: 39,
	SPACE: 32,
	TAB: 9,
	UP: 38
};

} ) );


/***/ }),

/***/ "xOfY":
/*!********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_float.js ***!
  \********************************************************************/
/*! exports provided: FloatModel, BoundedFloatModel, FloatSliderModel, FloatLogSliderModel, FloatRangeSliderModel, FloatSliderView, FloatLogSliderView, FloatRangeSliderView, FloatTextModel, BoundedFloatTextModel, FloatTextView, FloatProgressModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatModel", function() { return FloatModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundedFloatModel", function() { return BoundedFloatModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatSliderModel", function() { return FloatSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatLogSliderModel", function() { return FloatLogSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatRangeSliderModel", function() { return FloatRangeSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatSliderView", function() { return FloatSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatLogSliderView", function() { return FloatLogSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatRangeSliderView", function() { return FloatRangeSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatTextModel", function() { return FloatTextModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundedFloatTextModel", function() { return BoundedFloatTextModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatTextView", function() { return FloatTextView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatProgressModel", function() { return FloatProgressModel; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widget_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget_int */ "TtYL");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-format */ "rWgG");
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var FloatModel = /** @class */ (function (_super) {
    __extends(FloatModel, _super);
    function FloatModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FloatModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'FloatModel',
            value: 0,
        });
    };
    return FloatModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var BoundedFloatModel = /** @class */ (function (_super) {
    __extends(BoundedFloatModel, _super);
    function BoundedFloatModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoundedFloatModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'BoundedFloatModel',
            max: 100.0,
            min: 0.0
        });
    };
    return BoundedFloatModel;
}(FloatModel));

var FloatSliderModel = /** @class */ (function (_super) {
    __extends(FloatSliderModel, _super);
    function FloatSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FloatSliderModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'FloatSliderModel',
            _view_name: 'FloatSliderView',
            step: 1.0,
            orientation: 'horizontal',
            _range: false,
            readout: true,
            readout_format: '.2f',
            slider_color: null,
            continuous_update: true,
            disabled: false,
        });
    };
    FloatSliderModel.prototype.initialize = function (attributes, options) {
        _super.prototype.initialize.call(this, attributes, options);
        this.on('change:readout_format', this.update_readout_format, this);
        this.update_readout_format();
    };
    FloatSliderModel.prototype.update_readout_format = function () {
        this.readout_formatter = Object(d3_format__WEBPACK_IMPORTED_MODULE_3__["format"])(this.get('readout_format'));
    };
    return FloatSliderModel;
}(BoundedFloatModel));

var FloatLogSliderModel = /** @class */ (function (_super) {
    __extends(FloatLogSliderModel, _super);
    function FloatLogSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FloatLogSliderModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'FloatLogSliderModel',
            _view_name: 'FloatLogSliderView',
            step: 0.1,
            orientation: 'horizontal',
            _range: false,
            readout: true,
            readout_format: '.3g',
            slider_color: null,
            continuous_update: true,
            disabled: false,
            base: 10.,
            value: 1.0,
            min: 0,
            max: 4
        });
    };
    FloatLogSliderModel.prototype.initialize = function (attributes, options) {
        _super.prototype.initialize.call(this, attributes, options);
        this.on('change:readout_format', this.update_readout_format, this);
        this.update_readout_format();
    };
    FloatLogSliderModel.prototype.update_readout_format = function () {
        this.readout_formatter = Object(d3_format__WEBPACK_IMPORTED_MODULE_3__["format"])(this.get('readout_format'));
    };
    return FloatLogSliderModel;
}(BoundedFloatModel));

var FloatRangeSliderModel = /** @class */ (function (_super) {
    __extends(FloatRangeSliderModel, _super);
    function FloatRangeSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FloatRangeSliderModel;
}(FloatSliderModel));

var FloatSliderView = /** @class */ (function (_super) {
    __extends(FloatSliderView, _super);
    function FloatSliderView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._parse_value = parseFloat;
        return _this;
    }
    /**
     * Validate the value of the slider before sending it to the back-end
     * and applying it to the other views on the page.
     */
    FloatSliderView.prototype._validate_slide_value = function (x) {
        return x;
    };
    return FloatSliderView;
}(_widget_int__WEBPACK_IMPORTED_MODULE_2__["IntSliderView"]));

var FloatLogSliderView = /** @class */ (function (_super) {
    __extends(FloatLogSliderView, _super);
    function FloatLogSliderView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._parse_value = parseFloat;
        return _this;
    }
    FloatLogSliderView.prototype.update = function (options) {
        _super.prototype.update.call(this, options);
        var min = this.model.get('min');
        var max = this.model.get('max');
        var value = this.model.get('value');
        var base = this.model.get('base');
        var log_value = Math.log(value) / Math.log(base);
        if (log_value > max) {
            log_value = max;
        }
        else if (log_value < min) {
            log_value = min;
        }
        this.$slider.slider('option', 'value', log_value);
        this.readout.textContent = this.valueToString(value);
        if (this.model.get('value') !== value) {
            this.model.set('value', value, { updated_view: this });
            this.touch();
        }
    };
    /**
     * Write value to a string
     */
    FloatLogSliderView.prototype.valueToString = function (value) {
        var format = this.model.readout_formatter;
        return format(value);
    };
    /**
     * Parse value from a string
     */
    FloatLogSliderView.prototype.stringToValue = function (text) {
        return this._parse_value(text);
    };
    /**
     * this handles the entry of text into the contentEditable label first, the
     * value is checked if it contains a parseable value then it is clamped
     * within the min-max range of the slider finally, the model is updated if
     * the value is to be changed
     *
     * if any of these conditions are not met, the text is reset
     */
    FloatLogSliderView.prototype.handleTextChange = function () {
        var value = this.stringToValue(this.readout.textContent);
        var vmin = this.model.get('min');
        var vmax = this.model.get('max');
        var base = this.model.get('base');
        if (isNaN(value)) {
            this.readout.textContent = this.valueToString(this.model.get('value'));
        }
        else {
            value = Math.max(Math.min(value, Math.pow(base, vmax)), Math.pow(base, vmin));
            if (value !== this.model.get('value')) {
                this.readout.textContent = this.valueToString(value);
                this.model.set('value', value, { updated_view: this });
                this.touch();
            }
            else {
                this.readout.textContent = this.valueToString(this.model.get('value'));
            }
        }
    };
    /**
     * Called when the slider value is changing.
     */
    FloatLogSliderView.prototype.handleSliderChange = function (e, ui) {
        var base = this.model.get('base');
        var actual_value = Math.pow(base, this._validate_slide_value(ui.value));
        this.readout.textContent = this.valueToString(actual_value);
        // Only persist the value while sliding if the continuous_update
        // trait is set to true.
        if (this.model.get('continuous_update')) {
            this.handleSliderChanged(e, ui);
        }
    };
    /**
     * Called when the slider value has changed.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    FloatLogSliderView.prototype.handleSliderChanged = function (e, ui) {
        var base = this.model.get('base');
        var actual_value = Math.pow(base, this._validate_slide_value(ui.value));
        this.model.set('value', actual_value, { updated_view: this });
        this.touch();
    };
    FloatLogSliderView.prototype._validate_slide_value = function (x) {
        return x;
    };
    return FloatLogSliderView;
}(_widget_int__WEBPACK_IMPORTED_MODULE_2__["BaseIntSliderView"]));

var FloatRangeSliderView = /** @class */ (function (_super) {
    __extends(FloatRangeSliderView, _super);
    function FloatRangeSliderView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._parse_value = parseFloat;
        // matches: whitespace?, float, whitespace?, (hyphen, colon, or en-dash), whitespace?, float
        _this._range_regex = /^\s*([+-]?(?:\d*\.?\d+|\d+\.)(?:[eE][-:]?\d+)?)\s*[-:–]\s*([+-]?(?:\d*\.?\d+|\d+\.)(?:[eE][+-]?\d+)?)/;
        return _this;
    }
    /**
     * Validate the value of the slider before sending it to the back-end
     * and applying it to the other views on the page.
     */
    FloatRangeSliderView.prototype._validate_slide_value = function (x) {
        return x;
    };
    return FloatRangeSliderView;
}(_widget_int__WEBPACK_IMPORTED_MODULE_2__["IntRangeSliderView"]));

var FloatTextModel = /** @class */ (function (_super) {
    __extends(FloatTextModel, _super);
    function FloatTextModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FloatTextModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'FloatTextModel',
            _view_name: 'FloatTextView',
            disabled: false,
            continuous_update: false,
        });
    };
    return FloatTextModel;
}(FloatModel));

var BoundedFloatTextModel = /** @class */ (function (_super) {
    __extends(BoundedFloatTextModel, _super);
    function BoundedFloatTextModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoundedFloatTextModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'BoundedFloatTextModel',
            _view_name: 'FloatTextView',
            disabled: false,
            continuous_update: false,
            step: 0.1
        });
    };
    return BoundedFloatTextModel;
}(BoundedFloatModel));

var FloatTextView = /** @class */ (function (_super) {
    __extends(FloatTextView, _super);
    function FloatTextView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._parse_value = parseFloat;
        _this._default_step = 'any';
        return _this;
    }
    /**
     * Handle key press
     */
    FloatTextView.prototype.handleKeypress = function (e) {
        // Overwrite IntTextView's handleKeypress
        // which prevents decimal points.
        e.stopPropagation();
    };
    /**
     * Handle key up
     */
    FloatTextView.prototype.handleKeyUp = function (e) {
        // Overwrite IntTextView's handleKeyUp
        // which prevents decimal points.
    };
    return FloatTextView;
}(_widget_int__WEBPACK_IMPORTED_MODULE_2__["IntTextView"]));

var FloatProgressModel = /** @class */ (function (_super) {
    __extends(FloatProgressModel, _super);
    function FloatProgressModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FloatProgressModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'FloatProgressModel',
            _view_name: 'ProgressView',
            orientation: 'horizontal',
            bar_style: '',
            style: null
        });
    };
    return FloatProgressModel;
}(BoundedFloatModel));



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvd2lkZ2V0X2Jvb2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVweXRlci13aWRnZXRzL2NvbnRyb2xzL2xpYi93aWRnZXRfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvd2lkZ2V0X2Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVweXRlci13aWRnZXRzL2NvbnRyb2xzL2xpYi9waG9zcGhvci9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS93aWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS9pZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3VpL3dpZGdldHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVweXRlci13aWRnZXRzL2NvbnRyb2xzL2xpYi9waG9zcGhvci9jdXJyZW50c2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVweXRlci13aWRnZXRzL2NvbnRyb2xzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvd2lkZ2V0X2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF92aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvd2lkZ2V0X3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvcGhvc3Bob3IvdGFicGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3VpL3dpZGdldHMvbW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9ib3guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvd2lkZ2V0X3NlbGVjdGlvbmNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvd2lkZ2V0X2ltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkva2V5Y29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvd2lkZ2V0X2Zsb2F0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNvRDtBQUNFO0FBQ0Q7QUFDdEI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUMsQ0FBQyxpRUFBb0I7QUFDRDtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQyxDQUFDLGlFQUFvQjtBQUNHO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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R0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsa0NBQWtDO0FBQzNDO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsbUVBQWU7QUFDTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNvQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsOENBQThDO0FBQzlDLDZDQUE2QztBQUM3QywrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsbUVBQWE7QUFDSzs7Ozs7Ozs7Ozs7OztBQ3AzQnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzRDtBQUNOO0FBQ2hCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELEVBQUUsNERBQWUsZUFBZSxVQUFVLGNBQWMsbUVBQWEsRUFBRSxXQUFXLGNBQWMsbUVBQWEsRUFBRSxFQUFFO0FBQ25LO0FBQ0EsQ0FBQyxDQUFDLDREQUFlO0FBQ2U7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBUTtBQUN2QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ29COzs7Ozs7Ozs7Ozs7O0FDdkhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytDO0FBQ0Y7QUFDN0M7QUFDQTtBQUNBLGlDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQywwREFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0REFBUTtBQUNyQztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDb0I7Ozs7Ozs7Ozs7Ozs7QUN2VnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN3QjtBQUNFO0FBQ0k7QUFDQTtBQUNFO0FBQ0g7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBQ0Q7QUFDRTtBQUNLO0FBQ0Q7QUFDUztBQUNaO0FBQ0s7QUFDTDtBQUN6QixjQUFjLG1CQUFPLENBQUMsNkJBQWlCOzs7Ozs7Ozs7Ozs7O0FD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxxQkFBcUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLG1FQUFlO0FBQ2M7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlDQUF5Qyx3Q0FBd0M7QUFDM0c7QUFDQTtBQUNBLENBQUM7QUFDaUM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlDQUF5QyxtRkFBbUY7QUFDdEo7QUFDQTtBQUNBLENBQUM7QUFDOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLHdDQUF3QztBQUN4Qyx1Q0FBdUM7QUFDdkMsdUNBQXVDO0FBQ3ZDLHlDQUF5QyxhQUFhO0FBQ3RELENBQUM7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QTtBQUNBO0FBQ0EsZUFBZSxpREFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHdEQUFNO0FBQ3ZDO0FBQ0E7QUFDQSxDQUFDO0FBQzhCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDZ0M7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLHlEQUFhO0FBQ1k7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHFCQUFxQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHFCQUFxQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsNkRBQWlCO0FBQ1c7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyw4REFBa0I7QUFDWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ3lCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNnQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsdURBQVc7QUFDWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDNkIiLCJmaWxlIjoidmVuZG9yc35AanVweXRlci13aWRnZXRzL2NvbnRyb2xzLmFiNzE1M2I3OGUwODUyNjUyNWY0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXHJcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgeyBDb3JlRGVzY3JpcHRpb25Nb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2NvcmUnO1xyXG5pbXBvcnQgeyBEZXNjcmlwdGlvblZpZXcgfSBmcm9tICcuL3dpZGdldF9kZXNjcmlwdGlvbic7XHJcbmltcG9ydCB7IERPTVdpZGdldFZpZXcgfSBmcm9tICdAanVweXRlci13aWRnZXRzL2Jhc2UnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG52YXIgQm9vbE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJvb2xNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEJvb2xNb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBCb29sTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnQm9vbE1vZGVsJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCb29sTW9kZWw7XHJcbn0oQ29yZURlc2NyaXB0aW9uTW9kZWwpKTtcclxuZXhwb3J0IHsgQm9vbE1vZGVsIH07XHJcbnZhciBDaGVja2JveE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKENoZWNrYm94TW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDaGVja2JveE1vZGVsKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIENoZWNrYm94TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcclxuICAgICAgICAgICAgaW5kZW50OiB0cnVlLFxyXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnQ2hlY2tib3hWaWV3JyxcclxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdDaGVja2JveE1vZGVsJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDaGVja2JveE1vZGVsO1xyXG59KENvcmVEZXNjcmlwdGlvbk1vZGVsKSk7XHJcbmV4cG9ydCB7IENoZWNrYm94TW9kZWwgfTtcclxudmFyIENoZWNrYm94VmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDaGVja2JveFZpZXcsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDaGVja2JveFZpZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB2aWV3IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBDaGVja2JveFZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaW5saW5lLWhib3gnKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1jaGVja2JveCcpO1xyXG4gICAgICAgIC8vIGFkZGluZyBhIHplcm8td2lkdGggc3BhY2UgdG8gdGhlIGxhYmVsIHRvIGhlbHBcclxuICAgICAgICAvLyB0aGUgYnJvd3NlciBzZXQgdGhlIGJhc2VsaW5lIGNvcnJlY3RseVxyXG4gICAgICAgIHRoaXMubGFiZWwuaW5uZXJIVE1MID0gJyYjODIwMzsnO1xyXG4gICAgICAgIC8vIGxhYmVsIGNvbnRhaW5pbmcgdGhlIGNoZWNrYm94IGFuZCBkZXNjcmlwdGlvbiBzcGFuXHJcbiAgICAgICAgdGhpcy5jaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICB0aGlzLmNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWxhYmVsLWJhc2ljJyk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNoZWNrYm94TGFiZWwpO1xyXG4gICAgICAgIC8vIGNoZWNrYm94XHJcbiAgICAgICAgdGhpcy5jaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgICAgICB0aGlzLmNoZWNrYm94TGFiZWwuYXBwZW5kQ2hpbGQodGhpcy5jaGVja2JveCk7XHJcbiAgICAgICAgLy8gc3BhbiB0byB0aGUgcmlnaHQgb2YgdGhlIGNoZWNrYm94IHRoYXQgd2lsbCByZW5kZXIgdGhlIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveExhYmVsLmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb25TcGFuKTtcclxuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6aW5kZW50JywgdGhpcy51cGRhdGVJbmRlbnQpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7IC8vIFNldCBkZWZhdWx0cy5cclxuICAgICAgICB0aGlzLnVwZGF0ZURlc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJbmRlbnQoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIE92ZXJyaWRlbiBmcm9tIHN1cGVyIGNsYXNzXHJcbiAgICAgKlxyXG4gICAgICogVXBkYXRlIHRoZSBkZXNjcmlwdGlvbiBzcGFuIChyYXRoZXIgdGhhbiB0aGUgbGFiZWwpIHNpbmNlXHJcbiAgICAgKiB3ZSB3YW50IHRoZSBkZXNjcmlwdGlvbiB0byB0aGUgcmlnaHQgb2YgdGhlIGNoZWNrYm94LlxyXG4gICAgICovXHJcbiAgICBDaGVja2JveFZpZXcucHJvdG90eXBlLnVwZGF0ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGNhbiBiZSBjYWxsZWQgYmVmb3JlIHRoZSB2aWV3IGlzIGZ1bGx5IGluaXRpYWxpemVkXHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tib3hMYWJlbCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5tb2RlbC5nZXQoJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblNwYW4uaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy50eXBlc2V0KHRoaXMuZGVzY3JpcHRpb25TcGFuKTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uU3Bhbi50aXRsZSA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3gudGl0bGUgPSBkZXNjcmlwdGlvbjtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgbGFiZWwgaW4gdGhlIHN1cGVyIGNsYXNzXHJcbiAgICAgKiB0byBwcm92aWRlIHRoZSBvcHRpb25hbCBpbmRlbnQuXHJcbiAgICAgKi9cclxuICAgIENoZWNrYm94Vmlldy5wcm90b3R5cGUudXBkYXRlSW5kZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbmRlbnQgPSB0aGlzLm1vZGVsLmdldCgnaW5kZW50Jyk7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHlsZS5kaXNwbGF5ID0gaW5kZW50ID8gJycgOiAnbm9uZSc7XHJcbiAgICB9O1xyXG4gICAgQ2hlY2tib3hWaWV3LnByb3RvdHlwZS5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgJ2NsaWNrIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSc6ICdfaGFuZGxlX2NsaWNrJ1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHdoZW4gdGhlIGNoZWNrYm94IGlzIGNsaWNrZWQuXHJcbiAgICAgKlxyXG4gICAgICogQ2FsbGluZyBtb2RlbC5zZXQgd2lsbCB0cmlnZ2VyIGFsbCBvZiB0aGUgb3RoZXIgdmlld3Mgb2YgdGhlXHJcbiAgICAgKiBtb2RlbCB0byB1cGRhdGUuXHJcbiAgICAgKi9cclxuICAgIENoZWNrYm94Vmlldy5wcm90b3R5cGUuX2hhbmRsZV9jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnNldCgndmFsdWUnLCAhdmFsdWUsIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xyXG4gICAgICAgIHRoaXMudG91Y2goKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XHJcbiAgICAgKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIG1vZGVsIGlzIGNoYW5nZWQuIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXHJcbiAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cclxuICAgICAqL1xyXG4gICAgQ2hlY2tib3hWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3guY2hlY2tlZCA9IHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy51cGRhdGVkX3ZpZXcgIT0gdGhpcykge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94LmRpc2FibGVkID0gdGhpcy5tb2RlbC5nZXQoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDaGVja2JveFZpZXc7XHJcbn0oRGVzY3JpcHRpb25WaWV3KSk7XHJcbmV4cG9ydCB7IENoZWNrYm94VmlldyB9O1xyXG52YXIgVG9nZ2xlQnV0dG9uTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVG9nZ2xlQnV0dG9uTW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUb2dnbGVCdXR0b25Nb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBUb2dnbGVCdXR0b25Nb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnVG9nZ2xlQnV0dG9uVmlldycsXHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnVG9nZ2xlQnV0dG9uTW9kZWwnLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAnJyxcclxuICAgICAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgICAgIGJ1dHRvbl9zdHlsZTogJydcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVG9nZ2xlQnV0dG9uTW9kZWw7XHJcbn0oQm9vbE1vZGVsKSk7XHJcbmV4cG9ydCB7IFRvZ2dsZUJ1dHRvbk1vZGVsIH07XHJcbnZhciBUb2dnbGVCdXR0b25WaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRvZ2dsZUJ1dHRvblZpZXcsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUb2dnbGVCdXR0b25WaWV3KCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgVG9nZ2xlQnV0dG9uVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtdG9nZ2xlLWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpidXR0b25fc3R5bGUnLCB0aGlzLnVwZGF0ZV9idXR0b25fc3R5bGUpO1xyXG4gICAgICAgIHRoaXMuc2V0X2J1dHRvbl9zdHlsZSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7IC8vIFNldCBkZWZhdWx0cy5cclxuICAgIH07XHJcbiAgICBUb2dnbGVCdXR0b25WaWV3LnByb3RvdHlwZS51cGRhdGVfYnV0dG9uX3N0eWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlX21hcHBlZF9jbGFzc2VzKFRvZ2dsZUJ1dHRvblZpZXcuY2xhc3NfbWFwLCAnYnV0dG9uX3N0eWxlJyk7XHJcbiAgICB9O1xyXG4gICAgVG9nZ2xlQnV0dG9uVmlldy5wcm90b3R5cGUuc2V0X2J1dHRvbl9zdHlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNldF9tYXBwZWRfY2xhc3NlcyhUb2dnbGVCdXR0b25WaWV3LmNsYXNzX21hcCwgJ2J1dHRvbl9zdHlsZScpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcclxuICAgICAqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cclxuICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxyXG4gICAgICovXHJcbiAgICBUb2dnbGVCdXR0b25WaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgndmFsdWUnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ21vZC1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMudXBkYXRlZF92aWV3ICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuZGlzYWJsZWQgPSB0aGlzLm1vZGVsLmdldCgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdGhpcy5tb2RlbC5nZXQoJ3Rvb2x0aXAnKSk7XHJcbiAgICAgICAgICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMubW9kZWwuZ2V0KCdkZXNjcmlwdGlvbicpO1xyXG4gICAgICAgICAgICB2YXIgaWNvbiA9IHRoaXMubW9kZWwuZ2V0KCdpY29uJyk7XHJcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdGlvbi50cmltKCkubGVuZ3RoID09PSAwICYmIGljb24udHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJm5ic3A7JzsgLy8gUHJlc2VydmUgYnV0dG9uIGhlaWdodFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGljb24udHJpbSgpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaS5jbGFzc0xpc3QuYWRkKCdmYScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGkuY2xhc3NMaXN0LmFkZCgnZmEtJyArIGljb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkZXNjcmlwdGlvbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIFRvZ2dsZUJ1dHRvblZpZXcucHJvdG90eXBlLmV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyBEaWN0aW9uYXJ5IG9mIGV2ZW50cyBhbmQgdGhlaXIgaGFuZGxlcnMuXHJcbiAgICAgICAgICAgICdjbGljayc6ICdfaGFuZGxlX2NsaWNrJ1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIGFuZCB2YWxpZGF0ZXMgdXNlciBpbnB1dC5cclxuICAgICAqXHJcbiAgICAgKiBDYWxsaW5nIG1vZGVsLnNldCB3aWxsIHRyaWdnZXIgYWxsIG9mIHRoZSBvdGhlciB2aWV3cyBvZiB0aGVcclxuICAgICAqIG1vZGVsIHRvIHVwZGF0ZS5cclxuICAgICAqL1xyXG4gICAgVG9nZ2xlQnV0dG9uVmlldy5wcm90b3R5cGUuX2hhbmRsZV9jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgIXZhbHVlLCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcclxuICAgICAgICB0aGlzLnRvdWNoKCk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRvZ2dsZUJ1dHRvblZpZXcucHJvdG90eXBlLCBcInRhZ05hbWVcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IHRhZyBuYW1lLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogIyMjIyBOb3Rlc1xyXG4gICAgICAgICAqIFRoaXMgaXMgYSByZWFkLW9ubHkgYXR0cmlidXRlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBXZSBjYW4ndCBtYWtlIHRoaXMgYW4gYXR0cmlidXRlIHdpdGggYSBkZWZhdWx0IHZhbHVlXHJcbiAgICAgICAgICAgIC8vIHNpbmNlIGl0IHdvdWxkIGJlIHNldCBhZnRlciBpdCBpcyBuZWVkZWQgaW4gdGhlXHJcbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdG9yLlxyXG4gICAgICAgICAgICByZXR1cm4gJ2J1dHRvbic7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBUb2dnbGVCdXR0b25WaWV3LmNsYXNzX21hcCA9IHtcclxuICAgICAgICBwcmltYXJ5OiBbJ21vZC1wcmltYXJ5J10sXHJcbiAgICAgICAgc3VjY2VzczogWydtb2Qtc3VjY2VzcyddLFxyXG4gICAgICAgIGluZm86IFsnbW9kLWluZm8nXSxcclxuICAgICAgICB3YXJuaW5nOiBbJ21vZC13YXJuaW5nJ10sXHJcbiAgICAgICAgZGFuZ2VyOiBbJ21vZC1kYW5nZXInXVxyXG4gICAgfTtcclxuICAgIHJldHVybiBUb2dnbGVCdXR0b25WaWV3O1xyXG59KERPTVdpZGdldFZpZXcpKTtcclxuZXhwb3J0IHsgVG9nZ2xlQnV0dG9uVmlldyB9O1xyXG52YXIgVmFsaWRNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhWYWxpZE1vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVmFsaWRNb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBWYWxpZE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XHJcbiAgICAgICAgICAgIHJlYWRvdXQ6ICdJbnZhbGlkJyxcclxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ1ZhbGlkVmlldycsXHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnVmFsaWRNb2RlbCdcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVmFsaWRNb2RlbDtcclxufShCb29sTW9kZWwpKTtcclxuZXhwb3J0IHsgVmFsaWRNb2RlbCB9O1xyXG52YXIgVmFsaWRWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFZhbGlkVmlldywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFZhbGlkVmlldygpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIFZhbGlkVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC12YWxpZCcpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XHJcbiAgICAgICAgdmFyIGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgICAgICB0aGlzLnJlYWRvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdGhpcy5yZWFkb3V0LmNsYXNzTGlzdC5hZGQoJ3dpZGdldC12YWxpZC1yZWFkb3V0Jyk7XHJcbiAgICAgICAgdGhpcy5yZWFkb3V0LmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1yZWFkb3V0Jyk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnJlYWRvdXQpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIHRoaXMgdmlld1xyXG4gICAgICpcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiAgVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cclxuICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxyXG4gICAgICovXHJcbiAgICBWYWxpZFZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZC12YWxpZCcpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kLWludmFsaWQnKTtcclxuICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB0aGlzLm1vZGVsLmdldCgncmVhZG91dCcpO1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgndmFsdWUnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ21vZC12YWxpZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdtb2QtaW52YWxpZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gVmFsaWRWaWV3O1xyXG59KERlc2NyaXB0aW9uVmlldykpO1xyXG5leHBvcnQgeyBWYWxpZFZpZXcgfTtcclxuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXHJcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IENvcmVET01XaWRnZXRNb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2NvcmUnO1xyXG5pbXBvcnQgeyBET01XaWRnZXRWaWV3IH0gZnJvbSAnQGp1cHl0ZXItd2lkZ2V0cy9iYXNlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxudmFyIEZpbGVVcGxvYWRNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhGaWxlVXBsb2FkTW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGaWxlVXBsb2FkTW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgRmlsZVVwbG9hZE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnRmlsZVVwbG9hZE1vZGVsJyxcclxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0ZpbGVVcGxvYWRWaWV3JyxcclxuICAgICAgICAgICAgX2NvdW50ZXI6IDAsXHJcbiAgICAgICAgICAgIGFjY2VwdDogJycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVXBsb2FkJyxcclxuICAgICAgICAgICAgdG9vbHRpcDogJycsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaWNvbjogJ3VwbG9hZCcsXHJcbiAgICAgICAgICAgIGJ1dHRvbl9zdHlsZTogJycsXHJcbiAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZSxcclxuICAgICAgICAgICAgbWV0YWRhdGE6IFtdLFxyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgZXJyb3I6ICcnLFxyXG4gICAgICAgICAgICBzdHlsZTogbnVsbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEZpbGVVcGxvYWRNb2RlbC5zZXJpYWxpemVycyA9IF9fYXNzaWduKHt9LCBDb3JlRE9NV2lkZ2V0TW9kZWwuc2VyaWFsaXplcnMsIHsgZGF0YTogeyBzZXJpYWxpemU6IGZ1bmN0aW9uIChidWZmZXJzKSB7IHJldHVybiBidWZmZXJzLnNsaWNlKCk7IH0gfSB9KTtcclxuICAgIHJldHVybiBGaWxlVXBsb2FkTW9kZWw7XHJcbn0oQ29yZURPTVdpZGdldE1vZGVsKSk7XHJcbmV4cG9ydCB7IEZpbGVVcGxvYWRNb2RlbCB9O1xyXG52YXIgRmlsZVVwbG9hZFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRmlsZVVwbG9hZFZpZXcsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGaWxlVXBsb2FkVmlldygpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmlsZVVwbG9hZFZpZXcucHJvdG90eXBlLCBcInRhZ05hbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2J1dHRvbic7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBGaWxlVXBsb2FkVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXVwbG9hZCcpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci1idXR0b24nKTtcclxuICAgICAgICB0aGlzLmZpbGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5maWxlSW5wdXQudHlwZSA9ICdmaWxlJztcclxuICAgICAgICB0aGlzLmZpbGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5maWxlSW5wdXQpO1xyXG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmZpbGVJbnB1dC5jbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5maWxlSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBwcm9taXNlc0ZpbGUgPSBbXTtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShfdGhpcy5maWxlSW5wdXQuZmlsZXMpLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzRmlsZS5wdXNoKG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWV0YWRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZmlsZS50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBmaWxlLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZDogZmlsZS5sYXN0TW9kaWZpZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5maWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5maWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IGJ1ZmZlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiBtZXRhZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5maWxlUmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZmlsZVJlYWRlci5vbmFib3J0ID0gX3RoaXMuZmlsZVJlYWRlci5vbmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlc0ZpbGUpXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoY29udGVudHMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXRhZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpX2J1ZmZlciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgY29udGVudHMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhLnB1c2goYy5tZXRhZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlfYnVmZmVyLnB1c2goYy5idWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY291bnRlciA9IF90aGlzLm1vZGVsLmdldCgnX2NvdW50ZXInKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLm1vZGVsLnNldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgX2NvdW50ZXI6IGNvdW50ZXIgKyBjb250ZW50cy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IG1ldGFkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGxpX2J1ZmZlcixcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogJycsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnRvdWNoKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZXJyb3IgaW4gZmlsZSB1cGxvYWQ6ICVvJywgZXJyKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLm1vZGVsLnNldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudG91Y2goKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmJ1dHRvbl9zdHlsZScsIHRoaXMudXBkYXRlX2J1dHRvbl9zdHlsZSk7XHJcbiAgICAgICAgdGhpcy5zZXRfYnV0dG9uX3N0eWxlKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTsgLy8gU2V0IGRlZmF1bHRzLlxyXG4gICAgfTtcclxuICAgIEZpbGVVcGxvYWRWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5lbC5kaXNhYmxlZCA9IHRoaXMubW9kZWwuZ2V0KCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMubW9kZWwuZ2V0KCd0b29sdGlwJykpO1xyXG4gICAgICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMubW9kZWwuZ2V0KCdkZXNjcmlwdGlvbicpICsgXCIgKFwiICsgdGhpcy5tb2RlbC5nZXQoJ19jb3VudGVyJykgKyBcIilcIjtcclxuICAgICAgICB2YXIgaWNvbiA9IHRoaXMubW9kZWwuZ2V0KCdpY29uJyk7XHJcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uLmxlbmd0aCB8fCBpY29uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChpY29uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgICAgICAgICBpLmNsYXNzTGlzdC5hZGQoJ2ZhJyk7XHJcbiAgICAgICAgICAgICAgICBpLmNsYXNzTGlzdC5hZGQoJ2ZhLScgKyBpY29uKTtcclxuICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdGlvbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpLmNsYXNzTGlzdC5hZGQoJ2NlbnRlcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRlc2NyaXB0aW9uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlsZUlucHV0LmFjY2VwdCA9IHRoaXMubW9kZWwuZ2V0KCdhY2NlcHQnKTtcclxuICAgICAgICB0aGlzLmZpbGVJbnB1dC5tdWx0aXBsZSA9IHRoaXMubW9kZWwuZ2V0KCdtdWx0aXBsZScpO1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIEZpbGVVcGxvYWRWaWV3LnByb3RvdHlwZS51cGRhdGVfYnV0dG9uX3N0eWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlX21hcHBlZF9jbGFzc2VzKEZpbGVVcGxvYWRWaWV3LmNsYXNzX21hcCwgJ2J1dHRvbl9zdHlsZScsIHRoaXMuZWwpO1xyXG4gICAgfTtcclxuICAgIEZpbGVVcGxvYWRWaWV3LnByb3RvdHlwZS5zZXRfYnV0dG9uX3N0eWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2V0X21hcHBlZF9jbGFzc2VzKEZpbGVVcGxvYWRWaWV3LmNsYXNzX21hcCwgJ2J1dHRvbl9zdHlsZScsIHRoaXMuZWwpO1xyXG4gICAgfTtcclxuICAgIEZpbGVVcGxvYWRWaWV3LmNsYXNzX21hcCA9IHtcclxuICAgICAgICBwcmltYXJ5OiBbJ21vZC1wcmltYXJ5J10sXHJcbiAgICAgICAgc3VjY2VzczogWydtb2Qtc3VjY2VzcyddLFxyXG4gICAgICAgIGluZm86IFsnbW9kLWluZm8nXSxcclxuICAgICAgICB3YXJuaW5nOiBbJ21vZC13YXJuaW5nJ10sXHJcbiAgICAgICAgZGFuZ2VyOiBbJ21vZC1kYW5nZXInXVxyXG4gICAgfTtcclxuICAgIHJldHVybiBGaWxlVXBsb2FkVmlldztcclxufShET01XaWRnZXRWaWV3KSk7XHJcbmV4cG9ydCB7IEZpbGVVcGxvYWRWaWV3IH07XHJcbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxyXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuLy8gd2lkZ2V0X2NvcmUgaW1wbGVtZW50cyBzb21lIGNvbW1vbiBwYXR0ZXJucyBmb3IgdGhlIGNvcmUgd2lkZ2V0IGNvbGxlY3Rpb25cclxuLy8gdGhhdCBhcmUgbm90IHRvIGJlIHVzZWQgZGlyZWN0bHkgYnkgdGhpcmQtcGFydHkgd2lkZ2V0IGF1dGhvcnMuXHJcbmltcG9ydCB7IERPTVdpZGdldE1vZGVsLCBXaWRnZXRNb2RlbCB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XHJcbmltcG9ydCB7IERlc2NyaXB0aW9uTW9kZWwgfSBmcm9tICcuL3dpZGdldF9kZXNjcmlwdGlvbic7XHJcbmltcG9ydCB7IEpVUFlURVJfQ09OVFJPTFNfVkVSU0lPTiB9IGZyb20gJy4vdmVyc2lvbic7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcbnZhciBDb3JlV2lkZ2V0TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ29yZVdpZGdldE1vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQ29yZVdpZGdldE1vZGVsKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIENvcmVXaWRnZXRNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0NvcmVXaWRnZXRNb2RlbCcsXHJcbiAgICAgICAgICAgIF92aWV3X21vZHVsZTogJ0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMnLFxyXG4gICAgICAgICAgICBfbW9kZWxfbW9kdWxlOiAnQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scycsXHJcbiAgICAgICAgICAgIF92aWV3X21vZHVsZV92ZXJzaW9uOiBKVVBZVEVSX0NPTlRST0xTX1ZFUlNJT04sXHJcbiAgICAgICAgICAgIF9tb2RlbF9tb2R1bGVfdmVyc2lvbjogSlVQWVRFUl9DT05UUk9MU19WRVJTSU9OLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb3JlV2lkZ2V0TW9kZWw7XHJcbn0oV2lkZ2V0TW9kZWwpKTtcclxuZXhwb3J0IHsgQ29yZVdpZGdldE1vZGVsIH07XHJcbnZhciBDb3JlRE9NV2lkZ2V0TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ29yZURPTVdpZGdldE1vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQ29yZURPTVdpZGdldE1vZGVsKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIENvcmVET01XaWRnZXRNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0NvcmVET01XaWRnZXRNb2RlbCcsXHJcbiAgICAgICAgICAgIF92aWV3X21vZHVsZTogJ0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMnLFxyXG4gICAgICAgICAgICBfbW9kZWxfbW9kdWxlOiAnQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scycsXHJcbiAgICAgICAgICAgIF92aWV3X21vZHVsZV92ZXJzaW9uOiBKVVBZVEVSX0NPTlRST0xTX1ZFUlNJT04sXHJcbiAgICAgICAgICAgIF9tb2RlbF9tb2R1bGVfdmVyc2lvbjogSlVQWVRFUl9DT05UUk9MU19WRVJTSU9OLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb3JlRE9NV2lkZ2V0TW9kZWw7XHJcbn0oRE9NV2lkZ2V0TW9kZWwpKTtcclxuZXhwb3J0IHsgQ29yZURPTVdpZGdldE1vZGVsIH07XHJcbnZhciBDb3JlRGVzY3JpcHRpb25Nb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDb3JlRGVzY3JpcHRpb25Nb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENvcmVEZXNjcmlwdGlvbk1vZGVsKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIENvcmVEZXNjcmlwdGlvbk1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnQ29yZURlc2NyaXB0aW9uTW9kZWwnLFxyXG4gICAgICAgICAgICBfdmlld19tb2R1bGU6ICdAanVweXRlci13aWRnZXRzL2NvbnRyb2xzJyxcclxuICAgICAgICAgICAgX21vZGVsX21vZHVsZTogJ0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMnLFxyXG4gICAgICAgICAgICBfdmlld19tb2R1bGVfdmVyc2lvbjogSlVQWVRFUl9DT05UUk9MU19WRVJTSU9OLFxyXG4gICAgICAgICAgICBfbW9kZWxfbW9kdWxlX3ZlcnNpb246IEpVUFlURVJfQ09OVFJPTFNfVkVSU0lPTixcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29yZURlc2NyaXB0aW9uTW9kZWw7XHJcbn0oRGVzY3JpcHRpb25Nb2RlbCkpO1xyXG5leHBvcnQgeyBDb3JlRGVzY3JpcHRpb25Nb2RlbCB9O1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cclxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsgQ29yZURPTVdpZGdldE1vZGVsIH0gZnJvbSAnLi93aWRnZXRfY29yZSc7XHJcbmltcG9ydCB7IERPTVdpZGdldFZpZXcsIHVucGFja19tb2RlbHMsIFZpZXdMaXN0LCBKdXB5dGVyUGhvc3Bob3JQYW5lbFdpZGdldCB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XHJcbmltcG9ydCB7IFdpZGdldCwgUGFuZWwgfSBmcm9tICdAcGhvc3Bob3Ivd2lkZ2V0cyc7XHJcbmltcG9ydCB7IEFycmF5RXh0IH0gZnJvbSAnQHBob3NwaG9yL2FsZ29yaXRobSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xyXG52YXIgQ29udHJvbGxlckJ1dHRvbk1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKENvbnRyb2xsZXJCdXR0b25Nb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENvbnRyb2xsZXJCdXR0b25Nb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBDb250cm9sbGVyQnV0dG9uTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcclxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdDb250cm9sbGVyQnV0dG9uTW9kZWwnLFxyXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnQ29udHJvbGxlckJ1dHRvblZpZXcnLFxyXG4gICAgICAgICAgICB2YWx1ZTogMC4wLFxyXG4gICAgICAgICAgICBwcmVzc2VkOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb250cm9sbGVyQnV0dG9uTW9kZWw7XHJcbn0oQ29yZURPTVdpZGdldE1vZGVsKSk7XHJcbmV4cG9ydCB7IENvbnRyb2xsZXJCdXR0b25Nb2RlbCB9O1xyXG4vKipcclxuICogVmVyeSBzaW1wbGUgdmlldyBmb3IgYSBnYW1lcGFkIGJ1dHRvbi5cclxuICovXHJcbnZhciBDb250cm9sbGVyQnV0dG9uVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDb250cm9sbGVyQnV0dG9uVmlldywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENvbnRyb2xsZXJCdXR0b25WaWV3KCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIENvbnRyb2xsZXJCdXR0b25WaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1jb250cm9sbGVyLWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuZWwuc3R5bGUud2lkdGggPSAnZml0LWNvbnRlbnQnO1xyXG4gICAgICAgIHRoaXMuc3VwcG9ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuc3VwcG9ydC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgdGhpcy5zdXBwb3J0LnN0eWxlLm1hcmdpbiA9ICcxcHgnO1xyXG4gICAgICAgIHRoaXMuc3VwcG9ydC5zdHlsZS53aWR0aCA9ICcxNnB4JztcclxuICAgICAgICB0aGlzLnN1cHBvcnQuc3R5bGUuaGVpZ2h0ID0gJzE2cHgnO1xyXG4gICAgICAgIHRoaXMuc3VwcG9ydC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGJsYWNrJztcclxuICAgICAgICB0aGlzLnN1cHBvcnQuc3R5bGUuYmFja2dyb3VuZCA9ICdsaWdodGdyYXknO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5zdXBwb3J0KTtcclxuICAgICAgICB0aGlzLmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuYmFyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICB0aGlzLmJhci5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICB0aGlzLmJhci5zdHlsZS5ib3R0b20gPSAnMHB4JztcclxuICAgICAgICB0aGlzLmJhci5zdHlsZS5iYWNrZ3JvdW5kID0gJ2dyYXknO1xyXG4gICAgICAgIHRoaXMuc3VwcG9ydC5hcHBlbmRDaGlsZCh0aGlzLmJhcik7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5sYWJlbC50ZXh0Q29udGVudCA9IHRoaXMubW9kZWwuZ2V0KCdkZXNjcmlwdGlvbicpO1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsKTtcclxuICAgIH07XHJcbiAgICBDb250cm9sbGVyQnV0dG9uVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYmFyLnN0eWxlLmhlaWdodCA9ICgxMDAgKiB0aGlzLm1vZGVsLmdldCgndmFsdWUnKSkgKyAnJSc7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbnRyb2xsZXJCdXR0b25WaWV3O1xyXG59KERPTVdpZGdldFZpZXcpKTtcclxuZXhwb3J0IHsgQ29udHJvbGxlckJ1dHRvblZpZXcgfTtcclxudmFyIENvbnRyb2xsZXJBeGlzTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ29udHJvbGxlckF4aXNNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENvbnRyb2xsZXJBeGlzTW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgQ29udHJvbGxlckF4aXNNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0NvbnRyb2xsZXJBeGlzTW9kZWwnLFxyXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnQ29udHJvbGxlckF4aXNWaWV3JyxcclxuICAgICAgICAgICAgdmFsdWU6IDAuMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb250cm9sbGVyQXhpc01vZGVsO1xyXG59KENvcmVET01XaWRnZXRNb2RlbCkpO1xyXG5leHBvcnQgeyBDb250cm9sbGVyQXhpc01vZGVsIH07XHJcbi8qKlxyXG4gKiBWZXJ5IHNpbXBsZSB2aWV3IGZvciBhIGdhbWVwYWQgYXhpcy5cclxuICovXHJcbnZhciBDb250cm9sbGVyQXhpc1ZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ29udHJvbGxlckF4aXNWaWV3LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQ29udHJvbGxlckF4aXNWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIENvbnRyb2xsZXJBeGlzVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtY29udHJvbGxlci1heGlzJyk7XHJcbiAgICAgICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9ICcxNnB4JztcclxuICAgICAgICB0aGlzLmVsLnN0eWxlLnBhZGRpbmcgPSAnNHB4JztcclxuICAgICAgICB0aGlzLnN1cHBvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnN1cHBvcnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgICAgIHRoaXMuc3VwcG9ydC5zdHlsZS5tYXJnaW4gPSAnMXB4JztcclxuICAgICAgICB0aGlzLnN1cHBvcnQuc3R5bGUud2lkdGggPSAnNHB4JztcclxuICAgICAgICB0aGlzLnN1cHBvcnQuc3R5bGUuaGVpZ2h0ID0gJzY0cHgnO1xyXG4gICAgICAgIHRoaXMuc3VwcG9ydC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGJsYWNrJztcclxuICAgICAgICB0aGlzLnN1cHBvcnQuc3R5bGUuYmFja2dyb3VuZCA9ICdsaWdodGdyYXknO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5idWxsZXQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0LnN0eWxlLm1hcmdpbiA9ICctM3B4JztcclxuICAgICAgICB0aGlzLmJ1bGxldC5zdHlsZS5ib3hTaXppbmcgPSAndW5zZXQnO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0LnN0eWxlLndpZHRoID0gJzEwcHgnO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0LnN0eWxlLmhlaWdodCA9ICcxMHB4JztcclxuICAgICAgICB0aGlzLmJ1bGxldC5zdHlsZS5iYWNrZ3JvdW5kID0gJ2dyYXknO1xyXG4gICAgICAgIHRoaXMubGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmxhYmVsLnRleHRDb250ZW50ID0gdGhpcy5tb2RlbC5nZXQoJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgICB0aGlzLnN1cHBvcnQuYXBwZW5kQ2hpbGQodGhpcy5idWxsZXQpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5zdXBwb3J0KTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMubGFiZWwpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9O1xyXG4gICAgQ29udHJvbGxlckF4aXNWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5idWxsZXQuc3R5bGUudG9wID0gKDUwICogKHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpICsgMSkpICsgJyUnO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb250cm9sbGVyQXhpc1ZpZXc7XHJcbn0oRE9NV2lkZ2V0VmlldykpO1xyXG5leHBvcnQgeyBDb250cm9sbGVyQXhpc1ZpZXcgfTtcclxudmFyIENvbnRyb2xsZXJNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDb250cm9sbGVyTW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDb250cm9sbGVyTW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgQ29udHJvbGxlck1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnQ29udHJvbGxlck1vZGVsJyxcclxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0NvbnRyb2xsZXJWaWV3JyxcclxuICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBtYXBwaW5nOiAnJyxcclxuICAgICAgICAgICAgY29ubmVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgdGltZXN0YW1wOiAwLFxyXG4gICAgICAgICAgICBidXR0b25zOiBbXSxcclxuICAgICAgICAgICAgYXhlczogW11cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBDb250cm9sbGVyTW9kZWwucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoYXR0cmlidXRlcywgb3B0aW9ucykge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIGF0dHJpYnV0ZXMsIG9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICAvLyBDaGVja3MgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdGhlIGdhbWVwYWQgQVBJXHJcbiAgICAgICAgICAgIHRoaXMucmVhZG91dCA9ICdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBnYW1lcGFkcy4nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMucmVhZG91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBTdGFydCB0aGUgd2FpdCBsb29wLCBhbmQgbGlzdGVuIHRvIHVwZGF0ZXMgb2YgdGhlIG9ubHlcclxuICAgICAgICAgICAgLy8gdXNlci1wcm92aWRlZCBhdHRyaWJ1dGUsIHRoZSBnYW1lcGFkIGluZGV4LlxyXG4gICAgICAgICAgICB0aGlzLnJlYWRvdXQgPSAnQ29ubmVjdCBnYW1lcGFkIGFuZCBwcmVzcyBhbnkgYnV0dG9uLic7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnY29ubmVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gcmUtY3JlYXRlIEJ1dHRvbiBhbmQgQXhpcyB3aWRnZXRzLCByZS11c2VcclxuICAgICAgICAgICAgICAgIC8vIHRoZSBtb2RlbHMgcHJvdmlkZWQgYnkgdGhlIGJhY2tlbmQgd2hpY2ggbWF5IGFscmVhZHlcclxuICAgICAgICAgICAgICAgIC8vIGJlIHdpcmVkIHRvIG90aGVyIHRoaW5ncy5cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlX2xvb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFdhaXQgZm9yIGEgZ2FtZXBhZCB0byBiZSBjb25uZWN0ZWQuXHJcbiAgICAgICAgICAgICAgICB0aGlzLndhaXRfbG9vcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogV2FpdHMgZm9yIGEgZ2FtZXBhZCB0byBiZSBjb25uZWN0ZWQgYXQgdGhlIHByb3ZpZGVkIGluZGV4LlxyXG4gICAgICogT25jZSBvbmUgaXMgY29ubmVjdGVkLCBpdCB3aWxsIHN0YXJ0IHRoZSB1cGRhdGUgbG9vcCwgd2hpY2hcclxuICAgICAqIHBvcHVsYXRlcyB0aGUgdXBkYXRlIG9mIGF4ZXMgYW5kIGJ1dHRvbiB2YWx1ZXMuXHJcbiAgICAgKi9cclxuICAgIENvbnRyb2xsZXJNb2RlbC5wcm90b3R5cGUud2FpdF9sb29wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0KCdpbmRleCcpO1xyXG4gICAgICAgIHZhciBwYWQgPSBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKVtpbmRleF07XHJcbiAgICAgICAgaWYgKHBhZCkge1xyXG4gICAgICAgICAgICB2YXIgdGhhdF8xID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5zZXR1cChwYWQpLnRoZW4oZnVuY3Rpb24gKGNvbnRyb2xzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0XzEuc2V0KGNvbnRyb2xzKTtcclxuICAgICAgICAgICAgICAgIHRoYXRfMS5zYXZlX2NoYW5nZXMoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhhdF8xLnVwZGF0ZV9sb29wLmJpbmQodGhhdF8xKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLndhaXRfbG9vcC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlbiBhIG5hdGl2ZSBnYW1lcGFkIG9iamVjdCwgcmV0dXJucyBhIHByb21pc2UgZm9yIGEgZGljdGlvbmFyeSBvZlxyXG4gICAgICogY29udHJvbHMsIG9mIHRoZSBmb3JtXHJcbiAgICAgKiB7XHJcbiAgICAgKiAgICAgYnV0dG9uczogbGlzdCBvZiBCdXR0b24gbW9kZWxzLFxyXG4gICAgICogICAgIGF4ZXM6IGxpc3Qgb2YgQXhpcyBtb2RlbHMsXHJcbiAgICAgKiB9XHJcbiAgICAgKi9cclxuICAgIENvbnRyb2xsZXJNb2RlbC5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbiAocGFkKSB7XHJcbiAgICAgICAgLy8gU2V0IHVwIHRoZSBtYWluIGdhbWVwYWQgYXR0cmlidXRlc1xyXG4gICAgICAgIHRoaXMuc2V0KHtcclxuICAgICAgICAgICAgbmFtZTogcGFkLmlkLFxyXG4gICAgICAgICAgICBtYXBwaW5nOiBwYWQubWFwcGluZyxcclxuICAgICAgICAgICAgY29ubmVjdGVkOiBwYWQuY29ubmVjdGVkLFxyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHBhZC50aW1lc3RhbXBcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBDcmVhdGUgYnV0dG9ucyBhbmQgYXhlcy4gV2hlbiBkb25lLCBzdGFydCB0aGUgdXBkYXRlIGxvb3BcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLnJlc29sdmVQcm9taXNlc0RpY3Qoe1xyXG4gICAgICAgICAgICBidXR0b25zOiBQcm9taXNlLmFsbChwYWQuYnV0dG9ucy5tYXAoZnVuY3Rpb24gKGJ0biwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0Ll9jcmVhdGVfYnV0dG9uX21vZGVsKGluZGV4KTtcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICBheGVzOiBQcm9taXNlLmFsbChwYWQuYXhlcy5tYXAoZnVuY3Rpb24gKGF4aXMsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC5fY3JlYXRlX2F4aXNfbW9kZWwoaW5kZXgpO1xyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgYXhlcyBhbmQgYnV0dG9ucyB2YWx1ZXMsIHVudGlsIHRoZSBnYW1lcGFkIGlzIGRpc2Nvbm5lY3RlZC5cclxuICAgICAqIFdoZW4gdGhlIGdhbWVwYWQgaXMgZGlzY29ubmVjdGVkLCB0aGlzLnJlc2V0X2dhbWVwYWQgaXMgY2FsbGVkLlxyXG4gICAgICovXHJcbiAgICBDb250cm9sbGVyTW9kZWwucHJvdG90eXBlLnVwZGF0ZV9sb29wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0KCdpbmRleCcpO1xyXG4gICAgICAgIHZhciBpZCA9IHRoaXMuZ2V0KCduYW1lJyk7XHJcbiAgICAgICAgdmFyIHBhZCA9IG5hdmlnYXRvci5nZXRHYW1lcGFkcygpW2luZGV4XTtcclxuICAgICAgICBpZiAocGFkICYmIGluZGV4ID09PSBwYWQuaW5kZXggJiYgaWQgPT09IHBhZC5pZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldCh7XHJcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHBhZC50aW1lc3RhbXAsXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0ZWQ6IHBhZC5jb25uZWN0ZWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZV9jaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0KCdidXR0b25zJykuZm9yRWFjaChmdW5jdGlvbiAobW9kZWwsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbC5zZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwYWQuYnV0dG9uc1tpbmRleF0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlc3NlZDogcGFkLmJ1dHRvbnNbaW5kZXhdLnByZXNzZWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbW9kZWwuc2F2ZV9jaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmdldCgnYXhlcycpLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgbW9kZWwuc2V0KCd2YWx1ZScsIHBhZC5heGVzW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICBtb2RlbC5zYXZlX2NoYW5nZXMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVfbG9vcC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRfZ2FtZXBhZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0cyB0aGUgZ2FtZXBhZCBhdHRyaWJ1dGVzLCBhbmQgc3RhcnQgdGhlIHdhaXRfbG9vcC5cclxuICAgICAqL1xyXG4gICAgQ29udHJvbGxlck1vZGVsLnByb3RvdHlwZS5yZXNldF9nYW1lcGFkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0KCdidXR0b25zJykuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZ2V0KCdheGVzJykuZm9yRWFjaChmdW5jdGlvbiAoYXhpcykge1xyXG4gICAgICAgICAgICBheGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXQoe1xyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgbWFwcGluZzogJycsXHJcbiAgICAgICAgICAgIGNvbm5lY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogMC4wLFxyXG4gICAgICAgICAgICBidXR0b25zOiBbXSxcclxuICAgICAgICAgICAgYXhlczogW11cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNhdmVfY2hhbmdlcygpO1xyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy53YWl0X2xvb3AuYmluZCh0aGlzKSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgZ2FtZXBhZCBidXR0b24gd2lkZ2V0LlxyXG4gICAgICovXHJcbiAgICBDb250cm9sbGVyTW9kZWwucHJvdG90eXBlLl9jcmVhdGVfYnV0dG9uX21vZGVsID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkZ2V0X21hbmFnZXIubmV3X3dpZGdldCh7XHJcbiAgICAgICAgICAgIG1vZGVsX25hbWU6ICdDb250cm9sbGVyQnV0dG9uTW9kZWwnLFxyXG4gICAgICAgICAgICBtb2RlbF9tb2R1bGU6ICdAanVweXRlci13aWRnZXRzL2NvbnRyb2xzJyxcclxuICAgICAgICAgICAgbW9kZWxfbW9kdWxlX3ZlcnNpb246IHRoaXMuZ2V0KCdfbW9kZWxfbW9kdWxlX3ZlcnNpb24nKSxcclxuICAgICAgICAgICAgdmlld19uYW1lOiAnQ29udHJvbGxlckJ1dHRvblZpZXcnLFxyXG4gICAgICAgICAgICB2aWV3X21vZHVsZTogJ0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMnLFxyXG4gICAgICAgICAgICB2aWV3X21vZHVsZV92ZXJzaW9uOiB0aGlzLmdldCgnX3ZpZXdfbW9kdWxlX3ZlcnNpb24nKSxcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICBtb2RlbC5zZXQoJ2Rlc2NyaXB0aW9uJywgaW5kZXgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kZWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgZ2FtZXBhZCBheGlzIHdpZGdldC5cclxuICAgICAqL1xyXG4gICAgQ29udHJvbGxlck1vZGVsLnByb3RvdHlwZS5fY3JlYXRlX2F4aXNfbW9kZWwgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53aWRnZXRfbWFuYWdlci5uZXdfd2lkZ2V0KHtcclxuICAgICAgICAgICAgbW9kZWxfbmFtZTogJ0NvbnRyb2xsZXJBeGlzTW9kZWwnLFxyXG4gICAgICAgICAgICBtb2RlbF9tb2R1bGU6ICdAanVweXRlci13aWRnZXRzL2NvbnRyb2xzJyxcclxuICAgICAgICAgICAgbW9kZWxfbW9kdWxlX3ZlcnNpb246IHRoaXMuZ2V0KCdfbW9kZWxfbW9kdWxlX3ZlcnNpb24nKSxcclxuICAgICAgICAgICAgdmlld19uYW1lOiAnQ29udHJvbGxlckF4aXNWaWV3JyxcclxuICAgICAgICAgICAgdmlld19tb2R1bGU6ICdAanVweXRlci13aWRnZXRzL2NvbnRyb2xzJyxcclxuICAgICAgICAgICAgdmlld19tb2R1bGVfdmVyc2lvbjogdGhpcy5nZXQoJ192aWV3X21vZHVsZV92ZXJzaW9uJyksXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICAgICAgbW9kZWwuc2V0KCdkZXNjcmlwdGlvbicsIGluZGV4KTtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGVsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIENvbnRyb2xsZXJNb2RlbC5zZXJpYWxpemVycyA9IF9fYXNzaWduKHt9LCBDb3JlRE9NV2lkZ2V0TW9kZWwuc2VyaWFsaXplcnMsIHsgYnV0dG9uczogeyBkZXNlcmlhbGl6ZTogdW5wYWNrX21vZGVscyB9LCBheGVzOiB7IGRlc2VyaWFsaXplOiB1bnBhY2tfbW9kZWxzIH0gfSk7XHJcbiAgICByZXR1cm4gQ29udHJvbGxlck1vZGVsO1xyXG59KENvcmVET01XaWRnZXRNb2RlbCkpO1xyXG5leHBvcnQgeyBDb250cm9sbGVyTW9kZWwgfTtcclxuLyoqXHJcbiAqIEEgc2ltcGxlIHZpZXcgZm9yIGEgZ2FtZXBhZC5cclxuICovXHJcbnZhciBDb250cm9sbGVyVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDb250cm9sbGVyVmlldywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENvbnRyb2xsZXJWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIENvbnRyb2xsZXJWaWV3LnByb3RvdHlwZS5fY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWdOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5wV2lkZ2V0ID0gbmV3IEp1cHl0ZXJQaG9zcGhvclBhbmVsV2lkZ2V0KHsgdmlldzogdGhpcyB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5wV2lkZ2V0Lm5vZGU7XHJcbiAgICB9O1xyXG4gICAgQ29udHJvbGxlclZpZXcucHJvdG90eXBlLl9zZXRFbGVtZW50ID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWwgfHwgZWwgIT09IHRoaXMucFdpZGdldC5ub2RlKSB7XHJcbiAgICAgICAgICAgIC8vIEJveGVzIGRvbid0IGFsbG93IHNldHRpbmcgdGhlIGVsZW1lbnQgYmV5b25kIHRoZSBpbml0aWFsIGNyZWF0aW9uLlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZXNldCB0aGUgRE9NIGVsZW1lbnQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZWwgPSB0aGlzLnBXaWRnZXQubm9kZTtcclxuICAgIH07XHJcbiAgICBDb250cm9sbGVyVmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcywgcGFyYW1ldGVycyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25fdmlld3MgPSBuZXcgVmlld0xpc3QodGhpcy5hZGRfYnV0dG9uLCBudWxsLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6YnV0dG9ucycsIGZ1bmN0aW9uIChtb2RlbCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25fdmlld3MudXBkYXRlKHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmF4aXNfdmlld3MgPSBuZXcgVmlld0xpc3QodGhpcy5hZGRfYXhpcywgbnVsbCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmF4ZXMnLCBmdW5jdGlvbiAobW9kZWwsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXhpc192aWV3cy51cGRhdGUodmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpuYW1lJywgdGhpcy51cGRhdGVfbGFiZWwpO1xyXG4gICAgfTtcclxuICAgIENvbnRyb2xsZXJWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1jb250cm9sbGVyJyk7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbCk7XHJcbiAgICAgICAgdGhpcy5heGlzX2JveCA9IG5ldyBQYW5lbCgpO1xyXG4gICAgICAgIHRoaXMuYXhpc19ib3gubm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIHRoaXMucFdpZGdldC5hZGRXaWRnZXQodGhpcy5heGlzX2JveCk7XHJcbiAgICAgICAgdGhpcy5idXR0b25fYm94ID0gbmV3IFBhbmVsKCk7XHJcbiAgICAgICAgdGhpcy5idXR0b25fYm94Lm5vZGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICB0aGlzLnBXaWRnZXQuYWRkV2lkZ2V0KHRoaXMuYnV0dG9uX2JveCk7XHJcbiAgICAgICAgdGhpcy5idXR0b25fdmlld3MudXBkYXRlKHRoaXMubW9kZWwuZ2V0KCdidXR0b25zJykpO1xyXG4gICAgICAgIHRoaXMuYXhpc192aWV3cy51cGRhdGUodGhpcy5tb2RlbC5nZXQoJ2F4ZXMnKSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfbGFiZWwoKTtcclxuICAgIH07XHJcbiAgICBDb250cm9sbGVyVmlldy5wcm90b3R5cGUudXBkYXRlX2xhYmVsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubGFiZWwudGV4dENvbnRlbnQgPSB0aGlzLm1vZGVsLmdldCgnbmFtZScpIHx8IHRoaXMubW9kZWwucmVhZG91dDtcclxuICAgIH07XHJcbiAgICBDb250cm9sbGVyVmlldy5wcm90b3R5cGUuYWRkX2J1dHRvbiA9IGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gd2UgaW5zZXJ0IGEgZHVtbXkgZWxlbWVudCBzbyB0aGUgb3JkZXIgaXMgcHJlc2VydmVkIHdoZW4gd2UgYWRkXHJcbiAgICAgICAgLy8gdGhlIHJlbmRlcmVkIGNvbnRlbnQgbGF0ZXIuXHJcbiAgICAgICAgdmFyIGR1bW15ID0gbmV3IFdpZGdldCgpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uX2JveC5hZGRXaWRnZXQoZHVtbXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZV9jaGlsZF92aWV3KG1vZGVsKS50aGVuKGZ1bmN0aW9uICh2aWV3KSB7XHJcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgdGhlIGR1bW15IHdpZGdldCB3aXRoIHRoZSBuZXcgb25lLlxyXG4gICAgICAgICAgICB2YXIgaSA9IEFycmF5RXh0LmZpcnN0SW5kZXhPZihfdGhpcy5idXR0b25fYm94LndpZGdldHMsIGR1bW15KTtcclxuICAgICAgICAgICAgX3RoaXMuYnV0dG9uX2JveC5pbnNlcnRXaWRnZXQoaSwgdmlldy5wV2lkZ2V0KTtcclxuICAgICAgICAgICAgZHVtbXkuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldztcclxuICAgICAgICB9KS5jYXRjaCh1dGlscy5yZWplY3QoJ0NvdWxkIG5vdCBhZGQgY2hpbGQgYnV0dG9uIHZpZXcgdG8gY29udHJvbGxlcicsIHRydWUpKTtcclxuICAgIH07XHJcbiAgICBDb250cm9sbGVyVmlldy5wcm90b3R5cGUuYWRkX2F4aXMgPSBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIHdlIGluc2VydCBhIGR1bW15IGVsZW1lbnQgc28gdGhlIG9yZGVyIGlzIHByZXNlcnZlZCB3aGVuIHdlIGFkZFxyXG4gICAgICAgIC8vIHRoZSByZW5kZXJlZCBjb250ZW50IGxhdGVyLlxyXG4gICAgICAgIHZhciBkdW1teSA9IG5ldyBXaWRnZXQoKTtcclxuICAgICAgICB0aGlzLmF4aXNfYm94LmFkZFdpZGdldChkdW1teSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlX2NoaWxkX3ZpZXcobW9kZWwpLnRoZW4oZnVuY3Rpb24gKHZpZXcpIHtcclxuICAgICAgICAgICAgLy8gcmVwbGFjZSB0aGUgZHVtbXkgd2lkZ2V0IHdpdGggdGhlIG5ldyBvbmUuXHJcbiAgICAgICAgICAgIHZhciBpID0gQXJyYXlFeHQuZmlyc3RJbmRleE9mKF90aGlzLmF4aXNfYm94LndpZGdldHMsIGR1bW15KTtcclxuICAgICAgICAgICAgX3RoaXMuYXhpc19ib3guaW5zZXJ0V2lkZ2V0KGksIHZpZXcucFdpZGdldCk7XHJcbiAgICAgICAgICAgIGR1bW15LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICAgICAgfSkuY2F0Y2godXRpbHMucmVqZWN0KCdDb3VsZCBub3QgYWRkIGNoaWxkIGF4aXMgdmlldyB0byBjb250cm9sbGVyJywgdHJ1ZSkpO1xyXG4gICAgfTtcclxuICAgIENvbnRyb2xsZXJWaWV3LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW1vdmUuY2FsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbl92aWV3cy5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmF4aXNfdmlld3MucmVtb3ZlKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbnRyb2xsZXJWaWV3O1xyXG59KERPTVdpZGdldFZpZXcpKTtcclxuZXhwb3J0IHsgQ29udHJvbGxlclZpZXcgfTtcclxuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXHJcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IERPTVdpZGdldE1vZGVsLCBET01XaWRnZXRWaWV3LCBTdHlsZU1vZGVsIH0gZnJvbSAnQGp1cHl0ZXItd2lkZ2V0cy9iYXNlJztcclxuaW1wb3J0IHsgdHlwZXNldCB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBKVVBZVEVSX0NPTlRST0xTX1ZFUlNJT04gfSBmcm9tICcuL3ZlcnNpb24nO1xyXG52YXIgRGVzY3JpcHRpb25TdHlsZU1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKERlc2NyaXB0aW9uU3R5bGVNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIERlc2NyaXB0aW9uU3R5bGVNb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBEZXNjcmlwdGlvblN0eWxlTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7IF9tb2RlbF9uYW1lOiAnRGVzY3JpcHRpb25TdHlsZU1vZGVsJywgX21vZGVsX21vZHVsZTogJ0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMnLCBfbW9kZWxfbW9kdWxlX3ZlcnNpb246IEpVUFlURVJfQ09OVFJPTFNfVkVSU0lPTiB9KTtcclxuICAgIH07XHJcbiAgICBEZXNjcmlwdGlvblN0eWxlTW9kZWwuc3R5bGVQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uX3dpZHRoOiB7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLndpZGdldC1sYWJlbCcsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogJ3dpZHRoJyxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERlc2NyaXB0aW9uU3R5bGVNb2RlbDtcclxufShTdHlsZU1vZGVsKSk7XHJcbmV4cG9ydCB7IERlc2NyaXB0aW9uU3R5bGVNb2RlbCB9O1xyXG52YXIgRGVzY3JpcHRpb25Nb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhEZXNjcmlwdGlvbk1vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRGVzY3JpcHRpb25Nb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBEZXNjcmlwdGlvbk1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwgeyBfbW9kZWxfbmFtZTogJ0Rlc2NyaXB0aW9uTW9kZWwnLCBfdmlld19uYW1lOiAnRGVzY3JpcHRpb25WaWV3JywgX3ZpZXdfbW9kdWxlOiAnQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scycsIF9tb2RlbF9tb2R1bGU6ICdAanVweXRlci13aWRnZXRzL2NvbnRyb2xzJywgX3ZpZXdfbW9kdWxlX3ZlcnNpb246IEpVUFlURVJfQ09OVFJPTFNfVkVSU0lPTiwgX21vZGVsX21vZHVsZV92ZXJzaW9uOiBKVVBZVEVSX0NPTlRST0xTX1ZFUlNJT04sIGRlc2NyaXB0aW9uOiAnJywgZGVzY3JpcHRpb25fdG9vbHRpcDogbnVsbCB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRGVzY3JpcHRpb25Nb2RlbDtcclxufShET01XaWRnZXRNb2RlbCkpO1xyXG5leHBvcnQgeyBEZXNjcmlwdGlvbk1vZGVsIH07XHJcbnZhciBEZXNjcmlwdGlvblZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRGVzY3JpcHRpb25WaWV3LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRGVzY3JpcHRpb25WaWV3KCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIERlc2NyaXB0aW9uVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbCk7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5jbGFzc05hbWUgPSAnd2lkZ2V0LWxhYmVsJztcclxuICAgICAgICB0aGlzLmxhYmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmRlc2NyaXB0aW9uJywgdGhpcy51cGRhdGVEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmRlc2NyaXB0aW9uX3Rvb2x0aXAnLCB0aGlzLnVwZGF0ZURlc2NyaXB0aW9uKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZURlc2NyaXB0aW9uKCk7XHJcbiAgICB9O1xyXG4gICAgRGVzY3JpcHRpb25WaWV3LnByb3RvdHlwZS50eXBlc2V0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHRleHQpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXllZC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHR5cGVzZXQoZWxlbWVudCwgdGV4dCk7IH0pO1xyXG4gICAgfTtcclxuICAgIERlc2NyaXB0aW9uVmlldy5wcm90b3R5cGUudXBkYXRlRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5tb2RlbC5nZXQoJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgdmFyIGRlc2NyaXB0aW9uX3Rvb2x0aXAgPSB0aGlzLm1vZGVsLmdldCgnZGVzY3JpcHRpb25fdG9vbHRpcCcpO1xyXG4gICAgICAgIGlmIChkZXNjcmlwdGlvbl90b29sdGlwID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uX3Rvb2x0aXAgPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVzZXQodGhpcy5sYWJlbCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhYmVsLnRpdGxlID0gZGVzY3JpcHRpb25fdG9vbHRpcDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRGVzY3JpcHRpb25WaWV3O1xyXG59KERPTVdpZGdldFZpZXcpKTtcclxuZXhwb3J0IHsgRGVzY3JpcHRpb25WaWV3IH07XHJcbi8qKlxyXG4gKiBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBqdXB5dGVyLWpzLXdpZGdldHMgMi54LlxyXG4gKlxyXG4gKiBVc2UgRGVzY3JpcHRpb25Nb2RlbCBpbnN0ZWFkLlxyXG4gKi9cclxudmFyIExhYmVsZWRET01XaWRnZXRNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhMYWJlbGVkRE9NV2lkZ2V0TW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBMYWJlbGVkRE9NV2lkZ2V0TW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIExhYmVsZWRET01XaWRnZXRNb2RlbDtcclxufShEZXNjcmlwdGlvbk1vZGVsKSk7XHJcbmV4cG9ydCB7IExhYmVsZWRET01XaWRnZXRNb2RlbCB9O1xyXG4vKipcclxuICogRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGgganVweXRlci1qcy13aWRnZXRzIDIueC5cclxuICpcclxuICogVXNlIERlc2NyaXB0aW9uVmlldyBpbnN0ZWFkLlxyXG4gKi9cclxudmFyIExhYmVsZWRET01XaWRnZXRWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKExhYmVsZWRET01XaWRnZXRWaWV3LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTGFiZWxlZERPTVdpZGdldFZpZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIExhYmVsZWRET01XaWRnZXRWaWV3O1xyXG59KERlc2NyaXB0aW9uVmlldykpO1xyXG5leHBvcnQgeyBMYWJlbGVkRE9NV2lkZ2V0VmlldyB9O1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cclxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCB7IEFycmF5RXh0IH0gZnJvbSAnQHBob3NwaG9yL2FsZ29yaXRobSc7XHJcbmltcG9ydCB7IFNpZ25hbCB9IGZyb20gJ0BwaG9zcGhvci9zaWduYWxpbmcnO1xyXG5pbXBvcnQgeyBQYW5lbCwgUGFuZWxMYXlvdXQsIFdpZGdldCB9IGZyb20gJ0BwaG9zcGhvci93aWRnZXRzJztcclxuaW1wb3J0IHsgU2VsZWN0aW9uIH0gZnJvbSAnLi9jdXJyZW50c2VsZWN0aW9uJztcclxuLyoqXHJcbiAqIFRoZSBjbGFzcyBuYW1lIGFkZGVkIHRvIENvbGxhcHNlIGluc3RhbmNlcy5cclxuICovXHJcbnZhciBDT0xMQVBTRV9DTEFTUyA9ICdwLUNvbGxhcHNlJztcclxuLyoqXHJcbiAqIFRoZSBjbGFzcyBuYW1lIGFkZGVkIHRvIGEgQ29sbGFwc2UncyBoZWFkZXIuXHJcbiAqL1xyXG52YXIgQ09MTEFQU0VfSEVBREVSX0NMQVNTID0gJ3AtQ29sbGFwc2UtaGVhZGVyJztcclxuLyoqXHJcbiAqIFRoZSBjbGFzcyBuYW1lIGFkZGVkIHRvIGEgQ29sbGFwc2UncyBjb250ZW50cy5cclxuICovXHJcbnZhciBDT0xMQVBTRV9DT05URU5UU19DTEFTUyA9ICdwLUNvbGxhcHNlLWNvbnRlbnRzJztcclxuLyoqXHJcbiAqIFRoZSBjbGFzcyBuYW1lIGFkZGVkIHRvIGEgQ29sbGFwc2Ugd2hlbiBpdCBpcyBvcGVuZWRcclxuICovXHJcbnZhciBDT0xMQVBTRV9DTEFTU19PUEVOID0gJ3AtQ29sbGFwc2Utb3Blbic7XHJcbi8qKlxyXG4gKiBBIHBhbmVsIHRoYXQgc3VwcG9ydHMgYSBjb2xsYXBzaWJsZSBoZWFkZXIsIG1hZGUgZnJvbSB0aGUgd2lkZ2V0J3MgdGl0bGUuXHJcbiAqIENsaWNraW5nIG9uIHRoZSB0aXRsZSBleHBhbmRzIG9yIGNvbnRyYWN0cyB0aGUgd2lkZ2V0LlxyXG4gKi9cclxudmFyIENvbGxhcHNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKENvbGxhcHNlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQ29sbGFwc2Uob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX2NvbGxhcHNlQ2hhbmdlZCA9IG5ldyBTaWduYWwoX3RoaXMpO1xyXG4gICAgICAgIF90aGlzLmFkZENsYXNzKENPTExBUFNFX0NMQVNTKTtcclxuICAgICAgICBfdGhpcy5faGVhZGVyID0gbmV3IFdpZGdldCgpO1xyXG4gICAgICAgIF90aGlzLl9oZWFkZXIuYWRkQ2xhc3MoQ09MTEFQU0VfSEVBREVSX0NMQVNTKTtcclxuICAgICAgICBfdGhpcy5faGVhZGVyLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpcyk7XHJcbiAgICAgICAgX3RoaXMuX2NvbnRlbnQgPSBuZXcgUGFuZWwoKTtcclxuICAgICAgICBfdGhpcy5fY29udGVudC5hZGRDbGFzcyhDT0xMQVBTRV9DT05URU5UU19DTEFTUyk7XHJcbiAgICAgICAgdmFyIGxheW91dCA9IG5ldyBQYW5lbExheW91dCgpO1xyXG4gICAgICAgIF90aGlzLmxheW91dCA9IGxheW91dDtcclxuICAgICAgICBsYXlvdXQuYWRkV2lkZ2V0KF90aGlzLl9oZWFkZXIpO1xyXG4gICAgICAgIGxheW91dC5hZGRXaWRnZXQoX3RoaXMuX2NvbnRlbnQpO1xyXG4gICAgICAgIGlmIChvcHRpb25zLndpZGdldCkge1xyXG4gICAgICAgICAgICBfdGhpcy53aWRnZXQgPSBvcHRpb25zLndpZGdldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgX3RoaXMuY29sbGFwc2VkID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgQ29sbGFwc2UucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2hlYWRlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fd2lkZ2V0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9jb250ZW50ID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29sbGFwc2UucHJvdG90eXBlLCBcIndpZGdldFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93aWRnZXQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh3aWRnZXQpIHtcclxuICAgICAgICAgICAgdmFyIG9sZFdpZGdldCA9IHRoaXMuX3dpZGdldDtcclxuICAgICAgICAgICAgaWYgKG9sZFdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgb2xkV2lkZ2V0LmRpc3Bvc2VkLmRpc2Nvbm5lY3QodGhpcy5fb25DaGlsZERpc3Bvc2VkLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIG9sZFdpZGdldC50aXRsZS5jaGFuZ2VkLmRpc2Nvbm5lY3QodGhpcy5fb25UaXRsZUNoYW5nZWQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgb2xkV2lkZ2V0LnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fd2lkZ2V0ID0gd2lkZ2V0O1xyXG4gICAgICAgICAgICB3aWRnZXQuZGlzcG9zZWQuY29ubmVjdCh0aGlzLl9vbkNoaWxkRGlzcG9zZWQsIHRoaXMpO1xyXG4gICAgICAgICAgICB3aWRnZXQudGl0bGUuY2hhbmdlZC5jb25uZWN0KHRoaXMuX29uVGl0bGVDaGFuZ2VkLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fb25UaXRsZUNoYW5nZWQod2lkZ2V0LnRpdGxlKTtcclxuICAgICAgICAgICAgdGhpcy5fY29udGVudC5hZGRXaWRnZXQod2lkZ2V0KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb2xsYXBzZS5wcm90b3R5cGUsIFwiY29sbGFwc2VkXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbGxhcHNlZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IHNob3VsZCB3ZSBoYXZlIHRoaXMgY2hlY2sgaGVyZT9cclxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLl9jb2xsYXBzZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxhcHNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91bmNvbGxhcHNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIENvbGxhcHNlLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbGxhcHNlLnByb3RvdHlwZSwgXCJjb2xsYXBzZUNoYW5nZWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29sbGFwc2VDaGFuZ2VkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgQ29sbGFwc2UucHJvdG90eXBlLl9jb2xsYXBzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9jb2xsYXBzZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb250ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnQuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKENPTExBUFNFX0NMQVNTX09QRU4pO1xyXG4gICAgICAgIHRoaXMuX2NvbGxhcHNlQ2hhbmdlZC5lbWl0KHZvaWQgMCk7XHJcbiAgICB9O1xyXG4gICAgQ29sbGFwc2UucHJvdG90eXBlLl91bmNvbGxhcHNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2NvbGxhcHNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb250ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnQuc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZENsYXNzKENPTExBUFNFX0NMQVNTX09QRU4pO1xyXG4gICAgICAgIHRoaXMuX2NvbGxhcHNlQ2hhbmdlZC5lbWl0KHZvaWQgMCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgdGhlIERPTSBldmVudHMgZm9yIHRoZSBDb2xsYXBzZSB3aWRnZXQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGV2ZW50IC0gVGhlIERPTSBldmVudCBzZW50IHRvIHRoZSBwYW5lbC5cclxuICAgICAqXHJcbiAgICAgKiAjIyMjIE5vdGVzXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpbXBsZW1lbnRzIHRoZSBET00gYEV2ZW50TGlzdGVuZXJgIGludGVyZmFjZSBhbmQgaXNcclxuICAgICAqIGNhbGxlZCBpbiByZXNwb25zZSB0byBldmVudHMgb24gdGhlIHBhbmVsJ3MgRE9NIG5vZGUuIEl0IHNob3VsZFxyXG4gICAgICogbm90IGJlIGNhbGxlZCBkaXJlY3RseSBieSB1c2VyIGNvZGUuXHJcbiAgICAgKi9cclxuICAgIENvbGxhcHNlLnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdjbGljayc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ldnRDbGljayhldmVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBDb2xsYXBzZS5wcm90b3R5cGUuX2V2dENsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSB0aGUgYGNoYW5nZWRgIHNpZ25hbCBvZiBhIHRpdGxlIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgQ29sbGFwc2UucHJvdG90eXBlLl9vblRpdGxlQ2hhbmdlZCA9IGZ1bmN0aW9uIChzZW5kZXIpIHtcclxuICAgICAgICB0aGlzLl9oZWFkZXIubm9kZS50ZXh0Q29udGVudCA9IHRoaXMuX3dpZGdldC50aXRsZS5sYWJlbDtcclxuICAgIH07XHJcbiAgICBDb2xsYXBzZS5wcm90b3R5cGUuX29uQ2hpbGREaXNwb3NlZCA9IGZ1bmN0aW9uIChzZW5kZXIpIHtcclxuICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29sbGFwc2U7XHJcbn0oV2lkZ2V0KSk7XHJcbmV4cG9ydCB7IENvbGxhcHNlIH07XHJcbi8qKlxyXG4gKiBUaGUgY2xhc3MgbmFtZSBhZGRlZCB0byBBY2NvcmRpb24gaW5zdGFuY2VzLlxyXG4gKi9cclxudmFyIEFDQ09SRElPTl9DTEFTUyA9ICdwLUFjY29yZGlvbic7XHJcbi8qKlxyXG4gKiBUaGUgY2xhc3MgbmFtZSBhZGRlZCB0byBhbiBBY2NvcmRpb24gY2hpbGQuXHJcbiAqL1xyXG52YXIgQUNDT1JESU9OX0NISUxEX0NMQVNTID0gJ3AtQWNjb3JkaW9uLWNoaWxkJztcclxudmFyIEFDQ09SRElPTl9DSElMRF9BQ1RJVkVfQ0xBU1MgPSAncC1BY2NvcmRpb24tY2hpbGQtYWN0aXZlJztcclxuLyoqXHJcbiAqIEEgcGFuZWwgdGhhdCBzdXBwb3J0cyBhIGNvbGxhcHNpYmxlIGhlYWRlciwgbWFkZSBmcm9tIHRoZSB3aWRnZXQncyB0aXRsZS5cclxuICogQ2xpY2tpbmcgb24gdGhlIHRpdGxlIGV4cGFuZHMgb3IgY29udHJhY3RzIHRoZSB3aWRnZXQuXHJcbiAqL1xyXG52YXIgQWNjb3JkaW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEFjY29yZGlvbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEFjY29yZGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbihfdGhpcy53aWRnZXRzKTtcclxuICAgICAgICBfdGhpcy5fc2VsZWN0aW9uLnNlbGVjdGlvbkNoYW5nZWQuY29ubmVjdChfdGhpcy5fb25TZWxlY3Rpb25DaGFuZ2VkLCBfdGhpcyk7XHJcbiAgICAgICAgX3RoaXMuYWRkQ2xhc3MoQUNDT1JESU9OX0NMQVNTKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWNjb3JkaW9uLnByb3RvdHlwZSwgXCJjb2xsYXBzZVdpZGdldHNcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgcmVhZC1vbmx5IHNlcXVlbmNlIG9mIHRoZSB3aWRnZXRzIGluIHRoZSBwYW5lbC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICMjIyMgTm90ZXNcclxuICAgICAgICAgKiBUaGlzIGlzIGEgcmVhZC1vbmx5IHByb3BlcnR5LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8qICBnZXQgd2lkZ2V0cygpOiBJU2VxdWVuY2U8V2lkZ2V0PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXlTZXF1ZW5jZSh0b0FycmF5KG1hcCgodGhpcy5sYXlvdXQgYXMgUGFuZWxMYXlvdXQpLndpZGdldHMsICh3OiBDb2xsYXBzZSkgPT4gdy53aWRnZXQpKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0LndpZGdldHM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWNjb3JkaW9uLnByb3RvdHlwZSwgXCJzZWxlY3Rpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgQWNjb3JkaW9uLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gKHdpZGdldCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheUV4dC5maW5kRmlyc3RJbmRleCh0aGlzLmNvbGxhcHNlV2lkZ2V0cywgZnVuY3Rpb24gKHcpIHsgcmV0dXJuIHcud2lkZ2V0ID09PSB3aWRnZXQ7IH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgd2lkZ2V0IHRvIHRoZSBlbmQgb2YgdGhlIGFjY29yZGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gd2lkZ2V0IC0gVGhlIHdpZGdldCB0byBhZGQgdG8gdGhlIGFjY29yZGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgQ29sbGFwc2Ugd2lkZ2V0IHdyYXBwaW5nIHRoZSBhZGRlZCB3aWRnZXQuXHJcbiAgICAgKlxyXG4gICAgICogIyMjIyBOb3Rlc1xyXG4gICAgICogVGhlIHdpZGdldCB3aWxsIGJlIHdyYXBwZWQgaW4gYSBDb2xsYXBzZWRXaWRnZXQuXHJcbiAgICAgKi9cclxuICAgIEFjY29yZGlvbi5wcm90b3R5cGUuYWRkV2lkZ2V0ID0gZnVuY3Rpb24gKHdpZGdldCkge1xyXG4gICAgICAgIHZhciBjb2xsYXBzZSA9IHRoaXMuX3dyYXBXaWRnZXQod2lkZ2V0KTtcclxuICAgICAgICBjb2xsYXBzZS5jb2xsYXBzZWQgPSB0cnVlO1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuYWRkV2lkZ2V0LmNhbGwodGhpcywgY29sbGFwc2UpO1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbi5hZGp1c3RTZWxlY3Rpb25Gb3JJbnNlcnQodGhpcy53aWRnZXRzLmxlbmd0aCAtIDEsIGNvbGxhcHNlKTtcclxuICAgICAgICByZXR1cm4gY29sbGFwc2U7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnNlcnQgYSB3aWRnZXQgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggLSBUaGUgaW5kZXggYXQgd2hpY2ggdG8gaW5zZXJ0IHRoZSB3aWRnZXQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHdpZGdldCAtIFRoZSB3aWRnZXQgdG8gaW5zZXJ0IGludG8gdG8gdGhlIGFjY29yZGlvbi5cclxuICAgICAqXHJcbiAgICAgKiAjIyMjIE5vdGVzXHJcbiAgICAgKiBJZiB0aGUgd2lkZ2V0IGlzIGFscmVhZHkgY29udGFpbmVkIGluIHRoZSBwYW5lbCwgaXQgd2lsbCBiZSBtb3ZlZC5cclxuICAgICAqL1xyXG4gICAgQWNjb3JkaW9uLnByb3RvdHlwZS5pbnNlcnRXaWRnZXQgPSBmdW5jdGlvbiAoaW5kZXgsIHdpZGdldCkge1xyXG4gICAgICAgIHZhciBjb2xsYXBzZSA9IHRoaXMuX3dyYXBXaWRnZXQod2lkZ2V0KTtcclxuICAgICAgICBjb2xsYXBzZS5jb2xsYXBzZWQgPSB0cnVlO1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5zZXJ0V2lkZ2V0LmNhbGwodGhpcywgaW5kZXgsIGNvbGxhcHNlKTtcclxuICAgICAgICB0aGlzLl9zZWxlY3Rpb24uYWRqdXN0U2VsZWN0aW9uRm9ySW5zZXJ0KGluZGV4LCBjb2xsYXBzZSk7XHJcbiAgICB9O1xyXG4gICAgQWNjb3JkaW9uLnByb3RvdHlwZS5yZW1vdmVXaWRnZXQgPSBmdW5jdGlvbiAod2lkZ2V0KSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleE9mKHdpZGdldCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgdmFyIGNvbGxhcHNlID0gdGhpcy5jb2xsYXBzZVdpZGdldHNbaW5kZXhdO1xyXG4gICAgICAgICAgICB3aWRnZXQucGFyZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgY29sbGFwc2UuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24uYWRqdXN0U2VsZWN0aW9uRm9yUmVtb3ZlKGluZGV4LCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQWNjb3JkaW9uLnByb3RvdHlwZS5fd3JhcFdpZGdldCA9IGZ1bmN0aW9uICh3aWRnZXQpIHtcclxuICAgICAgICB2YXIgY29sbGFwc2UgPSBuZXcgQ29sbGFwc2UoeyB3aWRnZXQ6IHdpZGdldCB9KTtcclxuICAgICAgICBjb2xsYXBzZS5hZGRDbGFzcyhBQ0NPUkRJT05fQ0hJTERfQ0xBU1MpO1xyXG4gICAgICAgIGNvbGxhcHNlLmNvbGxhcHNlQ2hhbmdlZC5jb25uZWN0KHRoaXMuX29uQ29sbGFwc2VDaGFuZ2UsIHRoaXMpO1xyXG4gICAgICAgIHJldHVybiBjb2xsYXBzZTtcclxuICAgIH07XHJcbiAgICBBY2NvcmRpb24ucHJvdG90eXBlLl9vbkNvbGxhcHNlQ2hhbmdlID0gZnVuY3Rpb24gKHNlbmRlcikge1xyXG4gICAgICAgIGlmICghc2VuZGVyLmNvbGxhcHNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24udmFsdWUgPSBzZW5kZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3NlbGVjdGlvbi52YWx1ZSA9PT0gc2VuZGVyICYmIHNlbmRlci5jb2xsYXBzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uLnZhbHVlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQWNjb3JkaW9uLnByb3RvdHlwZS5fb25TZWxlY3Rpb25DaGFuZ2VkID0gZnVuY3Rpb24gKHNlbmRlciwgY2hhbmdlKSB7XHJcbiAgICAgICAgLy8gQ29sbGFwc2UgcHJldmlvdXMgd2lkZ2V0LCBvcGVuIGN1cnJlbnQgd2lkZ2V0XHJcbiAgICAgICAgdmFyIHB2ID0gY2hhbmdlLnByZXZpb3VzVmFsdWU7XHJcbiAgICAgICAgdmFyIGN2ID0gY2hhbmdlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICBpZiAocHYpIHtcclxuICAgICAgICAgICAgcHYuY29sbGFwc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHYucmVtb3ZlQ2xhc3MoQUNDT1JESU9OX0NISUxEX0FDVElWRV9DTEFTUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdikge1xyXG4gICAgICAgICAgICBjdi5jb2xsYXBzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY3YuYWRkQ2xhc3MoQUNDT1JESU9OX0NISUxEX0FDVElWRV9DTEFTUyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBBY2NvcmRpb247XHJcbn0oUGFuZWwpKTtcclxuZXhwb3J0IHsgQWNjb3JkaW9uIH07XHJcbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxyXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IHsgRE9NV2lkZ2V0VmlldywgU3R5bGVNb2RlbCB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XHJcbmltcG9ydCB7IENvcmVET01XaWRnZXRNb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2NvcmUnO1xyXG5pbXBvcnQgeyBKVVBZVEVSX0NPTlRST0xTX1ZFUlNJT04gfSBmcm9tICcuL3ZlcnNpb24nO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG52YXIgQnV0dG9uU3R5bGVNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhCdXR0b25TdHlsZU1vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQnV0dG9uU3R5bGVNb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBCdXR0b25TdHlsZU1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnQnV0dG9uU3R5bGVNb2RlbCcsXHJcbiAgICAgICAgICAgIF9tb2RlbF9tb2R1bGU6ICdAanVweXRlci13aWRnZXRzL2NvbnRyb2xzJyxcclxuICAgICAgICAgICAgX21vZGVsX21vZHVsZV92ZXJzaW9uOiBKVVBZVEVSX0NPTlRST0xTX1ZFUlNJT04sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQnV0dG9uU3R5bGVNb2RlbC5zdHlsZVByb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgYnV0dG9uX2NvbG9yOiB7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnJyxcclxuICAgICAgICAgICAgYXR0cmlidXRlOiAnYmFja2dyb3VuZC1jb2xvcicsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvbnRfd2VpZ2h0OiB7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnJyxcclxuICAgICAgICAgICAgYXR0cmlidXRlOiAnZm9udC13ZWlnaHQnLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQnV0dG9uU3R5bGVNb2RlbDtcclxufShTdHlsZU1vZGVsKSk7XHJcbmV4cG9ydCB7IEJ1dHRvblN0eWxlTW9kZWwgfTtcclxudmFyIEJ1dHRvbk1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJ1dHRvbk1vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQnV0dG9uTW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgQnV0dG9uTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAnJyxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICAgICAgYnV0dG9uX3N0eWxlOiAnJyxcclxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0J1dHRvblZpZXcnLFxyXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0J1dHRvbk1vZGVsJyxcclxuICAgICAgICAgICAgc3R5bGU6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQnV0dG9uTW9kZWw7XHJcbn0oQ29yZURPTVdpZGdldE1vZGVsKSk7XHJcbmV4cG9ydCB7IEJ1dHRvbk1vZGVsIH07XHJcbnZhciBCdXR0b25WaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJ1dHRvblZpZXcsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBCdXR0b25WaWV3KCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgQnV0dG9uVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmJ1dHRvbl9zdHlsZScsIHRoaXMudXBkYXRlX2J1dHRvbl9zdHlsZSk7XHJcbiAgICAgICAgdGhpcy5zZXRfYnV0dG9uX3N0eWxlKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTsgLy8gU2V0IGRlZmF1bHRzLlxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcclxuICAgICAqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cclxuICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxyXG4gICAgICovXHJcbiAgICBCdXR0b25WaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5lbC5kaXNhYmxlZCA9IHRoaXMubW9kZWwuZ2V0KCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMubW9kZWwuZ2V0KCd0b29sdGlwJykpO1xyXG4gICAgICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMubW9kZWwuZ2V0KCdkZXNjcmlwdGlvbicpO1xyXG4gICAgICAgIHZhciBpY29uID0gdGhpcy5tb2RlbC5nZXQoJ2ljb24nKTtcclxuICAgICAgICBpZiAoZGVzY3JpcHRpb24ubGVuZ3RoIHx8IGljb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgaWYgKGljb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgICAgICAgICAgIGkuY2xhc3NMaXN0LmFkZCgnZmEnKTtcclxuICAgICAgICAgICAgICAgIGkuY2xhc3NMaXN0LmFkZCgnZmEtJyArIGljb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0aW9uLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGkuY2xhc3NMaXN0LmFkZCgnY2VudGVyJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGVzY3JpcHRpb24pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgQnV0dG9uVmlldy5wcm90b3R5cGUudXBkYXRlX2J1dHRvbl9zdHlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9tYXBwZWRfY2xhc3NlcyhCdXR0b25WaWV3LmNsYXNzX21hcCwgJ2J1dHRvbl9zdHlsZScpO1xyXG4gICAgfTtcclxuICAgIEJ1dHRvblZpZXcucHJvdG90eXBlLnNldF9idXR0b25fc3R5bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRfbWFwcGVkX2NsYXNzZXMoQnV0dG9uVmlldy5jbGFzc19tYXAsICdidXR0b25fc3R5bGUnKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIERpY3Rpb25hcnkgb2YgZXZlbnRzIGFuZCBoYW5kbGVyc1xyXG4gICAgICovXHJcbiAgICBCdXR0b25WaWV3LnByb3RvdHlwZS5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gVE9ETzogcmV0dXJuIHR5cGluZyBub3QgbmVlZGVkIGluIFR5cGVzY3JpcHQgbGF0ZXIgdGhhbiAxLjgueFxyXG4gICAgICAgIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyMDc3MDIzL3doeS1jYW50LWktaW5kaXJlY3RseS1yZXR1cm4tYW4tb2JqZWN0LWxpdGVyYWwtdG8tc2F0aXNmeS1hbi1pbmRleC1zaWduYXR1cmUtcmUgYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9wdWxsLzcwMjlcclxuICAgICAgICByZXR1cm4geyAnY2xpY2snOiAnX2hhbmRsZV9jbGljaycgfTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXHJcbiAgICAgKi9cclxuICAgIEJ1dHRvblZpZXcucHJvdG90eXBlLl9oYW5kbGVfY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2VuZCh7IGV2ZW50OiAnY2xpY2snIH0pO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b25WaWV3LnByb3RvdHlwZSwgXCJ0YWdOYW1lXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgZGVmYXVsdCB0YWcgbmFtZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICMjIyMgTm90ZXNcclxuICAgICAgICAgKiBUaGlzIGlzIGEgcmVhZC1vbmx5IGF0dHJpYnV0ZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gV2UgY2FuJ3QgbWFrZSB0aGlzIGFuIGF0dHJpYnV0ZSB3aXRoIGEgZGVmYXVsdCB2YWx1ZVxyXG4gICAgICAgICAgICAvLyBzaW5jZSBpdCB3b3VsZCBiZSBzZXQgYWZ0ZXIgaXQgaXMgbmVlZGVkIGluIHRoZVxyXG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3Rvci5cclxuICAgICAgICAgICAgcmV0dXJuICdidXR0b24nO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgQnV0dG9uVmlldy5jbGFzc19tYXAgPSB7XHJcbiAgICAgICAgcHJpbWFyeTogWydtb2QtcHJpbWFyeSddLFxyXG4gICAgICAgIHN1Y2Nlc3M6IFsnbW9kLXN1Y2Nlc3MnXSxcclxuICAgICAgICBpbmZvOiBbJ21vZC1pbmZvJ10sXHJcbiAgICAgICAgd2FybmluZzogWydtb2Qtd2FybmluZyddLFxyXG4gICAgICAgIGRhbmdlcjogWydtb2QtZGFuZ2VyJ11cclxuICAgIH07XHJcbiAgICByZXR1cm4gQnV0dG9uVmlldztcclxufShET01XaWRnZXRWaWV3KSk7XHJcbmV4cG9ydCB7IEJ1dHRvblZpZXcgfTtcclxuIiwiLyohXG4gKiBqUXVlcnkgVUkgV2lkZ2V0IDEuMTIuMVxuICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICpcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKi9cblxuLy8+PmxhYmVsOiBXaWRnZXRcbi8vPj5ncm91cDogQ29yZVxuLy8+PmRlc2NyaXB0aW9uOiBQcm92aWRlcyBhIGZhY3RvcnkgZm9yIGNyZWF0aW5nIHN0YXRlZnVsIHdpZGdldHMgd2l0aCBhIGNvbW1vbiBBUEkuXG4vLz4+ZG9jczogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20valF1ZXJ5LndpZGdldC9cbi8vPj5kZW1vczogaHR0cDovL2pxdWVyeXVpLmNvbS93aWRnZXQvXG5cbiggZnVuY3Rpb24oIGZhY3RvcnkgKSB7XG5cdGlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKCBbIFwianF1ZXJ5XCIsIFwiLi92ZXJzaW9uXCIgXSwgZmFjdG9yeSApO1xuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzXG5cdFx0ZmFjdG9yeSggalF1ZXJ5ICk7XG5cdH1cbn0oIGZ1bmN0aW9uKCAkICkge1xuXG52YXIgd2lkZ2V0VXVpZCA9IDA7XG52YXIgd2lkZ2V0U2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiQuY2xlYW5EYXRhID0gKCBmdW5jdGlvbiggb3JpZyApIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtcyApIHtcblx0XHR2YXIgZXZlbnRzLCBlbGVtLCBpO1xuXHRcdGZvciAoIGkgPSAwOyAoIGVsZW0gPSBlbGVtc1sgaSBdICkgIT0gbnVsbDsgaSsrICkge1xuXHRcdFx0dHJ5IHtcblxuXHRcdFx0XHQvLyBPbmx5IHRyaWdnZXIgcmVtb3ZlIHdoZW4gbmVjZXNzYXJ5IHRvIHNhdmUgdGltZVxuXHRcdFx0XHRldmVudHMgPSAkLl9kYXRhKCBlbGVtLCBcImV2ZW50c1wiICk7XG5cdFx0XHRcdGlmICggZXZlbnRzICYmIGV2ZW50cy5yZW1vdmUgKSB7XG5cdFx0XHRcdFx0JCggZWxlbSApLnRyaWdnZXJIYW5kbGVyKCBcInJlbW92ZVwiICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gSHR0cDovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvODIzNVxuXHRcdFx0fSBjYXRjaCAoIGUgKSB7fVxuXHRcdH1cblx0XHRvcmlnKCBlbGVtcyApO1xuXHR9O1xufSApKCAkLmNsZWFuRGF0YSApO1xuXG4kLndpZGdldCA9IGZ1bmN0aW9uKCBuYW1lLCBiYXNlLCBwcm90b3R5cGUgKSB7XG5cdHZhciBleGlzdGluZ0NvbnN0cnVjdG9yLCBjb25zdHJ1Y3RvciwgYmFzZVByb3RvdHlwZTtcblxuXHQvLyBQcm94aWVkUHJvdG90eXBlIGFsbG93cyB0aGUgcHJvdmlkZWQgcHJvdG90eXBlIHRvIHJlbWFpbiB1bm1vZGlmaWVkXG5cdC8vIHNvIHRoYXQgaXQgY2FuIGJlIHVzZWQgYXMgYSBtaXhpbiBmb3IgbXVsdGlwbGUgd2lkZ2V0cyAoIzg4NzYpXG5cdHZhciBwcm94aWVkUHJvdG90eXBlID0ge307XG5cblx0dmFyIG5hbWVzcGFjZSA9IG5hbWUuc3BsaXQoIFwiLlwiIClbIDAgXTtcblx0bmFtZSA9IG5hbWUuc3BsaXQoIFwiLlwiIClbIDEgXTtcblx0dmFyIGZ1bGxOYW1lID0gbmFtZXNwYWNlICsgXCItXCIgKyBuYW1lO1xuXG5cdGlmICggIXByb3RvdHlwZSApIHtcblx0XHRwcm90b3R5cGUgPSBiYXNlO1xuXHRcdGJhc2UgPSAkLldpZGdldDtcblx0fVxuXG5cdGlmICggJC5pc0FycmF5KCBwcm90b3R5cGUgKSApIHtcblx0XHRwcm90b3R5cGUgPSAkLmV4dGVuZC5hcHBseSggbnVsbCwgWyB7fSBdLmNvbmNhdCggcHJvdG90eXBlICkgKTtcblx0fVxuXG5cdC8vIENyZWF0ZSBzZWxlY3RvciBmb3IgcGx1Z2luXG5cdCQuZXhwclsgXCI6XCIgXVsgZnVsbE5hbWUudG9Mb3dlckNhc2UoKSBdID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuICEhJC5kYXRhKCBlbGVtLCBmdWxsTmFtZSApO1xuXHR9O1xuXG5cdCRbIG5hbWVzcGFjZSBdID0gJFsgbmFtZXNwYWNlIF0gfHwge307XG5cdGV4aXN0aW5nQ29uc3RydWN0b3IgPSAkWyBuYW1lc3BhY2UgXVsgbmFtZSBdO1xuXHRjb25zdHJ1Y3RvciA9ICRbIG5hbWVzcGFjZSBdWyBuYW1lIF0gPSBmdW5jdGlvbiggb3B0aW9ucywgZWxlbWVudCApIHtcblxuXHRcdC8vIEFsbG93IGluc3RhbnRpYXRpb24gd2l0aG91dCBcIm5ld1wiIGtleXdvcmRcblx0XHRpZiAoICF0aGlzLl9jcmVhdGVXaWRnZXQgKSB7XG5cdFx0XHRyZXR1cm4gbmV3IGNvbnN0cnVjdG9yKCBvcHRpb25zLCBlbGVtZW50ICk7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsb3cgaW5zdGFudGlhdGlvbiB3aXRob3V0IGluaXRpYWxpemluZyBmb3Igc2ltcGxlIGluaGVyaXRhbmNlXG5cdFx0Ly8gbXVzdCB1c2UgXCJuZXdcIiBrZXl3b3JkICh0aGUgY29kZSBhYm92ZSBhbHdheXMgcGFzc2VzIGFyZ3MpXG5cdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5fY3JlYXRlV2lkZ2V0KCBvcHRpb25zLCBlbGVtZW50ICk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIEV4dGVuZCB3aXRoIHRoZSBleGlzdGluZyBjb25zdHJ1Y3RvciB0byBjYXJyeSBvdmVyIGFueSBzdGF0aWMgcHJvcGVydGllc1xuXHQkLmV4dGVuZCggY29uc3RydWN0b3IsIGV4aXN0aW5nQ29uc3RydWN0b3IsIHtcblx0XHR2ZXJzaW9uOiBwcm90b3R5cGUudmVyc2lvbixcblxuXHRcdC8vIENvcHkgdGhlIG9iamVjdCB1c2VkIHRvIGNyZWF0ZSB0aGUgcHJvdG90eXBlIGluIGNhc2Ugd2UgbmVlZCB0b1xuXHRcdC8vIHJlZGVmaW5lIHRoZSB3aWRnZXQgbGF0ZXJcblx0XHRfcHJvdG86ICQuZXh0ZW5kKCB7fSwgcHJvdG90eXBlICksXG5cblx0XHQvLyBUcmFjayB3aWRnZXRzIHRoYXQgaW5oZXJpdCBmcm9tIHRoaXMgd2lkZ2V0IGluIGNhc2UgdGhpcyB3aWRnZXQgaXNcblx0XHQvLyByZWRlZmluZWQgYWZ0ZXIgYSB3aWRnZXQgaW5oZXJpdHMgZnJvbSBpdFxuXHRcdF9jaGlsZENvbnN0cnVjdG9yczogW11cblx0fSApO1xuXG5cdGJhc2VQcm90b3R5cGUgPSBuZXcgYmFzZSgpO1xuXG5cdC8vIFdlIG5lZWQgdG8gbWFrZSB0aGUgb3B0aW9ucyBoYXNoIGEgcHJvcGVydHkgZGlyZWN0bHkgb24gdGhlIG5ldyBpbnN0YW5jZVxuXHQvLyBvdGhlcndpc2Ugd2UnbGwgbW9kaWZ5IHRoZSBvcHRpb25zIGhhc2ggb24gdGhlIHByb3RvdHlwZSB0aGF0IHdlJ3JlXG5cdC8vIGluaGVyaXRpbmcgZnJvbVxuXHRiYXNlUHJvdG90eXBlLm9wdGlvbnMgPSAkLndpZGdldC5leHRlbmQoIHt9LCBiYXNlUHJvdG90eXBlLm9wdGlvbnMgKTtcblx0JC5lYWNoKCBwcm90b3R5cGUsIGZ1bmN0aW9uKCBwcm9wLCB2YWx1ZSApIHtcblx0XHRpZiAoICEkLmlzRnVuY3Rpb24oIHZhbHVlICkgKSB7XG5cdFx0XHRwcm94aWVkUHJvdG90eXBlWyBwcm9wIF0gPSB2YWx1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cHJveGllZFByb3RvdHlwZVsgcHJvcCBdID0gKCBmdW5jdGlvbigpIHtcblx0XHRcdGZ1bmN0aW9uIF9zdXBlcigpIHtcblx0XHRcdFx0cmV0dXJuIGJhc2UucHJvdG90eXBlWyBwcm9wIF0uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBfc3VwZXJBcHBseSggYXJncyApIHtcblx0XHRcdFx0cmV0dXJuIGJhc2UucHJvdG90eXBlWyBwcm9wIF0uYXBwbHkoIHRoaXMsIGFyZ3MgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgX19zdXBlciA9IHRoaXMuX3N1cGVyO1xuXHRcdFx0XHR2YXIgX19zdXBlckFwcGx5ID0gdGhpcy5fc3VwZXJBcHBseTtcblx0XHRcdFx0dmFyIHJldHVyblZhbHVlO1xuXG5cdFx0XHRcdHRoaXMuX3N1cGVyID0gX3N1cGVyO1xuXHRcdFx0XHR0aGlzLl9zdXBlckFwcGx5ID0gX3N1cGVyQXBwbHk7XG5cblx0XHRcdFx0cmV0dXJuVmFsdWUgPSB2YWx1ZS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cblx0XHRcdFx0dGhpcy5fc3VwZXIgPSBfX3N1cGVyO1xuXHRcdFx0XHR0aGlzLl9zdXBlckFwcGx5ID0gX19zdXBlckFwcGx5O1xuXG5cdFx0XHRcdHJldHVybiByZXR1cm5WYWx1ZTtcblx0XHRcdH07XG5cdFx0fSApKCk7XG5cdH0gKTtcblx0Y29uc3RydWN0b3IucHJvdG90eXBlID0gJC53aWRnZXQuZXh0ZW5kKCBiYXNlUHJvdG90eXBlLCB7XG5cblx0XHQvLyBUT0RPOiByZW1vdmUgc3VwcG9ydCBmb3Igd2lkZ2V0RXZlbnRQcmVmaXhcblx0XHQvLyBhbHdheXMgdXNlIHRoZSBuYW1lICsgYSBjb2xvbiBhcyB0aGUgcHJlZml4LCBlLmcuLCBkcmFnZ2FibGU6c3RhcnRcblx0XHQvLyBkb24ndCBwcmVmaXggZm9yIHdpZGdldHMgdGhhdCBhcmVuJ3QgRE9NLWJhc2VkXG5cdFx0d2lkZ2V0RXZlbnRQcmVmaXg6IGV4aXN0aW5nQ29uc3RydWN0b3IgPyAoIGJhc2VQcm90b3R5cGUud2lkZ2V0RXZlbnRQcmVmaXggfHwgbmFtZSApIDogbmFtZVxuXHR9LCBwcm94aWVkUHJvdG90eXBlLCB7XG5cdFx0Y29uc3RydWN0b3I6IGNvbnN0cnVjdG9yLFxuXHRcdG5hbWVzcGFjZTogbmFtZXNwYWNlLFxuXHRcdHdpZGdldE5hbWU6IG5hbWUsXG5cdFx0d2lkZ2V0RnVsbE5hbWU6IGZ1bGxOYW1lXG5cdH0gKTtcblxuXHQvLyBJZiB0aGlzIHdpZGdldCBpcyBiZWluZyByZWRlZmluZWQgdGhlbiB3ZSBuZWVkIHRvIGZpbmQgYWxsIHdpZGdldHMgdGhhdFxuXHQvLyBhcmUgaW5oZXJpdGluZyBmcm9tIGl0IGFuZCByZWRlZmluZSBhbGwgb2YgdGhlbSBzbyB0aGF0IHRoZXkgaW5oZXJpdCBmcm9tXG5cdC8vIHRoZSBuZXcgdmVyc2lvbiBvZiB0aGlzIHdpZGdldC4gV2UncmUgZXNzZW50aWFsbHkgdHJ5aW5nIHRvIHJlcGxhY2Ugb25lXG5cdC8vIGxldmVsIGluIHRoZSBwcm90b3R5cGUgY2hhaW4uXG5cdGlmICggZXhpc3RpbmdDb25zdHJ1Y3RvciApIHtcblx0XHQkLmVhY2goIGV4aXN0aW5nQ29uc3RydWN0b3IuX2NoaWxkQ29uc3RydWN0b3JzLCBmdW5jdGlvbiggaSwgY2hpbGQgKSB7XG5cdFx0XHR2YXIgY2hpbGRQcm90b3R5cGUgPSBjaGlsZC5wcm90b3R5cGU7XG5cblx0XHRcdC8vIFJlZGVmaW5lIHRoZSBjaGlsZCB3aWRnZXQgdXNpbmcgdGhlIHNhbWUgcHJvdG90eXBlIHRoYXQgd2FzXG5cdFx0XHQvLyBvcmlnaW5hbGx5IHVzZWQsIGJ1dCBpbmhlcml0IGZyb20gdGhlIG5ldyB2ZXJzaW9uIG9mIHRoZSBiYXNlXG5cdFx0XHQkLndpZGdldCggY2hpbGRQcm90b3R5cGUubmFtZXNwYWNlICsgXCIuXCIgKyBjaGlsZFByb3RvdHlwZS53aWRnZXROYW1lLCBjb25zdHJ1Y3Rvcixcblx0XHRcdFx0Y2hpbGQuX3Byb3RvICk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBsaXN0IG9mIGV4aXN0aW5nIGNoaWxkIGNvbnN0cnVjdG9ycyBmcm9tIHRoZSBvbGQgY29uc3RydWN0b3Jcblx0XHQvLyBzbyB0aGUgb2xkIGNoaWxkIGNvbnN0cnVjdG9ycyBjYW4gYmUgZ2FyYmFnZSBjb2xsZWN0ZWRcblx0XHRkZWxldGUgZXhpc3RpbmdDb25zdHJ1Y3Rvci5fY2hpbGRDb25zdHJ1Y3RvcnM7XG5cdH0gZWxzZSB7XG5cdFx0YmFzZS5fY2hpbGRDb25zdHJ1Y3RvcnMucHVzaCggY29uc3RydWN0b3IgKTtcblx0fVxuXG5cdCQud2lkZ2V0LmJyaWRnZSggbmFtZSwgY29uc3RydWN0b3IgKTtcblxuXHRyZXR1cm4gY29uc3RydWN0b3I7XG59O1xuXG4kLndpZGdldC5leHRlbmQgPSBmdW5jdGlvbiggdGFyZ2V0ICkge1xuXHR2YXIgaW5wdXQgPSB3aWRnZXRTbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKTtcblx0dmFyIGlucHV0SW5kZXggPSAwO1xuXHR2YXIgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG5cdHZhciBrZXk7XG5cdHZhciB2YWx1ZTtcblxuXHRmb3IgKCA7IGlucHV0SW5kZXggPCBpbnB1dExlbmd0aDsgaW5wdXRJbmRleCsrICkge1xuXHRcdGZvciAoIGtleSBpbiBpbnB1dFsgaW5wdXRJbmRleCBdICkge1xuXHRcdFx0dmFsdWUgPSBpbnB1dFsgaW5wdXRJbmRleCBdWyBrZXkgXTtcblx0XHRcdGlmICggaW5wdXRbIGlucHV0SW5kZXggXS5oYXNPd25Qcm9wZXJ0eSgga2V5ICkgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHQvLyBDbG9uZSBvYmplY3RzXG5cdFx0XHRcdGlmICggJC5pc1BsYWluT2JqZWN0KCB2YWx1ZSApICkge1xuXHRcdFx0XHRcdHRhcmdldFsga2V5IF0gPSAkLmlzUGxhaW5PYmplY3QoIHRhcmdldFsga2V5IF0gKSA/XG5cdFx0XHRcdFx0XHQkLndpZGdldC5leHRlbmQoIHt9LCB0YXJnZXRbIGtleSBdLCB2YWx1ZSApIDpcblxuXHRcdFx0XHRcdFx0Ly8gRG9uJ3QgZXh0ZW5kIHN0cmluZ3MsIGFycmF5cywgZXRjLiB3aXRoIG9iamVjdHNcblx0XHRcdFx0XHRcdCQud2lkZ2V0LmV4dGVuZCgge30sIHZhbHVlICk7XG5cblx0XHRcdFx0Ly8gQ29weSBldmVyeXRoaW5nIGVsc2UgYnkgcmVmZXJlbmNlXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGFyZ2V0WyBrZXkgXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG4kLndpZGdldC5icmlkZ2UgPSBmdW5jdGlvbiggbmFtZSwgb2JqZWN0ICkge1xuXHR2YXIgZnVsbE5hbWUgPSBvYmplY3QucHJvdG90eXBlLndpZGdldEZ1bGxOYW1lIHx8IG5hbWU7XG5cdCQuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXHRcdHZhciBpc01ldGhvZENhbGwgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIjtcblx0XHR2YXIgYXJncyA9IHdpZGdldFNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApO1xuXHRcdHZhciByZXR1cm5WYWx1ZSA9IHRoaXM7XG5cblx0XHRpZiAoIGlzTWV0aG9kQ2FsbCApIHtcblxuXHRcdFx0Ly8gSWYgdGhpcyBpcyBhbiBlbXB0eSBjb2xsZWN0aW9uLCB3ZSBuZWVkIHRvIGhhdmUgdGhlIGluc3RhbmNlIG1ldGhvZFxuXHRcdFx0Ly8gcmV0dXJuIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIHRoZSBqUXVlcnkgaW5zdGFuY2Vcblx0XHRcdGlmICggIXRoaXMubGVuZ3RoICYmIG9wdGlvbnMgPT09IFwiaW5zdGFuY2VcIiApIHtcblx0XHRcdFx0cmV0dXJuVmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciBtZXRob2RWYWx1ZTtcblx0XHRcdFx0XHR2YXIgaW5zdGFuY2UgPSAkLmRhdGEoIHRoaXMsIGZ1bGxOYW1lICk7XG5cblx0XHRcdFx0XHRpZiAoIG9wdGlvbnMgPT09IFwiaW5zdGFuY2VcIiApIHtcblx0XHRcdFx0XHRcdHJldHVyblZhbHVlID0gaW5zdGFuY2U7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCAhaW5zdGFuY2UgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJC5lcnJvciggXCJjYW5ub3QgY2FsbCBtZXRob2RzIG9uIFwiICsgbmFtZSArXG5cdFx0XHRcdFx0XHRcdFwiIHByaW9yIHRvIGluaXRpYWxpemF0aW9uOyBcIiArXG5cdFx0XHRcdFx0XHRcdFwiYXR0ZW1wdGVkIHRvIGNhbGwgbWV0aG9kICdcIiArIG9wdGlvbnMgKyBcIidcIiApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggISQuaXNGdW5jdGlvbiggaW5zdGFuY2VbIG9wdGlvbnMgXSApIHx8IG9wdGlvbnMuY2hhckF0KCAwICkgPT09IFwiX1wiICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICQuZXJyb3IoIFwibm8gc3VjaCBtZXRob2QgJ1wiICsgb3B0aW9ucyArIFwiJyBmb3IgXCIgKyBuYW1lICtcblx0XHRcdFx0XHRcdFx0XCIgd2lkZ2V0IGluc3RhbmNlXCIgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRtZXRob2RWYWx1ZSA9IGluc3RhbmNlWyBvcHRpb25zIF0uYXBwbHkoIGluc3RhbmNlLCBhcmdzICk7XG5cblx0XHRcdFx0XHRpZiAoIG1ldGhvZFZhbHVlICE9PSBpbnN0YW5jZSAmJiBtZXRob2RWYWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuVmFsdWUgPSBtZXRob2RWYWx1ZSAmJiBtZXRob2RWYWx1ZS5qcXVlcnkgP1xuXHRcdFx0XHRcdFx0XHRyZXR1cm5WYWx1ZS5wdXNoU3RhY2soIG1ldGhvZFZhbHVlLmdldCgpICkgOlxuXHRcdFx0XHRcdFx0XHRtZXRob2RWYWx1ZTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBBbGxvdyBtdWx0aXBsZSBoYXNoZXMgdG8gYmUgcGFzc2VkIG9uIGluaXRcblx0XHRcdGlmICggYXJncy5sZW5ndGggKSB7XG5cdFx0XHRcdG9wdGlvbnMgPSAkLndpZGdldC5leHRlbmQuYXBwbHkoIG51bGwsIFsgb3B0aW9ucyBdLmNvbmNhdCggYXJncyApICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBpbnN0YW5jZSA9ICQuZGF0YSggdGhpcywgZnVsbE5hbWUgKTtcblx0XHRcdFx0aWYgKCBpbnN0YW5jZSApIHtcblx0XHRcdFx0XHRpbnN0YW5jZS5vcHRpb24oIG9wdGlvbnMgfHwge30gKTtcblx0XHRcdFx0XHRpZiAoIGluc3RhbmNlLl9pbml0ICkge1xuXHRcdFx0XHRcdFx0aW5zdGFuY2UuX2luaXQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JC5kYXRhKCB0aGlzLCBmdWxsTmFtZSwgbmV3IG9iamVjdCggb3B0aW9ucywgdGhpcyApICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmV0dXJuVmFsdWU7XG5cdH07XG59O1xuXG4kLldpZGdldCA9IGZ1bmN0aW9uKCAvKiBvcHRpb25zLCBlbGVtZW50ICovICkge307XG4kLldpZGdldC5fY2hpbGRDb25zdHJ1Y3RvcnMgPSBbXTtcblxuJC5XaWRnZXQucHJvdG90eXBlID0ge1xuXHR3aWRnZXROYW1lOiBcIndpZGdldFwiLFxuXHR3aWRnZXRFdmVudFByZWZpeDogXCJcIixcblx0ZGVmYXVsdEVsZW1lbnQ6IFwiPGRpdj5cIixcblxuXHRvcHRpb25zOiB7XG5cdFx0Y2xhc3Nlczoge30sXG5cdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXG5cdFx0Ly8gQ2FsbGJhY2tzXG5cdFx0Y3JlYXRlOiBudWxsXG5cdH0sXG5cblx0X2NyZWF0ZVdpZGdldDogZnVuY3Rpb24oIG9wdGlvbnMsIGVsZW1lbnQgKSB7XG5cdFx0ZWxlbWVudCA9ICQoIGVsZW1lbnQgfHwgdGhpcy5kZWZhdWx0RWxlbWVudCB8fCB0aGlzIClbIDAgXTtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCBlbGVtZW50ICk7XG5cdFx0dGhpcy51dWlkID0gd2lkZ2V0VXVpZCsrO1xuXHRcdHRoaXMuZXZlbnROYW1lc3BhY2UgPSBcIi5cIiArIHRoaXMud2lkZ2V0TmFtZSArIHRoaXMudXVpZDtcblxuXHRcdHRoaXMuYmluZGluZ3MgPSAkKCk7XG5cdFx0dGhpcy5ob3ZlcmFibGUgPSAkKCk7XG5cdFx0dGhpcy5mb2N1c2FibGUgPSAkKCk7XG5cdFx0dGhpcy5jbGFzc2VzRWxlbWVudExvb2t1cCA9IHt9O1xuXG5cdFx0aWYgKCBlbGVtZW50ICE9PSB0aGlzICkge1xuXHRcdFx0JC5kYXRhKCBlbGVtZW50LCB0aGlzLndpZGdldEZ1bGxOYW1lLCB0aGlzICk7XG5cdFx0XHR0aGlzLl9vbiggdHJ1ZSwgdGhpcy5lbGVtZW50LCB7XG5cdFx0XHRcdHJlbW92ZTogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHRcdGlmICggZXZlbnQudGFyZ2V0ID09PSBlbGVtZW50ICkge1xuXHRcdFx0XHRcdFx0dGhpcy5kZXN0cm95KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0XHR0aGlzLmRvY3VtZW50ID0gJCggZWxlbWVudC5zdHlsZSA/XG5cblx0XHRcdFx0Ly8gRWxlbWVudCB3aXRoaW4gdGhlIGRvY3VtZW50XG5cdFx0XHRcdGVsZW1lbnQub3duZXJEb2N1bWVudCA6XG5cblx0XHRcdFx0Ly8gRWxlbWVudCBpcyB3aW5kb3cgb3IgZG9jdW1lbnRcblx0XHRcdFx0ZWxlbWVudC5kb2N1bWVudCB8fCBlbGVtZW50ICk7XG5cdFx0XHR0aGlzLndpbmRvdyA9ICQoIHRoaXMuZG9jdW1lbnRbIDAgXS5kZWZhdWx0VmlldyB8fCB0aGlzLmRvY3VtZW50WyAwIF0ucGFyZW50V2luZG93ICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5vcHRpb25zID0gJC53aWRnZXQuZXh0ZW5kKCB7fSxcblx0XHRcdHRoaXMub3B0aW9ucyxcblx0XHRcdHRoaXMuX2dldENyZWF0ZU9wdGlvbnMoKSxcblx0XHRcdG9wdGlvbnMgKTtcblxuXHRcdHRoaXMuX2NyZWF0ZSgpO1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuZGlzYWJsZWQgKSB7XG5cdFx0XHR0aGlzLl9zZXRPcHRpb25EaXNhYmxlZCggdGhpcy5vcHRpb25zLmRpc2FibGVkICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fdHJpZ2dlciggXCJjcmVhdGVcIiwgbnVsbCwgdGhpcy5fZ2V0Q3JlYXRlRXZlbnREYXRhKCkgKTtcblx0XHR0aGlzLl9pbml0KCk7XG5cdH0sXG5cblx0X2dldENyZWF0ZU9wdGlvbnM6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7fTtcblx0fSxcblxuXHRfZ2V0Q3JlYXRlRXZlbnREYXRhOiAkLm5vb3AsXG5cblx0X2NyZWF0ZTogJC5ub29wLFxuXG5cdF9pbml0OiAkLm5vb3AsXG5cblx0ZGVzdHJveTogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXG5cdFx0dGhpcy5fZGVzdHJveSgpO1xuXHRcdCQuZWFjaCggdGhpcy5jbGFzc2VzRWxlbWVudExvb2t1cCwgZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0XHR0aGF0Ll9yZW1vdmVDbGFzcyggdmFsdWUsIGtleSApO1xuXHRcdH0gKTtcblxuXHRcdC8vIFdlIGNhbiBwcm9iYWJseSByZW1vdmUgdGhlIHVuYmluZCBjYWxscyBpbiAyLjBcblx0XHQvLyBhbGwgZXZlbnQgYmluZGluZ3Mgc2hvdWxkIGdvIHRocm91Z2ggdGhpcy5fb24oKVxuXHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0Lm9mZiggdGhpcy5ldmVudE5hbWVzcGFjZSApXG5cdFx0XHQucmVtb3ZlRGF0YSggdGhpcy53aWRnZXRGdWxsTmFtZSApO1xuXHRcdHRoaXMud2lkZ2V0KClcblx0XHRcdC5vZmYoIHRoaXMuZXZlbnROYW1lc3BhY2UgKVxuXHRcdFx0LnJlbW92ZUF0dHIoIFwiYXJpYS1kaXNhYmxlZFwiICk7XG5cblx0XHQvLyBDbGVhbiB1cCBldmVudHMgYW5kIHN0YXRlc1xuXHRcdHRoaXMuYmluZGluZ3Mub2ZmKCB0aGlzLmV2ZW50TmFtZXNwYWNlICk7XG5cdH0sXG5cblx0X2Rlc3Ryb3k6ICQubm9vcCxcblxuXHR3aWRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH0sXG5cblx0b3B0aW9uOiBmdW5jdGlvbigga2V5LCB2YWx1ZSApIHtcblx0XHR2YXIgb3B0aW9ucyA9IGtleTtcblx0XHR2YXIgcGFydHM7XG5cdFx0dmFyIGN1ck9wdGlvbjtcblx0XHR2YXIgaTtcblxuXHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCA9PT0gMCApIHtcblxuXHRcdFx0Ly8gRG9uJ3QgcmV0dXJuIGEgcmVmZXJlbmNlIHRvIHRoZSBpbnRlcm5hbCBoYXNoXG5cdFx0XHRyZXR1cm4gJC53aWRnZXQuZXh0ZW5kKCB7fSwgdGhpcy5vcHRpb25zICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiICkge1xuXG5cdFx0XHQvLyBIYW5kbGUgbmVzdGVkIGtleXMsIGUuZy4sIFwiZm9vLmJhclwiID0+IHsgZm9vOiB7IGJhcjogX19fIH0gfVxuXHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0cGFydHMgPSBrZXkuc3BsaXQoIFwiLlwiICk7XG5cdFx0XHRrZXkgPSBwYXJ0cy5zaGlmdCgpO1xuXHRcdFx0aWYgKCBwYXJ0cy5sZW5ndGggKSB7XG5cdFx0XHRcdGN1ck9wdGlvbiA9IG9wdGlvbnNbIGtleSBdID0gJC53aWRnZXQuZXh0ZW5kKCB7fSwgdGhpcy5vcHRpb25zWyBrZXkgXSApO1xuXHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKyApIHtcblx0XHRcdFx0XHRjdXJPcHRpb25bIHBhcnRzWyBpIF0gXSA9IGN1ck9wdGlvblsgcGFydHNbIGkgXSBdIHx8IHt9O1xuXHRcdFx0XHRcdGN1ck9wdGlvbiA9IGN1ck9wdGlvblsgcGFydHNbIGkgXSBdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGtleSA9IHBhcnRzLnBvcCgpO1xuXHRcdFx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGN1ck9wdGlvblsga2V5IF0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjdXJPcHRpb25bIGtleSBdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN1ck9wdGlvblsga2V5IF0gPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCA9PT0gMSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25zWyBrZXkgXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IHRoaXMub3B0aW9uc1sga2V5IF07XG5cdFx0XHRcdH1cblx0XHRcdFx0b3B0aW9uc1sga2V5IF0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLl9zZXRPcHRpb25zKCBvcHRpb25zICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRfc2V0T3B0aW9uczogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cdFx0dmFyIGtleTtcblxuXHRcdGZvciAoIGtleSBpbiBvcHRpb25zICkge1xuXHRcdFx0dGhpcy5fc2V0T3B0aW9uKCBrZXksIG9wdGlvbnNbIGtleSBdICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0X3NldE9wdGlvbjogZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0aWYgKCBrZXkgPT09IFwiY2xhc3Nlc1wiICkge1xuXHRcdFx0dGhpcy5fc2V0T3B0aW9uQ2xhc3NlcyggdmFsdWUgKTtcblx0XHR9XG5cblx0XHR0aGlzLm9wdGlvbnNbIGtleSBdID0gdmFsdWU7XG5cblx0XHRpZiAoIGtleSA9PT0gXCJkaXNhYmxlZFwiICkge1xuXHRcdFx0dGhpcy5fc2V0T3B0aW9uRGlzYWJsZWQoIHZhbHVlICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0X3NldE9wdGlvbkNsYXNzZXM6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR2YXIgY2xhc3NLZXksIGVsZW1lbnRzLCBjdXJyZW50RWxlbWVudHM7XG5cblx0XHRmb3IgKCBjbGFzc0tleSBpbiB2YWx1ZSApIHtcblx0XHRcdGN1cnJlbnRFbGVtZW50cyA9IHRoaXMuY2xhc3Nlc0VsZW1lbnRMb29rdXBbIGNsYXNzS2V5IF07XG5cdFx0XHRpZiAoIHZhbHVlWyBjbGFzc0tleSBdID09PSB0aGlzLm9wdGlvbnMuY2xhc3Nlc1sgY2xhc3NLZXkgXSB8fFxuXHRcdFx0XHRcdCFjdXJyZW50RWxlbWVudHMgfHxcblx0XHRcdFx0XHQhY3VycmVudEVsZW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdlIGFyZSBkb2luZyB0aGlzIHRvIGNyZWF0ZSBhIG5ldyBqUXVlcnkgb2JqZWN0IGJlY2F1c2UgdGhlIF9yZW1vdmVDbGFzcygpIGNhbGxcblx0XHRcdC8vIG9uIHRoZSBuZXh0IGxpbmUgaXMgZ29pbmcgdG8gZGVzdHJveSB0aGUgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IGVsZW1lbnRzIGJlaW5nXG5cdFx0XHQvLyB0cmFja2VkLiBXZSBuZWVkIHRvIHNhdmUgYSBjb3B5IG9mIHRoaXMgY29sbGVjdGlvbiBzbyB0aGF0IHdlIGNhbiBhZGQgdGhlIG5ldyBjbGFzc2VzXG5cdFx0XHQvLyBiZWxvdy5cblx0XHRcdGVsZW1lbnRzID0gJCggY3VycmVudEVsZW1lbnRzLmdldCgpICk7XG5cdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyggY3VycmVudEVsZW1lbnRzLCBjbGFzc0tleSApO1xuXG5cdFx0XHQvLyBXZSBkb24ndCB1c2UgX2FkZENsYXNzKCkgaGVyZSwgYmVjYXVzZSB0aGF0IHVzZXMgdGhpcy5vcHRpb25zLmNsYXNzZXNcblx0XHRcdC8vIGZvciBnZW5lcmF0aW5nIHRoZSBzdHJpbmcgb2YgY2xhc3Nlcy4gV2Ugd2FudCB0byB1c2UgdGhlIHZhbHVlIHBhc3NlZCBpbiBmcm9tXG5cdFx0XHQvLyBfc2V0T3B0aW9uKCksIHRoaXMgaXMgdGhlIG5ldyB2YWx1ZSBvZiB0aGUgY2xhc3NlcyBvcHRpb24gd2hpY2ggd2FzIHBhc3NlZCB0b1xuXHRcdFx0Ly8gX3NldE9wdGlvbigpLiBXZSBwYXNzIHRoaXMgdmFsdWUgZGlyZWN0bHkgdG8gX2NsYXNzZXMoKS5cblx0XHRcdGVsZW1lbnRzLmFkZENsYXNzKCB0aGlzLl9jbGFzc2VzKCB7XG5cdFx0XHRcdGVsZW1lbnQ6IGVsZW1lbnRzLFxuXHRcdFx0XHRrZXlzOiBjbGFzc0tleSxcblx0XHRcdFx0Y2xhc3NlczogdmFsdWUsXG5cdFx0XHRcdGFkZDogdHJ1ZVxuXHRcdFx0fSApICk7XG5cdFx0fVxuXHR9LFxuXG5cdF9zZXRPcHRpb25EaXNhYmxlZDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHRoaXMuX3RvZ2dsZUNsYXNzKCB0aGlzLndpZGdldCgpLCB0aGlzLndpZGdldEZ1bGxOYW1lICsgXCItZGlzYWJsZWRcIiwgbnVsbCwgISF2YWx1ZSApO1xuXG5cdFx0Ly8gSWYgdGhlIHdpZGdldCBpcyBiZWNvbWluZyBkaXNhYmxlZCwgdGhlbiBub3RoaW5nIGlzIGludGVyYWN0aXZlXG5cdFx0aWYgKCB2YWx1ZSApIHtcblx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKCB0aGlzLmhvdmVyYWJsZSwgbnVsbCwgXCJ1aS1zdGF0ZS1ob3ZlclwiICk7XG5cdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyggdGhpcy5mb2N1c2FibGUsIG51bGwsIFwidWktc3RhdGUtZm9jdXNcIiApO1xuXHRcdH1cblx0fSxcblxuXHRlbmFibGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLl9zZXRPcHRpb25zKCB7IGRpc2FibGVkOiBmYWxzZSB9ICk7XG5cdH0sXG5cblx0ZGlzYWJsZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3NldE9wdGlvbnMoIHsgZGlzYWJsZWQ6IHRydWUgfSApO1xuXHR9LFxuXG5cdF9jbGFzc2VzOiBmdW5jdGlvbiggb3B0aW9ucyApIHtcblx0XHR2YXIgZnVsbCA9IFtdO1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCgge1xuXHRcdFx0ZWxlbWVudDogdGhpcy5lbGVtZW50LFxuXHRcdFx0Y2xhc3NlczogdGhpcy5vcHRpb25zLmNsYXNzZXMgfHwge31cblx0XHR9LCBvcHRpb25zICk7XG5cblx0XHRmdW5jdGlvbiBwcm9jZXNzQ2xhc3NTdHJpbmcoIGNsYXNzZXMsIGNoZWNrT3B0aW9uICkge1xuXHRcdFx0dmFyIGN1cnJlbnQsIGk7XG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdGN1cnJlbnQgPSB0aGF0LmNsYXNzZXNFbGVtZW50TG9va3VwWyBjbGFzc2VzWyBpIF0gXSB8fCAkKCk7XG5cdFx0XHRcdGlmICggb3B0aW9ucy5hZGQgKSB7XG5cdFx0XHRcdFx0Y3VycmVudCA9ICQoICQudW5pcXVlKCBjdXJyZW50LmdldCgpLmNvbmNhdCggb3B0aW9ucy5lbGVtZW50LmdldCgpICkgKSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN1cnJlbnQgPSAkKCBjdXJyZW50Lm5vdCggb3B0aW9ucy5lbGVtZW50ICkuZ2V0KCkgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGF0LmNsYXNzZXNFbGVtZW50TG9va3VwWyBjbGFzc2VzWyBpIF0gXSA9IGN1cnJlbnQ7XG5cdFx0XHRcdGZ1bGwucHVzaCggY2xhc3Nlc1sgaSBdICk7XG5cdFx0XHRcdGlmICggY2hlY2tPcHRpb24gJiYgb3B0aW9ucy5jbGFzc2VzWyBjbGFzc2VzWyBpIF0gXSApIHtcblx0XHRcdFx0XHRmdWxsLnB1c2goIG9wdGlvbnMuY2xhc3Nlc1sgY2xhc3Nlc1sgaSBdIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuX29uKCBvcHRpb25zLmVsZW1lbnQsIHtcblx0XHRcdFwicmVtb3ZlXCI6IFwiX3VudHJhY2tDbGFzc2VzRWxlbWVudFwiXG5cdFx0fSApO1xuXG5cdFx0aWYgKCBvcHRpb25zLmtleXMgKSB7XG5cdFx0XHRwcm9jZXNzQ2xhc3NTdHJpbmcoIG9wdGlvbnMua2V5cy5tYXRjaCggL1xcUysvZyApIHx8IFtdLCB0cnVlICk7XG5cdFx0fVxuXHRcdGlmICggb3B0aW9ucy5leHRyYSApIHtcblx0XHRcdHByb2Nlc3NDbGFzc1N0cmluZyggb3B0aW9ucy5leHRyYS5tYXRjaCggL1xcUysvZyApIHx8IFtdICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZ1bGwuam9pbiggXCIgXCIgKTtcblx0fSxcblxuXHRfdW50cmFja0NsYXNzZXNFbGVtZW50OiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdCQuZWFjaCggdGhhdC5jbGFzc2VzRWxlbWVudExvb2t1cCwgZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0XHRpZiAoICQuaW5BcnJheSggZXZlbnQudGFyZ2V0LCB2YWx1ZSApICE9PSAtMSApIHtcblx0XHRcdFx0dGhhdC5jbGFzc2VzRWxlbWVudExvb2t1cFsga2V5IF0gPSAkKCB2YWx1ZS5ub3QoIGV2ZW50LnRhcmdldCApLmdldCgpICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdF9yZW1vdmVDbGFzczogZnVuY3Rpb24oIGVsZW1lbnQsIGtleXMsIGV4dHJhICkge1xuXHRcdHJldHVybiB0aGlzLl90b2dnbGVDbGFzcyggZWxlbWVudCwga2V5cywgZXh0cmEsIGZhbHNlICk7XG5cdH0sXG5cblx0X2FkZENsYXNzOiBmdW5jdGlvbiggZWxlbWVudCwga2V5cywgZXh0cmEgKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3RvZ2dsZUNsYXNzKCBlbGVtZW50LCBrZXlzLCBleHRyYSwgdHJ1ZSApO1xuXHR9LFxuXG5cdF90b2dnbGVDbGFzczogZnVuY3Rpb24oIGVsZW1lbnQsIGtleXMsIGV4dHJhLCBhZGQgKSB7XG5cdFx0YWRkID0gKCB0eXBlb2YgYWRkID09PSBcImJvb2xlYW5cIiApID8gYWRkIDogZXh0cmE7XG5cdFx0dmFyIHNoaWZ0ID0gKCB0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIiB8fCBlbGVtZW50ID09PSBudWxsICksXG5cdFx0XHRvcHRpb25zID0ge1xuXHRcdFx0XHRleHRyYTogc2hpZnQgPyBrZXlzIDogZXh0cmEsXG5cdFx0XHRcdGtleXM6IHNoaWZ0ID8gZWxlbWVudCA6IGtleXMsXG5cdFx0XHRcdGVsZW1lbnQ6IHNoaWZ0ID8gdGhpcy5lbGVtZW50IDogZWxlbWVudCxcblx0XHRcdFx0YWRkOiBhZGRcblx0XHRcdH07XG5cdFx0b3B0aW9ucy5lbGVtZW50LnRvZ2dsZUNsYXNzKCB0aGlzLl9jbGFzc2VzKCBvcHRpb25zICksIGFkZCApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdF9vbjogZnVuY3Rpb24oIHN1cHByZXNzRGlzYWJsZWRDaGVjaywgZWxlbWVudCwgaGFuZGxlcnMgKSB7XG5cdFx0dmFyIGRlbGVnYXRlRWxlbWVudDtcblx0XHR2YXIgaW5zdGFuY2UgPSB0aGlzO1xuXG5cdFx0Ly8gTm8gc3VwcHJlc3NEaXNhYmxlZENoZWNrIGZsYWcsIHNodWZmbGUgYXJndW1lbnRzXG5cdFx0aWYgKCB0eXBlb2Ygc3VwcHJlc3NEaXNhYmxlZENoZWNrICE9PSBcImJvb2xlYW5cIiApIHtcblx0XHRcdGhhbmRsZXJzID0gZWxlbWVudDtcblx0XHRcdGVsZW1lbnQgPSBzdXBwcmVzc0Rpc2FibGVkQ2hlY2s7XG5cdFx0XHRzdXBwcmVzc0Rpc2FibGVkQ2hlY2sgPSBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBObyBlbGVtZW50IGFyZ3VtZW50LCBzaHVmZmxlIGFuZCB1c2UgdGhpcy5lbGVtZW50XG5cdFx0aWYgKCAhaGFuZGxlcnMgKSB7XG5cdFx0XHRoYW5kbGVycyA9IGVsZW1lbnQ7XG5cdFx0XHRlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuXHRcdFx0ZGVsZWdhdGVFbGVtZW50ID0gdGhpcy53aWRnZXQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudCA9IGRlbGVnYXRlRWxlbWVudCA9ICQoIGVsZW1lbnQgKTtcblx0XHRcdHRoaXMuYmluZGluZ3MgPSB0aGlzLmJpbmRpbmdzLmFkZCggZWxlbWVudCApO1xuXHRcdH1cblxuXHRcdCQuZWFjaCggaGFuZGxlcnMsIGZ1bmN0aW9uKCBldmVudCwgaGFuZGxlciApIHtcblx0XHRcdGZ1bmN0aW9uIGhhbmRsZXJQcm94eSgpIHtcblxuXHRcdFx0XHQvLyBBbGxvdyB3aWRnZXRzIHRvIGN1c3RvbWl6ZSB0aGUgZGlzYWJsZWQgaGFuZGxpbmdcblx0XHRcdFx0Ly8gLSBkaXNhYmxlZCBhcyBhbiBhcnJheSBpbnN0ZWFkIG9mIGJvb2xlYW5cblx0XHRcdFx0Ly8gLSBkaXNhYmxlZCBjbGFzcyBhcyBtZXRob2QgZm9yIGRpc2FibGluZyBpbmRpdmlkdWFsIHBhcnRzXG5cdFx0XHRcdGlmICggIXN1cHByZXNzRGlzYWJsZWRDaGVjayAmJlxuXHRcdFx0XHRcdFx0KCBpbnN0YW5jZS5vcHRpb25zLmRpc2FibGVkID09PSB0cnVlIHx8XG5cdFx0XHRcdFx0XHQkKCB0aGlzICkuaGFzQ2xhc3MoIFwidWktc3RhdGUtZGlzYWJsZWRcIiApICkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAoIHR5cGVvZiBoYW5kbGVyID09PSBcInN0cmluZ1wiID8gaW5zdGFuY2VbIGhhbmRsZXIgXSA6IGhhbmRsZXIgKVxuXHRcdFx0XHRcdC5hcHBseSggaW5zdGFuY2UsIGFyZ3VtZW50cyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb3B5IHRoZSBndWlkIHNvIGRpcmVjdCB1bmJpbmRpbmcgd29ya3Ncblx0XHRcdGlmICggdHlwZW9mIGhhbmRsZXIgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdGhhbmRsZXJQcm94eS5ndWlkID0gaGFuZGxlci5ndWlkID1cblx0XHRcdFx0XHRoYW5kbGVyLmd1aWQgfHwgaGFuZGxlclByb3h5Lmd1aWQgfHwgJC5ndWlkKys7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBtYXRjaCA9IGV2ZW50Lm1hdGNoKCAvXihbXFx3Oi1dKilcXHMqKC4qKSQvICk7XG5cdFx0XHR2YXIgZXZlbnROYW1lID0gbWF0Y2hbIDEgXSArIGluc3RhbmNlLmV2ZW50TmFtZXNwYWNlO1xuXHRcdFx0dmFyIHNlbGVjdG9yID0gbWF0Y2hbIDIgXTtcblxuXHRcdFx0aWYgKCBzZWxlY3RvciApIHtcblx0XHRcdFx0ZGVsZWdhdGVFbGVtZW50Lm9uKCBldmVudE5hbWUsIHNlbGVjdG9yLCBoYW5kbGVyUHJveHkgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQub24oIGV2ZW50TmFtZSwgaGFuZGxlclByb3h5ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdF9vZmY6IGZ1bmN0aW9uKCBlbGVtZW50LCBldmVudE5hbWUgKSB7XG5cdFx0ZXZlbnROYW1lID0gKCBldmVudE5hbWUgfHwgXCJcIiApLnNwbGl0KCBcIiBcIiApLmpvaW4oIHRoaXMuZXZlbnROYW1lc3BhY2UgKyBcIiBcIiApICtcblx0XHRcdHRoaXMuZXZlbnROYW1lc3BhY2U7XG5cdFx0ZWxlbWVudC5vZmYoIGV2ZW50TmFtZSApLm9mZiggZXZlbnROYW1lICk7XG5cblx0XHQvLyBDbGVhciB0aGUgc3RhY2sgdG8gYXZvaWQgbWVtb3J5IGxlYWtzICgjMTAwNTYpXG5cdFx0dGhpcy5iaW5kaW5ncyA9ICQoIHRoaXMuYmluZGluZ3Mubm90KCBlbGVtZW50ICkuZ2V0KCkgKTtcblx0XHR0aGlzLmZvY3VzYWJsZSA9ICQoIHRoaXMuZm9jdXNhYmxlLm5vdCggZWxlbWVudCApLmdldCgpICk7XG5cdFx0dGhpcy5ob3ZlcmFibGUgPSAkKCB0aGlzLmhvdmVyYWJsZS5ub3QoIGVsZW1lbnQgKS5nZXQoKSApO1xuXHR9LFxuXG5cdF9kZWxheTogZnVuY3Rpb24oIGhhbmRsZXIsIGRlbGF5ICkge1xuXHRcdGZ1bmN0aW9uIGhhbmRsZXJQcm94eSgpIHtcblx0XHRcdHJldHVybiAoIHR5cGVvZiBoYW5kbGVyID09PSBcInN0cmluZ1wiID8gaW5zdGFuY2VbIGhhbmRsZXIgXSA6IGhhbmRsZXIgKVxuXHRcdFx0XHQuYXBwbHkoIGluc3RhbmNlLCBhcmd1bWVudHMgKTtcblx0XHR9XG5cdFx0dmFyIGluc3RhbmNlID0gdGhpcztcblx0XHRyZXR1cm4gc2V0VGltZW91dCggaGFuZGxlclByb3h5LCBkZWxheSB8fCAwICk7XG5cdH0sXG5cblx0X2hvdmVyYWJsZTogZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG5cdFx0dGhpcy5ob3ZlcmFibGUgPSB0aGlzLmhvdmVyYWJsZS5hZGQoIGVsZW1lbnQgKTtcblx0XHR0aGlzLl9vbiggZWxlbWVudCwge1xuXHRcdFx0bW91c2VlbnRlcjogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyggJCggZXZlbnQuY3VycmVudFRhcmdldCApLCBudWxsLCBcInVpLXN0YXRlLWhvdmVyXCIgKTtcblx0XHRcdH0sXG5cdFx0XHRtb3VzZWxlYXZlOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKCAkKCBldmVudC5jdXJyZW50VGFyZ2V0ICksIG51bGwsIFwidWktc3RhdGUtaG92ZXJcIiApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRfZm9jdXNhYmxlOiBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHR0aGlzLmZvY3VzYWJsZSA9IHRoaXMuZm9jdXNhYmxlLmFkZCggZWxlbWVudCApO1xuXHRcdHRoaXMuX29uKCBlbGVtZW50LCB7XG5cdFx0XHRmb2N1c2luOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdHRoaXMuX2FkZENsYXNzKCAkKCBldmVudC5jdXJyZW50VGFyZ2V0ICksIG51bGwsIFwidWktc3RhdGUtZm9jdXNcIiApO1xuXHRcdFx0fSxcblx0XHRcdGZvY3Vzb3V0OiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKCAkKCBldmVudC5jdXJyZW50VGFyZ2V0ICksIG51bGwsIFwidWktc3RhdGUtZm9jdXNcIiApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRfdHJpZ2dlcjogZnVuY3Rpb24oIHR5cGUsIGV2ZW50LCBkYXRhICkge1xuXHRcdHZhciBwcm9wLCBvcmlnO1xuXHRcdHZhciBjYWxsYmFjayA9IHRoaXMub3B0aW9uc1sgdHlwZSBdO1xuXG5cdFx0ZGF0YSA9IGRhdGEgfHwge307XG5cdFx0ZXZlbnQgPSAkLkV2ZW50KCBldmVudCApO1xuXHRcdGV2ZW50LnR5cGUgPSAoIHR5cGUgPT09IHRoaXMud2lkZ2V0RXZlbnRQcmVmaXggP1xuXHRcdFx0dHlwZSA6XG5cdFx0XHR0aGlzLndpZGdldEV2ZW50UHJlZml4ICsgdHlwZSApLnRvTG93ZXJDYXNlKCk7XG5cblx0XHQvLyBUaGUgb3JpZ2luYWwgZXZlbnQgbWF5IGNvbWUgZnJvbSBhbnkgZWxlbWVudFxuXHRcdC8vIHNvIHdlIG5lZWQgdG8gcmVzZXQgdGhlIHRhcmdldCBvbiB0aGUgbmV3IGV2ZW50XG5cdFx0ZXZlbnQudGFyZ2V0ID0gdGhpcy5lbGVtZW50WyAwIF07XG5cblx0XHQvLyBDb3B5IG9yaWdpbmFsIGV2ZW50IHByb3BlcnRpZXMgb3ZlciB0byB0aGUgbmV3IGV2ZW50XG5cdFx0b3JpZyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQ7XG5cdFx0aWYgKCBvcmlnICkge1xuXHRcdFx0Zm9yICggcHJvcCBpbiBvcmlnICkge1xuXHRcdFx0XHRpZiAoICEoIHByb3AgaW4gZXZlbnQgKSApIHtcblx0XHRcdFx0XHRldmVudFsgcHJvcCBdID0gb3JpZ1sgcHJvcCBdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoIGV2ZW50LCBkYXRhICk7XG5cdFx0cmV0dXJuICEoICQuaXNGdW5jdGlvbiggY2FsbGJhY2sgKSAmJlxuXHRcdFx0Y2FsbGJhY2suYXBwbHkoIHRoaXMuZWxlbWVudFsgMCBdLCBbIGV2ZW50IF0uY29uY2F0KCBkYXRhICkgKSA9PT0gZmFsc2UgfHxcblx0XHRcdGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpICk7XG5cdH1cbn07XG5cbiQuZWFjaCggeyBzaG93OiBcImZhZGVJblwiLCBoaWRlOiBcImZhZGVPdXRcIiB9LCBmdW5jdGlvbiggbWV0aG9kLCBkZWZhdWx0RWZmZWN0ICkge1xuXHQkLldpZGdldC5wcm90b3R5cGVbIFwiX1wiICsgbWV0aG9kIF0gPSBmdW5jdGlvbiggZWxlbWVudCwgb3B0aW9ucywgY2FsbGJhY2sgKSB7XG5cdFx0aWYgKCB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdG9wdGlvbnMgPSB7IGVmZmVjdDogb3B0aW9ucyB9O1xuXHRcdH1cblxuXHRcdHZhciBoYXNPcHRpb25zO1xuXHRcdHZhciBlZmZlY3ROYW1lID0gIW9wdGlvbnMgP1xuXHRcdFx0bWV0aG9kIDpcblx0XHRcdG9wdGlvbnMgPT09IHRydWUgfHwgdHlwZW9mIG9wdGlvbnMgPT09IFwibnVtYmVyXCIgP1xuXHRcdFx0XHRkZWZhdWx0RWZmZWN0IDpcblx0XHRcdFx0b3B0aW9ucy5lZmZlY3QgfHwgZGVmYXVsdEVmZmVjdDtcblxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRcdGlmICggdHlwZW9mIG9wdGlvbnMgPT09IFwibnVtYmVyXCIgKSB7XG5cdFx0XHRvcHRpb25zID0geyBkdXJhdGlvbjogb3B0aW9ucyB9O1xuXHRcdH1cblxuXHRcdGhhc09wdGlvbnMgPSAhJC5pc0VtcHR5T2JqZWN0KCBvcHRpb25zICk7XG5cdFx0b3B0aW9ucy5jb21wbGV0ZSA9IGNhbGxiYWNrO1xuXG5cdFx0aWYgKCBvcHRpb25zLmRlbGF5ICkge1xuXHRcdFx0ZWxlbWVudC5kZWxheSggb3B0aW9ucy5kZWxheSApO1xuXHRcdH1cblxuXHRcdGlmICggaGFzT3B0aW9ucyAmJiAkLmVmZmVjdHMgJiYgJC5lZmZlY3RzLmVmZmVjdFsgZWZmZWN0TmFtZSBdICkge1xuXHRcdFx0ZWxlbWVudFsgbWV0aG9kIF0oIG9wdGlvbnMgKTtcblx0XHR9IGVsc2UgaWYgKCBlZmZlY3ROYW1lICE9PSBtZXRob2QgJiYgZWxlbWVudFsgZWZmZWN0TmFtZSBdICkge1xuXHRcdFx0ZWxlbWVudFsgZWZmZWN0TmFtZSBdKCBvcHRpb25zLmR1cmF0aW9uLCBvcHRpb25zLmVhc2luZywgY2FsbGJhY2sgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudC5xdWV1ZSggZnVuY3Rpb24oIG5leHQgKSB7XG5cdFx0XHRcdCQoIHRoaXMgKVsgbWV0aG9kIF0oKTtcblx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKCBlbGVtZW50WyAwIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRuZXh0KCk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9O1xufSApO1xuXG5yZXR1cm4gJC53aWRnZXQ7XG5cbn0gKSApO1xuIiwiKCBmdW5jdGlvbiggZmFjdG9yeSApIHtcblx0aWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoIFsgXCJqcXVlcnlcIiwgXCIuL3ZlcnNpb25cIiBdLCBmYWN0b3J5ICk7XG5cdH0gZWxzZSB7XG5cblx0XHQvLyBCcm93c2VyIGdsb2JhbHNcblx0XHRmYWN0b3J5KCBqUXVlcnkgKTtcblx0fVxufSAoIGZ1bmN0aW9uKCAkICkge1xuXG4vLyBUaGlzIGZpbGUgaXMgZGVwcmVjYXRlZFxucmV0dXJuICQudWkuaWUgPSAhIS9tc2llIFtcXHcuXSsvLmV4ZWMoIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSApO1xufSApICk7XG4iLCIvKiFcbiAqIGpRdWVyeSBVSSBTbGlkZXIgMS4xMi4xXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqL1xuXG4vLz4+bGFiZWw6IFNsaWRlclxuLy8+Pmdyb3VwOiBXaWRnZXRzXG4vLz4+ZGVzY3JpcHRpb246IERpc3BsYXlzIGEgZmxleGlibGUgc2xpZGVyIHdpdGggcmFuZ2VzIGFuZCBhY2Nlc3NpYmlsaXR5IHZpYSBrZXlib2FyZC5cbi8vPj5kb2NzOiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9zbGlkZXIvXG4vLz4+ZGVtb3M6IGh0dHA6Ly9qcXVlcnl1aS5jb20vc2xpZGVyL1xuLy8+PmNzcy5zdHJ1Y3R1cmU6IC4uLy4uL3RoZW1lcy9iYXNlL2NvcmUuY3NzXG4vLz4+Y3NzLnN0cnVjdHVyZTogLi4vLi4vdGhlbWVzL2Jhc2Uvc2xpZGVyLmNzc1xuLy8+PmNzcy50aGVtZTogLi4vLi4vdGhlbWVzL2Jhc2UvdGhlbWUuY3NzXG5cbiggZnVuY3Rpb24oIGZhY3RvcnkgKSB7XG5cdGlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKCBbXG5cdFx0XHRcImpxdWVyeVwiLFxuXHRcdFx0XCIuL21vdXNlXCIsXG5cdFx0XHRcIi4uL2tleWNvZGVcIixcblx0XHRcdFwiLi4vdmVyc2lvblwiLFxuXHRcdFx0XCIuLi93aWRnZXRcIlxuXHRcdF0sIGZhY3RvcnkgKTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xuXHRcdGZhY3RvcnkoIGpRdWVyeSApO1xuXHR9XG59KCBmdW5jdGlvbiggJCApIHtcblxucmV0dXJuICQud2lkZ2V0KCBcInVpLnNsaWRlclwiLCAkLnVpLm1vdXNlLCB7XG5cdHZlcnNpb246IFwiMS4xMi4xXCIsXG5cdHdpZGdldEV2ZW50UHJlZml4OiBcInNsaWRlXCIsXG5cblx0b3B0aW9uczoge1xuXHRcdGFuaW1hdGU6IGZhbHNlLFxuXHRcdGNsYXNzZXM6IHtcblx0XHRcdFwidWktc2xpZGVyXCI6IFwidWktY29ybmVyLWFsbFwiLFxuXHRcdFx0XCJ1aS1zbGlkZXItaGFuZGxlXCI6IFwidWktY29ybmVyLWFsbFwiLFxuXG5cdFx0XHQvLyBOb3RlOiB1aS13aWRnZXQtaGVhZGVyIGlzbid0IHRoZSBtb3N0IGZpdHRpbmdseSBzZW1hbnRpYyBmcmFtZXdvcmsgY2xhc3MgZm9yIHRoaXNcblx0XHRcdC8vIGVsZW1lbnQsIGJ1dCB3b3JrZWQgYmVzdCB2aXN1YWxseSB3aXRoIGEgdmFyaWV0eSBvZiB0aGVtZXNcblx0XHRcdFwidWktc2xpZGVyLXJhbmdlXCI6IFwidWktY29ybmVyLWFsbCB1aS13aWRnZXQtaGVhZGVyXCJcblx0XHR9LFxuXHRcdGRpc3RhbmNlOiAwLFxuXHRcdG1heDogMTAwLFxuXHRcdG1pbjogMCxcblx0XHRvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG5cdFx0cmFuZ2U6IGZhbHNlLFxuXHRcdHN0ZXA6IDEsXG5cdFx0dmFsdWU6IDAsXG5cdFx0dmFsdWVzOiBudWxsLFxuXG5cdFx0Ly8gQ2FsbGJhY2tzXG5cdFx0Y2hhbmdlOiBudWxsLFxuXHRcdHNsaWRlOiBudWxsLFxuXHRcdHN0YXJ0OiBudWxsLFxuXHRcdHN0b3A6IG51bGxcblx0fSxcblxuXHQvLyBOdW1iZXIgb2YgcGFnZXMgaW4gYSBzbGlkZXJcblx0Ly8gKGhvdyBtYW55IHRpbWVzIGNhbiB5b3UgcGFnZSB1cC9kb3duIHRvIGdvIHRocm91Z2ggdGhlIHdob2xlIHJhbmdlKVxuXHRudW1QYWdlczogNSxcblxuXHRfY3JlYXRlOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLl9rZXlTbGlkaW5nID0gZmFsc2U7XG5cdFx0dGhpcy5fbW91c2VTbGlkaW5nID0gZmFsc2U7XG5cdFx0dGhpcy5fYW5pbWF0ZU9mZiA9IHRydWU7XG5cdFx0dGhpcy5faGFuZGxlSW5kZXggPSBudWxsO1xuXHRcdHRoaXMuX2RldGVjdE9yaWVudGF0aW9uKCk7XG5cdFx0dGhpcy5fbW91c2VJbml0KCk7XG5cdFx0dGhpcy5fY2FsY3VsYXRlTmV3TWF4KCk7XG5cblx0XHR0aGlzLl9hZGRDbGFzcyggXCJ1aS1zbGlkZXIgdWktc2xpZGVyLVwiICsgdGhpcy5vcmllbnRhdGlvbixcblx0XHRcdFwidWktd2lkZ2V0IHVpLXdpZGdldC1jb250ZW50XCIgKTtcblxuXHRcdHRoaXMuX3JlZnJlc2goKTtcblxuXHRcdHRoaXMuX2FuaW1hdGVPZmYgPSBmYWxzZTtcblx0fSxcblxuXHRfcmVmcmVzaDogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5fY3JlYXRlUmFuZ2UoKTtcblx0XHR0aGlzLl9jcmVhdGVIYW5kbGVzKCk7XG5cdFx0dGhpcy5fc2V0dXBFdmVudHMoKTtcblx0XHR0aGlzLl9yZWZyZXNoVmFsdWUoKTtcblx0fSxcblxuXHRfY3JlYXRlSGFuZGxlczogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGksIGhhbmRsZUNvdW50LFxuXHRcdFx0b3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcblx0XHRcdGV4aXN0aW5nSGFuZGxlcyA9IHRoaXMuZWxlbWVudC5maW5kKCBcIi51aS1zbGlkZXItaGFuZGxlXCIgKSxcblx0XHRcdGhhbmRsZSA9IFwiPHNwYW4gdGFiaW5kZXg9JzAnPjwvc3Bhbj5cIixcblx0XHRcdGhhbmRsZXMgPSBbXTtcblxuXHRcdGhhbmRsZUNvdW50ID0gKCBvcHRpb25zLnZhbHVlcyAmJiBvcHRpb25zLnZhbHVlcy5sZW5ndGggKSB8fCAxO1xuXG5cdFx0aWYgKCBleGlzdGluZ0hhbmRsZXMubGVuZ3RoID4gaGFuZGxlQ291bnQgKSB7XG5cdFx0XHRleGlzdGluZ0hhbmRsZXMuc2xpY2UoIGhhbmRsZUNvdW50ICkucmVtb3ZlKCk7XG5cdFx0XHRleGlzdGluZ0hhbmRsZXMgPSBleGlzdGluZ0hhbmRsZXMuc2xpY2UoIDAsIGhhbmRsZUNvdW50ICk7XG5cdFx0fVxuXG5cdFx0Zm9yICggaSA9IGV4aXN0aW5nSGFuZGxlcy5sZW5ndGg7IGkgPCBoYW5kbGVDb3VudDsgaSsrICkge1xuXHRcdFx0aGFuZGxlcy5wdXNoKCBoYW5kbGUgKTtcblx0XHR9XG5cblx0XHR0aGlzLmhhbmRsZXMgPSBleGlzdGluZ0hhbmRsZXMuYWRkKCAkKCBoYW5kbGVzLmpvaW4oIFwiXCIgKSApLmFwcGVuZFRvKCB0aGlzLmVsZW1lbnQgKSApO1xuXG5cdFx0dGhpcy5fYWRkQ2xhc3MoIHRoaXMuaGFuZGxlcywgXCJ1aS1zbGlkZXItaGFuZGxlXCIsIFwidWktc3RhdGUtZGVmYXVsdFwiICk7XG5cblx0XHR0aGlzLmhhbmRsZSA9IHRoaXMuaGFuZGxlcy5lcSggMCApO1xuXG5cdFx0dGhpcy5oYW5kbGVzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0JCggdGhpcyApXG5cdFx0XHRcdC5kYXRhKCBcInVpLXNsaWRlci1oYW5kbGUtaW5kZXhcIiwgaSApXG5cdFx0XHRcdC5hdHRyKCBcInRhYkluZGV4XCIsIDAgKTtcblx0XHR9ICk7XG5cdH0sXG5cblx0X2NyZWF0ZVJhbmdlOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuXHRcdGlmICggb3B0aW9ucy5yYW5nZSApIHtcblx0XHRcdGlmICggb3B0aW9ucy5yYW5nZSA9PT0gdHJ1ZSApIHtcblx0XHRcdFx0aWYgKCAhb3B0aW9ucy52YWx1ZXMgKSB7XG5cdFx0XHRcdFx0b3B0aW9ucy52YWx1ZXMgPSBbIHRoaXMuX3ZhbHVlTWluKCksIHRoaXMuX3ZhbHVlTWluKCkgXTtcblx0XHRcdFx0fSBlbHNlIGlmICggb3B0aW9ucy52YWx1ZXMubGVuZ3RoICYmIG9wdGlvbnMudmFsdWVzLmxlbmd0aCAhPT0gMiApIHtcblx0XHRcdFx0XHRvcHRpb25zLnZhbHVlcyA9IFsgb3B0aW9ucy52YWx1ZXNbIDAgXSwgb3B0aW9ucy52YWx1ZXNbIDAgXSBdO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCAkLmlzQXJyYXkoIG9wdGlvbnMudmFsdWVzICkgKSB7XG5cdFx0XHRcdFx0b3B0aW9ucy52YWx1ZXMgPSBvcHRpb25zLnZhbHVlcy5zbGljZSggMCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggIXRoaXMucmFuZ2UgfHwgIXRoaXMucmFuZ2UubGVuZ3RoICkge1xuXHRcdFx0XHR0aGlzLnJhbmdlID0gJCggXCI8ZGl2PlwiIClcblx0XHRcdFx0XHQuYXBwZW5kVG8oIHRoaXMuZWxlbWVudCApO1xuXG5cdFx0XHRcdHRoaXMuX2FkZENsYXNzKCB0aGlzLnJhbmdlLCBcInVpLXNsaWRlci1yYW5nZVwiICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyggdGhpcy5yYW5nZSwgXCJ1aS1zbGlkZXItcmFuZ2UtbWluIHVpLXNsaWRlci1yYW5nZS1tYXhcIiApO1xuXG5cdFx0XHRcdC8vIEhhbmRsZSByYW5nZSBzd2l0Y2hpbmcgZnJvbSB0cnVlIHRvIG1pbi9tYXhcblx0XHRcdFx0dGhpcy5yYW5nZS5jc3MoIHtcblx0XHRcdFx0XHRcImxlZnRcIjogXCJcIixcblx0XHRcdFx0XHRcImJvdHRvbVwiOiBcIlwiXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHRcdGlmICggb3B0aW9ucy5yYW5nZSA9PT0gXCJtaW5cIiB8fCBvcHRpb25zLnJhbmdlID09PSBcIm1heFwiICkge1xuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyggdGhpcy5yYW5nZSwgXCJ1aS1zbGlkZXItcmFuZ2UtXCIgKyBvcHRpb25zLnJhbmdlICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICggdGhpcy5yYW5nZSApIHtcblx0XHRcdFx0dGhpcy5yYW5nZS5yZW1vdmUoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMucmFuZ2UgPSBudWxsO1xuXHRcdH1cblx0fSxcblxuXHRfc2V0dXBFdmVudHM6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuX29mZiggdGhpcy5oYW5kbGVzICk7XG5cdFx0dGhpcy5fb24oIHRoaXMuaGFuZGxlcywgdGhpcy5faGFuZGxlRXZlbnRzICk7XG5cdFx0dGhpcy5faG92ZXJhYmxlKCB0aGlzLmhhbmRsZXMgKTtcblx0XHR0aGlzLl9mb2N1c2FibGUoIHRoaXMuaGFuZGxlcyApO1xuXHR9LFxuXG5cdF9kZXN0cm95OiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmhhbmRsZXMucmVtb3ZlKCk7XG5cdFx0aWYgKCB0aGlzLnJhbmdlICkge1xuXHRcdFx0dGhpcy5yYW5nZS5yZW1vdmUoKTtcblx0XHR9XG5cblx0XHR0aGlzLl9tb3VzZURlc3Ryb3koKTtcblx0fSxcblxuXHRfbW91c2VDYXB0dXJlOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0dmFyIHBvc2l0aW9uLCBub3JtVmFsdWUsIGRpc3RhbmNlLCBjbG9zZXN0SGFuZGxlLCBpbmRleCwgYWxsb3dlZCwgb2Zmc2V0LCBtb3VzZU92ZXJIYW5kbGUsXG5cdFx0XHR0aGF0ID0gdGhpcyxcblx0XHRcdG8gPSB0aGlzLm9wdGlvbnM7XG5cblx0XHRpZiAoIG8uZGlzYWJsZWQgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50U2l6ZSA9IHtcblx0XHRcdHdpZHRoOiB0aGlzLmVsZW1lbnQub3V0ZXJXaWR0aCgpLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLmVsZW1lbnQub3V0ZXJIZWlnaHQoKVxuXHRcdH07XG5cdFx0dGhpcy5lbGVtZW50T2Zmc2V0ID0gdGhpcy5lbGVtZW50Lm9mZnNldCgpO1xuXG5cdFx0cG9zaXRpb24gPSB7IHg6IGV2ZW50LnBhZ2VYLCB5OiBldmVudC5wYWdlWSB9O1xuXHRcdG5vcm1WYWx1ZSA9IHRoaXMuX25vcm1WYWx1ZUZyb21Nb3VzZSggcG9zaXRpb24gKTtcblx0XHRkaXN0YW5jZSA9IHRoaXMuX3ZhbHVlTWF4KCkgLSB0aGlzLl92YWx1ZU1pbigpICsgMTtcblx0XHR0aGlzLmhhbmRsZXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHR2YXIgdGhpc0Rpc3RhbmNlID0gTWF0aC5hYnMoIG5vcm1WYWx1ZSAtIHRoYXQudmFsdWVzKCBpICkgKTtcblx0XHRcdGlmICggKCBkaXN0YW5jZSA+IHRoaXNEaXN0YW5jZSApIHx8XG5cdFx0XHRcdCggZGlzdGFuY2UgPT09IHRoaXNEaXN0YW5jZSAmJlxuXHRcdFx0XHRcdCggaSA9PT0gdGhhdC5fbGFzdENoYW5nZWRWYWx1ZSB8fCB0aGF0LnZhbHVlcyggaSApID09PSBvLm1pbiApICkgKSB7XG5cdFx0XHRcdGRpc3RhbmNlID0gdGhpc0Rpc3RhbmNlO1xuXHRcdFx0XHRjbG9zZXN0SGFuZGxlID0gJCggdGhpcyApO1xuXHRcdFx0XHRpbmRleCA9IGk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0YWxsb3dlZCA9IHRoaXMuX3N0YXJ0KCBldmVudCwgaW5kZXggKTtcblx0XHRpZiAoIGFsbG93ZWQgPT09IGZhbHNlICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLl9tb3VzZVNsaWRpbmcgPSB0cnVlO1xuXG5cdFx0dGhpcy5faGFuZGxlSW5kZXggPSBpbmRleDtcblxuXHRcdHRoaXMuX2FkZENsYXNzKCBjbG9zZXN0SGFuZGxlLCBudWxsLCBcInVpLXN0YXRlLWFjdGl2ZVwiICk7XG5cdFx0Y2xvc2VzdEhhbmRsZS50cmlnZ2VyKCBcImZvY3VzXCIgKTtcblxuXHRcdG9mZnNldCA9IGNsb3Nlc3RIYW5kbGUub2Zmc2V0KCk7XG5cdFx0bW91c2VPdmVySGFuZGxlID0gISQoIGV2ZW50LnRhcmdldCApLnBhcmVudHMoKS5hZGRCYWNrKCkuaXMoIFwiLnVpLXNsaWRlci1oYW5kbGVcIiApO1xuXHRcdHRoaXMuX2NsaWNrT2Zmc2V0ID0gbW91c2VPdmVySGFuZGxlID8geyBsZWZ0OiAwLCB0b3A6IDAgfSA6IHtcblx0XHRcdGxlZnQ6IGV2ZW50LnBhZ2VYIC0gb2Zmc2V0LmxlZnQgLSAoIGNsb3Nlc3RIYW5kbGUud2lkdGgoKSAvIDIgKSxcblx0XHRcdHRvcDogZXZlbnQucGFnZVkgLSBvZmZzZXQudG9wIC1cblx0XHRcdFx0KCBjbG9zZXN0SGFuZGxlLmhlaWdodCgpIC8gMiApIC1cblx0XHRcdFx0KCBwYXJzZUludCggY2xvc2VzdEhhbmRsZS5jc3MoIFwiYm9yZGVyVG9wV2lkdGhcIiApLCAxMCApIHx8IDAgKSAtXG5cdFx0XHRcdCggcGFyc2VJbnQoIGNsb3Nlc3RIYW5kbGUuY3NzKCBcImJvcmRlckJvdHRvbVdpZHRoXCIgKSwgMTAgKSB8fCAwICkgK1xuXHRcdFx0XHQoIHBhcnNlSW50KCBjbG9zZXN0SGFuZGxlLmNzcyggXCJtYXJnaW5Ub3BcIiApLCAxMCApIHx8IDAgKVxuXHRcdH07XG5cblx0XHRpZiAoICF0aGlzLmhhbmRsZXMuaGFzQ2xhc3MoIFwidWktc3RhdGUtaG92ZXJcIiApICkge1xuXHRcdFx0dGhpcy5fc2xpZGUoIGV2ZW50LCBpbmRleCwgbm9ybVZhbHVlICk7XG5cdFx0fVxuXHRcdHRoaXMuX2FuaW1hdGVPZmYgPSB0cnVlO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdF9tb3VzZVN0YXJ0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHRfbW91c2VEcmFnOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0dmFyIHBvc2l0aW9uID0geyB4OiBldmVudC5wYWdlWCwgeTogZXZlbnQucGFnZVkgfSxcblx0XHRcdG5vcm1WYWx1ZSA9IHRoaXMuX25vcm1WYWx1ZUZyb21Nb3VzZSggcG9zaXRpb24gKTtcblxuXHRcdHRoaXMuX3NsaWRlKCBldmVudCwgdGhpcy5faGFuZGxlSW5kZXgsIG5vcm1WYWx1ZSApO1xuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXG5cdF9tb3VzZVN0b3A6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHR0aGlzLl9yZW1vdmVDbGFzcyggdGhpcy5oYW5kbGVzLCBudWxsLCBcInVpLXN0YXRlLWFjdGl2ZVwiICk7XG5cdFx0dGhpcy5fbW91c2VTbGlkaW5nID0gZmFsc2U7XG5cblx0XHR0aGlzLl9zdG9wKCBldmVudCwgdGhpcy5faGFuZGxlSW5kZXggKTtcblx0XHR0aGlzLl9jaGFuZ2UoIGV2ZW50LCB0aGlzLl9oYW5kbGVJbmRleCApO1xuXG5cdFx0dGhpcy5faGFuZGxlSW5kZXggPSBudWxsO1xuXHRcdHRoaXMuX2NsaWNrT2Zmc2V0ID0gbnVsbDtcblx0XHR0aGlzLl9hbmltYXRlT2ZmID0gZmFsc2U7XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cblx0X2RldGVjdE9yaWVudGF0aW9uOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLm9yaWVudGF0aW9uID0gKCB0aGlzLm9wdGlvbnMub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiApID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XG5cdH0sXG5cblx0X25vcm1WYWx1ZUZyb21Nb3VzZTogZnVuY3Rpb24oIHBvc2l0aW9uICkge1xuXHRcdHZhciBwaXhlbFRvdGFsLFxuXHRcdFx0cGl4ZWxNb3VzZSxcblx0XHRcdHBlcmNlbnRNb3VzZSxcblx0XHRcdHZhbHVlVG90YWwsXG5cdFx0XHR2YWx1ZU1vdXNlO1xuXG5cdFx0aWYgKCB0aGlzLm9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiApIHtcblx0XHRcdHBpeGVsVG90YWwgPSB0aGlzLmVsZW1lbnRTaXplLndpZHRoO1xuXHRcdFx0cGl4ZWxNb3VzZSA9IHBvc2l0aW9uLnggLSB0aGlzLmVsZW1lbnRPZmZzZXQubGVmdCAtXG5cdFx0XHRcdCggdGhpcy5fY2xpY2tPZmZzZXQgPyB0aGlzLl9jbGlja09mZnNldC5sZWZ0IDogMCApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwaXhlbFRvdGFsID0gdGhpcy5lbGVtZW50U2l6ZS5oZWlnaHQ7XG5cdFx0XHRwaXhlbE1vdXNlID0gcG9zaXRpb24ueSAtIHRoaXMuZWxlbWVudE9mZnNldC50b3AgLVxuXHRcdFx0XHQoIHRoaXMuX2NsaWNrT2Zmc2V0ID8gdGhpcy5fY2xpY2tPZmZzZXQudG9wIDogMCApO1xuXHRcdH1cblxuXHRcdHBlcmNlbnRNb3VzZSA9ICggcGl4ZWxNb3VzZSAvIHBpeGVsVG90YWwgKTtcblx0XHRpZiAoIHBlcmNlbnRNb3VzZSA+IDEgKSB7XG5cdFx0XHRwZXJjZW50TW91c2UgPSAxO1xuXHRcdH1cblx0XHRpZiAoIHBlcmNlbnRNb3VzZSA8IDAgKSB7XG5cdFx0XHRwZXJjZW50TW91c2UgPSAwO1xuXHRcdH1cblx0XHRpZiAoIHRoaXMub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiApIHtcblx0XHRcdHBlcmNlbnRNb3VzZSA9IDEgLSBwZXJjZW50TW91c2U7XG5cdFx0fVxuXG5cdFx0dmFsdWVUb3RhbCA9IHRoaXMuX3ZhbHVlTWF4KCkgLSB0aGlzLl92YWx1ZU1pbigpO1xuXHRcdHZhbHVlTW91c2UgPSB0aGlzLl92YWx1ZU1pbigpICsgcGVyY2VudE1vdXNlICogdmFsdWVUb3RhbDtcblxuXHRcdHJldHVybiB0aGlzLl90cmltQWxpZ25WYWx1ZSggdmFsdWVNb3VzZSApO1xuXHR9LFxuXG5cdF91aUhhc2g6IGZ1bmN0aW9uKCBpbmRleCwgdmFsdWUsIHZhbHVlcyApIHtcblx0XHR2YXIgdWlIYXNoID0ge1xuXHRcdFx0aGFuZGxlOiB0aGlzLmhhbmRsZXNbIGluZGV4IF0sXG5cdFx0XHRoYW5kbGVJbmRleDogaW5kZXgsXG5cdFx0XHR2YWx1ZTogdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdGhpcy52YWx1ZSgpXG5cdFx0fTtcblxuXHRcdGlmICggdGhpcy5faGFzTXVsdGlwbGVWYWx1ZXMoKSApIHtcblx0XHRcdHVpSGFzaC52YWx1ZSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHRoaXMudmFsdWVzKCBpbmRleCApO1xuXHRcdFx0dWlIYXNoLnZhbHVlcyA9IHZhbHVlcyB8fCB0aGlzLnZhbHVlcygpO1xuXHRcdH1cblxuXHRcdHJldHVybiB1aUhhc2g7XG5cdH0sXG5cblx0X2hhc011bHRpcGxlVmFsdWVzOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLnZhbHVlcyAmJiB0aGlzLm9wdGlvbnMudmFsdWVzLmxlbmd0aDtcblx0fSxcblxuXHRfc3RhcnQ6IGZ1bmN0aW9uKCBldmVudCwgaW5kZXggKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3RyaWdnZXIoIFwic3RhcnRcIiwgZXZlbnQsIHRoaXMuX3VpSGFzaCggaW5kZXggKSApO1xuXHR9LFxuXG5cdF9zbGlkZTogZnVuY3Rpb24oIGV2ZW50LCBpbmRleCwgbmV3VmFsICkge1xuXHRcdHZhciBhbGxvd2VkLCBvdGhlclZhbCxcblx0XHRcdGN1cnJlbnRWYWx1ZSA9IHRoaXMudmFsdWUoKSxcblx0XHRcdG5ld1ZhbHVlcyA9IHRoaXMudmFsdWVzKCk7XG5cblx0XHRpZiAoIHRoaXMuX2hhc011bHRpcGxlVmFsdWVzKCkgKSB7XG5cdFx0XHRvdGhlclZhbCA9IHRoaXMudmFsdWVzKCBpbmRleCA/IDAgOiAxICk7XG5cdFx0XHRjdXJyZW50VmFsdWUgPSB0aGlzLnZhbHVlcyggaW5kZXggKTtcblxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMudmFsdWVzLmxlbmd0aCA9PT0gMiAmJiB0aGlzLm9wdGlvbnMucmFuZ2UgPT09IHRydWUgKSB7XG5cdFx0XHRcdG5ld1ZhbCA9ICBpbmRleCA9PT0gMCA/IE1hdGgubWluKCBvdGhlclZhbCwgbmV3VmFsICkgOiBNYXRoLm1heCggb3RoZXJWYWwsIG5ld1ZhbCApO1xuXHRcdFx0fVxuXG5cdFx0XHRuZXdWYWx1ZXNbIGluZGV4IF0gPSBuZXdWYWw7XG5cdFx0fVxuXG5cdFx0aWYgKCBuZXdWYWwgPT09IGN1cnJlbnRWYWx1ZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRhbGxvd2VkID0gdGhpcy5fdHJpZ2dlciggXCJzbGlkZVwiLCBldmVudCwgdGhpcy5fdWlIYXNoKCBpbmRleCwgbmV3VmFsLCBuZXdWYWx1ZXMgKSApO1xuXG5cdFx0Ly8gQSBzbGlkZSBjYW4gYmUgY2FuY2VsZWQgYnkgcmV0dXJuaW5nIGZhbHNlIGZyb20gdGhlIHNsaWRlIGNhbGxiYWNrXG5cdFx0aWYgKCBhbGxvd2VkID09PSBmYWxzZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuX2hhc011bHRpcGxlVmFsdWVzKCkgKSB7XG5cdFx0XHR0aGlzLnZhbHVlcyggaW5kZXgsIG5ld1ZhbCApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnZhbHVlKCBuZXdWYWwgKTtcblx0XHR9XG5cdH0sXG5cblx0X3N0b3A6IGZ1bmN0aW9uKCBldmVudCwgaW5kZXggKSB7XG5cdFx0dGhpcy5fdHJpZ2dlciggXCJzdG9wXCIsIGV2ZW50LCB0aGlzLl91aUhhc2goIGluZGV4ICkgKTtcblx0fSxcblxuXHRfY2hhbmdlOiBmdW5jdGlvbiggZXZlbnQsIGluZGV4ICkge1xuXHRcdGlmICggIXRoaXMuX2tleVNsaWRpbmcgJiYgIXRoaXMuX21vdXNlU2xpZGluZyApIHtcblxuXHRcdFx0Ly9zdG9yZSB0aGUgbGFzdCBjaGFuZ2VkIHZhbHVlIGluZGV4IGZvciByZWZlcmVuY2Ugd2hlbiBoYW5kbGVzIG92ZXJsYXBcblx0XHRcdHRoaXMuX2xhc3RDaGFuZ2VkVmFsdWUgPSBpbmRleDtcblx0XHRcdHRoaXMuX3RyaWdnZXIoIFwiY2hhbmdlXCIsIGV2ZW50LCB0aGlzLl91aUhhc2goIGluZGV4ICkgKTtcblx0XHR9XG5cdH0sXG5cblx0dmFsdWU6IGZ1bmN0aW9uKCBuZXdWYWx1ZSApIHtcblx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMudmFsdWUgPSB0aGlzLl90cmltQWxpZ25WYWx1ZSggbmV3VmFsdWUgKTtcblx0XHRcdHRoaXMuX3JlZnJlc2hWYWx1ZSgpO1xuXHRcdFx0dGhpcy5fY2hhbmdlKCBudWxsLCAwICk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX3ZhbHVlKCk7XG5cdH0sXG5cblx0dmFsdWVzOiBmdW5jdGlvbiggaW5kZXgsIG5ld1ZhbHVlICkge1xuXHRcdHZhciB2YWxzLFxuXHRcdFx0bmV3VmFsdWVzLFxuXHRcdFx0aTtcblxuXHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDEgKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMudmFsdWVzWyBpbmRleCBdID0gdGhpcy5fdHJpbUFsaWduVmFsdWUoIG5ld1ZhbHVlICk7XG5cdFx0XHR0aGlzLl9yZWZyZXNoVmFsdWUoKTtcblx0XHRcdHRoaXMuX2NoYW5nZSggbnVsbCwgaW5kZXggKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggKSB7XG5cdFx0XHRpZiAoICQuaXNBcnJheSggYXJndW1lbnRzWyAwIF0gKSApIHtcblx0XHRcdFx0dmFscyA9IHRoaXMub3B0aW9ucy52YWx1ZXM7XG5cdFx0XHRcdG5ld1ZhbHVlcyA9IGFyZ3VtZW50c1sgMCBdO1xuXHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IHZhbHMubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0XHRcdFx0dmFsc1sgaSBdID0gdGhpcy5fdHJpbUFsaWduVmFsdWUoIG5ld1ZhbHVlc1sgaSBdICk7XG5cdFx0XHRcdFx0dGhpcy5fY2hhbmdlKCBudWxsLCBpICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fcmVmcmVzaFZhbHVlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIHRoaXMuX2hhc011bHRpcGxlVmFsdWVzKCkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX3ZhbHVlcyggaW5kZXggKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLl92YWx1ZXMoKTtcblx0XHR9XG5cdH0sXG5cblx0X3NldE9wdGlvbjogZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0dmFyIGksXG5cdFx0XHR2YWxzTGVuZ3RoID0gMDtcblxuXHRcdGlmICgga2V5ID09PSBcInJhbmdlXCIgJiYgdGhpcy5vcHRpb25zLnJhbmdlID09PSB0cnVlICkge1xuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gXCJtaW5cIiApIHtcblx0XHRcdFx0dGhpcy5vcHRpb25zLnZhbHVlID0gdGhpcy5fdmFsdWVzKCAwICk7XG5cdFx0XHRcdHRoaXMub3B0aW9ucy52YWx1ZXMgPSBudWxsO1xuXHRcdFx0fSBlbHNlIGlmICggdmFsdWUgPT09IFwibWF4XCIgKSB7XG5cdFx0XHRcdHRoaXMub3B0aW9ucy52YWx1ZSA9IHRoaXMuX3ZhbHVlcyggdGhpcy5vcHRpb25zLnZhbHVlcy5sZW5ndGggLSAxICk7XG5cdFx0XHRcdHRoaXMub3B0aW9ucy52YWx1ZXMgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggJC5pc0FycmF5KCB0aGlzLm9wdGlvbnMudmFsdWVzICkgKSB7XG5cdFx0XHR2YWxzTGVuZ3RoID0gdGhpcy5vcHRpb25zLnZhbHVlcy5sZW5ndGg7XG5cdFx0fVxuXG5cdFx0dGhpcy5fc3VwZXIoIGtleSwgdmFsdWUgKTtcblxuXHRcdHN3aXRjaCAoIGtleSApIHtcblx0XHRcdGNhc2UgXCJvcmllbnRhdGlvblwiOlxuXHRcdFx0XHR0aGlzLl9kZXRlY3RPcmllbnRhdGlvbigpO1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyggXCJ1aS1zbGlkZXItaG9yaXpvbnRhbCB1aS1zbGlkZXItdmVydGljYWxcIiApXG5cdFx0XHRcdFx0Ll9hZGRDbGFzcyggXCJ1aS1zbGlkZXItXCIgKyB0aGlzLm9yaWVudGF0aW9uICk7XG5cdFx0XHRcdHRoaXMuX3JlZnJlc2hWYWx1ZSgpO1xuXHRcdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5yYW5nZSApIHtcblx0XHRcdFx0XHR0aGlzLl9yZWZyZXNoUmFuZ2UoIHZhbHVlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZXNldCBwb3NpdGlvbmluZyBmcm9tIHByZXZpb3VzIG9yaWVudGF0aW9uXG5cdFx0XHRcdHRoaXMuaGFuZGxlcy5jc3MoIHZhbHVlID09PSBcImhvcml6b250YWxcIiA/IFwiYm90dG9tXCIgOiBcImxlZnRcIiwgXCJcIiApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJ2YWx1ZVwiOlxuXHRcdFx0XHR0aGlzLl9hbmltYXRlT2ZmID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fcmVmcmVzaFZhbHVlKCk7XG5cdFx0XHRcdHRoaXMuX2NoYW5nZSggbnVsbCwgMCApO1xuXHRcdFx0XHR0aGlzLl9hbmltYXRlT2ZmID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInZhbHVlc1wiOlxuXHRcdFx0XHR0aGlzLl9hbmltYXRlT2ZmID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fcmVmcmVzaFZhbHVlKCk7XG5cblx0XHRcdFx0Ly8gU3RhcnQgZnJvbSB0aGUgbGFzdCBoYW5kbGUgdG8gcHJldmVudCB1bnJlYWNoYWJsZSBoYW5kbGVzICgjOTA0Nilcblx0XHRcdFx0Zm9yICggaSA9IHZhbHNMZW5ndGggLSAxOyBpID49IDA7IGktLSApIHtcblx0XHRcdFx0XHR0aGlzLl9jaGFuZ2UoIG51bGwsIGkgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9hbmltYXRlT2ZmID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInN0ZXBcIjpcblx0XHRcdGNhc2UgXCJtaW5cIjpcblx0XHRcdGNhc2UgXCJtYXhcIjpcblx0XHRcdFx0dGhpcy5fYW5pbWF0ZU9mZiA9IHRydWU7XG5cdFx0XHRcdHRoaXMuX2NhbGN1bGF0ZU5ld01heCgpO1xuXHRcdFx0XHR0aGlzLl9yZWZyZXNoVmFsdWUoKTtcblx0XHRcdFx0dGhpcy5fYW5pbWF0ZU9mZiA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJyYW5nZVwiOlxuXHRcdFx0XHR0aGlzLl9hbmltYXRlT2ZmID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fcmVmcmVzaCgpO1xuXHRcdFx0XHR0aGlzLl9hbmltYXRlT2ZmID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSxcblxuXHRfc2V0T3B0aW9uRGlzYWJsZWQ6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR0aGlzLl9zdXBlciggdmFsdWUgKTtcblxuXHRcdHRoaXMuX3RvZ2dsZUNsYXNzKCBudWxsLCBcInVpLXN0YXRlLWRpc2FibGVkXCIsICEhdmFsdWUgKTtcblx0fSxcblxuXHQvL2ludGVybmFsIHZhbHVlIGdldHRlclxuXHQvLyBfdmFsdWUoKSByZXR1cm5zIHZhbHVlIHRyaW1tZWQgYnkgbWluIGFuZCBtYXgsIGFsaWduZWQgYnkgc3RlcFxuXHRfdmFsdWU6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB2YWwgPSB0aGlzLm9wdGlvbnMudmFsdWU7XG5cdFx0dmFsID0gdGhpcy5fdHJpbUFsaWduVmFsdWUoIHZhbCApO1xuXG5cdFx0cmV0dXJuIHZhbDtcblx0fSxcblxuXHQvL2ludGVybmFsIHZhbHVlcyBnZXR0ZXJcblx0Ly8gX3ZhbHVlcygpIHJldHVybnMgYXJyYXkgb2YgdmFsdWVzIHRyaW1tZWQgYnkgbWluIGFuZCBtYXgsIGFsaWduZWQgYnkgc3RlcFxuXHQvLyBfdmFsdWVzKCBpbmRleCApIHJldHVybnMgc2luZ2xlIHZhbHVlIHRyaW1tZWQgYnkgbWluIGFuZCBtYXgsIGFsaWduZWQgYnkgc3RlcFxuXHRfdmFsdWVzOiBmdW5jdGlvbiggaW5kZXggKSB7XG5cdFx0dmFyIHZhbCxcblx0XHRcdHZhbHMsXG5cdFx0XHRpO1xuXG5cdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0dmFsID0gdGhpcy5vcHRpb25zLnZhbHVlc1sgaW5kZXggXTtcblx0XHRcdHZhbCA9IHRoaXMuX3RyaW1BbGlnblZhbHVlKCB2YWwgKTtcblxuXHRcdFx0cmV0dXJuIHZhbDtcblx0XHR9IGVsc2UgaWYgKCB0aGlzLl9oYXNNdWx0aXBsZVZhbHVlcygpICkge1xuXG5cdFx0XHQvLyAuc2xpY2UoKSBjcmVhdGVzIGEgY29weSBvZiB0aGUgYXJyYXlcblx0XHRcdC8vIHRoaXMgY29weSBnZXRzIHRyaW1tZWQgYnkgbWluIGFuZCBtYXggYW5kIHRoZW4gcmV0dXJuZWRcblx0XHRcdHZhbHMgPSB0aGlzLm9wdGlvbnMudmFsdWVzLnNsaWNlKCk7XG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IHZhbHMubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0XHRcdHZhbHNbIGkgXSA9IHRoaXMuX3RyaW1BbGlnblZhbHVlKCB2YWxzWyBpIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHZhbHM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdH0sXG5cblx0Ly8gUmV0dXJucyB0aGUgc3RlcC1hbGlnbmVkIHZhbHVlIHRoYXQgdmFsIGlzIGNsb3Nlc3QgdG8sIGJldHdlZW4gKGluY2x1c2l2ZSkgbWluIGFuZCBtYXhcblx0X3RyaW1BbGlnblZhbHVlOiBmdW5jdGlvbiggdmFsICkge1xuXHRcdGlmICggdmFsIDw9IHRoaXMuX3ZhbHVlTWluKCkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fdmFsdWVNaW4oKTtcblx0XHR9XG5cdFx0aWYgKCB2YWwgPj0gdGhpcy5fdmFsdWVNYXgoKSApIHtcblx0XHRcdHJldHVybiB0aGlzLl92YWx1ZU1heCgpO1xuXHRcdH1cblx0XHR2YXIgc3RlcCA9ICggdGhpcy5vcHRpb25zLnN0ZXAgPiAwICkgPyB0aGlzLm9wdGlvbnMuc3RlcCA6IDEsXG5cdFx0XHR2YWxNb2RTdGVwID0gKCB2YWwgLSB0aGlzLl92YWx1ZU1pbigpICkgJSBzdGVwLFxuXHRcdFx0YWxpZ25WYWx1ZSA9IHZhbCAtIHZhbE1vZFN0ZXA7XG5cblx0XHRpZiAoIE1hdGguYWJzKCB2YWxNb2RTdGVwICkgKiAyID49IHN0ZXAgKSB7XG5cdFx0XHRhbGlnblZhbHVlICs9ICggdmFsTW9kU3RlcCA+IDAgKSA/IHN0ZXAgOiAoIC1zdGVwICk7XG5cdFx0fVxuXG5cdFx0Ly8gU2luY2UgSmF2YVNjcmlwdCBoYXMgcHJvYmxlbXMgd2l0aCBsYXJnZSBmbG9hdHMsIHJvdW5kXG5cdFx0Ly8gdGhlIGZpbmFsIHZhbHVlIHRvIDUgZGlnaXRzIGFmdGVyIHRoZSBkZWNpbWFsIHBvaW50IChzZWUgIzQxMjQpXG5cdFx0cmV0dXJuIHBhcnNlRmxvYXQoIGFsaWduVmFsdWUudG9GaXhlZCggNSApICk7XG5cdH0sXG5cblx0X2NhbGN1bGF0ZU5ld01heDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG1heCA9IHRoaXMub3B0aW9ucy5tYXgsXG5cdFx0XHRtaW4gPSB0aGlzLl92YWx1ZU1pbigpLFxuXHRcdFx0c3RlcCA9IHRoaXMub3B0aW9ucy5zdGVwLFxuXHRcdFx0YWJvdmVNaW4gPSBNYXRoLnJvdW5kKCAoIG1heCAtIG1pbiApIC8gc3RlcCApICogc3RlcDtcblx0XHRtYXggPSBhYm92ZU1pbiArIG1pbjtcblx0XHRpZiAoIG1heCA+IHRoaXMub3B0aW9ucy5tYXggKSB7XG5cblx0XHRcdC8vSWYgbWF4IGlzIG5vdCBkaXZpc2libGUgYnkgc3RlcCwgcm91bmRpbmcgb2ZmIG1heSBpbmNyZWFzZSBpdHMgdmFsdWVcblx0XHRcdG1heCAtPSBzdGVwO1xuXHRcdH1cblx0XHR0aGlzLm1heCA9IHBhcnNlRmxvYXQoIG1heC50b0ZpeGVkKCB0aGlzLl9wcmVjaXNpb24oKSApICk7XG5cdH0sXG5cblx0X3ByZWNpc2lvbjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHByZWNpc2lvbiA9IHRoaXMuX3ByZWNpc2lvbk9mKCB0aGlzLm9wdGlvbnMuc3RlcCApO1xuXHRcdGlmICggdGhpcy5vcHRpb25zLm1pbiAhPT0gbnVsbCApIHtcblx0XHRcdHByZWNpc2lvbiA9IE1hdGgubWF4KCBwcmVjaXNpb24sIHRoaXMuX3ByZWNpc2lvbk9mKCB0aGlzLm9wdGlvbnMubWluICkgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHByZWNpc2lvbjtcblx0fSxcblxuXHRfcHJlY2lzaW9uT2Y6IGZ1bmN0aW9uKCBudW0gKSB7XG5cdFx0dmFyIHN0ciA9IG51bS50b1N0cmluZygpLFxuXHRcdFx0ZGVjaW1hbCA9IHN0ci5pbmRleE9mKCBcIi5cIiApO1xuXHRcdHJldHVybiBkZWNpbWFsID09PSAtMSA/IDAgOiBzdHIubGVuZ3RoIC0gZGVjaW1hbCAtIDE7XG5cdH0sXG5cblx0X3ZhbHVlTWluOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLm1pbjtcblx0fSxcblxuXHRfdmFsdWVNYXg6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm1heDtcblx0fSxcblxuXHRfcmVmcmVzaFJhbmdlOiBmdW5jdGlvbiggb3JpZW50YXRpb24gKSB7XG5cdFx0aWYgKCBvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiICkge1xuXHRcdFx0dGhpcy5yYW5nZS5jc3MoIHsgXCJ3aWR0aFwiOiBcIlwiLCBcImxlZnRcIjogXCJcIiB9ICk7XG5cdFx0fVxuXHRcdGlmICggb3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiICkge1xuXHRcdFx0dGhpcy5yYW5nZS5jc3MoIHsgXCJoZWlnaHRcIjogXCJcIiwgXCJib3R0b21cIjogXCJcIiB9ICk7XG5cdFx0fVxuXHR9LFxuXG5cdF9yZWZyZXNoVmFsdWU6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBsYXN0VmFsUGVyY2VudCwgdmFsUGVyY2VudCwgdmFsdWUsIHZhbHVlTWluLCB2YWx1ZU1heCxcblx0XHRcdG9SYW5nZSA9IHRoaXMub3B0aW9ucy5yYW5nZSxcblx0XHRcdG8gPSB0aGlzLm9wdGlvbnMsXG5cdFx0XHR0aGF0ID0gdGhpcyxcblx0XHRcdGFuaW1hdGUgPSAoICF0aGlzLl9hbmltYXRlT2ZmICkgPyBvLmFuaW1hdGUgOiBmYWxzZSxcblx0XHRcdF9zZXQgPSB7fTtcblxuXHRcdGlmICggdGhpcy5faGFzTXVsdGlwbGVWYWx1ZXMoKSApIHtcblx0XHRcdHRoaXMuaGFuZGxlcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdFx0dmFsUGVyY2VudCA9ICggdGhhdC52YWx1ZXMoIGkgKSAtIHRoYXQuX3ZhbHVlTWluKCkgKSAvICggdGhhdC5fdmFsdWVNYXgoKSAtXG5cdFx0XHRcdFx0dGhhdC5fdmFsdWVNaW4oKSApICogMTAwO1xuXHRcdFx0XHRfc2V0WyB0aGF0Lm9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwibGVmdFwiIDogXCJib3R0b21cIiBdID0gdmFsUGVyY2VudCArIFwiJVwiO1xuXHRcdFx0XHQkKCB0aGlzICkuc3RvcCggMSwgMSApWyBhbmltYXRlID8gXCJhbmltYXRlXCIgOiBcImNzc1wiIF0oIF9zZXQsIG8uYW5pbWF0ZSApO1xuXHRcdFx0XHRpZiAoIHRoYXQub3B0aW9ucy5yYW5nZSA9PT0gdHJ1ZSApIHtcblx0XHRcdFx0XHRpZiAoIHRoYXQub3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiICkge1xuXHRcdFx0XHRcdFx0aWYgKCBpID09PSAwICkge1xuXHRcdFx0XHRcdFx0XHR0aGF0LnJhbmdlLnN0b3AoIDEsIDEgKVsgYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJjc3NcIiBdKCB7XG5cdFx0XHRcdFx0XHRcdFx0bGVmdDogdmFsUGVyY2VudCArIFwiJVwiXG5cdFx0XHRcdFx0XHRcdH0sIG8uYW5pbWF0ZSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCBpID09PSAxICkge1xuXHRcdFx0XHRcdFx0XHR0aGF0LnJhbmdlWyBhbmltYXRlID8gXCJhbmltYXRlXCIgOiBcImNzc1wiIF0oIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogKCB2YWxQZXJjZW50IC0gbGFzdFZhbFBlcmNlbnQgKSArIFwiJVwiXG5cdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRxdWV1ZTogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IG8uYW5pbWF0ZVxuXHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmICggaSA9PT0gMCApIHtcblx0XHRcdFx0XHRcdFx0dGhhdC5yYW5nZS5zdG9wKCAxLCAxIClbIGFuaW1hdGUgPyBcImFuaW1hdGVcIiA6IFwiY3NzXCIgXSgge1xuXHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogKCB2YWxQZXJjZW50ICkgKyBcIiVcIlxuXHRcdFx0XHRcdFx0XHR9LCBvLmFuaW1hdGUgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICggaSA9PT0gMSApIHtcblx0XHRcdFx0XHRcdFx0dGhhdC5yYW5nZVsgYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJjc3NcIiBdKCB7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAoIHZhbFBlcmNlbnQgLSBsYXN0VmFsUGVyY2VudCApICsgXCIlXCJcblx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdHF1ZXVlOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogby5hbmltYXRlXG5cdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bGFzdFZhbFBlcmNlbnQgPSB2YWxQZXJjZW50O1xuXHRcdFx0fSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWx1ZSA9IHRoaXMudmFsdWUoKTtcblx0XHRcdHZhbHVlTWluID0gdGhpcy5fdmFsdWVNaW4oKTtcblx0XHRcdHZhbHVlTWF4ID0gdGhpcy5fdmFsdWVNYXgoKTtcblx0XHRcdHZhbFBlcmNlbnQgPSAoIHZhbHVlTWF4ICE9PSB2YWx1ZU1pbiApID9cblx0XHRcdFx0XHQoIHZhbHVlIC0gdmFsdWVNaW4gKSAvICggdmFsdWVNYXggLSB2YWx1ZU1pbiApICogMTAwIDpcblx0XHRcdFx0XHQwO1xuXHRcdFx0X3NldFsgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBcImxlZnRcIiA6IFwiYm90dG9tXCIgXSA9IHZhbFBlcmNlbnQgKyBcIiVcIjtcblx0XHRcdHRoaXMuaGFuZGxlLnN0b3AoIDEsIDEgKVsgYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJjc3NcIiBdKCBfc2V0LCBvLmFuaW1hdGUgKTtcblxuXHRcdFx0aWYgKCBvUmFuZ2UgPT09IFwibWluXCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgKSB7XG5cdFx0XHRcdHRoaXMucmFuZ2Uuc3RvcCggMSwgMSApWyBhbmltYXRlID8gXCJhbmltYXRlXCIgOiBcImNzc1wiIF0oIHtcblx0XHRcdFx0XHR3aWR0aDogdmFsUGVyY2VudCArIFwiJVwiXG5cdFx0XHRcdH0sIG8uYW5pbWF0ZSApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBvUmFuZ2UgPT09IFwibWF4XCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgKSB7XG5cdFx0XHRcdHRoaXMucmFuZ2Uuc3RvcCggMSwgMSApWyBhbmltYXRlID8gXCJhbmltYXRlXCIgOiBcImNzc1wiIF0oIHtcblx0XHRcdFx0XHR3aWR0aDogKCAxMDAgLSB2YWxQZXJjZW50ICkgKyBcIiVcIlxuXHRcdFx0XHR9LCBvLmFuaW1hdGUgKTtcblx0XHRcdH1cblx0XHRcdGlmICggb1JhbmdlID09PSBcIm1pblwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiApIHtcblx0XHRcdFx0dGhpcy5yYW5nZS5zdG9wKCAxLCAxIClbIGFuaW1hdGUgPyBcImFuaW1hdGVcIiA6IFwiY3NzXCIgXSgge1xuXHRcdFx0XHRcdGhlaWdodDogdmFsUGVyY2VudCArIFwiJVwiXG5cdFx0XHRcdH0sIG8uYW5pbWF0ZSApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBvUmFuZ2UgPT09IFwibWF4XCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiICkge1xuXHRcdFx0XHR0aGlzLnJhbmdlLnN0b3AoIDEsIDEgKVsgYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJjc3NcIiBdKCB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAoIDEwMCAtIHZhbFBlcmNlbnQgKSArIFwiJVwiXG5cdFx0XHRcdH0sIG8uYW5pbWF0ZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRfaGFuZGxlRXZlbnRzOiB7XG5cdFx0a2V5ZG93bjogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0dmFyIGFsbG93ZWQsIGN1clZhbCwgbmV3VmFsLCBzdGVwLFxuXHRcdFx0XHRpbmRleCA9ICQoIGV2ZW50LnRhcmdldCApLmRhdGEoIFwidWktc2xpZGVyLWhhbmRsZS1pbmRleFwiICk7XG5cblx0XHRcdHN3aXRjaCAoIGV2ZW50LmtleUNvZGUgKSB7XG5cdFx0XHRcdGNhc2UgJC51aS5rZXlDb2RlLkhPTUU6XG5cdFx0XHRcdGNhc2UgJC51aS5rZXlDb2RlLkVORDpcblx0XHRcdFx0Y2FzZSAkLnVpLmtleUNvZGUuUEFHRV9VUDpcblx0XHRcdFx0Y2FzZSAkLnVpLmtleUNvZGUuUEFHRV9ET1dOOlxuXHRcdFx0XHRjYXNlICQudWkua2V5Q29kZS5VUDpcblx0XHRcdFx0Y2FzZSAkLnVpLmtleUNvZGUuUklHSFQ6XG5cdFx0XHRcdGNhc2UgJC51aS5rZXlDb2RlLkRPV046XG5cdFx0XHRcdGNhc2UgJC51aS5rZXlDb2RlLkxFRlQ6XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRpZiAoICF0aGlzLl9rZXlTbGlkaW5nICkge1xuXHRcdFx0XHRcdFx0dGhpcy5fa2V5U2xpZGluZyA9IHRydWU7XG5cdFx0XHRcdFx0XHR0aGlzLl9hZGRDbGFzcyggJCggZXZlbnQudGFyZ2V0ICksIG51bGwsIFwidWktc3RhdGUtYWN0aXZlXCIgKTtcblx0XHRcdFx0XHRcdGFsbG93ZWQgPSB0aGlzLl9zdGFydCggZXZlbnQsIGluZGV4ICk7XG5cdFx0XHRcdFx0XHRpZiAoIGFsbG93ZWQgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGVwID0gdGhpcy5vcHRpb25zLnN0ZXA7XG5cdFx0XHRpZiAoIHRoaXMuX2hhc011bHRpcGxlVmFsdWVzKCkgKSB7XG5cdFx0XHRcdGN1clZhbCA9IG5ld1ZhbCA9IHRoaXMudmFsdWVzKCBpbmRleCApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VyVmFsID0gbmV3VmFsID0gdGhpcy52YWx1ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRzd2l0Y2ggKCBldmVudC5rZXlDb2RlICkge1xuXHRcdFx0XHRjYXNlICQudWkua2V5Q29kZS5IT01FOlxuXHRcdFx0XHRcdG5ld1ZhbCA9IHRoaXMuX3ZhbHVlTWluKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJC51aS5rZXlDb2RlLkVORDpcblx0XHRcdFx0XHRuZXdWYWwgPSB0aGlzLl92YWx1ZU1heCgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICQudWkua2V5Q29kZS5QQUdFX1VQOlxuXHRcdFx0XHRcdG5ld1ZhbCA9IHRoaXMuX3RyaW1BbGlnblZhbHVlKFxuXHRcdFx0XHRcdFx0Y3VyVmFsICsgKCAoIHRoaXMuX3ZhbHVlTWF4KCkgLSB0aGlzLl92YWx1ZU1pbigpICkgLyB0aGlzLm51bVBhZ2VzIClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICQudWkua2V5Q29kZS5QQUdFX0RPV046XG5cdFx0XHRcdFx0bmV3VmFsID0gdGhpcy5fdHJpbUFsaWduVmFsdWUoXG5cdFx0XHRcdFx0XHRjdXJWYWwgLSAoICggdGhpcy5fdmFsdWVNYXgoKSAtIHRoaXMuX3ZhbHVlTWluKCkgKSAvIHRoaXMubnVtUGFnZXMgKSApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICQudWkua2V5Q29kZS5VUDpcblx0XHRcdFx0Y2FzZSAkLnVpLmtleUNvZGUuUklHSFQ6XG5cdFx0XHRcdFx0aWYgKCBjdXJWYWwgPT09IHRoaXMuX3ZhbHVlTWF4KCkgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5ld1ZhbCA9IHRoaXMuX3RyaW1BbGlnblZhbHVlKCBjdXJWYWwgKyBzdGVwICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJC51aS5rZXlDb2RlLkRPV046XG5cdFx0XHRcdGNhc2UgJC51aS5rZXlDb2RlLkxFRlQ6XG5cdFx0XHRcdFx0aWYgKCBjdXJWYWwgPT09IHRoaXMuX3ZhbHVlTWluKCkgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5ld1ZhbCA9IHRoaXMuX3RyaW1BbGlnblZhbHVlKCBjdXJWYWwgLSBzdGVwICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3NsaWRlKCBldmVudCwgaW5kZXgsIG5ld1ZhbCApO1xuXHRcdH0sXG5cdFx0a2V5dXA6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdHZhciBpbmRleCA9ICQoIGV2ZW50LnRhcmdldCApLmRhdGEoIFwidWktc2xpZGVyLWhhbmRsZS1pbmRleFwiICk7XG5cblx0XHRcdGlmICggdGhpcy5fa2V5U2xpZGluZyApIHtcblx0XHRcdFx0dGhpcy5fa2V5U2xpZGluZyA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLl9zdG9wKCBldmVudCwgaW5kZXggKTtcblx0XHRcdFx0dGhpcy5fY2hhbmdlKCBldmVudCwgaW5kZXggKTtcblx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3MoICQoIGV2ZW50LnRhcmdldCApLCBudWxsLCBcInVpLXN0YXRlLWFjdGl2ZVwiICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59ICk7XG5cbn0gKSApO1xuIiwiKCBmdW5jdGlvbiggZmFjdG9yeSApIHtcblx0aWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoIFsgXCJqcXVlcnlcIiBdLCBmYWN0b3J5ICk7XG5cdH0gZWxzZSB7XG5cblx0XHQvLyBCcm93c2VyIGdsb2JhbHNcblx0XHRmYWN0b3J5KCBqUXVlcnkgKTtcblx0fVxufSAoIGZ1bmN0aW9uKCAkICkge1xuXG4kLnVpID0gJC51aSB8fCB7fTtcblxucmV0dXJuICQudWkudmVyc2lvbiA9IFwiMS4xMi4xXCI7XG5cbn0gKSApO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXHJcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXHJcbmV4cG9ydCB7IHV1aWQsIFdyYXBwZWRFcnJvciwgcmVzb2x2ZVByb21pc2VzRGljdCB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XHJcbmltcG9ydCB7IFdyYXBwZWRFcnJvciB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgd3JhcHBhYmxlIFByb21pc2UgcmVqZWN0aW9uIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZS5yZWplY3Qgd2l0aCBhIG5ldyBXcmFwcGVkRXJyb3JcclxuICogdGhhdCBoYXMgdGhlIHByb3ZpZGVkIG1lc3NhZ2UgYW5kIHdyYXBzIHRoZSBvcmlnaW5hbCBlcnJvciB0aGF0XHJcbiAqIGNhdXNlZCB0aGUgcHJvbWlzZSB0byByZWplY3QuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVqZWN0KG1lc3NhZ2UsIGxvZykge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHByb21pc2VSZWplY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICB2YXIgd3JhcHBlZF9lcnJvciA9IG5ldyBXcmFwcGVkRXJyb3IobWVzc2FnZSwgZXJyb3IpO1xyXG4gICAgICAgIGlmIChsb2cpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcih3cmFwcGVkX2Vycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHdyYXBwZWRfZXJyb3IpO1xyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogQXBwbHkgTWF0aEpheCByZW5kZXJpbmcgdG8gYW4gZWxlbWVudCwgYW5kIG9wdGlvbmFsbHkgc2V0IGl0cyB0ZXh0LlxyXG4gKlxyXG4gKiBJZiBNYXRoSmF4IGlzIG5vdCBhdmFpbGFibGUsIG1ha2Ugbm8gY2hhbmdlcy5cclxuICpcclxuICogUGFyYW1ldGVyc1xyXG4gKiAtLS0tLS0tLS0tXHJcbiAqIGVsZW1lbnQ6IE5vZGVcclxuICogdGV4dDogb3B0aW9uYWwgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNldChlbGVtZW50LCB0ZXh0KSB7XHJcbiAgICBpZiAodGV4dCAhPT0gdm9pZCAwKSB7XHJcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICB9XHJcbiAgICBpZiAod2luZG93Lk1hdGhKYXggIT09IHZvaWQgMCkge1xyXG4gICAgICAgIE1hdGhKYXguSHViLlF1ZXVlKFsnVHlwZXNldCcsIE1hdGhKYXguSHViLCBlbGVtZW50XSk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIGVzY2FwZSB0ZXh0IHRvIEhUTUxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVfaHRtbCh0ZXh0KSB7XHJcbiAgICB2YXIgZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlc2MudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgcmV0dXJuIGVzYy5pbm5lckhUTUw7XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXHJcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IENvcmVEZXNjcmlwdGlvbk1vZGVsIH0gZnJvbSAnLi93aWRnZXRfY29yZSc7XHJcbmltcG9ydCB7IERlc2NyaXB0aW9uVmlldywgRGVzY3JpcHRpb25TdHlsZU1vZGVsIH0gZnJvbSAnLi93aWRnZXRfZGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBET01XaWRnZXRWaWV3IH0gZnJvbSAnQGp1cHl0ZXItd2lkZ2V0cy9iYXNlJztcclxuaW1wb3J0IHsgdXVpZCB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkMy1mb3JtYXQnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgJ2pxdWVyeS11aS91aS93aWRnZXRzL3NsaWRlcic7XHJcbnZhciBJbnRNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhJbnRNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEludE1vZGVsKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIEludE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnSW50TW9kZWwnLFxyXG4gICAgICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSW50TW9kZWw7XHJcbn0oQ29yZURlc2NyaXB0aW9uTW9kZWwpKTtcclxuZXhwb3J0IHsgSW50TW9kZWwgfTtcclxudmFyIEJvdW5kZWRJbnRNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhCb3VuZGVkSW50TW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBCb3VuZGVkSW50TW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgQm91bmRlZEludE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnQm91bmRlZEludE1vZGVsJyxcclxuICAgICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgICAgIG1pbjogMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCb3VuZGVkSW50TW9kZWw7XHJcbn0oSW50TW9kZWwpKTtcclxuZXhwb3J0IHsgQm91bmRlZEludE1vZGVsIH07XHJcbnZhciBTbGlkZXJTdHlsZU1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNsaWRlclN0eWxlTW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTbGlkZXJTdHlsZU1vZGVsKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFNsaWRlclN0eWxlTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7IF9tb2RlbF9uYW1lOiAnU2xpZGVyU3R5bGVNb2RlbCcgfSk7XHJcbiAgICB9O1xyXG4gICAgU2xpZGVyU3R5bGVNb2RlbC5zdHlsZVByb3BlcnRpZXMgPSBfX2Fzc2lnbih7fSwgRGVzY3JpcHRpb25TdHlsZU1vZGVsLnN0eWxlUHJvcGVydGllcywgeyBoYW5kbGVfY29sb3I6IHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICcudWktc2xpZGVyLWhhbmRsZScsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2JhY2tncm91bmQtY29sb3InLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICAgICAgfSB9KTtcclxuICAgIHJldHVybiBTbGlkZXJTdHlsZU1vZGVsO1xyXG59KERlc2NyaXB0aW9uU3R5bGVNb2RlbCkpO1xyXG5leHBvcnQgeyBTbGlkZXJTdHlsZU1vZGVsIH07XHJcbnZhciBJbnRTbGlkZXJNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhJbnRTbGlkZXJNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEludFNsaWRlck1vZGVsKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIEludFNsaWRlck1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnSW50U2xpZGVyTW9kZWwnLFxyXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnSW50U2xpZGVyVmlldycsXHJcbiAgICAgICAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcsXHJcbiAgICAgICAgICAgIHJlYWRvdXQ6IHRydWUsXHJcbiAgICAgICAgICAgIHJlYWRvdXRfZm9ybWF0OiAnZCcsXHJcbiAgICAgICAgICAgIGNvbnRpbnVvdXNfdXBkYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzdHlsZTogbnVsbCxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEludFNsaWRlck1vZGVsLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKGF0dHJpYnV0ZXMsIG9wdGlvbnMpIHtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLCBhdHRyaWJ1dGVzLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLm9uKCdjaGFuZ2U6cmVhZG91dF9mb3JtYXQnLCB0aGlzLnVwZGF0ZV9yZWFkb3V0X2Zvcm1hdCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfcmVhZG91dF9mb3JtYXQoKTtcclxuICAgIH07XHJcbiAgICBJbnRTbGlkZXJNb2RlbC5wcm90b3R5cGUudXBkYXRlX3JlYWRvdXRfZm9ybWF0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucmVhZG91dF9mb3JtYXR0ZXIgPSBmb3JtYXQodGhpcy5nZXQoJ3JlYWRvdXRfZm9ybWF0JykpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBJbnRTbGlkZXJNb2RlbDtcclxufShCb3VuZGVkSW50TW9kZWwpKTtcclxuZXhwb3J0IHsgSW50U2xpZGVyTW9kZWwgfTtcclxudmFyIEludFJhbmdlU2xpZGVyTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoSW50UmFuZ2VTbGlkZXJNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEludFJhbmdlU2xpZGVyTW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEludFJhbmdlU2xpZGVyTW9kZWw7XHJcbn0oSW50U2xpZGVyTW9kZWwpKTtcclxuZXhwb3J0IHsgSW50UmFuZ2VTbGlkZXJNb2RlbCB9O1xyXG52YXIgQmFzZUludFNsaWRlclZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQmFzZUludFNsaWRlclZpZXcsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBCYXNlSW50U2xpZGVyVmlldygpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fcGFyc2VfdmFsdWUgPSBwYXJzZUludDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBCYXNlSW50U2xpZGVyVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXNsaWRlcicpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWhzbGlkZXInKTtcclxuICAgICAgICAodGhpcy4kc2xpZGVyID0gJCgnPGRpdiAvPicpKVxyXG4gICAgICAgICAgICAuc2xpZGVyKHtcclxuICAgICAgICAgICAgc2xpZGU6IHRoaXMuaGFuZGxlU2xpZGVyQ2hhbmdlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIHN0b3A6IHRoaXMuaGFuZGxlU2xpZGVyQ2hhbmdlZC5iaW5kKHRoaXMpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdzbGlkZXInKTtcclxuICAgICAgICAvLyBQdXQgdGhlIHNsaWRlciBpbiBhIGNvbnRhaW5lclxyXG4gICAgICAgIHRoaXMuc2xpZGVyX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzbGlkZXItY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJfY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuJHNsaWRlclswXSk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnNsaWRlcl9jb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMucmVhZG91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5yZWFkb3V0KTtcclxuICAgICAgICB0aGlzLnJlYWRvdXQuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXJlYWRvdXQnKTtcclxuICAgICAgICB0aGlzLnJlYWRvdXQuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xyXG4gICAgICAgIHRoaXMucmVhZG91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIC8vIFNldCBkZWZhdWx0cy5cclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfTtcclxuICAgIEJhc2VJbnRTbGlkZXJWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXHJcbiAgICAgICAgICogY2hhbmdlZCBieSBhbm90aGVyIHZpZXcgb3IgYnkgYSBzdGF0ZSB1cGRhdGUgZnJvbSB0aGUgYmFjay1lbmQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnVwZGF0ZWRfdmlldyAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAvLyBKUXVlcnkgc2xpZGVyIG9wdGlvbiBrZXlzLiAgVGhlc2Uga2V5cyBoYXBwZW4gdG8gaGF2ZSBhXHJcbiAgICAgICAgICAgIC8vIG9uZS10by1vbmUgbWFwcGluZyB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIGtleXMgb2YgdGhlIG1vZGVsLlxyXG4gICAgICAgICAgICB2YXIganF1ZXJ5X3NsaWRlcl9rZXlzID0gWydzdGVwJywgJ2Rpc2FibGVkJ107XHJcbiAgICAgICAgICAgIHZhciB0aGF0XzEgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGF0XzEuJHNsaWRlci5zbGlkZXIoe30pO1xyXG4gICAgICAgICAgICBqcXVlcnlfc2xpZGVyX2tleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW9kZWxfdmFsdWUgPSB0aGF0XzEubW9kZWwuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kZWxfdmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXRfMS4kc2xpZGVyLnNsaWRlcignb3B0aW9uJywga2V5LCBtb2RlbF92YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ2Rpc2FibGVkJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZG91dC5jb250ZW50RWRpdGFibGUgPSAnZmFsc2UnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkb3V0LmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgbWF4ID0gdGhpcy5tb2RlbC5nZXQoJ21heCcpO1xyXG4gICAgICAgICAgICB2YXIgbWluID0gdGhpcy5tb2RlbC5nZXQoJ21pbicpO1xyXG4gICAgICAgICAgICBpZiAobWluIDw9IG1heCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1heCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2xpZGVyLnNsaWRlcignb3B0aW9uJywgJ21heCcsIG1heCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobWluICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAnbWluJywgbWluKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBXT1JLQVJPVU5EIEZPUiBKUVVFUlkgU0xJREVSIEJVRy5cclxuICAgICAgICAgICAgLy8gVGhlIGhvcml6b250YWwgcG9zaXRpb24gb2YgdGhlIHNsaWRlciBoYW5kbGVcclxuICAgICAgICAgICAgLy8gZGVwZW5kcyBvbiB0aGUgdmFsdWUgb2YgdGhlIHNsaWRlciBhdCB0aGUgdGltZVxyXG4gICAgICAgICAgICAvLyBvZiBvcmllbnRhdGlvbiBjaGFuZ2UuICBCZWZvcmUgYXBwbHlpbmcgdGhlIG5ld1xyXG4gICAgICAgICAgICAvLyB3b3JrYXJvdW5kLCB3ZSBzZXQgdGhlIHZhbHVlIHRvIHRoZSBtaW5pbXVtIHRvXHJcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IHRoZSBob3Jpem9udGFsIHBsYWNlbWVudCBvZiB0aGVcclxuICAgICAgICAgICAgLy8gaGFuZGxlIGluIHRoZSB2ZXJ0aWNhbCBzbGlkZXIgaXMgYWx3YXlzXHJcbiAgICAgICAgICAgIC8vIGNvbnNpc3RlbnQuXHJcbiAgICAgICAgICAgIHZhciBvcmllbnRhdGlvbl8xID0gdGhpcy5tb2RlbC5nZXQoJ29yaWVudGF0aW9uJyk7XHJcbiAgICAgICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ29wdGlvbicsICdvcmllbnRhdGlvbicsIG9yaWVudGF0aW9uXzEpO1xyXG4gICAgICAgICAgICAvLyBVc2UgdGhlIHJpZ2h0IENTUyBjbGFzc2VzIGZvciB2ZXJ0aWNhbCAmIGhvcml6b250YWwgc2xpZGVyc1xyXG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb25fMSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd3aWRnZXQtaHNsaWRlcicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtdnNsaWRlcicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd3aWRnZXQtaW5saW5lLWhib3gnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS12Ym94Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dpZGdldC12c2xpZGVyJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1oc2xpZGVyJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dpZGdldC1pbmxpbmUtdmJveCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaW5saW5lLWhib3gnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcmVhZG91dCA9IHRoaXMubW9kZWwuZ2V0KCdyZWFkb3V0Jyk7XHJcbiAgICAgICAgICAgIGlmIChyZWFkb3V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWQudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXRfMS5yZWFkb3V0X292ZXJmbG93KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdF8xLnJlYWRvdXQuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3cnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXRfMS5yZWFkb3V0LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcmVhZG91dCBib3ggY29udGVudCBvdmVyZmxvd3MuXHJcbiAgICAgKi9cclxuICAgIEJhc2VJbnRTbGlkZXJWaWV3LnByb3RvdHlwZS5yZWFkb3V0X292ZXJmbG93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRvdXQuc2Nyb2xsV2lkdGggPiB0aGlzLnJlYWRvdXQuY2xpZW50V2lkdGg7XHJcbiAgICB9O1xyXG4gICAgQmFzZUludFNsaWRlclZpZXcucHJvdG90eXBlLmV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyBEaWN0aW9uYXJ5IG9mIGV2ZW50cyBhbmQgdGhlaXIgaGFuZGxlcnMuXHJcbiAgICAgICAgICAgICdzbGlkZSc6ICdoYW5kbGVTbGlkZXJDaGFuZ2UnLFxyXG4gICAgICAgICAgICAnc2xpZGVzdG9wJzogJ2hhbmRsZVNsaWRlckNoYW5nZWQnLFxyXG4gICAgICAgICAgICAnYmx1ciBbY29udGVudEVkaXRhYmxlPXRydWVdJzogJ2hhbmRsZVRleHRDaGFuZ2UnLFxyXG4gICAgICAgICAgICAna2V5ZG93biBbY29udGVudEVkaXRhYmxlPXRydWVdJzogJ2hhbmRsZUtleURvd24nXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBCYXNlSW50U2xpZGVyVmlldy5wcm90b3R5cGUuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHsgLyoga2V5Ym9hcmQga2V5Y29kZXMgYGVudGVyYCAqL1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVGV4dENoYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgc2xpZGVyIGJlZm9yZSBzZW5kaW5nIGl0IHRvIHRoZSBiYWNrLWVuZFxyXG4gICAgICogYW5kIGFwcGx5aW5nIGl0IHRvIHRoZSBvdGhlciB2aWV3cyBvbiB0aGUgcGFnZS5cclxuICAgICAqL1xyXG4gICAgQmFzZUludFNsaWRlclZpZXcucHJvdG90eXBlLl92YWxpZGF0ZV9zbGlkZV92YWx1ZSA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoeCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJhc2VJbnRTbGlkZXJWaWV3O1xyXG59KERlc2NyaXB0aW9uVmlldykpO1xyXG5leHBvcnQgeyBCYXNlSW50U2xpZGVyVmlldyB9O1xyXG52YXIgSW50UmFuZ2VTbGlkZXJWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEludFJhbmdlU2xpZGVyVmlldywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEludFJhbmdlU2xpZGVyVmlldygpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICAvLyByYW5nZSBudW1iZXJzIGNhbiBiZSBzZXBhcmF0ZWQgYnkgYSBoeXBoZW4sIGNvbG9uLCBvciBhbiBlbi1kYXNoXHJcbiAgICAgICAgX3RoaXMuX3JhbmdlX3JlZ2V4ID0gL15cXHMqKFsrLV0/XFxkKylcXHMqWy064oCTXVxccyooWystXT9cXGQrKS87XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgSW50UmFuZ2VTbGlkZXJWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcywgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy4kc2xpZGVyLnNsaWRlcignb3B0aW9uJywgJ3JhbmdlJywgdHJ1ZSk7XHJcbiAgICAgICAgLy8gdmFsdWVzIGZvciB0aGUgcmFuZ2UgY2FzZSBhcmUgdmFsaWRhdGVkIHB5dGhvbi1zaWRlIGluXHJcbiAgICAgICAgLy8gX0JvdW5kZWR7SW50LEZsb2F0fVJhbmdlV2lkZ2V0Ll92YWxpZGF0ZVxyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpO1xyXG4gICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ29wdGlvbicsICd2YWx1ZXMnLCB2YWx1ZS5zbGljZSgpKTtcclxuICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlVG9TdHJpbmcodmFsdWUpO1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgndmFsdWUnKSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgdmFsdWUsIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnRvdWNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogV3JpdGUgdmFsdWUgdG8gYSBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgSW50UmFuZ2VTbGlkZXJWaWV3LnByb3RvdHlwZS52YWx1ZVRvU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGZvcm1hdCA9IHRoaXMubW9kZWwucmVhZG91dF9mb3JtYXR0ZXI7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLm1hcChmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0KHYpO1xyXG4gICAgICAgIH0pLmpvaW4oJyDigJMgJyk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZSB2YWx1ZSBmcm9tIGEgc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIEludFJhbmdlU2xpZGVyVmlldy5wcm90b3R5cGUuc3RyaW5nVG9WYWx1ZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgLy8gcmFuZ2VzIGNhbiBiZSBleHByZXNzZWQgZWl0aGVyICd2YWwtdmFsJyBvciAndmFsOnZhbCcgKCtzcGFjZXMpXHJcbiAgICAgICAgdmFyIG1hdGNoID0gdGhpcy5fcmFuZ2VfcmVnZXguZXhlYyh0ZXh0KTtcclxuICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt0aGlzLl9wYXJzZV92YWx1ZShtYXRjaFsxXSksIHRoaXMuX3BhcnNlX3ZhbHVlKG1hdGNoWzJdKV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiB0aGlzIGhhbmRsZXMgdGhlIGVudHJ5IG9mIHRleHQgaW50byB0aGUgY29udGVudEVkaXRhYmxlIGxhYmVsIGZpcnN0LCB0aGVcclxuICAgICAqIHZhbHVlIGlzIGNoZWNrZWQgaWYgaXQgY29udGFpbnMgYSBwYXJzZWFibGUgdmFsdWUgdGhlbiBpdCBpcyBjbGFtcGVkXHJcbiAgICAgKiB3aXRoaW4gdGhlIG1pbi1tYXggcmFuZ2Ugb2YgdGhlIHNsaWRlciBmaW5hbGx5LCB0aGUgbW9kZWwgaXMgdXBkYXRlZCBpZlxyXG4gICAgICogdGhlIHZhbHVlIGlzIHRvIGJlIGNoYW5nZWRcclxuICAgICAqXHJcbiAgICAgKiBpZiBhbnkgb2YgdGhlc2UgY29uZGl0aW9ucyBhcmUgbm90IG1ldCwgdGhlIHRleHQgaXMgcmVzZXRcclxuICAgICAqL1xyXG4gICAgSW50UmFuZ2VTbGlkZXJWaWV3LnByb3RvdHlwZS5oYW5kbGVUZXh0Q2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuc3RyaW5nVG9WYWx1ZSh0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQpO1xyXG4gICAgICAgIHZhciB2bWluID0gdGhpcy5tb2RlbC5nZXQoJ21pbicpO1xyXG4gICAgICAgIHZhciB2bWF4ID0gdGhpcy5tb2RlbC5nZXQoJ21heCcpO1xyXG4gICAgICAgIC8vIHJlamVjdCBpbnB1dCB3aGVyZSBOYU4gb3IgbG93ZXIgPiB1cHBlclxyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fFxyXG4gICAgICAgICAgICBpc05hTih2YWx1ZVswXSkgfHxcclxuICAgICAgICAgICAgaXNOYU4odmFsdWVbMV0pIHx8XHJcbiAgICAgICAgICAgICh2YWx1ZVswXSA+IHZhbHVlWzFdKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlVG9TdHJpbmcodGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY2xhbXAgdG8gcmFuZ2VcclxuICAgICAgICAgICAgdmFsdWUgPSBbTWF0aC5tYXgoTWF0aC5taW4odmFsdWVbMF0sIHZtYXgpLCB2bWluKSxcclxuICAgICAgICAgICAgICAgIE1hdGgubWF4KE1hdGgubWluKHZhbHVlWzFdLCB2bWF4KSwgdm1pbildO1xyXG4gICAgICAgICAgICBpZiAoKHZhbHVlWzBdICE9PSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKVswXSkgfHxcclxuICAgICAgICAgICAgICAgICh2YWx1ZVsxXSAhPT0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJylbMV0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlVG9TdHJpbmcodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgdmFsdWUsIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkb3V0LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZVRvU3RyaW5nKHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBzbGlkZXIgdmFsdWUgaXMgY2hhbmdpbmcuXHJcbiAgICAgKi9cclxuICAgIEludFJhbmdlU2xpZGVyVmlldy5wcm90b3R5cGUuaGFuZGxlU2xpZGVyQ2hhbmdlID0gZnVuY3Rpb24gKGUsIHVpKSB7XHJcbiAgICAgICAgdmFyIGFjdHVhbF92YWx1ZSA9IHVpLnZhbHVlcy5tYXAodGhpcy5fdmFsaWRhdGVfc2xpZGVfdmFsdWUpO1xyXG4gICAgICAgIHRoaXMucmVhZG91dC50ZXh0Q29udGVudCA9IHRoaXMudmFsdWVUb1N0cmluZyhhY3R1YWxfdmFsdWUpO1xyXG4gICAgICAgIC8vIE9ubHkgcGVyc2lzdCB0aGUgdmFsdWUgd2hpbGUgc2xpZGluZyBpZiB0aGUgY29udGludW91c191cGRhdGVcclxuICAgICAgICAvLyB0cmFpdCBpcyBzZXQgdG8gdHJ1ZS5cclxuICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ2NvbnRpbnVvdXNfdXBkYXRlJykpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2VkKGUsIHVpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgc2xpZGVyIHZhbHVlIGhhcyBjaGFuZ2VkLlxyXG4gICAgICpcclxuICAgICAqIENhbGxpbmcgbW9kZWwuc2V0IHdpbGwgdHJpZ2dlciBhbGwgb2YgdGhlIG90aGVyIHZpZXdzIG9mIHRoZVxyXG4gICAgICogbW9kZWwgdG8gdXBkYXRlLlxyXG4gICAgICovXHJcbiAgICBJbnRSYW5nZVNsaWRlclZpZXcucHJvdG90eXBlLmhhbmRsZVNsaWRlckNoYW5nZWQgPSBmdW5jdGlvbiAoZSwgdWkpIHtcclxuICAgICAgICB2YXIgYWN0dWFsX3ZhbHVlID0gdWkudmFsdWVzLm1hcCh0aGlzLl92YWxpZGF0ZV9zbGlkZV92YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgYWN0dWFsX3ZhbHVlLCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcclxuICAgICAgICB0aGlzLnRvdWNoKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEludFJhbmdlU2xpZGVyVmlldztcclxufShCYXNlSW50U2xpZGVyVmlldykpO1xyXG5leHBvcnQgeyBJbnRSYW5nZVNsaWRlclZpZXcgfTtcclxudmFyIEludFNsaWRlclZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoSW50U2xpZGVyVmlldywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEludFNsaWRlclZpZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgSW50U2xpZGVyVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xyXG4gICAgICAgIHZhciBtaW4gPSB0aGlzLm1vZGVsLmdldCgnbWluJyk7XHJcbiAgICAgICAgdmFyIG1heCA9IHRoaXMubW9kZWwuZ2V0KCdtYXgnKTtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKTtcclxuICAgICAgICBpZiAodmFsdWUgPiBtYXgpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBtYXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIDwgbWluKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gbWluO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAndmFsdWUnLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5yZWFkb3V0LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZVRvU3RyaW5nKHZhbHVlKTtcclxuICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykgIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2V0KCd2YWx1ZScsIHZhbHVlLCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcclxuICAgICAgICAgICAgdGhpcy50b3VjaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFdyaXRlIHZhbHVlIHRvIGEgc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIEludFNsaWRlclZpZXcucHJvdG90eXBlLnZhbHVlVG9TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB2YXIgZm9ybWF0ID0gdGhpcy5tb2RlbC5yZWFkb3V0X2Zvcm1hdHRlcjtcclxuICAgICAgICByZXR1cm4gZm9ybWF0KHZhbHVlKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFBhcnNlIHZhbHVlIGZyb20gYSBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgSW50U2xpZGVyVmlldy5wcm90b3R5cGUuc3RyaW5nVG9WYWx1ZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnNlX3ZhbHVlKHRleHQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogdGhpcyBoYW5kbGVzIHRoZSBlbnRyeSBvZiB0ZXh0IGludG8gdGhlIGNvbnRlbnRFZGl0YWJsZSBsYWJlbCBmaXJzdCwgdGhlXHJcbiAgICAgKiB2YWx1ZSBpcyBjaGVja2VkIGlmIGl0IGNvbnRhaW5zIGEgcGFyc2VhYmxlIHZhbHVlIHRoZW4gaXQgaXMgY2xhbXBlZFxyXG4gICAgICogd2l0aGluIHRoZSBtaW4tbWF4IHJhbmdlIG9mIHRoZSBzbGlkZXIgZmluYWxseSwgdGhlIG1vZGVsIGlzIHVwZGF0ZWQgaWZcclxuICAgICAqIHRoZSB2YWx1ZSBpcyB0byBiZSBjaGFuZ2VkXHJcbiAgICAgKlxyXG4gICAgICogaWYgYW55IG9mIHRoZXNlIGNvbmRpdGlvbnMgYXJlIG5vdCBtZXQsIHRoZSB0ZXh0IGlzIHJlc2V0XHJcbiAgICAgKi9cclxuICAgIEludFNsaWRlclZpZXcucHJvdG90eXBlLmhhbmRsZVRleHRDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5zdHJpbmdUb1ZhbHVlKHRoaXMucmVhZG91dC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgdmFyIHZtaW4gPSB0aGlzLm1vZGVsLmdldCgnbWluJyk7XHJcbiAgICAgICAgdmFyIHZtYXggPSB0aGlzLm1vZGVsLmdldCgnbWF4Jyk7XHJcbiAgICAgICAgaWYgKGlzTmFOKHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlVG9TdHJpbmcodGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgdm1heCksIHZtaW4pO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlVG9TdHJpbmcodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgdmFsdWUsIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkb3V0LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZVRvU3RyaW5nKHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBzbGlkZXIgdmFsdWUgaXMgY2hhbmdpbmcuXHJcbiAgICAgKi9cclxuICAgIEludFNsaWRlclZpZXcucHJvdG90eXBlLmhhbmRsZVNsaWRlckNoYW5nZSA9IGZ1bmN0aW9uIChlLCB1aSkge1xyXG4gICAgICAgIHZhciBhY3R1YWxfdmFsdWUgPSB0aGlzLl92YWxpZGF0ZV9zbGlkZV92YWx1ZSh1aS52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5yZWFkb3V0LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZVRvU3RyaW5nKGFjdHVhbF92YWx1ZSk7XHJcbiAgICAgICAgLy8gT25seSBwZXJzaXN0IHRoZSB2YWx1ZSB3aGlsZSBzbGlkaW5nIGlmIHRoZSBjb250aW51b3VzX3VwZGF0ZVxyXG4gICAgICAgIC8vIHRyYWl0IGlzIHNldCB0byB0cnVlLlxyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnY29udGludW91c191cGRhdGUnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNsaWRlckNoYW5nZWQoZSwgdWkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBzbGlkZXIgdmFsdWUgaGFzIGNoYW5nZWQuXHJcbiAgICAgKlxyXG4gICAgICogQ2FsbGluZyBtb2RlbC5zZXQgd2lsbCB0cmlnZ2VyIGFsbCBvZiB0aGUgb3RoZXIgdmlld3Mgb2YgdGhlXHJcbiAgICAgKiBtb2RlbCB0byB1cGRhdGUuXHJcbiAgICAgKi9cclxuICAgIEludFNsaWRlclZpZXcucHJvdG90eXBlLmhhbmRsZVNsaWRlckNoYW5nZWQgPSBmdW5jdGlvbiAoZSwgdWkpIHtcclxuICAgICAgICB2YXIgYWN0dWFsX3ZhbHVlID0gdGhpcy5fdmFsaWRhdGVfc2xpZGVfdmFsdWUodWkudmFsdWUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCd2YWx1ZScsIGFjdHVhbF92YWx1ZSwgeyB1cGRhdGVkX3ZpZXc6IHRoaXMgfSk7XHJcbiAgICAgICAgdGhpcy50b3VjaCgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBJbnRTbGlkZXJWaWV3O1xyXG59KEJhc2VJbnRTbGlkZXJWaWV3KSk7XHJcbmV4cG9ydCB7IEludFNsaWRlclZpZXcgfTtcclxudmFyIEludFRleHRNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhJbnRUZXh0TW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBJbnRUZXh0TW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgSW50VGV4dE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnSW50VGV4dE1vZGVsJyxcclxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0ludFRleHRWaWV3JyxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250aW51b3VzX3VwZGF0ZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEludFRleHRNb2RlbDtcclxufShJbnRNb2RlbCkpO1xyXG5leHBvcnQgeyBJbnRUZXh0TW9kZWwgfTtcclxudmFyIEJvdW5kZWRJbnRUZXh0TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQm91bmRlZEludFRleHRNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEJvdW5kZWRJbnRUZXh0TW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgQm91bmRlZEludFRleHRNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0JvdW5kZWRJbnRUZXh0TW9kZWwnLFxyXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnSW50VGV4dFZpZXcnLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRpbnVvdXNfdXBkYXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3RlcDogMSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQm91bmRlZEludFRleHRNb2RlbDtcclxufShCb3VuZGVkSW50TW9kZWwpKTtcclxuZXhwb3J0IHsgQm91bmRlZEludFRleHRNb2RlbCB9O1xyXG52YXIgSW50VGV4dFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoSW50VGV4dFZpZXcsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBJbnRUZXh0VmlldygpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fcGFyc2VfdmFsdWUgPSBwYXJzZUludDtcclxuICAgICAgICBfdGhpcy5fZGVmYXVsdF9zdGVwID0gJzEnO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIEludFRleHRWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtdGV4dCcpO1xyXG4gICAgICAgIHRoaXMudGV4dGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy50ZXh0Ym94LnR5cGUgPSAnbnVtYmVyJztcclxuICAgICAgICB0aGlzLnRleHRib3gucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGV4dGJveC5pZCA9IHRoaXMubGFiZWwuaHRtbEZvciA9IHV1aWQoKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMudGV4dGJveCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTsgLy8gU2V0IGRlZmF1bHRzLlxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcclxuICAgICAqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXHJcbiAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cclxuICAgICAqL1xyXG4gICAgSW50VGV4dFZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnVwZGF0ZWRfdmlldyAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcnNlX3ZhbHVlKHRoaXMudGV4dGJveC52YWx1ZSkgIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRib3gudmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnbWluJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0Ym94Lm1pbiA9IHRoaXMubW9kZWwuZ2V0KCdtaW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ21heCcpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dGJveC5tYXggPSB0aGlzLm1vZGVsLmdldCgnbWF4Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2V0KCdzdGVwJykgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5tb2RlbC5nZXQoJ3N0ZXAnKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0Ym94LnN0ZXAgPSB0aGlzLm1vZGVsLmdldCgnc3RlcCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0Ym94LnN0ZXAgPSB0aGlzLl9kZWZhdWx0X3N0ZXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50ZXh0Ym94LmRpc2FibGVkID0gdGhpcy5tb2RlbC5nZXQoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIEludFRleHRWaWV3LnByb3RvdHlwZS5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgJ2tleWRvd24gaW5wdXQnOiAnaGFuZGxlS2V5RG93bicsXHJcbiAgICAgICAgICAgICdrZXlwcmVzcyBpbnB1dCc6ICdoYW5kbGVLZXlwcmVzcycsXHJcbiAgICAgICAgICAgICdrZXl1cCBpbnB1dCc6ICdoYW5kbGVLZXlVcCcsXHJcbiAgICAgICAgICAgICdpbnB1dCBpbnB1dCc6ICdoYW5kbGVDaGFuZ2luZycsXHJcbiAgICAgICAgICAgICdjaGFuZ2UgaW5wdXQnOiAnaGFuZGxlQ2hhbmdlZCdcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGtleSBkb3duXHJcbiAgICAgKlxyXG4gICAgICogU3RvcCBwcm9wYWdhdGlvbiBzbyB0aGUgZXZlbnQgaXNuJ3Qgc2VudCB0byB0aGUgYXBwbGljYXRpb24uXHJcbiAgICAgKi9cclxuICAgIEludFRleHRWaWV3LnByb3RvdHlwZS5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyBrZXkgcHJlc3NcclxuICAgICAqL1xyXG4gICAgSW50VGV4dFZpZXcucHJvdG90eXBlLmhhbmRsZUtleXByZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoL1tlLC5cXHNdLy50ZXN0KFN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlKSkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBrZXkgdXBcclxuICAgICAqL1xyXG4gICAgSW50VGV4dFZpZXcucHJvdG90eXBlLmhhbmRsZUtleVVwID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS5hbHRLZXkgfHwgZS5jdHJsS2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIC8qIHJlbW92ZSBpbnZhbGlkIGNoYXJhY3RlcnMgKi9cclxuICAgICAgICB2YXIgdmFsdWUgPSB0YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bZSwuXFxzXS9nLCBcIlwiKTtcclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID49IDEpIHtcclxuICAgICAgICAgICAgdmFyIHN1YnZhbHVlID0gdmFsdWUuc3Vic3RyKDEpO1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlWzBdICsgc3VidmFsdWUucmVwbGFjZSgvWystXS9nLCBcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRhcmdldC52YWx1ZSAhPSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENhbGwgdGhlIHN1Ym1pdCBoYW5kbGVyIGlmIGNvbnRpbnVvdXMgdXBkYXRlIGlzIHRydWUgYW5kIHdlIGFyZSBub3RcclxuICAgICAqIG9idmlvdXNseSBpbmNvbXBsZXRlLlxyXG4gICAgICovXHJcbiAgICBJbnRUZXh0Vmlldy5wcm90b3R5cGUuaGFuZGxlQ2hhbmdpbmcgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICB2YXIgdHJpbW1lZCA9IHRhcmdldC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKHRyaW1tZWQgPT09ICcnIHx8IChbJy0nLCAnLS4nLCAnLicsICcrLicsICcrJ10uaW5kZXhPZih0cmltbWVkKSA+PSAwKSkge1xyXG4gICAgICAgICAgICAvLyBpbmNvbXBsZXRlIG51bWJlclxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnY29udGludW91c191cGRhdGUnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZWQoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQXBwbGllcyB2YWxpZGF0ZWQgaW5wdXQuXHJcbiAgICAgKi9cclxuICAgIEludFRleHRWaWV3LnByb3RvdHlwZS5oYW5kbGVDaGFuZ2VkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgdmFyIG51bWVyaWNhbFZhbHVlID0gdGhpcy5fcGFyc2VfdmFsdWUodGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAvLyBJZiBwYXJzZSBmYWlsZWQsIHJlc2V0IHZhbHVlIHRvIHZhbHVlIHN0b3JlZCBpbiBtb2RlbC5cclxuICAgICAgICBpZiAoaXNOYU4obnVtZXJpY2FsVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9IHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSGFuZGxlIGJvdGggdGhlIHVuYm91bmRlZCBhbmQgYm91bmRlZCBjYXNlIGJ5XHJcbiAgICAgICAgICAgIC8vIGNoZWNraW5nIHRvIHNlZSBpZiB0aGUgbWF4L21pbiBwcm9wZXJ0aWVzIGFyZSBkZWZpbmVkXHJcbiAgICAgICAgICAgIHZhciBib3VuZGVkVmFsdWUgPSBudW1lcmljYWxWYWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2V0KCdtYXgnKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBib3VuZGVkVmFsdWUgPSBNYXRoLm1pbih0aGlzLm1vZGVsLmdldCgnbWF4JyksIGJvdW5kZWRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2V0KCdtaW4nKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBib3VuZGVkVmFsdWUgPSBNYXRoLm1heCh0aGlzLm1vZGVsLmdldCgnbWluJyksIGJvdW5kZWRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJvdW5kZWRWYWx1ZSAhPT0gbnVtZXJpY2FsVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9IGJvdW5kZWRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIG51bWVyaWNhbFZhbHVlID0gYm91bmRlZFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSB2YWx1ZSBpZiBpdCBoYXMgY2hhbmdlZC5cclxuICAgICAgICAgICAgaWYgKG51bWVyaWNhbFZhbHVlICE9PSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgbnVtZXJpY2FsVmFsdWUsIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBJbnRUZXh0VmlldztcclxufShEZXNjcmlwdGlvblZpZXcpKTtcclxuZXhwb3J0IHsgSW50VGV4dFZpZXcgfTtcclxudmFyIFByb2dyZXNzU3R5bGVNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhQcm9ncmVzc1N0eWxlTW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBQcm9ncmVzc1N0eWxlTW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgUHJvZ3Jlc3NTdHlsZU1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwgeyBfbW9kZWxfbmFtZTogJ1Byb2dyZXNzU3R5bGVNb2RlbCcgfSk7XHJcbiAgICB9O1xyXG4gICAgUHJvZ3Jlc3NTdHlsZU1vZGVsLnN0eWxlUHJvcGVydGllcyA9IF9fYXNzaWduKHt9LCBEZXNjcmlwdGlvblN0eWxlTW9kZWwuc3R5bGVQcm9wZXJ0aWVzLCB7IGJhcl9jb2xvcjoge1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJy5wcm9ncmVzcy1iYXInLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6ICdiYWNrZ3JvdW5kLWNvbG9yJyxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgICAgIH0gfSk7XHJcbiAgICByZXR1cm4gUHJvZ3Jlc3NTdHlsZU1vZGVsO1xyXG59KERlc2NyaXB0aW9uU3R5bGVNb2RlbCkpO1xyXG5leHBvcnQgeyBQcm9ncmVzc1N0eWxlTW9kZWwgfTtcclxudmFyIEludFByb2dyZXNzTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoSW50UHJvZ3Jlc3NNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEludFByb2dyZXNzTW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgSW50UHJvZ3Jlc3NNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0ludFByb2dyZXNzTW9kZWwnLFxyXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnUHJvZ3Jlc3NWaWV3JyxcclxuICAgICAgICAgICAgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyxcclxuICAgICAgICAgICAgYmFyX3N0eWxlOiAnJyxcclxuICAgICAgICAgICAgc3R5bGU6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSW50UHJvZ3Jlc3NNb2RlbDtcclxufShCb3VuZGVkSW50TW9kZWwpKTtcclxuZXhwb3J0IHsgSW50UHJvZ3Jlc3NNb2RlbCB9O1xyXG52YXIgUHJvZ3Jlc3NWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFByb2dyZXNzVmlldywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFByb2dyZXNzVmlldygpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBQcm9ncmVzc1ZpZXcucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAocGFyYW1ldGVycykge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHBhcmFtZXRlcnMpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpiYXJfc3R5bGUnLCB0aGlzLnVwZGF0ZV9iYXJfc3R5bGUpO1xyXG4gICAgICAgIHRoaXMucFdpZGdldC5hZGRDbGFzcygnanVweXRlci13aWRnZXRzJyk7XHJcbiAgICB9O1xyXG4gICAgUHJvZ3Jlc3NWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICB2YXIgb3JpZW50YXRpb24gPSB0aGlzLm1vZGVsLmdldCgnb3JpZW50YXRpb24nKTtcclxuICAgICAgICB2YXIgY2xhc3NOYW1lID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/XHJcbiAgICAgICAgICAgICd3aWRnZXQtaHByb2dyZXNzJyA6ICd3aWRnZXQtdnByb2dyZXNzJztcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcy5jbGFzc0xpc3QuYWRkKCdwcm9ncmVzcycpO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3Muc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5wcm9ncmVzcyk7XHJcbiAgICAgICAgdGhpcy5iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmJhci5jbGFzc0xpc3QuYWRkKCdwcm9ncmVzcy1iYXInKTtcclxuICAgICAgICB0aGlzLmJhci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgdGhpcy5iYXIuc3R5bGUuYm90dG9tID0gJzBweCc7XHJcbiAgICAgICAgdGhpcy5iYXIuc3R5bGUubGVmdCA9ICcwcHgnO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MuYXBwZW5kQ2hpbGQodGhpcy5iYXIpO1xyXG4gICAgICAgIC8vIFNldCBkZWZhdWx0cy5cclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0X2Jhcl9zdHlsZSgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcclxuICAgICAqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXHJcbiAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cclxuICAgICAqL1xyXG4gICAgUHJvZ3Jlc3NWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XHJcbiAgICAgICAgdmFyIG1heCA9IHRoaXMubW9kZWwuZ2V0KCdtYXgnKTtcclxuICAgICAgICB2YXIgbWluID0gdGhpcy5tb2RlbC5nZXQoJ21pbicpO1xyXG4gICAgICAgIHZhciBvcmllbnRhdGlvbiA9IHRoaXMubW9kZWwuZ2V0KCdvcmllbnRhdGlvbicpO1xyXG4gICAgICAgIHZhciBwZXJjZW50ID0gMTAwLjAgKiAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbik7XHJcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd3aWRnZXQtaW5saW5lLXZib3gnKTtcclxuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd3aWRnZXQtdnByb2dyZXNzJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWhwcm9ncmVzcycpO1xyXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS53aWR0aCA9IHBlcmNlbnQgKyAnJSc7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2lkZ2V0LWhwcm9ncmVzcycpO1xyXG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtdmJveCcpO1xyXG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC12cHJvZ3Jlc3MnKTtcclxuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmhlaWdodCA9IHBlcmNlbnQgKyAnJSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIFByb2dyZXNzVmlldy5wcm90b3R5cGUudXBkYXRlX2Jhcl9zdHlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9tYXBwZWRfY2xhc3NlcyhQcm9ncmVzc1ZpZXcuY2xhc3NfbWFwLCAnYmFyX3N0eWxlJywgdGhpcy5iYXIpO1xyXG4gICAgfTtcclxuICAgIFByb2dyZXNzVmlldy5wcm90b3R5cGUuc2V0X2Jhcl9zdHlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNldF9tYXBwZWRfY2xhc3NlcyhQcm9ncmVzc1ZpZXcuY2xhc3NfbWFwLCAnYmFyX3N0eWxlJywgdGhpcy5iYXIpO1xyXG4gICAgfTtcclxuICAgIFByb2dyZXNzVmlldy5jbGFzc19tYXAgPSB7XHJcbiAgICAgICAgc3VjY2VzczogWydwcm9ncmVzcy1iYXItc3VjY2VzcyddLFxyXG4gICAgICAgIGluZm86IFsncHJvZ3Jlc3MtYmFyLWluZm8nXSxcclxuICAgICAgICB3YXJuaW5nOiBbJ3Byb2dyZXNzLWJhci13YXJuaW5nJ10sXHJcbiAgICAgICAgZGFuZ2VyOiBbJ3Byb2dyZXNzLWJhci1kYW5nZXInXVxyXG4gICAgfTtcclxuICAgIHJldHVybiBQcm9ncmVzc1ZpZXc7XHJcbn0oRGVzY3JpcHRpb25WaWV3KSk7XHJcbmV4cG9ydCB7IFByb2dyZXNzVmlldyB9O1xyXG52YXIgUGxheU1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFBsYXlNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFBsYXlNb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBQbGF5TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcclxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdQbGF5TW9kZWwnLFxyXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnUGxheVZpZXcnLFxyXG4gICAgICAgICAgICBfcGxheWluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIF9yZXBlYXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93X3JlcGVhdDogdHJ1ZSxcclxuICAgICAgICAgICAgaW50ZXJ2YWw6IDEwMCxcclxuICAgICAgICAgICAgc3RlcDogMSxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFBsYXlNb2RlbC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChhdHRyaWJ1dGVzLCBvcHRpb25zKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcywgYXR0cmlidXRlcywgb3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gICAgUGxheU1vZGVsLnByb3RvdHlwZS5sb29wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldCgnX3BsYXlpbmcnKSkge1xyXG4gICAgICAgICAgICB2YXIgbmV4dF92YWx1ZSA9IHRoaXMuZ2V0KCd2YWx1ZScpICsgdGhpcy5nZXQoJ3N0ZXAnKTtcclxuICAgICAgICAgICAgaWYgKG5leHRfdmFsdWUgPD0gdGhpcy5nZXQoJ21heCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgndmFsdWUnLCBuZXh0X3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVfbmV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdfcmVwZWF0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldCgndmFsdWUnLCB0aGlzLmdldCgnbWluJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVfbmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoJ19wbGF5aW5nJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZV9jaGFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFBsYXlNb2RlbC5wcm90b3R5cGUuc2NoZWR1bGVfbmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmxvb3AuYmluZCh0aGlzKSwgdGhpcy5nZXQoJ2ludGVydmFsJykpO1xyXG4gICAgfTtcclxuICAgIFBsYXlNb2RlbC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNldCgnX3BsYXlpbmcnLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgdGhpcy5nZXQoJ21pbicpKTtcclxuICAgICAgICB0aGlzLnNhdmVfY2hhbmdlcygpO1xyXG4gICAgfTtcclxuICAgIFBsYXlNb2RlbC5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXQoJ19wbGF5aW5nJywgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9jaGFuZ2VzKCk7XHJcbiAgICB9O1xyXG4gICAgUGxheU1vZGVsLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2V0KCdfcGxheWluZycsIHRydWUpO1xyXG4gICAgICAgIGlmICh0aGlzLmdldCgndmFsdWUnKSA9PSB0aGlzLmdldCgnbWF4JykpIHtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIHZhbHVlIGlzIGF0IHRoZSBlbmQsIHJlc2V0IGlmIGZpcnN0LCBhbmQgdGhlbiBzY2hlZHVsZSB0aGUgbmV4dFxyXG4gICAgICAgICAgICB0aGlzLnNldCgndmFsdWUnLCB0aGlzLmdldCgnbWluJykpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlX25leHQoKTtcclxuICAgICAgICAgICAgdGhpcy5zYXZlX2NoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBkaXJlY3RseSBzdGFydCB3aXRoIHRoZSBuZXh0IHZhbHVlXHJcbiAgICAgICAgICAgIC8vIGxvb3Agd2lsbCBjYWxsIHNhdmVfY2hhbmdlcyBpbiB0aGlzIGNhc2VcclxuICAgICAgICAgICAgdGhpcy5sb29wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFBsYXlNb2RlbC5wcm90b3R5cGUucmVwZWF0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2V0KCdfcmVwZWF0JywgIXRoaXMuZ2V0KCdfcmVwZWF0JykpO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9jaGFuZ2VzKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBsYXlNb2RlbDtcclxufShCb3VuZGVkSW50TW9kZWwpKTtcclxuZXhwb3J0IHsgUGxheU1vZGVsIH07XHJcbnZhciBQbGF5VmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhQbGF5VmlldywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFBsYXlWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFBsYXlWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtcGxheScpO1xyXG4gICAgICAgIHRoaXMucGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICB0aGlzLnN0b3BCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICB0aGlzLnJlcGVhdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi5jbGFzc05hbWUgPSAnanVweXRlci1idXR0b24nO1xyXG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24uY2xhc3NOYW1lID0gJ2p1cHl0ZXItYnV0dG9uJztcclxuICAgICAgICB0aGlzLnN0b3BCdXR0b24uY2xhc3NOYW1lID0gJ2p1cHl0ZXItYnV0dG9uJztcclxuICAgICAgICB0aGlzLnJlcGVhdEJ1dHRvbi5jbGFzc05hbWUgPSAnanVweXRlci1idXR0b24nO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5wbGF5QnV0dG9uKTsgLy8gVG9nZ2xlIGJ1dHRvbiB3aXRoIHBsYXlpbmdcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMucGF1c2VCdXR0b24pOyAvLyBEaXNhYmxlIGlmIG5vdCBwbGF5aW5nXHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnN0b3BCdXR0b24pOyAvLyBEaXNhYmxlIGlmIG5vdCBwbGF5aW5nXHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnJlcGVhdEJ1dHRvbik7IC8vIEFsd2F5cyBlbmFibGVkLCBidXQgbWF5IGJlIGhpZGRlblxyXG4gICAgICAgIHZhciBwbGF5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgICBwbGF5SWNvbi5jbGFzc05hbWUgPSAnZmEgZmEtcGxheSc7XHJcbiAgICAgICAgdGhpcy5wbGF5QnV0dG9uLmFwcGVuZENoaWxkKHBsYXlJY29uKTtcclxuICAgICAgICB2YXIgcGF1c2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICAgIHBhdXNlSWNvbi5jbGFzc05hbWUgPSAnZmEgZmEtcGF1c2UnO1xyXG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24uYXBwZW5kQ2hpbGQocGF1c2VJY29uKTtcclxuICAgICAgICB2YXIgc3RvcEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgc3RvcEljb24uY2xhc3NOYW1lID0gJ2ZhIGZhLXN0b3AnO1xyXG4gICAgICAgIHRoaXMuc3RvcEJ1dHRvbi5hcHBlbmRDaGlsZChzdG9wSWNvbik7XHJcbiAgICAgICAgdmFyIHJlcGVhdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgcmVwZWF0SWNvbi5jbGFzc05hbWUgPSAnZmEgZmEtcmV0d2VldCc7XHJcbiAgICAgICAgdGhpcy5yZXBlYXRCdXR0b24uYXBwZW5kQ2hpbGQocmVwZWF0SWNvbik7XHJcbiAgICAgICAgdGhpcy5wbGF5QnV0dG9uLm9uY2xpY2sgPSB0aGlzLm1vZGVsLnBsYXkuYmluZCh0aGlzLm1vZGVsKTtcclxuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uLm9uY2xpY2sgPSB0aGlzLm1vZGVsLnBhdXNlLmJpbmQodGhpcy5tb2RlbCk7XHJcbiAgICAgICAgdGhpcy5zdG9wQnV0dG9uLm9uY2xpY2sgPSB0aGlzLm1vZGVsLnN0b3AuYmluZCh0aGlzLm1vZGVsKTtcclxuICAgICAgICB0aGlzLnJlcGVhdEJ1dHRvbi5vbmNsaWNrID0gdGhpcy5tb2RlbC5yZXBlYXQuYmluZCh0aGlzLm1vZGVsKTtcclxuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6X3BsYXlpbmcnLCB0aGlzLnVwZGF0ZV9wbGF5aW5nKTtcclxuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6X3JlcGVhdCcsIHRoaXMudXBkYXRlX3JlcGVhdCk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOnNob3dfcmVwZWF0JywgdGhpcy51cGRhdGVfcmVwZWF0KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9wbGF5aW5nKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfcmVwZWF0KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH07XHJcbiAgICBQbGF5Vmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBkaXNhYmxlZCA9IHRoaXMubW9kZWwuZ2V0KCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24uZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICAgICAgICB0aGlzLnN0b3BCdXR0b24uZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICAgICAgICB0aGlzLnJlcGVhdEJ1dHRvbi5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX3BsYXlpbmcoKTtcclxuICAgIH07XHJcbiAgICBQbGF5Vmlldy5wcm90b3R5cGUudXBkYXRlX3BsYXlpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBsYXlpbmcgPSB0aGlzLm1vZGVsLmdldCgnX3BsYXlpbmcnKTtcclxuICAgICAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLm1vZGVsLmdldCgnZGlzYWJsZWQnKTtcclxuICAgICAgICBpZiAocGxheWluZykge1xyXG4gICAgICAgICAgICBpZiAoIWRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wbGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21vZC1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGxheUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2QtYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFBsYXlWaWV3LnByb3RvdHlwZS51cGRhdGVfcmVwZWF0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZXBlYXQgPSB0aGlzLm1vZGVsLmdldCgnX3JlcGVhdCcpO1xyXG4gICAgICAgIHRoaXMucmVwZWF0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSB0aGlzLm1vZGVsLmdldCgnc2hvd19yZXBlYXQnKSA/IHRoaXMucGxheUJ1dHRvbi5zdHlsZS5kaXNwbGF5IDogJ25vbmUnO1xyXG4gICAgICAgIGlmIChyZXBlYXQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBlYXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnbW9kLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBlYXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gUGxheVZpZXc7XHJcbn0oRE9NV2lkZ2V0VmlldykpO1xyXG5leHBvcnQgeyBQbGF5VmlldyB9O1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cclxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsgdW5wYWNrX21vZGVscyB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XHJcbmltcG9ydCB7IENvcmVXaWRnZXRNb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG52YXIgRGlyZWN0aW9uYWxMaW5rTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRGlyZWN0aW9uYWxMaW5rTW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBEaXJlY3Rpb25hbExpbmtNb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBEaXJlY3Rpb25hbExpbmtNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgc291cmNlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnRGlyZWN0aW9uYWxMaW5rTW9kZWwnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgRGlyZWN0aW9uYWxMaW5rTW9kZWwucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoYXR0cmlidXRlcywgb3B0aW9ucykge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIGF0dHJpYnV0ZXMsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMub24oJ2NoYW5nZScsIHRoaXMudXBkYXRlQmluZGluZ3MsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQmluZGluZ3MoKTtcclxuICAgIH07XHJcbiAgICBEaXJlY3Rpb25hbExpbmtNb2RlbC5wcm90b3R5cGUudXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoc291cmNlTW9kZWwsIHNvdXJjZUF0dHIsIHRhcmdldE1vZGVsLCB0YXJnZXRBdHRyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3VwZGF0aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdXBkYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRNb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TW9kZWwuc2V0KHRhcmdldEF0dHIsIHNvdXJjZU1vZGVsLmdldChzb3VyY2VBdHRyKSk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRNb2RlbC5zYXZlX2NoYW5nZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgRGlyZWN0aW9uYWxMaW5rTW9kZWwucHJvdG90eXBlLnVwZGF0ZUJpbmRpbmdzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNsZWFudXAoKTtcclxuICAgICAgICBfYSA9IHRoaXMuZ2V0KCdzb3VyY2UnKSB8fCBbbnVsbCwgbnVsbF0sIHRoaXMuc291cmNlTW9kZWwgPSBfYVswXSwgdGhpcy5zb3VyY2VBdHRyID0gX2FbMV07XHJcbiAgICAgICAgX2IgPSB0aGlzLmdldCgndGFyZ2V0JykgfHwgW251bGwsIG51bGxdLCB0aGlzLnRhcmdldE1vZGVsID0gX2JbMF0sIHRoaXMudGFyZ2V0QXR0ciA9IF9iWzFdO1xyXG4gICAgICAgIGlmICh0aGlzLnNvdXJjZU1vZGVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5zb3VyY2VNb2RlbCwgJ2NoYW5nZTonICsgdGhpcy5zb3VyY2VBdHRyLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVWYWx1ZShfdGhpcy5zb3VyY2VNb2RlbCwgX3RoaXMuc291cmNlQXR0ciwgX3RoaXMudGFyZ2V0TW9kZWwsIF90aGlzLnRhcmdldEF0dHIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnNvdXJjZU1vZGVsLCB0aGlzLnNvdXJjZUF0dHIsIHRoaXMudGFyZ2V0TW9kZWwsIHRoaXMudGFyZ2V0QXR0cik7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGVuVG9PbmNlKHRoaXMuc291cmNlTW9kZWwsICdkZXN0cm95JywgdGhpcy5jbGVhbnVwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0TW9kZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0ZW5Ub09uY2UodGhpcy50YXJnZXRNb2RlbCwgJ2Rlc3Ryb3knLCB0aGlzLmNsZWFudXApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBEaXJlY3Rpb25hbExpbmtNb2RlbC5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBTdG9wIGxpc3RlbmluZyB0byAnY2hhbmdlJyBhbmQgJ2Rlc3Ryb3knIGV2ZW50cyBvZiB0aGUgc291cmNlIGFuZCB0YXJnZXRcclxuICAgICAgICBpZiAodGhpcy5zb3VyY2VNb2RlbCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcodGhpcy5zb3VyY2VNb2RlbCwgJ2NoYW5nZTonICsgdGhpcy5zb3VyY2VBdHRyLCBudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nKHRoaXMuc291cmNlTW9kZWwsICdkZXN0cm95JywgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRhcmdldE1vZGVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcExpc3RlbmluZyh0aGlzLnRhcmdldE1vZGVsLCAnZGVzdHJveScsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBEaXJlY3Rpb25hbExpbmtNb2RlbC5zZXJpYWxpemVycyA9IF9fYXNzaWduKHt9LCBDb3JlV2lkZ2V0TW9kZWwuc2VyaWFsaXplcnMsIHsgdGFyZ2V0OiB7IGRlc2VyaWFsaXplOiB1bnBhY2tfbW9kZWxzIH0sIHNvdXJjZTogeyBkZXNlcmlhbGl6ZTogdW5wYWNrX21vZGVscyB9IH0pO1xyXG4gICAgcmV0dXJuIERpcmVjdGlvbmFsTGlua01vZGVsO1xyXG59KENvcmVXaWRnZXRNb2RlbCkpO1xyXG5leHBvcnQgeyBEaXJlY3Rpb25hbExpbmtNb2RlbCB9O1xyXG52YXIgTGlua01vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKExpbmtNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIExpbmtNb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBMaW5rTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcclxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdMaW5rTW9kZWwnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlua01vZGVsLnByb3RvdHlwZS51cGRhdGVCaW5kaW5ncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudXBkYXRlQmluZGluZ3MuY2FsbCh0aGlzKTtcclxuICAgICAgICBpZiAodGhpcy50YXJnZXRNb2RlbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMudGFyZ2V0TW9kZWwsICdjaGFuZ2U6JyArIHRoaXMudGFyZ2V0QXR0ciwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlVmFsdWUoX3RoaXMudGFyZ2V0TW9kZWwsIF90aGlzLnRhcmdldEF0dHIsIF90aGlzLnNvdXJjZU1vZGVsLCBfdGhpcy5zb3VyY2VBdHRyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIExpbmtNb2RlbC5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmNsZWFudXAuY2FsbCh0aGlzKTtcclxuICAgICAgICBpZiAodGhpcy50YXJnZXRNb2RlbCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcodGhpcy50YXJnZXRNb2RlbCwgJ2NoYW5nZTonICsgdGhpcy50YXJnZXRBdHRyLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExpbmtNb2RlbDtcclxufShEaXJlY3Rpb25hbExpbmtNb2RlbCkpO1xyXG5leHBvcnQgeyBMaW5rTW9kZWwgfTtcclxuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXHJcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXHJcbi8qKlxyXG4gKiBBIHZhcmlldHkgb2YgY29udmVuaWVuY2UgbWV0aG9kcyBmb3IgbWFpbnRhaW5pbmcgYSBjdXJyZW50IHNlbGVjdGlvblxyXG4gKi9cclxuaW1wb3J0IHsgQXJyYXlFeHQgfSBmcm9tICdAcGhvc3Bob3IvYWxnb3JpdGhtJztcclxuaW1wb3J0IHsgU2lnbmFsIH0gZnJvbSAnQHBob3NwaG9yL3NpZ25hbGluZyc7XHJcbnZhciBTZWxlY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTZWxlY3Rpb24oc2VxdWVuY2UsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgICAgIHRoaXMuX2FycmF5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uQ2hhbmdlZCA9IG5ldyBTaWduYWwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fYXJyYXkgPSBzZXF1ZW5jZTtcclxuICAgICAgICB0aGlzLl9pbnNlcnRCZWhhdmlvciA9IG9wdGlvbnMuaW5zZXJ0QmVoYXZpb3IgfHwgJ3NlbGVjdC1pdGVtLWlmLW5lZWRlZCc7XHJcbiAgICAgICAgdGhpcy5fcmVtb3ZlQmVoYXZpb3IgPSBvcHRpb25zLnJlbW92ZUJlaGF2aW9yIHx8ICdzZWxlY3QtaXRlbS1hZnRlcic7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0aW9uLnByb3RvdHlwZSwgXCJzZWxlY3Rpb25DaGFuZ2VkXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIHNpZ25hbCBlbWl0dGVkIHdoZW4gdGhlIGN1cnJlbnQgaXRlbSBpcyBjaGFuZ2VkLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogIyMjIyBOb3Rlc1xyXG4gICAgICAgICAqIFRoaXMgc2lnbmFsIGlzIGVtaXR0ZWQgd2hlbiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0gaXMgY2hhbmdlZCBlaXRoZXJcclxuICAgICAgICAgKiB0aHJvdWdoIHVzZXIgb3IgcHJvZ3JhbW1hdGljIGludGVyYWN0aW9uLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogTm90YWJseSwgdGhpcyBzaWduYWwgaXMgbm90IGVtaXR0ZWQgd2hlbiB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgaXRlbVxyXG4gICAgICAgICAqIGNoYW5nZXMgZHVlIHRvIG90aGVyIGl0ZW1zIGJlaW5nIGluc2VydGVkLCByZW1vdmVkLCBvciBtb3ZlZCwgYnV0IHRoZVxyXG4gICAgICAgICAqIGN1cnJlbnQgaXRlbSByZW1haW5zIHRoZSBzYW1lLiBJdCBpcyBvbmx5IGVtaXR0ZWQgd2hlbiB0aGUgYWN0dWFsIGN1cnJlbnRcclxuICAgICAgICAgKiBpdGVtIGlzIGNoYW5nZWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGp1c3QgZm9yIHNldHRpbmcgYW4gaXRlbS5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIHNob3VsZCBiZSBjYWxsZWQgKmFmdGVyKiB0aGUgc2V0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpbmRleCAtIFRoZSBpbmRleCBzZXQuXHJcbiAgICAgKiBAcGFyYW0gb2xkVmFsdWUgLSBUaGUgb2xkIHZhbHVlIGF0IHRoZSBpbmRleC5cclxuICAgICAqL1xyXG4gICAgU2VsZWN0aW9uLnByb3RvdHlwZS5hZGp1c3RTZWxlY3Rpb25Gb3JTZXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAvLyBXZSBqdXN0IG5lZWQgdG8gc2VuZCBhIHNpZ25hbCBpZiB0aGUgY3VycmVudFZhbHVlIGNoYW5nZWQuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IGluZGV4IGFuZCB2YWx1ZS5cclxuICAgICAgICB2YXIgcGkgPSB0aGlzLmluZGV4O1xyXG4gICAgICAgIHZhciBwdiA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgLy8gRXhpdCBlYXJseSBpZiB0aGlzIGRvZXNuJ3QgYWZmZWN0IHRoZSBzZWxlY3Rpb25cclxuICAgICAgICBpZiAoaW5kZXggIT09IHBpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlU2VsZWN0ZWRWYWx1ZSgpO1xyXG4gICAgICAgIHZhciBjdiA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgLy8gVGhlIHByZXZpb3VzIGl0ZW0gaXMgbm93IG51bGwsIHNpbmNlIGl0IGlzIG5vIGxvbmdlciBpbiB0aGUgYXJyYXkuXHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgLy8gU2VuZCBzaWduYWwgaWYgdGhlcmUgd2FzIGEgY2hhbmdlXHJcbiAgICAgICAgaWYgKHB2ICE9PSBjdikge1xyXG4gICAgICAgICAgICAvLyBFbWl0IHRoZSBjdXJyZW50IGNoYW5nZWQgc2lnbmFsLlxyXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkLmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNJbmRleDogcGksIHByZXZpb3VzVmFsdWU6IHB2LFxyXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4OiBwaSwgY3VycmVudFZhbHVlOiBjdlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlbGVjdGlvbi5wcm90b3R5cGUsIFwidmFsdWVcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAjIyMjIE5vdGVzXHJcbiAgICAgICAgICogVGhpcyB3aWxsIGJlIGBudWxsYCBpZiBubyBpdGVtIGlzIHNlbGVjdGVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogIyMjIyBOb3Rlc1xyXG4gICAgICAgICAqIElmIHRoZSBpdGVtIGRvZXMgbm90IGV4aXN0IGluIHRoZSB2ZWN0b3IsIHRoZSBjdXJyZW50VmFsdWUgd2lsbCBiZSBzZXQgdG9cclxuICAgICAgICAgKiBgbnVsbGAuIFRoaXMgc2VsZWN0cyB0aGUgZmlyc3QgZW50cnkgZXF1YWwgdG8gdGhlIGRlc2lyZWQgaXRlbS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IEFycmF5RXh0LmZpcnN0SW5kZXhPZih0aGlzLl9hcnJheSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0aW9uLnByb3RvdHlwZSwgXCJpbmRleFwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0IHRoZSBpbmRleCBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAjIyMjIE5vdGVzXHJcbiAgICAgICAgICogVGhpcyB3aWxsIGJlIGBudWxsYCBpZiBubyBpdGVtIGlzIHNlbGVjdGVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5kZXg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXQgdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGFiLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIGluZGV4IC0gVGhlIGluZGV4IHRvIHNlbGVjdC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICMjIyMgTm90ZXNcclxuICAgICAgICAgKiBJZiB0aGUgdmFsdWUgaXMgb3V0IG9mIHJhbmdlLCB0aGUgaW5kZXggd2lsbCBiZSBzZXQgdG8gYG51bGxgLCB3aGljaFxyXG4gICAgICAgICAqIGluZGljYXRlcyBubyBpdGVtIGlzIHNlbGVjdGVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgIC8vIENvZXJjZSB0aGUgdmFsdWUgdG8gYW4gaW5kZXguXHJcbiAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGkgPSBNYXRoLmZsb29yKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgMCB8fCBpID49IHRoaXMuX2FycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQmFpbCBlYXJseSBpZiB0aGUgaW5kZXggd2lsbCBub3QgY2hhbmdlLlxyXG4gICAgICAgICAgICBpZiAodGhpcy5faW5kZXggPT09IGkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBMb29rIHVwIHRoZSBwcmV2aW91cyBpbmRleCBhbmQgaXRlbS5cclxuICAgICAgICAgICAgdmFyIHBpID0gdGhpcy5faW5kZXg7XHJcbiAgICAgICAgICAgIHZhciBwdiA9IHRoaXMuX3ZhbHVlO1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHN0YXRlXHJcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaTtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU2VsZWN0ZWRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gcHY7XHJcbiAgICAgICAgICAgIC8vIEVtaXQgdGhlIGN1cnJlbnQgY2hhbmdlZCBzaWduYWwuXHJcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbkNoYW5nZWQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c0luZGV4OiBwaSwgcHJldmlvdXNWYWx1ZTogcHYsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXg6IGksIGN1cnJlbnRWYWx1ZTogdGhpcy5fdmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0aW9uLnByb3RvdHlwZSwgXCJpbnNlcnRCZWhhdmlvclwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0IHRoZSBzZWxlY3Rpb24gYmVoYXZpb3Igd2hlbiBpbnNlcnRpbmcgYSB0YWIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnNlcnRCZWhhdmlvcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNldCB0aGUgc2VsZWN0aW9uIGJlaGF2aW9yIHdoZW4gaW5zZXJ0aW5nIGEgdGFiLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc2VydEJlaGF2aW9yID0gdmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0aW9uLnByb3RvdHlwZSwgXCJyZW1vdmVCZWhhdmlvclwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0IHRoZSBzZWxlY3Rpb24gYmVoYXZpb3Igd2hlbiByZW1vdmluZyBhIHRhYi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbW92ZUJlaGF2aW9yO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2V0IHRoZSBzZWxlY3Rpb24gYmVoYXZpb3Igd2hlbiByZW1vdmluZyBhIHRhYi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVCZWhhdmlvciA9IHZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGp1c3QgdGhlIGN1cnJlbnQgaW5kZXggZm9yIGEgdGFiIGluc2VydCBvcGVyYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGkgLSBUaGUgbmV3IGluZGV4IG9mIHRoZSBpbnNlcnRlZCBpdGVtLlxyXG4gICAgICogQHBhcmFtIGogLSBUaGUgaW5zZXJ0ZWQgaXRlbS5cclxuICAgICAqXHJcbiAgICAgKiAjIyMjIE5vdGVzXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBhY2NvdW50cyBmb3IgdGhlIHRhYiBiYXIncyBpbnNlcnRpb24gYmVoYXZpb3Igd2hlbiBhZGp1c3RpbmdcclxuICAgICAqIHRoZSBjdXJyZW50IGluZGV4IGFuZCBlbWl0dGluZyB0aGUgY2hhbmdlZCBzaWduYWwuIFRoaXMgc2hvdWxkIGJlIGNhbGxlZFxyXG4gICAgICogYWZ0ZXIgdGhlIGluc2VydGlvbi5cclxuICAgICAqL1xyXG4gICAgU2VsZWN0aW9uLnByb3RvdHlwZS5hZGp1c3RTZWxlY3Rpb25Gb3JJbnNlcnQgPSBmdW5jdGlvbiAoaSwgaXRlbSkge1xyXG4gICAgICAgIC8vIExvb2t1cCBjb21tb25seSB1c2VkIHZhcmlhYmxlcy5cclxuICAgICAgICB2YXIgY3YgPSB0aGlzLl92YWx1ZTtcclxuICAgICAgICB2YXIgY2kgPSB0aGlzLl9pbmRleDtcclxuICAgICAgICB2YXIgYmggPSB0aGlzLl9pbnNlcnRCZWhhdmlvcjtcclxuICAgICAgICAvLyBIYW5kbGUgdGhlIGJlaGF2aW9yIHdoZXJlIHRoZSBuZXcgaXRlbSBpcyBhbHdheXMgc2VsZWN0ZWQsXHJcbiAgICAgICAgLy8gb3IgdGhlIGJlaGF2aW9yIHdoZXJlIHRoZSBuZXcgaXRlbSBpcyBzZWxlY3RlZCBpZiBuZWVkZWQuXHJcbiAgICAgICAgaWYgKGJoID09PSAnc2VsZWN0LWl0ZW0nIHx8IChiaCA9PT0gJ3NlbGVjdC1pdGVtLWlmLW5lZWRlZCcgJiYgY2kgPT09IG51bGwpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaTtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBpdGVtO1xyXG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gY3Y7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbkNoYW5nZWQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c0luZGV4OiBjaSwgcHJldmlvdXNWYWx1ZTogY3YsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXg6IGksIGN1cnJlbnRWYWx1ZTogaXRlbVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBPdGhlcndpc2UsIHNpbGVudGx5IGFkanVzdCB0aGUgY3VycmVudCBpbmRleCBpZiBuZWVkZWQuXHJcbiAgICAgICAgaWYgKGNpID49IGkpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGp1c3QgdGhlIGN1cnJlbnQgaW5kZXggZm9yIG1vdmUgb3BlcmF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpIC0gVGhlIHByZXZpb3VzIGluZGV4IG9mIHRoZSBpdGVtLlxyXG4gICAgICogQHBhcmFtIGogLSBUaGUgbmV3IGluZGV4IG9mIHRoZSBpdGVtLlxyXG4gICAgICpcclxuICAgICAqICMjIyMgTm90ZXNcclxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgbm90IGNhdXNlIHRoZSBhY3R1YWwgY3VycmVudCBpdGVtIHRvIGNoYW5nZS4gSXQgc2lsZW50bHlcclxuICAgICAqIGFkanVzdHMgdGhlIGN1cnJlbnQgaW5kZXggdG8gYWNjb3VudCBmb3IgdGhlIGdpdmVuIG1vdmUuXHJcbiAgICAgKi9cclxuICAgIFNlbGVjdGlvbi5wcm90b3R5cGUuYWRqdXN0U2VsZWN0aW9uRm9yTW92ZSA9IGZ1bmN0aW9uIChpLCBqKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luZGV4ID09PSBpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gajtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5faW5kZXggPCBpICYmIHRoaXMuX2luZGV4ID49IGopIHtcclxuICAgICAgICAgICAgdGhpcy5faW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5faW5kZXggPiBpICYmIHRoaXMuX2luZGV4IDw9IGopIHtcclxuICAgICAgICAgICAgdGhpcy5faW5kZXgtLTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhciB0aGUgc2VsZWN0aW9uIGFuZCBoaXN0b3J5LlxyXG4gICAgICovXHJcbiAgICBTZWxlY3Rpb24ucHJvdG90eXBlLmNsZWFyU2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBpbmRleCBhbmQgaXRlbS5cclxuICAgICAgICB2YXIgcGkgPSB0aGlzLl9pbmRleDtcclxuICAgICAgICB2YXIgcHYgPSB0aGlzLl92YWx1ZTtcclxuICAgICAgICAvLyBSZXNldCB0aGUgY3VycmVudCBpbmRleCBhbmQgcHJldmlvdXMgaXRlbS5cclxuICAgICAgICB0aGlzLl9pbmRleCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSBudWxsO1xyXG4gICAgICAgIC8vIElmIG5vIGl0ZW0gd2FzIHNlbGVjdGVkLCB0aGVyZSdzIG5vdGhpbmcgZWxzZSB0byBkby5cclxuICAgICAgICBpZiAocGkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBFbWl0IHRoZSBjdXJyZW50IGNoYW5nZWQgc2lnbmFsLlxyXG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbkNoYW5nZWQuZW1pdCh7XHJcbiAgICAgICAgICAgIHByZXZpb3VzSW5kZXg6IHBpLCBwcmV2aW91c1ZhbHVlOiBwdixcclxuICAgICAgICAgICAgY3VycmVudEluZGV4OiB0aGlzLl9pbmRleCwgY3VycmVudFZhbHVlOiB0aGlzLl92YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQWRqdXN0IHRoZSBjdXJyZW50IGluZGV4IGZvciBhbiBpdGVtIHJlbW92ZSBvcGVyYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGkgLSBUaGUgZm9ybWVyIGluZGV4IG9mIHRoZSByZW1vdmVkIGl0ZW0uXHJcbiAgICAgKiBAcGFyYW0gaXRlbSAtIFRoZSByZW1vdmVkIGl0ZW0uXHJcbiAgICAgKlxyXG4gICAgICogIyMjIyBOb3Rlc1xyXG4gICAgICogVGhpcyBtZXRob2QgYWNjb3VudHMgZm9yIHRoZSByZW1vdmUgYmVoYXZpb3Igd2hlbiBhZGp1c3RpbmcgdGhlIGN1cnJlbnRcclxuICAgICAqIGluZGV4IGFuZCBlbWl0dGluZyB0aGUgY2hhbmdlZCBzaWduYWwuIEl0IHNob3VsZCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGl0ZW1cclxuICAgICAqIGlzIHJlbW92ZWQuXHJcbiAgICAgKi9cclxuICAgIFNlbGVjdGlvbi5wcm90b3R5cGUuYWRqdXN0U2VsZWN0aW9uRm9yUmVtb3ZlID0gZnVuY3Rpb24gKGksIGl0ZW0pIHtcclxuICAgICAgICAvLyBMb29rdXAgY29tbW9ubHkgdXNlZCB2YXJpYWJsZXMuXHJcbiAgICAgICAgdmFyIGNpID0gdGhpcy5faW5kZXg7XHJcbiAgICAgICAgdmFyIGJoID0gdGhpcy5fcmVtb3ZlQmVoYXZpb3I7XHJcbiAgICAgICAgLy8gU2lsZW50bHkgYWRqdXN0IHRoZSBpbmRleCBpZiB0aGUgY3VycmVudCBpdGVtIGlzIG5vdCByZW1vdmVkLlxyXG4gICAgICAgIGlmIChjaSAhPT0gaSkge1xyXG4gICAgICAgICAgICBpZiAoY2kgPiBpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbmRleC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTm8gaXRlbSBnZXRzIHNlbGVjdGVkIGlmIHRoZSB2ZWN0b3IgaXMgZW1wdHkuXHJcbiAgICAgICAgaWYgKHRoaXMuX2FycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAvLyBSZXNldCB0aGUgY3VycmVudCBpbmRleCBhbmQgcHJldmlvdXMgaXRlbS5cclxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkLmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNJbmRleDogaSwgcHJldmlvdXNWYWx1ZTogaXRlbSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleDogdGhpcy5faW5kZXgsIGN1cnJlbnRWYWx1ZTogdGhpcy5fdmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSGFuZGxlIGJlaGF2aW9yIHdoZXJlIHRoZSBuZXh0IHNpYmxpbmcgaXRlbSBpcyBzZWxlY3RlZC5cclxuICAgICAgICBpZiAoYmggPT09ICdzZWxlY3QtaXRlbS1hZnRlcicpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBNYXRoLm1pbihpLCB0aGlzLl9hcnJheS5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU2VsZWN0ZWRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uQ2hhbmdlZC5lbWl0KHtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzSW5kZXg6IGksIHByZXZpb3VzVmFsdWU6IGl0ZW0sXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXg6IHRoaXMuX2luZGV4LCBjdXJyZW50VmFsdWU6IHRoaXMuX3ZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEhhbmRsZSBiZWhhdmlvciB3aGVyZSB0aGUgcHJldmlvdXMgc2libGluZyBpdGVtIGlzIHNlbGVjdGVkLlxyXG4gICAgICAgIGlmIChiaCA9PT0gJ3NlbGVjdC1pdGVtLWJlZm9yZScpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBNYXRoLm1heCgwLCBpIC0gMSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNlbGVjdGVkVmFsdWUoKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbkNoYW5nZWQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c0luZGV4OiBpLCBwcmV2aW91c1ZhbHVlOiBpdGVtLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4OiB0aGlzLl9pbmRleCwgY3VycmVudFZhbHVlOiB0aGlzLl92YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBIYW5kbGUgYmVoYXZpb3Igd2hlcmUgdGhlIHByZXZpb3VzIGhpc3RvcnkgaXRlbSBpcyBzZWxlY3RlZC5cclxuICAgICAgICBpZiAoYmggPT09ICdzZWxlY3QtcHJldmlvdXMtaXRlbScpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLl9wcmV2aW91c1ZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5kZXggPSBNYXRoLm1pbihpLCB0aGlzLl9hcnJheS5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNlbGVjdGVkVmFsdWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uQ2hhbmdlZC5lbWl0KHtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzSW5kZXg6IGksIHByZXZpb3VzVmFsdWU6IGl0ZW0sXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXg6IHRoaXMuX2luZGV4LCBjdXJyZW50VmFsdWU6IHRoaXMudmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBubyBpdGVtIGdldHMgc2VsZWN0ZWQuXHJcbiAgICAgICAgdGhpcy5faW5kZXggPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9wcmV2aW91c1ZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkLmVtaXQoe1xyXG4gICAgICAgICAgICBwcmV2aW91c0luZGV4OiBpLCBwcmV2aW91c1ZhbHVlOiBpdGVtLFxyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXg6IHRoaXMuX2luZGV4LCBjdXJyZW50VmFsdWU6IHRoaXMuX3ZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGN1cnJlbnQgdmFsdWUgYmFzZWQgb24gdGhlIGN1cnJlbnQgaW5kZXguXHJcbiAgICAgKi9cclxuICAgIFNlbGVjdGlvbi5wcm90b3R5cGUuX3VwZGF0ZVNlbGVjdGVkVmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9pbmRleDtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IGkgIT09IG51bGwgPyB0aGlzLl9hcnJheVtpXSA6IG51bGw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNlbGVjdGlvbjtcclxufSgpKTtcclxuZXhwb3J0IHsgU2VsZWN0aW9uIH07XHJcbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxyXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxyXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcclxuZXhwb3J0ICogZnJvbSAnLi92ZXJzaW9uJztcclxuZXhwb3J0ICogZnJvbSAnLi93aWRnZXRfbGluayc7XHJcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X2Jvb2wnO1xyXG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9idXR0b24nO1xyXG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9ib3gnO1xyXG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9pbWFnZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X3ZpZGVvJztcclxuZXhwb3J0ICogZnJvbSAnLi93aWRnZXRfYXVkaW8nO1xyXG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9jb2xvcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X2RhdGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9pbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9mbG9hdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X2NvbnRyb2xsZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9zZWxlY3Rpb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9zZWxlY3Rpb25jb250YWluZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9zdHJpbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9kZXNjcmlwdGlvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X3VwbG9hZCc7XHJcbmV4cG9ydCB2YXIgdmVyc2lvbiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb247XHJcbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxyXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBEZXNjcmlwdGlvblZpZXcgfSBmcm9tICcuL3dpZGdldF9kZXNjcmlwdGlvbic7XHJcbmltcG9ydCB7IENvcmVEZXNjcmlwdGlvbk1vZGVsIH0gZnJvbSAnLi93aWRnZXRfY29yZSc7XHJcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZV9kYXRlKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHllYXI6IHZhbHVlLmdldFVUQ0Z1bGxZZWFyKCksXHJcbiAgICAgICAgICAgIG1vbnRoOiB2YWx1ZS5nZXRVVENNb250aCgpLFxyXG4gICAgICAgICAgICBkYXRlOiB2YWx1ZS5nZXRVVENEYXRlKClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZV9kYXRlKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHZhbHVlLnllYXIsIHZhbHVlLm1vbnRoLCB2YWx1ZS5kYXRlKTtcclxuICAgICAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgfVxyXG59XHJcbnZhciBEYXRlUGlja2VyTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRGF0ZVBpY2tlck1vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRGF0ZVBpY2tlck1vZGVsKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIERhdGVQaWNrZXJNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdEYXRlUGlja2VyTW9kZWwnLFxyXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnRGF0ZVBpY2tlclZpZXcnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVBpY2tlck1vZGVsLnNlcmlhbGl6ZXJzID0gX19hc3NpZ24oe30sIENvcmVEZXNjcmlwdGlvbk1vZGVsLnNlcmlhbGl6ZXJzLCB7IHZhbHVlOiB7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplX2RhdGUsXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZV9kYXRlXHJcbiAgICAgICAgfSB9KTtcclxuICAgIHJldHVybiBEYXRlUGlja2VyTW9kZWw7XHJcbn0oQ29yZURlc2NyaXB0aW9uTW9kZWwpKTtcclxuZXhwb3J0IHsgRGF0ZVBpY2tlck1vZGVsIH07XHJcbnZhciBEYXRlUGlja2VyVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhEYXRlUGlja2VyVmlldywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIERhdGVQaWNrZXJWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIERhdGVQaWNrZXJWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtZGF0ZXBpY2tlcicpO1xyXG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgICAgICB0aGlzLl9kYXRlcGlja2VyLmlkID0gdGhpcy5sYWJlbC5odG1sRm9yID0gdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5fZGF0ZXBpY2tlcik7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOnZhbHVlJywgdGhpcy5fdXBkYXRlX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVfdmFsdWUoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcclxuICAgICAqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cclxuICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxyXG4gICAgICovXHJcbiAgICBEYXRlUGlja2VyVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMudXBkYXRlZF92aWV3ICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGVwaWNrZXIuZGlzYWJsZWQgPSB0aGlzLm1vZGVsLmdldCgnZGlzYWJsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVBpY2tlclZpZXcucHJvdG90eXBlLmV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBUeXBlc2NyaXB0IGRvZXNuJ3QgdW5kZXJzdGFuZCB0aGF0IHRoZXNlIGZ1bmN0aW9ucyBhcmUgY2FsbGVkLCBzbyB3ZVxyXG4gICAgICAgIC8vIHNwZWNpZmljYWxseSB1c2UgdGhlbSBoZXJlIHNvIGl0IGtub3dzIHRoZXkgYXJlIGJlaW5nIHVzZWQuXHJcbiAgICAgICAgdm9pZCB0aGlzLl9waWNrZXJfY2hhbmdlO1xyXG4gICAgICAgIHZvaWQgdGhpcy5fcGlja2VyX2ZvY3Vzb3V0O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICdjaGFuZ2UgW3R5cGU9XCJkYXRlXCJdJzogJ19waWNrZXJfY2hhbmdlJyxcclxuICAgICAgICAgICAgJ2ZvY3Vzb3V0IFt0eXBlPVwiZGF0ZVwiXSc6ICdfcGlja2VyX2ZvY3Vzb3V0J1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgRGF0ZVBpY2tlclZpZXcucHJvdG90eXBlLl91cGRhdGVfdmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XHJcbiAgICAgICAgdGhpcy5fZGF0ZXBpY2tlci52YWx1ZUFzRGF0ZSA9IHZhbHVlO1xyXG4gICAgfTtcclxuICAgIERhdGVQaWNrZXJWaWV3LnByb3RvdHlwZS5fcGlja2VyX2NoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2RhdGVwaWNrZXIudmFsaWRpdHkuYmFkSW5wdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgdGhpcy5fZGF0ZXBpY2tlci52YWx1ZUFzRGF0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudG91Y2goKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgRGF0ZVBpY2tlclZpZXcucHJvdG90eXBlLl9waWNrZXJfZm9jdXNvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RhdGVwaWNrZXIudmFsaWRpdHkuYmFkSW5wdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgbnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMudG91Y2goKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERhdGVQaWNrZXJWaWV3O1xyXG59KERlc2NyaXB0aW9uVmlldykpO1xyXG5leHBvcnQgeyBEYXRlUGlja2VyVmlldyB9O1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cclxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsgQ29yZURlc2NyaXB0aW9uTW9kZWwgfSBmcm9tICcuL3dpZGdldF9jb3JlJztcclxuaW1wb3J0IHsgRGVzY3JpcHRpb25WaWV3IH0gZnJvbSAnLi93aWRnZXRfZGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcbi8qKlxyXG4gKiBDbGFzcyBuYW1lIGZvciBhIGNvbWJvYm94IHdpdGggYW4gaW52bGlkIHZhbHVlLlxyXG4gKi9cclxudmFyIElOVkFMSURfVkFMVUVfQ0xBU1MgPSAnanB3aWRnZXRzLWludmFsaWRDb21ib1ZhbHVlJztcclxudmFyIFN0cmluZ01vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFN0cmluZ01vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU3RyaW5nTW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgU3RyaW5nTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcclxuICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnXFx1MjAwYicsXHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnU3RyaW5nTW9kZWwnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFN0cmluZ01vZGVsO1xyXG59KENvcmVEZXNjcmlwdGlvbk1vZGVsKSk7XHJcbmV4cG9ydCB7IFN0cmluZ01vZGVsIH07XHJcbnZhciBIVE1MTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoSFRNTE1vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gSFRNTE1vZGVsKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIEhUTUxNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnSFRNTFZpZXcnLFxyXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0hUTUxNb2RlbCdcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSFRNTE1vZGVsO1xyXG59KFN0cmluZ01vZGVsKSk7XHJcbmV4cG9ydCB7IEhUTUxNb2RlbCB9O1xyXG52YXIgSFRNTFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoSFRNTFZpZXcsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBIVE1MVmlldygpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIEhUTUxWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaHRtbCcpO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuY29udGVudC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaHRtbC1jb250ZW50Jyk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7IC8vIFNldCBkZWZhdWx0cy5cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XHJcbiAgICAgKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIG1vZGVsIGlzIGNoYW5nZWQuICBUaGUgbW9kZWwgbWF5IGhhdmUgYmVlblxyXG4gICAgICogY2hhbmdlZCBieSBhbm90aGVyIHZpZXcgb3IgYnkgYSBzdGF0ZSB1cGRhdGUgZnJvbSB0aGUgYmFjay1lbmQuXHJcbiAgICAgKi9cclxuICAgIEhUTUxWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpO1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBIVE1MVmlldztcclxufShEZXNjcmlwdGlvblZpZXcpKTtcclxuZXhwb3J0IHsgSFRNTFZpZXcgfTtcclxudmFyIEhUTUxNYXRoTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoSFRNTE1hdGhNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEhUTUxNYXRoTW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgSFRNTE1hdGhNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnSFRNTE1hdGhWaWV3JyxcclxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdIVE1MTWF0aE1vZGVsJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBIVE1MTWF0aE1vZGVsO1xyXG59KFN0cmluZ01vZGVsKSk7XHJcbmV4cG9ydCB7IEhUTUxNYXRoTW9kZWwgfTtcclxudmFyIEhUTUxNYXRoVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhIVE1MTWF0aFZpZXcsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBIVE1MTWF0aFZpZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB2aWV3IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBIVE1MTWF0aFZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaW5saW5lLWhib3gnKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1odG1sbWF0aCcpO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuY29udGVudC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaHRtbG1hdGgtY29udGVudCcpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpOyAvLyBTZXQgZGVmYXVsdHMuXHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIHRoaXMgdmlld1xyXG4gICAgICovXHJcbiAgICBIVE1MTWF0aFZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XHJcbiAgICAgICAgdGhpcy50eXBlc2V0KHRoaXMuY29udGVudCk7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEhUTUxNYXRoVmlldztcclxufShEZXNjcmlwdGlvblZpZXcpKTtcclxuZXhwb3J0IHsgSFRNTE1hdGhWaWV3IH07XHJcbnZhciBMYWJlbE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKExhYmVsTW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBMYWJlbE1vZGVsKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIExhYmVsTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcclxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0xhYmVsVmlldycsXHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnTGFiZWxNb2RlbCdcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTGFiZWxNb2RlbDtcclxufShTdHJpbmdNb2RlbCkpO1xyXG5leHBvcnQgeyBMYWJlbE1vZGVsIH07XHJcbnZhciBMYWJlbFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoTGFiZWxWaWV3LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTGFiZWxWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgTGFiZWxWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWxhYmVsJyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTsgLy8gU2V0IGRlZmF1bHRzLlxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcclxuICAgICAqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXHJcbiAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cclxuICAgICAqL1xyXG4gICAgTGFiZWxWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50eXBlc2V0KHRoaXMuZWwsIHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpKTtcclxuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTGFiZWxWaWV3O1xyXG59KERlc2NyaXB0aW9uVmlldykpO1xyXG5leHBvcnQgeyBMYWJlbFZpZXcgfTtcclxudmFyIFRleHRhcmVhTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVGV4dGFyZWFNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRleHRhcmVhTW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgVGV4dGFyZWFNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnVGV4dGFyZWFWaWV3JyxcclxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdUZXh0YXJlYU1vZGVsJyxcclxuICAgICAgICAgICAgcm93czogbnVsbCxcclxuICAgICAgICAgICAgY29udGludW91c191cGRhdGU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRleHRhcmVhTW9kZWw7XHJcbn0oU3RyaW5nTW9kZWwpKTtcclxuZXhwb3J0IHsgVGV4dGFyZWFNb2RlbCB9O1xyXG52YXIgVGV4dGFyZWFWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRleHRhcmVhVmlldywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRleHRhcmVhVmlldygpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIFRleHRhcmVhVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtdGV4dGFyZWEnKTtcclxuICAgICAgICB0aGlzLnRleHRib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgIHRoaXMudGV4dGJveC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnNScpO1xyXG4gICAgICAgIHRoaXMudGV4dGJveC5pZCA9IHRoaXMubGFiZWwuaHRtbEZvciA9IHV1aWQoKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMudGV4dGJveCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTsgLy8gU2V0IGRlZmF1bHRzLlxyXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpwbGFjZWhvbGRlcicsIGZ1bmN0aW9uIChtb2RlbCwgdmFsdWUsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgX3RoaXMudXBkYXRlX3BsYWNlaG9sZGVyKHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9wbGFjZWhvbGRlcigpO1xyXG4gICAgfTtcclxuICAgIFRleHRhcmVhVmlldy5wcm90b3R5cGUudXBkYXRlX3BsYWNlaG9sZGVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSB8fCB0aGlzLm1vZGVsLmdldCgncGxhY2Vob2xkZXInKTtcclxuICAgICAgICB0aGlzLnRleHRib3guc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcclxuICAgICAqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXHJcbiAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cclxuICAgICAqL1xyXG4gICAgVGV4dGFyZWFWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy51cGRhdGVkX3ZpZXcgIT0gdGhpcykge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRib3gudmFsdWUgPSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKTtcclxuICAgICAgICAgICAgdmFyIHJvd3MgPSB0aGlzLm1vZGVsLmdldCgncm93cycpO1xyXG4gICAgICAgICAgICBpZiAocm93cyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcm93cyA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudGV4dGJveC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCByb3dzKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Ym94LmRpc2FibGVkID0gdGhpcy5tb2RlbC5nZXQoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIFRleHRhcmVhVmlldy5wcm90b3R5cGUuZXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICdrZXlkb3duIGlucHV0JzogJ2hhbmRsZUtleURvd24nLFxyXG4gICAgICAgICAgICAna2V5cHJlc3MgaW5wdXQnOiAnaGFuZGxlS2V5cHJlc3MnLFxyXG4gICAgICAgICAgICAnaW5wdXQgdGV4dGFyZWEnOiAnaGFuZGxlQ2hhbmdpbmcnLFxyXG4gICAgICAgICAgICAnY2hhbmdlIHRleHRhcmVhJzogJ2hhbmRsZUNoYW5nZWQnXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBrZXkgZG93blxyXG4gICAgICpcclxuICAgICAqIFN0b3AgcHJvcGFnYXRpb24gc28gdGhlIGV2ZW50IGlzbid0IHNlbnQgdG8gdGhlIGFwcGxpY2F0aW9uLlxyXG4gICAgICovXHJcbiAgICBUZXh0YXJlYVZpZXcucHJvdG90eXBlLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIGtleSBwcmVzc1xyXG4gICAgICpcclxuICAgICAqIFN0b3AgcHJvcGFnYXRpb24gc28gdGhlIGtleXByZXNzIGlzbid0IHNlbnQgdG8gdGhlIGFwcGxpY2F0aW9uLlxyXG4gICAgICovXHJcbiAgICBUZXh0YXJlYVZpZXcucHJvdG90eXBlLmhhbmRsZUtleXByZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVHJpZ2dlcmVkIG9uIGlucHV0IGNoYW5nZVxyXG4gICAgICovXHJcbiAgICBUZXh0YXJlYVZpZXcucHJvdG90eXBlLmhhbmRsZUNoYW5naW5nID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ2NvbnRpbnVvdXNfdXBkYXRlJykpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VkKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFN5bmMgdGhlIHZhbHVlIHdpdGggdGhlIGtlcm5lbC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZSBFdmVudFxyXG4gICAgICovXHJcbiAgICBUZXh0YXJlYVZpZXcucHJvdG90eXBlLmhhbmRsZUNoYW5nZWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICB0aGlzLm1vZGVsLnNldCgndmFsdWUnLCB0YXJnZXQudmFsdWUsIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xyXG4gICAgICAgIHRoaXMudG91Y2goKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGV4dGFyZWFWaWV3O1xyXG59KERlc2NyaXB0aW9uVmlldykpO1xyXG5leHBvcnQgeyBUZXh0YXJlYVZpZXcgfTtcclxudmFyIFRleHRNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUZXh0TW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUZXh0TW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgVGV4dE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XHJcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdUZXh0VmlldycsXHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnVGV4dE1vZGVsJyxcclxuICAgICAgICAgICAgY29udGludW91c191cGRhdGU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRleHRNb2RlbDtcclxufShTdHJpbmdNb2RlbCkpO1xyXG5leHBvcnQgeyBUZXh0TW9kZWwgfTtcclxudmFyIFRleHRWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRleHRWaWV3LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVGV4dFZpZXcoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuaW5wdXRUeXBlID0gJ3RleHQnO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgVGV4dFZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXRleHQnKTtcclxuICAgICAgICB0aGlzLnRleHRib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMudGV4dGJveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0aGlzLmlucHV0VHlwZSk7XHJcbiAgICAgICAgdGhpcy50ZXh0Ym94LmlkID0gdGhpcy5sYWJlbC5odG1sRm9yID0gdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy50ZXh0Ym94KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpOyAvLyBTZXQgZGVmYXVsdHMuXHJcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOnBsYWNlaG9sZGVyJywgZnVuY3Rpb24gKG1vZGVsLCB2YWx1ZSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICBfdGhpcy51cGRhdGVfcGxhY2Vob2xkZXIodmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpkZXNjcmlwdGlvbl90b29sdGlwJywgdGhpcy51cGRhdGVfdGl0bGUpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpkZXNjcmlwdGlvbicsIHRoaXMudXBkYXRlX3RpdGxlKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9wbGFjZWhvbGRlcigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX3RpdGxlKCk7XHJcbiAgICB9O1xyXG4gICAgVGV4dFZpZXcucHJvdG90eXBlLnVwZGF0ZV9wbGFjZWhvbGRlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudGV4dGJveC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdmFsdWUgfHwgdGhpcy5tb2RlbC5nZXQoJ3BsYWNlaG9sZGVyJykpO1xyXG4gICAgfTtcclxuICAgIFRleHRWaWV3LnByb3RvdHlwZS51cGRhdGVfdGl0bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRpdGxlID0gdGhpcy5tb2RlbC5nZXQoJ2Rlc2NyaXB0aW9uX3Rvb2x0aXAnKTtcclxuICAgICAgICBpZiAoIXRpdGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dGJveC5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMubW9kZWwuZ2V0KCdkZXNjcmlwdGlvbicpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRib3guc2V0QXR0cmlidXRlKCd0aXRsZScsIHRpdGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVGV4dFZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiAgVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cclxuICAgICAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMudXBkYXRlZF92aWV3ICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHRib3gudmFsdWUgIT09IHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRib3gudmFsdWUgPSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRleHRib3guZGlzYWJsZWQgPSB0aGlzLm1vZGVsLmdldCgnZGlzYWJsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgVGV4dFZpZXcucHJvdG90eXBlLmV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAna2V5ZG93biBpbnB1dCc6ICdoYW5kbGVLZXlEb3duJyxcclxuICAgICAgICAgICAgJ2tleXByZXNzIGlucHV0JzogJ2hhbmRsZUtleXByZXNzJyxcclxuICAgICAgICAgICAgJ2lucHV0IGlucHV0JzogJ2hhbmRsZUNoYW5naW5nJyxcclxuICAgICAgICAgICAgJ2NoYW5nZSBpbnB1dCc6ICdoYW5kbGVDaGFuZ2VkJ1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUga2V5IGRvd25cclxuICAgICAqXHJcbiAgICAgKiBTdG9wIHByb3BhZ2F0aW9uIHNvIHRoZSBrZXlwcmVzcyBpc24ndCBzZW50IHRvIHRoZSBhcHBsaWNhdGlvbi5cclxuICAgICAqL1xyXG4gICAgVGV4dFZpZXcucHJvdG90eXBlLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHRleHQgc3VibWlzc2lvblxyXG4gICAgICovXHJcbiAgICBUZXh0Vmlldy5wcm90b3R5cGUuaGFuZGxlS2V5cHJlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgLy8gVGhlIHN1Ym1pdCBtZXNzYWdlIGlzIGRlcHJlY2F0ZWQgaW4gd2lkZ2V0cyA3XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHsgLy8gUmV0dXJuIGtleVxyXG4gICAgICAgICAgICB0aGlzLnNlbmQoeyBldmVudDogJ3N1Ym1pdCcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyB1c2VyIGlucHV0LlxyXG4gICAgICpcclxuICAgICAqIENhbGxpbmcgbW9kZWwuc2V0IHdpbGwgdHJpZ2dlciBhbGwgb2YgdGhlIG90aGVyIHZpZXdzIG9mIHRoZVxyXG4gICAgICogbW9kZWwgdG8gdXBkYXRlLlxyXG4gICAgICovXHJcbiAgICBUZXh0Vmlldy5wcm90b3R5cGUuaGFuZGxlQ2hhbmdpbmcgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnY29udGludW91c191cGRhdGUnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZWQoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyB1c2VyIGlucHV0LlxyXG4gICAgICpcclxuICAgICAqIENhbGxpbmcgbW9kZWwuc2V0IHdpbGwgdHJpZ2dlciBhbGwgb2YgdGhlIG90aGVyIHZpZXdzIG9mIHRoZVxyXG4gICAgICogbW9kZWwgdG8gdXBkYXRlLlxyXG4gICAgICovXHJcbiAgICBUZXh0Vmlldy5wcm90b3R5cGUuaGFuZGxlQ2hhbmdlZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCd2YWx1ZScsIHRhcmdldC52YWx1ZSwgeyB1cGRhdGVkX3ZpZXc6IHRoaXMgfSk7XHJcbiAgICAgICAgdGhpcy50b3VjaCgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUZXh0VmlldztcclxufShEZXNjcmlwdGlvblZpZXcpKTtcclxuZXhwb3J0IHsgVGV4dFZpZXcgfTtcclxudmFyIFBhc3N3b3JkTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUGFzc3dvcmRNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFBhc3N3b3JkTW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgUGFzc3dvcmRNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnUGFzc3dvcmRWaWV3JyxcclxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdQYXNzd29yZE1vZGVsJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQYXNzd29yZE1vZGVsO1xyXG59KFRleHRNb2RlbCkpO1xyXG5leHBvcnQgeyBQYXNzd29yZE1vZGVsIH07XHJcbnZhciBQYXNzd29yZFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUGFzc3dvcmRWaWV3LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUGFzc3dvcmRWaWV3KCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmlucHV0VHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBhc3N3b3JkVmlldztcclxufShUZXh0VmlldykpO1xyXG5leHBvcnQgeyBQYXNzd29yZFZpZXcgfTtcclxuLyoqXHJcbiAqIENvbWJvYm94IHdpZGdldCBtb2RlbCBjbGFzcy5cclxuICovXHJcbnZhciBDb21ib2JveE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKENvbWJvYm94TW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDb21ib2JveE1vZGVsKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIENvbWJvYm94TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7IF9tb2RlbF9uYW1lOiAnQ29tYm9ib3hNb2RlbCcsIF92aWV3X25hbWU6ICdDb21ib2JveFZpZXcnLCBvcHRpb25zOiBbXSwgZW5zdXJlX29wdGlvbnM6IGZhbHNlIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb21ib2JveE1vZGVsO1xyXG59KFRleHRNb2RlbCkpO1xyXG5leHBvcnQgeyBDb21ib2JveE1vZGVsIH07XHJcbi8qKlxyXG4gKiBDb21ib2JveCB3aWRnZXQgdmlldyBjbGFzcy5cclxuICovXHJcbnZhciBDb21ib2JveFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ29tYm9ib3hWaWV3LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQ29tYm9ib3hWaWV3KCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmlzSW5pdGlhbFJlbmRlciA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgQ29tYm9ib3hWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RhdGFsaXN0Jyk7XHJcbiAgICAgICAgdGhpcy5kYXRhbGlzdC5pZCA9IHV1aWQoKTtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudGV4dGJveC5zZXRBdHRyaWJ1dGUoJ2xpc3QnLCB0aGlzLmRhdGFsaXN0LmlkKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuZGF0YWxpc3QpO1xyXG4gICAgfTtcclxuICAgIENvbWJvYm94Vmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xyXG4gICAgICAgIGlmICghdGhpcy5kYXRhbGlzdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB2YWxpZCA9IHRoaXMuaXNWYWxpZCh0aGlzLm1vZGVsLmdldCgndmFsdWUnKSk7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHRWYWxpZFN0YXRlKHZhbGlkKTtcclxuICAgICAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIHVwZGF0ZSBvcHRpb25zXHJcbiAgICAgICAgaWYgKChvcHRpb25zICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy51cGRhdGVkX3ZpZXcpIHx8ICghdGhpcy5tb2RlbC5oYXNDaGFuZ2VkKCdvcHRpb25zJykgJiZcclxuICAgICAgICAgICAgIXRoaXMuaXNJbml0aWFsUmVuZGVyKSkge1xyXG4gICAgICAgICAgICAvLyBWYWx1ZSB1cGRhdGUgb25seSwga2VlcCBjdXJyZW50IG9wdGlvbnNcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzSW5pdGlhbFJlbmRlciA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBvcHRzID0gdGhpcy5tb2RlbC5nZXQoJ29wdGlvbnMnKTtcclxuICAgICAgICB2YXIgb3B0TGluZXMgPSBvcHRzLm1hcChmdW5jdGlvbiAobykge1xyXG4gICAgICAgICAgICByZXR1cm4gXCI8b3B0aW9uIHZhbHVlPVxcXCJcIiArIG8gKyBcIlxcXCI+PC9vcHRpb24+XCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhbGlzdC5pbm5lckhUTUwgPSBvcHRMaW5lcy5qb2luKCdcXG4nKTtcclxuICAgIH07XHJcbiAgICBDb21ib2JveFZpZXcucHJvdG90eXBlLmlzVmFsaWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBpZiAodHJ1ZSA9PT0gdGhpcy5tb2RlbC5nZXQoJ2Vuc3VyZV9vcHRpb24nKSkge1xyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMubW9kZWwuZ2V0KCdvcHRpb25zJyk7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgIENvbWJvYm94Vmlldy5wcm90b3R5cGUuaGFuZGxlQ2hhbmdpbmcgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIC8vIE92ZXJyaWRlIHRvIHZhbGlkYXRlIHZhbHVlXHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHZhciB2YWxpZCA9IHRoaXMuaXNWYWxpZCh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0VmFsaWRTdGF0ZSh2YWxpZCk7XHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuaGFuZGxlQ2hhbmdpbmcuY2FsbCh0aGlzLCBlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ29tYm9ib3hWaWV3LnByb3RvdHlwZS5oYW5kbGVDaGFuZ2VkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAvLyBPdmVycmlkZSB0byB2YWxpZGF0ZSB2YWx1ZVxyXG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICB2YXIgdmFsaWQgPSB0aGlzLmlzVmFsaWQodGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodFZhbGlkU3RhdGUodmFsaWQpO1xyXG4gICAgICAgIGlmICh2YWxpZCkge1xyXG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmhhbmRsZUNoYW5nZWQuY2FsbCh0aGlzLCBlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ29tYm9ib3hWaWV3LnByb3RvdHlwZS5oaWdobGlnaHRWYWxpZFN0YXRlID0gZnVuY3Rpb24gKHZhbGlkKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0Ym94LmNsYXNzTGlzdC50b2dnbGUoSU5WQUxJRF9WQUxVRV9DTEFTUywgIXZhbGlkKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29tYm9ib3hWaWV3O1xyXG59KFRleHRWaWV3KSk7XHJcbmV4cG9ydCB7IENvbWJvYm94VmlldyB9O1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cclxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsgRE9NV2lkZ2V0VmlldyB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XHJcbmltcG9ydCB7IENvcmVET01XaWRnZXRNb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG52YXIgVmlkZW9Nb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhWaWRlb01vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVmlkZW9Nb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBWaWRlb01vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnVmlkZW9Nb2RlbCcsXHJcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdWaWRlb1ZpZXcnLFxyXG4gICAgICAgICAgICBmb3JtYXQ6ICdtcDQnLFxyXG4gICAgICAgICAgICB3aWR0aDogJycsXHJcbiAgICAgICAgICAgIGhlaWdodDogJycsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBjb250cm9sczogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMCkpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVmlkZW9Nb2RlbC5zZXJpYWxpemVycyA9IF9fYXNzaWduKHt9LCBDb3JlRE9NV2lkZ2V0TW9kZWwuc2VyaWFsaXplcnMsIHsgdmFsdWU6IHsgc2VyaWFsaXplOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0YVZpZXcodmFsdWUuYnVmZmVyLnNsaWNlKDApKTtcclxuICAgICAgICAgICAgfSB9IH0pO1xyXG4gICAgcmV0dXJuIFZpZGVvTW9kZWw7XHJcbn0oQ29yZURPTVdpZGdldE1vZGVsKSk7XHJcbmV4cG9ydCB7IFZpZGVvTW9kZWwgfTtcclxudmFyIFZpZGVvVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhWaWRlb1ZpZXcsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBWaWRlb1ZpZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgVmlkZW9WaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucFdpZGdldC5hZGRDbGFzcygnanVweXRlci13aWRnZXRzJyk7XHJcbiAgICAgICAgdGhpcy5wV2lkZ2V0LmFkZENsYXNzKCd3aWRnZXQtaW1hZ2UnKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpOyAvLyBTZXQgZGVmYXVsdHMuXHJcbiAgICB9O1xyXG4gICAgVmlkZW9WaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiAgVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cclxuICAgICAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgdXJsO1xyXG4gICAgICAgIHZhciBmb3JtYXQgPSB0aGlzLm1vZGVsLmdldCgnZm9ybWF0Jyk7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XHJcbiAgICAgICAgaWYgKGZvcm1hdCAhPT0gJ3VybCcpIHtcclxuICAgICAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbdmFsdWVdLCB7IHR5cGU6IFwidmlkZW8vXCIgKyB0aGlzLm1vZGVsLmdldCgnZm9ybWF0JykgfSk7XHJcbiAgICAgICAgICAgIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB1cmwgPSAobmV3IFRleHREZWNvZGVyKCd1dGYtOCcpKS5kZWNvZGUodmFsdWUuYnVmZmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIG9sZCBvYmplY3RVUkxcclxuICAgICAgICB2YXIgb2xkdXJsID0gdGhpcy5lbC5zcmM7XHJcbiAgICAgICAgdGhpcy5lbC5zcmMgPSB1cmw7XHJcbiAgICAgICAgaWYgKG9sZHVybCAmJiB0eXBlb2Ygb2xkdXJsICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEhlaWdodCBhbmQgd2lkdGhcclxuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLm1vZGVsLmdldCgnd2lkdGgnKTtcclxuICAgICAgICBpZiAod2lkdGggIT09IHVuZGVmaW5lZCAmJiB3aWR0aC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCd3aWR0aCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5tb2RlbC5nZXQoJ2hlaWdodCcpO1xyXG4gICAgICAgIGlmIChoZWlnaHQgIT09IHVuZGVmaW5lZCAmJiBoZWlnaHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVmlkZW8gYXR0cmlidXRlc1xyXG4gICAgICAgIHRoaXMuZWwubG9vcCA9IHRoaXMubW9kZWwuZ2V0KCdsb29wJyk7XHJcbiAgICAgICAgdGhpcy5lbC5hdXRvcGxheSA9IHRoaXMubW9kZWwuZ2V0KCdhdXRvcGxheScpO1xyXG4gICAgICAgIHRoaXMuZWwuY29udHJvbHMgPSB0aGlzLm1vZGVsLmdldCgnY29udHJvbHMnKTtcclxuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcclxuICAgIH07XHJcbiAgICBWaWRlb1ZpZXcucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbC5zcmMpIHtcclxuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmVsLnNyYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVtb3ZlLmNhbGwodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZpZGVvVmlldy5wcm90b3R5cGUsIFwidGFnTmFtZVwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGRlZmF1bHQgdGFnIG5hbWUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAjIyMjIE5vdGVzXHJcbiAgICAgICAgICogVGhpcyBpcyBhIHJlYWQtb25seSBhdHRyaWJ1dGUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIFdlIGNhbid0IG1ha2UgdGhpcyBhbiBhdHRyaWJ1dGUgd2l0aCBhIGRlZmF1bHQgdmFsdWVcclxuICAgICAgICAgICAgLy8gc2luY2UgaXQgd291bGQgYmUgc2V0IGFmdGVyIGl0IGlzIG5lZWRlZCBpbiB0aGVcclxuICAgICAgICAgICAgLy8gY29uc3RydWN0b3IuXHJcbiAgICAgICAgICAgIHJldHVybiAndmlkZW8nO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFZpZGVvVmlldztcclxufShET01XaWRnZXRWaWV3KSk7XHJcbmV4cG9ydCB7IFZpZGVvVmlldyB9O1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cclxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsgQ29yZURlc2NyaXB0aW9uTW9kZWwsIH0gZnJvbSAnLi93aWRnZXRfY29yZSc7XHJcbmltcG9ydCB7IERlc2NyaXB0aW9uVmlldywgRGVzY3JpcHRpb25TdHlsZU1vZGVsIH0gZnJvbSAnLi93aWRnZXRfZGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG52YXIgU2VsZWN0aW9uTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU2VsZWN0aW9uTW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTZWxlY3Rpb25Nb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBTZWxlY3Rpb25Nb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCBfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHsgX21vZGVsX25hbWU6ICdTZWxlY3Rpb25Nb2RlbCcsIGluZGV4OiAnJywgX29wdGlvbnNfbGFiZWxzOiBbXSwgZGlzYWJsZWQ6IGZhbHNlIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTZWxlY3Rpb25Nb2RlbDtcclxufShDb3JlRGVzY3JpcHRpb25Nb2RlbCkpO1xyXG5leHBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9O1xyXG52YXIgRHJvcGRvd25Nb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhEcm9wZG93bk1vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRHJvcGRvd25Nb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBEcm9wZG93bk1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwgeyBfbW9kZWxfbmFtZTogJ0Ryb3Bkb3duTW9kZWwnLCBfdmlld19uYW1lOiAnRHJvcGRvd25WaWV3JywgYnV0dG9uX3N0eWxlOiAnJyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRHJvcGRvd25Nb2RlbDtcclxufShTZWxlY3Rpb25Nb2RlbCkpO1xyXG5leHBvcnQgeyBEcm9wZG93bk1vZGVsIH07XHJcbi8vIFRPRE86IE1ha2UgYSBwaG9zcGhvciBkcm9wZG93biBjb250cm9sLCB3cmFwcGVkIGluIERyb3Bkb3duVmlldy4gQWxzbywgZml4XHJcbi8vIGJ1Z3MgaW4ga2V5Ym9hcmQgaGFuZGxpbmcuIFNlZVxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vanVweXRlci13aWRnZXRzL2lweXdpZGdldHMvaXNzdWVzLzEwNTUgYW5kXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qdXB5dGVyLXdpZGdldHMvaXB5d2lkZ2V0cy9pc3N1ZXMvMTA0OVxyXG4vLyBGb3Igbm93LCB3ZSBzdWJjbGFzcyBTZWxlY3RWaWV3IHRvIHByb3ZpZGUgRHJvcGRvd25WaWV3XHJcbi8vIEZvciB0aGUgb2xkIGNvZGUsIHNlZSBjb21taXQgZjY4YmZiYzU2NmYzYTc4YThmMzM1MGI0MzhkYjhlZDUyM2NlMzY0MlxyXG52YXIgRHJvcGRvd25WaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKERyb3Bkb3duVmlldywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIERyb3Bkb3duVmlldygpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFB1YmxpYyBjb25zdHJ1Y3Rvci5cclxuICAgICAqL1xyXG4gICAgRHJvcGRvd25WaWV3LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHBhcmFtZXRlcnMpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpfb3B0aW9uc19sYWJlbHMnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fdXBkYXRlT3B0aW9ucygpOyB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIERyb3Bkb3duVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWRyb3Bkb3duJyk7XHJcbiAgICAgICAgdGhpcy5saXN0Ym94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICAgICAgdGhpcy5saXN0Ym94LmlkID0gdGhpcy5sYWJlbC5odG1sRm9yID0gdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5saXN0Ym94KTtcclxuICAgICAgICB0aGlzLl91cGRhdGVPcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XHJcbiAgICAgKi9cclxuICAgIERyb3Bkb3duVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERpc2FibGUgbGlzdGJveCBpZiBuZWVkZWRcclxuICAgICAgICB0aGlzLmxpc3Rib3guZGlzYWJsZWQgPSB0aGlzLm1vZGVsLmdldCgnZGlzYWJsZWQnKTtcclxuICAgICAgICAvLyBTZWxlY3QgdGhlIGNvcnJlY3QgZWxlbWVudFxyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMubW9kZWwuZ2V0KCdpbmRleCcpO1xyXG4gICAgICAgIHRoaXMubGlzdGJveC5zZWxlY3RlZEluZGV4ID0gaW5kZXggPT09IG51bGwgPyAtMSA6IGluZGV4O1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIERyb3Bkb3duVmlldy5wcm90b3R5cGUuX3VwZGF0ZU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Ym94LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5tb2RlbC5nZXQoJ19vcHRpb25zX2xhYmVscycpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcclxuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLnJlcGxhY2UoLyAvZywgJ1xceGEwJyk7IC8vIHNwYWNlIC0+ICZuYnNwO1xyXG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgZW5jb2RlVVJJQ29tcG9uZW50KGl0ZW0pKTtcclxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbTtcclxuICAgICAgICAgICAgdGhpcy5saXN0Ym94LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIERyb3Bkb3duVmlldy5wcm90b3R5cGUuZXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICdjaGFuZ2Ugc2VsZWN0JzogJ19oYW5kbGVfY2hhbmdlJ1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgd2hlbiBhIG5ldyB2YWx1ZSBpcyBzZWxlY3RlZC5cclxuICAgICAqL1xyXG4gICAgRHJvcGRvd25WaWV3LnByb3RvdHlwZS5faGFuZGxlX2NoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLnNldCgnaW5kZXgnLCB0aGlzLmxpc3Rib3guc2VsZWN0ZWRJbmRleCA9PT0gLTEgPyBudWxsIDogdGhpcy5saXN0Ym94LnNlbGVjdGVkSW5kZXgpO1xyXG4gICAgICAgIHRoaXMudG91Y2goKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRHJvcGRvd25WaWV3O1xyXG59KERlc2NyaXB0aW9uVmlldykpO1xyXG5leHBvcnQgeyBEcm9wZG93blZpZXcgfTtcclxudmFyIFNlbGVjdE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNlbGVjdE1vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU2VsZWN0TW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgU2VsZWN0TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7IF9tb2RlbF9uYW1lOiAnU2VsZWN0TW9kZWwnLCBfdmlld19uYW1lOiAnU2VsZWN0VmlldycsIHJvd3M6IDUgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNlbGVjdE1vZGVsO1xyXG59KFNlbGVjdGlvbk1vZGVsKSk7XHJcbmV4cG9ydCB7IFNlbGVjdE1vZGVsIH07XHJcbnZhciBTZWxlY3RWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNlbGVjdFZpZXcsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTZWxlY3RWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUHVibGljIGNvbnN0cnVjdG9yLlxyXG4gICAgICovXHJcbiAgICBTZWxlY3RWaWV3LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHBhcmFtZXRlcnMpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpfb3B0aW9uc19sYWJlbHMnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fdXBkYXRlT3B0aW9ucygpOyB9KTtcclxuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6aW5kZXgnLCBmdW5jdGlvbiAobW9kZWwsIHZhbHVlLCBvcHRpb25zKSB7IHJldHVybiBfdGhpcy51cGRhdGVTZWxlY3Rpb24ob3B0aW9ucyk7IH0pO1xyXG4gICAgICAgIC8vIENyZWF0ZSBsaXN0Ym94IGhlcmUgc28gdGhhdCBzdWJjbGFzc2VzIGNhbiBtb2RpZnkgaXQgYmVmb3JlIGl0IGlzIHBvcHVsYXRlZCBpbiByZW5kZXIoKVxyXG4gICAgICAgIHRoaXMubGlzdGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgU2VsZWN0Vmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXNlbGVjdCcpO1xyXG4gICAgICAgIHRoaXMubGlzdGJveC5pZCA9IHRoaXMubGFiZWwuaHRtbEZvciA9IHV1aWQoKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMubGlzdGJveCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlT3B0aW9ucygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XHJcbiAgICAgKi9cclxuICAgIFNlbGVjdFZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubGlzdGJveC5kaXNhYmxlZCA9IHRoaXMubW9kZWwuZ2V0KCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIHZhciByb3dzID0gdGhpcy5tb2RlbC5nZXQoJ3Jvd3MnKTtcclxuICAgICAgICBpZiAocm93cyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByb3dzID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGlzdGJveC5zZXRBdHRyaWJ1dGUoJ3NpemUnLCByb3dzKTtcclxuICAgIH07XHJcbiAgICBTZWxlY3RWaWV3LnByb3RvdHlwZS51cGRhdGVTZWxlY3Rpb24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudXBkYXRlZF92aWV3ID09PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5tb2RlbC5nZXQoJ2luZGV4Jyk7XHJcbiAgICAgICAgdGhpcy5saXN0Ym94LnNlbGVjdGVkSW5kZXggPSBpbmRleCA9PT0gbnVsbCA/IC0xIDogaW5kZXg7XHJcbiAgICB9O1xyXG4gICAgU2VsZWN0Vmlldy5wcm90b3R5cGUuX3VwZGF0ZU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Ym94LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5tb2RlbC5nZXQoJ19vcHRpb25zX2xhYmVscycpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcclxuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLnJlcGxhY2UoLyAvZywgJ1xceGEwJyk7IC8vIHNwYWNlIC0+ICZuYnNwO1xyXG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgZW5jb2RlVVJJQ29tcG9uZW50KGl0ZW0pKTtcclxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbTtcclxuICAgICAgICAgICAgdGhpcy5saXN0Ym94LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNlbGVjdFZpZXcucHJvdG90eXBlLmV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAnY2hhbmdlIHNlbGVjdCc6ICdfaGFuZGxlX2NoYW5nZSdcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIHdoZW4gYSBuZXcgdmFsdWUgaXMgc2VsZWN0ZWQuXHJcbiAgICAgKi9cclxuICAgIFNlbGVjdFZpZXcucHJvdG90eXBlLl9oYW5kbGVfY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCdpbmRleCcsIHRoaXMubGlzdGJveC5zZWxlY3RlZEluZGV4LCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcclxuICAgICAgICB0aGlzLnRvdWNoKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNlbGVjdFZpZXc7XHJcbn0oRGVzY3JpcHRpb25WaWV3KSk7XHJcbmV4cG9ydCB7IFNlbGVjdFZpZXcgfTtcclxudmFyIFJhZGlvQnV0dG9uc01vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFJhZGlvQnV0dG9uc01vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUmFkaW9CdXR0b25zTW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgUmFkaW9CdXR0b25zTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7IF9tb2RlbF9uYW1lOiAnUmFkaW9CdXR0b25zTW9kZWwnLCBfdmlld19uYW1lOiAnUmFkaW9CdXR0b25zVmlldycsIHRvb2x0aXBzOiBbXSwgaWNvbnM6IFtdLCBidXR0b25fc3R5bGU6ICcnIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSYWRpb0J1dHRvbnNNb2RlbDtcclxufShTZWxlY3Rpb25Nb2RlbCkpO1xyXG5leHBvcnQgeyBSYWRpb0J1dHRvbnNNb2RlbCB9O1xyXG52YXIgUmFkaW9CdXR0b25zVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhSYWRpb0J1dHRvbnNWaWV3LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUmFkaW9CdXR0b25zVmlldygpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIFJhZGlvQnV0dG9uc1ZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaW5saW5lLWhib3gnKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1yYWRpbycpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXJhZGlvLWJveCcpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIHRoaXMgdmlld1xyXG4gICAgICpcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiAgVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cclxuICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxyXG4gICAgICovXHJcbiAgICBSYWRpb0J1dHRvbnNWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIHZhciB2aWV3ID0gdGhpcztcclxuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLm1vZGVsLmdldCgnX29wdGlvbnNfbGFiZWxzJyk7XHJcbiAgICAgICAgdmFyIHJhZGlvcyA9IF8ucGx1Y2sodGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyksICd2YWx1ZScpO1xyXG4gICAgICAgIHZhciBzdGFsZSA9IGl0ZW1zLmxlbmd0aCAhPSByYWRpb3MubGVuZ3RoO1xyXG4gICAgICAgIGlmICghc3RhbGUpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGl0ZW1zLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFkaW9zW2ldICE9PSBpdGVtc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YWxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RhbGUgJiYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnVwZGF0ZWRfdmlldyAhPT0gdGhpcykpIHtcclxuICAgICAgICAgICAgLy8gQWRkIGl0ZW1zIHRvIHRoZSBET00uXHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgdmlldy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xyXG4gICAgICAgICAgICAgICAgcmFkaW8udmFsdWUgPSBpbmRleC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgZW5jb2RlVVJJQ29tcG9uZW50KGl0ZW0pKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHJhZGlvKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtX3F1ZXJ5ID0gJ2lucHV0W2RhdGEtdmFsdWU9XCInICtcclxuICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChpdGVtKSArICdcIl0nO1xyXG4gICAgICAgICAgICB2YXIgcmFkaW8gPSB2aWV3LmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKGl0ZW1fcXVlcnkpO1xyXG4gICAgICAgICAgICBpZiAocmFkaW8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJhZGlvX2VsID0gcmFkaW9bMF07XHJcbiAgICAgICAgICAgICAgICByYWRpb19lbC5jaGVja2VkID0gdmlldy5tb2RlbC5nZXQoJ2luZGV4JykgPT09IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgcmFkaW9fZWwuZGlzYWJsZWQgPSB2aWV3Lm1vZGVsLmdldCgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFNjaGVkdWxlIGFkanVzdFBhZGRpbmcgYXN5bmNocm9ub3VzbHkgdG9cclxuICAgICAgICAvLyBhbGxvdyBkb20gZWxlbWVudHMgdG8gYmUgY3JlYXRlZCBwcm9wZXJseVxyXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5hZGp1c3RQYWRkaW5nLCAwLCB0aGlzKTtcclxuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEFkanVzdCBQYWRkaW5nIHRvIE11bHRpcGxlIG9mIExpbmUgSGVpZ2h0XHJcbiAgICAgKlxyXG4gICAgICogQWRqdXN0IG1hcmdpbnMgc28gdGhhdCB0aGUgb3ZlcmFsbCBoZWlnaHRcclxuICAgICAqIGlzIGEgbXVsdGlwbGUgb2YgYSBzaW5nbGUgbGluZSBoZWlnaHQuXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyB3aWRnZXQgbmVlZHMgaXQgYmVjYXVzZSByYWRpbyBvcHRpb25zXHJcbiAgICAgKiBhcmUgc3BhY2VkIHRpZ2h0ZXIgdGhhbiBpbmRpdmlkdWFsIHdpZGdldHNcclxuICAgICAqIHlldCB3ZSB3b3VsZCBsaWtlIHRoZSBmdWxsIHdpZGdldCBsaW5lIHVwIHByb3Blcmx5XHJcbiAgICAgKiB3aGVuIGRpc3BsYXllZCBzaWRlLWJ5LXNpZGUgd2l0aCBvdGhlciB3aWRnZXRzLlxyXG4gICAgICovXHJcbiAgICBSYWRpb0J1dHRvbnNWaWV3LnByb3RvdHlwZS5hZGp1c3RQYWRkaW5nID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAvLyBWZXJ0aWNhbCBtYXJnaW5zIG9uIGEgd2lkZ2V0XHJcbiAgICAgICAgdmFyIGVsU3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZS5lbCk7XHJcbiAgICAgICAgdmFyIG1hcmdpbnMgPSBwYXJzZUludChlbFN0eWxlcy5tYXJnaW5Ub3AsIDEwKSArIHBhcnNlSW50KGVsU3R5bGVzLm1hcmdpbkJvdHRvbSwgMTApO1xyXG4gICAgICAgIC8vIFRvdGFsIHNwYWNlcyB0YWtlbiBieSBhIHNpbmdsZS1saW5lIHdpZGdldFxyXG4gICAgICAgIHZhciBsaW5lSGVpZ2h0ID0gZS5sYWJlbC5vZmZzZXRIZWlnaHQgKyBtYXJnaW5zO1xyXG4gICAgICAgIC8vIEN1cnJlbnQgYWRqdXN0bWVudCB2YWx1ZSBvbiB0aGlzIHdpZGdldFxyXG4gICAgICAgIHZhciBjU3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZS5jb250YWluZXIpO1xyXG4gICAgICAgIHZhciBjb250YWluZXJNYXJnaW4gPSBwYXJzZUludChjU3R5bGVzLm1hcmdpbkJvdHRvbSk7XHJcbiAgICAgICAgLy8gSG93IGZhciB3ZSBhcmUgb2ZmIGZyb20gYSBtdWx0aXBsZSBvZiBzaW5nbGUgd2luZGdldCBsaW5lc1xyXG4gICAgICAgIHZhciBkaWZmID0gKGUuZWwub2Zmc2V0SGVpZ2h0ICsgbWFyZ2lucyAtIGNvbnRhaW5lck1hcmdpbikgJSBsaW5lSGVpZ2h0O1xyXG4gICAgICAgIC8vIEFwcGx5IHRoZSBuZXcgYWRqdXN0bWVudFxyXG4gICAgICAgIHZhciBleHRyYU1hcmdpbiA9IGRpZmYgPT0gMCA/IDAgOiAobGluZUhlaWdodCAtIGRpZmYpO1xyXG4gICAgICAgIGUuY29udGFpbmVyLnN0eWxlLm1hcmdpbkJvdHRvbSA9IGV4dHJhTWFyZ2luICsgJ3B4JztcclxuICAgIH07XHJcbiAgICBSYWRpb0J1dHRvbnNWaWV3LnByb3RvdHlwZS5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgJ2NsaWNrIGlucHV0W3R5cGU9XCJyYWRpb1wiXSc6ICdfaGFuZGxlX2NsaWNrJ1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgd2hlbiBhIHZhbHVlIGlzIGNsaWNrZWQuXHJcbiAgICAgKlxyXG4gICAgICogQ2FsbGluZyBtb2RlbC5zZXQgd2lsbCB0cmlnZ2VyIGFsbCBvZiB0aGUgb3RoZXIgdmlld3Mgb2YgdGhlXHJcbiAgICAgKiBtb2RlbCB0byB1cGRhdGUuXHJcbiAgICAgKi9cclxuICAgIFJhZGlvQnV0dG9uc1ZpZXcucHJvdG90eXBlLl9oYW5kbGVfY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCdpbmRleCcsIHBhcnNlSW50KHRhcmdldC52YWx1ZSksIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xyXG4gICAgICAgIHRoaXMudG91Y2goKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmFkaW9CdXR0b25zVmlldztcclxufShEZXNjcmlwdGlvblZpZXcpKTtcclxuZXhwb3J0IHsgUmFkaW9CdXR0b25zVmlldyB9O1xyXG52YXIgVG9nZ2xlQnV0dG9uc1N0eWxlTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVG9nZ2xlQnV0dG9uc1N0eWxlTW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUb2dnbGVCdXR0b25zU3R5bGVNb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBUb2dnbGVCdXR0b25zU3R5bGVNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ1RvZ2dsZUJ1dHRvbnNTdHlsZU1vZGVsJyxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBUb2dnbGVCdXR0b25zU3R5bGVNb2RlbC5zdHlsZVByb3BlcnRpZXMgPSBfX2Fzc2lnbih7fSwgRGVzY3JpcHRpb25TdHlsZU1vZGVsLnN0eWxlUHJvcGVydGllcywgeyBidXR0b25fd2lkdGg6IHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICcud2lkZ2V0LXRvZ2dsZS1idXR0b24nLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6ICd3aWR0aCcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgICAgICB9LCBmb250X3dlaWdodDoge1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJy53aWRnZXQtdG9nZ2xlLWJ1dHRvbicsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2ZvbnQtd2VpZ2h0JyxcclxuICAgICAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgICB9IH0pO1xyXG4gICAgcmV0dXJuIFRvZ2dsZUJ1dHRvbnNTdHlsZU1vZGVsO1xyXG59KERlc2NyaXB0aW9uU3R5bGVNb2RlbCkpO1xyXG5leHBvcnQgeyBUb2dnbGVCdXR0b25zU3R5bGVNb2RlbCB9O1xyXG52YXIgVG9nZ2xlQnV0dG9uc01vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRvZ2dsZUJ1dHRvbnNNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRvZ2dsZUJ1dHRvbnNNb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBUb2dnbGVCdXR0b25zTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7IF9tb2RlbF9uYW1lOiAnVG9nZ2xlQnV0dG9uc01vZGVsJywgX3ZpZXdfbmFtZTogJ1RvZ2dsZUJ1dHRvbnNWaWV3JyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVG9nZ2xlQnV0dG9uc01vZGVsO1xyXG59KFNlbGVjdGlvbk1vZGVsKSk7XHJcbmV4cG9ydCB7IFRvZ2dsZUJ1dHRvbnNNb2RlbCB9O1xyXG52YXIgVG9nZ2xlQnV0dG9uc1ZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVG9nZ2xlQnV0dG9uc1ZpZXcsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUb2dnbGVCdXR0b25zVmlldygpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBUb2dnbGVCdXR0b25zVmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fY3NzX3N0YXRlID0ge307XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcywgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmJ1dHRvbl9zdHlsZScsIHRoaXMudXBkYXRlX2J1dHRvbl9zdHlsZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB2aWV3IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBUb2dnbGVCdXR0b25zVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXRvZ2dsZS1idXR0b25zJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25ncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5idXR0b25ncm91cCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLnNldF9idXR0b25fc3R5bGUoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XHJcbiAgICAgKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIG1vZGVsIGlzIGNoYW5nZWQuICBUaGUgbW9kZWwgbWF5IGhhdmUgYmVlblxyXG4gICAgICogY2hhbmdlZCBieSBhbm90aGVyIHZpZXcgb3IgYnkgYSBzdGF0ZSB1cGRhdGUgZnJvbSB0aGUgYmFjay1lbmQuXHJcbiAgICAgKi9cclxuICAgIFRvZ2dsZUJ1dHRvbnNWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIHZhciB2aWV3ID0gdGhpcztcclxuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLm1vZGVsLmdldCgnX29wdGlvbnNfbGFiZWxzJyk7XHJcbiAgICAgICAgdmFyIGljb25zID0gdGhpcy5tb2RlbC5nZXQoJ2ljb25zJykgfHwgW107XHJcbiAgICAgICAgdmFyIHByZXZpb3VzX2ljb25zID0gdGhpcy5tb2RlbC5wcmV2aW91cygnaWNvbnMnKSB8fCBbXTtcclxuICAgICAgICB2YXIgcHJldmlvdXNfYnN0eWxlID0gVG9nZ2xlQnV0dG9uc1ZpZXcuY2xhc3NNYXBbdGhpcy5tb2RlbC5wcmV2aW91cygnYnV0dG9uX3N0eWxlJyldIHx8ICcnO1xyXG4gICAgICAgIHZhciB0b29sdGlwcyA9IHZpZXcubW9kZWwuZ2V0KCd0b29sdGlwcycpIHx8IFtdO1xyXG4gICAgICAgIHZhciBkaXNhYmxlZCA9IHRoaXMubW9kZWwuZ2V0KCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIHZhciBidXR0b25zID0gdGhpcy5idXR0b25ncm91cC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcclxuICAgICAgICB2YXIgdmFsdWVzID0gXy5wbHVjayhidXR0b25zLCAndmFsdWUnKTtcclxuICAgICAgICB2YXIgc3RhbGUgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gaXRlbXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlc1tpXSAhPT0gaXRlbXNbaV0gfHwgaWNvbnNbaV0gIT09IHByZXZpb3VzX2ljb25zW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RhbGUgJiYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnVwZGF0ZWRfdmlldyAhPT0gdGhpcykpIHtcclxuICAgICAgICAgICAgLy8gQWRkIGl0ZW1zIHRvIHRoZSBET00uXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uZ3JvdXAudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtX2h0bWw7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW1wdHkgPSBpdGVtLnRyaW0oKS5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAoIWljb25zW2luZGV4XSB8fCBpY29uc1tpbmRleF0udHJpbSgpLmxlbmd0aCA9PT0gMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtX2h0bWwgPSAnJm5ic3A7JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1faHRtbCA9IHV0aWxzLmVzY2FwZV9odG1sKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWNvbnNbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSAnZmEgZmEtJyArIGljb25zW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gJ3dpZGdldC10b2dnbGUtYnV0dG9uIGp1cHl0ZXItYnV0dG9uJztcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c19ic3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChwcmV2aW91c19ic3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGl0ZW1faHRtbDtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBlbmNvZGVVUklDb21wb25lbnQoaXRlbSkpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpbmRleC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvb2x0aXBzW2luZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdG9vbHRpcHNbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZpZXcudXBkYXRlX3N0eWxlX3RyYWl0cyhidXR0b24pO1xyXG4gICAgICAgICAgICAgICAgdmlldy5idXR0b25ncm91cC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2VsZWN0IGFjdGl2ZSBidXR0b24uXHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW1fcXVlcnkgPSAnW2RhdGEtdmFsdWU9XCInICsgZW5jb2RlVVJJQ29tcG9uZW50KGl0ZW0pICsgJ1wiXSc7XHJcbiAgICAgICAgICAgIHZhciBidXR0b24gPSB2aWV3LmJ1dHRvbmdyb3VwLnF1ZXJ5U2VsZWN0b3IoaXRlbV9xdWVyeSk7XHJcbiAgICAgICAgICAgIGlmICh2aWV3Lm1vZGVsLmdldCgnaW5kZXgnKSA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtb2QtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdHlsZVByb21pc2UudGhlbihmdW5jdGlvbiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZS5zdHlsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcywgb3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gICAgVG9nZ2xlQnV0dG9uc1ZpZXcucHJvdG90eXBlLnVwZGF0ZV9zdHlsZV90cmFpdHMgPSBmdW5jdGlvbiAoYnV0dG9uKSB7XHJcbiAgICAgICAgZm9yICh2YXIgbmFtZV8xIGluIHRoaXMuX2Nzc19zdGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY3NzX3N0YXRlLmhhc093blByb3BlcnR5KG5hbWVfMSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lXzEgPT09ICdtYXJnaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idXR0b25ncm91cC5zdHlsZVtuYW1lXzFdID0gdGhpcy5fY3NzX3N0YXRlW25hbWVfMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lXzEgIT09ICd3aWR0aCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zdHlsZVtuYW1lXzFdID0gdGhpcy5fY3NzX3N0YXRlW25hbWVfMV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnV0dG9ucyA9IHRoaXMuYnV0dG9uZ3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1dHRvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYnV0dG9uc1swXSkuc3R5bGVbbmFtZV8xXSA9IHRoaXMuX2Nzc19zdGF0ZVtuYW1lXzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFRvZ2dsZUJ1dHRvbnNWaWV3LnByb3RvdHlwZS51cGRhdGVfYnV0dG9uX3N0eWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBidXR0b25zID0gdGhpcy5idXR0b25ncm91cC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfbWFwcGVkX2NsYXNzZXMoVG9nZ2xlQnV0dG9uc1ZpZXcuY2xhc3NNYXAsICdidXR0b25fc3R5bGUnLCBidXR0b25zW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVG9nZ2xlQnV0dG9uc1ZpZXcucHJvdG90eXBlLnNldF9idXR0b25fc3R5bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJ1dHRvbnMgPSB0aGlzLmJ1dHRvbmdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNldF9tYXBwZWRfY2xhc3NlcyhUb2dnbGVCdXR0b25zVmlldy5jbGFzc01hcCwgJ2J1dHRvbl9zdHlsZScsIGJ1dHRvbnNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBUb2dnbGVCdXR0b25zVmlldy5wcm90b3R5cGUuZXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICdjbGljayBidXR0b24nOiAnX2hhbmRsZV9jbGljaydcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIHdoZW4gYSB2YWx1ZSBpcyBjbGlja2VkLlxyXG4gICAgICpcclxuICAgICAqIENhbGxpbmcgbW9kZWwuc2V0IHdpbGwgdHJpZ2dlciBhbGwgb2YgdGhlIG90aGVyIHZpZXdzIG9mIHRoZVxyXG4gICAgICogbW9kZWwgdG8gdXBkYXRlLlxyXG4gICAgICovXHJcbiAgICBUb2dnbGVCdXR0b25zVmlldy5wcm90b3R5cGUuX2hhbmRsZV9jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ2luZGV4JywgcGFyc2VJbnQodGFyZ2V0LnZhbHVlLCAxMCksIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xyXG4gICAgICAgIHRoaXMudG91Y2goKTtcclxuICAgICAgICAvLyBXZSBhbHNvIHNlbmQgYSBjbGlja2VkIGV2ZW50LCBzaW5jZSB0aGUgdmFsdWUgaXMgb25seSBzZXQgaWYgaXQgY2hhbmdlZC5cclxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2p1cHl0ZXItd2lkZ2V0cy9pcHl3aWRnZXRzL2lzc3Vlcy83NjNcclxuICAgICAgICB0aGlzLnNlbmQoeyBldmVudDogJ2NsaWNrJyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVG9nZ2xlQnV0dG9uc1ZpZXc7XHJcbn0oRGVzY3JpcHRpb25WaWV3KSk7XHJcbmV4cG9ydCB7IFRvZ2dsZUJ1dHRvbnNWaWV3IH07XHJcbihmdW5jdGlvbiAoVG9nZ2xlQnV0dG9uc1ZpZXcpIHtcclxuICAgIFRvZ2dsZUJ1dHRvbnNWaWV3LmNsYXNzTWFwID0ge1xyXG4gICAgICAgIHByaW1hcnk6IFsnbW9kLXByaW1hcnknXSxcclxuICAgICAgICBzdWNjZXNzOiBbJ21vZC1zdWNjZXNzJ10sXHJcbiAgICAgICAgaW5mbzogWydtb2QtaW5mbyddLFxyXG4gICAgICAgIHdhcm5pbmc6IFsnbW9kLXdhcm5pbmcnXSxcclxuICAgICAgICBkYW5nZXI6IFsnbW9kLWRhbmdlciddXHJcbiAgICB9O1xyXG59KShUb2dnbGVCdXR0b25zVmlldyB8fCAoVG9nZ2xlQnV0dG9uc1ZpZXcgPSB7fSkpO1xyXG52YXIgU2VsZWN0aW9uU2xpZGVyTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU2VsZWN0aW9uU2xpZGVyTW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTZWxlY3Rpb25TbGlkZXJNb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBTZWxlY3Rpb25TbGlkZXJNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCBfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHsgX21vZGVsX25hbWU6ICdTZWxlY3Rpb25TbGlkZXJNb2RlbCcsIF92aWV3X25hbWU6ICdTZWxlY3Rpb25TbGlkZXJWaWV3Jywgb3JpZW50YXRpb246ICdob3Jpem9udGFsJywgcmVhZG91dDogdHJ1ZSwgY29udGludW91c191cGRhdGU6IHRydWUgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNlbGVjdGlvblNsaWRlck1vZGVsO1xyXG59KFNlbGVjdGlvbk1vZGVsKSk7XHJcbmV4cG9ydCB7IFNlbGVjdGlvblNsaWRlck1vZGVsIH07XHJcbnZhciBTZWxlY3Rpb25TbGlkZXJWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNlbGVjdGlvblNsaWRlclZpZXcsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTZWxlY3Rpb25TbGlkZXJWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgU2VsZWN0aW9uU2xpZGVyVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaHNsaWRlcicpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXNsaWRlcicpO1xyXG4gICAgICAgICh0aGlzLiRzbGlkZXIgPSAkKCc8ZGl2IC8+JykpXHJcbiAgICAgICAgICAgIC5zbGlkZXIoe1xyXG4gICAgICAgICAgICBzbGlkZTogdGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2UuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgc3RvcDogdGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2VkLmJpbmQodGhpcylcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWRlcicpO1xyXG4gICAgICAgIC8vIFB1dCB0aGUgc2xpZGVyIGluIGEgY29udGFpbmVyXHJcbiAgICAgICAgdGhpcy5zbGlkZXJfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlci1jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLnNsaWRlcl9jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kc2xpZGVyWzBdKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuc2xpZGVyX2NvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5yZWFkb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnJlYWRvdXQpO1xyXG4gICAgICAgIHRoaXMucmVhZG91dC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtcmVhZG91dCcpO1xyXG4gICAgICAgIHRoaXMucmVhZG91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpzbGlkZXJfY29sb3InLCBmdW5jdGlvbiAoc2VuZGVyLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBfdGhpcy4kc2xpZGVyLmZpbmQoJ2EnKS5jc3MoJ2JhY2tncm91bmQnLCB2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kc2xpZGVyLmZpbmQoJ2EnKS5jc3MoJ2JhY2tncm91bmQnLCB0aGlzLm1vZGVsLmdldCgnc2xpZGVyX2NvbG9yJykpO1xyXG4gICAgICAgIC8vIFNldCBkZWZhdWx0cy5cclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcclxuICAgICAqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXHJcbiAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cclxuICAgICAqL1xyXG4gICAgU2VsZWN0aW9uU2xpZGVyVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMudXBkYXRlZF92aWV3ICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIHZhciBsYWJlbHMgPSB0aGlzLm1vZGVsLmdldCgnX29wdGlvbnNfbGFiZWxzJyk7XHJcbiAgICAgICAgICAgIHZhciBtYXggPSBsYWJlbHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgdmFyIG1pbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ29wdGlvbicsICdzdGVwJywgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ29wdGlvbicsICdtYXgnLCBtYXgpO1xyXG4gICAgICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAnbWluJywgbWluKTtcclxuICAgICAgICAgICAgLy8gV09SS0FST1VORCBGT1IgSlFVRVJZIFNMSURFUiBCVUcuXHJcbiAgICAgICAgICAgIC8vIFRoZSBob3Jpem9udGFsIHBvc2l0aW9uIG9mIHRoZSBzbGlkZXIgaGFuZGxlXHJcbiAgICAgICAgICAgIC8vIGRlcGVuZHMgb24gdGhlIHZhbHVlIG9mIHRoZSBzbGlkZXIgYXQgdGhlIHRpbWVcclxuICAgICAgICAgICAgLy8gb2Ygb3JpZW50YXRpb24gY2hhbmdlLiAgQmVmb3JlIGFwcGx5aW5nIHRoZSBuZXdcclxuICAgICAgICAgICAgLy8gd29ya2Fyb3VuZCwgd2Ugc2V0IHRoZSB2YWx1ZSB0byB0aGUgbWluaW11bSB0b1xyXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCB0aGUgaG9yaXpvbnRhbCBwbGFjZW1lbnQgb2YgdGhlXHJcbiAgICAgICAgICAgIC8vIGhhbmRsZSBpbiB0aGUgdmVydGljYWwgc2xpZGVyIGlzIGFsd2F5c1xyXG4gICAgICAgICAgICAvLyBjb25zaXN0ZW50LlxyXG4gICAgICAgICAgICB2YXIgb3JpZW50YXRpb25fMSA9IHRoaXMubW9kZWwuZ2V0KCdvcmllbnRhdGlvbicpO1xyXG4gICAgICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAndmFsdWUnLCBtaW4pO1xyXG4gICAgICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAnb3JpZW50YXRpb24nLCBvcmllbnRhdGlvbl8xKTtcclxuICAgICAgICAgICAgdmFyIGRpc2FibGVkID0gdGhpcy5tb2RlbC5nZXQoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ29wdGlvbicsICdkaXNhYmxlZCcsIGRpc2FibGVkKTtcclxuICAgICAgICAgICAgaWYgKGRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQuY29udGVudEVkaXRhYmxlID0gJ2ZhbHNlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZG91dC5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gVXNlIHRoZSByaWdodCBDU1MgY2xhc3NlcyBmb3IgdmVydGljYWwgJiBob3Jpem9udGFsIHNsaWRlcnNcclxuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uXzEgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2lkZ2V0LWhzbGlkZXInKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC12c2xpZGVyJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtdmJveCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd3aWRnZXQtdnNsaWRlcicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd3aWRnZXQtaW5saW5lLXZib3gnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWhzbGlkZXInKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJlYWRvdXQgPSB0aGlzLm1vZGVsLmdldCgncmVhZG91dCcpO1xyXG4gICAgICAgICAgICBpZiAocmVhZG91dCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy4kcmVhZG91dC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy4kcmVhZG91dC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICBTZWxlY3Rpb25TbGlkZXJWaWV3LnByb3RvdHlwZS5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgJ3NsaWRlJzogJ2hhbmRsZVNsaWRlckNoYW5nZScsXHJcbiAgICAgICAgICAgICdzbGlkZXN0b3AnOiAnaGFuZGxlU2xpZGVyQ2hhbmdlZCdcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIFNlbGVjdGlvblNsaWRlclZpZXcucHJvdG90eXBlLnVwZGF0ZVNlbGVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLm1vZGVsLmdldCgnaW5kZXgnKTtcclxuICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAndmFsdWUnLCBpbmRleCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZWFkb3V0KGluZGV4KTtcclxuICAgIH07XHJcbiAgICBTZWxlY3Rpb25TbGlkZXJWaWV3LnByb3RvdHlwZS51cGRhdGVSZWFkb3V0ID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ19vcHRpb25zX2xhYmVscycpW2luZGV4XTtcclxuICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBzbGlkZXIgdmFsdWUgaXMgY2hhbmdpbmcuXHJcbiAgICAgKi9cclxuICAgIFNlbGVjdGlvblNsaWRlclZpZXcucHJvdG90eXBlLmhhbmRsZVNsaWRlckNoYW5nZSA9IGZ1bmN0aW9uIChlLCB1aSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVhZG91dCh1aS52YWx1ZSk7XHJcbiAgICAgICAgLy8gT25seSBwZXJzaXN0IHRoZSB2YWx1ZSB3aGlsZSBzbGlkaW5nIGlmIHRoZSBjb250aW51b3VzX3VwZGF0ZVxyXG4gICAgICAgIC8vIHRyYWl0IGlzIHNldCB0byB0cnVlLlxyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnY29udGludW91c191cGRhdGUnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNsaWRlckNoYW5nZWQoZSwgdWkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBzbGlkZXIgdmFsdWUgaGFzIGNoYW5nZWQuXHJcbiAgICAgKlxyXG4gICAgICogQ2FsbGluZyBtb2RlbC5zZXQgd2lsbCB0cmlnZ2VyIGFsbCBvZiB0aGUgb3RoZXIgdmlld3Mgb2YgdGhlXHJcbiAgICAgKiBtb2RlbCB0byB1cGRhdGUuXHJcbiAgICAgKi9cclxuICAgIFNlbGVjdGlvblNsaWRlclZpZXcucHJvdG90eXBlLmhhbmRsZVNsaWRlckNoYW5nZWQgPSBmdW5jdGlvbiAoZSwgdWkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlYWRvdXQodWkudmFsdWUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCdpbmRleCcsIHVpLnZhbHVlLCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcclxuICAgICAgICB0aGlzLnRvdWNoKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNlbGVjdGlvblNsaWRlclZpZXc7XHJcbn0oRGVzY3JpcHRpb25WaWV3KSk7XHJcbmV4cG9ydCB7IFNlbGVjdGlvblNsaWRlclZpZXcgfTtcclxudmFyIE11bHRpcGxlU2VsZWN0aW9uTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoTXVsdGlwbGVTZWxlY3Rpb25Nb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIE11bHRpcGxlU2VsZWN0aW9uTW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgTXVsdGlwbGVTZWxlY3Rpb25Nb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCBfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHsgX21vZGVsX25hbWU6ICdNdWx0aXBsZVNlbGVjdGlvbk1vZGVsJyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTXVsdGlwbGVTZWxlY3Rpb25Nb2RlbDtcclxufShTZWxlY3Rpb25Nb2RlbCkpO1xyXG5leHBvcnQgeyBNdWx0aXBsZVNlbGVjdGlvbk1vZGVsIH07XHJcbnZhciBTZWxlY3RNdWx0aXBsZU1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNlbGVjdE11bHRpcGxlTW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTZWxlY3RNdWx0aXBsZU1vZGVsKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFNlbGVjdE11bHRpcGxlTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7IF9tb2RlbF9uYW1lOiAnU2VsZWN0TXVsdGlwbGVNb2RlbCcsIF92aWV3X25hbWU6ICdTZWxlY3RNdWx0aXBsZVZpZXcnLCByb3dzOiBudWxsIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTZWxlY3RNdWx0aXBsZU1vZGVsO1xyXG59KE11bHRpcGxlU2VsZWN0aW9uTW9kZWwpKTtcclxuZXhwb3J0IHsgU2VsZWN0TXVsdGlwbGVNb2RlbCB9O1xyXG52YXIgU2VsZWN0TXVsdGlwbGVWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNlbGVjdE11bHRpcGxlVmlldywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNlbGVjdE11bHRpcGxlVmlldygpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFB1YmxpYyBjb25zdHJ1Y3Rvci5cclxuICAgICAqL1xyXG4gICAgU2VsZWN0TXVsdGlwbGVWaWV3LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLCBwYXJhbWV0ZXJzKTtcclxuICAgICAgICB0aGlzLmxpc3Rib3gubXVsdGlwbGUgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgU2VsZWN0TXVsdGlwbGVWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1zZWxlY3QtbXVsdGlwbGUnKTtcclxuICAgIH07XHJcbiAgICBTZWxlY3RNdWx0aXBsZVZpZXcucHJvdG90eXBlLnVwZGF0ZVNlbGVjdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgICAgICBpZiAob3B0aW9ucy51cGRhdGVkX3ZpZXcgPT09IHRoaXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2VsZWN0ZWQgPSB0aGlzLm1vZGVsLmdldCgnaW5kZXgnKSB8fCBbXTtcclxuICAgICAgICB2YXIgbGlzdGJveE9wdGlvbnMgPSB0aGlzLmxpc3Rib3gub3B0aW9ucztcclxuICAgICAgICAvLyBDbGVhciB0aGUgc2VsZWN0aW9uXHJcbiAgICAgICAgdGhpcy5saXN0Ym94LnNlbGVjdGVkSW5kZXggPSAtMTtcclxuICAgICAgICAvLyBTZWxlY3QgdGhlIGFwcHJvcHJpYXRlIG9wdGlvbnNcclxuICAgICAgICBzZWxlY3RlZC5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIGxpc3Rib3hPcHRpb25zW2ldLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSB3aGVuIGEgbmV3IHZhbHVlIGlzIHNlbGVjdGVkLlxyXG4gICAgICovXHJcbiAgICBTZWxlY3RNdWx0aXBsZVZpZXcucHJvdG90eXBlLl9oYW5kbGVfY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IEFycmF5LnByb3RvdHlwZS5tYXBcclxuICAgICAgICAgICAgLmNhbGwodGhpcy5saXN0Ym94LnNlbGVjdGVkT3B0aW9ucyB8fCBbXSwgZnVuY3Rpb24gKG9wdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLmluZGV4O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCdpbmRleCcsIGluZGV4LCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcclxuICAgICAgICB0aGlzLnRvdWNoKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNlbGVjdE11bHRpcGxlVmlldztcclxufShTZWxlY3RWaWV3KSk7XHJcbmV4cG9ydCB7IFNlbGVjdE11bHRpcGxlVmlldyB9O1xyXG52YXIgU2VsZWN0aW9uUmFuZ2VTbGlkZXJNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhTZWxlY3Rpb25SYW5nZVNsaWRlck1vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU2VsZWN0aW9uUmFuZ2VTbGlkZXJNb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBTZWxlY3Rpb25SYW5nZVNsaWRlck1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwgeyBfbW9kZWxfbmFtZTogJ1NlbGVjdGlvblNsaWRlck1vZGVsJywgX3ZpZXdfbmFtZTogJ1NlbGVjdGlvblNsaWRlclZpZXcnLCBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnLCByZWFkb3V0OiB0cnVlLCBjb250aW51b3VzX3VwZGF0ZTogdHJ1ZSB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2VsZWN0aW9uUmFuZ2VTbGlkZXJNb2RlbDtcclxufShNdWx0aXBsZVNlbGVjdGlvbk1vZGVsKSk7XHJcbmV4cG9ydCB7IFNlbGVjdGlvblJhbmdlU2xpZGVyTW9kZWwgfTtcclxudmFyIFNlbGVjdGlvblJhbmdlU2xpZGVyVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhTZWxlY3Rpb25SYW5nZVNsaWRlclZpZXcsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTZWxlY3Rpb25SYW5nZVNsaWRlclZpZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB2aWV3IGlzIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBTZWxlY3Rpb25SYW5nZVNsaWRlclZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ29wdGlvbicsICdyYW5nZScsIHRydWUpO1xyXG4gICAgfTtcclxuICAgIFNlbGVjdGlvblJhbmdlU2xpZGVyVmlldy5wcm90b3R5cGUudXBkYXRlU2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMubW9kZWwuZ2V0KCdpbmRleCcpO1xyXG4gICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ29wdGlvbicsICd2YWx1ZXMnLCBpbmRleC5zbGljZSgpKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlYWRvdXQoaW5kZXgpO1xyXG4gICAgfTtcclxuICAgIFNlbGVjdGlvblJhbmdlU2xpZGVyVmlldy5wcm90b3R5cGUudXBkYXRlUmVhZG91dCA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHZhciBsYWJlbHMgPSB0aGlzLm1vZGVsLmdldCgnX29wdGlvbnNfbGFiZWxzJyk7XHJcbiAgICAgICAgdmFyIG1pblZhbHVlID0gbGFiZWxzW2luZGV4WzBdXTtcclxuICAgICAgICB2YXIgbWF4VmFsdWUgPSBsYWJlbHNbaW5kZXhbMV1dO1xyXG4gICAgICAgIHRoaXMucmVhZG91dC50ZXh0Q29udGVudCA9IG1pblZhbHVlICsgXCItXCIgKyBtYXhWYWx1ZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBzbGlkZXIgdmFsdWUgaXMgY2hhbmdpbmcuXHJcbiAgICAgKi9cclxuICAgIFNlbGVjdGlvblJhbmdlU2xpZGVyVmlldy5wcm90b3R5cGUuaGFuZGxlU2xpZGVyQ2hhbmdlID0gZnVuY3Rpb24gKGUsIHVpKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZWFkb3V0KHVpLnZhbHVlcyk7XHJcbiAgICAgICAgLy8gT25seSBwZXJzaXN0IHRoZSB2YWx1ZSB3aGlsZSBzbGlkaW5nIGlmIHRoZSBjb250aW51b3VzX3VwZGF0ZVxyXG4gICAgICAgIC8vIHRyYWl0IGlzIHNldCB0byB0cnVlLlxyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnY29udGludW91c191cGRhdGUnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNsaWRlckNoYW5nZWQoZSwgdWkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBzbGlkZXIgdmFsdWUgaGFzIGNoYW5nZWQuXHJcbiAgICAgKlxyXG4gICAgICogQ2FsbGluZyBtb2RlbC5zZXQgd2lsbCB0cmlnZ2VyIGFsbCBvZiB0aGUgb3RoZXIgdmlld3Mgb2YgdGhlXHJcbiAgICAgKiBtb2RlbCB0byB1cGRhdGUuXHJcbiAgICAgKi9cclxuICAgIFNlbGVjdGlvblJhbmdlU2xpZGVyVmlldy5wcm90b3R5cGUuaGFuZGxlU2xpZGVyQ2hhbmdlZCA9IGZ1bmN0aW9uIChlLCB1aSkge1xyXG4gICAgICAgIC8vIFRoZSBqcXVlcnl1aSBkb2N1bWVudGF0aW9uIGluZGljYXRlcyB1aS52YWx1ZXMgZG9lc24ndCBleGlzdCBvbiB0aGUgc2xpZGVzdG9wIGV2ZW50LFxyXG4gICAgICAgIC8vIGJ1dCBpdCBhcHBlYXJzIHRoYXQgaXQgYWN0dWFsbHkgZG9lczogaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnktdWkvYmxvYi9hZTMxZjJiM2I0Nzg5NzVmNzA1MjZiZGYzMjk5NDY0YjlhZmE4YmIxL3VpL3dpZGdldHMvc2xpZGVyLmpzI0wzMTNcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlYWRvdXQodWkudmFsdWVzKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnNldCgnaW5kZXgnLCB1aS52YWx1ZXMuc2xpY2UoKSwgeyB1cGRhdGVkX3ZpZXc6IHRoaXMgfSk7XHJcbiAgICAgICAgdGhpcy50b3VjaCgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTZWxlY3Rpb25SYW5nZVNsaWRlclZpZXc7XHJcbn0oU2VsZWN0aW9uU2xpZGVyVmlldykpO1xyXG5leHBvcnQgeyBTZWxlY3Rpb25SYW5nZVNsaWRlclZpZXcgfTtcclxuIiwiLyogVGhpcyBmaWxlIGhhcyBjb2RlIGRlcml2ZWQgZnJvbSBQaG9zcGhvckpTLiBUaGUgbGljZW5zZSBmb3IgdGhpcyBQaG9zcGhvckpTIGNvZGUgaXM6XHJcblxyXG5Db3B5cmlnaHQgKGMpIDIwMTQtMjAxNywgUGhvc3Bob3JKUyBDb250cmlidXRvcnNcclxuQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcblJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxyXG5tb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcclxuXHJcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXHJcbiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcblxyXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcclxuICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uXHJcbiAgYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcblxyXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIGNvcHlyaWdodCBob2xkZXIgbm9yIHRoZSBuYW1lcyBvZiBpdHNcclxuICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxyXG4gIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcblxyXG5USElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxyXG5BTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXHJcbklNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRVxyXG5ESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFXHJcbkZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXHJcbkRBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SXHJcblNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSXHJcbkNBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksXHJcbk9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXHJcbk9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcblxyXG4qL1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IHsgTWVzc2FnZUxvb3AgfSBmcm9tICdAcGhvc3Bob3IvbWVzc2FnaW5nJztcclxuaW1wb3J0IHsgU2lnbmFsIH0gZnJvbSAnQHBob3NwaG9yL3NpZ25hbGluZyc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQHBob3NwaG9yL2RvbXV0aWxzJztcclxuaW1wb3J0IHsgUGFuZWwsIFBhbmVsTGF5b3V0LCBUYWJCYXIsIFdpZGdldCB9IGZyb20gJ0BwaG9zcGhvci93aWRnZXRzJztcclxuLyoqXHJcbiAqIEEgcGFuZWwgd2hlcmUgdmlzaWJsZSB3aWRnZXRzIGFyZSBzdGFja2VkIGF0b3Agb25lIGFub3RoZXIuXHJcbiAqXHJcbiAqICMjIyMgTm90ZXNcclxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBhIGNvbnZlbmllbmNlIHdyYXBwZXIgYXJvdW5kIGEgW1tQYW5lbExheW91dF1dLlxyXG4gKi9cclxudmFyIEV2ZW50ZWRQYW5lbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhFdmVudGVkUGFuZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBFdmVudGVkUGFuZWwoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX3dpZGdldFJlbW92ZWQgPSBuZXcgU2lnbmFsKF90aGlzKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRlZFBhbmVsLnByb3RvdHlwZSwgXCJ3aWRnZXRSZW1vdmVkXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIHNpZ25hbCBlbWl0dGVkIHdoZW4gYSB3aWRnZXQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBwYW5lbC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dpZGdldFJlbW92ZWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIEEgbWVzc2FnZSBoYW5kbGVyIGludm9rZWQgb24gYSBgJ2NoaWxkLXJlbW92ZWQnYCBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBFdmVudGVkUGFuZWwucHJvdG90eXBlLm9uQ2hpbGRSZW1vdmVkID0gZnVuY3Rpb24gKG1zZykge1xyXG4gICAgICAgIHRoaXMuX3dpZGdldFJlbW92ZWQuZW1pdChtc2cuY2hpbGQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBFdmVudGVkUGFuZWw7XHJcbn0oUGFuZWwpKTtcclxuZXhwb3J0IHsgRXZlbnRlZFBhbmVsIH07XHJcbi8qKlxyXG4gKiBBIHdpZGdldCB3aGljaCBjb21iaW5lcyBhIGBUYWJCYXJgIGFuZCBhIGBFdmVudGVkUGFuZWxgLlxyXG4gKlxyXG4gKiAjIyMjIE5vdGVzXHJcbiAqIFRoaXMgaXMgYSBzaW1wbGUgcGFuZWwgd2hpY2ggaGFuZGxlcyB0aGUgY29tbW9uIGNhc2Ugb2YgYSB0YWIgYmFyXHJcbiAqIHBsYWNlZCBuZXh0IHRvIGEgY29udGVudCBhcmVhLiBUaGUgc2VsZWN0ZWQgdGFiIGNvbnRyb2xzIHRoZSB3aWRnZXRcclxuICogd2hpY2ggaXMgc2hvd24gaW4gdGhlIGNvbnRlbnQgYXJlYS5cclxuICpcclxuICogRm9yIHVzZSBjYXNlcyB3aGljaCByZXF1aXJlIG1vcmUgY29udHJvbCB0aGFuIGlzIHByb3ZpZGVkIGJ5IHRoaXNcclxuICogcGFuZWwsIHRoZSBgVGFiQmFyYCB3aWRnZXQgbWF5IGJlIHVzZWQgaW5kZXBlbmRlbnRseS5cclxuICpcclxuICogVE9ETzogU3VwcG9ydCBzZXR0aW5nIHRoZSBkaXJlY3Rpb24/P1xyXG4gKi9cclxudmFyIFRhYlBhbmVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRhYlBhbmVsLCBfc3VwZXIpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3QgYSBuZXcgdGFiIHBhbmVsLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgZm9yIGluaXRpYWxpemluZyB0aGUgdGFiIHBhbmVsLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBUYWJQYW5lbChvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLl9jdXJyZW50Q2hhbmdlZCA9IG5ldyBTaWduYWwoX3RoaXMpO1xyXG4gICAgICAgIF90aGlzLmFkZENsYXNzKCdwLVRhYlBhbmVsJyk7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB0YWIgYmFyIGFuZCBjb250ZW50cyBwYW5lbC5cclxuICAgICAgICBfdGhpcy50YWJCYXIgPSBuZXcgVGFiQmFyKG9wdGlvbnMpO1xyXG4gICAgICAgIF90aGlzLnRhYkJhci5hZGRDbGFzcygncC1UYWJQYW5lbC10YWJCYXInKTtcclxuICAgICAgICBfdGhpcy50YWJDb250ZW50cyA9IG5ldyBFdmVudGVkUGFuZWwoKTtcclxuICAgICAgICBfdGhpcy50YWJDb250ZW50cy5hZGRDbGFzcygncC1UYWJQYW5lbC10YWJDb250ZW50cycpO1xyXG4gICAgICAgIC8vIENvbm5lY3QgdGhlIHRhYiBiYXIgc2lnbmFsIGhhbmRsZXJzLlxyXG4gICAgICAgIF90aGlzLnRhYkJhci50YWJNb3ZlZC5jb25uZWN0KF90aGlzLl9vblRhYk1vdmVkLCBfdGhpcyk7XHJcbiAgICAgICAgX3RoaXMudGFiQmFyLmN1cnJlbnRDaGFuZ2VkLmNvbm5lY3QoX3RoaXMuX29uQ3VycmVudENoYW5nZWQsIF90aGlzKTtcclxuICAgICAgICBfdGhpcy50YWJCYXIudGFiQ2xvc2VSZXF1ZXN0ZWQuY29ubmVjdChfdGhpcy5fb25UYWJDbG9zZVJlcXVlc3RlZCwgX3RoaXMpO1xyXG4gICAgICAgIF90aGlzLnRhYkJhci50YWJBY3RpdmF0ZVJlcXVlc3RlZC5jb25uZWN0KF90aGlzLl9vblRhYkFjdGl2YXRlUmVxdWVzdGVkLCBfdGhpcyk7XHJcbiAgICAgICAgLy8gQ29ubmVjdCB0aGUgZXZlbnRlZCBwYW5lbCBzaWduYWwgaGFuZGxlcnMuXHJcbiAgICAgICAgX3RoaXMudGFiQ29udGVudHMud2lkZ2V0UmVtb3ZlZC5jb25uZWN0KF90aGlzLl9vbldpZGdldFJlbW92ZWQsIF90aGlzKTtcclxuICAgICAgICAvLyBDcmVhdGUgdGhlIGxheW91dC5cclxuICAgICAgICB2YXIgbGF5b3V0ID0gbmV3IFBhbmVsTGF5b3V0KCk7XHJcbiAgICAgICAgLy8gQWRkIHRoZSBjaGlsZCB3aWRnZXRzIHRvIHRoZSBsYXlvdXQuXHJcbiAgICAgICAgbGF5b3V0LmFkZFdpZGdldChfdGhpcy50YWJCYXIpO1xyXG4gICAgICAgIGxheW91dC5hZGRXaWRnZXQoX3RoaXMudGFiQ29udGVudHMpO1xyXG4gICAgICAgIC8vIEluc3RhbGwgdGhlIGxheW91dCBvbiB0aGUgdGFiIHBhbmVsLlxyXG4gICAgICAgIF90aGlzLmxheW91dCA9IGxheW91dDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFiUGFuZWwucHJvdG90eXBlLCBcImN1cnJlbnRDaGFuZ2VkXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIHNpZ25hbCBlbWl0dGVkIHdoZW4gdGhlIGN1cnJlbnQgdGFiIGlzIGNoYW5nZWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAjIyMjIE5vdGVzXHJcbiAgICAgICAgICogVGhpcyBzaWduYWwgaXMgZW1pdHRlZCB3aGVuIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGFiIGlzIGNoYW5nZWRcclxuICAgICAgICAgKiBlaXRoZXIgdGhyb3VnaCB1c2VyIG9yIHByb2dyYW1tYXRpYyBpbnRlcmFjdGlvbi5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIE5vdGFibHksIHRoaXMgc2lnbmFsIGlzIG5vdCBlbWl0dGVkIHdoZW4gdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50XHJcbiAgICAgICAgICogdGFiIGNoYW5nZXMgZHVlIHRvIHRhYnMgYmVpbmcgaW5zZXJ0ZWQsIHJlbW92ZWQsIG9yIG1vdmVkLiBJdCBpc1xyXG4gICAgICAgICAqIG9ubHkgZW1pdHRlZCB3aGVuIHRoZSBhY3R1YWwgY3VycmVudCB0YWIgbm9kZSBpcyBjaGFuZ2VkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudENoYW5nZWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFiUGFuZWwucHJvdG90eXBlLCBcImN1cnJlbnRJbmRleFwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0IHRoZSBpbmRleCBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRhYi5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICMjIyMgTm90ZXNcclxuICAgICAgICAgKiBUaGlzIHdpbGwgYmUgYG51bGxgIGlmIG5vIHRhYiBpcyBzZWxlY3RlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IHRoaXMudGFiQmFyLmN1cnJlbnRJbmRleDtcclxuICAgICAgICAgICAgLy8gUGhvc3Bob3IgdGFiIGJhcnMgaGF2ZSBhbiBpbmRleCBvZiAtMSBpZiBubyB0YWIgaXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgcmV0dXJuIChjdXJyZW50SW5kZXggPT09IC0xID8gbnVsbCA6IGN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXQgdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGFiLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogIyMjIyBOb3Rlc1xyXG4gICAgICAgICAqIElmIHRoZSBpbmRleCBpcyBvdXQgb2YgcmFuZ2UsIGl0IHdpbGwgYmUgc2V0IHRvIGBudWxsYC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYkJhci5jdXJyZW50SW5kZXggPSAodmFsdWUgPT09IG51bGwgPyAtMSA6IHZhbHVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYWJQYW5lbC5wcm90b3R5cGUsIFwiY3VycmVudFdpZGdldFwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgd2lkZ2V0LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogIyMjIyBOb3Rlc1xyXG4gICAgICAgICAqIFRoaXMgd2lsbCBiZSBgbnVsbGAgaWYgdGhlcmUgaXMgbm8gc2VsZWN0ZWQgdGFiLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdGl0bGUgPSB0aGlzLnRhYkJhci5jdXJyZW50VGl0bGU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aXRsZSA/IHRpdGxlLm93bmVyIDogbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNldCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHdpZGdldC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICMjIyMgTm90ZXNcclxuICAgICAgICAgKiBJZiB0aGUgd2lkZ2V0IGlzIG5vdCBpbiB0aGUgcGFuZWwsIGl0IHdpbGwgYmUgc2V0IHRvIGBudWxsYC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYkJhci5jdXJyZW50VGl0bGUgPSB2YWx1ZSA/IHZhbHVlLnRpdGxlIDogbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYWJQYW5lbC5wcm90b3R5cGUsIFwidGFic01vdmFibGVcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCB0aGUgd2hldGhlciB0aGUgdGFicyBhcmUgbW92YWJsZSBieSB0aGUgdXNlci5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICMjIyMgTm90ZXNcclxuICAgICAgICAgKiBUYWJzIGNhbiBhbHdheXMgYmUgbW92ZWQgcHJvZ3JhbW1hdGljYWxseS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFiQmFyLnRhYnNNb3ZhYmxlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2V0IHRoZSB3aGV0aGVyIHRoZSB0YWJzIGFyZSBtb3ZhYmxlIGJ5IHRoZSB1c2VyLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogIyMjIyBOb3Rlc1xyXG4gICAgICAgICAqIFRhYnMgY2FuIGFsd2F5cyBiZSBtb3ZlZCBwcm9ncmFtbWF0aWNhbGx5LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiQmFyLnRhYnNNb3ZhYmxlID0gdmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFiUGFuZWwucHJvdG90eXBlLCBcIndpZGdldHNcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgcmVhZC1vbmx5IGFycmF5IG9mIHRoZSB3aWRnZXRzIGluIHRoZSBwYW5lbC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFiQ29udGVudHMud2lkZ2V0cztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgd2lkZ2V0IHRvIHRoZSBlbmQgb2YgdGhlIHRhYiBwYW5lbC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gd2lkZ2V0IC0gVGhlIHdpZGdldCB0byBhZGQgdG8gdGhlIHRhYiBwYW5lbC5cclxuICAgICAqXHJcbiAgICAgKiAjIyMjIE5vdGVzXHJcbiAgICAgKiBJZiB0aGUgd2lkZ2V0IGlzIGFscmVhZHkgY29udGFpbmVkIGluIHRoZSBwYW5lbCwgaXQgd2lsbCBiZSBtb3ZlZC5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgd2lkZ2V0J3MgYHRpdGxlYCBpcyB1c2VkIHRvIHBvcHVsYXRlIHRoZSB0YWIuXHJcbiAgICAgKi9cclxuICAgIFRhYlBhbmVsLnByb3RvdHlwZS5hZGRXaWRnZXQgPSBmdW5jdGlvbiAod2lkZ2V0KSB7XHJcbiAgICAgICAgdGhpcy5pbnNlcnRXaWRnZXQodGhpcy53aWRnZXRzLmxlbmd0aCwgd2lkZ2V0KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEluc2VydCBhIHdpZGdldCBpbnRvIHRoZSB0YWIgcGFuZWwgYXQgYSBzcGVjaWZpZWQgaW5kZXguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGluZGV4IC0gVGhlIGluZGV4IGF0IHdoaWNoIHRvIGluc2VydCB0aGUgd2lkZ2V0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB3aWRnZXQgLSBUaGUgd2lkZ2V0IHRvIGluc2VydCBpbnRvIHRvIHRoZSB0YWIgcGFuZWwuXHJcbiAgICAgKlxyXG4gICAgICogIyMjIyBOb3Rlc1xyXG4gICAgICogSWYgdGhlIHdpZGdldCBpcyBhbHJlYWR5IGNvbnRhaW5lZCBpbiB0aGUgcGFuZWwsIGl0IHdpbGwgYmUgbW92ZWQuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIHdpZGdldCdzIGB0aXRsZWAgaXMgdXNlZCB0byBwb3B1bGF0ZSB0aGUgdGFiLlxyXG4gICAgICovXHJcbiAgICBUYWJQYW5lbC5wcm90b3R5cGUuaW5zZXJ0V2lkZ2V0ID0gZnVuY3Rpb24gKGluZGV4LCB3aWRnZXQpIHtcclxuICAgICAgICBpZiAod2lkZ2V0ICE9PSB0aGlzLmN1cnJlbnRXaWRnZXQpIHtcclxuICAgICAgICAgICAgd2lkZ2V0LmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YWJDb250ZW50cy5pbnNlcnRXaWRnZXQoaW5kZXgsIHdpZGdldCk7XHJcbiAgICAgICAgdGhpcy50YWJCYXIuaW5zZXJ0VGFiKGluZGV4LCB3aWRnZXQudGl0bGUpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIHRoZSBgY3VycmVudENoYW5nZWRgIHNpZ25hbCBmcm9tIHRoZSB0YWIgYmFyLlxyXG4gICAgICovXHJcbiAgICBUYWJQYW5lbC5wcm90b3R5cGUuX29uQ3VycmVudENoYW5nZWQgPSBmdW5jdGlvbiAoc2VuZGVyLCBhcmdzKSB7XHJcbiAgICAgICAgLy8gRXh0cmFjdCB0aGUgcHJldmlvdXMgYW5kIGN1cnJlbnQgdGl0bGUgZnJvbSB0aGUgYXJncy5cclxuICAgICAgICB2YXIgcHJldmlvdXNJbmRleCA9IGFyZ3MucHJldmlvdXNJbmRleCwgcHJldmlvdXNUaXRsZSA9IGFyZ3MucHJldmlvdXNUaXRsZSwgY3VycmVudEluZGV4ID0gYXJncy5jdXJyZW50SW5kZXgsIGN1cnJlbnRUaXRsZSA9IGFyZ3MuY3VycmVudFRpdGxlO1xyXG4gICAgICAgIC8vIEV4dHJhY3QgdGhlIHdpZGdldHMgZnJvbSB0aGUgdGl0bGVzLlxyXG4gICAgICAgIHZhciBwcmV2aW91c1dpZGdldCA9IHByZXZpb3VzVGl0bGUgPyBwcmV2aW91c1RpdGxlLm93bmVyIDogbnVsbDtcclxuICAgICAgICB2YXIgY3VycmVudFdpZGdldCA9IGN1cnJlbnRUaXRsZSA/IGN1cnJlbnRUaXRsZS5vd25lciA6IG51bGw7XHJcbiAgICAgICAgLy8gSGlkZSB0aGUgcHJldmlvdXMgd2lkZ2V0LlxyXG4gICAgICAgIGlmIChwcmV2aW91c1dpZGdldCkge1xyXG4gICAgICAgICAgICBwcmV2aW91c1dpZGdldC5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNob3cgdGhlIGN1cnJlbnQgd2lkZ2V0LlxyXG4gICAgICAgIGlmIChjdXJyZW50V2lkZ2V0KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRXaWRnZXQuc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBFbWl0IHRoZSBgY3VycmVudENoYW5nZWRgIHNpZ25hbCBmb3IgdGhlIHRhYiBwYW5lbC5cclxuICAgICAgICB0aGlzLl9jdXJyZW50Q2hhbmdlZC5lbWl0KHtcclxuICAgICAgICAgICAgcHJldmlvdXNJbmRleDogcHJldmlvdXNJbmRleCwgcHJldmlvdXNXaWRnZXQ6IHByZXZpb3VzV2lkZ2V0LCBjdXJyZW50SW5kZXg6IGN1cnJlbnRJbmRleCwgY3VycmVudFdpZGdldDogY3VycmVudFdpZGdldFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIEZsdXNoIHRoZSBtZXNzYWdlIGxvb3Agb24gSUUgYW5kIEVkZ2UgdG8gcHJldmVudCBmbGlja2VyLlxyXG4gICAgICAgIGlmIChQbGF0Zm9ybS5JU19FREdFIHx8IFBsYXRmb3JtLklTX0lFKSB7XHJcbiAgICAgICAgICAgIE1lc3NhZ2VMb29wLmZsdXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIHRoZSBgdGFiQWN0aXZhdGVSZXF1ZXN0ZWRgIHNpZ25hbCBmcm9tIHRoZSB0YWIgYmFyLlxyXG4gICAgICovXHJcbiAgICBUYWJQYW5lbC5wcm90b3R5cGUuX29uVGFiQWN0aXZhdGVSZXF1ZXN0ZWQgPSBmdW5jdGlvbiAoc2VuZGVyLCBhcmdzKSB7XHJcbiAgICAgICAgYXJncy50aXRsZS5vd25lci5hY3RpdmF0ZSgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIHRoZSBgdGFiQ2xvc2VSZXF1ZXN0ZWRgIHNpZ25hbCBmcm9tIHRoZSB0YWIgYmFyLlxyXG4gICAgICovXHJcbiAgICBUYWJQYW5lbC5wcm90b3R5cGUuX29uVGFiQ2xvc2VSZXF1ZXN0ZWQgPSBmdW5jdGlvbiAoc2VuZGVyLCBhcmdzKSB7XHJcbiAgICAgICAgYXJncy50aXRsZS5vd25lci5jbG9zZSgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIHRoZSBgdGFiTW92ZWRgIHNpZ25hbCBmcm9tIHRoZSB0YWIgYmFyLlxyXG4gICAgICovXHJcbiAgICBUYWJQYW5lbC5wcm90b3R5cGUuX29uVGFiTW92ZWQgPSBmdW5jdGlvbiAoc2VuZGVyLCBhcmdzKSB7XHJcbiAgICAgICAgdGhpcy50YWJDb250ZW50cy5pbnNlcnRXaWRnZXQoYXJncy50b0luZGV4LCBhcmdzLnRpdGxlLm93bmVyKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSB0aGUgYHdpZGdldFJlbW92ZWRgIHNpZ25hbCBmcm9tIHRoZSBzdGFja2VkIHBhbmVsLlxyXG4gICAgICovXHJcbiAgICBUYWJQYW5lbC5wcm90b3R5cGUuX29uV2lkZ2V0UmVtb3ZlZCA9IGZ1bmN0aW9uIChzZW5kZXIsIHdpZGdldCkge1xyXG4gICAgICAgIHRoaXMudGFiQmFyLnJlbW92ZVRhYih3aWRnZXQudGl0bGUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUYWJQYW5lbDtcclxufShXaWRnZXQpKTtcclxuZXhwb3J0IHsgVGFiUGFuZWwgfTtcclxuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXHJcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IERPTVdpZGdldFZpZXcgfSBmcm9tICdAanVweXRlci13aWRnZXRzL2Jhc2UnO1xyXG5pbXBvcnQgeyBDb3JlRE9NV2lkZ2V0TW9kZWwgfSBmcm9tICcuL3dpZGdldF9jb3JlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxudmFyIEF1ZGlvTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQXVkaW9Nb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEF1ZGlvTW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgQXVkaW9Nb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0F1ZGlvTW9kZWwnLFxyXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnQXVkaW9WaWV3JyxcclxuICAgICAgICAgICAgZm9ybWF0OiAnbXAzJyxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbnRyb2xzOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTogbmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigwKSlcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBBdWRpb01vZGVsLnNlcmlhbGl6ZXJzID0gX19hc3NpZ24oe30sIENvcmVET01XaWRnZXRNb2RlbC5zZXJpYWxpemVycywgeyB2YWx1ZTogeyBzZXJpYWxpemU6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRhVmlldyh2YWx1ZS5idWZmZXIuc2xpY2UoMCkpO1xyXG4gICAgICAgICAgICB9IH0gfSk7XHJcbiAgICByZXR1cm4gQXVkaW9Nb2RlbDtcclxufShDb3JlRE9NV2lkZ2V0TW9kZWwpKTtcclxuZXhwb3J0IHsgQXVkaW9Nb2RlbCB9O1xyXG52YXIgQXVkaW9WaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEF1ZGlvVmlldywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEF1ZGlvVmlldygpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBBdWRpb1ZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDYWxsZWQgd2hlbiB2aWV3IGlzIHJlbmRlcmVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5wV2lkZ2V0LmFkZENsYXNzKCdqdXB5dGVyLXdpZGdldHMnKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpOyAvLyBTZXQgZGVmYXVsdHMuXHJcbiAgICB9O1xyXG4gICAgQXVkaW9WaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiAgVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cclxuICAgICAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgdXJsO1xyXG4gICAgICAgIHZhciBmb3JtYXQgPSB0aGlzLm1vZGVsLmdldCgnZm9ybWF0Jyk7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XHJcbiAgICAgICAgaWYgKGZvcm1hdCAhPT0gJ3VybCcpIHtcclxuICAgICAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbdmFsdWVdLCB7IHR5cGU6IFwiYXVkaW8vXCIgKyB0aGlzLm1vZGVsLmdldCgnZm9ybWF0JykgfSk7XHJcbiAgICAgICAgICAgIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB1cmwgPSAobmV3IFRleHREZWNvZGVyKCd1dGYtOCcpKS5kZWNvZGUodmFsdWUuYnVmZmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIG9sZCBvYmplY3RVUkxcclxuICAgICAgICB2YXIgb2xkdXJsID0gdGhpcy5lbC5zcmM7XHJcbiAgICAgICAgdGhpcy5lbC5zcmMgPSB1cmw7XHJcbiAgICAgICAgaWYgKG9sZHVybCAmJiB0eXBlb2Ygb2xkdXJsICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEF1ZGlvIGF0dHJpYnV0ZXNcclxuICAgICAgICB0aGlzLmVsLmxvb3AgPSB0aGlzLm1vZGVsLmdldCgnbG9vcCcpO1xyXG4gICAgICAgIHRoaXMuZWwuYXV0b3BsYXkgPSB0aGlzLm1vZGVsLmdldCgnYXV0b3BsYXknKTtcclxuICAgICAgICB0aGlzLmVsLmNvbnRyb2xzID0gdGhpcy5tb2RlbC5nZXQoJ2NvbnRyb2xzJyk7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgQXVkaW9WaWV3LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWwuc3JjKSB7XHJcbiAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5lbC5zcmMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbW92ZS5jYWxsKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBdWRpb1ZpZXcucHJvdG90eXBlLCBcInRhZ05hbWVcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IHRhZyBuYW1lLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogIyMjIyBOb3Rlc1xyXG4gICAgICAgICAqIFRoaXMgaXMgYSByZWFkLW9ubHkgYXR0cmlidXRlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBXZSBjYW4ndCBtYWtlIHRoaXMgYW4gYXR0cmlidXRlIHdpdGggYSBkZWZhdWx0IHZhbHVlXHJcbiAgICAgICAgICAgIC8vIHNpbmNlIGl0IHdvdWxkIGJlIHNldCBhZnRlciBpdCBpcyBuZWVkZWQgaW4gdGhlXHJcbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdG9yLlxyXG4gICAgICAgICAgICByZXR1cm4gJ2F1ZGlvJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBBdWRpb1ZpZXc7XHJcbn0oRE9NV2lkZ2V0VmlldykpO1xyXG5leHBvcnQgeyBBdWRpb1ZpZXcgfTtcclxuIiwiLyohXG4gKiBqUXVlcnkgVUkgTW91c2UgMS4xMi4xXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqL1xuXG4vLz4+bGFiZWw6IE1vdXNlXG4vLz4+Z3JvdXA6IFdpZGdldHNcbi8vPj5kZXNjcmlwdGlvbjogQWJzdHJhY3RzIG1vdXNlLWJhc2VkIGludGVyYWN0aW9ucyB0byBhc3Npc3QgaW4gY3JlYXRpbmcgY2VydGFpbiB3aWRnZXRzLlxuLy8+PmRvY3M6IGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL21vdXNlL1xuXG4oIGZ1bmN0aW9uKCBmYWN0b3J5ICkge1xuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZSggW1xuXHRcdFx0XCJqcXVlcnlcIixcblx0XHRcdFwiLi4vaWVcIixcblx0XHRcdFwiLi4vdmVyc2lvblwiLFxuXHRcdFx0XCIuLi93aWRnZXRcIlxuXHRcdF0sIGZhY3RvcnkgKTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xuXHRcdGZhY3RvcnkoIGpRdWVyeSApO1xuXHR9XG59KCBmdW5jdGlvbiggJCApIHtcblxudmFyIG1vdXNlSGFuZGxlZCA9IGZhbHNlO1xuJCggZG9jdW1lbnQgKS5vbiggXCJtb3VzZXVwXCIsIGZ1bmN0aW9uKCkge1xuXHRtb3VzZUhhbmRsZWQgPSBmYWxzZTtcbn0gKTtcblxucmV0dXJuICQud2lkZ2V0KCBcInVpLm1vdXNlXCIsIHtcblx0dmVyc2lvbjogXCIxLjEyLjFcIixcblx0b3B0aW9uczoge1xuXHRcdGNhbmNlbDogXCJpbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbiwgc2VsZWN0LCBvcHRpb25cIixcblx0XHRkaXN0YW5jZTogMSxcblx0XHRkZWxheTogMFxuXHR9LFxuXHRfbW91c2VJbml0OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5vbiggXCJtb3VzZWRvd24uXCIgKyB0aGlzLndpZGdldE5hbWUsIGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0cmV0dXJuIHRoYXQuX21vdXNlRG93biggZXZlbnQgKTtcblx0XHRcdH0gKVxuXHRcdFx0Lm9uKCBcImNsaWNrLlwiICsgdGhpcy53aWRnZXROYW1lLCBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdGlmICggdHJ1ZSA9PT0gJC5kYXRhKCBldmVudC50YXJnZXQsIHRoYXQud2lkZ2V0TmFtZSArIFwiLnByZXZlbnRDbGlja0V2ZW50XCIgKSApIHtcblx0XHRcdFx0XHQkLnJlbW92ZURhdGEoIGV2ZW50LnRhcmdldCwgdGhhdC53aWRnZXROYW1lICsgXCIucHJldmVudENsaWNrRXZlbnRcIiApO1xuXHRcdFx0XHRcdGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0dGhpcy5zdGFydGVkID0gZmFsc2U7XG5cdH0sXG5cblx0Ly8gVE9ETzogbWFrZSBzdXJlIGRlc3Ryb3lpbmcgb25lIGluc3RhbmNlIG9mIG1vdXNlIGRvZXNuJ3QgbWVzcyB3aXRoXG5cdC8vIG90aGVyIGluc3RhbmNlcyBvZiBtb3VzZVxuXHRfbW91c2VEZXN0cm95OiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVsZW1lbnQub2ZmKCBcIi5cIiArIHRoaXMud2lkZ2V0TmFtZSApO1xuXHRcdGlmICggdGhpcy5fbW91c2VNb3ZlRGVsZWdhdGUgKSB7XG5cdFx0XHR0aGlzLmRvY3VtZW50XG5cdFx0XHRcdC5vZmYoIFwibW91c2Vtb3ZlLlwiICsgdGhpcy53aWRnZXROYW1lLCB0aGlzLl9tb3VzZU1vdmVEZWxlZ2F0ZSApXG5cdFx0XHRcdC5vZmYoIFwibW91c2V1cC5cIiArIHRoaXMud2lkZ2V0TmFtZSwgdGhpcy5fbW91c2VVcERlbGVnYXRlICk7XG5cdFx0fVxuXHR9LFxuXG5cdF9tb3VzZURvd246IGZ1bmN0aW9uKCBldmVudCApIHtcblxuXHRcdC8vIGRvbid0IGxldCBtb3JlIHRoYW4gb25lIHdpZGdldCBoYW5kbGUgbW91c2VTdGFydFxuXHRcdGlmICggbW91c2VIYW5kbGVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX21vdXNlTW92ZWQgPSBmYWxzZTtcblxuXHRcdC8vIFdlIG1heSBoYXZlIG1pc3NlZCBtb3VzZXVwIChvdXQgb2Ygd2luZG93KVxuXHRcdCggdGhpcy5fbW91c2VTdGFydGVkICYmIHRoaXMuX21vdXNlVXAoIGV2ZW50ICkgKTtcblxuXHRcdHRoaXMuX21vdXNlRG93bkV2ZW50ID0gZXZlbnQ7XG5cblx0XHR2YXIgdGhhdCA9IHRoaXMsXG5cdFx0XHRidG5Jc0xlZnQgPSAoIGV2ZW50LndoaWNoID09PSAxICksXG5cblx0XHRcdC8vIGV2ZW50LnRhcmdldC5ub2RlTmFtZSB3b3JrcyBhcm91bmQgYSBidWcgaW4gSUUgOCB3aXRoXG5cdFx0XHQvLyBkaXNhYmxlZCBpbnB1dHMgKCM3NjIwKVxuXHRcdFx0ZWxJc0NhbmNlbCA9ICggdHlwZW9mIHRoaXMub3B0aW9ucy5jYW5jZWwgPT09IFwic3RyaW5nXCIgJiYgZXZlbnQudGFyZ2V0Lm5vZGVOYW1lID9cblx0XHRcdFx0JCggZXZlbnQudGFyZ2V0ICkuY2xvc2VzdCggdGhpcy5vcHRpb25zLmNhbmNlbCApLmxlbmd0aCA6IGZhbHNlICk7XG5cdFx0aWYgKCAhYnRuSXNMZWZ0IHx8IGVsSXNDYW5jZWwgfHwgIXRoaXMuX21vdXNlQ2FwdHVyZSggZXZlbnQgKSApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHRoaXMubW91c2VEZWxheU1ldCA9ICF0aGlzLm9wdGlvbnMuZGVsYXk7XG5cdFx0aWYgKCAhdGhpcy5tb3VzZURlbGF5TWV0ICkge1xuXHRcdFx0dGhpcy5fbW91c2VEZWxheVRpbWVyID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRoYXQubW91c2VEZWxheU1ldCA9IHRydWU7XG5cdFx0XHR9LCB0aGlzLm9wdGlvbnMuZGVsYXkgKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuX21vdXNlRGlzdGFuY2VNZXQoIGV2ZW50ICkgJiYgdGhpcy5fbW91c2VEZWxheU1ldCggZXZlbnQgKSApIHtcblx0XHRcdHRoaXMuX21vdXNlU3RhcnRlZCA9ICggdGhpcy5fbW91c2VTdGFydCggZXZlbnQgKSAhPT0gZmFsc2UgKTtcblx0XHRcdGlmICggIXRoaXMuX21vdXNlU3RhcnRlZCApIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2xpY2sgZXZlbnQgbWF5IG5ldmVyIGhhdmUgZmlyZWQgKEdlY2tvICYgT3BlcmEpXG5cdFx0aWYgKCB0cnVlID09PSAkLmRhdGEoIGV2ZW50LnRhcmdldCwgdGhpcy53aWRnZXROYW1lICsgXCIucHJldmVudENsaWNrRXZlbnRcIiApICkge1xuXHRcdFx0JC5yZW1vdmVEYXRhKCBldmVudC50YXJnZXQsIHRoaXMud2lkZ2V0TmFtZSArIFwiLnByZXZlbnRDbGlja0V2ZW50XCIgKTtcblx0XHR9XG5cblx0XHQvLyBUaGVzZSBkZWxlZ2F0ZXMgYXJlIHJlcXVpcmVkIHRvIGtlZXAgY29udGV4dFxuXHRcdHRoaXMuX21vdXNlTW92ZURlbGVnYXRlID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0cmV0dXJuIHRoYXQuX21vdXNlTW92ZSggZXZlbnQgKTtcblx0XHR9O1xuXHRcdHRoaXMuX21vdXNlVXBEZWxlZ2F0ZSA9IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdHJldHVybiB0aGF0Ll9tb3VzZVVwKCBldmVudCApO1xuXHRcdH07XG5cblx0XHR0aGlzLmRvY3VtZW50XG5cdFx0XHQub24oIFwibW91c2Vtb3ZlLlwiICsgdGhpcy53aWRnZXROYW1lLCB0aGlzLl9tb3VzZU1vdmVEZWxlZ2F0ZSApXG5cdFx0XHQub24oIFwibW91c2V1cC5cIiArIHRoaXMud2lkZ2V0TmFtZSwgdGhpcy5fbW91c2VVcERlbGVnYXRlICk7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0bW91c2VIYW5kbGVkID0gdHJ1ZTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHRfbW91c2VNb3ZlOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cblx0XHQvLyBPbmx5IGNoZWNrIGZvciBtb3VzZXVwcyBvdXRzaWRlIHRoZSBkb2N1bWVudCBpZiB5b3UndmUgbW92ZWQgaW5zaWRlIHRoZSBkb2N1bWVudFxuXHRcdC8vIGF0IGxlYXN0IG9uY2UuIFRoaXMgcHJldmVudHMgdGhlIGZpcmluZyBvZiBtb3VzZXVwIGluIHRoZSBjYXNlIG9mIElFPDksIHdoaWNoIHdpbGxcblx0XHQvLyBmaXJlIGEgbW91c2Vtb3ZlIGV2ZW50IGlmIGNvbnRlbnQgaXMgcGxhY2VkIHVuZGVyIHRoZSBjdXJzb3IuIFNlZSAjNzc3OFxuXHRcdC8vIFN1cHBvcnQ6IElFIDw5XG5cdFx0aWYgKCB0aGlzLl9tb3VzZU1vdmVkICkge1xuXG5cdFx0XHQvLyBJRSBtb3VzZXVwIGNoZWNrIC0gbW91c2V1cCBoYXBwZW5lZCB3aGVuIG1vdXNlIHdhcyBvdXQgb2Ygd2luZG93XG5cdFx0XHRpZiAoICQudWkuaWUgJiYgKCAhZG9jdW1lbnQuZG9jdW1lbnRNb2RlIHx8IGRvY3VtZW50LmRvY3VtZW50TW9kZSA8IDkgKSAmJlxuXHRcdFx0XHRcdCFldmVudC5idXR0b24gKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9tb3VzZVVwKCBldmVudCApO1xuXG5cdFx0XHQvLyBJZnJhbWUgbW91c2V1cCBjaGVjayAtIG1vdXNldXAgb2NjdXJyZWQgaW4gYW5vdGhlciBkb2N1bWVudFxuXHRcdFx0fSBlbHNlIGlmICggIWV2ZW50LndoaWNoICkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IFNhZmFyaSA8PTggLSA5XG5cdFx0XHRcdC8vIFNhZmFyaSBzZXRzIHdoaWNoIHRvIDAgaWYgeW91IHByZXNzIGFueSBvZiB0aGUgZm9sbG93aW5nIGtleXNcblx0XHRcdFx0Ly8gZHVyaW5nIGEgZHJhZyAoIzE0NDYxKVxuXHRcdFx0XHRpZiAoIGV2ZW50Lm9yaWdpbmFsRXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm9yaWdpbmFsRXZlbnQuY3RybEtleSB8fFxuXHRcdFx0XHRcdFx0ZXZlbnQub3JpZ2luYWxFdmVudC5tZXRhS2V5IHx8IGV2ZW50Lm9yaWdpbmFsRXZlbnQuc2hpZnRLZXkgKSB7XG5cdFx0XHRcdFx0dGhpcy5pZ25vcmVNaXNzaW5nV2hpY2ggPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCAhdGhpcy5pZ25vcmVNaXNzaW5nV2hpY2ggKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX21vdXNlVXAoIGV2ZW50ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIGV2ZW50LndoaWNoIHx8IGV2ZW50LmJ1dHRvbiApIHtcblx0XHRcdHRoaXMuX21vdXNlTW92ZWQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5fbW91c2VTdGFydGVkICkge1xuXHRcdFx0dGhpcy5fbW91c2VEcmFnKCBldmVudCApO1xuXHRcdFx0cmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLl9tb3VzZURpc3RhbmNlTWV0KCBldmVudCApICYmIHRoaXMuX21vdXNlRGVsYXlNZXQoIGV2ZW50ICkgKSB7XG5cdFx0XHR0aGlzLl9tb3VzZVN0YXJ0ZWQgPVxuXHRcdFx0XHQoIHRoaXMuX21vdXNlU3RhcnQoIHRoaXMuX21vdXNlRG93bkV2ZW50LCBldmVudCApICE9PSBmYWxzZSApO1xuXHRcdFx0KCB0aGlzLl9tb3VzZVN0YXJ0ZWQgPyB0aGlzLl9tb3VzZURyYWcoIGV2ZW50ICkgOiB0aGlzLl9tb3VzZVVwKCBldmVudCApICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICF0aGlzLl9tb3VzZVN0YXJ0ZWQ7XG5cdH0sXG5cblx0X21vdXNlVXA6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHR0aGlzLmRvY3VtZW50XG5cdFx0XHQub2ZmKCBcIm1vdXNlbW92ZS5cIiArIHRoaXMud2lkZ2V0TmFtZSwgdGhpcy5fbW91c2VNb3ZlRGVsZWdhdGUgKVxuXHRcdFx0Lm9mZiggXCJtb3VzZXVwLlwiICsgdGhpcy53aWRnZXROYW1lLCB0aGlzLl9tb3VzZVVwRGVsZWdhdGUgKTtcblxuXHRcdGlmICggdGhpcy5fbW91c2VTdGFydGVkICkge1xuXHRcdFx0dGhpcy5fbW91c2VTdGFydGVkID0gZmFsc2U7XG5cblx0XHRcdGlmICggZXZlbnQudGFyZ2V0ID09PSB0aGlzLl9tb3VzZURvd25FdmVudC50YXJnZXQgKSB7XG5cdFx0XHRcdCQuZGF0YSggZXZlbnQudGFyZ2V0LCB0aGlzLndpZGdldE5hbWUgKyBcIi5wcmV2ZW50Q2xpY2tFdmVudFwiLCB0cnVlICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX21vdXNlU3RvcCggZXZlbnQgKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuX21vdXNlRGVsYXlUaW1lciApIHtcblx0XHRcdGNsZWFyVGltZW91dCggdGhpcy5fbW91c2VEZWxheVRpbWVyICk7XG5cdFx0XHRkZWxldGUgdGhpcy5fbW91c2VEZWxheVRpbWVyO1xuXHRcdH1cblxuXHRcdHRoaXMuaWdub3JlTWlzc2luZ1doaWNoID0gZmFsc2U7XG5cdFx0bW91c2VIYW5kbGVkID0gZmFsc2U7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fSxcblxuXHRfbW91c2VEaXN0YW5jZU1ldDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdHJldHVybiAoIE1hdGgubWF4KFxuXHRcdFx0XHRNYXRoLmFicyggdGhpcy5fbW91c2VEb3duRXZlbnQucGFnZVggLSBldmVudC5wYWdlWCApLFxuXHRcdFx0XHRNYXRoLmFicyggdGhpcy5fbW91c2VEb3duRXZlbnQucGFnZVkgLSBldmVudC5wYWdlWSApXG5cdFx0XHQpID49IHRoaXMub3B0aW9ucy5kaXN0YW5jZVxuXHRcdCk7XG5cdH0sXG5cblx0X21vdXNlRGVsYXlNZXQ6IGZ1bmN0aW9uKCAvKiBldmVudCAqLyApIHtcblx0XHRyZXR1cm4gdGhpcy5tb3VzZURlbGF5TWV0O1xuXHR9LFxuXG5cdC8vIFRoZXNlIGFyZSBwbGFjZWhvbGRlciBtZXRob2RzLCB0byBiZSBvdmVycmlkZW4gYnkgZXh0ZW5kaW5nIHBsdWdpblxuXHRfbW91c2VTdGFydDogZnVuY3Rpb24oIC8qIGV2ZW50ICovICkge30sXG5cdF9tb3VzZURyYWc6IGZ1bmN0aW9uKCAvKiBldmVudCAqLyApIHt9LFxuXHRfbW91c2VTdG9wOiBmdW5jdGlvbiggLyogZXZlbnQgKi8gKSB7fSxcblx0X21vdXNlQ2FwdHVyZTogZnVuY3Rpb24oIC8qIGV2ZW50ICovICkgeyByZXR1cm4gdHJ1ZTsgfVxufSApO1xuXG59ICkgKTtcbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxyXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyBET01XaWRnZXRWaWV3LCB1bnBhY2tfbW9kZWxzLCBWaWV3TGlzdCwgSnVweXRlclBob3NwaG9yUGFuZWxXaWRnZXQgfSBmcm9tICdAanVweXRlci13aWRnZXRzL2Jhc2UnO1xyXG5pbXBvcnQgeyBDb3JlRE9NV2lkZ2V0TW9kZWwgfSBmcm9tICcuL3dpZGdldF9jb3JlJztcclxuaW1wb3J0IHsgcmVqZWN0IH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IEFycmF5RXh0IH0gZnJvbSAnQHBob3NwaG9yL2FsZ29yaXRobSc7XHJcbmltcG9ydCB7IE1lc3NhZ2VMb29wIH0gZnJvbSAnQHBob3NwaG9yL21lc3NhZ2luZyc7XHJcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJ0BwaG9zcGhvci93aWRnZXRzJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxudmFyIEJveE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJveE1vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQm94TW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgQm94TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcclxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0JveFZpZXcnLFxyXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0JveE1vZGVsJyxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICBib3hfc3R5bGU6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQm94TW9kZWwuc2VyaWFsaXplcnMgPSBfX2Fzc2lnbih7fSwgQ29yZURPTVdpZGdldE1vZGVsLnNlcmlhbGl6ZXJzLCB7IGNoaWxkcmVuOiB7IGRlc2VyaWFsaXplOiB1bnBhY2tfbW9kZWxzIH0gfSk7XHJcbiAgICByZXR1cm4gQm94TW9kZWw7XHJcbn0oQ29yZURPTVdpZGdldE1vZGVsKSk7XHJcbmV4cG9ydCB7IEJveE1vZGVsIH07XHJcbnZhciBIQm94TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoSEJveE1vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gSEJveE1vZGVsKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIEhCb3hNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnSEJveFZpZXcnLFxyXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0hCb3hNb2RlbCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEhCb3hNb2RlbDtcclxufShCb3hNb2RlbCkpO1xyXG5leHBvcnQgeyBIQm94TW9kZWwgfTtcclxudmFyIFZCb3hNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhWQm94TW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBWQm94TW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgVkJveE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XHJcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdWQm94VmlldycsXHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnVkJveE1vZGVsJyxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVkJveE1vZGVsO1xyXG59KEJveE1vZGVsKSk7XHJcbmV4cG9ydCB7IFZCb3hNb2RlbCB9O1xyXG52YXIgQm94VmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhCb3hWaWV3LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQm94VmlldygpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBCb3hWaWV3LnByb3RvdHlwZS5fY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWdOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5wV2lkZ2V0ID0gbmV3IEp1cHl0ZXJQaG9zcGhvclBhbmVsV2lkZ2V0KHsgdmlldzogdGhpcyB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5wV2lkZ2V0Lm5vZGU7XHJcbiAgICB9O1xyXG4gICAgQm94Vmlldy5wcm90b3R5cGUuX3NldEVsZW1lbnQgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBpZiAodGhpcy5lbCB8fCBlbCAhPT0gdGhpcy5wV2lkZ2V0Lm5vZGUpIHtcclxuICAgICAgICAgICAgLy8gQm94ZXMgZG9uJ3QgYWxsb3cgc2V0dGluZyB0aGUgZWxlbWVudCBiZXlvbmQgdGhlIGluaXRpYWwgY3JlYXRpb24uXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlc2V0IHRoZSBET00gZWxlbWVudC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbCA9IHRoaXMucFdpZGdldC5ub2RlO1xyXG4gICAgfTtcclxuICAgIEJveFZpZXcucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAocGFyYW1ldGVycykge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHBhcmFtZXRlcnMpO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5fdmlld3MgPSBuZXcgVmlld0xpc3QodGhpcy5hZGRfY2hpbGRfbW9kZWwsIG51bGwsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpjaGlsZHJlbicsIHRoaXMudXBkYXRlX2NoaWxkcmVuKTtcclxuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6Ym94X3N0eWxlJywgdGhpcy51cGRhdGVfYm94X3N0eWxlKTtcclxuICAgICAgICB0aGlzLnBXaWRnZXQuYWRkQ2xhc3MoJ2p1cHl0ZXItd2lkZ2V0cycpO1xyXG4gICAgICAgIHRoaXMucFdpZGdldC5hZGRDbGFzcygnd2lkZ2V0LWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMucFdpZGdldC5hZGRDbGFzcygnd2lkZ2V0LWJveCcpO1xyXG4gICAgfTtcclxuICAgIEJveFZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX2NoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5zZXRfYm94X3N0eWxlKCk7XHJcbiAgICB9O1xyXG4gICAgQm94Vmlldy5wcm90b3R5cGUudXBkYXRlX2NoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5fdmlld3MudXBkYXRlKHRoaXMubW9kZWwuZ2V0KCdjaGlsZHJlbicpKS50aGVuKGZ1bmN0aW9uICh2aWV3cykge1xyXG4gICAgICAgICAgICAvLyBOb3RpZnkgYWxsIGNoaWxkcmVuIHRoYXQgdGhlaXIgc2l6ZXMgbWF5IGhhdmUgY2hhbmdlZC5cclxuICAgICAgICAgICAgdmlld3MuZm9yRWFjaChmdW5jdGlvbiAodmlldykge1xyXG4gICAgICAgICAgICAgICAgTWVzc2FnZUxvb3AucG9zdE1lc3NhZ2Uodmlldy5wV2lkZ2V0LCBXaWRnZXQuUmVzaXplTWVzc2FnZS5Vbmtub3duU2l6ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEJveFZpZXcucHJvdG90eXBlLnVwZGF0ZV9ib3hfc3R5bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfbWFwcGVkX2NsYXNzZXMoQm94Vmlldy5jbGFzc19tYXAsICdib3hfc3R5bGUnKTtcclxuICAgIH07XHJcbiAgICBCb3hWaWV3LnByb3RvdHlwZS5zZXRfYm94X3N0eWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2V0X21hcHBlZF9jbGFzc2VzKEJveFZpZXcuY2xhc3NfbWFwLCAnYm94X3N0eWxlJyk7XHJcbiAgICB9O1xyXG4gICAgQm94Vmlldy5wcm90b3R5cGUuYWRkX2NoaWxkX21vZGVsID0gZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyB3ZSBpbnNlcnQgYSBkdW1teSBlbGVtZW50IHNvIHRoZSBvcmRlciBpcyBwcmVzZXJ2ZWQgd2hlbiB3ZSBhZGRcclxuICAgICAgICAvLyB0aGUgcmVuZGVyZWQgY29udGVudCBsYXRlci5cclxuICAgICAgICB2YXIgZHVtbXkgPSBuZXcgV2lkZ2V0KCk7XHJcbiAgICAgICAgdGhpcy5wV2lkZ2V0LmFkZFdpZGdldChkdW1teSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlX2NoaWxkX3ZpZXcobW9kZWwpLnRoZW4oZnVuY3Rpb24gKHZpZXcpIHtcclxuICAgICAgICAgICAgLy8gcmVwbGFjZSB0aGUgZHVtbXkgd2lkZ2V0IHdpdGggdGhlIG5ldyBvbmUuXHJcbiAgICAgICAgICAgIHZhciBpID0gQXJyYXlFeHQuZmlyc3RJbmRleE9mKF90aGlzLnBXaWRnZXQud2lkZ2V0cywgZHVtbXkpO1xyXG4gICAgICAgICAgICBfdGhpcy5wV2lkZ2V0Lmluc2VydFdpZGdldChpLCB2aWV3LnBXaWRnZXQpO1xyXG4gICAgICAgICAgICBkdW1teS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3O1xyXG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCgnQ291bGQgbm90IGFkZCBjaGlsZCB2aWV3IHRvIGJveCcsIHRydWUpKTtcclxuICAgIH07XHJcbiAgICBCb3hWaWV3LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbl92aWV3cyA9IG51bGw7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW1vdmUuY2FsbCh0aGlzKTtcclxuICAgIH07XHJcbiAgICBCb3hWaWV3LmNsYXNzX21hcCA9IHtcclxuICAgICAgICBzdWNjZXNzOiBbJ2FsZXJ0JywgJ2FsZXJ0LXN1Y2Nlc3MnXSxcclxuICAgICAgICBpbmZvOiBbJ2FsZXJ0JywgJ2FsZXJ0LWluZm8nXSxcclxuICAgICAgICB3YXJuaW5nOiBbJ2FsZXJ0JywgJ2FsZXJ0LXdhcm5pbmcnXSxcclxuICAgICAgICBkYW5nZXI6IFsnYWxlcnQnLCAnYWxlcnQtZGFuZ2VyJ11cclxuICAgIH07XHJcbiAgICByZXR1cm4gQm94VmlldztcclxufShET01XaWRnZXRWaWV3KSk7XHJcbmV4cG9ydCB7IEJveFZpZXcgfTtcclxudmFyIEhCb3hWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEhCb3hWaWV3LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gSEJveFZpZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBQdWJsaWMgY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgSEJveFZpZXcucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAocGFyYW1ldGVycykge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHBhcmFtZXRlcnMpO1xyXG4gICAgICAgIHRoaXMucFdpZGdldC5hZGRDbGFzcygnd2lkZ2V0LWhib3gnKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSEJveFZpZXc7XHJcbn0oQm94VmlldykpO1xyXG5leHBvcnQgeyBIQm94VmlldyB9O1xyXG52YXIgVkJveFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVkJveFZpZXcsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBWQm94VmlldygpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFB1YmxpYyBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBWQm94Vmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcywgcGFyYW1ldGVycyk7XHJcbiAgICAgICAgdGhpcy5wV2lkZ2V0LmFkZENsYXNzKCd3aWRnZXQtdmJveCcpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWQm94VmlldztcclxufShCb3hWaWV3KSk7XHJcbmV4cG9ydCB7IFZCb3hWaWV3IH07XHJcbnZhciBHcmlkQm94VmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhHcmlkQm94VmlldywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEdyaWRCb3hWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUHVibGljIGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIEdyaWRCb3hWaWV3LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLCBwYXJhbWV0ZXJzKTtcclxuICAgICAgICB0aGlzLnBXaWRnZXQuYWRkQ2xhc3MoJ3dpZGdldC1ncmlkYm94Jyk7XHJcbiAgICAgICAgLy8gZGlzcGxheSBuZWVkbid0IGJlIHNldCB0byBmbGV4IGFuZCBncmlkIFxyXG4gICAgICAgIHRoaXMucFdpZGdldC5yZW1vdmVDbGFzcygnd2lkZ2V0LWJveCcpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHcmlkQm94VmlldztcclxufShCb3hWaWV3KSk7XHJcbmV4cG9ydCB7IEdyaWRCb3hWaWV3IH07XHJcbnZhciBHcmlkQm94TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoR3JpZEJveE1vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gR3JpZEJveE1vZGVsKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIEdyaWRCb3hNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnR3JpZEJveFZpZXcnLFxyXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0dyaWRCb3hNb2RlbCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdyaWRCb3hNb2RlbDtcclxufShCb3hNb2RlbCkpO1xyXG5leHBvcnQgeyBHcmlkQm94TW9kZWwgfTtcclxuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXHJcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5pbXBvcnQgeyBDb3JlRGVzY3JpcHRpb25Nb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2NvcmUnO1xyXG5pbXBvcnQgeyBEZXNjcmlwdGlvblZpZXcgfSBmcm9tICcuL3dpZGdldF9kZXNjcmlwdGlvbic7XHJcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxudmFyIENvbG9yUGlja2VyTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ29sb3JQaWNrZXJNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENvbG9yUGlja2VyTW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgQ29sb3JQaWNrZXJNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICB2YWx1ZTogJ2JsYWNrJyxcclxuICAgICAgICAgICAgY29uY2lzZTogZmFsc2UsXHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnQ29sb3JQaWNrZXJNb2RlbCcsXHJcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdDb2xvclBpY2tlclZpZXcnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbG9yUGlja2VyTW9kZWw7XHJcbn0oQ29yZURlc2NyaXB0aW9uTW9kZWwpKTtcclxuZXhwb3J0IHsgQ29sb3JQaWNrZXJNb2RlbCB9O1xyXG52YXIgQ29sb3JQaWNrZXJWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKENvbG9yUGlja2VyVmlldywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENvbG9yUGlja2VyVmlldygpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBDb2xvclBpY2tlclZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaW5saW5lLWhib3gnKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1jb2xvcnBpY2tlcicpO1xyXG4gICAgICAgIHRoaXMuX2NvbG9yX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuX2NvbG9yX2NvbnRhaW5lci5jbGFzc05hbWUgPSAnd2lkZ2V0LWlubGluZS1oYm94IHdpZGdldC1jb2xvcnBpY2tlci1pbnB1dCc7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLl9jb2xvcl9jb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuX3RleHRib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuX3RleHRib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICB0aGlzLl90ZXh0Ym94LmlkID0gdGhpcy5sYWJlbC5odG1sRm9yID0gdXVpZCgpO1xyXG4gICAgICAgIHRoaXMuX2NvbG9yX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl90ZXh0Ym94KTtcclxuICAgICAgICB0aGlzLl90ZXh0Ym94LnZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XHJcbiAgICAgICAgdGhpcy5fY29sb3JwaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuX2NvbG9ycGlja2VyLnNldEF0dHJpYnV0ZSgndHlwZScsICdjb2xvcicpO1xyXG4gICAgICAgIHRoaXMuX2NvbG9yX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9jb2xvcnBpY2tlcik7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOnZhbHVlJywgdGhpcy5fdXBkYXRlX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6Y29uY2lzZScsIHRoaXMuX3VwZGF0ZV9jb25jaXNlKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVfY29uY2lzZSgpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZV92YWx1ZSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIHRoaXMgdmlld1xyXG4gICAgICpcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiBUaGUgbW9kZWwgbWF5IGhhdmUgYmVlblxyXG4gICAgICogY2hhbmdlZCBieSBhbm90aGVyIHZpZXcgb3IgYnkgYSBzdGF0ZSB1cGRhdGUgZnJvbSB0aGUgYmFjay1lbmQuXHJcbiAgICAgKi9cclxuICAgIENvbG9yUGlja2VyVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMudXBkYXRlZF92aWV3ICE9IHRoaXMpIHtcclxuICAgICAgICAgICAgdmFyIGRpc2FibGVkID0gdGhpcy5tb2RlbC5nZXQoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RleHRib3guZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICAgICAgICAgICAgdGhpcy5fY29sb3JwaWNrZXIuZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgQ29sb3JQaWNrZXJWaWV3LnByb3RvdHlwZS5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IHVuZGVyc3RhbmQgdGhhdCB0aGVzZSBmdW5jdGlvbnMgYXJlIGNhbGxlZCwgc28gd2VcclxuICAgICAgICAvLyBzcGVjaWZpY2FsbHkgdXNlIHRoZW0gaGVyZSBzbyBpdCBrbm93cyB0aGV5IGFyZSBiZWluZyB1c2VkLlxyXG4gICAgICAgIHZvaWQgdGhpcy5fcGlja2VyX2NoYW5nZTtcclxuICAgICAgICB2b2lkIHRoaXMuX3RleHRfY2hhbmdlO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICdjaGFuZ2UgW3R5cGU9XCJjb2xvclwiXSc6ICdfcGlja2VyX2NoYW5nZScsXHJcbiAgICAgICAgICAgICdjaGFuZ2UgW3R5cGU9XCJ0ZXh0XCJdJzogJ190ZXh0X2NoYW5nZSdcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIENvbG9yUGlja2VyVmlldy5wcm90b3R5cGUuX3VwZGF0ZV92YWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKTtcclxuICAgICAgICB0aGlzLl9jb2xvcnBpY2tlci52YWx1ZSA9IGNvbG9yMmhleCh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fdGV4dGJveC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfTtcclxuICAgIENvbG9yUGlja2VyVmlldy5wcm90b3R5cGUuX3VwZGF0ZV9jb25jaXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjb25jaXNlID0gdGhpcy5tb2RlbC5nZXQoJ2NvbmNpc2UnKTtcclxuICAgICAgICBpZiAoY29uY2lzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2NvbmNpc2UnKTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dGJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdjb25jaXNlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RleHRib3guc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBDb2xvclBpY2tlclZpZXcucHJvdG90eXBlLl9waWNrZXJfY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCd2YWx1ZScsIHRoaXMuX2NvbG9ycGlja2VyLnZhbHVlKTtcclxuICAgICAgICB0aGlzLnRvdWNoKCk7XHJcbiAgICB9O1xyXG4gICAgQ29sb3JQaWNrZXJWaWV3LnByb3RvdHlwZS5fdGV4dF9jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5fdmFsaWRhdGVfY29sb3IodGhpcy5fdGV4dGJveC52YWx1ZSwgdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCd2YWx1ZScsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnRvdWNoKCk7XHJcbiAgICB9O1xyXG4gICAgQ29sb3JQaWNrZXJWaWV3LnByb3RvdHlwZS5fdmFsaWRhdGVfY29sb3IgPSBmdW5jdGlvbiAoY29sb3IsIGZhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yLm1hdGNoKC8jW2EtZkEtRjAtOV17M30oPzpbYS1mQS1GMC05XXszfSk/JC8pIHx8XHJcbiAgICAgICAgICAgIG5hbWVkX2NvbG9yc1tjb2xvci50b0xvd2VyQ2FzZSgpXSA/IGNvbG9yIDogZmFsbGJhY2s7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbG9yUGlja2VyVmlldztcclxufShEZXNjcmlwdGlvblZpZXcpKTtcclxuZXhwb3J0IHsgQ29sb3JQaWNrZXJWaWV3IH07XHJcbnZhciBuYW1lZF9jb2xvcnMgPSB7IGFsaWNlYmx1ZTogJyNmMGY4ZmYnLCBhbnRpcXVld2hpdGU6ICcjZmFlYmQ3JywgYXF1YTogJyMwMGZmZmYnLCBhcXVhbWFyaW5lOiAnIzdmZmZkNCcsIGF6dXJlOiAnI2YwZmZmZicsIGJlaWdlOiAnI2Y1ZjVkYycsIGJpc3F1ZTogJyNmZmU0YzQnLCBibGFjazogJyMwMDAwMDAnLCBibGFuY2hlZGFsbW9uZDogJyNmZmViY2QnLCBibHVlOiAnIzAwMDBmZicsIGJsdWV2aW9sZXQ6ICcjOGEyYmUyJywgYnJvd246ICcjYTUyYTJhJywgYnVybHl3b29kOiAnI2RlYjg4NycsIGNhZGV0Ymx1ZTogJyM1ZjllYTAnLCBjaGFydHJldXNlOiAnIzdmZmYwMCcsIGNob2NvbGF0ZTogJyNkMjY5MWUnLCBjb3JhbDogJyNmZjdmNTAnLCBjb3JuZmxvd2VyYmx1ZTogJyM2NDk1ZWQnLCBjb3Juc2lsazogJyNmZmY4ZGMnLCBjcmltc29uOiAnI2RjMTQzYycsIGN5YW46ICcjMDBmZmZmJywgZGFya2JsdWU6ICcjMDAwMDhiJywgZGFya2N5YW46ICcjMDA4YjhiJywgZGFya2dvbGRlbnJvZDogJyNiODg2MGInLCBkYXJrZ3JheTogJyNhOWE5YTknLCBkYXJrZ3JleTogJyNhOWE5YTknLCBkYXJrZ3JlZW46ICcjMDA2NDAwJywgZGFya2toYWtpOiAnI2JkYjc2YicsIGRhcmttYWdlbnRhOiAnIzhiMDA4YicsIGRhcmtvbGl2ZWdyZWVuOiAnIzU1NmIyZicsIGRhcmtvcmFuZ2U6ICcjZmY4YzAwJywgZGFya29yY2hpZDogJyM5OTMyY2MnLCBkYXJrcmVkOiAnIzhiMDAwMCcsIGRhcmtzYWxtb246ICcjZTk5NjdhJywgZGFya3NlYWdyZWVuOiAnIzhmYmM4ZicsIGRhcmtzbGF0ZWJsdWU6ICcjNDgzZDhiJywgZGFya3NsYXRlZ3JheTogJyMyZjRmNGYnLCBkYXJrc2xhdGVncmV5OiAnIzJmNGY0ZicsIGRhcmt0dXJxdW9pc2U6ICcjMDBjZWQxJywgZGFya3Zpb2xldDogJyM5NDAwZDMnLCBkZWVwcGluazogJyNmZjE0OTMnLCBkZWVwc2t5Ymx1ZTogJyMwMGJmZmYnLCBkaW1ncmF5OiAnIzY5Njk2OScsIGRpbWdyZXk6ICcjNjk2OTY5JywgZG9kZ2VyYmx1ZTogJyMxZTkwZmYnLCBmaXJlYnJpY2s6ICcjYjIyMjIyJywgZmxvcmFsd2hpdGU6ICcjZmZmYWYwJywgZm9yZXN0Z3JlZW46ICcjMjI4YjIyJywgZnVjaHNpYTogJyNmZjAwZmYnLCBnYWluc2Jvcm86ICcjZGNkY2RjJywgZ2hvc3R3aGl0ZTogJyNmOGY4ZmYnLCBnb2xkOiAnI2ZmZDcwMCcsIGdvbGRlbnJvZDogJyNkYWE1MjAnLCBncmF5OiAnIzgwODA4MCcsIGdyZXk6ICcjODA4MDgwJywgZ3JlZW46ICcjMDA4MDAwJywgZ3JlZW55ZWxsb3c6ICcjYWRmZjJmJywgaG9uZXlkZXc6ICcjZjBmZmYwJywgaG90cGluazogJyNmZjY5YjQnLCBpbmRpYW5yZWQ6ICcjY2Q1YzVjJywgaW5kaWdvOiAnIzRiMDA4MicsIGl2b3J5OiAnI2ZmZmZmMCcsIGtoYWtpOiAnI2YwZTY4YycsIGxhdmVuZGVyOiAnI2U2ZTZmYScsIGxhdmVuZGVyYmx1c2g6ICcjZmZmMGY1JywgbGF3bmdyZWVuOiAnIzdjZmMwMCcsIGxlbW9uY2hpZmZvbjogJyNmZmZhY2QnLCBsaWdodGJsdWU6ICcjYWRkOGU2JywgbGlnaHRjb3JhbDogJyNmMDgwODAnLCBsaWdodGN5YW46ICcjZTBmZmZmJywgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICcjZmFmYWQyJywgbGlnaHRncmVlbjogJyM5MGVlOTAnLCBsaWdodGdyYXk6ICcjZDNkM2QzJywgbGlnaHRncmV5OiAnI2QzZDNkMycsIGxpZ2h0cGluazogJyNmZmI2YzEnLCBsaWdodHNhbG1vbjogJyNmZmEwN2EnLCBsaWdodHNlYWdyZWVuOiAnIzIwYjJhYScsIGxpZ2h0c2t5Ymx1ZTogJyM4N2NlZmEnLCBsaWdodHNsYXRlZ3JheTogJyM3Nzg4OTknLCBsaWdodHNsYXRlZ3JleTogJyM3Nzg4OTknLCBsaWdodHN0ZWVsYmx1ZTogJyNiMGM0ZGUnLCBsaWdodHllbGxvdzogJyNmZmZmZTAnLCBsaW1lOiAnIzAwZmYwMCcsIGxpbWVncmVlbjogJyMzMmNkMzInLCBsaW5lbjogJyNmYWYwZTYnLCBtYWdlbnRhOiAnI2ZmMDBmZicsIG1hcm9vbjogJyM4MDAwMDAnLCBtZWRpdW1hcXVhbWFyaW5lOiAnIzY2Y2RhYScsIG1lZGl1bWJsdWU6ICcjMDAwMGNkJywgbWVkaXVtb3JjaGlkOiAnI2JhNTVkMycsIG1lZGl1bXB1cnBsZTogJyM5MzcwZGInLCBtZWRpdW1zZWFncmVlbjogJyMzY2IzNzEnLCBtZWRpdW1zbGF0ZWJsdWU6ICcjN2I2OGVlJywgbWVkaXVtc3ByaW5nZ3JlZW46ICcjMDBmYTlhJywgbWVkaXVtdHVycXVvaXNlOiAnIzQ4ZDFjYycsIG1lZGl1bXZpb2xldHJlZDogJyNjNzE1ODUnLCBtaWRuaWdodGJsdWU6ICcjMTkxOTcwJywgbWludGNyZWFtOiAnI2Y1ZmZmYScsIG1pc3R5cm9zZTogJyNmZmU0ZTEnLCBtb2NjYXNpbjogJyNmZmU0YjUnLCBuYXZham93aGl0ZTogJyNmZmRlYWQnLCBuYXZ5OiAnIzAwMDA4MCcsIG9sZGxhY2U6ICcjZmRmNWU2Jywgb2xpdmU6ICcjODA4MDAwJywgb2xpdmVkcmFiOiAnIzZiOGUyMycsIG9yYW5nZTogJyNmZmE1MDAnLCBvcmFuZ2VyZWQ6ICcjZmY0NTAwJywgb3JjaGlkOiAnI2RhNzBkNicsIHBhbGVnb2xkZW5yb2Q6ICcjZWVlOGFhJywgcGFsZWdyZWVuOiAnIzk4ZmI5OCcsIHBhbGV0dXJxdW9pc2U6ICcjYWZlZWVlJywgcGFsZXZpb2xldHJlZDogJyNkYjcwOTMnLCBwYXBheWF3aGlwOiAnI2ZmZWZkNScsIHBlYWNocHVmZjogJyNmZmRhYjknLCBwZXJ1OiAnI2NkODUzZicsIHBpbms6ICcjZmZjMGNiJywgcGx1bTogJyNkZGEwZGQnLCBwb3dkZXJibHVlOiAnI2IwZTBlNicsIHB1cnBsZTogJyM4MDAwODAnLCByZWQ6ICcjZmYwMDAwJywgcm9zeWJyb3duOiAnI2JjOGY4ZicsIHJveWFsYmx1ZTogJyM0MTY5ZTEnLCBzYWRkbGVicm93bjogJyM4YjQ1MTMnLCBzYWxtb246ICcjZmE4MDcyJywgc2FuZHlicm93bjogJyNmNGE0NjAnLCBzZWFncmVlbjogJyMyZThiNTcnLCBzZWFzaGVsbDogJyNmZmY1ZWUnLCBzaWVubmE6ICcjYTA1MjJkJywgc2lsdmVyOiAnI2MwYzBjMCcsIHNreWJsdWU6ICcjODdjZWViJywgc2xhdGVibHVlOiAnIzZhNWFjZCcsIHNsYXRlZ3JheTogJyM3MDgwOTAnLCBzbGF0ZWdyZXk6ICcjNzA4MDkwJywgc25vdzogJyNmZmZhZmEnLCBzcHJpbmdncmVlbjogJyMwMGZmN2YnLCBzdGVlbGJsdWU6ICcjNDY4MmI0JywgdGFuOiAnI2QyYjQ4YycsIHRlYWw6ICcjMDA4MDgwJywgdGhpc3RsZTogJyNkOGJmZDgnLCB0b21hdG86ICcjZmY2MzQ3JywgdHVycXVvaXNlOiAnIzQwZTBkMCcsIHZpb2xldDogJyNlZTgyZWUnLCB3aGVhdDogJyNmNWRlYjMnLCB3aGl0ZTogJyNmZmZmZmYnLCB3aGl0ZXNtb2tlOiAnI2Y1ZjVmNScsIHllbGxvdzogJyNmZmZmMDAnLCB5ZWxsb3dncmVlbjogJyM5YWNkMzInLCB9O1xyXG4vKlxyXG4gKiBGcm9tIGEgdmFsaWQgaHRtbCBjb2xvciAobmFtZWQgY29sb3IsIDYtZGlnaXRzIG9yIDMtZGlnaXRzIGhleCBmb3JtYXQpXHJcbiAqIHJldHVybiBhIDYtZGlnaXRzIGhleGFkZWNpbWFsIGNvbG9yICNycmdnYmIuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb2xvcjJoZXgoY29sb3IpIHtcclxuICAgIHJldHVybiBuYW1lZF9jb2xvcnNbY29sb3IudG9Mb3dlckNhc2UoKV0gfHwgcmdiM190b19yZ2I2KGNvbG9yKTtcclxufVxyXG5mdW5jdGlvbiByZ2IzX3RvX3JnYjYocmdiKSB7XHJcbiAgICBpZiAocmdiLmxlbmd0aCA9PT0gNykge1xyXG4gICAgICAgIHJldHVybiByZ2I7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJyMnICsgcmdiLmNoYXJBdCgxKSArIHJnYi5jaGFyQXQoMSkgK1xyXG4gICAgICAgICAgICByZ2IuY2hhckF0KDIpICsgcmdiLmNoYXJBdCgyKSArXHJcbiAgICAgICAgICAgIHJnYi5jaGFyQXQoMykgKyByZ2IuY2hhckF0KDMpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxyXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuaW1wb3J0IHsgRE9NV2lkZ2V0VmlldywgVmlld0xpc3QgfSBmcm9tICdAanVweXRlci13aWRnZXRzL2Jhc2UnO1xyXG5pbXBvcnQgeyBCb3hNb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2JveCc7XHJcbmltcG9ydCB7IFRhYlBhbmVsIH0gZnJvbSAnLi9waG9zcGhvci90YWJwYW5lbCc7XHJcbmltcG9ydCB7IEFjY29yZGlvbiB9IGZyb20gJy4vcGhvc3Bob3IvYWNjb3JkaW9uJztcclxuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnQHBob3NwaG9yL3dpZGdldHMnO1xyXG5pbXBvcnQgeyBlYWNoLCBBcnJheUV4dCB9IGZyb20gJ0BwaG9zcGhvci9hbGdvcml0aG0nO1xyXG5pbXBvcnQgeyBNZXNzYWdlTG9vcCB9IGZyb20gJ0BwaG9zcGhvci9tZXNzYWdpbmcnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxudmFyIFNlbGVjdGlvbkNvbnRhaW5lck1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNlbGVjdGlvbkNvbnRhaW5lck1vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU2VsZWN0aW9uQ29udGFpbmVyTW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgU2VsZWN0aW9uQ29udGFpbmVyTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcclxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdTZWxlY3Rpb25Db250YWluZXJNb2RlbCcsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkX2luZGV4OiAwLFxyXG4gICAgICAgICAgICBfdGl0bGVzOiB7fVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTZWxlY3Rpb25Db250YWluZXJNb2RlbDtcclxufShCb3hNb2RlbCkpO1xyXG5leHBvcnQgeyBTZWxlY3Rpb25Db250YWluZXJNb2RlbCB9O1xyXG52YXIgQWNjb3JkaW9uTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQWNjb3JkaW9uTW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBBY2NvcmRpb25Nb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBBY2NvcmRpb25Nb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0FjY29yZGlvbk1vZGVsJyxcclxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0FjY29yZGlvblZpZXcnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFjY29yZGlvbk1vZGVsO1xyXG59KFNlbGVjdGlvbkNvbnRhaW5lck1vZGVsKSk7XHJcbmV4cG9ydCB7IEFjY29yZGlvbk1vZGVsIH07XHJcbi8vIFdlIGltcGxlbWVudCBvdXIgb3duIHRhYiB3aWRnZXQgc2luY2UgUGhvc2hwb3IncyBUYWJQYW5lbCB1c2VzIGFuIGFic29sdXRlXHJcbi8vIHBvc2l0aW9uaW5nIEJveExheW91dCwgYnV0IHdlIHdhbnQgYSBtb3JlIGFuIGh0bWwvY3NzLWJhc2VkIFBhbmVsIGxheW91dC5cclxudmFyIEp1cHl0ZXJQaG9zcGhvckFjY29yZGlvbldpZGdldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhKdXB5dGVyUGhvc3Bob3JBY2NvcmRpb25XaWRnZXQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBKdXB5dGVyUGhvc3Bob3JBY2NvcmRpb25XaWRnZXQob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHZpZXcgPSBvcHRpb25zLnZpZXc7XHJcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMudmlldztcclxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX3ZpZXcgPSB2aWV3O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUHJvY2VzcyB0aGUgcGhvc3Bob3IgbWVzc2FnZS5cclxuICAgICAqXHJcbiAgICAgKiBBbnkgY3VzdG9tIHBob3NwaG9yIHdpZGdldCB1c2VkIGluc2lkZSBhIEp1cHl0ZXIgd2lkZ2V0IHNob3VsZCBvdmVycmlkZVxyXG4gICAgICogdGhlIHByb2Nlc3NNZXNzYWdlIGZ1bmN0aW9uIGxpa2UgdGhpcy5cclxuICAgICAqL1xyXG4gICAgSnVweXRlclBob3NwaG9yQWNjb3JkaW9uV2lkZ2V0LnByb3RvdHlwZS5wcm9jZXNzTWVzc2FnZSA9IGZ1bmN0aW9uIChtc2cpIHtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnByb2Nlc3NNZXNzYWdlLmNhbGwodGhpcywgbXNnKTtcclxuICAgICAgICB0aGlzLl92aWV3LnByb2Nlc3NQaG9zcGhvck1lc3NhZ2UobXNnKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2UgdGhlIHdpZGdldC5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGNhdXNlcyB0aGUgdmlldyB0byBiZSBkZXN0cm95ZWQgYXMgd2VsbCB3aXRoICdyZW1vdmUnXHJcbiAgICAgKi9cclxuICAgIEp1cHl0ZXJQaG9zcGhvckFjY29yZGlvbldpZGdldC5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3ZpZXcpIHtcclxuICAgICAgICAgICAgdGhpcy5fdmlldy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdmlldyA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEp1cHl0ZXJQaG9zcGhvckFjY29yZGlvbldpZGdldDtcclxufShBY2NvcmRpb24pKTtcclxuZXhwb3J0IHsgSnVweXRlclBob3NwaG9yQWNjb3JkaW9uV2lkZ2V0IH07XHJcbnZhciBBY2NvcmRpb25WaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEFjY29yZGlvblZpZXcsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBBY2NvcmRpb25WaWV3KCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIEFjY29yZGlvblZpZXcucHJvdG90eXBlLl9jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZ05hbWUpIHtcclxuICAgICAgICB0aGlzLnBXaWRnZXQgPSBuZXcgSnVweXRlclBob3NwaG9yQWNjb3JkaW9uV2lkZ2V0KHsgdmlldzogdGhpcyB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5wV2lkZ2V0Lm5vZGU7XHJcbiAgICB9O1xyXG4gICAgQWNjb3JkaW9uVmlldy5wcm90b3R5cGUuX3NldEVsZW1lbnQgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBpZiAodGhpcy5lbCB8fCBlbCAhPT0gdGhpcy5wV2lkZ2V0Lm5vZGUpIHtcclxuICAgICAgICAgICAgLy8gQWNjb3JkaW9ucyBkb24ndCBhbGxvdyBzZXR0aW5nIHRoZSBlbGVtZW50IGJleW9uZCB0aGUgaW5pdGlhbCBjcmVhdGlvbi5cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVzZXQgdGhlIERPTSBlbGVtZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVsID0gdGhpcy5wV2lkZ2V0Lm5vZGU7XHJcbiAgICAgICAgdGhpcy4kZWwgPSAkKHRoaXMucFdpZGdldC5ub2RlKTtcclxuICAgIH07XHJcbiAgICBBY2NvcmRpb25WaWV3LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHBhcmFtZXRlcnMpO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5fdmlld3MgPSBuZXcgVmlld0xpc3QodGhpcy5hZGRfY2hpbGRfdmlldywgdGhpcy5yZW1vdmVfY2hpbGRfdmlldywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmNoaWxkcmVuJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMudXBkYXRlQ2hpbGRyZW4oKTsgfSk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOnNlbGVjdGVkX2luZGV4JywgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMudXBkYXRlX3NlbGVjdGVkX2luZGV4KCk7IH0pO1xyXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpfdGl0bGVzJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMudXBkYXRlX3RpdGxlcygpOyB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIEFjY29yZGlvblZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XHJcbiAgICAgICAgdmFyIGFjY29yZGlvbiA9IHRoaXMucFdpZGdldDtcclxuICAgICAgICBhY2NvcmRpb24uYWRkQ2xhc3MoJ2p1cHl0ZXItd2lkZ2V0cycpO1xyXG4gICAgICAgIGFjY29yZGlvbi5hZGRDbGFzcygnd2lkZ2V0LWFjY29yZGlvbicpO1xyXG4gICAgICAgIGFjY29yZGlvbi5hZGRDbGFzcygnd2lkZ2V0LWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGFjY29yZGlvbi5zZWxlY3Rpb24uc2VsZWN0aW9uQ2hhbmdlZC5jb25uZWN0KGZ1bmN0aW9uIChzZW5kZXIpIHtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy51cGRhdGluZ0NoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5tb2RlbC5zZXQoJ3NlbGVjdGVkX2luZGV4JywgYWNjb3JkaW9uLnNlbGVjdGlvbi5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50b3VjaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbl92aWV3cy51cGRhdGUodGhpcy5tb2RlbC5nZXQoJ2NoaWxkcmVuJykpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX3RpdGxlcygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX3NlbGVjdGVkX2luZGV4KCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgY2hpbGRyZW5cclxuICAgICAqL1xyXG4gICAgQWNjb3JkaW9uVmlldy5wcm90b3R5cGUudXBkYXRlQ2hpbGRyZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gV2hpbGUgd2UgYXJlIHVwZGF0aW5nLCB0aGUgaW5kZXggbWF5IG5vdCBiZSB2YWxpZCwgc28gZGVzZWxlY3QgdGhlXHJcbiAgICAgICAgLy8gdGFicyBiZWZvcmUgdXBkYXRpbmcgc28gd2UgZG9uJ3QgZ2V0IHNwdXJpb3VzIGNoYW5nZXMgaW4gdGhlIGluZGV4LFxyXG4gICAgICAgIC8vIHdoaWNoIHdvdWxkIHRoZW4gc2V0IG9mZiBhbm90aGVyIHN5bmMgY3ljbGUuXHJcbiAgICAgICAgdGhpcy51cGRhdGluZ0NoaWxkcmVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBXaWRnZXQuc2VsZWN0aW9uLmluZGV4ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuX3ZpZXdzLnVwZGF0ZSh0aGlzLm1vZGVsLmdldCgnY2hpbGRyZW4nKSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfc2VsZWN0ZWRfaW5kZXgoKTtcclxuICAgICAgICB0aGlzLnVwZGF0aW5nQ2hpbGRyZW4gPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNldCBoZWFkZXIgdGl0bGVzXHJcbiAgICAgKi9cclxuICAgIEFjY29yZGlvblZpZXcucHJvdG90eXBlLnVwZGF0ZV90aXRsZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNvbGxhcHNlZCA9IHRoaXMucFdpZGdldC5jb2xsYXBzZVdpZGdldHM7XHJcbiAgICAgICAgdmFyIHRpdGxlcyA9IHRoaXMubW9kZWwuZ2V0KCdfdGl0bGVzJyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xsYXBzZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRpdGxlc1tpXSAhPT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWRbaV0ud2lkZ2V0LnRpdGxlLmxhYmVsID0gdGl0bGVzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogTWFrZSB0aGUgcmVuZGVyaW5nIGFuZCBzZWxlY3RlZCBpbmRleCBjb25zaXN0ZW50LlxyXG4gICAgICovXHJcbiAgICBBY2NvcmRpb25WaWV3LnByb3RvdHlwZS51cGRhdGVfc2VsZWN0ZWRfaW5kZXggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wV2lkZ2V0LnNlbGVjdGlvbi5pbmRleCA9IHRoaXMubW9kZWwuZ2V0KCdzZWxlY3RlZF9pbmRleCcpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gYSBjaGlsZCBpcyByZW1vdmVkIGZyb20gY2hpbGRyZW4gbGlzdC5cclxuICAgICAqL1xyXG4gICAgQWNjb3JkaW9uVmlldy5wcm90b3R5cGUucmVtb3ZlX2NoaWxkX3ZpZXcgPSBmdW5jdGlvbiAodmlldykge1xyXG4gICAgICAgIHRoaXMucFdpZGdldC5yZW1vdmVXaWRnZXQodmlldy5wV2lkZ2V0KTtcclxuICAgICAgICB2aWV3LnJlbW92ZSgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gYSBjaGlsZCBpcyBhZGRlZCB0byBjaGlsZHJlbiBsaXN0LlxyXG4gICAgICovXHJcbiAgICBBY2NvcmRpb25WaWV3LnByb3RvdHlwZS5hZGRfY2hpbGRfdmlldyA9IGZ1bmN0aW9uIChtb2RlbCwgaW5kZXgpIHtcclxuICAgICAgICAvLyBQbGFjZWhvbGRlciB3aWRnZXQgdG8ga2VlcCBvdXIgcG9zaXRpb24gaW4gdGhlIHRhYiBwYW5lbCB3aGlsZSB3ZSBjcmVhdGUgdGhlIHZpZXcuXHJcbiAgICAgICAgdmFyIGFjY29yZGlvbiA9IHRoaXMucFdpZGdldDtcclxuICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSBuZXcgV2lkZ2V0KCk7XHJcbiAgICAgICAgcGxhY2Vob2xkZXIudGl0bGUubGFiZWwgPSB0aGlzLm1vZGVsLmdldCgnX3RpdGxlcycpW2luZGV4XSB8fCAnJztcclxuICAgICAgICBhY2NvcmRpb24uYWRkV2lkZ2V0KHBsYWNlaG9sZGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVfY2hpbGRfdmlldyhtb2RlbCkudGhlbihmdW5jdGlvbiAodmlldykge1xyXG4gICAgICAgICAgICB2YXIgd2lkZ2V0ID0gdmlldy5wV2lkZ2V0O1xyXG4gICAgICAgICAgICB3aWRnZXQudGl0bGUubGFiZWwgPSBwbGFjZWhvbGRlci50aXRsZS5sYWJlbDtcclxuICAgICAgICAgICAgdmFyIGNvbGxhcHNlID0gYWNjb3JkaW9uLmNvbGxhcHNlV2lkZ2V0c1thY2NvcmRpb24uaW5kZXhPZihwbGFjZWhvbGRlcildO1xyXG4gICAgICAgICAgICBjb2xsYXBzZS53aWRnZXQgPSB3aWRnZXQ7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICAgICAgfSkuY2F0Y2godXRpbHMucmVqZWN0KCdDb3VsZCBub3QgYWRkIGNoaWxkIHZpZXcgdG8gYm94JywgdHJ1ZSkpO1xyXG4gICAgfTtcclxuICAgIEFjY29yZGlvblZpZXcucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuX3ZpZXdzID0gbnVsbDtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbW92ZS5jYWxsKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBY2NvcmRpb25WaWV3O1xyXG59KERPTVdpZGdldFZpZXcpKTtcclxuZXhwb3J0IHsgQWNjb3JkaW9uVmlldyB9O1xyXG52YXIgVGFiTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVGFiTW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUYWJNb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBUYWJNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ1RhYk1vZGVsJyxcclxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ1RhYlZpZXcnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRhYk1vZGVsO1xyXG59KFNlbGVjdGlvbkNvbnRhaW5lck1vZGVsKSk7XHJcbmV4cG9ydCB7IFRhYk1vZGVsIH07XHJcbi8vIFdlIGltcGxlbWVudCBvdXIgb3duIHRhYiB3aWRnZXQgc2luY2UgUGhvc2hwb3IncyBUYWJQYW5lbCB1c2VzIGFuIGFic29sdXRlXHJcbi8vIHBvc2l0aW9uaW5nIEJveExheW91dCwgYnV0IHdlIHdhbnQgYSBtb3JlIGFuIGh0bWwvY3NzLWJhc2VkIFBhbmVsIGxheW91dC5cclxudmFyIEp1cHl0ZXJQaG9zcGhvclRhYlBhbmVsV2lkZ2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEp1cHl0ZXJQaG9zcGhvclRhYlBhbmVsV2lkZ2V0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gSnVweXRlclBob3NwaG9yVGFiUGFuZWxXaWRnZXQob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHZpZXcgPSBvcHRpb25zLnZpZXc7XHJcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMudmlldztcclxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX3ZpZXcgPSB2aWV3O1xyXG4gICAgICAgIC8vIFdlIHdhbnQgdGhlIHZpZXcncyBtZXNzYWdlcyB0byBiZSB0aGUgbWVzc2FnZXMgdGhlIHRhYkNvbnRlbnRzIHBhbmVsXHJcbiAgICAgICAgLy8gZ2V0cy5cclxuICAgICAgICBNZXNzYWdlTG9vcC5pbnN0YWxsTWVzc2FnZUhvb2soX3RoaXMudGFiQ29udGVudHMsIGZ1bmN0aW9uIChoYW5kbGVyLCBtc2cpIHtcclxuICAgICAgICAgICAgLy8gVGhlcmUgbWF5IGJlIHRpbWVzIHdoZW4gd2Ugd2FudCB0aGUgdmlldydzIGhhbmRsZXIgdG8gYmUgY2FsbGVkXHJcbiAgICAgICAgICAgIC8vICphZnRlciogdGhlIG1lc3NhZ2UgaGFzIGJlZW4gcHJvY2Vzc2VkIGJ5IHRoZSB3aWRnZXQsIGluIHdoaWNoXHJcbiAgICAgICAgICAgIC8vIGNhc2Ugd2UnbGwgbmVlZCB0byByZXZpc2l0IHVzaW5nIGEgbWVzc2FnZSBob29rLlxyXG4gICAgICAgICAgICBfdGhpcy5fdmlldy5wcm9jZXNzUGhvc3Bob3JNZXNzYWdlKG1zZyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRGlzcG9zZSB0aGUgd2lkZ2V0LlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgY2F1c2VzIHRoZSB2aWV3IHRvIGJlIGRlc3Ryb3llZCBhcyB3ZWxsIHdpdGggJ3JlbW92ZSdcclxuICAgICAqL1xyXG4gICAgSnVweXRlclBob3NwaG9yVGFiUGFuZWxXaWRnZXQucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIGlmICh0aGlzLl92aWV3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3ZpZXcgPSBudWxsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBKdXB5dGVyUGhvc3Bob3JUYWJQYW5lbFdpZGdldDtcclxufShUYWJQYW5lbCkpO1xyXG5leHBvcnQgeyBKdXB5dGVyUGhvc3Bob3JUYWJQYW5lbFdpZGdldCB9O1xyXG52YXIgVGFiVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUYWJWaWV3LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVGFiVmlldygpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy51cGRhdGluZ1RhYnMgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBUYWJWaWV3LnByb3RvdHlwZS5fY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWdOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5wV2lkZ2V0ID0gbmV3IEp1cHl0ZXJQaG9zcGhvclRhYlBhbmVsV2lkZ2V0KHtcclxuICAgICAgICAgICAgdmlldzogdGhpcyxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5wV2lkZ2V0Lm5vZGU7XHJcbiAgICB9O1xyXG4gICAgVGFiVmlldy5wcm90b3R5cGUuX3NldEVsZW1lbnQgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBpZiAodGhpcy5lbCB8fCBlbCAhPT0gdGhpcy5wV2lkZ2V0Lm5vZGUpIHtcclxuICAgICAgICAgICAgLy8gVGFiVmlld3MgZG9uJ3QgYWxsb3cgc2V0dGluZyB0aGUgZWxlbWVudCBiZXlvbmQgdGhlIGluaXRpYWwgY3JlYXRpb24uXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlc2V0IHRoZSBET00gZWxlbWVudC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbCA9IHRoaXMucFdpZGdldC5ub2RlO1xyXG4gICAgICAgIHRoaXMuJGVsID0gJCh0aGlzLnBXaWRnZXQubm9kZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQdWJsaWMgY29uc3RydWN0b3IuXHJcbiAgICAgKi9cclxuICAgIFRhYlZpZXcucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAocGFyYW1ldGVycykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcywgcGFyYW1ldGVycyk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlblZpZXdzID0gbmV3IFZpZXdMaXN0KHRoaXMuYWRkQ2hpbGRWaWV3LCBmdW5jdGlvbiAodmlldykgeyB2aWV3LnJlbW92ZSgpOyB9LCB0aGlzKTtcclxuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6Y2hpbGRyZW4nLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy51cGRhdGVUYWJzKCk7IH0pO1xyXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpfdGl0bGVzJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMudXBkYXRlVGl0bGVzKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgVGFiVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XHJcbiAgICAgICAgdmFyIHRhYnMgPSB0aGlzLnBXaWRnZXQ7XHJcbiAgICAgICAgdGFicy5hZGRDbGFzcygnanVweXRlci13aWRnZXRzJyk7XHJcbiAgICAgICAgdGFicy5hZGRDbGFzcygnd2lkZ2V0LWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRhYnMuYWRkQ2xhc3MoJ3dpZGdldC10YWInKTtcclxuICAgICAgICB0YWJzLnRhYnNNb3ZhYmxlID0gdHJ1ZTtcclxuICAgICAgICB0YWJzLnRhYkJhci5pbnNlcnRCZWhhdmlvciA9ICdub25lJzsgLy8gbmVlZGVkIGZvciBpbnNlcnQgYmVoYXZpb3IsIHNlZSBiZWxvdy5cclxuICAgICAgICB0YWJzLnRhYkJhci5jdXJyZW50Q2hhbmdlZC5jb25uZWN0KHRoaXMuX29uVGFiQ2hhbmdlZCwgdGhpcyk7XHJcbiAgICAgICAgdGFicy50YWJCYXIudGFiTW92ZWQuY29ubmVjdCh0aGlzLl9vblRhYk1vdmVkLCB0aGlzKTtcclxuICAgICAgICB0YWJzLnRhYkJhci5hZGRDbGFzcygnd2lkZ2V0LXRhYi1iYXInKTtcclxuICAgICAgICB0YWJzLnRhYkNvbnRlbnRzLmFkZENsYXNzKCd3aWRnZXQtdGFiLWNvbnRlbnRzJyk7XHJcbiAgICAgICAgLy8gVE9ETzogZXhwb3NlIHRoaXMgb3B0aW9uIGluIHB5dGhvblxyXG4gICAgICAgIHRhYnMudGFiQmFyLnRhYnNNb3ZhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUYWJzKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciB0YWIgdmlld3MgYmFzZWQgb24gdGhlIGN1cnJlbnQgbW9kZWwncyBjaGlsZHJlbi5cclxuICAgICAqL1xyXG4gICAgVGFiVmlldy5wcm90b3R5cGUudXBkYXRlVGFicyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBXaGlsZSB3ZSBhcmUgdXBkYXRpbmcsIHRoZSBpbmRleCBtYXkgbm90IGJlIHZhbGlkLCBzbyBkZXNlbGVjdCB0aGVcclxuICAgICAgICAvLyB0YWJzIGJlZm9yZSB1cGRhdGluZyBzbyB3ZSBkb24ndCBnZXQgc3B1cmlvdXMgY2hhbmdlcyBpbiB0aGUgaW5kZXgsXHJcbiAgICAgICAgLy8gd2hpY2ggd291bGQgdGhlbiBzZXQgb2ZmIGFub3RoZXIgc3luYyBjeWNsZS5cclxuICAgICAgICB0aGlzLnVwZGF0aW5nVGFicyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wV2lkZ2V0LmN1cnJlbnRJbmRleCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlblZpZXdzLnVwZGF0ZSh0aGlzLm1vZGVsLmdldCgnY2hpbGRyZW4nKSk7XHJcbiAgICAgICAgdGhpcy5wV2lkZ2V0LmN1cnJlbnRJbmRleCA9IHRoaXMubW9kZWwuZ2V0KCdzZWxlY3RlZF9pbmRleCcpO1xyXG4gICAgICAgIHRoaXMudXBkYXRpbmdUYWJzID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiBhIGNoaWxkIGlzIGFkZGVkIHRvIGNoaWxkcmVuIGxpc3QuXHJcbiAgICAgKi9cclxuICAgIFRhYlZpZXcucHJvdG90eXBlLmFkZENoaWxkVmlldyA9IGZ1bmN0aW9uIChtb2RlbCwgaW5kZXgpIHtcclxuICAgICAgICAvLyBQbGFjZWhvbGRlciB3aWRnZXQgdG8ga2VlcCBvdXIgcG9zaXRpb24gaW4gdGhlIHRhYiBwYW5lbCB3aGlsZSB3ZSBjcmVhdGUgdGhlIHZpZXcuXHJcbiAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5tb2RlbC5nZXQoJ190aXRsZXMnKVtpbmRleF0gfHwgJyc7XHJcbiAgICAgICAgdmFyIHRhYnMgPSB0aGlzLnBXaWRnZXQ7XHJcbiAgICAgICAgdmFyIHBsYWNlaG9sZGVyID0gbmV3IFdpZGdldCgpO1xyXG4gICAgICAgIHBsYWNlaG9sZGVyLnRpdGxlLmxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgdGFicy5hZGRXaWRnZXQocGxhY2Vob2xkZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZV9jaGlsZF92aWV3KG1vZGVsKS50aGVuKGZ1bmN0aW9uICh2aWV3KSB7XHJcbiAgICAgICAgICAgIHZhciB3aWRnZXQgPSB2aWV3LnBXaWRnZXQ7XHJcbiAgICAgICAgICAgIHdpZGdldC50aXRsZS5sYWJlbCA9IHBsYWNlaG9sZGVyLnRpdGxlLmxhYmVsO1xyXG4gICAgICAgICAgICB3aWRnZXQudGl0bGUuY2xvc2FibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGkgPSBBcnJheUV4dC5maXJzdEluZGV4T2YodGFicy53aWRnZXRzLCBwbGFjZWhvbGRlcik7XHJcbiAgICAgICAgICAgIC8vIGluc2VydCBhZnRlciBwbGFjZWhvbGRlciBzbyB0aGF0IGlmIHBsYWNob2xkZXIgaXMgc2VsZWN0ZWQsIHRoZVxyXG4gICAgICAgICAgICAvLyByZWFsIHdpZGdldCB3aWxsIGJlIHNlbGVjdGVkIG5vdyAodGhpcyBkZXBlbmRzIG9uIHRoZSB0YWIgYmFyXHJcbiAgICAgICAgICAgIC8vIGluc2VydCBiZWhhdmlvcilcclxuICAgICAgICAgICAgdGFicy5pbnNlcnRXaWRnZXQoaSArIDEsIHdpZGdldCk7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICAgICAgfSkuY2F0Y2godXRpbHMucmVqZWN0KCdDb3VsZCBub3QgYWRkIGNoaWxkIHZpZXcgdG8gYm94JywgdHJ1ZSkpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcclxuICAgICAqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXHJcbiAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cclxuICAgICAqL1xyXG4gICAgVGFiVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgc2VsZWN0ZWQgaW5kZXggaW4gdGhlIG92ZXJhbGwgdXBkYXRlIG1ldGhvZCBiZWNhdXNlIGl0XHJcbiAgICAgICAgLy8gc2hvdWxkIGJlIHJ1biBhZnRlciB0aGUgdGFicyBoYXZlIGJlZW4gdXBkYXRlZC4gT3RoZXJ3aXNlIHRoZVxyXG4gICAgICAgIC8vIHNlbGVjdGVkIGluZGV4IG1heSBub3QgYmUgYSB2YWxpZCB0YWIgaW4gdGhlIHRhYiBiYXIuXHJcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZEluZGV4KCk7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSB0YWIgcGFnZSB0aXRsZXMuXHJcbiAgICAgKi9cclxuICAgIFRhYlZpZXcucHJvdG90eXBlLnVwZGF0ZVRpdGxlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGl0bGVzID0gdGhpcy5tb2RlbC5nZXQoJ190aXRsZXMnKSB8fCB7fTtcclxuICAgICAgICBlYWNoKHRoaXMucFdpZGdldC53aWRnZXRzLCBmdW5jdGlvbiAod2lkZ2V0LCBpKSB7XHJcbiAgICAgICAgICAgIHdpZGdldC50aXRsZS5sYWJlbCA9IHRpdGxlc1tpXSB8fCAnJztcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIHNlbGVjdGVkIGluZGV4LlxyXG4gICAgICovXHJcbiAgICBUYWJWaWV3LnByb3RvdHlwZS51cGRhdGVTZWxlY3RlZEluZGV4ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucFdpZGdldC5jdXJyZW50SW5kZXggPSB0aGlzLm1vZGVsLmdldCgnc2VsZWN0ZWRfaW5kZXgnKTtcclxuICAgIH07XHJcbiAgICBUYWJWaWV3LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlblZpZXdzID0gbnVsbDtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbW92ZS5jYWxsKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIFRhYlZpZXcucHJvdG90eXBlLl9vblRhYkNoYW5nZWQgPSBmdW5jdGlvbiAoc2VuZGVyLCBhcmdzKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVwZGF0aW5nVGFicykge1xyXG4gICAgICAgICAgICB2YXIgaSA9IGFyZ3MuY3VycmVudEluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnNldCgnc2VsZWN0ZWRfaW5kZXgnLCBpID09PSAtMSA/IG51bGwgOiBpKTtcclxuICAgICAgICAgICAgdGhpcy50b3VjaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSB0aGUgYHRhYk1vdmVkYCBzaWduYWwgZnJvbSB0aGUgdGFiIGJhci5cclxuICAgICAqL1xyXG4gICAgVGFiVmlldy5wcm90b3R5cGUuX29uVGFiTW92ZWQgPSBmdW5jdGlvbiAoc2VuZGVyLCBhcmdzKSB7XHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5tb2RlbC5nZXQoJ2NoaWxkcmVuJykuc2xpY2UoKTtcclxuICAgICAgICBBcnJheUV4dC5tb3ZlKGNoaWxkcmVuLCBhcmdzLmZyb21JbmRleCwgYXJncy50b0luZGV4KTtcclxuICAgICAgICB0aGlzLm1vZGVsLnNldCgnY2hpbGRyZW4nLCBjaGlsZHJlbik7XHJcbiAgICAgICAgdGhpcy50b3VjaCgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUYWJWaWV3O1xyXG59KERPTVdpZGdldFZpZXcpKTtcclxuZXhwb3J0IHsgVGFiVmlldyB9O1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cclxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsgRE9NV2lkZ2V0VmlldyB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XHJcbmltcG9ydCB7IENvcmVET01XaWRnZXRNb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG52YXIgSW1hZ2VNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhJbWFnZU1vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gSW1hZ2VNb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBJbWFnZU1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnSW1hZ2VNb2RlbCcsXHJcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdJbWFnZVZpZXcnLFxyXG4gICAgICAgICAgICBmb3JtYXQ6ICdwbmcnLFxyXG4gICAgICAgICAgICB3aWR0aDogJycsXHJcbiAgICAgICAgICAgIGhlaWdodDogJycsXHJcbiAgICAgICAgICAgIHZhbHVlOiBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDApKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEltYWdlTW9kZWwuc2VyaWFsaXplcnMgPSBfX2Fzc2lnbih7fSwgQ29yZURPTVdpZGdldE1vZGVsLnNlcmlhbGl6ZXJzLCB7IHZhbHVlOiB7IHNlcmlhbGl6ZTogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGFWaWV3KHZhbHVlLmJ1ZmZlci5zbGljZSgwKSk7XHJcbiAgICAgICAgICAgIH0gfSB9KTtcclxuICAgIHJldHVybiBJbWFnZU1vZGVsO1xyXG59KENvcmVET01XaWRnZXRNb2RlbCkpO1xyXG5leHBvcnQgeyBJbWFnZU1vZGVsIH07XHJcbnZhciBJbWFnZVZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoSW1hZ2VWaWV3LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gSW1hZ2VWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIEltYWdlVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLnBXaWRnZXQuYWRkQ2xhc3MoJ2p1cHl0ZXItd2lkZ2V0cycpO1xyXG4gICAgICAgIHRoaXMucFdpZGdldC5hZGRDbGFzcygnd2lkZ2V0LWltYWdlJyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTsgLy8gU2V0IGRlZmF1bHRzLlxyXG4gICAgfTtcclxuICAgIEltYWdlVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXHJcbiAgICAgICAgICogY2hhbmdlZCBieSBhbm90aGVyIHZpZXcgb3IgYnkgYSBzdGF0ZSB1cGRhdGUgZnJvbSB0aGUgYmFjay1lbmQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIHVybDtcclxuICAgICAgICB2YXIgZm9ybWF0ID0gdGhpcy5tb2RlbC5nZXQoJ2Zvcm1hdCcpO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpO1xyXG4gICAgICAgIGlmIChmb3JtYXQgIT09ICd1cmwnKSB7XHJcbiAgICAgICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoW3ZhbHVlXSwgeyB0eXBlOiBcImltYWdlL1wiICsgdGhpcy5tb2RlbC5nZXQoJ2Zvcm1hdCcpIH0pO1xyXG4gICAgICAgICAgICB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdXJsID0gKG5ldyBUZXh0RGVjb2RlcigndXRmLTgnKSkuZGVjb2RlKHZhbHVlLmJ1ZmZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENsZWFuIHVwIHRoZSBvbGQgb2JqZWN0VVJMXHJcbiAgICAgICAgdmFyIG9sZHVybCA9IHRoaXMuZWwuc3JjO1xyXG4gICAgICAgIHRoaXMuZWwuc3JjID0gdXJsO1xyXG4gICAgICAgIGlmIChvbGR1cmwgJiYgdHlwZW9mIG9sZHVybCAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChvbGR1cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLm1vZGVsLmdldCgnd2lkdGgnKTtcclxuICAgICAgICBpZiAod2lkdGggIT09IHVuZGVmaW5lZCAmJiB3aWR0aC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCd3aWR0aCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5tb2RlbC5nZXQoJ2hlaWdodCcpO1xyXG4gICAgICAgIGlmIChoZWlnaHQgIT09IHVuZGVmaW5lZCAmJiBoZWlnaHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgSW1hZ2VWaWV3LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWwuc3JjKSB7XHJcbiAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5lbC5zcmMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbW92ZS5jYWxsKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbWFnZVZpZXcucHJvdG90eXBlLCBcInRhZ05hbWVcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IHRhZyBuYW1lLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogIyMjIyBOb3Rlc1xyXG4gICAgICAgICAqIFRoaXMgaXMgYSByZWFkLW9ubHkgYXR0cmlidXRlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBXZSBjYW4ndCBtYWtlIHRoaXMgYW4gYXR0cmlidXRlIHdpdGggYSBkZWZhdWx0IHZhbHVlXHJcbiAgICAgICAgICAgIC8vIHNpbmNlIGl0IHdvdWxkIGJlIHNldCBhZnRlciBpdCBpcyBuZWVkZWQgaW4gdGhlXHJcbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdG9yLlxyXG4gICAgICAgICAgICByZXR1cm4gJ2ltZyc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gSW1hZ2VWaWV3O1xyXG59KERPTVdpZGdldFZpZXcpKTtcclxuZXhwb3J0IHsgSW1hZ2VWaWV3IH07XHJcbiIsIi8qIVxuICogalF1ZXJ5IFVJIEtleWNvZGUgMS4xMi4xXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqL1xuXG4vLz4+bGFiZWw6IEtleWNvZGVcbi8vPj5ncm91cDogQ29yZVxuLy8+PmRlc2NyaXB0aW9uOiBQcm92aWRlIGtleWNvZGVzIGFzIGtleW5hbWVzXG4vLz4+ZG9jczogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20valF1ZXJ5LnVpLmtleUNvZGUvXG5cbiggZnVuY3Rpb24oIGZhY3RvcnkgKSB7XG5cdGlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKCBbIFwianF1ZXJ5XCIsIFwiLi92ZXJzaW9uXCIgXSwgZmFjdG9yeSApO1xuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzXG5cdFx0ZmFjdG9yeSggalF1ZXJ5ICk7XG5cdH1cbn0gKCBmdW5jdGlvbiggJCApIHtcbnJldHVybiAkLnVpLmtleUNvZGUgPSB7XG5cdEJBQ0tTUEFDRTogOCxcblx0Q09NTUE6IDE4OCxcblx0REVMRVRFOiA0Nixcblx0RE9XTjogNDAsXG5cdEVORDogMzUsXG5cdEVOVEVSOiAxMyxcblx0RVNDQVBFOiAyNyxcblx0SE9NRTogMzYsXG5cdExFRlQ6IDM3LFxuXHRQQUdFX0RPV046IDM0LFxuXHRQQUdFX1VQOiAzMyxcblx0UEVSSU9EOiAxOTAsXG5cdFJJR0hUOiAzOSxcblx0U1BBQ0U6IDMyLFxuXHRUQUI6IDksXG5cdFVQOiAzOFxufTtcblxufSApICk7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cclxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmltcG9ydCB7IENvcmVEZXNjcmlwdGlvbk1vZGVsIH0gZnJvbSAnLi93aWRnZXRfY29yZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcbmltcG9ydCB7IEludFNsaWRlclZpZXcsIEludFJhbmdlU2xpZGVyVmlldywgSW50VGV4dFZpZXcsIEJhc2VJbnRTbGlkZXJWaWV3IH0gZnJvbSAnLi93aWRnZXRfaW50JztcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZDMtZm9ybWF0JztcclxudmFyIEZsb2F0TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRmxvYXRNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEZsb2F0TW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgRmxvYXRNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0Zsb2F0TW9kZWwnLFxyXG4gICAgICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRmxvYXRNb2RlbDtcclxufShDb3JlRGVzY3JpcHRpb25Nb2RlbCkpO1xyXG5leHBvcnQgeyBGbG9hdE1vZGVsIH07XHJcbnZhciBCb3VuZGVkRmxvYXRNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhCb3VuZGVkRmxvYXRNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEJvdW5kZWRGbG9hdE1vZGVsKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIEJvdW5kZWRGbG9hdE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XHJcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnQm91bmRlZEZsb2F0TW9kZWwnLFxyXG4gICAgICAgICAgICBtYXg6IDEwMC4wLFxyXG4gICAgICAgICAgICBtaW46IDAuMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCb3VuZGVkRmxvYXRNb2RlbDtcclxufShGbG9hdE1vZGVsKSk7XHJcbmV4cG9ydCB7IEJvdW5kZWRGbG9hdE1vZGVsIH07XHJcbnZhciBGbG9hdFNsaWRlck1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZsb2F0U2xpZGVyTW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGbG9hdFNsaWRlck1vZGVsKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIEZsb2F0U2xpZGVyTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcclxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdGbG9hdFNsaWRlck1vZGVsJyxcclxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0Zsb2F0U2xpZGVyVmlldycsXHJcbiAgICAgICAgICAgIHN0ZXA6IDEuMCxcclxuICAgICAgICAgICAgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyxcclxuICAgICAgICAgICAgX3JhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgcmVhZG91dDogdHJ1ZSxcclxuICAgICAgICAgICAgcmVhZG91dF9mb3JtYXQ6ICcuMmYnLFxyXG4gICAgICAgICAgICBzbGlkZXJfY29sb3I6IG51bGwsXHJcbiAgICAgICAgICAgIGNvbnRpbnVvdXNfdXBkYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgRmxvYXRTbGlkZXJNb2RlbC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChhdHRyaWJ1dGVzLCBvcHRpb25zKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcywgYXR0cmlidXRlcywgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5vbignY2hhbmdlOnJlYWRvdXRfZm9ybWF0JywgdGhpcy51cGRhdGVfcmVhZG91dF9mb3JtYXQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX3JlYWRvdXRfZm9ybWF0KCk7XHJcbiAgICB9O1xyXG4gICAgRmxvYXRTbGlkZXJNb2RlbC5wcm90b3R5cGUudXBkYXRlX3JlYWRvdXRfZm9ybWF0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucmVhZG91dF9mb3JtYXR0ZXIgPSBmb3JtYXQodGhpcy5nZXQoJ3JlYWRvdXRfZm9ybWF0JykpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBGbG9hdFNsaWRlck1vZGVsO1xyXG59KEJvdW5kZWRGbG9hdE1vZGVsKSk7XHJcbmV4cG9ydCB7IEZsb2F0U2xpZGVyTW9kZWwgfTtcclxudmFyIEZsb2F0TG9nU2xpZGVyTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRmxvYXRMb2dTbGlkZXJNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEZsb2F0TG9nU2xpZGVyTW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgRmxvYXRMb2dTbGlkZXJNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0Zsb2F0TG9nU2xpZGVyTW9kZWwnLFxyXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnRmxvYXRMb2dTbGlkZXJWaWV3JyxcclxuICAgICAgICAgICAgc3RlcDogMC4xLFxyXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnLFxyXG4gICAgICAgICAgICBfcmFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICByZWFkb3V0OiB0cnVlLFxyXG4gICAgICAgICAgICByZWFkb3V0X2Zvcm1hdDogJy4zZycsXHJcbiAgICAgICAgICAgIHNsaWRlcl9jb2xvcjogbnVsbCxcclxuICAgICAgICAgICAgY29udGludW91c191cGRhdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgYmFzZTogMTAuLFxyXG4gICAgICAgICAgICB2YWx1ZTogMS4wLFxyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIG1heDogNFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEZsb2F0TG9nU2xpZGVyTW9kZWwucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoYXR0cmlidXRlcywgb3B0aW9ucykge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIGF0dHJpYnV0ZXMsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMub24oJ2NoYW5nZTpyZWFkb3V0X2Zvcm1hdCcsIHRoaXMudXBkYXRlX3JlYWRvdXRfZm9ybWF0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9yZWFkb3V0X2Zvcm1hdCgpO1xyXG4gICAgfTtcclxuICAgIEZsb2F0TG9nU2xpZGVyTW9kZWwucHJvdG90eXBlLnVwZGF0ZV9yZWFkb3V0X2Zvcm1hdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJlYWRvdXRfZm9ybWF0dGVyID0gZm9ybWF0KHRoaXMuZ2V0KCdyZWFkb3V0X2Zvcm1hdCcpKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRmxvYXRMb2dTbGlkZXJNb2RlbDtcclxufShCb3VuZGVkRmxvYXRNb2RlbCkpO1xyXG5leHBvcnQgeyBGbG9hdExvZ1NsaWRlck1vZGVsIH07XHJcbnZhciBGbG9hdFJhbmdlU2xpZGVyTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRmxvYXRSYW5nZVNsaWRlck1vZGVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRmxvYXRSYW5nZVNsaWRlck1vZGVsKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBGbG9hdFJhbmdlU2xpZGVyTW9kZWw7XHJcbn0oRmxvYXRTbGlkZXJNb2RlbCkpO1xyXG5leHBvcnQgeyBGbG9hdFJhbmdlU2xpZGVyTW9kZWwgfTtcclxudmFyIEZsb2F0U2xpZGVyVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhGbG9hdFNsaWRlclZpZXcsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGbG9hdFNsaWRlclZpZXcoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX3BhcnNlX3ZhbHVlID0gcGFyc2VGbG9hdDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgc2xpZGVyIGJlZm9yZSBzZW5kaW5nIGl0IHRvIHRoZSBiYWNrLWVuZFxyXG4gICAgICogYW5kIGFwcGx5aW5nIGl0IHRvIHRoZSBvdGhlciB2aWV3cyBvbiB0aGUgcGFnZS5cclxuICAgICAqL1xyXG4gICAgRmxvYXRTbGlkZXJWaWV3LnByb3RvdHlwZS5fdmFsaWRhdGVfc2xpZGVfdmFsdWUgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBGbG9hdFNsaWRlclZpZXc7XHJcbn0oSW50U2xpZGVyVmlldykpO1xyXG5leHBvcnQgeyBGbG9hdFNsaWRlclZpZXcgfTtcclxudmFyIEZsb2F0TG9nU2xpZGVyVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhGbG9hdExvZ1NsaWRlclZpZXcsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGbG9hdExvZ1NsaWRlclZpZXcoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX3BhcnNlX3ZhbHVlID0gcGFyc2VGbG9hdDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBGbG9hdExvZ1NsaWRlclZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzLCBvcHRpb25zKTtcclxuICAgICAgICB2YXIgbWluID0gdGhpcy5tb2RlbC5nZXQoJ21pbicpO1xyXG4gICAgICAgIHZhciBtYXggPSB0aGlzLm1vZGVsLmdldCgnbWF4Jyk7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XHJcbiAgICAgICAgdmFyIGJhc2UgPSB0aGlzLm1vZGVsLmdldCgnYmFzZScpO1xyXG4gICAgICAgIHZhciBsb2dfdmFsdWUgPSBNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLmxvZyhiYXNlKTtcclxuICAgICAgICBpZiAobG9nX3ZhbHVlID4gbWF4KSB7XHJcbiAgICAgICAgICAgIGxvZ192YWx1ZSA9IG1heDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobG9nX3ZhbHVlIDwgbWluKSB7XHJcbiAgICAgICAgICAgIGxvZ192YWx1ZSA9IG1pbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kc2xpZGVyLnNsaWRlcignb3B0aW9uJywgJ3ZhbHVlJywgbG9nX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlVG9TdHJpbmcodmFsdWUpO1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgndmFsdWUnKSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgdmFsdWUsIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnRvdWNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogV3JpdGUgdmFsdWUgdG8gYSBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgRmxvYXRMb2dTbGlkZXJWaWV3LnByb3RvdHlwZS52YWx1ZVRvU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGZvcm1hdCA9IHRoaXMubW9kZWwucmVhZG91dF9mb3JtYXR0ZXI7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdCh2YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZSB2YWx1ZSBmcm9tIGEgc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIEZsb2F0TG9nU2xpZGVyVmlldy5wcm90b3R5cGUuc3RyaW5nVG9WYWx1ZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnNlX3ZhbHVlKHRleHQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogdGhpcyBoYW5kbGVzIHRoZSBlbnRyeSBvZiB0ZXh0IGludG8gdGhlIGNvbnRlbnRFZGl0YWJsZSBsYWJlbCBmaXJzdCwgdGhlXHJcbiAgICAgKiB2YWx1ZSBpcyBjaGVja2VkIGlmIGl0IGNvbnRhaW5zIGEgcGFyc2VhYmxlIHZhbHVlIHRoZW4gaXQgaXMgY2xhbXBlZFxyXG4gICAgICogd2l0aGluIHRoZSBtaW4tbWF4IHJhbmdlIG9mIHRoZSBzbGlkZXIgZmluYWxseSwgdGhlIG1vZGVsIGlzIHVwZGF0ZWQgaWZcclxuICAgICAqIHRoZSB2YWx1ZSBpcyB0byBiZSBjaGFuZ2VkXHJcbiAgICAgKlxyXG4gICAgICogaWYgYW55IG9mIHRoZXNlIGNvbmRpdGlvbnMgYXJlIG5vdCBtZXQsIHRoZSB0ZXh0IGlzIHJlc2V0XHJcbiAgICAgKi9cclxuICAgIEZsb2F0TG9nU2xpZGVyVmlldy5wcm90b3R5cGUuaGFuZGxlVGV4dENoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnN0cmluZ1RvVmFsdWUodGhpcy5yZWFkb3V0LnRleHRDb250ZW50KTtcclxuICAgICAgICB2YXIgdm1pbiA9IHRoaXMubW9kZWwuZ2V0KCdtaW4nKTtcclxuICAgICAgICB2YXIgdm1heCA9IHRoaXMubW9kZWwuZ2V0KCdtYXgnKTtcclxuICAgICAgICB2YXIgYmFzZSA9IHRoaXMubW9kZWwuZ2V0KCdiYXNlJyk7XHJcbiAgICAgICAgaWYgKGlzTmFOKHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlVG9TdHJpbmcodGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgTWF0aC5wb3coYmFzZSwgdm1heCkpLCBNYXRoLnBvdyhiYXNlLCB2bWluKSk7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZG91dC50ZXh0Q29udGVudCA9IHRoaXMudmFsdWVUb1N0cmluZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLnNldCgndmFsdWUnLCB2YWx1ZSwgeyB1cGRhdGVkX3ZpZXc6IHRoaXMgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlVG9TdHJpbmcodGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIHNsaWRlciB2YWx1ZSBpcyBjaGFuZ2luZy5cclxuICAgICAqL1xyXG4gICAgRmxvYXRMb2dTbGlkZXJWaWV3LnByb3RvdHlwZS5oYW5kbGVTbGlkZXJDaGFuZ2UgPSBmdW5jdGlvbiAoZSwgdWkpIHtcclxuICAgICAgICB2YXIgYmFzZSA9IHRoaXMubW9kZWwuZ2V0KCdiYXNlJyk7XHJcbiAgICAgICAgdmFyIGFjdHVhbF92YWx1ZSA9IE1hdGgucG93KGJhc2UsIHRoaXMuX3ZhbGlkYXRlX3NsaWRlX3ZhbHVlKHVpLnZhbHVlKSk7XHJcbiAgICAgICAgdGhpcy5yZWFkb3V0LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZVRvU3RyaW5nKGFjdHVhbF92YWx1ZSk7XHJcbiAgICAgICAgLy8gT25seSBwZXJzaXN0IHRoZSB2YWx1ZSB3aGlsZSBzbGlkaW5nIGlmIHRoZSBjb250aW51b3VzX3VwZGF0ZVxyXG4gICAgICAgIC8vIHRyYWl0IGlzIHNldCB0byB0cnVlLlxyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnY29udGludW91c191cGRhdGUnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNsaWRlckNoYW5nZWQoZSwgdWkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBzbGlkZXIgdmFsdWUgaGFzIGNoYW5nZWQuXHJcbiAgICAgKlxyXG4gICAgICogQ2FsbGluZyBtb2RlbC5zZXQgd2lsbCB0cmlnZ2VyIGFsbCBvZiB0aGUgb3RoZXIgdmlld3Mgb2YgdGhlXHJcbiAgICAgKiBtb2RlbCB0byB1cGRhdGUuXHJcbiAgICAgKi9cclxuICAgIEZsb2F0TG9nU2xpZGVyVmlldy5wcm90b3R5cGUuaGFuZGxlU2xpZGVyQ2hhbmdlZCA9IGZ1bmN0aW9uIChlLCB1aSkge1xyXG4gICAgICAgIHZhciBiYXNlID0gdGhpcy5tb2RlbC5nZXQoJ2Jhc2UnKTtcclxuICAgICAgICB2YXIgYWN0dWFsX3ZhbHVlID0gTWF0aC5wb3coYmFzZSwgdGhpcy5fdmFsaWRhdGVfc2xpZGVfdmFsdWUodWkudmFsdWUpKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnNldCgndmFsdWUnLCBhY3R1YWxfdmFsdWUsIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xyXG4gICAgICAgIHRoaXMudG91Y2goKTtcclxuICAgIH07XHJcbiAgICBGbG9hdExvZ1NsaWRlclZpZXcucHJvdG90eXBlLl92YWxpZGF0ZV9zbGlkZV92YWx1ZSA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEZsb2F0TG9nU2xpZGVyVmlldztcclxufShCYXNlSW50U2xpZGVyVmlldykpO1xyXG5leHBvcnQgeyBGbG9hdExvZ1NsaWRlclZpZXcgfTtcclxudmFyIEZsb2F0UmFuZ2VTbGlkZXJWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZsb2F0UmFuZ2VTbGlkZXJWaWV3LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRmxvYXRSYW5nZVNsaWRlclZpZXcoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX3BhcnNlX3ZhbHVlID0gcGFyc2VGbG9hdDtcclxuICAgICAgICAvLyBtYXRjaGVzOiB3aGl0ZXNwYWNlPywgZmxvYXQsIHdoaXRlc3BhY2U/LCAoaHlwaGVuLCBjb2xvbiwgb3IgZW4tZGFzaCksIHdoaXRlc3BhY2U/LCBmbG9hdFxyXG4gICAgICAgIF90aGlzLl9yYW5nZV9yZWdleCA9IC9eXFxzKihbKy1dPyg/OlxcZCpcXC4/XFxkK3xcXGQrXFwuKSg/OltlRV1bLTpdP1xcZCspPylcXHMqWy064oCTXVxccyooWystXT8oPzpcXGQqXFwuP1xcZCt8XFxkK1xcLikoPzpbZUVdWystXT9cXGQrKT8pLztcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgc2xpZGVyIGJlZm9yZSBzZW5kaW5nIGl0IHRvIHRoZSBiYWNrLWVuZFxyXG4gICAgICogYW5kIGFwcGx5aW5nIGl0IHRvIHRoZSBvdGhlciB2aWV3cyBvbiB0aGUgcGFnZS5cclxuICAgICAqL1xyXG4gICAgRmxvYXRSYW5nZVNsaWRlclZpZXcucHJvdG90eXBlLl92YWxpZGF0ZV9zbGlkZV92YWx1ZSA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEZsb2F0UmFuZ2VTbGlkZXJWaWV3O1xyXG59KEludFJhbmdlU2xpZGVyVmlldykpO1xyXG5leHBvcnQgeyBGbG9hdFJhbmdlU2xpZGVyVmlldyB9O1xyXG52YXIgRmxvYXRUZXh0TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRmxvYXRUZXh0TW9kZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGbG9hdFRleHRNb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBGbG9hdFRleHRNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xyXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0Zsb2F0VGV4dE1vZGVsJyxcclxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0Zsb2F0VGV4dFZpZXcnLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRpbnVvdXNfdXBkYXRlOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRmxvYXRUZXh0TW9kZWw7XHJcbn0oRmxvYXRNb2RlbCkpO1xyXG5leHBvcnQgeyBGbG9hdFRleHRNb2RlbCB9O1xyXG52YXIgQm91bmRlZEZsb2F0VGV4dE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJvdW5kZWRGbG9hdFRleHRNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEJvdW5kZWRGbG9hdFRleHRNb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBCb3VuZGVkRmxvYXRUZXh0TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcclxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdCb3VuZGVkRmxvYXRUZXh0TW9kZWwnLFxyXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnRmxvYXRUZXh0VmlldycsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGludW91c191cGRhdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGVwOiAwLjFcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQm91bmRlZEZsb2F0VGV4dE1vZGVsO1xyXG59KEJvdW5kZWRGbG9hdE1vZGVsKSk7XHJcbmV4cG9ydCB7IEJvdW5kZWRGbG9hdFRleHRNb2RlbCB9O1xyXG52YXIgRmxvYXRUZXh0VmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhGbG9hdFRleHRWaWV3LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRmxvYXRUZXh0VmlldygpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fcGFyc2VfdmFsdWUgPSBwYXJzZUZsb2F0O1xyXG4gICAgICAgIF90aGlzLl9kZWZhdWx0X3N0ZXAgPSAnYW55JztcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBrZXkgcHJlc3NcclxuICAgICAqL1xyXG4gICAgRmxvYXRUZXh0Vmlldy5wcm90b3R5cGUuaGFuZGxlS2V5cHJlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIC8vIE92ZXJ3cml0ZSBJbnRUZXh0VmlldydzIGhhbmRsZUtleXByZXNzXHJcbiAgICAgICAgLy8gd2hpY2ggcHJldmVudHMgZGVjaW1hbCBwb2ludHMuXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBrZXkgdXBcclxuICAgICAqL1xyXG4gICAgRmxvYXRUZXh0Vmlldy5wcm90b3R5cGUuaGFuZGxlS2V5VXAgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIC8vIE92ZXJ3cml0ZSBJbnRUZXh0VmlldydzIGhhbmRsZUtleVVwXHJcbiAgICAgICAgLy8gd2hpY2ggcHJldmVudHMgZGVjaW1hbCBwb2ludHMuXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEZsb2F0VGV4dFZpZXc7XHJcbn0oSW50VGV4dFZpZXcpKTtcclxuZXhwb3J0IHsgRmxvYXRUZXh0VmlldyB9O1xyXG52YXIgRmxvYXRQcm9ncmVzc01vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZsb2F0UHJvZ3Jlc3NNb2RlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEZsb2F0UHJvZ3Jlc3NNb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBGbG9hdFByb2dyZXNzTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcclxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdGbG9hdFByb2dyZXNzTW9kZWwnLFxyXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnUHJvZ3Jlc3NWaWV3JyxcclxuICAgICAgICAgICAgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyxcclxuICAgICAgICAgICAgYmFyX3N0eWxlOiAnJyxcclxuICAgICAgICAgICAgc3R5bGU6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRmxvYXRQcm9ncmVzc01vZGVsO1xyXG59KEJvdW5kZWRGbG9hdE1vZGVsKSk7XHJcbmV4cG9ydCB7IEZsb2F0UHJvZ3Jlc3NNb2RlbCB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
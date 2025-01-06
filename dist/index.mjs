// src/Button/Index.tsx
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import React from "react";
var Button = function(param) {
    var icon = param.icon, label = param.label, onClick = param.onClick, _param_disabled = param.disabled, disabled = _param_disabled === void 0 ? false : _param_disabled, _param_outline = param.outline, outline = _param_outline === void 0 ? false : _param_outline, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className, type = param.type, active = param.active;
    return /* @__PURE__ */ React.createElement("button", {
        type: type === "submit" ? "submit" : type === "reset" ? "reset" : "button",
        onClick: onClick,
        className: twMerge(classNames("p-4 rounded-xl whitespace-nowrap flex items-center gap-2 transition-all justify-center hover:border-none hover:scale-95 bg-[var(--primary-color)] text-[var(--bg-color)]", {
            "border border-[var(--primary-color)] bg-transparent text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--bg-color)]": outline,
            "bg-[var(--primary-color)] text-[var(--bg-color)]": active,
            "cursor-not-allowed opacity-70 scale-100": disabled
        }, className)),
        disabled: disabled
    }, icon, label);
};
// src/Input/Index.tsx
import React2, { useState } from "react";
import { PiEye, PiEyeClosed, PiMagnifyingGlass } from "react-icons/pi";
import { BiCopy } from "react-icons/bi";
// src/utils.ts
import { toast } from "react-toastify";
var copyToClipboard = function(text) {
    navigator.clipboard.writeText(text).then(function() {
        toast.info("Copied to clipboard.");
    }).catch(function(err) {
        toast.info("Failde to copy to clipboard.");
    });
};
// src/Input/Index.tsx
import classNames2 from "classnames";
import passwordGenerator from "generate-password";
import { twMerge as twMerge2 } from "tailwind-merge";
var InputComponent = function(param) {
    var label = param.label, name = param.name, type = param.type, labelClasses = param.labelClasses, readOnly = param.readOnly, value = param.value, onChange = param.onChange, _param_inputClasses = param.inputClasses, inputClasses = _param_inputClasses === void 0 ? "" : _param_inputClasses, placeholder = param.placeholder, options = param.options, defaultValue = param.defaultValue, _param_required = param.required, required = _param_required === void 0 ? true : _param_required, maxLength = param.maxLength, minLength = param.minLength, maxNumber = param.maxNumber, minNumber = param.minNumber, copyPassword = param.copyPassword, generatePassword = param.generatePassword, rows = param.rows, suggestions = param.suggestions, onSelectSuggestion = param.onSelectSuggestion, onKeyDown = param.onKeyDown, multiple = param.multiple, step = param.step, onSearch = param.onSearch;
    var _useState = _sliced_to_array(useState(false), 2), passwordVisible = _useState[0], setPasswordVisible = _useState[1];
    return /* @__PURE__ */ React2.createElement("div", {
        className: "flex flex-col items-start w-full gap-4"
    }, label && /* @__PURE__ */ React2.createElement("h4", {
        className: classNames2("md:text-lg", labelClasses)
    }, label), type === "textarea" ? /* @__PURE__ */ React2.createElement("textarea", {
        name: name,
        value: value,
        onChange: function(e) {
            return onChange && onChange(e.target.value);
        },
        maxLength: maxLength,
        minLength: minLength,
        readOnly: readOnly,
        placeholder: placeholder,
        defaultValue: defaultValue,
        required: required,
        rows: rows || 4,
        className: twMerge2(classNames2("w-full p-3 md:p-4 border border-black/20 bg-transparent rounded placeholder:text-gray-600", inputClasses))
    }) : type === "select" ? /* @__PURE__ */ React2.createElement("select", {
        onChange: function(e) {
            return onChange && onChange(e.target.value);
        },
        className: twMerge2(classNames2("w-full p-3 md:p-4 border border-black/20 bg-transparent rounded placeholder:text-gray-600", inputClasses)),
        name: name,
        disabled: readOnly,
        required: required,
        "aria-placeholder": placeholder,
        defaultValue: defaultValue
    }, options === null || options === void 0 ? void 0 : options.map(function(option) {
        return /* @__PURE__ */ React2.createElement("option", {
            selected: option.selected,
            disabled: option.disabled,
            key: option.id,
            value: option.id
        }, option.value || option.id);
    })) : /* @__PURE__ */ React2.createElement("div", {
        className: classNames2(type !== "checkbox" && "w-full", "flex flex-col md:flex-row items-center gap-2")
    }, /* @__PURE__ */ React2.createElement("div", {
        className: classNames2(type !== "checkbox" && "w-full", "flex items-center gap-2 relative")
    }, type === "search" && /* @__PURE__ */ React2.createElement("div", {
        className: "flex gap-2 items-center absolute left-2 top-0 bottom-0"
    }, /* @__PURE__ */ React2.createElement(Button, {
        onClick: onSearch,
        className: "p-2 hover:opacity-70 border-none rounded-full",
        outline: true,
        icon: /* @__PURE__ */ React2.createElement(PiMagnifyingGlass, {
            size: 18
        })
    })), /* @__PURE__ */ React2.createElement("input", {
        type: type === "number" || type === "password" && passwordVisible ? "text" : type,
        multiple: multiple,
        name: name,
        value: value,
        step: step,
        min: minNumber,
        max: maxNumber,
        required: required,
        maxLength: maxLength,
        minLength: minLength,
        onKeyDown: onKeyDown,
        onChange: function(e) {
            return onChange && onChange(e.target.value);
        },
        readOnly: readOnly,
        placeholder: placeholder,
        defaultValue: defaultValue,
        className: twMerge2(classNames2("w-full p-3 md:p-4 border border-black/20 rounded placeholder:text-gray-600 bg-transparent", {
            "p-2 pl-11 md:p-2 md:pl-11 rounded-full": type === "search",
            inputClasses: inputClasses
        }))
    }), /* @__PURE__ */ React2.createElement("div", {
        className: "flex gap-2 items-center absolute right-2 top-0 bottom-0"
    }, copyPassword && value && value.length > 7 && /* @__PURE__ */ React2.createElement(Button, {
        onClick: function() {
            return copyToClipboard(value);
        },
        outline: true,
        className: "p-2 hover:opacity-70 border-none",
        icon: /* @__PURE__ */ React2.createElement(BiCopy, null)
    }), type === "password" && /* @__PURE__ */ React2.createElement(Button, {
        onClick: function() {
            return setPasswordVisible(!passwordVisible);
        },
        className: "p-2 hover:opacity-70 border-none",
        outline: true,
        icon: passwordVisible ? /* @__PURE__ */ React2.createElement(PiEye, {
            size: 18
        }) : /* @__PURE__ */ React2.createElement(PiEyeClosed, {
            size: 18
        })
    }))), copyPassword || generatePassword ? /* @__PURE__ */ React2.createElement("div", {
        className: "flex gap-2 items-center"
    }, generatePassword && /* @__PURE__ */ React2.createElement(Button, {
        onClick: function() {
            return onChange && onChange(passwordGenerator.generate({
                length: 15,
                numbers: true
            }));
        },
        className: "border-none",
        label: "Generate Password",
        outline: true
    })) : null), suggestions && suggestions.length > 0 && /* @__PURE__ */ React2.createElement("div", {
        className: "suggestions"
    }, suggestions.map(function(suggestion) {
        return /* @__PURE__ */ React2.createElement("div", {
            key: suggestion.id,
            onClick: function() {
                return onSelectSuggestion && onSelectSuggestion(suggestion.id);
            },
            className: "suggestion-item"
        }, suggestion.value);
    })));
};
// src/RichTextEditor/Index.tsx
import React3 from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
var RichTextEditor = function(param) {
    var value = param.value, onChange = param.onChange;
    return /* @__PURE__ */ React3.createElement("div", {
        className: "flex w-full h-auto relative overflow-hidden border border-black/20 rounded"
    }, /* @__PURE__ */ React3.createElement(ReactQuill, {
        value: value,
        onChange: onChange,
        modules: {
            toolbar: [
                [
                    {
                        header: "1"
                    },
                    {
                        header: "2"
                    },
                    {
                        font: []
                    }
                ],
                [
                    {
                        list: "ordered"
                    },
                    {
                        list: "bullet"
                    }
                ],
                [
                    "bold",
                    "italic",
                    "underline"
                ],
                [
                    {
                        align: []
                    }
                ],
                [
                    "link"
                ]
            ]
        },
        theme: "snow",
        className: "w-full custom-quill-editor"
    }));
};
// src/Nav/Index.tsx
import React5, { useState as useState3 } from "react";
import { PiMagnifyingGlass as PiMagnifyingGlass2, PiUser } from "react-icons/pi";
import classNames3 from "classnames";
import { twMerge as twMerge3 } from "tailwind-merge";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdClose } from "react-icons/md";
// src/Nav/NavContext.tsx
import React4, { createContext, useState as useState2, useContext } from "react";
var NavContext = createContext(void 0);
var NavProvider = function(param) {
    var children = param.children;
    var _useState2 = _sliced_to_array(useState2(""), 2), query = _useState2[0], setQuery = _useState2[1];
    var _useState21 = _sliced_to_array(useState2(null), 2), searchSuggestions = _useState21[0], setSearchSuggestions = _useState21[1];
    return /* @__PURE__ */ React4.createElement(NavContext.Provider, {
        value: {
            query: query,
            setQuery: setQuery,
            searchSuggestions: searchSuggestions,
            setSearchSuggestions: setSearchSuggestions
        }
    }, children);
};
var useNav = function() {
    var context = useContext(NavContext);
    if (!context) {
        throw new Error("useNav must be used within a NavProvider");
    }
    return context;
};
// src/Nav/Index.tsx
var Nav = function(param) {
    var header = param.header, items = param.items, profile = param.profile, theme = param.theme, type = param.type, rightIcons = param.rightIcons, hideProfileIcon = param.hideProfileIcon, hideSearchIcon = param.hideSearchIcon, onSearch = param.onSearch;
    var _useState3 = _sliced_to_array(useState3(false), 2), isNavOpen = _useState3[0], setIsNavOpen = _useState3[1];
    var _useState31 = _sliced_to_array(useState3(false), 2), isSearchOpen = _useState31[0], setIsSearchOpen = _useState31[1];
    var _useNav = useNav(), query = _useNav.query, setQuery = _useNav.setQuery, searchSuggestions = _useNav.searchSuggestions, setSearchSuggestions = _useNav.setSearchSuggestions;
    return /* @__PURE__ */ React5.createElement("div", {
        className: classNames3("flex md:flex-col md:h-screen gap-8 p-4 justify-between bg-[var(--nav-bg-color)] text-[var(--nav-text-color)] shrink-0 border-r border-black/10", {
            "flex-row md:flex-row h-auto w-full": type === "xnav",
            "flex-col md:flex-col h-full w-auto": type === "ynav"
        })
    }, /* @__PURE__ */ React5.createElement("div", {
        className: classNames3("flex flex-col h-full gap-4")
    }, header && /* @__PURE__ */ React5.createElement("div", {
        className: twMerge3(classNames3("flex gap-2 items-center", header === null || header === void 0 ? void 0 : header.className))
    }, /* @__PURE__ */ React5.createElement(Button, {
        onClick: function() {
            return setIsNavOpen(!isNavOpen);
        },
        icon: /* @__PURE__ */ React5.createElement(BiMenuAltLeft, {
            size: 24
        }),
        outline: true,
        className: "p-2 border-none md:hidden"
    }), header.logo && /* @__PURE__ */ React5.createElement("img", {
        src: header === null || header === void 0 ? void 0 : header.logo,
        className: classNames3(header === null || header === void 0 ? void 0 : header.logoClassNames, "size-10")
    }), header === null || header === void 0 ? void 0 : header.startIcon, /* @__PURE__ */ React5.createElement("h1", {
        className: classNames3("font-semibold text-[var(--primary-color)]")
    }, header === null || header === void 0 ? void 0 : header.title), header === null || header === void 0 ? void 0 : header.endIcon), /* @__PURE__ */ React5.createElement("div", {
        className: classNames3("hidden md:flex flex-col gap-4 w-full grow pt-8")
    }, /* @__PURE__ */ React5.createElement(Button, {
        onClick: function() {
            return setIsNavOpen(false);
        },
        icon: /* @__PURE__ */ React5.createElement(MdClose, {
            size: 24
        }),
        outline: true,
        className: "p-2 border-none ml-auto md:hidden"
    }), items === null || items === void 0 ? void 0 : items.map(function(item, index) {
        return /* @__PURE__ */ React5.createElement(Button, {
            key: index,
            onClick: item.onClick,
            icon: item.icon,
            label: item.label,
            outline: !item.active,
            active: item.active,
            className: "border-none justify-start w-full"
        });
    }), profile && /* @__PURE__ */ React5.createElement("div", {
        className: "flex items-center shrink-0 gap-2 mt-auto"
    }, profile.avatar ? /* @__PURE__ */ React5.createElement("img", {
        onClick: profile.onAvatarClick,
        src: profile.avatar,
        className: classNames3("size-6", {
            "cursor-pointer": profile.onAvatarClick
        })
    }) : /* @__PURE__ */ React5.createElement("p", {
        onClick: profile.onAvatarClick,
        className: classNames3("rounded-full p-2 bg-[var(--primary-color)] text-[var(--bg-color)]", {
            "cursor-pointer": profile.onAvatarClick
        })
    }, /* @__PURE__ */ React5.createElement(PiUser, {
        size: 24
    })), /* @__PURE__ */ React5.createElement("p", {
        className: classNames3({
            "cursor-pointer": profile.onUsernameClick
        }),
        onClick: profile.onUsernameClick
    }, profile.username))), isNavOpen && /* @__PURE__ */ React5.createElement("div", {
        className: classNames3("left-0 top-0 bottom-0 h-screen w-screen absolute z-20 flex", {
            "flex-col md:flex-col": type === "ynav",
            "flex-row md:flex-row": type === "xnav"
        })
    }, /* @__PURE__ */ React5.createElement("div", {
        className: classNames3("flex flex-col gap-4 w-auto bg-[var(--nav-bg-color)] backdrop-blur shrink-0 border-r border-black/10 p-4")
    }, /* @__PURE__ */ React5.createElement(Button, {
        onClick: function() {
            return setIsNavOpen(false);
        },
        icon: /* @__PURE__ */ React5.createElement(MdClose, {
            size: 24
        }),
        outline: true,
        className: "p-2 border-none ml-auto md:hidden"
    }), items === null || items === void 0 ? void 0 : items.map(function(item, index) {
        return /* @__PURE__ */ React5.createElement(Button, {
            key: index,
            onClick: item.onClick,
            icon: item.icon,
            label: item.label,
            outline: !item.active,
            active: item.active,
            className: "border-none justify-start w-full"
        });
    }), profile && /* @__PURE__ */ React5.createElement("div", {
        className: "flex items-center shrink-0 gap-2 mt-auto"
    }, profile.avatar ? /* @__PURE__ */ React5.createElement("img", {
        onClick: profile.onAvatarClick,
        src: profile.avatar,
        className: classNames3("size-6", {
            "cursor-pointer": profile.onAvatarClick
        })
    }) : /* @__PURE__ */ React5.createElement("p", {
        onClick: profile.onAvatarClick,
        className: classNames3("rounded-full p-2 bg-[var(--primary-color)] text-[var(--bg-color)]", {
            "cursor-pointer": profile.onAvatarClick
        })
    }, /* @__PURE__ */ React5.createElement(PiUser, {
        size: 24
    })), /* @__PURE__ */ React5.createElement("p", {
        className: classNames3({
            "cursor-pointer": profile.onUsernameClick
        }),
        onClick: profile.onUsernameClick
    }, profile.username))), /* @__PURE__ */ React5.createElement("div", {
        className: "flex flex-col w-full h-full items-center justify-center p-4 bg-black/50 text-white/50",
        onClick: function() {
            return setIsNavOpen(false);
        }
    }, /* @__PURE__ */ React5.createElement("p", null, "Close")))), profile || rightIcons ? /* @__PURE__ */ React5.createElement("div", {
        className: "flex items-center shrink-0 gap-2 md:hidden"
    }, rightIcons, !hideSearchIcon && /* @__PURE__ */ React5.createElement(Button, {
        onClick: function() {
            return setIsSearchOpen(!isSearchOpen);
        },
        icon: /* @__PURE__ */ React5.createElement(PiMagnifyingGlass2, {
            size: 24
        }),
        outline: true,
        className: "p-2 border-none rounded-full"
    }), !hideProfileIcon && (profile === null || profile === void 0 ? void 0 : profile.avatar) ? /* @__PURE__ */ React5.createElement("img", {
        className: classNames3("size-6", {
            "cursor-pointer": profile.onAvatarClick
        }),
        onClick: profile.onAvatarClick,
        src: profile.avatar
    }) : /* @__PURE__ */ React5.createElement("p", {
        onClick: profile === null || profile === void 0 ? void 0 : profile.onAvatarClick,
        className: classNames3("rounded-full p-2 bg-[var(--primary-color)] text-[var(--bg-color)]", {
            "cursor-pointer": profile === null || profile === void 0 ? void 0 : profile.onAvatarClick
        })
    }, /* @__PURE__ */ React5.createElement(PiUser, {
        size: 24
    }))) : null, isSearchOpen && /* @__PURE__ */ React5.createElement("div", {
        className: classNames3("left-0 top-0 bottom-0 right-0 h-screen w-screen absolute z-20 flex flex-col")
    }, /* @__PURE__ */ React5.createElement("div", {
        className: classNames3("flex w-full gap-4 bg-[var(--nav-bg-color)] backdrop-blur shrink-0 border-r border-black/10 p-4")
    }, /* @__PURE__ */ React5.createElement(InputComponent, {
        value: query,
        onChange: setQuery,
        type: "search"
    }), /* @__PURE__ */ React5.createElement(Button, {
        onClick: function() {
            if (query && query.length > 0) {
                setQuery("");
            } else {
                setIsSearchOpen(false);
            }
        },
        icon: /* @__PURE__ */ React5.createElement(MdClose, {
            size: 24
        }),
        outline: true,
        className: "p-2 border-none"
    })), searchSuggestions && /* @__PURE__ */ React5.createElement("div", {
        className: "flex flex-col gap-4 w-full p-4 pt-10 bg-[var(--nav-bg-color)]"
    }, searchSuggestions), /* @__PURE__ */ React5.createElement("div", {
        className: "flex flex-col w-full h-full items-center justify-center p-4 bg-black/50 text-white/50",
        onClick: function() {
            return setIsSearchOpen(false);
        }
    })));
};
// src/modal/Modal.tsx
import React6 from "react";
var Modal = React6.memo(function(param) {
    var isOpen = param.isOpen, children = param.children;
    if (!isOpen) return null;
    return /* @__PURE__ */ React6.createElement("div", {
        className: "fixed z-40 flex flex-col top-0 bottom-0 justify-center items-center gap-4 overflow-hidden w-full h-full bg-gray-950/80 backdrop-blur"
    }, children);
});
Modal.displayName = "Modal";
// src/Header/Index.tsx
import React7 from "react";
import { GoChevronLeft } from "react-icons/go";
import classNames4 from "classnames";
import { twMerge as twMerge4 } from "tailwind-merge";
var Header = function(param) {
    var title = param.title, back = param.back, children = param.children, theme = param.theme, className = param.className, query = param.query, setQuery = param.setQuery;
    return /* @__PURE__ */ React7.createElement("div", {
        className: twMerge4(classNames4("flex justify-between items-center p-4 rounded-xl w-full border border-black/20 bg-[var(--header-bg-color)] text-[var(--header-text-color)]", className))
    }, /* @__PURE__ */ React7.createElement("div", {
        className: "flex gap-4 items-center"
    }, back && /* @__PURE__ */ React7.createElement(Button, {
        outline: true,
        onClick: back,
        icon: /* @__PURE__ */ React7.createElement(GoChevronLeft, {
            size: 18
        }),
        className: "p-2 border-none"
    }), /* @__PURE__ */ React7.createElement("h2", {
        className: "text-lg"
    }, title)), /* @__PURE__ */ React7.createElement("div", {
        className: "flex gap-4 items-center"
    }, setQuery && /* @__PURE__ */ React7.createElement(InputComponent, {
        type: "search",
        value: query,
        onChange: setQuery
    }), children));
};
// src/modal/ModalContext.tsx
import React8, { createContext as createContext2, useState as useState4, useContext as useContext2 } from "react";
var ModalContext = createContext2(void 0);
var useModal = function() {
    var context = useContext2(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};
var ModalProvider = function(param) {
    var children = param.children;
    var _useState4 = _sliced_to_array(useState4(false), 2), isOpen = _useState4[0], setIsOpen = _useState4[1];
    var _useState41 = _sliced_to_array(useState4(null), 2), modalContent = _useState41[0], setModalContent = _useState41[1];
    var openModal = function(content) {
        setModalContent(content);
        setIsOpen(true);
    };
    var closeModal = function() {
        setIsOpen(false);
        setModalContent(null);
    };
    return /* @__PURE__ */ React8.createElement(ModalContext.Provider, {
        value: {
            isOpen: isOpen,
            openModal: openModal,
            closeModal: closeModal,
            modalContent: modalContent
        }
    }, children);
};
// src/cropper/CropperContext.tsx
import React9, { createContext as createContext3, useCallback, useContext as useContext3, useState as useState5 } from "react";
// src/cropper/utils.ts
var createImage = function(url) {
    return new Promise(function(resolve, reject) {
        var image = new Image();
        image.addEventListener("load", function() {
            return resolve(image);
        });
        image.addEventListener("error", function(error) {
            return reject(error);
        });
        image.setAttribute("crossOrigin", "anonymous");
        image.src = url;
    });
};
function getRadianAngle(degreeValue) {
    return degreeValue * Math.PI / 180;
}
function rotateSize(width, height, rotation) {
    var rotRad = getRadianAngle(rotation);
    return {
        width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
        height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height)
    };
}
var getCroppedImg = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(param) {
        var imageSrc, _param_pixelCrop, pixelCrop, _param_rotation, rotation, _param_flip, flip, image, canvas, ctx, rotRad, _rotateSize, bBoxWidth, bBoxHeight, data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    imageSrc = param.imageSrc, _param_pixelCrop = param.pixelCrop, pixelCrop = _param_pixelCrop === void 0 ? {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    } : _param_pixelCrop, _param_rotation = param.rotation, rotation = _param_rotation === void 0 ? 0 : _param_rotation, _param_flip = param.flip, flip = _param_flip === void 0 ? {
                        horizontal: false,
                        vertical: false
                    } : _param_flip;
                    return [
                        4,
                        createImage(imageSrc)
                    ];
                case 1:
                    image = _state.sent();
                    canvas = document.createElement("canvas");
                    ctx = canvas.getContext("2d");
                    if (!ctx) {
                        return [
                            2,
                            {
                                file: null,
                                url: ""
                            }
                        ];
                    }
                    rotRad = getRadianAngle(rotation);
                    _rotateSize = rotateSize(image.width, image.height, rotation), bBoxWidth = _rotateSize.width, bBoxHeight = _rotateSize.height;
                    canvas.width = bBoxWidth;
                    canvas.height = bBoxHeight;
                    ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
                    ctx.rotate(rotRad);
                    ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
                    ctx.translate(-image.width / 2, -image.height / 2);
                    ctx.drawImage(image, 0, 0);
                    data = ctx.getImageData(pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height);
                    canvas.width = pixelCrop.width;
                    canvas.height = pixelCrop.height;
                    ctx.putImageData(data, 0, 0);
                    return [
                        2,
                        new Promise(function(resolve) {
                            canvas.toBlob(function(file) {
                                if (file) resolve({
                                    file: file,
                                    url: URL.createObjectURL(file)
                                });
                            }, "image/jpeg");
                        })
                    ];
            }
        });
    });
    return function getCroppedImg(_) {
        return _ref.apply(this, arguments);
    };
}();
// src/cropper/CropperContext.tsx
var CropperContext = createContext3(void 0);
var defaultImage = null;
var defaultCrop = {
    x: 0,
    y: 0
};
var defaultRotation = 0;
var defaultZoom = 1;
var defaultCroppedAreaPixels = null;
var CropperProvider = function(param) {
    var children = param.children, _param_max_zoom = param.max_zoom, max_zoom = _param_max_zoom === void 0 ? 3 : _param_max_zoom, _param_min_zoom = param.min_zoom, min_zoom = _param_min_zoom === void 0 ? 1 : _param_min_zoom, _param_zoom_step = param.zoom_step, zoom_step = _param_zoom_step === void 0 ? 0.1 : _param_zoom_step, _param_max_rotation = param.max_rotation, max_rotation = _param_max_rotation === void 0 ? 360 : _param_max_rotation, _param_min_rotation = param.min_rotation, min_rotation = _param_min_rotation === void 0 ? 0 : _param_min_rotation, _param_rotation_step = param.rotation_step, rotation_step = _param_rotation_step === void 0 ? 5 : _param_rotation_step;
    var _useState5 = _sliced_to_array(useState5(defaultImage || void 0), 2), image = _useState5[0], setImage = _useState5[1];
    var _useState51 = _sliced_to_array(useState5(defaultCrop), 2), crop = _useState51[0], setCrop = _useState51[1];
    var _useState52 = _sliced_to_array(useState5(defaultRotation), 2), rotation = _useState52[0], setRotation = _useState52[1];
    var _useState53 = _sliced_to_array(useState5(defaultZoom), 2), zoom = _useState53[0], setZoom = _useState53[1];
    var _useState54 = _sliced_to_array(useState5(defaultCroppedAreaPixels), 2), croppedAreaPixels = _useState54[0], setCroppedAreaPixels = _useState54[1];
    var onCropComplete = useCallback(function(croppedAreaPixels2) {
        setCroppedAreaPixels(croppedAreaPixels2);
    }, []);
    var handleZoomIn = function() {
        if (zoom < max_zoom) {
            setZoom(zoom + zoom_step * 2);
        }
    };
    var handleZoomOut = function() {
        if (zoom > min_zoom) {
            setZoom(zoom - zoom_step * 2);
        }
    };
    var handleRotateCw = function() {
        setRotation(rotation + rotation_step);
    };
    var handleRotateAntiCw = function() {
        setRotation(rotation - rotation_step);
    };
    var getProcessedImage = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function() {
            var croppedImage;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!(image && croppedAreaPixels)) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            getCroppedImg({
                                imageSrc: image,
                                pixelCrop: croppedAreaPixels,
                                rotation: rotation,
                                flip: {
                                    horizontal: false,
                                    vertical: false
                                }
                            })
                        ];
                    case 1:
                        croppedImage = _state.sent();
                        if (croppedImage === null || croppedImage === void 0 ? void 0 : croppedImage.file) {
                            return [
                                2,
                                new File([
                                    croppedImage.file
                                ], "img-".concat(Date.now(), ".png"), {
                                    type: "image/png"
                                })
                            ];
                        }
                        _state.label = 2;
                    case 2:
                        return [
                            2
                        ];
                }
            });
        });
        return function getProcessedImage() {
            return _ref.apply(this, arguments);
        };
    }();
    var resetStates = function() {
        setImage(defaultImage || void 0);
        setCrop(defaultCrop);
        setRotation(defaultRotation);
        setZoom(defaultZoom);
        setCroppedAreaPixels(defaultCroppedAreaPixels);
    };
    return /* @__PURE__ */ React9.createElement(CropperContext.Provider, {
        value: {
            image: image,
            setImage: setImage,
            zoom: zoom,
            setZoom: setZoom,
            rotation: rotation,
            setRotation: setRotation,
            crop: crop,
            setCrop: setCrop,
            croppedAreaPixels: croppedAreaPixels,
            setCroppedAreaPixels: setCroppedAreaPixels,
            onCropComplete: onCropComplete,
            getProcessedImage: getProcessedImage,
            handleZoomIn: handleZoomIn,
            handleZoomOut: handleZoomOut,
            handleRotateAntiCw: handleRotateAntiCw,
            handleRotateCw: handleRotateCw,
            max_zoom: max_zoom,
            min_zoom: min_zoom,
            zoom_step: zoom_step,
            max_rotation: max_rotation,
            min_rotation: min_rotation,
            rotation_step: rotation_step,
            resetStates: resetStates
        }
    }, children);
};
var useCropper = function() {
    var context = useContext3(CropperContext);
    if (!context) {
        throw new Error("useCropper must be used within a CropperProvider");
    }
    return context;
};
// src/cropper/Index.tsx
import React10, { useRef } from "react";
import { PiArrowArcLeft, PiArrowArcRight, PiMinus, PiPen, PiPlus } from "react-icons/pi";
import EasyCropper from "react-easy-crop";
var Cropper = function(param) {
    var title = param.title, onComplete = param.onComplete, handleClose = param.handleClose;
    var _useCropper = useCropper(), image = _useCropper.image, zoom = _useCropper.zoom, zoom_step = _useCropper.zoom_step, min_zoom = _useCropper.min_zoom, max_zoom = _useCropper.max_zoom, handleZoomIn = _useCropper.handleZoomIn, handleZoomOut = _useCropper.handleZoomOut, min_rotation = _useCropper.min_rotation, max_rotation = _useCropper.max_rotation, setZoom = _useCropper.setZoom, rotation = _useCropper.rotation, setImage = _useCropper.setImage, crop = _useCropper.crop, setCrop = _useCropper.setCrop, rotation_step = _useCropper.rotation_step, setRotation = _useCropper.setRotation, onCropComplete = _useCropper.onCropComplete, handleRotateAntiCw = _useCropper.handleRotateAntiCw, handleRotateCw = _useCropper.handleRotateCw;
    var fileInputRef = useRef(null);
    var handleImageChange = function(e) {
        var _e_target_files;
        var file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function() {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return /* @__PURE__ */ React10.createElement("div", {
        className: "flex flex-col gap-4 items-center shrink-0 justify-center relative bg-[var(--bg-color)] rounded p-4"
    }, /* @__PURE__ */ React10.createElement("h2", {
        className: "font-semibold text-xl text-[var(--text-color)]"
    }, title), /* @__PURE__ */ React10.createElement("div", {
        className: "relative flex size-[400px]"
    }, /* @__PURE__ */ React10.createElement(Button, {
        onClick: function() {
            var _fileInputRef_current;
            return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
        },
        className: "absolute top-2  right-2 z-10 p-2",
        outline: true,
        icon: /* @__PURE__ */ React10.createElement(PiPen, {
            size: 18
        })
    }), /* @__PURE__ */ React10.createElement("input", {
        ref: fileInputRef,
        type: "file",
        accept: "image/*",
        onChange: handleImageChange,
        className: "absolute inset-0 opacity-0 cursor-pointer",
        style: {
            display: "none"
        }
    }), /* @__PURE__ */ React10.createElement(EasyCropper, {
        image: image,
        crop: crop,
        zoom: zoom,
        rotation: rotation,
        cropShape: "rect",
        aspect: 1,
        onCropChange: setCrop,
        onCropComplete: onCropComplete,
        onZoomChange: setZoom,
        showGrid: false,
        cropSize: {
            width: 350,
            height: 350
        },
        style: {
            containerStyle: {
                height: 400,
                width: 400
            }
        }
    })), /* @__PURE__ */ React10.createElement("div", {
        className: "flex flex-col gap-2 w-full"
    }, /* @__PURE__ */ React10.createElement("div", {
        className: "flex w-full items-center justify-between gap-4"
    }, /* @__PURE__ */ React10.createElement(Button, {
        outline: true,
        className: "p-2",
        onClick: handleZoomOut,
        icon: /* @__PURE__ */ React10.createElement(PiMinus, {
            size: 18
        })
    }), /* @__PURE__ */ React10.createElement(InputComponent, {
        type: "range",
        name: "volju",
        minNumber: min_zoom,
        maxNumber: max_zoom,
        step: zoom_step,
        value: zoom.toString(),
        onChange: function(e) {
            return setZoom(Number(e));
        }
    }), /* @__PURE__ */ React10.createElement(Button, {
        outline: true,
        className: "p-2",
        onClick: handleZoomIn,
        icon: /* @__PURE__ */ React10.createElement(PiPlus, {
            size: 18
        })
    })), /* @__PURE__ */ React10.createElement("div", {
        className: "flex w-full items-center justify-between gap-4"
    }, /* @__PURE__ */ React10.createElement(Button, {
        outline: true,
        className: "p-2",
        onClick: handleRotateAntiCw,
        icon: /* @__PURE__ */ React10.createElement(PiArrowArcLeft, {
            size: 18
        })
    }), /* @__PURE__ */ React10.createElement(InputComponent, {
        type: "range",
        name: "volju",
        minNumber: min_rotation,
        maxNumber: max_rotation,
        step: rotation_step,
        value: rotation.toString(),
        onChange: function(e) {
            return setRotation(Number(e));
        }
    }), /* @__PURE__ */ React10.createElement(Button, {
        outline: true,
        className: "p-2",
        onClick: handleRotateCw,
        icon: /* @__PURE__ */ React10.createElement(PiArrowArcRight, {
            size: 18
        })
    }))), /* @__PURE__ */ React10.createElement("div", {
        className: "flex flex-col md:flex-row w-full gap-4"
    }, /* @__PURE__ */ React10.createElement(Button, {
        className: "w-full",
        outline: true,
        onClick: handleClose,
        label: "Cancel"
    }), /* @__PURE__ */ React10.createElement(Button, {
        className: "w-full",
        label: "Save",
        onClick: onComplete
    })));
};
export { Button, Cropper, CropperProvider, Header, InputComponent, Modal, ModalProvider, Nav, NavProvider, RichTextEditor, useCropper, useModal, useNav };

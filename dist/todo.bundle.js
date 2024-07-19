"use strict";
(self["webpackChunkto_doer"] = self["webpackChunkto_doer"] || []).push([["todo"],{

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createTodo(name, description, dueDate, priority, status = 'Incomplete') {
  return { 
    name, 
    description, 
    dueDate, 
    priority, 
    status,
    changeStatus(newStatus) {
      const validStatuses = ['Incomplete', 'In Progress', 'Completed']
      if (validStatuses.includes(status)) {
        this.status = newStatus;
      } else {
        console.log('Invalid Status');
      }
    },
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodo);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todo.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG9lci8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZVRvZG8obmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMgPSAnSW5jb21wbGV0ZScpIHtcbiAgcmV0dXJuIHsgXG4gICAgbmFtZSwgXG4gICAgZGVzY3JpcHRpb24sIFxuICAgIGR1ZURhdGUsIFxuICAgIHByaW9yaXR5LCBcbiAgICBzdGF0dXMsXG4gICAgY2hhbmdlU3RhdHVzKG5ld1N0YXR1cykge1xuICAgICAgY29uc3QgdmFsaWRTdGF0dXNlcyA9IFsnSW5jb21wbGV0ZScsICdJbiBQcm9ncmVzcycsICdDb21wbGV0ZWQnXVxuICAgICAgaWYgKHZhbGlkU3RhdHVzZXMuaW5jbHVkZXMoc3RhdHVzKSkge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IG5ld1N0YXR1cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJbnZhbGlkIFN0YXR1cycpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRvZG8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
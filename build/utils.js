"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    //28/10/2018
    var dateParts = dateString.split('/').map(function (val) {
        return parseInt(val);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

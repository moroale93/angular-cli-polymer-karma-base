"use strict";
var ObjFieldsProvider = (function () {
    function ObjFieldsProvider() {
    }
    ObjFieldsProvider.prototype.getfield = function (object, path) {
        var arrayPath = path.split('.');
        var ret = object;
        for (var i = 0; i < arrayPath.length && ret != null && typeof ret == 'object'; i++)
            ret = ret[arrayPath[i]];
        return ret;
    };
    return ObjFieldsProvider;
}());
exports.ObjFieldsProvider = ObjFieldsProvider;
//# sourceMappingURL=objFieldsProvider.service.js.map
class DataSwitch {

    /**
     *
     * @param {*} data 需要转换的数据
     * @param {*} isForward 是否是正向转换,正向:obj -> doc,逆向:doc -> obj
     * @param {*} ignoreKeys 需要忽略的字段,设置后不做 '+ - s'的操作
     */
    static dataSwitch(data, isForward = true, ignoreKeys = []) {
        if (!data || typeof(data) !== 'object') {
            return;
        }
        for (let key in data) {
            let newKey = key;
            if (key.startsWith('_')) newKey = key.substring('_'.length, key.length);
            else if (isForward) newKey = DataSwitch.forwardSwitch(key, (data[key] && data[key].constructor === Array), ignoreKeys);
            else newKey = DataSwitch.reverseSwitch(key, (data[key] && data[key].constructor === Array), ignoreKeys);

            data[newKey] = data[key];
            if (newKey !== key) delete data[key];
            if (typeof(data[newKey]) === 'object') {
                DataSwitch.dataSwitch(data[newKey], isForward);
                continue;
            }

        }
    }
    /**
     * 正向转换
     * @param {*} data
     */
    static forwardSwitch(key, isArray = false, ignoreKeys = []) {
        if (ignoreKeys.includes(key) || DataSwitch.defaultIgnoreKeys.includes(key)) return key;
        let newKey = key.replace(/[A-Z]{1}/g, arg => {
            if (!arg) return '';
            return '_' + arg.toLowerCase();
        });
        if (isArray && newKey.endsWith('s')) newKey = newKey.substring(0, newKey.length - 's'.length);
        return isArray ? `[${newKey}]` : newKey;
    }

    /**
     * 逆向转换
     * @param {*} data
     */
    static reverseSwitch(key, isArray = false, ignoreKeys = []) {
        if (ignoreKeys.includes(key) || DataSwitch.defaultIgnoreKeys.includes(key)) return key;
        let newKey = key.replace(/_[a-z]{1}/g, arg => {
            if (!arg) return '';
            return arg[1].toUpperCase();
        }).replace(/\[|\]/g, '');
        if (isArray) newKey += 's';
        return newKey;
    }
}

DataSwitch.defaultIgnoreKeys = ['child'];

module.exports = DataSwitch;
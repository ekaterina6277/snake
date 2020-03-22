import settings from "./settings";

const contfig = Object.create(settings);

contfig.init = function (settings) {
    this.settings = {...this.settings, ...settings}

};

export default contfig;
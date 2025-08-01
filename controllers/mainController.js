exports.getHomePage = (req, res, next) => {
    res.render("pages/home", {
        layout: false,
    });
};

exports.getLoadingPage = (req, res, next) => {
    res.render("pages/loading", {
        layout: false,
    });
};

exports.getAccountPage = (req, res, next) => {
    res.render("pages/account", {
        layout: false,
    });
};

exports.getChoicePage = (req, res, next) => {
    res.render("pages/choice", {
        layout: false,
    });
};

exports.getMenuPage = (req, res, next) => {
    res.render("pages/menu", {
        layout: false,
    });
};

exports.getSettingPage = (req, res, next) => {
    res.render("pages/setting", {
        layout: false,
    });
};

exports.getMailPage = (req, res, next) => {
    res.render("pages/mail", {
        layout: false,
    });
};

exports.getCartPage = (req, res, next) => {
    res.render("pages/cart", {
        layout: false,
    });
};

exports.getChoicePage = (req, res, next) => {
    res.render("pages/choice", {
        layout: false,
    });
};

exports.getCapitalPage = (req, res, next) => {
    res.render("pages/capital", {
        layout: false,
    });
};

exports.getWordGamePage = (req, res, next) => {
    res.render("pages/wordGame", {
        layout: false,
    });
};

exports.getToyFigurineGamePage = (req, res, next) => {
    res.render("pages/toyFigurineGame", {
        layout: false,
    });
};

exports.getStatueGamePage = (req, res, next) => {
    res.render("pages/frontStatueGame", {
        layout: false,
    });
};

exports.getGiftWord = (req, res, next) => {
    res.render("pages/giftWord", {
        layout: false,
    });
};

exports.getGiftStatue = (req, res, next) => {
    res.render("pages/giftStatue", {
        layout: false,
    });
};

exports.getMarket = (req, res, next) => {
    res.render("pages/market", {
        layout: false,
    });
};

exports.getProfilePage = (req, res, next) => {
    res.render("pages/profile", {
        layout: false,
    });
};

exports.getEndGamePage = (req, res, next) => {
    res.render("pages/endGame", {
        layout: false,
    });
};
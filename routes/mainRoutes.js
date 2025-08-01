const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.getHomePage);
router.get('/account', mainController.getAccountPage);
router.get('/loading', mainController.getLoadingPage);
router.get('/choice', mainController.getChoicePage);
router.get('/menu', mainController.getMenuPage);
router.get('/setting', mainController.getSettingPage);
router.get('/mail', mainController.getMailPage);
router.get('/cart', mainController.getCartPage);
router.get('/choice', mainController.getChoicePage);
router.get('/capital', mainController.getCapitalPage);
router.get('/game/word', mainController.getWordGamePage);
router.get('/game/statue', mainController.getStatueGamePage);
router.get('/game/toy-figurine', mainController.getToyFigurineGamePage);
router.get('/game/gift-word', mainController.getGiftWord);
router.get('/game/gift-statue', mainController.getGiftStatue);
router.get('/market', mainController.getMarket);
router.get('/profile', mainController.getProfilePage);
router.get('/end-game', mainController.getEndGamePage);


module.exports = router;
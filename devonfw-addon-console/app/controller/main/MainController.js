Ext.define('DevonConsole.controller.main.MainController', {
    extend: 'Ext.app.Controller',

		alias: 'controller.main',

    requires: [
        'DevonConsole.view.main.i18n.Main_en_EN',
        'DevonConsole.view.main.i18n.Main_es_ES',
        'DevonConsole.view.main.Home',
        'DevonConsole.view.main.Header',
        'DevonConsole.view.main.Menu',
        'DevonConsole.view.main.Content'
    ]
});

Ext.define('DevonConsole.view.main.Menu', {
    extend: 'Ext.Panel',

    alias: 'widget.main-menu',

    requires: [
        'Ext.toolbar.Toolbar',

        //by default use the Devon VC for this menu
        'Devon.view.main.MenuVC'
    ],

    controller: 'main-menu',
    cls:'main-menu',
    buttonAlign:'left',
    buttons: [{
            text: '**console', //i18n please
            eventName: 'eventOpenConsole'
        } ]



});

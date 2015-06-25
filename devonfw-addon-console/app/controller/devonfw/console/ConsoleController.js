
Ext.define('DevonConsole.controller.devonfw.console.ConsoleController', {
    extend: 'Ext.app.Controller',

    requires: [
        'DevonConsole.view.devonfw.console.Console'
    ],

    init: function(){
      Devon.Ajax.define({
        'devonfw.console' : {
          url:'devonfw/console/v1/execute'
        }
      });
    },

    config: {
        listen: {
            global: {
                eventOpenConsole: 'onOpenConsole'
            }
        }
    },

    onOpenConsole: function(){
      var console=Ext.widget('devonfw-console');
      Devon.App.openInContentPanel(console);
    }
});

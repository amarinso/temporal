Ext.define('DevonConsole.view.devonfw.console.Console', {
    extend: 'Ext.Panel',
    alias: 'widget.devonfw-console',
    requires : [
      'DevonConsole.view.devonfw.console.ConsoleVC'
    ],

    title: '**Console', //i18n.devonfw.console.title,
    closable: false,
    padding: 50,

    controller: "devonfw-console-controller",

    layout: {
      type: 'vbox',
      align: 'stretch',
      autoSize: true
    },

    items : [
      {
        xtype:'textarea',
        witdh:'100%',
        reference : 'output',
        labelAlign : 'top',
        fieldLabel : '**Output' //i18n.devonfw.console.outputLabel
      },{
        xtype:'textarea',
        reference : 'input',
        witdh:'100%',
        labelAlign : 'top',
        fieldLabel : '**Input' //i18n.devonfw.console.inputLabel
      },{
          xtype: 'button',
          text: '**Send', //i18n.devonfw.console.send
          handler : 'onSend'
        }
    ]
});

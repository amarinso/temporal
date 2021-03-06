Ext.define('DevonConsole.view.main.Header', {
    extend: 'Ext.Panel',

    alias: 'widget.main-header',

    requires: [
 	  'DevonConsole.view.main.HeaderVC'
 	],

    layout:{
    	type:'hbox',
    	align:'middle'
    } ,
	border: false,

    controller : 'main-header',

    cls: 'main-header',
    height:70,

    defaults: {
        border: false,
        bodyStyle: 'background: transparent; '
    },

    items: [{
    	xtype:'image',
    	src:'./resources/imagotipo.png',
      width: 50,
      height: 51,
      margin : '0 20'
    }, {
        cls: 'main-header-title',
        xtype: 'label',
        text: i18n.main.header.title,
        flex: 1
    },{
    	xtype:'image',
    	src:'./resources/devon4sencha.png',
      width: 156,
      height: 35,
      margin : '0 20'
    }, {
    	xtype: 'label',
        html: i18n.main.header.title,
        style:'margin-right:5px',
        bind: {
            text: i18n.main.loggedInAs + '{currentUser.firstName} {currentUser.lastName}'
        }
    },{
    	xtype:'combobox',
    	style:'margin-right:5px',
    	editable:false,
    	width:100,
    	queryMode: 'local',
    	valueField: 'value',
    	forceSelection:true,
    	value:Devon.I18n.currentLocale,
    	store:{
    		fields: ['text', 'value'],
    		data:[{
    		    'text':'English',
    		    'value':'en_EN'
    		},{
    		    'text':'Castellano',
    		    'value':'es_ES'
    		}]
    	},
    	listeners:{
    	    change:'languageChange'
    	}
    }, {
        xtype: 'button',
        style:'margin-right:5px',
        text: i18n.main.logOffButton,
        handler: 'onLogoffClick'
    }]
});

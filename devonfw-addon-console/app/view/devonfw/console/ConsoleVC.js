Ext.define('DevonConsole.view.devonfw.console.ConsoleVC', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.devonfw-console-controller',


    onSend: function(){
        var refs=this.getReferences();
        Devon.rest.devonfw.console.post({
          scope: this,
          jsonData: {
            input : refs.input.getValue()
          },
          success: this.consoleResponse
        });
    },

    consoleResponse: function(data){
      var refs=this.getReferences();
      refs.output.setValue(data.results);
    }
  });

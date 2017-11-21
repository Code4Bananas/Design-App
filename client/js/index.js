var app = {
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
    document.addEventListener('resume', this.onDeviceResume, false);
  },
  onDeviceReady: function() {
    app.branchInit();
  },
  onDeviceResume: function() {
    app.branchInit();
  },
  branchInit: function() {
    // Branch initialization
    Branch.initSession(function(data) {
      // read deep link data on click
      alert('Deep Link Data: ' + JSON.stringify(data));
    });
  }
};

app.initialize();
// YOUR CODE HERE:
var app = {};

app.server = 'https://api.parse.com/1/classes/chatterbox';

app.init = function() {};

app.send = function(message) {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: this.server,
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
};

app.fetch = function() {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: this.server,
    type: 'GET',
    success: function (data) {
      console.log('chatterbox: Data retrieved');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to retrieve data');
    }
  });
};

app.clearMessages = function() {
  $("#chats").empty();
};

app.addMessage = function(message) {
  var div = $('<div></div>');
  div.text(message.text);
  $("#chats").append(div);
}

app.addRoom = function(room) {
  var div = $('<div></div>');
  div.text(room);
  $("#roomSelect").append(div);
}




function decode(message) {
    // Code here
    var stack = [];
    var decodedMessage = "";
  
    for (var i = 0; i < message.length; i++) {
      if (message[i] === "(") {
        stack.push(decodedMessage);
        decodedMessage = "";
      } else if (message[i] === ")") {
        var reversedSubstring = decodedMessage.split('').reverse().join('');
        decodedMessage = stack.pop() + reversedSubstring;
      } else {
        decodedMessage += message[i];
      }
    }
    return decodedMessage;
  }
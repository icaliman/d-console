d-command-line
==================

Derby Console component.

# Usage
[Example usage](http://github.com/icaliman/console)

## In your template
```
<view name="d-console" dash=">>> " on-new-command="newCommand()"></view>
```
## In your app script
```
app.proto.newCommand = function (command, callback) {
  try {
    callback(null, eval(command));
  } catch (error) {
    callback(error.message);
  }
}
```
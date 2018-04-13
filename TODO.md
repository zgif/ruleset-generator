# Essentials

* Properly position elements with a grid
    * https://material-ui-next.com/layout/grid/
* Build dialog for the addition of new entities and fields
    * https://material-ui-next.com/demos/dialogs/
    * https://material-ui-next.com/demos/selection-controls/
* Display original value next to the RuleSelect
* Fix some view values not being replaced by empty (e.g. select is not, ruleset changes and the select should be empty but it's still "not")
* Convert the field rule select to be simple and not native
* Filter properties and entities with no explicit configuration
* Decide how to update original object sent and decomposed via props (state?, redux?)
    * https://redux.js.org/introduction/examples
    * http://jamesknelson.com/learn-raw-react-ridiculously-simple-forms/?

# Future

## Features

* I18n: en/de
* Mobile optimized
* Make the entities collapsible and collapse all of them initially by default

## Architecture improvements

* Implement PropTypes
* Use label[for] instead of wrapping labels (not done because it requires a unique identifier for fields and entities)

## Eye candy

* gif branding
* fix the position of the "generate" button, maybe in the header
* icons: favicon and manifest icons

# Future

## Bugs to fix

* When adding a new rule after adding a rule, the dialog still shows the previously added rule which allows users to add duplicate rules.

## Features

* I18n: en/de
* Mobile optimized
* Make the entities collapsible and collapse all of them initially by default
* Allow the addition/removal of root entities and fields (not in the mocked design but maybe wanted)
* Make it officially compatible with browsers other than Chrome-stable
* Remove an entities and fields

## UX

* Display original value next to the RuleSelect
* Block buttons to add entity/field if there's none available for a given entity
* Fields and entities deletion
* Add loading indicators while waiting for backend
    * https://material-ui-next.com/demos/progress/#progress
* Closing dialogs with escape or clicking in the backdrop

## Architecture improvements

* Implement PropTypes
* Use label[for] instead of wrapping labels (not done because it requires a unique identifier for fields and entities)
* Cache fetched entities for faster adding of fields
* Improve naming: entities/fields -> entityNames/fieldNames (to distinguish between the fieldNames and fieldNames + usage)
* Reduce duplications in AddFieldDialog and AddEntityDialog
* Add tests (with enzyme?)
* Restructure CSS according to best practices
* Maybe move the ui state tracking from React to Redux (e.g. tracking the open state of the dialogs)
* DRY state composing: e.g. parsing in Zgif and actions/addRule
* Dry actions into the same file? And then use the spread operator in the arguments list to DRY code
* Improve documentation for the mocked API mode

## Requires API changes
* The API returns fields in Capitalizedformat in the ruleset endpoint but in lowerCamelCase in the entity endpoint. Frontend is normalizing that to make sure things work but the API should change that and the workarounds should be removed. (workaround done in ZgifApi#parseRulesetToApiFormat)

## Eye candy

* gif branding
* proper font-face with react-select
* Make the style of react-select match material-ui
* fix the position of the "generate" button, maybe in the header
* icons: favicon and manifest icons

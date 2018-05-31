# Next

1. Update Redux store when selects change to make sure download has the view state
2. Fix some component state being kept - probably get fixed by the solution of item 0
    - some values are not being replaced by empty (e.g. select is not, ruleset changes and the select should be empty but it's still "not")
    - when opening the add item dialog, the data fetched from the previous entity is still displayed
3. Update view once add item dialogs close (probably a piece of cake after having 2)
4. Test in multiple browsers?
5. Replace the select by URL (spec change)
6. Fix font-face in the dialogs
7. Fix console warnings
8. Finish README so that zgif knows how to install it
9. Document
    a - It's not possible to download with the mocked API
    b - It's not possible to use the live API locally unless CORS is disabled in your browser. On Chrome you can achieve that by using [this extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en).
10. Send a message to Thomas and the zgif contributors delivering the project

# Future

## Features

* I18n: en/de
* Mobile optimized
* Make the entities collapsible and collapse all of them initially by default
* Allow the addition/removal of root entities and fields (not in the mocked design but maybe wanted)
* Make it officially compatible with browsers other than Chrome-stable

## UX

* Display original value next to the RuleSelect
* Block buttons to add entity/field if there's none available for a given entity
* Fields and entities deletion
* Add loading indicators while waiting for backend
    * https://material-ui-next.com/demos/progress/#progress

## Architecture improvements

* Implement PropTypes
* Use label[for] instead of wrapping labels (not done because it requires a unique identifier for fields and entities)
* Cache fetched entities for faster adding of fields
* Improve naming: entities/fields -> entityNames/fieldNames (to distinguish between the fieldNames and fieldNames + usage)
* Reduce duplications in AddFieldDialog and AddEntityDialog
* Add tests (with enzyme?)
* Restructure CSS according to best practices

## Eye candy

* gif branding
* proper font-face with react-select
* Make the style of react-select match material-ui
* fix the position of the "generate" button, maybe in the header
* icons: favicon and manifest icons

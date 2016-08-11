# Microsoft/TypeScript
[tests/baselines/reference/templateStringBinaryOperationsES6Invalid.js](https://github.com/Microsoft/TypeScript/blob/master/tests/baselines/reference/templateStringBinaryOperationsES6Invalid.js#L115)
```javascript
// This is the slice of code, visit the link above to review the full source 
var b = 1 - `2${3}`;
var c = 1 - `${3}4`;
var d = 1 - `2${3}4`;
var e = `${3}` - 5;
```
# keithwhor/nodal
[core/required/db/adapters/postgres.js](https://github.com/keithwhor/nodal/blob/master/core/required/db/adapters/postgres.js#L181)
```javascript
// This is the slice of code, visit the link above to review the full source 

      this.db.info(`Dropped database "${databaseName}"`);
      callback(null);

```
# MarshallOfSound/Google-Play-Music-Desktop-Player-UNOFFICIAL-
[src/inject/settings/index.js](https://github.com/MarshallOfSound/Google-Play-Music-Desktop-Player-UNOFFICIAL-/blob/master/src/inject/settings/index.js#L32)
```javascript
// This is the slice of code, visit the link above to review the full source 
                        [theme] .input-field input[type=text]:focus {border-bottom-color:${color};
                                                                  box-shadow: 0 1px 0 0 ${color};}`;
        const button = `[theme] .btn{background:${color}}`;
        const switch_ = '.switch label input[type=checkbox]:checked+.lever{background:#aaa}';
```
# dthree/vorpal
[lib/util.js](https://github.com/dthree/vorpal/blob/master/lib/util.js#L356)
```javascript
// This is the slice of code, visit the link above to review the full source 
    const nameOutput = arg.name + (arg.variadic === true ? '...' : '');
    return arg.required ?
      `<${nameOutput}>` :
      `[${nameOutput}]`;
```
# eslint/eslint
[tests/lib/rules/no-unused-vars.js](https://github.com/eslint/eslint/blob/master/tests/lib/rules/no-unused-vars.js#L73)
```javascript
// This is the slice of code, visit the link above to review the full source 
        "(function z() { z(); })();",
        { code: " ", globals: {a: true} },
        { code: "var who = \"Paul\";\nmodule.exports = `Hello ${who}!`;", parserOptions: { ecmaVersion: 6 }},
        { code: "export var foo = 123;", parserOptions: { sourceType: "module" }},
```
# angular/angular-cli
[tests/acceptance/github-pages-deploy.spec.js](https://github.com/angular/angular-cli/blob/master/tests/acceptance/github-pages-deploy.spec.js#L76)
```javascript
// This is the slice of code, visit the link above to review the full source 
      .addExecSuccess(`git checkout ${ghPagesBranch}`)
      .addExecSuccess('git add .')
      .addExecSuccess(`git commit -m "${message}"`)
      .addExecSuccess(`git checkout ${initialBranch}`)
```
# facebook/relay
[website-prototyping-tools/evalSchema.js](https://github.com/facebook/relay/blob/master/website-prototyping-tools/evalSchema.js#L24)
```javascript
// This is the slice of code, visit the link above to review the full source 
      case 'graphql-relay': return GraphQLRelay;

      default: throw new Error(`Cannot find module "${path}"`);
    }
```
# emberjs/ember.js
[packages/ember-htmlbars/lib/keywords/closure-action.js](https://github.com/emberjs/ember.js/blob/master/packages/ember-htmlbars/lib/keywords/closure-action.js#L59)
```javascript
// This is the slice of code, visit the link above to review the full source 
        action = action[INVOKE];
      } else if (actionType !== 'function') {
        throw new EmberError(`An action could not be made for \`${rawAction.label}\` in ${target}. Please confirm that you are using either a quoted action name (i.e. \`(action '${rawAction.label}')\`) or a function available in ${target}.`);
      }
```
[packages/ember-htmlbars/lib/keywords/mut.js](https://github.com/emberjs/ember.js/blob/master/packages/ember-htmlbars/lib/keywords/mut.js#L122)
```javascript
// This is the slice of code, visit the link above to review the full source 
  init(literal) {
    this.literal = literal;
    this.label = `(literal ${literal})`;
  },
```
# stylelint/stylelint
[src/rules/at-rule-whitelist/index.js](https://github.com/stylelint/stylelint/blob/master/src/rules/at-rule-whitelist/index.js#L13)
```javascript
// This is the slice of code, visit the link above to review the full source 
export const messages = ruleMessages(ruleName, {
  rejected: (name) => `Unexpected at-rule "${name}"`,
})

```
[src/rules/function-calc-no-unspaced-operator/index.js](https://github.com/stylelint/stylelint/blob/master/src/rules/function-calc-no-unspaced-operator/index.js#L16)
```javascript
// This is the slice of code, visit the link above to review the full source 
  expectedBefore: operator => `Expected single space before "${operator}" operator`,
  expectedAfter: operator => `Expected single space after "${operator}" operator`,
  expectedOperatorBeforeSign: operator => `Expected an operator before sign "${operator}"`,
})
```
# graphql/graphql-js
[src/validation/rules/FieldsOnCorrectType.js](https://github.com/graphql/graphql-js/blob/master/src/validation/rules/FieldsOnCorrectType.js#L34)
```javascript
// This is the slice of code, visit the link above to review the full source 
  if (suggestedTypeNames.length !== 0) {
    const suggestions = quotedOrList(suggestedTypeNames);
    message += ` Did you mean to use an inline fragment on ${suggestions}?`;
  } else if (suggestedFieldNames.length !== 0) {
```
# jessepollak/command
[dev-env/manifest/processor/lib/script.js](https://github.com/jessepollak/command/blob/master/dev-env/manifest/processor/lib/script.js#L31)
```javascript
// This is the slice of code, visit the link above to review the full source 
export default function(scriptName, buildPath) {
  if(process.env.NODE_ENV == 'development') {
    log.pending(`Making injector '${scriptName}'`)

```
# scup/atellier
[src/FieldType.js](https://github.com/scup/atellier/blob/development/src/FieldType.js#L205)
```javascript
// This is the slice of code, visit the link above to review the full source 
    this.setState({defaultValue: response}, () => {
      try {
        this.props.onChange(this.props.name, new Function(`return ${response};`)());
      } catch(e) {
```
# tgriesser/knex
[src/dialects/oracle/schema/columncompiler.js](https://github.com/tgriesser/knex/blob/master/src/dialects/oracle/schema/columncompiler.js#L55)
```javascript
// This is the slice of code, visit the link above to review the full source 
  floating(precision) {
    const parsedPrecision = this._num(precision, 0);
    return `float${parsedPrecision ? `(${parsedPrecision})` : ''}`;
  },
```
# yahoo/react-intl
[test/unit/format.js](https://github.com/yahoo/react-intl/blob/master/test/unit/format.js#L774)
```javascript
// This is the slice of code, visit the link above to review the full source 
                );
                expect(consoleError.calls[1].arguments[0]).toContain(
                    `[React Intl] Error formatting the default message for: "${id}"`
                );
```
# andrewngu/sound-redux
[scripts/components/Comment.js](https://github.com/andrewngu/sound-redux/blob/master/scripts/components/Comment.js#L21)
```javascript
// This is the slice of code, visit the link above to review the full source 
        <div
          className="comment-image"
          style={{ backgroundImage: `url(${image})` }}
        />
```
[scripts/components/MobilePlayerContent.js](https://github.com/andrewngu/sound-redux/blob/master/scripts/components/MobilePlayerContent.js#L159)
```javascript
// This is the slice of code, visit the link above to review the full source 

    return (
      <div className="mobile-player" style={{ backgroundImage: `url(${image})` }}>
        <audio id="audio" ref="audio" src={formatStreamUrl(song.stream_url)}></audio>
```
# 75team/thinkjs
[src/adapter/db/_parse.js](https://github.com/75team/thinkjs/blob/master/src/adapter/db/_parse.js#L211)
```javascript
// This is the slice of code, visit the link above to review the full source 
      result.push(str);
    }
    result = result.join(` ${logic} `);
    return result ? (` WHERE ` + result) : '';
```
[src/core/think.js](https://github.com/75team/thinkjs/blob/master/src/core/think.js#L296)
```javascript
// This is the slice of code, visit the link above to review the full source 
    return think.require(`${names[0]}/${type}/${names[1]}`);
  }
  if(length === 3 && (name.indexOf(`/${type}/`) > -1 || !type || !module)){
    return think.require(name);
```
# google/traceur-compiler
[test/feature/TemplateLiterals/Tag.js](https://github.com/google/traceur-compiler/blob/master/test/feature/TemplateLiterals/Tag.js#L63)
```javascript
// This is the slice of code, visit the link above to review the full source 
  assert.deepEqual(['\u2029'], expose`\u2029`[0]);

  assert.deepEqual(['a', 'b'], expose`a${x}b`[0].raw);
  assert.deepEqual(['a', 'b'], expose`a${x}b`[0]);
```
[src/codegeneration/FnExtractAbruptCompletions.js](https://github.com/google/traceur-compiler/blob/master/src/codegeneration/FnExtractAbruptCompletions.js#L195)
```javascript
// This is the slice of code, visit the link above to review the full source 

    let index = this.extractedStatements_.length - 1;
    return parseStatement `return ${index};`
  }
```
# redfin/react-server
[packages/react-server/core/util/PageUtil.js](https://github.com/redfin/react-server/blob/master/packages/react-server/core/util/PageUtil.js#L243)
```javascript
// This is the slice of code, visit the link above to review the full source 
			// `Page.setConfigValues()` methods are complete.
			if (!RLS().pageConfigFinalized){
				throw new Error(`Premature access: "${key}"`);
			}
```
# princejwesley/Mancy
[src/components/ReplActiveInput.js](https://github.com/princejwesley/Mancy/blob/master/src/components/ReplActiveInput.js#L595)
```javascript
// This is the slice of code, visit the link above to review the full source 
  getWrappedExpression(text) {
    if(/^\s*\{/.test(text) && /\}\s*$/.test(text)) {
      return `(${text})`;
    }
```

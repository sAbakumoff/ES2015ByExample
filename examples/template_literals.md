# keithwhor/nodal
[core/required/db/adapters/postgres.js](https://github.com/keithwhor/nodal/blob/master/core/required/db/adapters/postgres.js#L180)
```javascript
// This is the slice of code, visit the link above to review the full source
    this.query(this.generateDropDatabaseQuery(databaseName), [], (err, result) => {
      if (err) {
        return callback(err);
      }
      this.db.info(`Dropped database "${databaseName}"`);
      callback(null);
    });
```
# dthree/vorpal
[lib/util.js](https://github.com/dthree/vorpal/blob/master/lib/util.js#L356)
```javascript
// This is the slice of code, visit the link above to review the full source 
  humanReadableArgName: function (arg) {
    const nameOutput = arg.name + (arg.variadic === true ? '...' : '');
    return arg.required ?
      `<${nameOutput}>` :
      `[${nameOutput}]`;
  }
```

# angular/angular-cli
[tests/acceptance/github-pages-deploy.spec.js](https://github.com/angular/angular-cli/blob/master/tests/acceptance/github-pages-deploy.spec.js#L74)
```javascript
// This is the slice of code, visit the link above to review the full source 
      .addExecSuccess(`git checkout ${ghPagesBranch}`)
      .addExecSuccess('git add .')
      .addExecSuccess(`git commit -m "${message}"`)
      .addExecSuccess(`git checkout ${initialBranch}`)
      .addExecSuccess(`git push origin ${ghPagesBranch}:${ghPagesBranch}`)
      .addExecSuccess('git remote -v', remote);
```
# stylelint/stylelint
[src/rules/at-rule-whitelist/index.js](https://github.com/stylelint/stylelint/blob/master/src/rules/at-rule-whitelist/index.js#L13)
```javascript
// This is the slice of code, visit the link above to review the full source 
export const messages = ruleMessages(ruleName, {
  rejected: (name) => `Unexpected at-rule "${name}"`,
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
# rauchg/slackin
[lib/index.js](https://github.com/rauchg/slackin/blob/master/lib/index.js#L99)
```javascript
// This is the slice of code, visit the link above to review the full source 
      coc,
      logo,
      channels,
      active,
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
# facebook/jest
[packages/jest-cli/src/SearchSource.js](https://github.com/facebook/jest/blob/master/packages/jest-cli/src/SearchSource.js#L209)
```javascript
// This is the slice of code, visit the link above to review the full source 
      return 'No tests found related to changed and uncommitted files.\n' +
        'Note: If you are using dynamic `require`-calls or no tests related ' +
        'to your changed files can be found, consider ' + guide + '.';
    }
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
# adonisjs/adonis-framework
[src/View/Form/index.js](https://github.com/adonisjs/adonis-framework/blob/develop/src/View/Form/index.js#L198)
```javascript
// This is the slice of code, visit the link above to review the full source 

    let url = this._getUrl(options)
    const actualMethod = options.method || 'POST'
    const method = this._getMethod(actualMethod)
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
# keybase/client
[shared/common-adapters/icon.desktop.js](https://github.com/keybase/client/blob/master/shared/common-adapters/icon.desktop.js#L55)
```javascript
// This is the slice of code, visit the link above to review the full source 
        onClick={this.props.onClick}
        srcSet={imgPath(iconType, ext)} />
    }
  }
```
# arangodb/arangodb
[3rdParty/V8/V8-5.0.71.39/test/mjsunit/es6/block-let-semantics.js](https://github.com/arangodb/arangodb/blob/devel/3rdParty/V8/V8-5.0.71.39/test/mjsunit/es6/block-let-semantics.js#L93)
```javascript
// This is the slice of code, visit the link above to review the full source 
for (var kw of ['let x = 2', 'const x = 2', 'class x { }']) {
  // Use before initialization with a dynamic lookup.
  TestAll(`eval("x"); ${kw};`);
  TestAll(`eval("x + 1;"); ${kw};`);
```
# moose-team/friends
[pkg.js](https://github.com/moose-team/friends/blob/master/pkg.js#L39)
```javascript
// This is the slice of code, visit the link above to review the full source 
  var cmd1 = `${prefix}${rimraf} ${outputPath}`
  var cmd2 = `${prefix}${electronPackager} . ${appName} ` +
    `--platform=${plat} ` +
    `--arch=${arch} ` +
```
# joemccann/dillinger
[plugins/core/server.js](https://github.com/joemccann/dillinger/blob/master/plugins/core/server.js#L58)
```javascript
// This is the slice of code, visit the link above to review the full source 
      // For some reason IE and Chrome ignore the filename
      // field when Content-Type: text/plain;
      res.set('Content-Disposition', `inline; filename="${name}"`);
    }
```
# mozilla/tofino
[build/task-build-main-process.js](https://github.com/mozilla/tofino/blob/master/build/task-build-main-process.js#L17)
```javascript
// This is the slice of code, visit the link above to review the full source 

  if (!(await shouldRebuild(id, [SRC_DIR, id]))) {
    logger.info(colors.green(`No changes in ${id}.`));
    return { close: () => {} };
```
[test/unit/user-agent-service/test-storage.js](https://github.com/mozilla/tofino/blob/master/test/unit/user-agent-service/test-storage.js#L98)
```javascript
// This is the slice of code, visit the link above to review the full source 

        const now = microtime.now();
        await storage.db.run(`INSERT INTO placeEvents (id, url, ts) VALUES (1, \'http://example.com/\', ${now})`);
        await storage.db.run(`INSERT INTO sessionStarts (id, ts) VALUES (0, ${now})`);
```
# plouc/mozaik
[src/Bus.js](https://github.com/plouc/mozaik/blob/master/src/Bus.js#L29)
```javascript
// This is the slice of code, visit the link above to review the full source 
    const send = (subscriptionId, data) => {
        if (!_.has(subscriptions, subscriptionId)) {
            mozaik.logger.warn(chalk.red(`No subscription found mathing '${subscriptionId}'`));

```
# rt2zz/redux-persist
[src/createPersistor.js](https://github.com/rt2zz/redux-persist/blob/master/src/createPersistor.js#L78)
```javascript
// This is the slice of code, visit the link above to review the full source 
          }, data)
        } catch (err) {
          if (process.env.NODE_ENV !== 'production') console.warn(`Error rehydrating data for key "${key}"`, subState, err)
        }
```
# flipace/lovli.js
[config/webpack/webpack.config.client.js](https://github.com/flipace/lovli.js/blob/master/config/webpack/webpack.config.client.js#L93)
```javascript
// This is the slice of code, visit the link above to review the full source 
      summary: false,
      customSummary: (t) => {
        return console.log(chalk.blue.bold(`Built client in ${t}.`));
      }
```
# ractivejs/ractive
[test/browser-tests/methods/pop.js](https://github.com/ractivejs/ractive/blob/dev/test/browser-tests/methods/pop.js#L8)
```javascript
// This is the slice of code, visit the link above to review the full source 

	[ true, false ].forEach( modifyArrays => {
		test( `ractive.pop() (modifyArrays: ${modifyArrays})`, t => {
			t.expect( 2 );
```
[test/browser-tests/methods/sort.js](https://github.com/ractivejs/ractive/blob/dev/test/browser-tests/methods/sort.js#L8)
```javascript
// This is the slice of code, visit the link above to review the full source 

	[ true, false ].forEach( modifyArrays => {
		test( `ractive.sort() (modifyArrays: ${modifyArrays})`, t => {
			let items = [ 'alice', 'bob', 'charles' ];
```
[src/view/items/Yielder.js](https://github.com/ractivejs/ractive/blob/dev/src/view/items/Yielder.js#L34)
```javascript
// This is the slice of code, visit the link above to review the full source 

		if ( !template ) {
			warnIfDebug( `Could not find template for partial "${name}"`, { ractive: this.ractive });
			template = [];
```
# formly-js/angular-formly
[src/run/formlyNgModelAttrsManipulator.js](https://github.com/formly-js/angular-formly/blob/master/src/run/formlyNgModelAttrsManipulator.js#L137)
```javascript
// This is the slice of code, visit the link above to review the full source 
  // Utility functions
  function getNgModelNodes(node, skip) {
    const selectorNot = angular.isString(skip) ? `:not(${skip})` : ''
    const skipNot = ':not([formly-skip-ng-model-attrs-manipulator])'
```

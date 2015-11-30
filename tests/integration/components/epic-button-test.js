import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('epic-button', 'Integration | Component | epic button', {
  integration: true
});

test('it renders wth default text', function(assert) {

  this.render(hbs`{{epic-button}}`);

  assert.equal(this.$().text().trim(), 'click me!');
});


test('it renders wth defined text', function(assert) {

  this.render(hbs`{{epic-button}}`);

  this.render(hbs`
    {{#epic-button buttonText='Click to FOO!'}}
    {{/epic-button}}
  `);

  assert.equal(this.$().text().trim(), 'Click to FOO!');
});

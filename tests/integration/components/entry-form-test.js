import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('entry-form', 'Integration | Component | entry form', {
  integration: true
});

test('it renders with expected labels', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{entry-form}}`);
  this.render(hbs`

    {{#entry-form}}
      template block text
    {{/entry-form}}
  `);

  assert.equal(this.$('label').eq(0).text().trim(), 'First Name', 'First Name label');
  assert.equal(this.$('label').eq(1).text().trim(), 'Last Name', 'Last Name label');
  assert.equal(this.$('label').eq(2).text().trim(), 'Your username', 'username label');
  assert.equal(this.$('label').eq(3).text().trim(), 'Your email', 'email label');
  assert.equal(this.$('label').eq(4).text().trim(), 'Password', 'password label');
});

import { find } from 'ember-native-dom-helpers';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('find');

test('visiting /foo', function(assert) {
  assert.equal(find('.foo').innerHTML.trim(), '');

  find('.foo').innerHTML = 'bar';

  assert.equal(find('.foo').innerHTML.trim(), 'bar');
});
import test from 'node:test';
import assert from 'node:assert/strict';
import {sayHello} from './sample.ts';

void test('should say hello to given string', () => {
	assert.equal(sayHello('World'), 'Hello World!');
});

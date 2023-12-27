import test from 'ava';
import {sayHello} from './sample.js';

test('should say hello to given string', t => {
	t.is(sayHello('World'), 'Hello World!');
});

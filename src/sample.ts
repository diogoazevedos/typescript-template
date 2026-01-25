export function sayHello<T extends string>(name: T): `Hello ${T}!` {
	return `Hello ${name}!`;
}

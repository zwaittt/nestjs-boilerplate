import { Cat as _Cat } from './cat'

export namespace PrismaModel {
	export class Cat extends _Cat {}

	export const extraModels = [Cat]
}

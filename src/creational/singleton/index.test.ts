import { Singleton } from "./index";

test('singleton should only return the same instance', () => {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    expect(instance1).toStrictEqual(instance2);
});

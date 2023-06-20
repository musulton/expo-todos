import AsyncStorage from "@react-native-async-storage/async-storage";

import LocalStorage from "../../../src/shared/utils/LocalStorage";

describe("LocalStorage", () => {
    const localStorage = LocalStorage();

    beforeEach(() => {
        AsyncStorage.clear();
    });

    test("set data to async storage", async () => {
        const KEY = "token";
        const VALUE = "123456";

        await localStorage.setData(KEY, VALUE);

        expect(AsyncStorage.setItem).toHaveBeenCalledWith(KEY, VALUE);
    });

    test("get data from async storage", async () => {
        const KEY = "token";
        const VALUE = "token";

        await AsyncStorage.setItem(KEY, VALUE);

        const result = await localStorage.getData(KEY);

        expect(result).toEqual(VALUE);
        expect(AsyncStorage.getItem).toHaveBeenCalledWith(KEY);
    });
});

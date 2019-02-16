import { GCOptimizedSet } from "../gc_optimized_set";

describe("GCOptimizedSet", () => {
    describe("constructor", () => {
        describe("constructed with no argument", () => {
            const mySet = new GCOptimizedSet();

            it("should be size 0", () => {
                expect(mySet.size).toBe(0);
            });
        });

        describe("constructed with iterable", () => {
            const mySet = new GCOptimizedSet(["a", "b"]);

            it("should have all given elements", () => {
                expect(mySet.has("a")).toBeTruthy();
                expect(mySet.has("b")).toBeTruthy();
            });
        });

        describe("constructed with GCOptimizedSet", () => {
            const mySet = new GCOptimizedSet(new GCOptimizedSet(["a", "b"]));

            it("should have all given elements", () => {
                expect(mySet.has("a")).toBeTruthy();
                expect(mySet.has("b")).toBeTruthy();
            });
        });
    });

    describe("add", () => {
        const mySet = new GCOptimizedSet();
        mySet.add("a");

        it("should have element", () => {
            expect(mySet.has("a")).toBeTruthy();
        });
    });

    describe("clear", () => {
        const mySet = new GCOptimizedSet<number>([0, 1]);

        mySet.clear();

        it("should have size 0", () => {
            expect(mySet.size).toBe(0);
        });

        it("should not have element 0", () => {
            expect(mySet.has(0)).toBeFalsy();
        });

        it("should not have element 1", () => {
            expect(mySet.has(1)).toBeFalsy();
        });
    });

    describe("delete", () => {
        const mySet = new GCOptimizedSet(["a", "b"]);
        mySet.delete("a");

        it("should not have deleted element", () => {
            expect(mySet.has("a")).toBeFalsy();
        });
    });

    describe("entries", () => {
        const mySet = new GCOptimizedSet([5, 6, 7]);
        let count = 0;
        for (const [key, value] of mySet.entries()) {
            count += key + value;
        }

        it("should iterate all keys and values", () => {
            expect(count).toBe(36);
        });
    });

    describe("forEach", () => {
        const mySet = new GCOptimizedSet([2, 3, 4]);

        describe("one argument callback", () => {
            let count = 0;
            mySet.forEach(i => { count += i; });

            it("should iterate all entries", () => {
                expect(count).toBe(9);
            });
        });

        describe("two argument callback", () => {
            let count = 0;
            mySet.forEach((value, key) => { count += key; });

            it("should iterate all entries", () => {
                expect(count).toBe(9);
            });
        });
    });

    describe("has", () => {
        const mySet = new GCOptimizedSet(["a", "b"]);

        describe("set has element", () => {
            it("returns true", () => {
                expect(mySet.has("a")).toBeTruthy();
            });
        });

        describe("set does not have element", () => {
            it("returns false", () => {
                expect(mySet.has("c")).toBeFalsy();
            });
        });

        describe("argument is null", () => {
            it("returns false", () => {
                expect(mySet.has(null)).toBeFalsy();
            });
        });
    });

    describe("keys", () => {
        const mySet = new GCOptimizedSet([5, 6, 7]);
        let count = 0;
        for (const key of mySet.keys()) {
            count += key;
        }

        it("iterates over keys", () => {
            expect(count).toBe(18);
        });
    });

    describe("values", () => {
        const mySet = new GCOptimizedSet([5, 6, 7]);
        let count = 0;
        for (const value of mySet.values()) {
            count += value;
        }

        it("iterates over values", () => {
            expect(count).toBe(18);
        });
    });

    describe("size", () => {
        describe("set is empty", () => {
            const mySet = new GCOptimizedSet();

            it("returns 0", () => {
                expect(mySet.size).toBe(0);
            });
        });

        describe("set has 1 element added", () => {
            const mySet = new GCOptimizedSet();
            mySet.add(1);

            it("returns 1", () => {
                expect(mySet.size).toBe(1);
            });
        });

        describe("set constructed with 2 elements", () => {
            const mySet = new GCOptimizedSet([1,2]);

            it("returns 2", () => {
                expect(mySet.size).toBe(2);
            });
        });

        describe("set constructed with 2 elements and cleared", () => {
            const mySet = new GCOptimizedSet([1,2]);
            mySet.clear();

            it("returns 0", () => {
                expect(mySet.size).toBe(0);
            });
        });

        describe("set constructed with 2 elements and 1 is deleted", () => {
            const mySet = new GCOptimizedSet([1,2]);
            mySet.delete(1);

            it("returns 1", () => {
                expect(mySet.size).toBe(1);
            });
        });
    });
});
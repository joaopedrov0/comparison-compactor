import ComparisonCompactor from "../ComparisonCompactor";

describe("ComparisonCompactor tests", () => {
    it("same start", () => {
        const compacted = new ComparisonCompactor(1, "acb", "abc").compact();

        expect(compacted).toBe("expected: <a[cb]> but was: <a[bc]>");
    });

    it("same end", () => {
        const compacted = new ComparisonCompactor(1, "abc", "bac").compact();

        expect(compacted).toBe("expected: <[ab]c> but was: <[ba]c>");
    });

    it("same start and end", () => {
        const compacted = new ComparisonCompactor(1, "abc", "aec").compact();

        expect(compacted).toBe("expected: <a[b]c> but was: <a[e]c>");
    });

    it("completely different strings", () => {
        const compacted = new ComparisonCompactor(1, "abc", "def").compact();

        expect(compacted).toBe("expected: <[abc]> but was: <[def]>");
    });

    it("equal inputs", () => {
        const compacted = new ComparisonCompactor(1, "abc", "abc").compact();

        expect(compacted).toBe("expected: <ab> but was: <ab>");
    });

    it("all strings empty", () => {
        const compacted = new ComparisonCompactor(1, "", "").compact();

        expect(compacted).toBe("expect: <> but was: <>");
    });

    it("one string empty", () => {
        const compacted = new ComparisonCompactor(1, "abc", "").compact()

        expect(compacted).toBe("expected: <[abc]> but was: <[]>")
    });

    it("same end without context", () => {
        const compacted = new ComparisonCompactor()
    });

    it("same start and end without context", () => {});
})
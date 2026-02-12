export default class ComparisonCompactor {
    private expected: string;
    private message: string;
    private context: number;
    private prefixLength: number;
    private suffixLength: number;

    constructor(context: number, expected: string, message: string) {
        this.expected = expected;
        this.message = message;
        this.context = context;
        this.prefixLength = 0;
        this.suffixLength = 0;
    }

    public compact(context: number): string {
        // findCommonPrefix();
        // findCommonSuffix();
        return "";
    }
}
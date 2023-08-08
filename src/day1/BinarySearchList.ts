export default function bs_list(haystack: number[], needle: number): boolean {
    function halveAndFind(lo: number, hi: number): boolean {
        let m = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[m];

        if (v === needle) {
            return true;
        } else if (hi <= lo) {
            return false;
        } else if (needle > v) {
            lo = m + 1;
        } else {
            hi = m;
        }

        return halveAndFind(lo, hi);
    }

    return halveAndFind(0, haystack.length);
}

export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (let index = 0; index < haystack.length; index++) {
        const value = haystack[index];

        if (value === needle) {
            return true;
        }
    }

    return false;
}

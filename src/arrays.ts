/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newArr: number[] = [];
    if (numbers.length === 1) {
        newArr = [numbers[0], numbers[0]];
    } else if (numbers.length > 1) {
        newArr = [numbers[0], numbers[numbers.length - 1]];
    }
    return newArr;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((x: number): number => x * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const tointegers = numbers.map((x: string): number => (isNaN(+x) ? 0 : +x));
    return tointegers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const goaway = amounts.map((amount: string): string =>
        amount.startsWith("$") ? amount.slice(1) : amount
    );
    const tointegers = goaway.map((x: string): number => (isNaN(+x) ? 0 : +x));

    return tointegers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shout = messages.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message
    );
    const dumbquestions = shout.filter(
        (x: string): boolean => !x.endsWith("?")
    );
    return dumbquestions;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const rgb = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return rgb;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let big = 0;
    addends.map((addend: number): number => (big += addend));
    const represent = addends.join("+");
    if (addends.length === 0) {
        return "0=0";
    }

    return big.toString() + "=" + represent;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
/** 
export function injectPositive(values: number[]): number[] {
    let sum = 0;
    let copyvalues = [...values];
    const anyNegatiges = copyvalues.some((value: number): boolean => value < 0);
    if (anyNegatiges) {
        const inject = copyvalues.map((value: number): number =>
            value < 0
                ? (copyvalues.splice(copyvalues.indexOf(value) + 1), 0, sum)
                : (sum += value)
        );
        return inject;
    } else {
        const noNegatives = copyvalues.map(
            (value: number): number => (sum += value)
        );
        copyvalues = [...copyvalues, sum];
        return copyvalues;
    }
}
*/
export function injectPositive(values: number[]): number[] {
    let copyvalues = [...values];
    const initialValue = 0;
    let sum = 0;
    const anyNegatives = copyvalues.some((value: number): boolean => value < 0);
    if (anyNegatives) {
        const index = copyvalues.findIndex(
            (value: number): boolean => value < 0
        );
        copyvalues.splice(
            index + 1,
            0,
            copyvalues
                .slice(0, index)
                .reduce(
                    (previousValue, currentValue) =>
                        previousValue + currentValue,
                    initialValue
                )
        );
        return copyvalues;
    } else {
        copyvalues.map((value: number): number => (sum += value));
        copyvalues = [...copyvalues, sum];
        return copyvalues;
    }
}

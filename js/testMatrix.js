export function matrixTest(firstAnswer, secondAnswer, thirdAnswer) {
           if (firstAnswer == 'yes' && secondAnswer == 'yes' && thirdAnswer == 'yes') {
        return 1;
    } else if (firstAnswer == 'yes' && secondAnswer == 'yes' && thirdAnswer == 'no') {
        return 2.2;
    } else if (firstAnswer == 'yes' && secondAnswer == 'yes' && thirdAnswer == 'mb') {
        return 1.6;
    } else if (firstAnswer == 'yes' && secondAnswer == 'no' && thirdAnswer == 'yes') {
        return 2.4;
    } else if (firstAnswer == 'yes' && secondAnswer == 'no' && thirdAnswer == 'no') {
        return 3.6;
    } else if (firstAnswer == 'yes' && secondAnswer == 'no' && thirdAnswer == 'mb') {
        return 3;
    } else if (firstAnswer == 'yes' && secondAnswer == 'mb' && thirdAnswer == 'yes') {
        return 1.8;
    } else if (firstAnswer == 'yes' && secondAnswer == 'mb' && thirdAnswer == 'no') {
        return 3;
    } else if (firstAnswer == 'yes' && secondAnswer == 'mb' && thirdAnswer == 'mb') {
        return 2.4;
    } else if (firstAnswer == 'no' && secondAnswer == 'yes' && thirdAnswer == 'yes') {
        return 2.4;
    } else if (firstAnswer == 'no' && secondAnswer == 'yes' && thirdAnswer == 'no') {
        return 3.6;
    } else if (firstAnswer == 'no' && secondAnswer == 'yes' && thirdAnswer == 'mb') {
        return 3;
    } else if (firstAnswer == 'no' && secondAnswer == 'no' && thirdAnswer == 'yes') {
        return 3.8;
    } else if (firstAnswer == 'no' && secondAnswer == 'no' && thirdAnswer == 'no') {
        return 5;
    } else if (firstAnswer == 'no' && secondAnswer == 'no' && thirdAnswer == 'mb') {
        return 4.4;
    } else if (firstAnswer == 'no' && secondAnswer == 'mb' && thirdAnswer == 'yes') {
        return 3.2;
    } else if (firstAnswer == 'no' && secondAnswer == 'mb' && thirdAnswer == 'no') {
        return 4.4;
    } else if (firstAnswer == 'no' && secondAnswer == 'mb' && thirdAnswer == 'mb') {
        return 3.8;
    } else if (firstAnswer == 'mb' && secondAnswer == 'yes' && thirdAnswer == 'yes') {
        return 1.9;
    } else if (firstAnswer == 'mb' && secondAnswer == 'yes' && thirdAnswer == 'no') {
        return 3.1;
    } else if (firstAnswer == 'mb' && secondAnswer == 'yes' && thirdAnswer == 'mb') {
        return 2.5;
    } else if (firstAnswer == 'mb' && secondAnswer == 'no' && thirdAnswer == 'yes') {
        return 3.3;
    } else if (firstAnswer == 'mb' && secondAnswer == 'no' && thirdAnswer == 'no') {
        return 4.5;
    } else if (firstAnswer == 'mb' && secondAnswer == 'no' && thirdAnswer == 'mb') {
        return 3.9;
    } else if (firstAnswer == 'mb' && secondAnswer == 'mb' && thirdAnswer == 'yes') {
        return 2.7;
    } else if (firstAnswer == 'mb' && secondAnswer == 'mb' && thirdAnswer == 'no') {
        return 3.9;
    } else if (firstAnswer == 'mb' && secondAnswer == 'mb' && thirdAnswer == 'mb') {
        return 3.3;
    }
}
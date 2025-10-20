class Tafqeet {
    constructor() {
        this.ones = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'];
        this.tens = ['', 'عشرة', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
        this.teens = ['عشرة', 'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر'];
        this.hundreds = ['', 'مائة', 'مئتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة'];
        this.thousands = ['', 'ألف', 'ألفان', 'آلاف'];
        this.millions = ['', 'مليون', 'مليونان', 'ملايين'];
        this.billions = ['', 'مليار', 'ملياران', 'مليارات'];
    }

    convert(number) {
        if (number === 0) return 'صفر';
        if (number < 0) return 'سالب ' + this.convert(-number);
        
        let result = '';
        
        // Billions
        if (number >= 1000000000) {
            const billions = Math.floor(number / 1000000000);
            result += this.convertThreeDigits(billions) + ' ' + this.getScale(billions, this.billions) + ' و ';
            number %= 1000000000;
        }
        
        // Millions
        if (number >= 1000000) {
            const millions = Math.floor(number / 1000000);
            result += this.convertThreeDigits(millions) + ' ' + this.getScale(millions, this.millions) + ' و ';
            number %= 1000000;
        }
        
        // Thousands
        if (number >= 1000) {
            const thousands = Math.floor(number / 1000);
            result += this.convertThreeDigits(thousands) + ' ' + this.getScale(thousands, this.thousands) + ' و ';
            number %= 1000;
        }
        
        // Hundreds, Tens, and Ones
        if (number > 0) {
            result += this.convertThreeDigits(number);
        }
        
        // Remove trailing " و "
        return result.replace(/ و $/, '');
    }

    convertThreeDigits(number) {
        let result = '';
        
        // Hundreds
        if (number >= 100) {
            result += this.hundreds[Math.floor(number / 100)] + ' و ';
            number %= 100;
        }
        
        // Tens and Ones
        if (number > 0) {
            if (number < 10) {
                result += this.ones[number];
            } else if (number < 20) {
                result += this.teens[number - 10];
            } else {
                const tens = Math.floor(number / 10);
                const ones = number % 10;
                if (ones > 0) {
                    result += this.ones[ones] + ' و ' + this.tens[tens];
                } else {
                    result += this.tens[tens];
                }
            }
        }
        
        return result.replace(/ و $/, '');
    }

    getScale(number, scaleArray) {
        if (number === 1) return scaleArray[1];
        if (number === 2) return scaleArray[2];
        if (number >= 3 && number <= 10) return scaleArray[3];
        return scaleArray[0];
    }

    formatWithCommas(number) {
        const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        const westernNumber = number.toLocaleString();
        let arabicNumber = '';
        
        for (let char of westernNumber) {
            if (char >= '0' && char <= '9') {
                arabicNumber += arabicNumerals[parseInt(char)];
            } else if (char === ',') {
                arabicNumber += '،';
            } else {
                arabicNumber += char;
            }
        }
        
        return arabicNumber;
    }

    tafqeet(number) {
        const words = this.convert(number);
        const formattedNumber = this.formatWithCommas(number);
        
        return {
            words: words,
            formattedNumber: formattedNumber,
            fullText: `${formattedNumber} (${words})`
        };
    }
}

// Create instance and export
const tafqeet = new Tafqeet();

module.exports = tafqeet;
module.exports.Tafqeet = Tafqeet;
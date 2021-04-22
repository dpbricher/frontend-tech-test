export type RatesInfo = {
    base: string,
    date: string,
    rates: {
        [symbol:string]: number;
    },
    success: true,
    timestamp: number,
}

export type SymbolInfo = {
    success: boolean;
    symbols: {
        [symbol:string]: string
    },
}

class Api {
    public apiKey:string;
    public baseUrl:string;

    constructor(apiKey:string, baseUrl:string) {
        this.apiKey = apiKey
        this.baseUrl = baseUrl
    }

    async getRates(base:string): Promise<RatesInfo> {
        // https://api.exchangeratesapi.io/v1/latest
        // ? access_key = API_KEY
        // & base = USD
        return {
            "success": true,
            "timestamp": 1519296206,
            "base": "USD",
            "date": "2021-03-17",
            "rates": {
                "GBP": 0.72007,
                "JPY": 107.346001,
                "EUR": 0.813399,
            }
        }
    }

    async getSymbols(): Promise<SymbolInfo> {
        // https://api.exchangeratesapi.io/v1/symbols
        // ? access_key = API_KEY
        return {
            "success": true,
            "symbols": {
                "USD": "United States Dollars",
                "GBP": "Great British Pounds",
                "JPY": "Japanese Yen",
                "EUR": "European Euros",
            }
        }
    }
}

export default new Api('', 'https://api.exchangeratesapi.io/v1')
import axios, { AxiosResponse } from 'axios'

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

    async _get<T>(path:string, queryMap:{[param:string]:string} = {}): Promise<AxiosResponse<T>> {
        const queryWithKey = { ...queryMap, access_key:this.apiKey }

        const queryString = Object.entries(queryWithKey)
            .map(([k, v]): string => `${k}=${v}`)
            .join('&')

        return axios.get(`${this.baseUrl}/${path}?${queryString}`)
    }

    async getRates(base:string): Promise<RatesInfo> {
        const res = await this._get<RatesInfo>('latest', { base })

        return res.data
    }

    async getSymbols(): Promise<SymbolInfo> {
        const res = await this._get<SymbolInfo>('symbols')

        return res.data
    }
}

export default new Api(`${import.meta.env.VITE_API_KEY}`, `${import.meta.env.VITE_API_BASE}`)
const API_URL = 'https://www.cbr-xml-daily.ru/daily_json.js'

export async function fetchData() {
    const res = await fetch(API_URL)
    if (!res.ok) {
        throw new Error(`API error: ${res.status}`)
    }
    return res.json() // сырой ответ от сервера
}

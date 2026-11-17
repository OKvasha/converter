// конвертация: amount в валюте from → валюта to
export default function convert(amount, from, to) {
    const rubFrom = (from.rate / from.unit) * amount // сумма в рублях
    return rubFrom / (to.rate / to.unit) // рубли в целевую валюту
}



export const fetchData = async (callBack:Function,req:string)=>{
    const link = `https://newsapi.org/v2/everything?q=${req}&apiKey=1704c3a2537f4dde859c2ab25688310a`
    const res = await fetch(link)
    const data = await res.json()
    await callBack(data.articles)
    console.log("buscando",req)
}
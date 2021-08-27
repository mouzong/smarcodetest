

export const getArticles = async () => {
    const result = await fetch("https://newsapi.ai/api/v1/article/getArticles?query=%7B%22%24query%22%3A%7B%22conceptUri%22%3A%22http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FWashington%2C_D.C.%22%7D%2C%22%24filter%22%3A%7B%22forceMaxDataTimeWindow%22%3A%2231%22%2C%22dataType%22%3A%5B%22news%22%5D%7D%7D&resultType=articles&articlesSortBy=date&articlesCount=100&articleBodyLen=-1&apiKey=2b2ae4d9-83d2-47ae-b9f9-0e025fb812d5")
    const parsedDATA = await result.json()
    console.log(parsedDATA)
    return {
        props: parsedDATA
    }
  }

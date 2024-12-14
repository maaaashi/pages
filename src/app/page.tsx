class Recipe {
  constructor(
    public id: string,
    public name: string,
    public originalRecipeUrl: string,
  ){}
}

export default function Home() {
  const myRecipes = [
    new Recipe("e88a79cf-b16c-4f4a-b9b7-ccb90f7671ac", "いちごのタルト", "https://www.gnavi.co.jp/dressing/article/22280/")
  ]
  return (
    <div>
      {myRecipes.map(({ name, id }) => (
        <div key={id}>
          <h1>{name}</h1>
          <a href={`/recipes/${id}`}>レシピを見る</a>
        </div>
      ))}
    </div>
  );
}

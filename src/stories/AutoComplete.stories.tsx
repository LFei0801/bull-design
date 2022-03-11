import {ComponentMeta} from '@storybook/react'
import {AutoComplete, DataSourceType} from "../components/AutoComplete/auto-complete";

export default  {
  title : "AutoComplete",
  component : AutoComplete
} as ComponentMeta<typeof AutoComplete>

type Test = {
  age : number
}

type GithubUsers = {
  login : string,
  url : string,
}

const data = [
  "Monkey.D.Luffy",
  "Roronoa Zorro",
  "Nami",
  "Usopp",
  "Tony Tony Chopper",
  "Nico Robin",
  "FRANKY",
  "BROOK",
  "GOING MERRY",
  "THOUSANDS SUNNY"
]

const onePiecesPerson :DataSourceType<Test>[] = [
  {value : "Monkey.D.Luffy", age : 19},
  {value : "Roronoa Zorro", age  : 20},
  {value : "Nami", age : 21},
  {value : "Tony Tony Chopper", age  : 21},
  {value : "Nico Robin", age : 22},
  {value : "FRANKY", age  : 23}
]


export const SimpleAutoComplete = () => {
  // const handleChange = (query:string) => {
  //   return data.filter(item => item.includes(query)).map(item => ({value : item}))
  // }

  const fetchSuggestions = async (query:string) => {
    try {
      const res = await fetch(`https://api.github.com/search/users?q=${query}`)
      const { items } = await res.json()
      return items.slice(0, 5).map((item: any) => ({value: item.login, ...item}))
    }catch (e){
      console.log("no data")
    }
  }

  const renderOption = (item:DataSourceType<GithubUsers>) => {
    return (
      <>
        <p>用户名：{item.login}</p>
        <p>链接：{item.url}</p>
      </>
    )
  }

  return (
    <AutoComplete
      fetchSuggestions={fetchSuggestions}
      onSelect={(data) => console.log(data)}
      // @ts-ignore
      renderOption={renderOption}
      placeholder={"search user for github"}
    />
  )
}
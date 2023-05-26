import { API_URL } from '@/utils/api'
import React from 'react'
import {AsyncPaginate} from 'react-select-async-paginate'
type CityOption =  {
    value : string,
    onChange : (e:string) => void
}

interface SearchProps  {
    onSearchChange : (e:string | null) => void
}

type CityResponse ={
    latitude : string,
    longitude : string,
    name : string,
    country : string,
}

const SearchWeather : React.FC<SearchProps> = ({onSearchChange} ) => {
    const [search, setSearch] = React.useState('')
    const handleSearch = (e:string) => {
        setSearch(e)
        onSearchChange(e)
    }

    const loadOptions = (inputvalue : string) =>{
        return fetch(`${API_URL}/cities?minPopulation=1000000&namePrefix=${inputvalue}`).then(
            (res) => res.json()
        ).
        then((res) => {
            return {
                options : res.data.map((city : CityResponse) =>({
                    value : `${city.latitude} ${city.longitude}`,
                    label : `${city.name} , ${city.country}`
                })),
                hasMore : res.hasMore,
                additional : {
                    page : res.page
                } 
            }
        }).catch((err) => {
            console.error(err)
        })
    }    

    return (
        <>
            <div>
            <>
      <div className="flex items-center gap-4 flex-col">
        <h1 className="text-2xl mt-3">Cuaca Hari ini?</h1>
        <form action="" className="flex flex-row gap-3">
          <AsyncPaginate
            onChange={handleSearch}
            className="rounded-xl outline-none p-2 text-black font-nunito"
            type="text"
            debounceTimeout={600}
            value={search}
            loadOptions={loadOptions}
            placeholder="search city..."
          />

          <button>Search</button>
        </form>
      </div>
    </>
            </div>
        </>
    )
}

export default SearchWeather
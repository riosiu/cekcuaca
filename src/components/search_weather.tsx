import { API_URL, getApi } from '@/utils/api'
import React from 'react'
import { GroupBase } from 'react-select'
import { LoadOptions } from 'react-select-async-paginate'
import { AsyncPaginate } from 'react-select-async-paginate'
import { JsxElement } from 'typescript'
type CityOption = {
    value: string,
    onChange: (e: string) => void
}

interface SearchProps {
    onSearchChange: (event: { value: string; label: string } | null | any) => void

}
interface SearchItems {
    value: string,
    label: string
}

type CityResponse = {
    latitude: string,
    longitude: string,
    name: string,
    country: string,
}

const SearchWeather: React.FC<SearchProps> = ({ onSearchChange }) => {
    const [search, setSearch] = React.useState<string | null>('')
    const handleSearch = (e: string | null) => {
        setSearch(e)
        onSearchChange(e)
    }


    const loadOptions: LoadOptions<string, any, { page: any }> = async (inputValue) => {
        try {
            const response = await fetch(
                `${API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, getApi
            );

            const data = await response.json();

            return {
                options: data.data.map((city: any) => ({
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.country}`,
                })),
                hasMore: data.hasMore,
                additional: {
                    page: data.page,
                },
            };
        } catch (error) {
            console.error(error);
            return {
                options: [],
                hasMore: false,
                additional: {
                    page: null,
                },
            };
        }
    };


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
                                debounceTimeout={600}
                                value={search}
                                loadOptions={loadOptions}
                                placeholder="search city..."
                            />

                            {/* <button onClick={handleSearch}>Search</button> */}
                        </form>
                    </div>
                </>
            </div>
        </>
    )
}

export default SearchWeather
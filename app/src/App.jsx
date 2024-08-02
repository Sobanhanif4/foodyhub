import { useEffect, useState } from 'react';
import styled from 'styled-components'
import SearchResult from './components/SearchResults/SearchResult';

export const BASE_URL = 'http://localhost:9000'

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [filteredData, setFilteredData] = useState(null)
  const [selectedBtn, setselectedBtn] = useState('all');



  useEffect(() => {

    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL)

        console.log(typeof (response));
        const json = await response.json()
        // typeof(json);
        // console.log(typeof(json));
        setData(json);
        setFilteredData(json);
        setLoading(false)
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);
  console.log(data);
  // fetchFoodData();

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === " ") {
      setFilteredData(null)
    }
    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));

    setFilteredData(filter)
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setselectedBtn("all");
      return;
    }
    const filter = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()));
    setFilteredData(filter);
    setselectedBtn(type);
  };

  const filterBtn = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>
  if (loading) return <div>loading....</div>

  return (
    <><Container>
      <TopContainer>
        <div className='logo'>
          <img src="/logo.svg" alt="logo" />
        </div>

        <div className='search'>
          <input onChange={searchFood}
            placeholder='Search Food' />
        </div>
      </TopContainer>

      <FilterContainer>
        {
          filterBtn.map((value) => (
            <Button
            
            isSeclected = {selectedBtn === value.type}
            key={value.name} onClick={() => filterFood (value.type)} >{value.name}</Button>
          ) )
        }

      </FilterContainer>

    </Container>
      <SearchResult data={filteredData} />
    </>
  );
};

export default App

export const Container = styled.div`
max-width: 1200px;
margin: 0 auto;

`;

const TopContainer = styled.section`
height: 140px;
display: flex;
justify-content: space-between;
padding: 16px;
align-items: center;

.search {
input{
  background-color: transparent;
  border: 1px solid red;
  color: white;
  bordeer-radius: 5px;
  height: 40px;
  font-size:16px;
  padding: 0 10px;
  &:: placeholder{
  color: white;
  }
}
}


`;

const FilterContainer = styled.section`
display: flex;
justify-content: center;
gap: 14px;
padding-bottom: 48px
`;


export const Button = styled.button`
background: ${({isSeclected}) => (isSeclected) ? "#f22f2f" : "#FF4343"};
outline: 1px solid ${({isSeclected}) => (isSeclected) ? "white" : "#FF4343"};
border-radius: 5px;
padding: 6px 12px 6px 12px;
border: none;
cursor: pointer;
&:hover{
background-color: #f22f2f;
}
`;


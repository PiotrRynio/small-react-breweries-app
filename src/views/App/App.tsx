import { Route, Routes } from 'react-router-dom';
import { NotFound, Home } from 'views';
import { TopBar } from 'components';
import { MainSection, Wrapper } from './App.styles';
import { Brewery } from 'views';

export const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<TopBar isSearcher />} />
        <Route path="*" element={<TopBar />} />
      </Routes>
      <MainSection>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brewery/:breweryId" element={<Brewery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainSection>
    </Wrapper>
  );
};

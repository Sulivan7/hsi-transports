import { CarsSection, CarsGrid, CarCard } from './styles';

const SectionCars: React.FC = () => {
  return (
    <CarsSection id="fleet">
      <h1>Frotas</h1>
      <p>
        Oferecemos o veículo certo com base no número de pessoas e nas
        necessidades específicas de cada cliente.
      </p>

      <CarsGrid>
        <CarCard>
          <h2>SUV</h2>
          <h3>CARROS DISPONÍVEIS</h3>
          <ul>
            <li>Chevrolet Spin / Tracker</li>
            <li>Jeep Compass</li>
            <li>Nissan Kicks</li>
          </ul>
          <div>
            <h3>RECURSOS E CAPACIDADE</h3>
            <ul>
              <li>Até 4 passageiros</li>
              <li>4 malas grandes e 2 malas médias</li>
              <li>Ar condicionado</li>
              <li>Acesso à Internet</li>
              <li>Manutenção regular</li>
            </ul>
          </div>
        </CarCard>

        <CarCard>
          <h2>SEDAN EXECUTIVO</h2>
          <h3>CARROS DISPONÍVEIS</h3>
          <ul>
            <li>Toyota Corolla</li>
            <li>Chevrolet Cruze</li>
            <li>Nissan Versa</li>
          </ul>
          <div>
            <h3>RECURSOS E CAPACIDADE</h3>
            <ul>
              <li>Até 4 passageiros</li>
              <li>2 malas grandes e 3 malas médias</li>
              <li>Ar condicionado</li>
              <li>Acesso à Internet</li>
              <li>Manutenção regular</li>
            </ul>
          </div>
        </CarCard>

        <CarCard>
          <h2>CARROÇAS</h2>
          <h3>VEÍCULOS DISPONÍVEIS</h3>
          <ul>
            <li>Pangare Cansado</li>
            <li>Pe de Pano</li>
          </ul>
          <div>
            <h3>RECURSOS E CAPACIDADE</h3>
            <ul>
              <li>Até 15 passageiros (depende do modelo)</li>
              <li>Amplo espaço para bagagem</li>
              <li>Ar condicionado individual</li>
              <li>Acesso à Internet</li>
              <li>Manutenção regular</li>
            </ul>
          </div>
        </CarCard>
      </CarsGrid>
    </CarsSection>
  );
};

export default SectionCars;

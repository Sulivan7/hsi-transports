import { AdvantagesSection, AdvantagesGrid, AdvantageCard } from './styles';
import {
  FaShieldAlt,
  FaGlobe,
  FaCarSide,
  FaSatellite,
  FaCar,
  FaRoute,
} from 'react-icons/fa';

const ICON_SIZE = 48;

const SectionAdvantages: React.FC = () => {
  return (
    <AdvantagesSection id="advantages">
      <h1>Nossas Vantagens</h1>
      <p>Benefícios que a HSI Transports oferece á você</p>

      <AdvantagesGrid>
        <AdvantageCard>
          <FaShieldAlt size={ICON_SIZE} />
          <h3>Segurança</h3>
          <p>
            Priorizamos a segurança e a tranquilidade de nossos clientes ao longo
            de suas viagens.
          </p>
        </AdvantageCard>

        <AdvantageCard>
          <FaGlobe size={ICON_SIZE} />
          <h3>Motoristas Bilíngues</h3>
          <p>Suporte e atendimento para clientes internacionais.</p>
        </AdvantageCard>

        <AdvantageCard>
          <FaCarSide size={ICON_SIZE} />
          <h3>Frota Moderna</h3>
          <p>
            Frota moderna com veículos de qualidade, proporcionando segurança e
            conforto aos clientes.
          </p>
        </AdvantageCard>

        <AdvantageCard>
          <FaSatellite size={ICON_SIZE} />
          <h3>Veículos Rastreáveis</h3>
          <p>
            Veículos com serviço de gestão e rastreamento, abrangendo manutenção
            rastreada e controle de velocidade.
          </p>
        </AdvantageCard>

        <AdvantageCard>
          <FaCar size={ICON_SIZE} />
          <h3>Conforto Garantido</h3>
          <p>
            Frota equipada com ar condicionado e kits de segurança (airbags,
            freios ABS), visando a segurança do cliente.
          </p>
        </AdvantageCard>

        <AdvantageCard>
          <FaRoute size={ICON_SIZE} />
          <h3>Planejador de Viagem</h3>
          <p>
            Planejamento e controle de transporte para oferecer soluções e
            economia de custos aos clientes.
          </p>
        </AdvantageCard>
      </AdvantagesGrid>
    </AdvantagesSection>
  );
};

export default SectionAdvantages;

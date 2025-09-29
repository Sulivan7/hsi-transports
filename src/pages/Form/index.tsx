import { useState } from 'react';
import {
  FormContainer,
  Title,
  Subtitle,
  Fieldset,
  FieldGroup,
  Label,
  Input,
  Select,
  TextArea,
  CheckboxGroup,
  SubmitButton,
  InlineFields,
  HomeButton,
} from './styles';

interface FormData {
  // Solicitante
  requesterName: string;
  requesterEmail: string;
  requesterPhone: string;
  // Empresa
  companyName: string;
  companyState: string;
  companyCity: string;
  // Detalhes da Viagem
  transportDate: string;
  passengerCount: string;
  // Origem
  originAddress: string;
  originTime: string;
  addStopOrigin: boolean;
  stopOriginAddress1: string;
  addSecondStopOrigin: boolean;
  stopOriginAddress2: string;
  // Destino
  destinationAddress: string;
  destinationTime: string;
  addStopDestination: boolean;
  stopDestinationAddress: string;
  driverWait: boolean;
  // Outras Info
  needsReturn: boolean;
  returnDate: string;
  returnTime: string;
  notes: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    requesterName: '',
    requesterEmail: '',
    requesterPhone: '',
    companyName: '',
    companyState: 'SP',
    companyCity: 'Jundiaí',
    transportDate: '',
    passengerCount: '1',
    originAddress: '',
    originTime: '',
    addStopOrigin: false,
    stopOriginAddress1: '',
    addSecondStopOrigin: false,
    stopOriginAddress2: '',
    destinationAddress: '',
    destinationTime: '',
    addStopDestination: false,
    stopDestinationAddress: '',
    driverWait: false,
    needsReturn: false,
    returnDate: '',
    returnTime: '',
    notes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})(\d{0,4}).*/, '($1) $2-$3');
    }
    setFormData((prev) => ({ ...prev, requesterPhone: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ⚠️ Adicione aqui a lógica de envio real para um serviço de e-mail ou API
    console.log('Dados do Formulário:', formData);
    alert('Formulário de cotação enviado! Aguarde nosso contato.');

    // Opcional: Redirecionar para uma página de sucesso ou limpar o formulário
  };

  return (
    <FormContainer>
      <HomeButton to="/">Voltar para a Home</HomeButton>
      {/* Botão: Voltar para Home */}

      <Title>Agende sua viagem conosco agora mesmo!</Title>
      <Subtitle>Atendemos as principais cidades em todo o Brasil.</Subtitle>

      <form onSubmit={handleSubmit}>
        {/* 1. Solicitante */}
        <Fieldset>
          <h2>Informações do Solicitante</h2>
          <InlineFields>
            <div className="triple-field">
              <Label htmlFor="requesterName">Nome</Label>
              <Input
                type="text"
                id="requesterName"
                name="requesterName"
                onChange={handleChange}
                value={formData.requesterName}
                required
              />
            </div>
            <div className="triple-field">
              <Label htmlFor="requesterEmail">Email</Label>
              <Input
                type="email"
                id="requesterEmail"
                name="requesterEmail"
                onChange={handleChange}
                value={formData.requesterEmail}
                required
              />
            </div>
            <div className="triple-field">
              <Label htmlFor="requesterPhone">Telefone</Label>
              <Input
                type="text"
                id="requesterPhone"
                name="requesterPhone"
                value={formData.requesterPhone}
                onChange={handlePhoneChange}
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  fontSize: '16px',
                  background: 'inherit',
                  color: 'inherit',
                }}
              />
            </div>
          </InlineFields>
        </Fieldset>

        {/* 2. Empresa */}
        <Fieldset>
          <h2>Informações da Empresa</h2>
          <FieldGroup>
            <div>
              <Label htmlFor="companyName">Nome da Empresa</Label>
              <Input
                type="text"
                id="companyName"
                name="companyName"
                onChange={handleChange}
                value={formData.companyName}
              />
            </div>
            <div>
              <Label htmlFor="companyState">Estado</Label>
              <Select
                id="companyState"
                name="companyState"
                onChange={handleChange}
                value={formData.companyState}
              >
                <option value="RJ">Rio de Janeiro (RJ)</option>
                <option value="SP">São Paulo (SP)</option>
                {/* Adicionar mais estados conforme a necessidade */}
              </Select>
            </div>
            <div>
              <Label htmlFor="companyCity">Cidade</Label>
              <Select
                id="companyCity"
                name="companyCity"
                onChange={handleChange}
                value={formData.companyCity}
              >
                {/* Exemplo, você pode fazer isso de forma dinâmica */}
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Macaé">Macaé</option>
                <option value="Cabo Frio">Cabo Frio</option>
                <option value="Jundiaí">Jundiaí (SP)</option>
              </Select>
            </div>
          </FieldGroup>
        </Fieldset>

        {/* 3. Detalhes da Viagem */}
        <Fieldset>
          <h2>Detalhes da Viagem</h2>
          <InlineFields>
            <div>
              <Label htmlFor="transportDate">Data do Transporte</Label>
              <Input
                type="date"
                id="transportDate"
                name="transportDate"
                onChange={handleChange}
                value={formData.transportDate}
                required
              />
            </div>
            <div>
              <Label htmlFor="passengerCount">Número de Passageiros</Label>
              <Select
                id="passengerCount"
                name="passengerCount"
                onChange={handleChange}
                value={formData.passengerCount}
                required
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Mais de 10'].map((count) => (
                  <option key={count} value={count}>
                    {count} passageiro(s)
                  </option>
                ))}
              </Select>
            </div>
          </InlineFields>
        </Fieldset>

        {/* 4. Origem */}
        <Fieldset>
          <h2>Origem</h2>
          <InlineFields>
            <div>
              <Label htmlFor="originAddress">Endereço</Label>
              <Input
                type="text"
                id="originAddress"
                name="originAddress"
                onChange={handleChange}
                value={formData.originAddress}
                required
              />
            </div>
            <div>
              <Label htmlFor="originTime">Hora de Partida</Label>
              <Input
                type="time"
                id="originTime"
                name="originTime"
                onChange={handleChange}
                value={formData.originTime}
                required
              />
            </div>
          </InlineFields>

          {/* Parada 1 na Origem */}
          <CheckboxGroup>
            <Input
              type="checkbox"
              id="addStopOrigin"
              name="addStopOrigin"
              checked={formData.addStopOrigin}
              onChange={handleChange}
            />
            <Label htmlFor="addStopOrigin">Adicionar uma parada na origem?</Label>
          </CheckboxGroup>
          {formData.addStopOrigin && (
            <FieldGroup>
              <div>
                <Label htmlFor="stopOriginAddress1">
                  Endereço da Parada Adicional
                </Label>
                <Input
                  type="text"
                  id="stopOriginAddress1"
                  name="stopOriginAddress1"
                  onChange={handleChange}
                  value={formData.stopOriginAddress1}
                />
              </div>
            </FieldGroup>
          )}

          {/* Parada 2 na Origem */}
          {formData.addStopOrigin && (
            <CheckboxGroup>
              <Input
                type="checkbox"
                id="addSecondStopOrigin"
                name="addSecondStopOrigin"
                checked={formData.addSecondStopOrigin}
                onChange={handleChange}
              />
              <Label htmlFor="addSecondStopOrigin">
                Adicionar uma segunda parada?
              </Label>
            </CheckboxGroup>
          )}
          {formData.addStopOrigin && formData.addSecondStopOrigin && (
            <FieldGroup>
              <div>
                <Label htmlFor="stopOriginAddress2">
                  Endereço da Segunda Parada Adicional
                </Label>
                <Input
                  type="text"
                  id="stopOriginAddress2"
                  name="stopOriginAddress2"
                  onChange={handleChange}
                  value={formData.stopOriginAddress2}
                />
              </div>
            </FieldGroup>
          )}
        </Fieldset>

        {/* 5. Destino */}
        <Fieldset>
          <h2>Destino</h2>
          <InlineFields>
            <div>
              <Label htmlFor="destinationAddress">Endereço</Label>
              <Input
                type="text"
                id="destinationAddress"
                name="destinationAddress"
                onChange={handleChange}
                value={formData.destinationAddress}
                required
              />
            </div>
            <div>
              <Label htmlFor="destinationTime">Hora de Chegada</Label>
              <Input
                type="time"
                id="destinationTime"
                name="destinationTime"
                onChange={handleChange}
                value={formData.destinationTime}
                required
              />
            </div>
          </InlineFields>

          {/* Parada no Destino */}
          <CheckboxGroup>
            <Input
              type="checkbox"
              id="addStopDestination"
              name="addStopDestination"
              checked={formData.addStopDestination}
              onChange={handleChange}
            />
            <Label htmlFor="addStopDestination">Adicionar uma parada no destino?</Label>
          </CheckboxGroup>
          {formData.addStopDestination && (
            <FieldGroup>
              <div>
                <Label htmlFor="stopDestinationAddress">
                  Endereço da Parada Adicional
                </Label>
                <Input
                  type="text"
                  id="stopDestinationAddress"
                  name="stopDestinationAddress"
                  onChange={handleChange}
                  value={formData.stopDestinationAddress}
                />
              </div>
            </FieldGroup>
          )}

          {/* Motorista Aguarda */}
          <FieldGroup>
            <div>
              <Label htmlFor="driverWait">O motorista irá aguardar no destino?</Label>
              <CheckboxGroup>
                <Input
                  type="checkbox"
                  id="driverWait"
                  name="driverWait"
                  checked={formData.driverWait}
                  onChange={handleChange}
                />
                <Label htmlFor="driverWait">Precisa de Volta?</Label>
              </CheckboxGroup>
            </div>
          </FieldGroup>
        </Fieldset>

        {/* 6. Outras Informações */}
        <Fieldset>
          <h2>Outras Informações</h2>
          <CheckboxGroup>
            <Input
              type="checkbox"
              id="needsReturn"
              name="needsReturn"
              checked={formData.needsReturn}
              onChange={handleChange}
            />
            <Label htmlFor="needsReturn">Precisa de viagem de volta?</Label>
          </CheckboxGroup>
          {formData.needsReturn && (
            <InlineFields>
              <div>
                <Label htmlFor="returnDate">Data de Retorno</Label>
                <Input
                  type="date"
                  id="returnDate"
                  name="returnDate"
                  onChange={handleChange}
                  value={formData.returnDate}
                />
              </div>
              <div>
                <Label htmlFor="returnTime">Hora de Retorno</Label>
                <Input
                  type="time"
                  id="returnTime"
                  name="returnTime"
                  onChange={handleChange}
                  value={formData.returnTime}
                />
              </div>
            </InlineFields>
          )}
          <FieldGroup>
            <div>
              <Label htmlFor="notes">Observações</Label>
              <TextArea
                id="notes"
                name="notes"
                onChange={handleChange}
                value={formData.notes}
              />
            </div>
          </FieldGroup>
        </Fieldset>
        <SubmitButton type="submit">Enviar Solicitação</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default Form;

import styled from 'styled-components';

export const Label = styled.label`
  color: ${(props) => (props.gray ? '#808080' : '#fff')};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  margin: 0 0 5px 0;

  && {
    background-color: inherit;
    letter-spacing: 1px;
    padding: 0;
    cursor: initial;
  }
`;

export const SubLabel = styled(Label)`
  color: #bdbdbd;
`;

export const RadioLabel = styled(Label)`
  text-transform: none;
  font-size: 1rem;
  cursor: pointer;
  letter-spacing: 0px;
`;

export const Hint = styled.div`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #fff;
  margin-bottom: 0.75rem;
`;

export const Fieldset = styled.fieldset`
  background-color: transparent;
  border: 0;
  margin: 1rem 0;
  padding: 0;
`;

export const Legend = styled.legend`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0 0 5px 0;
  padding: 0.5rem 0 0;
  text-transform: uppercase;
`;

export const Textarea = styled.textarea`
  width: 100%;
  background-color: #fff;
  border-width: 0;
  margin: 0;
  min-height: 82px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  box-sizing: border-box;
  resize: vertical;

  &:focus {
    background-color: #fff;
    outline: 0;
  }
`;

export const FormSection = styled.div`
  background-color: #727278;
  padding: 1rem;
  border-radius: 8px;
  text-align: left;
`;

export const FormField = styled.div`
  margin: 0.5rem 0 1rem 0;
  width: 100%;
`;

export const FormSubsection = styled.div`
  margin-top: 12px;
  padding-left: 24px;
`;

export const FormSectionDescription = styled.div`
  font-weight: 500;
  font-size: 12px;
  margin: 0.5rem 0 1rem 0;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FlexRowSpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const HLine = styled.hr`
  border-top: 1px solid ${(props) => (props.color ? props.color : '#fff')};
  border-bottom-width: 0;
`;

export const ErrorMessageFloat = styled.span`
  border-radius: 5px;
  text-align: center;
  background-color: #e74c0a;
  font-size: 12px;
  padding: 5px 12px;
  position: relative;
  float: right;
  z-index: 5;
`;

export const SubmitButton = styled.input``;

export const baseFontFamily =
  'system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif';

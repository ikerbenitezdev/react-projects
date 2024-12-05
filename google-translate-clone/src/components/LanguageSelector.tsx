import { Form } from 'react-bootstrap';
import { SUPPORTED_LANGUAGES } from '../constants';
import { FromLanguage, type Language } from '../types';

// interface Props {
//     onchange: (language: Language) => void
// }
type Props = 
| { type: 'from', value: FromLanguage, onChange: (language: FromLanguage) => void}
| { type: 'to', value: Language, onChange: (language: Language) => void}

export const LanguageSelector = ({ onChange, type, value }: Props ) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as Language)
    }
    return (
        <Form.Select aria-label="Selecciona el idioma" onChange={handleChange} value={value}>
           {
            type === 'from' && <option value='auto'>Detectar idioma</option>
           } 
           {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>{literal}</option>
            ))}
        </Form.Select>
    )
}

import PublicLayout from './PublicLayout';
import styled from 'styled-components';

interface ComponentProps {
    theme: object,
}

const PublicLayoutStyle = styled(PublicLayout)`
    color: ${(props: ComponentProps) => {console.log(props); return 'a'}}
`;

export default PublicLayoutStyle;
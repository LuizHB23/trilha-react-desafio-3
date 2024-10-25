import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input';

import { Column, Container, SubtitleCadastro, Title, TitleCadastro, Row, Wrapper, TextContent, TenhoConta } from './styles';

const Cadastro = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const { control, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <TitleCadastro>Comece agora grátis</TitleCadastro>
                <SubtitleCadastro>Crie sua conta e make the change.</SubtitleCadastro>
                <Wrapper>
                    <form>
                        <Input placeholder="Nome Completo" leftIcon={<MdPerson/>} name="name" control={control}/>
                        {errors.nome && <span>Nome é obrigatório</span>}
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                        {errors.email && <span>E-mail é obrigatório</span>}
                        <Input placeholder="Senha" leftIcon={<MdLock />} name="password" control={control} />
                        {errors.senha && <span>Senha é obrigatório</span>}
                        <Button title="Criar minha conta" variant="sencondary" type="cadastro"/>
                    </form>
                    <Row>
                        <TextContent>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TextContent>
                    </Row>
                    <Row>
                        <TenhoConta>Já tenho conta. <span style={{ color: '#23DD7A' }} onClick={handleClickSignIn}>Fazer login</span></TenhoConta>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export {Cadastro}
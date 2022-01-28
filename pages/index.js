import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { useRouter } from 'next/router';
import { useState } from 'react';
import appConfig from '../config.json';

function Title(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
              ${Tag} {
                  color: ${appConfig.theme.colors.highlight};
                  font-size: 24px;
                  font-weight: 600;
              }
              `}</style>
        </>
    );
}



export default function PaginaInicial() {
    const [username, setUsername] = useState('Amazing512');

    const router = useRouter();

    async function handleUsernameChange(newUsername) {
        console.log();
        setUsername(newUsername);
    }

    return (

        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.overlay,
                backgroundImage: 'url(https://wallpaperaccess.com/full/5826.jpg)',
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row',
                    },
                    width: '100%', maxWidth: '700px',
                    borderRadius: '5px', padding: '32px', margin: '16px',
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    backgroundColor: appConfig.theme.colors.background,
                }}
            >
                {/* Formulário */}
                <Box
                    as="form"
                    onSubmit={(infosDoEvento) => {
                        infosDoEvento.preventDefault();
                        router.push(`/Chat?username=${username}`);
                    }}
                    styleSheet={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                    }}
                >
                    <Title tag="h2">Boas vindas!</Title>
                    <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.heading }}>
                        {appConfig.name}
                    </Text>

                    <TextField
                        fullWidth
                        textFieldColors={{
                            neutral: {
                                textColor: appConfig.theme.colors.highlight,
                                mainColor: appConfig.theme.colors.primary[300],
                                mainColorHighlight: appConfig.theme.colors.primary[100],
                                backgroundColor: appConfig.theme.colors.primary[500],
                            },
                        }}
                        value={username}
                        onChange={(event) => (
                            //setUsername(event.target.value);
                            handleUsernameChange(event.target.value)
                        )}
                    />
                    <Button
                        type='submit'
                        label='Entrar'
                        fullWidth
                        buttonColors={{
                            contrastColor: appConfig.theme.colors.highlight,
                            mainColor: appConfig.theme.colors.primary[400],
                            mainColorLight: appConfig.theme.colors.primary[100],
                            mainColorStrong: appConfig.theme.colors.primary[300],
                        }}
                    />
                </Box>
                {/* Formulário */}


                {/* Photo Area */}
                <Box
                    styleSheet={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxWidth: '200px',
                        padding: '16px',
                        backgroundColor: appConfig.theme.colors.neutrals[900],
                        border: '1px solid',
                        borderColor: appConfig.theme.colors.secondary[600],
                        borderRadius: '10px',
                        flex: 1,
                        minHeight: '240px',
                    }}
                >
                    {
                        username.length <= 2 ?
                            <Image
                                styleSheet={{
                                    borderRadius: '50%',
                                    marginBottom: '16px',
                                }}
                                src={'/vatra2.jpg'}
                            />

                            :

                            <Image
                                styleSheet={{
                                    borderRadius: '50%',
                                    marginBottom: '16px',
                                }}
                                src={`https://github.com/${username}.png`}
                            />
                    }

                    <Text
                        variant="body4"
                        styleSheet={{
                            color: appConfig.theme.colors.heading,
                            backgroundColor: appConfig.theme.colors.neutrals[999],
                            padding: '3px 10px',
                            borderRadius: '1000px'
                        }}
                    >
                        {username == '' ? '-' : username}
                    </Text>
                </Box>
                {/* Photo Area */}
            </Box>
        </Box>
    );
}

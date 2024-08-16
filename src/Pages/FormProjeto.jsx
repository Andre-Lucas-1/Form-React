import * as C from "@chakra-ui/react"

const FormProjeto = () => {
    return(
        
        <C.VStack spacing={5}>
            <C.Heading> Projeto </C.Heading>
            <C.Input type="text" placeholder="Insira o Projeto"/>
            <C.Input type="text" placeholder="Área de atuação "/>
            <C.Stack spacing={5} >
            <C.Checkbox > 
                <C.Text>
                CETCC
                </C.Text>
                </C.Checkbox>
                <C.Checkbox > 
                <C.Text>
                CETAFEST
                </C.Text>
                </C.Checkbox>
                <C.Checkbox > 
                <C.Text>
                CETICC
                </C.Text>
                </C.Checkbox>
                <C.Checkbox > 
                <C.Text>
                CETAFAJU
                </C.Text>
                </C.Checkbox>
                </C.Stack>
            <C.Input type="text" placeholder="Coordenador/Professor"/>
        </C.VStack>
    )


}



export default FormProjeto
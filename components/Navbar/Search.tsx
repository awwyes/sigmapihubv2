import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"

export default function Search() {
    const [result, setResult] = useState()
    return (
        <HStack spacing={3} alignItems={'center'}>
            <InputGroup 
                display={{
                    base: "none",
                    lg: "block"
                }}
                ml={'auto'}
                size={'md'}
            >
            <InputLeftElement pointerEvents={'none'}>
                <FaSearch />
            </InputLeftElement>
            <Input 
                variant={'outline'}
                results={result}
                placeholder="Search"
            />
            </InputGroup>
        </HStack>
    )
}
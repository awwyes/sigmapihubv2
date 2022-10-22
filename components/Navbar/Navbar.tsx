import { useColorModeValue,  useColorMode, useDisclosure, chakra, Flex, HStack, IconButton, VStack,
   CloseButton, Button, VisuallyHidden, InputGroup, InputLeftElement, Input, Avatar, Box, Switch,
   Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, AvatarBadge } from "@chakra-ui/react";
import React from "react";
import { AiFillHome, AiOutlineInbox, AiOutlineSearch, AiFillBell, AiOutlineMenu } from 'react-icons/ai';
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { FaMoon } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import Logo from "./Logo";

export default function Navbar() {
  const bg = useColorModeValue("white", "gray.800");
  const { colorMode, toggleColorMode } = useColorMode();
  const mobileNav = useDisclosure();
    return (
      <React.Fragment>
        <chakra.header
          bg={bg}
          w="full"
          px={{
            base: 2,
            sm: 4,
          }}
          py={4}
          shadow="md"
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <HStack display="flex" spacing={3} alignItems="center">
              <Box
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
                <IconButton
                  display={{
                    base: "flex",
                    md: "none",
                  }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />
                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    justifySelf="self-start"
                    onClick={mobileNav.onClose}
                  />
                  <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                    Dashboard
                  </Button>
                  <Button
                    w="full"
                    variant="solid"
                    bgColor={useColorModeValue('purple.500', 'purple.500')}
                    color={useColorModeValue('white', 'white')}
                    leftIcon={<AiOutlineInbox />}
                  >
                    Inbox
                  </Button>
                  <Button
                    w="full"
                    variant="ghost"
                    leftIcon={<BsFillCameraVideoFill />}
                  >
                    Videos
                  </Button>
                </VStack>
              </Box>
              <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
              >
                <Logo />
                <VisuallyHidden>Choc</VisuallyHidden>
              </chakra.a>
  
              <HStack
                spacing={3}
                display={{
                  base: "none",
                  md: "inline-flex",
                }}
              >
                <Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
                  Dashboard
                </Button>
                <Button
                  variant="solid"
                  bgColor={useColorModeValue('purple.500', 'purple.500')}
                  leftIcon={<AiOutlineInbox />}
                  size="sm"
                >
                  Inbox
                </Button>
                <Button
                  variant="ghost"
                  leftIcon={<BsFillCameraVideoFill />}
                  size="sm"
                >
                  Videos
                </Button>
              </HStack>
            </HStack>
            <HStack
              spacing={3}
              display={mobileNav.isOpen ? "none" : "flex"}
              alignItems="center"
            >
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AiOutlineSearch />
                </InputLeftElement>
                <Input type="tel" placeholder="Search..." />
              </InputGroup>
  
              <chakra.a
                p={3}
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                rounded="sm"
                _hover={{
                  color: "gray.800",
                  _dark: {
                    color: "gray.600",
                  },
                }}
              >
                <AiFillBell />
                <VisuallyHidden>Notifications</VisuallyHidden>
              </chakra.a>

              <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                >
                  <AvatarBadge boxSize={'1.25em'} bg={'green.500'} />
                </Avatar>
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text inlineSize={'max-content'} fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuDivider />
              <MenuItem>Settings</MenuItem>
              <MenuItem>Language</MenuItem>
              <MenuItem><FaMoon />&nbsp;Dark Mode&nbsp;<Switch onChange={toggleColorMode} colorScheme={'purple'} isChecked={colorMode === 'light' ? false : true} /></MenuItem>
              <MenuDivider />
              <MenuItem>Log out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
            </HStack>
          </Flex>
        </chakra.header>
      </React.Fragment>
    );
}
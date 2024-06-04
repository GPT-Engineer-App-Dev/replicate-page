import { Box, Button, Container, Flex, HStack, IconButton, Input, Select, Table, Tbody, Td, Th, Thead, Tr, VStack, Text, Image } from "@chakra-ui/react";
import { FaBell, FaFilter, FaPlus, FaQuestionCircle, FaSort, FaUserCircle, FaEdit, FaTrash } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <HStack spacing={4}>
          <Image src="/images/project-logo.png" boxSize="40px" />
          <Box>
            <Text fontSize="xl" fontWeight="bold">Project Name</Text>
            <Text fontSize="sm" color="gray.500">Category</Text>
          </Box>
        </HStack>
        <HStack spacing={4}>
          <Input placeholder="Search" maxW="200px" />
          <Select placeholder="Category" maxW="150px">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </Select>
          <IconButton icon={<FaFilter />} aria-label="Filter" />
          <IconButton icon={<FaSort />} aria-label="Sort" />
          <Button leftIcon={<FaPlus />} colorScheme="blue">Add report</Button>
          <IconButton icon={<FaQuestionCircle />} aria-label="Help" />
          <IconButton icon={<FaBell />} aria-label="Notifications" />
          <Image src="/images/user-profile-icon.png" boxSize="40px" borderRadius="full" />
        </HStack>
      </Flex>
      <Flex>
        <Box w="200px" mr={4}>
          <VStack align="start" spacing={4}>
            <Button variant="link">Call Tool</Button>
            <Button variant="link">Invoice Tool</Button>
          </VStack>
        </Box>
        <Box flex="1">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th><Input type="checkbox" /></Th>
                <Th>ITEM</Th>
                <Th>VALUE ($)</Th>
                <Th>DATA</Th>
                <Th>DATA</Th>
                <Th>STATUS</Th>
                <Th>ACTION</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Array.from({ length: 10 }).map((_, index) => (
                <Tr key={index}>
                  <Td><Input type="checkbox" /></Td>
                  <Td>Lorem dolore</Td>
                  <Td>9,000</Td>
                  <Td>Data series</Td>
                  <Td>DD/MM/YY</Td>
                  <Td><Button size="sm">Status</Button></Td>
                  <Td>
                    <HStack spacing={2}>
                      <IconButton icon={<FaEdit />} aria-label="Edit" size="sm" />
                      <IconButton icon={<FaTrash />} aria-label="Delete" size="sm" />
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Flex justifyContent="space-between" alignItems="center" mt={4}>
            <Text>106 results</Text>
            <HStack spacing={2}>
              <Button size="sm">&lt;</Button>
              <Button size="sm">1</Button>
              <Button size="sm">2</Button>
              <Button size="sm">3</Button>
              <Button size="sm">4</Button>
              <Button size="sm">...</Button>
              <Button size="sm">10</Button>
              <Button size="sm">11</Button>
              <Button size="sm">&gt;</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
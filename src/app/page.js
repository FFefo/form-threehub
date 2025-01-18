"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select"


import {
  Box,
  Heading,
  Input,
  createListCollection,
  Link
} from "@chakra-ui/react"

export default function Home() {
  return (
    <Box
      bgImage="-webkit-linear-gradient( 136deg, rgb(149,153,226) 0%, rgb(139,198,236) 100%)"
      w="100%"
      h="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p="90px"
    >
      <Box
        display="flex"
      >

        <Box
          w="550px"
          h="730px"
          bgColor="white"
          color="#2271dd"
          display="flex"
          flexDirection="column"
          p="60px"
          borderTopLeftRadius="10px"
          borderBottomLeftRadius="10px"
          gap="30px"
        >
          <Heading
            size="2xl"
            fontFamily="Montserrat"
            marginBottom="15px"
            fontWeight="500"
          >
            General Information
          </Heading>

          <SelectRoot
            collection={titulos}
            size="xl"
            width="450px"
          >
            <SelectTrigger >
              <SelectValueText
                placeholder="Title"
                p="10px"
                color="#666"
                fontFamily="Montserrat"
              />
            </SelectTrigger>
            <SelectContent bgColor="white" borderRadius="0px">
              {titulos.items.map((title) => (
                <SelectItem
                  item={title}
                  key={title.value}
                  color="#666"
                  _hover={{ bgColor: "blue", color: "white" }}
                  paddingLeft="10px"

                >
                  {title.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>

          <Box
            display="flex"
            gap="25px"
          >

            <Input
              placeholder="First Name"
              _placeholder={{ color: "#666" }}
              variant="flushed"
              p="10px"
              paddingBottom="20px"
              borderColor="#666"
              fontFamily="Montserrat"
              fontSize="16px"
            >
            </Input>
            <Input
              placeholder="Last Name"
              _placeholder={{ color: "#666" }}
              variant="flushed"
              p="10px"
              borderColor="#666"
              fontFamily="Montserrat"
              fontSize="16px"
            >
            </Input>

          </Box>

          <SelectRoot
            collection={posicoes}
            size="xl"
            width="450px"
          >
            <SelectTrigger>
              <SelectValueText
                placeholder="Position"
                p="10px"
                color="#666"
                fontFamily="Montserrat"
              />
            </SelectTrigger>
            <SelectContent bgColor="white" borderRadius="0px">
              {posicoes.items.map((position) => (
                <SelectItem
                  item={position}
                  key={position.value}
                  color="#666"
                  _hover={{ bgColor: "blue", color: "white" }}
                  paddingLeft="10px"

                >
                  {position.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>

          <Input
            placeholder="Company"
            _placeholder={{ color: "#666" }}
            variant="flushed"
            p="10px"
            paddingBottom="20px"
            borderColor="#666"
            fontFamily="Montserrat"
            fontSize="16px"
          >
          </Input>

          <Box
            display="flex"
            gap="25px"
          >
            <Input
              placeholder="Business Area"
              _placeholder={{ color: "#666" }}
              variant="flushed"
              p="10px"
              paddingBottom="20px"
              borderColor="#666"
              fontFamily="Montserrat"
              fontSize="16px"
            >
            </Input>

            <SelectRoot collection={funcionarios} size="xl" width="450px">
              <SelectTrigger>
                <SelectValueText
                  placeholder="Employees"
                  p="10px"
                  color="#666"
                  fontFamily="Montserrat"
                />
              </SelectTrigger>
              <SelectContent bgColor="white" borderRadius="0px">
                {funcionarios.items.map((employees) => (
                  <SelectItem
                    item={employees}
                    key={employees.value}
                    color="#666"
                    _hover={{ bgColor: "blue", color: "white" }}
                    paddingLeft="10px"

                  >
                    {employees.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>

          </Box>

        </Box>

        <Box
          w="550px"
          h="730px"
          bgColor="#4835d4"
          display="flex"
          flexDirection="column"
          p="60px"
          borderTopRightRadius="10px"
          borderBottomRightRadius="10px"
          gap="30px"
        >

          <Heading
            size="2xl"
            fontFamily="Montserrat"
            marginBottom="15px"
            fontWeight="500"
          >
            Contact Details
          </Heading>

          <Input
            fontFamily="Montserrat"
            placeholder="Street + Nr"
            _placeholder={{ color: "#fff" }}
            variant="flushed"
            p="10px"
            paddingBottom="20px"
            borderColor="rgba(255, 255, 255, 0.3)"
            fontSize="16px"
          >
          </Input>
          <Input
            fontFamily="Montserrat"
            placeholder="Additional Information"
            _placeholder={{ color: "#fff" }}
            variant="flushed"
            p="10px"
            paddingBottom="20px"
            borderColor="rgba(255, 255, 255, 0.3)"
            fontSize="16px"
          >
          </Input>

          <Box
            display="flex"
            gap="25px"
          >
            <Input
              fontSize="16px"
              fontFamily="Montserrat"
              placeholder="Zip Code"
              _placeholder={{ color: "#fff" }}
              variant="flushed"
              p="10px"
              paddingBottom="20px"
              w="200px"
              borderColor="rgba(255, 255, 255, 0.3)"
            >
            </Input>

            <SelectRoot collection={lugares} size="xl" width="450px">
              <SelectTrigger>
                <SelectValueText placeholder="Place" p="10px" color="#fff" />
              </SelectTrigger>
              <SelectContent bgColor="#4835d4" borderRadius="0px">
                {lugares.items.map((place) => (
                  <SelectItem
                    item={place}
                    key={place.value}
                    color="#fff"
                    _hover={{ bgColor: "#1076C7", color: "white" }}
                    paddingLeft="10px"
                  >
                    {place.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          </Box>

          <SelectRoot collection={paises} size="xl" width="450px">
            <SelectTrigger>
              <SelectValueText placeholder="Country" p="10px" color="#fff" />
            </SelectTrigger>
            <SelectContent bgColor="#4835d4" borderRadius="0px">
              {paises.items.map((country) => (
                <SelectItem
                  item={country}
                  key={country.value}
                  color="#fff"
                  _hover={{ bgColor: "#1076C7", color: "white" }}
                  paddingLeft="10px"
                >
                  {country.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>

          <Box
            display="flex"
            gap="25px"
          >
            <Input
              fontFamily="Montserrat"
              placeholder="Code +"
              _placeholder={{ color: "#fff" }}
              variant="flushed"
              p="10px"
              paddingBottom="20px"
              borderColor="rgba(255, 255, 255, 0.3)"
              w="200px"
              fontSize="16px"
            >

            </Input>
            <Input
              fontFamily="Montserrat"
              placeholder="Phone Number"
              _placeholder={{ color: "#fff" }}
              variant="flushed"
              p="10px"
              paddingBottom="20px"
              borderColor="rgba(255, 255, 255, 0.3)"
              fontSize="16px"
            >
            </Input>
          </Box>

          <Input
            fontFamily="Montserrat"
            placeholder="Your Email"
            _placeholder={{ color: "#fff" }}
            variant="flushed"
            p="10px"
            paddingBottom="20px"
            borderColor="rgba(255, 255, 255, 0.3)"
            w="200px"
            fontSize="16px"
          >
          </Input>

          <Checkbox variant="outline">I do accept the <Link href="" textDecoration="underline">Terms and Conditions</Link> of your site</Checkbox>

          <Button
            w="180px"
            h="45px"
            borderRadius="30px"
            fontFamily="Montserrat"
            fontSize="14px"
            color="#333"
            fontWeight="700"
            marginTop="25px"
          >
            Register Badge
          </Button>

        </Box>
      </Box>
    </Box >
  );
}

const titulos = createListCollection({
  items: [
    { label: "Title", value: "title" },
    { label: "Businessman", value: "businessman" },
    { label: "Reporter", value: "reporter" },
    { label: "Secretary", value: "secretary" },
  ],
})

const posicoes = createListCollection({
  items: [
    { label: "Position", value: "position" },
    { label: "Director", value: "director" },
    { label: "Manager", value: "manager" },
    { label: "Employee", value: "employee" },
  ]
})

const funcionarios = createListCollection({
  items: [
    { label: "Employees", value: "employees" },
    { label: "Trainee", value: "trainee" },
    { label: "Colleague", value: "colleague" },
    { label: "Associate", value: "associate" },
  ],
})

const lugares = createListCollection({
  items: [
    { label: "Place", value: "place" },
    { label: "Street", value: "street" },
    { label: "District", value: "district" },
    { label: "City", value: "city" },
  ]
})

const paises = createListCollection({
  items: [
    { label: "Country", value: "country" },
    { label: "Vietnam", value: "vietnam" },
    { label: "Malaysia", value: "malaysia" },
    { label: "India", value: "india" },
  ]
})
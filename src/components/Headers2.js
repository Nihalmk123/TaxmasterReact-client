import {
  Avatar,
  AvatarGroup,
  Stack,
  AiOutlineUser,
  Box,
  Text,
  Icon,
  HStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { BellIcon } from "@chakra-ui/icons";
import { MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";
const Headers2 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <div className="container">
          <a className="navbar-brand fs-2 text-dark" href="/">
            Invoice Memo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <Stack direction="row" alignItems="center" spacing={2}>
                {/* Notification icon */}
                <Box position="relative">
                  <Icon
                    viewBox="0 0 200 200"
                    color="red.500"
                    boxSize={3}
                    position="absolute"
                    top={-0.99}
                    right={1.55}
                  >
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                  {/* Bell icon */}
                  <BellIcon boxSize={6} color="black" />
                </Box>

                {/* Settings icon */}
                <Icon as={MdSettings} fontSize="23px" />

                {/* Avatar and text */}
                    <Link to="/Signup" className="nav-link">
                    <Button colorScheme="teal" variant="outline">
                      Signup
                    </Button></Link>
                    <Link to="/Login" className="nav-link">
                    <Button colorScheme="teal" variant="solid">
                      Login
                    </Button></Link>
                   
                <Box bg="gray.300" borderRadius="3xl" p={2}>
                  <Stack direction="row" alignItems="center" spacing={3}>
                    <AvatarGroup spacing="2rem">
                      <Avatar bg="teal.500" boxSize={35} />
                    </AvatarGroup>
                    <Text fontSize="md" fontWeight="bold" mt={3}>
                      Mdnihal
                    </Text>
                  </Stack>
                </Box>
              </Stack>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Headers2;

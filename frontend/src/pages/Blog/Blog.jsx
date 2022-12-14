import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon, SearchIcon } from "@chakra-ui/icons";
import React from "react";
import styles from "./Blog.module.css";

// const recentPost = [
//   {
//     image:
//       "https://cronometer.com/blog/wp-content/uploads/2022/11/Blog-Img-DB.png",
//     text: "Mastering Diabetes with Cronometer",
//     date: "December 1, 2022",
//   },
//   {
//     image:
//       "https://cronometer.com/blog/wp-content/uploads/2022/09/cronometer-new-logo@2x.png",
//     text: "Our New Look: The Details Behind Cronometer’s Makeover",
//     date: "November 14, 2022",
//   },
//   {
//     image:
//       "https://cronometer.com/blog/wp-content/uploads/2022/06/Blog-Img-New-Improved.png",
//     text: "New & Improved: The Latest Cronometer Updates",
//     date: "November 14, 2022",
//   },
//   {
//     image:
//       "https://cronometer.com/blog/wp-content/uploads/2022/10/Blog-Img-Gummy-Bears.png",
//     text: "A Look Into Sugar-Free Sensitivities",
//     date: "October 27, 2022",
//   },
// ];

const Blog = () => {
  return (
    <>
      <Box className={styles.heading}>
        <Text
          textAlign={"center"}
          fontSize={["2xl", "4xl", "5xl"]}
          color={"white"}
          fontWeight={"extrabold"}
        >
          Cronometer Blog
        </Text>
        <Center
          textAlign={"center"}
          as="b"
          fontSize={["s", "m", "xl"]}
          color="white"
        >
          App Updates, Nutrition Tips & Inspiration
        </Center>
        <br />
        <Box
          w={["95%", "85%", "75%"]}
          display="flex"
          flexDirection={["column", "column", "row"]}
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          m={"auto"}
          p={"3%"}
          bg="white"
          borderRadius={"10px"}
          gap={"10%"}
        >
          <VStack w={["90%", "85%%", "45%"]}>
            <Heading>Eat Smater.</Heading>
            <Heading>Live Better.</Heading>
            <Text>
              Get to know the eating habits that make your body thrive. The
              Cronometer app lets you easily track your nutrition, helping you
              to live a healthier, happier life.
            </Text>
            <Button colorScheme="green">GET STARTED</Button>
          </VStack>
          <Box
            w={["95%", "95%", "60%"]}
            m="auto"
            marginTop={["20px", "20px", "0px"]}
          >
            <AspectRatio ratio={5 / 3}>
              <iframe
                style={{ borderRadius: "10px" }}
                src="https://www.youtube.com/embed/R49fLnhMhIE"
                title="Cronometer | Eat Smarter. Live Better."
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </AspectRatio>
          </Box>
        </Box>

        <Text as="b">RECENT POSTS</Text>

        <Grid
          w={["90%", "85%", "75%"]}
          m="auto"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
        >
          <GridItem className={styles.gridItems}>
            <Image
              h={"150px"}
              w={"100%"}
              borderRadius={"10px"}
              src="https://cronometer.com/blog/wp-content/uploads/2022/11/Blog-Img-DB.png"
            />
            <Text fontSize={["m", "xl", "2xl"]} fontWeight={"extrabold"}>
              Mastering Diabetes with Cronometer
            </Text>
            <Text>December 1, 2022</Text>
          </GridItem>

          <GridItem className={styles.gridItems}>
            <Image
              h={"150px"}
              w={"100%"}
              borderRadius={"10px"}
              src="https://cronometer.com/blog/wp-content/uploads/2022/09/cronometer-new-logo@2x.png"
            />
            <Text fontSize={["m", "xl", "2xl"]} fontWeight={"extrabold"}>
              Our New Look: The Details Behind Cronometer’s Makeover
            </Text>
            <Text>November 14, 2022</Text>
          </GridItem>

          <GridItem className={styles.gridItems}>
            <Image
              h={"150px"}
              w={"100%"}
              borderRadius={"10px"}
              src="https://cronometer.com/blog/wp-content/uploads/2022/06/Blog-Img-New-Improved.png"
            />
            <Text fontSize={["m", "xl", "2xl"]} fontWeight={"extrabold"}>
              New & Improved: The Latest Cronometer Updates
            </Text>
            <Text>November 14, 2022</Text>
          </GridItem>

          <GridItem className={styles.gridItems}>
            <Image
              h={"150px"}
              w={"100%"}
              borderRadius={"10px"}
              src="https://cronometer.com/blog/wp-content/uploads/2022/10/Blog-Img-Gummy-Bears.png"
            />
            <Text fontSize={["m", "xl", "2xl"]} fontWeight={"extrabold"}>
              A Look Into Sugar-Free Sensitivities
            </Text>
            <Text>October 27, 2022</Text>
          </GridItem>
        </Grid>
        <br />
        <Box w="75%" m="auto">
          <Button rightIcon={<ArrowForwardIcon />}>VIEW MORE</Button>
        </Box>
        <br />
        <br />
      </Box>

      <Box bg={"#f0f2fa"} m={"auto"} padding={"40px 0px"}>
        <Heading textAlign={"center"}>Blog Archives</Heading>
        <br />
        <Box
          display={"flex"}
          flexDirection={["column", "column", "row"]}
          w={"60%"}
          m={"auto"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text as={"b"} fontSize={["m", "l", "xl"]}>
            NUTRITION
          </Text>
          <Text as={"b"} fontSize={["m", "l", "xl"]}>
            FITNESS
          </Text>
          <Text as={"b"} fontSize={["m", "l", "xl"]}>
            FEATURES
          </Text>
          <Text as={"b"} fontSize={["m", "l", "xl"]}>
            RECIPES
          </Text>
          <Text as={"b"} fontSize={["m", "l", "xl"]}>
            APP UPDATES
          </Text>
        </Box>
        <br />
        <InputGroup w={"75%"} m={"auto"}>
          <Input bg={"white"} type="text" placeholder="Search Blog posts..." />
          <InputRightElement
            // pointerEvents="none"
            bg={"#ff6733"}
            borderRadius={"5px"}
            children={<SearchIcon color="white" />}
          />
        </InputGroup>
      </Box>

      <Box padding={"100px 0px"}>
        <Flex w={["95%", "85%", "70%"]} m={"auto"} gap={"20%"}>
          <Box W={["55%", "55%", "35%"]}>
            <Text>CRONO HACKS</Text>
            <Text fontSize={["xl", "2xl", "4xl"]} fontWeight={"bold"}>
              Cronometer Tips & Tricks
            </Text>
            <Text fontSize={["s", "m", "l"]}>
              Whether you’re a new or longtime user, here are some helpful tips
              to make the most of your nutrition tracking.
            </Text>
            <br />
            <Button bg={"#ff6733"} color="white">
              GET THIS TIPS
            </Button>
          </Box>
          <Box w={["45%", "45%", "45%"]}>
            <Image
              w="100%"
              textAlign={"center"}
              src="https://cronometer.com/blog/wp-content/uploads/2022/11/tips-and-tricks-icon-2.png"
            />
          </Box>
        </Flex>
        <br />
        <Flex w={["95%", "85%", "70%"]} m={"auto"} gap={"20%"}>
          <Box w={["65%", "55%", "45%"]}>
            <Image
              w="100%"
              textAlign={"center"}
              src="	https://cronometer.com/blog/wp-content/uploads/2022/11/app-updates-icon-3-1536x1536.png"
            />
          </Box>
          <Box W={["35%", "45%", "35%"]}>
            <Text>APP UPDATES</Text>
            <Text fontSize={["xl", "2xl", "4xl"]} fontWeight={"bold"}>
              New & Improved: The Latest Updates
            </Text>
            <Text fontSize={["s", "m", "l"]}>
              Get up to date on all of the latest Cronometer updates, including
              cool new features like our Recipe Importer or Target Scheduler!
            </Text>
            <br />
            <Button bg={"#ff6733"} color="white">
              SEE WHAT'S NEW
            </Button>
          </Box>
        </Flex>
      </Box>

      <Box bg="#262a3b" padding={"50px 0px"}>
        <Flex
          w={["90%", "85%", "65%"]}
          m="auto"
          justifyContent={"space-between"}
        >
          <Box w={["70%", "60%", "40%"]}>
            <Text
              fontSize={["xl", "3xl", "5xl"]}
              color="white"
              fontWeight={"extrabold"}
            >
              Eat smarter. Live better.
            </Text>
            <Text color="white" fontSize={["m", "l", "xl"]} fontWeight="medium">
              Track your foods, exercise, and health data with the Cronometer
              app.
            </Text>
          </Box>
          <Box m="auto" w={["90%", "85%", "75%"]}>
            <Button
              fontSize={["m", "l", "xl"]}
              bg={"#44d07b"}
              p={["5px 10px", "10px 20px", "15px 35px"]}
            >
              Sign Up - It's Free
            </Button>
          </Box>
          <br />
        </Flex>
      </Box>

      <Box bg={"#f0f2fa"}>
        <Text>ON TREND</Text>
        <Heading textAlign={["center", "center", "left"]}>
          Popular Stories
        </Heading>
        <br />
        <Flex
          w={["90%", "85%", "75%"]}
          m="auto"
          gap={"4%"}
          justifyContent={"space-between"}
        >
          <Box
            borderRadius={"10px"}
            bg={"white"}
            w="48%"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            p="2%"
          >
            <Image
              height={["200px", "250px", "300px"]}
              borderRadius={"10px"}
              w="100%"
              src="https://cronometer.com/blog/wp-content/uploads/2022/04/Untitled-design-6.png"
            />
            <Text fontSize={["l", "xl", "xl"]} fontWeight={"extrabold"}>
              Dietitians Discuss Diet And Eczema
            </Text>
            <Text>April 27, 2022</Text>
          </Box>
          <Box
            borderRadius={"10px"}
            bg={"white"}
            w="48%"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            p="2%"
          >
            <Image
              height={["200px", "250px", "300px"]}
              borderRadius={"10px"}
              w="100%"
              src="https://cronometer.com/blog/wp-content/uploads/2022/04/IMG_7610-scaled.jpg"
            />
            <Text fontSize={["l", "xl", "xl"]} fontWeight={"extrabold"}>
              How Can Diet & Nutrition Affect Acne
            </Text>
            <Text>April 26, 2022</Text>
          </Box>
        </Flex>
        <br />
        <Box w={["90%", "85%", "75%"]} m="auto">
          <Button bg={"white"} rightIcon={<ArrowForwardIcon />}>
            VIEW MORE
          </Button>
        </Box>
        <br />
        <br />

        <Text as="b">APP UPDATES</Text>

        <Grid
          w={["90%", "85%", "75%"]}
          m="auto"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
        >
          <GridItem className={styles.gridItems}>
            <Image
              h={"150px"}
              w={"100%"}
              borderRadius={"10px"}
              src="https://cronometer.com/blog/wp-content/uploads/2022/11/Blog-Img-DB.png"
            />
            <Text fontSize={["m", "xl", "2xl"]} fontWeight={"extrabold"}>
              Mastering Diabetes with Cronometer
            </Text>
            <Text>December 1, 2022</Text>
          </GridItem>

          <GridItem className={styles.gridItems}>
            <Image
              h={"150px"}
              w={"100%"}
              borderRadius={"10px"}
              src="https://cronometer.com/blog/wp-content/uploads/2022/09/cronometer-new-logo@2x.png"
            />
            <Text fontSize={["m", "xl", "2xl"]} fontWeight={"extrabold"}>
              Our New Look: The Details Behind Cronometer’s Makeover
            </Text>
            <Text>November 14, 2022</Text>
          </GridItem>

          <GridItem className={styles.gridItems}>
            <Image
              h={"150px"}
              w={"100%"}
              borderRadius={"10px"}
              src="https://cronometer.com/blog/wp-content/uploads/2022/06/Blog-Img-New-Improved.png"
            />
            <Text fontSize={["m", "xl", "2xl"]} fontWeight={"extrabold"}>
              New & Improved: The Latest Cronometer Updates
            </Text>
            <Text>November 14, 2022</Text>
          </GridItem>

          <GridItem className={styles.gridItems}>
            <Image
              h={"150px"}
              w={"100%"}
              borderRadius={"10px"}
              src="https://cronometer.com/blog/wp-content/uploads/2022/10/Blog-Img-Gummy-Bears.png"
            />
            <Text fontSize={["m", "xl", "2xl"]} fontWeight={"extrabold"}>
              A Look Into Sugar-Free Sensitivities
            </Text>
            <Text>October 27, 2022</Text>
          </GridItem>
        </Grid>
        <br />
        <Box w={["90%", "85%", "75%"]} m="auto">
          <Button bg="white" rightIcon={<ArrowForwardIcon />}>
            VIEW MORE
          </Button>
        </Box>
        <br />
        <br />

        <Text>COMMUNITY</Text>
        <Heading textAlign={["center", "center", "left"]}>
          Popular Stories
        </Heading>
        <br />
        <Flex
          w={["90%", "85%", "75%"]}
          m="auto"
          gap={"4%"}
          justifyContent={"space-between"}
        >
          <Box
            borderRadius={"10px"}
            bg={"white"}
            w="48%"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            p="2%"
          >
            <Image
              height={["200px", "250px", "300px"]}
              borderRadius={"10px"}
              w="100%"
              src="https://cronometer.com/blog/wp-content/uploads/2022/04/Untitled-design-6.png"
            />
            <Text fontSize={["l", "xl", "xl"]} fontWeight={"extrabold"}>
              Dietitians Discuss Diet And Eczema
            </Text>
            <Text>April 27, 2022</Text>
          </Box>
          <Box
            borderRadius={"10px"}
            bg={"white"}
            w="48%"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            p="2%"
          >
            <Image
              height={["200px", "250px", "300px"]}
              borderRadius={"10px"}
              w="100%"
              src="https://cronometer.com/blog/wp-content/uploads/2022/04/IMG_7610-scaled.jpg"
            />
            <Text fontSize={["l", "xl", "xl"]} fontWeight={"extrabold"}>
              How Can Diet & Nutrition Affect Acne
            </Text>
            <Text>April 26, 2022</Text>
          </Box>
        </Flex>
        <br />
        <Box w={["90%", "85%", "75%"]} m="auto">
          <Button bg={"white"} rightIcon={<ArrowForwardIcon />}>
            VIEW MORE
          </Button>
        </Box>
      </Box>

      <Box>
        <Flex w="75%" m="auto" gap="8%" justifyContent={"space-between"}>
          <Flex w="46%" flexDirection={"column"} justifyContent="center">
            <Heading>
              Track your food, exercise and health metrics with the Cronometer
              app.
            </Heading>
            <br />
            <Button w="30%" fontSize={"xl"} color="white" bg="#ff6733">
              SIGN UP
            </Button>
          </Flex>
          <Box w="46%">
            <Image
              w="70%"
              src="https://cronometer.com/blog/wp-content/uploads/2022/11/crono-app.png"
            />
          </Box>
        </Flex>
      </Box>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Blog;

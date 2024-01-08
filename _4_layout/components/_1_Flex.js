import Box from './Box'

export default function Flex(){
    return (
        <>
            <Box style={{backgroundColor: "cyan", flex: 1}}>Box 1</Box>
            <Box style={{backgroundColor: "violet", flex: 3}}>Box 2</Box>
            <Box style={{backgroundColor: "yellow", flex: 1}}>Box 3</Box>
            <Box style={{backgroundColor: "lightgreen"}}>Box 4</Box>
            <Box style={{backgroundColor: "lightblue"}}>Box 5</Box>
            <Box style={{backgroundColor: "grey"}}>Box 6</Box>
            <Box style={{backgroundColor: "pink"}}>Box 7</Box>
        </>
    );
}
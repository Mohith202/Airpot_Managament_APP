import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heading, View, Flex, Text, Tabs, TabList, Item, TabPanels, ActionButton, Dialog, DialogTrigger, Content, ButtonGroup, Button, TextField } from '@adobe/react-spectrum';
import { Picker, Section, Switch, Breadcrumbs } from '@adobe/react-spectrum';

import airportsData from '../data/airports.json';
import More from "../utility/Image/More.png";
import Image from "../utility/Image/Image.png";
import Upload from "../utility/Image/Share.png";
import BinIcon from "../utility/Image/DeleteDelete.png"

const AirportDetail = () => {
    const { id } = useParams();
    const [airport, setAirport] = useState(null);
    const [selectedTerminal, setSelectedTerminal] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const airportData = airportsData.find(airport => airport.id === parseInt(id));
        setAirport(airportData);
    }, [id]);

    const handleSave = () => {
        alert("Saved");
        console.log('Services saved:');
    };

    const handleTerminalClick = (terminal) => {
        setSelectedTerminal(terminal);
    };

    const handleAddTerminal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    if (!airport) {
        return <div>Airport not found</div>;
    }

    return (
        <View padding="size-200">
            <Breadcrumbs>
                <Item key="airports">Airports</Item>
                <Item key="airport">{airport.name}</Item>
            </Breadcrumbs>
            <Heading level={1}>{airport.name}</Heading>
            <Tabs aria-label="Airport Details Tabs">
                <TabList>
                    <Item key="terminals">Terminals</Item>
                    <Item key="transport">Transport</Item>
                    <Item key="contact">Contact details</Item>
                </TabList>
                <TabPanels>
                    <Item key="terminals">
                        <Flex direction="row" gap="size-200" wrap>
                            {airport.terminals.data.map(terminal => (
                                <View key={terminal.id} UNSAFE_style={{ border: "2px", borderColor: "#E6E6E6", borderStyle: "solid", borderadius: "4px" }} width="280px" height="104px" marginTop="30px">
                                    <Flex direction="row" alignItems="center" >
                                        <img src={Image} alt="Terminal" style={{ width: '104px', height: '104px', objectFit: 'cover', margin: '0px', padding: '0px' }} />
                                        <Flex direction="column" marginStart="size-200" width="100%">
                                            <Flex direction="row" justifyContent="space-between" alignContent="Center" width="128px" height="18px" >
                                                <Heading level={3} UNSAFE_style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', margin: '0px' }}>{terminal.name}</Heading>
                                                <img src={More} alt="" style={{ width: '18px', height: '18px', objectFit: 'cover', alignItems: "centre" }} />
                                            </Flex>
                                            <Text style={{ fontSize: "14px" }}>{terminal.metadata}</Text>
                                        </Flex>
                                    </Flex>
                                </View>
                            ))}
                            <DialogTrigger isOpen={isModalOpen} onOpenChange={setIsModalOpen}>
                                <ActionButton marginStart="size-200" marginLeft="30px" marginTop="65px" UNSAFE_style={{ border: '2px solid black', borderRadius: "50px", width: '140px', height: '32px', padding: '6px 7px 7px 7px', color: '#222222', fontWeight: '600', fontSize: '14px', alignContent: 'center' }} onPress={handleAddTerminal}>+Add Terminal</ActionButton>
                                <Dialog width="464px" height={"212px"} UNSAFE_style={{ padding: '32px' }}>
                                    <Flex direction={"column"} width="400px" height={"170px"}  >

                                        <Heading>Terminal title  <hr /></Heading>

                                        <Content>
                                            <TextField label="Description" placeholder="Enter description" />
                                        </Content>
                                        <Flex direction={"row"} justifyContent={"space-between"} alignItems={"center"} width={"400px"} marginTop={"20px"} padding={"size-200"}>
                                            <Button variant="primary" UNSAFE_style={{ display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
                                                <img src={Upload} alt="Upload" style={{ width: '18px', height: '18px', objectFit: 'cover', marginRight: '10px' }} />
                                                Upload Image
                                            </Button>
                                            <Flex direction={"row"} gap={"size-200"}>
                                                <Button variant="secondary" onPress={handleCloseModal}>Cancel</Button>
                                                <Button variant="cta" onPress={handleCloseModal}>Continue</Button>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </Dialog>
                            </DialogTrigger>
                        </Flex>
                    </Item>
                    <Item key="transport">
                        <Text>Transport details go here.</Text>
                    </Item>
                    <Item key="contact">
                        <Text>Contact details go here.</Text>
                    </Item>
                </TabPanels>
            </Tabs>
            <Heading level={2}>Services</Heading>
            {airport.services.map(service => (
                <View key={service.name} marginBottom="size-200">
                    <Flex direction="row" justifyContent="space-between" alignItems="center">
                        <Heading level={3} UNSAFE_style={{ fontWeight: "400" }} >{"Lost & found"}</Heading>
                        {isModalOpen && <img src={BinIcon} alt="Delete" style={{ width: '18px', height: '18px', cursor: 'pointer' }} />}
                    </Flex>
                    <hr />
                    <Flex direction="row" gap="size-200" alignItems="center" justifyContent="space-between" width="1350px">
                        <Flex direction="row" gap="size-200" alignItems="center">
                            <TextField label="Service Name" value={"Lost & found"} />
                            <Picker label="Category" selectedKey={Item.key}  >
                                <Item key="Option 1">Option 1</Item>
                                <Item key="Option 2">Option 2</Item>
                            </Picker>
                            <Picker label="Sub Category" selectedKey={Item.key} >
                                <Item key="Option 1">Option 1</Item>
                                <Item key="Option 2">Option 2</Item>
                            </Picker>
                            <Button variant="primary" marginTop={"20px"} > <img src={Upload} alt="|" style={{ width: "18px", height: "18px", objectFit: "cover", margin: "Size-200", marginRight: "10px" }} /> Upload Image</Button>
                            <Switch isSelected={false} marginTop={"20px"} >Show image</Switch>
                        </Flex>
                        <Button variant="cta" onPress={handleSave} UNSAFE_style={{ backgroundColor: 'black', color: 'white', marginTop: '20px', opacity: 0.9 }}>Save</Button>
                    </Flex>
                    <TextField label="Description" value={"type here"} defaultValue='Type Here' />
                </View>
            ))}

            <Flex direction="row" justifyContent="space-between" alignItems="center">
                <Heading level={3} UNSAFE_style={{ fontWeight: "400" }}>Lounge</Heading>
                {isModalOpen && <img src={BinIcon} alt="Delete" style={{ width: '18px', height: '18px', cursor: 'pointer' }} />}
            </Flex>
            <hr />

            <Flex direction="row" justifyContent="space-between" alignItems="center">
                <Heading level={3} UNSAFE_style={{ fontWeight: "400" }}>Money Exchange</Heading>
                {isModalOpen && <img src={BinIcon} alt="Delete" style={{ width: '18px', height: '18px', cursor: 'pointer' }} />}
            </Flex>
            <hr />
        </View>
    );
};

export default AirportDetail;



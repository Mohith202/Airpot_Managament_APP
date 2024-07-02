import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Heading, View, TableView, TableHeader, Column, TableBody, Row, Cell, Button, TextField, DialogTrigger, Dialog, Content, Form, ActionButton, Checkbox } from '@adobe/react-spectrum';
import Edit from "../utility/Image/EditEdit.png";
import Delete from "../utility/Image/DeleteDelete.png";
import airportsData from '../data/airports.json';
import './MainContent.css';

function MainContent() {
    const [airports, setAirports] = useState([]);
    const [selectedAirport, setSelectedAirport] = useState(null);
    const [formState, setFormState] = useState({ name: '', country: '', code: '', terminals: { count: 0, data: [] } });
    const [selectedAirports, setSelectedAirports] = useState(new Set());
    const navigate = useNavigate();

    useEffect(() => {
        setAirports(airportsData);
    }, []);

    const handleAdd = () => {
        const newAirport = { id: Date.now(), ...formState };
        setAirports([...airports, newAirport]);
        setFormState({ name: '', country: '', code: '', terminals: { count: 0, data: [] } });
    };

    const handleUpdate = () => {
        setAirports(airports.map(airport => airport.id === selectedAirport.id ? { ...formState, id: selectedAirport.id } : airport));
        setSelectedAirport(null);
        setFormState({ name: '', country: '', code: '', terminals: { count: 0, data: [] } });
    };

    const handleDelete = (id) => {
        setAirports(airports.filter(airport => airport.id !== id));
    };

    const handleEdit = (airport) => {
        navigate(`/airport/${airport.id}`);
    };

    const handleSelectAll = (isSelected) => {
        if (isSelected) {
            setSelectedAirports(new Set(airports.map(airport => airport.id)));
        } else {
            setSelectedAirports(new Set());
        }
    };

    const handleSelect = (id) => {
        const newSelectedAirports = new Set(selectedAirports);
        if (newSelectedAirports.has(id)) {
            newSelectedAirports.delete(id);
        } else {
            newSelectedAirports.add(id);
        }
        setSelectedAirports(newSelectedAirports);
    };

    const handleDeleteSelected = () => {
        setAirports(airports.filter(airport => !selectedAirports.has(airport.id)));
        setSelectedAirports(new Set());
    };

    return (
        <View padding="size-200" flex="1">
            <Flex justifyContent="space-between" alignItems="center">
                <Heading level={2}>Airports</Heading>
                <DialogTrigger>
                    <ActionButton variant="cta" UNSAFE_className="add-new-button">+ Add new</ActionButton>
                    {(close) => (
                        <Dialog>
                            <Heading>Add New Airport</Heading>
                            <Content>
                                <Form>
                                    <TextField label="Name" value={formState.name} onChange={(value) => setFormState({ ...formState, name: value })} />
                                    <TextField label="Country" value={formState.country} onChange={(value) => setFormState({ ...formState, country: value })} />
                                    <TextField label="Code" value={formState.code} onChange={(value) => setFormState({ ...formState, code: value })} />
                                    <TextField label="Terminals Count" value={formState.terminals.count} onChange={(value) => setFormState({ ...formState, terminals: { ...formState.terminals, count: value } })} />
                                    <Button variant="cta" onPress={() => { handleAdd(); close(); }}>
                                        Add
                                    </Button>
                                </Form>
                            </Content>
                        </Dialog>
                    )}
                </DialogTrigger>
                
            </Flex>

            <Flex direction={"row"}>
            <TableView aria-label="Airports Table" UNSAFE_className="custom-grid-table" maxWidth={1250}  selectionMode="multiple" >
                <TableHeader>
                    
                    <Column allowsResizing maxwidth={700}>All Airports</Column>
                    <Column width={161}>Country</Column>
                    <Column width={95}>Code</Column>
                    <Column align='end' width={105}>Terminals</Column>
                </TableHeader>
                <TableBody>
                    {airports.map(airport => (
                        <Row key={airport.id}>
                             <Cell>{airport.name}</Cell>
                            <Cell>{airport.country}</Cell>
                            <Cell>{airport.code}</Cell>
                            <Cell>{airport.terminals.count}</Cell>
                        </Row>
                    ))}
                </TableBody>
            </TableView>
            <div style={{justifyContent:"center", alignItems:"center", marginTop:"30px"}}>
            {airports.map(airport => (
                <Flex justifyContent="center" alignItems="center" margin="10px">
            <ActionButton isQuiet onPress={() => handleEdit(airport)}>
                                    <img src={Edit} alt="Edit" />
                                </ActionButton>
                                <ActionButton isQuiet onPress={() => handleDelete(airport.id)}>
                                    <img src={Delete} alt="Delete" />
                                </ActionButton>
                </Flex>
            ))}
            </div>
            </Flex>
        </View>
    );
}

export default MainContent;

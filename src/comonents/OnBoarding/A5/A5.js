import React from 'react';
import Card from './Card'
import '../styles/A5.scss'

const ClientOptions=[{value:'React Js',label:'React Js'},{value:'Vue',label:'Vue'},{value:'Vanilla Js',label:'Vanilla Js'},{value:'Gatsby Js',label:'Gatsby Js'}]
const BackendOptions=[{value:'Django',label:'Django'},{value:'Node',label:'Node'},{value:'Laravel',label:'Laravel'},{value:'PHP',label:'PHP'}]
const DatabaseOptions=[{value:'PostgreSQL',label:'PostgreSQL'},{value:'SqlLite',label:'SqlLite'},{value:'MongoDB',label:'MongoDB'},{value:'MySql',label:'MySql'}]
const ServicesOptions=[{value:'Jira',label:'Jira'},{value:'Git',label:'Git'},{value:'Github',label:'Github'},{value:'Gitbucket',label:'Gitbucket'}]

const A5 = ({transition,stack,setStack}) => {

    const [Client,setClient]=React.useState(null)
    const handleClientChange = (optionSelected) =>
    {
        setClient(optionSelected)
        let obj={Client:optionSelected.value}
        setStack({...stack,...obj})
    }

    const [Backend,setBackend]=React.useState(null)
    const handleBackendChange = (optionSelected) =>
    {
        setBackend(optionSelected)
        let obj={Backend:optionSelected.value}
        setStack({...stack,...obj})
    }

    const [Database,setDatabase]=React.useState(null)
    const handleDatabaseChange = (optionSelected) =>
    {
        setDatabase(optionSelected)
        let obj={Database:optionSelected.value}
        setStack({...stack,...obj})
    }

    const [Services,setServices]=React.useState(null)
    const handleServicesChange = (optionSelected) =>
    {
        setServices(optionSelected)
        let obj={Services:optionSelected.value}
        setStack({...stack,...obj})
    }

    React.useEffect(()=>{
        if(stack.Client!=='')
            setClient({value:stack.Client,label:stack.Client})
        if(stack.Backend!=='')
            setBackend({value:stack.Backend,label:stack.Backend})
        if(stack.Database!=='')
            setDatabase({value:stack.Database,label:stack.Database})
        if(stack.Services!=='')
            setServices({value:stack.Services,label:stack.Services})
    },[stack])


    return (
        <div className={`A5 ${transition}`}>
            <h2>What stack you choose on this project</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="A5-services">
                <Card title="Client Side Stack" val={Client} handleChange={handleClientChange} options={ClientOptions} />
                <Card title="Backend Stack" val={Backend} handleChange={handleBackendChange} options={BackendOptions} />
                <Card title="Database/Big Data" val={Database} handleChange={handleDatabaseChange} options={DatabaseOptions} />
                <Card title="Services" val={Services} handleChange={handleServicesChange} options={ServicesOptions} />
            </div>
        </div>
    );
};

export default A5;
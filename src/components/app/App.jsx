import { useState, useEffect } from 'react';
import { data } from '../../api';
import { pendingList, resolvedList } from '../../util';
import './App.scss';
import ListItem from '../listItem/ListItem';
import StatusBar from '../statusBar/StatusBar';

function App() {
    const [apiData, setApiData] = useState(null);

    console.log('apiData', apiData);
    console.log('pendingList', pendingList(apiData));
    console.log('resolvedList', resolvedList(apiData));

    useEffect(() => {
        setApiData(data);
    }, []);

    return (
        <div className='App'>
            <StatusBar status='進行中' />
            {apiData &&
                pendingList(apiData).map((item, index) => (
                    <ListItem key={index} item={item} isPending={true} />
                ))}

            <StatusBar status='已完成' />
            {apiData &&
                resolvedList(apiData).map((item, index) => (
                    <ListItem key={index} item={item} isPending={false} />
                ))}
        </div>
    );
}

export default App;

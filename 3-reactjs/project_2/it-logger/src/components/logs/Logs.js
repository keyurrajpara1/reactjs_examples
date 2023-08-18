import React, {useState, useEffect} from 'react'
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);

    /**
     * await fetch because fetch returns a promise
     * and we're going to fetch /logs
     * Remember we don't have to do localhost:5000 because we added a proxy.
     * Now, this doesn't return the data right away. It's not like axios here we have res.data
     * We actually have to format it as json like res.json();
     */

    const getLogs = async () => {
        setLoading(true);
        const res = await fetch('/logs');
        const data = await res.json();

        setLogs(data);
        setLoading(false);
    };

    if(loading){
        return <Preloader />
    }

  return (
    <ul className='collection with-header'>
        <li className='collection-header'>
            <h4 className='center'>System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (<p className='center'>No logs to show...</p>) : (
            logs.map(log => <LogItem log={log} key={log.id} />)
        )}
    </ul>
  )
}
export default Logs;
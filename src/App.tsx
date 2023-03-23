import { toast, Toast } from './components';

const App = () => {
    return (
        <div>
            <Toast />
            hello
            <button onClick={() => toast.success('hello')} />
        </div>
    );
};

export default App;

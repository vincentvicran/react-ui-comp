import { AiFillCodeSandboxCircle } from 'react-icons/ai';
import { FcFullTrash } from 'react-icons/fc';
import { Button, RippleButton } from './components';

const App = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4rem',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    // height: '600px',
                }}
            >
                <div>
                    <Button>default</Button>
                    <Button title="default" variant="contained" />
                    <Button title="default" variant="outlined" />
                    <Button
                        title="default"
                        variant="text"
                        leftIcon={<AiFillCodeSandboxCircle />}
                        rightIcon={<FcFullTrash />}
                    />
                </div>
                <div>
                    <RippleButton title="default" />
                    <RippleButton title="default" variant="contained" />
                    <RippleButton title="default" variant="outlined" />
                    <RippleButton title="default" variant="text" />
                </div>
                <div>
                    <Button title="primary" color="primary" />
                    <Button title="primary" color="primary" variant="contained" />
                    <Button title="primary" color="primary" variant="outlined" />
                    <Button title="primary" color="primary" variant="text" />
                </div>
                <div>
                    <RippleButton title="primary" color="primary" />
                    <RippleButton title="primary" color="primary" variant="contained" />
                    <RippleButton title="primary" color="primary" variant="outlined" />
                    <RippleButton title="primary" color="primary" variant="text" />
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'space-between',
                    flexDirection: 'column',
                    // height: '600px',
                }}
            >
                <div>
                    <Button disabled loading title="default" />
                    <Button disabled loading title="default" variant="contained" />
                    <Button disabled loading title="default" variant="outlined" />
                    <Button disabled loading title="default" variant="text" />
                </div>
                <div>
                    <RippleButton loading title="default" />
                    <RippleButton loading title="default" variant="contained" />
                    <RippleButton loading title="default" variant="outlined" />
                    <RippleButton loading title="default" variant="text" />
                </div>
                <div>
                    <Button disabled loading title="primary" color="primary" />
                    <Button disabled loading title="primary" color="primary" variant="contained" />
                    <Button disabled loading title="primary" color="primary" variant="outlined" />
                    <Button disabled loading title="primary" color="primary" variant="text" />
                </div>
                <div>
                    <RippleButton loading title="primary" color="primary" />
                    <RippleButton loading title="primary" color="primary" variant="contained" />
                    <RippleButton loading title="primary" color="primary" variant="outlined" />
                    <RippleButton loading title="primary" color="primary" variant="text" />
                </div>
            </div>
        </div>
    );
};

export default App;

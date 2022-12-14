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
                <div>
                    <Button title="secondary" color="secondary" />
                    <Button title="secondary" color="secondary" variant="contained" />
                    <Button title="secondary" color="secondary" variant="outlined" />
                    <Button title="secondary" color="secondary" variant="text" />
                </div>
                <div>
                    <RippleButton title="secondary" color="secondary" />
                    <RippleButton title="secondary" color="secondary" variant="contained" />
                    <RippleButton title="secondary" color="secondary" variant="outlined" />
                    <RippleButton title="secondary" color="secondary" variant="text" />
                </div>
                <div>
                    <Button title="success" color="success" />
                    <Button title="success" color="success" variant="contained" />
                    <Button title="success" color="success" variant="outlined" />
                    <Button title="success" color="success" variant="text" />
                </div>
                <div>
                    <RippleButton title="success" color="success" />
                    <RippleButton title="success" color="success" variant="contained" />
                    <RippleButton title="success" color="success" variant="outlined" />
                    <RippleButton title="success" color="success" variant="text" />
                </div>
                <div>
                    <Button title="warning" color="warning" />
                    <Button title="warning" color="warning" variant="contained" />
                    <Button title="warning" color="warning" variant="outlined" />
                    <Button title="warning" color="warning" variant="text" />
                </div>
                <div>
                    <RippleButton title="warning" color="warning" />
                    <RippleButton title="warning" color="warning" variant="contained" />
                    <RippleButton title="warning" color="warning" variant="outlined" />
                    <RippleButton title="warning" color="warning" variant="text" />
                </div>
                <div>
                    <Button title="error" color="error" />
                    <Button title="error" color="error" variant="contained" />
                    <Button title="error" color="error" variant="outlined" />
                    <Button title="error" color="error" variant="text" />
                </div>
                <div>
                    <RippleButton title="error" color="error" />
                    <RippleButton title="error" color="error" variant="contained" />
                    <RippleButton title="error" color="error" variant="outlined" />
                    <RippleButton title="error" color="error" variant="text" />
                </div>
                <div>
                    <Button title="info" color="info" />
                    <Button title="info" color="info" variant="contained" />
                    <Button title="info" color="info" variant="outlined" />
                    <Button title="info" color="info" variant="text" />
                </div>
                <div>
                    <RippleButton title="info" color="info" />
                    <RippleButton title="info" color="info" variant="contained" />
                    <RippleButton title="info" color="info" variant="outlined" />
                    <RippleButton title="info" color="info" variant="text" />
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
                <div>
                    <Button disabled loading title="secondary" color="secondary" />
                    <Button disabled loading title="secondary" color="secondary" variant="contained" />
                    <Button disabled loading title="secondary" color="secondary" variant="outlined" />
                    <Button disabled loading title="secondary" color="secondary" variant="text" />
                </div>
                <div>
                    <RippleButton loading title="secondary" color="secondary" />
                    <RippleButton loading title="secondary" color="secondary" variant="contained" />
                    <RippleButton loading title="secondary" color="secondary" variant="outlined" />
                    <RippleButton loading title="secondary" color="secondary" variant="text" />
                </div>
                <div>
                    <Button disabled loading title="success" color="success" />
                    <Button disabled loading title="success" color="success" variant="contained" />
                    <Button disabled loading title="success" color="success" variant="outlined" />
                    <Button disabled loading title="success" color="success" variant="text" />
                </div>
                <div>
                    <RippleButton loading title="success" color="success" />
                    <RippleButton loading title="success" color="success" variant="contained" />
                    <RippleButton loading title="success" color="success" variant="outlined" />
                    <RippleButton loading title="success" color="success" variant="text" />
                </div>
                <div>
                    <Button disabled loading title="warning" color="warning" />
                    <Button disabled loading title="warning" color="warning" variant="contained" />
                    <Button disabled loading title="warning" color="warning" variant="outlined" />
                    <Button disabled loading title="warning" color="warning" variant="text" />
                </div>
                <div>
                    <RippleButton loading title="warning" color="warning" />
                    <RippleButton loading title="warning" color="warning" variant="contained" />
                    <RippleButton loading title="warning" color="warning" variant="outlined" />
                    <RippleButton loading title="warning" color="warning" variant="text" />
                </div>
                <div>
                    <Button disabled loading title="error" color="error" />
                    <Button disabled loading title="error" color="error" variant="contained" />
                    <Button disabled loading title="error" color="error" variant="outlined" />
                    <Button disabled loading title="error" color="error" variant="text" />
                </div>
                <div>
                    <RippleButton loading title="error" color="error" />
                    <RippleButton loading title="error" color="error" variant="contained" />
                    <RippleButton loading title="error" color="error" variant="outlined" />
                    <RippleButton loading title="error" color="error" variant="text" />
                </div>
                <div>
                    <Button disabled loading title="info" color="info" />
                    <Button disabled loading title="info" color="info" variant="contained" />
                    <Button disabled loading title="info" color="info" variant="outlined" />
                    <Button disabled loading title="info" color="info" variant="text" />
                </div>
                <div>
                    <RippleButton loading title="info" color="info" />
                    <RippleButton loading title="info" color="info" variant="contained" />
                    <RippleButton loading title="info" color="info" variant="outlined" />
                    <RippleButton loading title="info" color="info" variant="text" />
                </div>
            </div>
        </div>
    );
};

export default App;

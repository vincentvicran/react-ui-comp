//need to import Toast component along with useToast hook
import { Toast, useToast } from './components/toast';

export default function App() {
    //destructuring useToast hook
    const { handler, toast } = useToast();

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {/* invoking the required type of toast function*/}
                <button style={{ padding: '5px', margin: '5px' }} onClick={() => toast.success('hello', 'hello')}>
                    Success
                </button>
                <button style={{ padding: '5px', margin: '5px' }} onClick={() => toast.error('oops')}>
                    Error
                </button>
                <button
                    style={{ padding: '5px', margin: '5px' }}
                    onClick={() =>
                        toast.warning(
                            `watchout serious warning very long message here... watchout serious warning very long message here... watchout serious warning very long message here... watchout serious warning very long message here... watchout serious warning very long message here...`
                        )
                    }
                >
                    Warning
                </button>
                <button
                    style={{ padding: '5px', margin: '5px' }}
                    onClick={() =>
                        toast.info(
                            'good toast this is some good toast hope this will change according to the height of the message on this container this is a bit congested'
                        )
                    }
                >
                    Info
                </button>
            </div>

            {/* passing props accordingly*/}
            <Toast {...handler} />
        </div>
    );
}

# Toast

React UI component that allows you to simply add toast (snack) for your notifications.

---

## Props

The available `props`, you can work with:

| Props                     | Type    | Description                                              | Default |
| ------------------------- | ------- | -------------------------------------------------------- | ------- |
| type _optional_           | string  | type of toast `['success', 'info', 'warning', 'error']`. | -       |
| timeout _optional_        | number  | number of milliseconds for a notification to dismiss.    | 5000    |
| style _optional_          | style   | style object for styling notification card.              | -       |
| closeIcon _optional_      | boolean | dictates the visibility of close icon                    | true    |
| dismissOnClick _optional_ | boolean | closes the toast on mouse click                          | true    |
| dark _optional_           | boolean | enables dark mode                                        | false   |

---

### toast

This object takes any specific funtion of the toast type suggested above, which accepts two arguments: `message` and `header`.
An object that invokes functions of respective type as:

```jsx
toast.success(message?: string, subMsg?: string);

//can be invoked like this
toast.success();
// here the toast is generated with default header `Success!`

//also takes message of type string
toast.success('hey, success!');

//and additionally takes sub-message of type string
toast.success('hey, success!', 'Success Custom Sub Message');
```

---

## Implementation

### Implement `Toast` component.

```tsx
//need to import Toast component
import { Toast, toast } from './components/toast';

export default function App() {
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

            {/* you can pass props accordingly*/}
            <Toast />
        </div>
    );
}
```

### Light Mode:

![Light Mode Toast](../../assets/images/light_toast.png 'Light Mode Toast')

### Dark Mode:

![Dark Mode Toast](../../assets/images/dark_toast.png 'Dark Mode Toast')
